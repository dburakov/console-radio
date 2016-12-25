while :
do
    echo "Starting at $(date)"
    python ./cli.py -c activity__run -n 5
    python ./cli.py -c activity__party -n 5
    python ./cli.py -c activity__beloved -n 5
    python ./cli.py -c activity__driving -n 5
    python ./cli.py -c activity__fall-asleep -n 5
    python ./cli.py -c activity__wake-up -n 5
    python ./cli.py -c activity__road-trip -n 5
    python ./cli.py -c activity__romantic-date -n 5
    python ./cli.py -c activity__sex -n 5
    python ./cli.py -c activity__workout -n 5
    python ./cli.py -c activity__work-background -n 5
    python ./cli.py -c mood__aggressive -n 5
    python ./cli.py -c mood__spring -n 5
    python ./cli.py -c mood__sad -n 5
    python ./cli.py -c mood__rainy -n 5
    python ./cli.py -c mood__healing -n 5
    python ./cli.py -c mood__winter -n 5
    python ./cli.py -c mood__beautiful -n 5
    python ./cli.py -c mood__cool -n 5
    python ./cli.py -c mood__summer -n 5
    python ./cli.py -c mood__dream -n 5
    python ./cli.py -c mood__haunting -n 5
    python ./cli.py -c mood__dark -n 5
    python ./cli.py -c mood__newyear -n 5
    python ./cli.py -c mood__autumn -n 5
    python ./cli.py -c mood__happy -n 5
    python ./cli.py -c mood__relaxed -n 5
    python ./cli.py -c mood__sentimental -n 5
    python ./cli.py -c mood__calm -n 5
    python ./cli.py -c mood__energetic -n 5
    python ./cli.py -c mood__epic -n 5

    echo "Sleeping 1 hour..."
    sleep 3600

    #/home/pi/smarthome/radio/gdrive sync upload /home/pi/smarthome/radio/downloads 0B2t0ILUB576hSzQ4UzdUODBRLVk
done