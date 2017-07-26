import { delay } from '../../utils/';

const SETTING = {
    schoolId: '000',
    funds: ['funds sample 1', 'funds sample 2', 'funds sample 3'],
    currencies: ['USD', 'PHP', 'JPY', 'KRW'],
    resourceTypes: ['internet', 'book']
};
let data = SETTING;
export class Api {
    static loadSettings() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, delay);
        });
    }

    static saveSettings(schoolId, settings) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    data = settings;
                    resolve(data);
                } catch (err) {
                    reject(err);
                }
            }, delay);
        });
    }
}

