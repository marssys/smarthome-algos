Пользователь/пароль SSH по умолчанию: root / wirenboard
Web-интерфейс на стандартном порту

https://wirenboard.com/wiki/index.php/Обновление_прошивки

Меняем пароль: passwd

Настраиваем временную зону: dpkg-reconfigure tzdata (проверить текущее время можно командой date)
Настройка временной зоны сбрасывается при перезагрузке контроллера

Устанавливаем iRidium server по инструкции https://dev.iridi.com/IRidium_Server_Raspberry

wget -O /root/iridiumserver.deb http://www.iridiummobile.net/redirects/?go=iRidium_SERVER_RASPBERRY
dpkg -i iridiumserver.deb
rm iridiumserver.deb