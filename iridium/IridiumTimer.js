// http://wiki2.iridiummobile.ru/%D0%9E%D1%81%D0%BE%D0%B1%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8_iRidium_Script

var timer = 0;
var onTime = 800; // 800 ms = 0.8 s
IR.AddListener(IR.EVENT_WORK, 0, function(time)
{
    timer += time;
    if(timer > onTime)
    {
        timer = 0;
        IR.Log("Hello World!"); 
    }
});
