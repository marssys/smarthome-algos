OS Raspbian Stretch is not supported!!!
https://dev.iridi.com/IRidium_Server_Raspberry/en
wget -O /home/pi/iridiumserver.deb http://www.iridiummobile.net/redirects/?go=iRidium_SERVER_RASPBERRY
sudo dpkg -i iridiumserver.deb

change password
passwd

timezone can be changed from IridiumServer Web panel
set timezone
sudo dpkg-reconfigure tzdata

IridiumServer update can be done from Web panel

raspberry update
sudo apt-get update
sudo apt-get upgrade