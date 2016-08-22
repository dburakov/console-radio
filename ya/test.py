# 
import argparse

if __name__ == '__main__':
    print('Hello!')
    import requests; 
    r = requests.get('https://radio.yandex.ru/api/v2.1/handlers/track/10791881:1171710/radio-web-user-270453501-direct/download/m/sy/net/match_r1103.html?__t=1471374568089') ; 
    curl 'https://radio.yandex.ru/api/v2.1/handlers/track/10791881:1171710/radio-web-user-270453501-direct/download/m/sy/net/match_r1103.html?__t=1471374568089'  -H 'X-Retpath-Y: https%3A%2F%2Fradio.yandex.ru%2Fuser%2Fdebeet'