# 
import argparse
import requests
import hashlib


def get_mp3_url(track):

    url = 'https://radio.yandex.ru/api/v2.1/handlers/track/' + track + '/radio-web-user-270453501-direct/download/m/sy/net/match_r1103.html?__t=1471374568089'
    headers = {'X-Retpath-Y': 'https%3A%2F%2Fradio.yandex.ru%2Fuser%2Fdebeet'}
    r = requests.get(url, headers=headers, timeout=3)
    print r.json()
    url2 = r.json()['src']

    print url2
    r = requests.get(url2 + '&format=json', timeout=3)
    stage2 = r.json()

    m = hashlib.md5()
    to_hash = 'XGRlBW9FXlekgbPrRHuSiA' + stage2['path'][1:] + stage2['s']
    m.update(to_hash)
    hashsum = m.hexdigest()
    url3 = 'https://%s/get-mp3/%s/%s%s' % (stage2['host'], hashsum, stage2['ts'], stage2['path'])

    return url3


if __name__ == '__main__':
    print get_mp3_url('10791881:1171710')
    # print get_mp3_url('38617541396:4483865')



