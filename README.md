# Pushbullet notifications for Porla

The Pushbullet plugin for Porla enables easy notifications for any event.

## Usage

```js
const porla      = require('@porla/porla');
const pushbullet = require('@porla-contrib/pushbullet')('YourAccessToken');

const app = porla();

app.on('torrent.added', [
    pushbullet('Torrent {{ torrent.name }} added')
]);
```

#### Options

The following options are supported as the last parameter of the `pushbullet`
function.

```js
{
    title: 'Robobot'
}
```
