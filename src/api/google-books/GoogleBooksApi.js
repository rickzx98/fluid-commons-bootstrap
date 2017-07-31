const GOOGLE_BOOKS_API = process.env.GOOGLE_BOOKS_API;
const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;
import querystring from 'querystring';
import 'whatwg-fetch';
export class Api {
  //TODO: Pagination
  static searchBooks(query) {
    return new Promise((resolve, reject)=> {
      fetch(`${GOOGLE_BOOKS_API}?key=${GOOGLE_BOOKS_API_KEY}&printType=books&maxResults=40&q=${querystring.stringify(query).replace(/=/g, ':')}`)
        .then(result => {
          resolve(result.json());
        })
        .catch(err=> {
          reject(err);
        });
    });
  }
}
