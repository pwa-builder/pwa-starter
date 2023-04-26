var push = require('web-push')

const keys = push.generateVAPIDKeys();

let vapIdKeys = {
    publicKey: 'BD6Y5yIe1LF9VdWqkbvwZny7Y-eScTmHEokauEKektdv6FAzEkUmx8iVOlERTcF_yIWX5y7FZwEBeg-U3o74NPc',
    privateKey: 'sc5t5HCgHtFXhWPaTHjsntWntNo3vlLeS6tp5TvwzMA'
  }


push.setVapidDetails('mailto:test@code.co.uk', vapIdKeys.publicKey, vapIdKeys.privateKey)

let sub ={"endpoint":"https://fcm.googleapis.com/fcm/send/dpRisECNdbg:APA91bE_x-6AITZTUfkodRmxwOdGQAbfj1KgMVqTH-9jkrcMSTIJUhBUq604fpydEhl5GEU6ZU4ULvCR1XjXjnFILxYqAkQZ96ygNoWIp0mE8VhuPL-RIWTxn8GiN1Zave24QtxuaYGR","expirationTime":null,"keys":{"p256dh":"BDkKAqW16PJcySAxcD2ukzWiyqGFaGcY2kavRrUcp0GfF8U7gZKsZocOxz3THJyBwHMYRHOBi8HjAoN8_WMRzDU","auth":"9GlJt7gCVu_3C4AORMV2oA"}};

push.sendNotification(sub, 'test message')