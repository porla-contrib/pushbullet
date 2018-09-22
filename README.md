# Pushbullet notifications for Porla

The Pushbullet plugin for Porla enables easy notifications for any event. It
supports Mustache templating for your messages.


## Usage

```js
const { Porla } = require('@porla/porla');
const pushbullet = require('@porla-contrib/pushbullet')('YourAccessToken');

const app = new Porla();

app.subscribe('torrent.added', [
    pushbullet('Torrent {{ torrent.name }} added')
]);
```
