import {
  delay,
  generateUID
} from '../../utils/';
import {Library} from './Library';
let LIBRARY_DATA = [
  createMockData('Assumption Library', 'College', generateUID()),
  createMockData('Assumption Library', 'Senior High', generateUID()),
  createMockData('Assumption Library', 'Junior High', generateUID())];

export class Api {

  static getLibraries() {
    return new Promise((resolve)=> {
      setTimeout(()=> {
        resolve(LIBRARY_DATA);
      }, delay);
    });
  }

  static createLibrary(libary) {
    return new Promise((resolve, reject) => {
      const DATA = [...LIBRARY_DATA];
      setTimeout(()=> {
        try {
          const newLib = createMockData(libary[Library.NAME], libary[Library.DEPARTMENT], generateUID());
          DATA.push(newLib);
          LIBRARY_DATA = DATA;
          resolve(newLib);
        } catch (err) {
          reject(err);
        }
      }, delay);
    });
  }
}


function createMockData(name, department, id) {
  const newLib = {};
  newLib[Library.LIBRARY_ID] = id;
  newLib[Library.NAME] = name;
  newLib[Library.DEPARTMENT] = department;
  return Object.create(newLib);
}
