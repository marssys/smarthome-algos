# Настройка iRidium server на Wiren Board 6 Zero

Пользователь/пароль SSH по умолчанию: root / wirenboard  
Web-интерфейс на стандартном порту 80  

* Меняем пароль: passwd

* Обновляем прошивку WB 6 по инструкции https://wirenboard.com/wiki/index.php/Обновление_прошивки

* Настраиваем временную зону `dpkg-reconfigure tzdata` (проверить текущее время можно командой `date`)  
BUG!!! Настройка временной зоны сбрасывается при перезагрузке контроллера

* Устанавливаем iRidium server по инструкции https://dev.iridi.com/IRidium_Server_Raspberry

  * `wget -O /root/iridiumserver.deb http://www.iridiummobile.net/redirects/?go=iRidium_SERVER_RASPBERRY`  
  * `dpkg -i iridiumserver.deb`  
  * `rm iridiumserver.deb`

* Web-интерфейс iRidium server доступен на порту 8888