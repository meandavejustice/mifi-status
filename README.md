## mifi-status

get the status of your mobile wifi hotspot

`npm install mifi-status` (install globally for terminal usage)

`mifi-status | grep -i "BatteryPercent"`

``` js

var mifiStatus = require('mifi-status');

mifiStatus.status(function(err, data) {
  if (!err) {
    console.log(data['statusBarBatteryPercent']);
  }
});

mifiStatus.connections(function(err, data) {
  if (!err) {
    console.log(data.connectedDevicesList[0].hostname);
  }
})
```

example output:

``` json
{ statusBarAirplaneMode: 'AirplaneModeOff',
  statusBarBatteryChargingSource: 'ChargingSourceUSB',
  statusBarBatteryChargingState: 'true',
  statusBarBatteryDetection: 'true',
  statusBarBatteryPercent: '22',
  statusBarBytesReceived: '541866031',
  statusBarBytesTransmitted: '265954520',
  statusBarClientListSize: '2',
  statusBarConnectionDuration: '7731',
  statusBarConnectionState: 'Connected',
  statusBarFemtoCellStatus: '0',
  statusBarGuestClientListSize: '0',
  statusBarMaxGuestClientListSize: '0',
  statusBarMaxPrimaryClientListSize: '15',
  statusBarNetwork: 'Verizon',
  statusBarNetworkID: '311480',
  statusBarNotificationFlag: '0',
  statusBarPrimaryClientListSize: '2',
  statusBarRoaming: 'None',
  statusBarSignalBars: '1',
  statusBarSimCarrierBlockedStatus: '0',
  statusBarSimStatus: 'Ready',
  statusBarSmsUnreadCount: '8',
  statusBarTechnology: 'LTE',
  statusBarTechnologyText: '',
  statusBarTrafficStatus: 'None',
  statusBarWiFiClientListSize: '2',
  statusBarWiFiEnabled: 1,
  statusGuestWifiEnabled: 0,
  blockedDevicesList: [],
  connectedDevicesList:
  [ { disableBlock: 1,
      hostname: 'mainframe-x250',
      interfaceType: 'WiFi',
      ipAddress: '666.666.1.2',
      ipType: 0,
      macAddress: '6c:e6:c6:6e:6c:d6',
      name: '',
      type: 'generic' },
    { disableBlock: 0,
      hostname: 'meandavesiPhone',
      interfaceType: 'WiFi',
      ipAddress: '666.666.1.3',
      ipType: 0,
      macAddress: '66:ae:66:66:fd:6f',
      name: '',
      type: 'generic' } ],
  connectedGuestDevicesList: [],
  gBaseAssetsPath: '12036666',
  gHtmlLang: 'en-US',
  gIsLoggedIn: 1,
  gLangDirection: 'ltr',
  gLocale: 'en_US',
  gPageId: 'connected_devices',
  gSecureToken: '6666666666666666666666666666666',
  isIPv6Supported: 1
}
```

### LICENSE
bsd-3
