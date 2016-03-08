## mifi-status

get the status of your mobile wifi hotspot

`npm install mifi-status` (install globally for terminal usage)

`mifi-status | grep -i "BatteryPercent"`

``` js
mifiStatus(function(err, data) {
  if (!err) {
    console.log(data['statusBarBatteryPercent']);
  }
})
```

example output:

``` json
{
  "statusBarWiFiClientListSize" : "1",
  "statusBarNetworkID" : "311480",
  "statusBarPrimaryClientListSize" : "1",
  "statusBarTechnologyText" : "",
  "statusBarBatteryDetection" : "true",
  "statusBarBytesTransmitted" : "180490352",
  "statusBarGuestClientListSize" : "0",
  "statusBarSimCarrierBlockedStatus" : "0",
  "statusBarBatteryChargingSource" : "ChargingSourceNone",
  "statusBarTrafficStatus" : "None",
  "statusBarRoaming" : "None",
  "statusBarMaxGuestClientListSize" : "0",
  "statusBarConnectionState" : "Connected",
  "statusBarBatteryPercent" : "69",
  "statusBarTechnology" : "LTE",
  "statusBarSimStatus" : "Ready",
  "statusBarNetwork" : "Verizon",
  "statusBarAirplaneMode" : "AirplaneModeOff",
  "statusBarSignalBars" : "0",
  "statusBarBytesReceived" : "650814389",
  "statusBarBatteryChargingState" : "false",
  "statusBarSmsUnreadCount" : "5",
  "statusBarMaxPrimaryClientListSize" : "15",
  "statusGuestWifiEnabled" : 0,
  "statusBarFemtoCellStatus" : "0",
  "statusBarClientListSize" : "1",
  "statusBarNotificationFlag" : "0",
  "statusBarWiFiEnabled" : 1,
  "statusBarConnectionDuration" : "6932"
}
```

### LICENSE
bsd-3
