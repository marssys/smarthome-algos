local https = require 'ssl.https'
local accessKey = <accessKey>
local bucketKey = <bucketKey>
local initialstate = 'https://groker.initialstate.com/api/events?accessKey=' .. accessKey .. '&bucketKey=' .. bucketKey

local address = event.dst
local value = event.getvalue()

local value_string = tostring(value)
local r, c, h, s = https.request(initialstate .. '&' .. grp.alias(address) .. '=' .. value_string)
