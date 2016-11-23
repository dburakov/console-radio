echo "------------------------------"
echo "Starting at $(date)"

/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c activity__run -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c activity__party -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c activity__beloved -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c activity__driving -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c activity__fall-asleep -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c activity__pokemon -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c activity__wake-up -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c activity__road-trip -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c activity__romantic-date -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c activity__sex -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c activity__workout -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c activity__work-background -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__aggressive -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__spring -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__sad -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__rainy -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__healing -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__winter -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__beautiful -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__cool -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__summer -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__dream -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__haunting -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__dark -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__newyear -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__autumn -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__happy -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__relaxed -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__sentimental -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__calm -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__energetic -n 50
/home/pi/.virtualenvs/radio/bin/python /home/pi/smarthome/radio/cli.py -c mood__epic -n 50

/home/pi/smarthome/radio/gdrive sync upload /home/pi/smarthome/radio/downloads 0B2t0ILUB576hSzQ4UzdUODBRLVk