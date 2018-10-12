var driver =  IR.GetDevice("KNX IP Router");
var push_group_id = 10;

IR.AddListener(IR.EVENT_TAG_CHANGE, driver, function(name, value)
{
   if (name == "Генератор - Нет вх напряжения" && value == 1) 
   {
      IR.SendPush("GL. Нет входного напряжения", "data", 10);
   }
   if (name == "HA1 - Active fault" && value == 1) 
   {
      IR.SendPush("GL. Котел 1. Ошибка", "data", 10);
   }
   if (name == "HA2 - Active fault" && value == 1) 
   {
      IR.SendPush("GL. Котел 2. Ошибка", "data", 10);
   } 
});