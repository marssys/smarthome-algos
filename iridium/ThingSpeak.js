//iRidium pro JS module to send data from iRidium server to www.thingspeak.com by MATLAB, to have online trends and analytics
//It sends data to ThingSpeak every 60 seconds(change IR.SetInterval(60000, thingspeak_send); for that)
//ThingSpeak is free up to 3 000 000 messages per year (5 devices send data every 60 seconds or 10 devices every 120 seconds etc.) 
//Change 'api_key=****************' to your personal API key, which you get after you create a new channel 
//

IR.AddListener(IR.EVENT_START,0,function() 
{
   thingspeak = {};
   function thingspeak_send () 
   {
         for (var key in thingspeak) 
         {      
            if (key) 
            {
               if (command) command += "&"+key+"="+Math.round(thingspeak[key]);
               else var command = "&"+key+"="+Math.round(thingspeak[key]);
            }
         } 
         if (command) thingspeak.SendEx({ 
            Type: "POST",        															
            Url:  "/update",
            Data: ['api_key=***************'+command],      
            cbReceiveText: function(text, code, headers) {if (code != '200') IR.Log("error");}
         });
   }
   thingspeak = IR.CreateDevice(IR.DEVICE_CUSTOM_HTTP_TCP, "thingspeak", {Host: "api.thingspeak.com", Port: 80}); 
   IR.SetInterval(60000, thingspeak_send);			
});
//set driver name, feedback names and thingspeak channel field numbers here            
IR.AddListener(IR.EVENT_TAG_CHANGE, IR.GetDevice("Modbus TCP"), function(name, value)
{
   if (name == "Feedback 1") thingspeak["field1"] = value;
   if (name == "Feedback 2") thingspeak["field2"] = value;
   if (name == "Feedback 3") thingspeak["field3"] = value;
});
