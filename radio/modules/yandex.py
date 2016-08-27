#!/usr/bin/env python

import time
import requests
import hashlib


API_HOST = 'https://radio.yandex.ru/api/v2.1'
DEFAULT_HEADERS = {
    'X-Retpath-Y': '-',
}


def get_tracks_iteration(category, skip_tracks='', session_id=''):
    url = '/handlers/radio/%s/tracks?queue=%s&__t=%s' % (category, skip_tracks, time.time())
    headers = DEFAULT_HEADERS

    if session_id:
        headers['Cookie'] = 'Session_id=%s;' % session_id

    resp = requests.get(API_HOST + url, headers=headers)
    return resp.json()['tracks']


def get_mp3_url(track):

    url_stage1 = '/handlers/track/%s/-/download/m?__t=%s' % (track, time.time())
    resp_stage1 = requests.get(API_HOST + url_stage1, headers=DEFAULT_HEADERS)

    url_stage2 = resp_stage1.json()['src']
    resp_stage2 = requests.get(url_stage2 + '&format=json')

    data_stage3 = resp_stage2.json()
    hash_function = hashlib.md5()
    hash_salt = 'XGRlBW9FXlekgbPrRHuSiA'
    to_hash = hash_salt + data_stage3['path'][1:] + data_stage3['s']
    hash_function.update(to_hash)
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
