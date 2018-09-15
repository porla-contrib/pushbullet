const Mustache = require('mustache');
const request = require('request');

const url = 'https://api.pushbullet.com';

module.exports = (accessToken) => {
    return function pushbullet(message, options) {
        let parsedOptions = options || {};

        return function push(item) {
            const renderedMessage = Mustache.render(message, item);

            return new Promise((resolve, reject) => {
                const pushesUrl = `${url}/v2/pushes`;
                const requestOptions = {
                    headers: {
                        'Access-Token': accessToken
                    },
                    body: {
                        type: 'note',
                        title: parsedOptions.title || 'Porla',
                        body: renderedMessage
                    },
                    json: true
                };

                request.post(pushesUrl, requestOptions, (err) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve();
                });
            });
        }
    }
}
