#!/usr/bin/env python

from __future__ import print_function
import os
import shutil
import time
import hashlib
import json
import argparse

try:
    from urllib.request import Request, urlopen  # PY3
except:
    from urllib2 import Request, urlopen  # PY2
    

API_HOST = 'https://radio.yandex.ru/api/v2.1'
DEFAULT_HEADERS = {
    'X-Retpath-Y': '-',
}


def http_get(url, headers=None):
    req = Request(url)
    if headers:
        for header_name, header_val in headers.items():
            req.add_header(header_name, header_val)
    resp = urlopen(req)
    content = resp.read()
    return content


def get_file_name(track):
    if not isinstance(track, dict):
        return ''

    return '%s - %s.mp3' % (track['artists'][0]['name'], track['title'])


def get_local_path(category, track):
    category_alias = category.split('__', 1)[1]
    return os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        'downloads/%s/%s' % (category_alias, get_file_name(track))
    )


def exists_local(check_file):
    return os.path.isfile(check_file)


def download_track(file_url, file_name):
    directory = os.path.dirname(file_name)
    if not os.path.exists(directory):
        os.makedirs(directory)

    response = http_get(file_url)
    with open(file_name, 'wb') as out_file:
        out_file.write(response)

    del response


def get_tracks_iteration(category, skip_tracks='', session_id=''):
    url = '/handlers/radio/%s/tracks?queue=%s&__t=%s' % (category, skip_tracks, time.time())
    headers = DEFAULT_HEADERS

    if session_id:
        headers['Cookie'] = 'Session_id=%s;' % session_id

    resp = http_get(API_HOST + url, headers=headers)
    return json.loads(resp)['tracks']


def get_mp3_url(track):

    url_stage1 = '/handlers/track/%s/-/download/m?__t=%s' % (track, time.time())
    resp_stage1 = http_get(API_HOST + url_stage1, headers=DEFAULT_HEADERS)

    url_stage2 = json.loads(resp_stage1)['src']
    resp_stage2 = http_get(url_stage2 + '&format=json')

    data_stage3 = json.loads(resp_stage2)
    hash_function = hashlib.md5()
    hash_salt = 'XGRlBW9FXlekgbPrRHuSiA'
    to_hash = hash_salt + data_stage3['path'][1:] + data_stage3['s']
    hash_function.update(to_hash.encode('utf-8'))
    hash_sum = hash_function.hexdigest()
    result_url = 'https://%s/get-mp3/%s/%s%s' % (data_stage3['host'], hash_sum, data_stage3['ts'], data_stage3['path'])

    return result_url


def get_tracks_iterator(category='activity__wake-up', limit=10, sid=''):
    MAX_REQUESTS = 68  # TODO: fix it
    skip_tracks = []
    num_done = 0

    for i in range(0, MAX_REQUESTS):
        tracks = get_tracks_iteration(category.replace('__', '/'), ','.join(skip_tracks), sid)

        for item in tracks:
            if item['type'] == 'track':
                track = item['track']
                num_done += 1
                skip_tracks.append('%s:%s' % (track['id'], track['albums'][0]['id']))

                yield track
                if num_done >= limit:
                    return


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Yandex Radio command line tool')
    parser.add_argument('-c', '--category', default='activity__wake-up', help='Category of radio')
    parser.add_argument('-s', '--sid', default='', help='User session ID (for personal categories only)')
    parser.add_argument('-n', '--total_num', default=10, type=int, help='Number of tracks to download')
    args = parser.parse_args()

    current_num = 0
    print('Preparing %d tracks of category "%s"' % (args.total_num, args.category))
    print('Saving to %s' % get_local_path('__<CATEGORY>', '<TRACK>'))

    try:
        for track in get_tracks_iterator(args.category, args.total_num, args.sid):
            current_num += 1
            print('Found track %d/%d (%s)' % (current_num, args.total_num, get_file_name(track)))
            local_path = get_local_path(args.category, track)

            if not exists_local(local_path):
                print('Downloading track...')
                url = get_mp3_url(track['id'])
                download_track(url, local_path)
    except KeyboardInterrupt:
        print('Terminating...')
