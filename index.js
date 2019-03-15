const request = require('request');
const url     = 'https://api.pushbullet.com/v2/pushes';

module.exports = (accessToken) => {
    return function pushbullet(message, options) {
        const parsedOptions = options || {};

        return function pushNote(porla, item) {
            const renderedMessage = porla.utils.renderMessage(message, item);

            return new Promise((resolve, reject) => {
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

                request.post(url, requestOptions, (err) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve();
                });
            });
        }
    }
}
