const ENV = process.env.NODE_ENV || 'dev-mock';

import MockApi from './MockApi';

switch (ENV) {
    default:
        module.exports = MockApi;
        break;
}