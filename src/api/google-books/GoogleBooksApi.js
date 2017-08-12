const GOOGLE_BOOKS_API = process.env.GOOGLE_BOOKS_API;
const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;

import 'whatwg-fetch';

import querystring from 'querystring';

export class Api {
  //TODO: Pagination
  static searchBooks(query) {
    return new Promise((resolve, reject) => {
      fetch(`${GOOGLE_BOOKS_API}?key=${GOOGLE_BOOKS_API_KEY}&printType=books&maxResults=40&q=${querystring.stringify(query).replace(/=/g, ':')}`)
        .then(result => {
          resolve(result.json());
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static getBookInfo(selfLink) {
    return new Promise((resolve, reject) => {
      fetch(selfLink)
        .then(result => {
          resolve(result.json());
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static getNewestBooks(count, start) {
    return new Promise((resolve, reject) => {
      fetch(`${GOOGLE_BOOKS_API}?key=${GOOGLE_BOOKS_API_KEY}&printType=books&startIndex=${start || 0}&maxResults=${count}&q=inTitle`)
        .then(result => {
          resolve(result.json());
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static searchHomeBooks(search) {
    return new Promise((resolve, reject) => {
      fetch(`${GOOGLE_BOOKS_API}?key=${GOOGLE_BOOKS_API_KEY}&printType=books&startIndex=0&maxResults=40&q=${search}`)
        .then(result => {
          resolve(result.json());
        })
        .catch(err => {
          reject(err);
        });
    });
  }

}
