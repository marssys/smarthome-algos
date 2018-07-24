// https://dev.iridi.com/CloudMQTT

var driver1 = IR.GetDevice("MQTT");       // name of a driver 1
var driver2 = IR.GetDevice("Modbus TCP"); // name of a driver 2
 
var gatemap = {
// Tag name                Channel name
  "Door_switch"         : "MQTT_Door_switch",
  "Ring_button"         : "MQTT_Ring_button",
  "Outdoor_temperature" : "MQTT_Outdoor_temperature",
  "Indoor_temperature"  : "MQTT_Indoor_temperature",
  "MQTT_Lock"           : "Lock",
  "MQTT_Siren"          : "Siren",
  "MQTT_Dimmer_R"       : "Dimmer_R",
  "MQTT_Dimmer_G"       : "Dimmer_G",
  "MQTT_Dimmer_B"       : "Dimmer_B",
  "MQTT_Dimmer_ON"      : "Dimmer_ON"
}; 
 
IR.AddListener(IR.EVENT_TAG_CHANGE, driver1, function(name, value) {
  if (gatemap[name]) {
    driver2.Set(gatemap[name], value);
  }	
});
IR.AddListener(IR.EVENT_TAG_CHANGE, driver2, function(name, value) {
  if (gatemap[name]) {
    driver1.Set(gatemap[name], value);
  }	
});
