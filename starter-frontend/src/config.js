const env = 'dev';

const dev = {
    apiUrl: 'http://127.0.0.1:8000',
    env: env
};

const prod = {
    apiUrl: 'https://app.oncloud.net.au',
    env: env
};

const config = {
    dev,
    prod
};

module.exports = config[env];


