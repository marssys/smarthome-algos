// https://dev.iridi.com/CloudMQTT

// Assign the same names to tags of first driver and to channels of second driver,
// and accordingly - to tags of second drivers and to channels of first driver. 
var driver1 = IR.GetDevice("MQTT");       // name of a driver 1
var driver2 = IR.GetDevice("Modbus TCP"); // name of a driver 2
 
IR.AddListener(IR.EVENT_TAG_CHANGE, driver1, function(name,value) {
  driver2.Set(name, value);
});
IR.AddListener(IR.EVENT_TAG_CHANGE, driver2, function(name,value) {
  driver1.Set(name, value);
});
