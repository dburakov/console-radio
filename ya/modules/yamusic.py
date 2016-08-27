#
import time
import requests
import hashlib


def get_tracks_iter(category, qname=''):
    ts = time.time()
    # url = 'https://radio.yandex.ru/api/v2.1/handlers/radio/user/270453501/tracks?queue='+qname+'&external-domain=radio.yandex.ru&overembed=yes&__t=1471895027894'
    url = 'https://radio.yandex.ru/api/v2.1/handlers/radio/'+category+'/tracks?queue='+qname+'&external-domain=radio.yandex.ru&overembed=no&__t=' + str(ts)

    headers = {
        'X-Retpath-Y': '-',
        # 'Cookie': 'Session_id=3:1472313987.5.0.1472313963000:YS5VXQ:41.0|270453501.24.2.2:24|150707.721938.Y0a_8wRdhS1stARnY1ABTqFZfrk; '
    }

    r = requests.get(url, headers=headers)
    return r.json()['tracks']


def get_mp3_url(track):

    url = 'https://radio.yandex.ru/api/v2.1/handlers/track/' + track + '/radio-web-activity-direct/download/m?hq=0&external-domain=radio.yandex.ru&overembed=no&__t=1472309630661'
    headers = {'X-Retpath-Y': '-'}
    r = requests.get(url, headers=headers, timeout=3)
    url2 = r.json()['src']

    r = requests.get(url2 + '&format=json', timeout=3)
    stage2 = r.json()

    m = hashlib.md5()
    to_hash = 'XGRlBW9FXlekgbPrRHuSiA' + stage2['path'][1:] + stage2['s']
    m.update(to_hash)
    hashsum = m.hexdigest()
    url3 = 'https://%s/get-mp3/%s/%s%s' % (stage2['host'], hashsum, stage2['ts'], stage2['path'])

    return url3


def get_tracks_list(category='activity__wake-up', limit=10):
    MAX_REQUESTS = 68
    q = []
    num_done = 0
    for i in range(0, MAX_REQUESTS):
        qtext = ','.join(q)
        print qtext
        tracks = get_tracks_iter(category.replace('__', '/'), qtext)
        for item in tracks:
            if item['type'] == 'track':
                track = item['track']
                num_done += 1
                # print 'added to queue: %s' % str(track['track']['id']) + ':' + str(track['track']['albums'][0]['id'])
                q.append(str(track['id']) + ':' + str(track['albums'][0]['id']))
                # print_track(track)
                # print get_mp3_url(track['track']['id'])
                yield track
                if num_done >= limit:
                    return
