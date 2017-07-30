const ENV = process.env.NODE_ENV || 'dev-mock';

import { Api as FileApi } from './FileApi';

export function getApi() {
    let api;
    switch (ENV) {
        default:
            api = FileApi;
            break;
    }
    return api;
}
