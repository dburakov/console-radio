#!/usr/bin/env python

import os
import shutil
import requests


def get_file_name(track):
    if not isinstance(track, dict):
        return ''

    return '%s - %s.mp3' % (track['artists'][0]['name'].encode('utf-8'), track['title'].encode('utf-8'))


def get_local_path(category, track):
    category_alias = category.split('__', 1)[1]
    return os.path.join(
        os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
        'downloads/%s/%s' % (category_alias, get_file_name(track))
    )


def exists_local(check_file):
    return os.path.isfile(check_file)


def download_track(file_url, file_name):
    directory = os.path.dirname(file_name)
    if not os.path.exists(directory):
        os.makedirs(directory)

    response = requests.get(file_url, stream=True)
    with open(file_name, 'wb') as out_file:
        shutil.copyfileobj(response.raw, out_file)

    del response
