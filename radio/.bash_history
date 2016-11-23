lsusb
ifconfig
uname -a
ping 8.8.8.8
wget https;//dl.dropboxusercontent.com/u/80256631/8188eu-4.4.21-911.tar.gz
tar xzf 8188eu-4.4.21-911.tar.gz 
./install.sh 
sudo reboot

sudo nano /etc/dhcpcd.conf 
sudo reboot

passwd
sudo su

sudo apt-get update
sudo apt-get install git

wget https://bootstrap.pypa.io/get-pip.py
python ./get-pip.py 
sudo python ./get-pip.py 

sudo pip install virtualenvwrapper

nano ~/.bashrc
. ~/.bashrc

workon radio
mkvirtualenv radio

pip install -r .meta/packages

python ./cli.py -c activity__sex -n 5
ls -la ./downloads/activity__sex/

sudo apt-get install mpd
sudo nano /etc/mpd.conf
sudo service mpd start
sudo service mpd status

wget https://www.ympd.org/downloads/ympd-1.2.3-armhf.tar.bz2
tar -xvf ympd-1.2.3-armhf.tar.bz2
sudo /home/pi/smarthome/radio/ympd --webport 80

wget https://goo.gl/XJuOUW -O example.mp3 --no-check-certificate
omxplayer -o local example.mp3
sudo amixer -c 0 cset numid=3 1

wget https://docs.google.com/uc?id=0B3X9GlR6EmbnVXNLanp4ZFRRbzg&export=download
mv uc\?id\=0B3X9GlR6EmbnVXNLanp4ZFRRbzg gdrive
sudo chmod +x ./gdrive
./gdrive list
./gdrive sync upload /home/pi/smarthome/radio/download 0B2t0ILUB576hSzQ4UzdUODBRLVk
