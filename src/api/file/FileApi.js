import 'whatwg-fetch';

const FILE_API = process.env.FILE_API || '/api';

export class Api {
  static uploadFile(file) {
    return new Promise((resolve, reject)=> {
      const data = new FormData();
      data.append('uploadFile', file);
      fetch(FILE_API + '/upload-single-file', {
        method: 'POST',
        body: data
      }).then(result=> {
        resolve(result.json());
      }).catch(error=> {
        reject(error);
      });
    });
  }

  static copyFromUrl(name, url) {
    return new Promise((resolve, reject)=> {
      fetch(FILE_API + '/copy-file-from-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          fileName: name,
          fileURL: url
        }
      }).then(result=> {
          resolve(result.json());
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static deleteFile(fileId) {
    return new Promise((resolve, reject)=> {
      fetch(`${FILE_API}/${fileId}`, {method: 'DELETE'})
        .then(result=> {
          resolve(result.json());
        })
        .catch(error=> {
          reject(error);
        });
    });
  }
}
