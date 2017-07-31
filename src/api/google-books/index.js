const ENV = process.env.NODE_ENV || 'dev-mock';

import { Api as GoogleBooksApi } from './GoogleBooksApi';

export function getApi() {
  let api;
  switch (ENV) {
    default:
      api = GoogleBooksApi;
      break;
  }
  return api;
}

export {GoogleBooks} from './GoogleBooks';
