import 'whatwg-fetch';

const FILE_API = process.env.FILE_API || '/api';

export class Api {
    static uploadFile(file) {
        const data = new FormData()
        data.append('uploadFile', file);
        return fetch('/upload-form/0', {
            method: 'POST',
            body: data
        });
    }
}