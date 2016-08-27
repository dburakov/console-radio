
from modules import yamusic, files


if __name__ == '__main__':
    category = 'activity__wake-up'
    total_num_tracks = 2
    current_num_tracks = 0

    print 'Preparing %d tracks of category "%s"' % (total_num_tracks, category)

    for track in yamusic.get_tracks_list(category, total_num_tracks):
        current_num_tracks += 1
        print 'Found track %d/%d (%s)' % (current_num_tracks, total_num_tracks, files.get_file_name(track))
        local_path = files.get_local_path(category, track)

        if not files.exists_local(local_path):
            print 'Downloading track...'
            url = yamusic.get_mp3_url(track['id'])
            files.download_track(url, local_path)
