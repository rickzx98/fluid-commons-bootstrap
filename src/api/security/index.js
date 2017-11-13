const ENV = process.env.NODE_ENV || 'dev-mock';

import { Api as MockApi } from './MockApi';

export function getApi() {
    let api;
    switch (ENV) {
        default:
            api = MockApi;
            break;
    }
    return api;
}
