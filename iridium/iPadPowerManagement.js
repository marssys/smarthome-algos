var timer = 0;
var onTime = 60000; // 60000 ms = 1 s
var batteryLevel;

IR.AddListener(IR.EVENT_WORK, 0, function(time)
{
    timer += time;
    if(timer > onTime)
    {
        timer = 0;
        batteryLevel = IR.GetVariable("System.Battery.Level");
        if(batteryLevel > 90)
        {
            IR.GetDevice('KNX IP BAOS 774').Set("Питание iPad Вкл/Выкл", 0);
        }
        if(batteryLevel < 10)
        {
            IR.GetDevice('KNX IP BAOS 774').Set("Питание iPad Вкл/Выкл", 1);
        } 
    }
});