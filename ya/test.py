# 
import argparse
import requests
import hashlib
import redis
import json


redis_pool = redis.StrictRedis(host='localhost', port=6379, db=0)


def get_tracks(t, a):
    url = 'https://radio.yandex.ru/api/v2.1/handlers/radio/user/270453501/tracks?queue='+t+'&external-domain=radio.yandex.ru&overembed=yes&__t=1471895027894'
    # url = 'https://radio.yandex.ru/api/v2.1/handlers/radio/activity/sex/tracks?queue=&external-domain=radio.yandex.ru&overembed=no&__t=1471972711385'

    headers = {
        'X-Retpath-Y': 'https%3A%2F%2Fradio.yandex.ru%2Fuser%2Fdebeet',
        'Cookie': 'Session_id=3:1471894969.5.0.1471894969000:pTlVXQ:7.0|270453501.0.2|150473.530762.1IhADD41jFbmOrgWIze1n1UUlH8; '
    }
    urlStarted1 = 'https://radio.yandex.ru/api/v2.1/handlers/radio/user/270453501/feedback/trackStarted/'+t+':'+a+'?__t=1471960414569'
    urlSkipped = 'https://radio.yandex.ru/api/v2.1/handlers/radio/user/270453501/feedback/skip/'+t+':'+a+'?__t=1471981471508'
    dataStarted = 'timestamp=1471977007123&from=radio-web-activity-sex-direct&batchId=ae66af70e139ab450ad0ae09c2146d94.1&trackId='+t+'&albumId='+a+'&totalPlayed=0.1&sign=4b870b02f66b4564e9dc60e3fd4fbf850f5677c3%3A1471975636356&external-domain=radio.yandex.ru&overembed=no'
    dataSkipped = 'timestamp=1471981471367&from=radio-web-user-270453501-direct&batchId=77808590f5540c55b89c6c7e94d2ce5e.1&trackId='+t+'&albumId='+a+'&totalPlayed=18.06512471655329&sign=014adbc10c6f0beacd039cff7e7ca8ba91da00f3%3A1471978834800&external-domain=radio.yandex.ru&overembed=no'
    print requests.post(urlStarted1, headers=headers, data=dataStarted).text
    print requests.post(urlSkipped, headers=headers, data=dataSkipped).text

    r = requests.get(url, headers=headers)
    # print r.json()
    return r.json()['tracks']


def get_mp3_url(track):

    url = 'https://radio.yandex.ru/api/v2.1/handlers/track/' + track + '/radio-web-user-270453501-direct/download/m/sy/net/match_r1103.html?__t=1471374568089'
    headers = {'X-Retpath-Y': 'https%3A%2F%2Fradio.yandex.ru%2Fuser%2Fdebeet'}
    r = requests.get(url, headers=headers, timeout=3)
    # print r.json()
    url2 = r.json()['src']

    # print url2
    r = requests.get(url2 + '&format=json', timeout=3)
    stage2 = r.json()

    m = hashlib.md5()
    to_hash = 'XGRlBW9FXlekgbPrRHuSiA' + stage2['path'][1:] + stage2['s']
    m.update(to_hash)
    hashsum = m.hexdigest()
    url3 = 'https://%s/get-mp3/%s/%s%s' % (stage2['host'], hashsum, stage2['ts'], stage2['path'])

    return url3


def print_track(track):
    if track['type'] != 'track':
        return
    print 'id: %s \t name: %s \t\t\t artist: %s, album: %s' % (
        track['track']['id'],
        track['track']['title'],
        track['track']['artists'][0]['name'],
        track['track']['albums'][0]['id'],
    )


def store_track(track):
    if track['type'] != 'track':
        return
    key = track['track']['id']
    value = {
        'name': track['track']['title'],
        'artist': track['track']['artists'][0]['name'],
        'album': track['track']['albums'][0]['id']
    }
    redis_pool.set(key, json.dumps(value))
    print 'stored: %s' % json.loads(redis_pool.get(key))


def get_latest():
    pt = ''
    pa = ''
    for i in range(0, 10000):
        tracks = get_tracks(pt, pa)
        # for track in tracks:
        #     print_track(track)
        track = tracks[-1]
        if track['type'] == 'track':
            print_track(track)
            store_track(track)
            pt = str(track['track']['id'])
            pa = str(track['track']['albums'][0]['id'])


if __name__ == '__main__':
    get_latest()
