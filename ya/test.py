# 
import argparse
import requests
import hashlib


def get_tracks():
    # url = 'https://radio.yandex.ru/api/v2.1/handlers/radio/user/270453501/tracks?queue=&external-domain=radio.yandex.ru&overembed=no&__t=1471895027893'
    # url = 'https://radio.yandex.ru/api/v2.1/handlers/radio/user/270453501/tracks/a/net/get-direct/4pwHX88L8mKCPnPFSPSZYg/x80?queue=26126648%3A3101870&external-domain=radio.yandex.ru&overembed=no&__t=1471896015721'
    url = 'https://radio.yandex.ru/api/v2.1/handlers/radio/user/270453501/tracks/a/net/get-direct/pETvnmacrRaRQ3z630hwOQ/x80?queue=ad%2C28098482%3A3356224%2C26353096%3A10216&external-domain=radio.yandex.ru&overembed=no&__t=1471896343190'
    headers = {
        'X-Retpath-Y': 'https%3A%2F%2Fradio.yandex.ru%2Fuser%2Fdebeet',
        'Cookie': 'yandexuid=7048492131471552512; _ym_uid=1471552528784142442; _ym_isad=2; device_id="aa98820acf27bd5b2bc75b5bab363729ad52b1453"; _ym_visorc_29112495=w; Session_id=3:1471894969.5.0.1471894969000:pTlVXQ:7.0|270453501.0.2|150473.530762.1IhADD41jFbmOrgWIze1n1UUlH8; sessionid2=3:1471894969.5.0.1471894969000:pTlVXQ:7.1|270453501.0.2|150473.18790.1ZoNggq5IlVEIUK7M09-scxN73A; yp=1787254969.udn.cDpkZWJlZXQ%3D; ys=udn.cDpkZWJlZXQ%3D; L=alZGA39QVl5DZXN1cnVyDQILXlVabWRbAx8TJAgQ.1471894969.12601.319511.d5526ca820a41e06b4dc3cd5927e51d0; yandex_login=debeet'
    }
    r = requests.get(url, headers=headers, timeout=3)
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


if __name__ == '__main__':
    for track in get_tracks():
        id = track['track']['id']
        print 'name: %s artist: %s' % (track['track']['title'], track['track']['artists'][0]['name'])
        # print get_mp3_url(id)



