#!/usr/bin/env python

import argparse
from modules import yandex, files


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Yandex Radio command line tool')
    parser.add_argument('-c', '--category', default='activity__wake-up', help='Category of radio')
    parser.add_argument('-s', '--sid', default='', help='User session ID (for personal categories only)')
    parser.add_argument('-n', '--total_num', default=10, type=int, help='Number of tracks to download')
    args = parser.parse_args()

    current_num = 0
    print 'Preparing %d tracks of category "%s"' % (args.total_num, args.category)
    print 'Saving to %s' % files.get_local_path('__<CATEGORY>', '<TRACK>')

    try:
        for track in yandex.get_tracks_iterator(args.category, args.total_num, args.sid):
            current_num += 1
            print 'Found track %d/%d (%s)' % (current_num, args.total_num, files.get_file_name(track))
            local_path = files.get_local_path(args.category, track)

            if not files.exists_local(local_path):
                print 'Downloading track...'
                url = yandex.get_mp3_url(track['id'])
                files.download_track(url, local_path)
    except KeyboardInterrupt:
        print 'Terminating...'
