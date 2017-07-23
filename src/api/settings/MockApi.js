import { delay } from '../../utils/';

const SETTING = {
    funds: ['funds sample 1', 'funds sample 2', 'funds sample 3'],
    currencies: ['USD', 'PHP', 'JPY', 'KRW'],
    resourceTypes: ['internet', 'book']
};

export class Api {

    static loadSettings() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(SETTING);
            }, delay);
        });
    }

    static updateFund(fund, index) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const funds = SETTING.funds;
                    funds[index] = fund;
                    resolve(SETTING);
                } catch (err) {
                    reject(err);
                }
            }, delay);
        });
    }

    static removeFund(fund) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const funds = SETTING.funds;
                    let removeIndex;
                    funds.forEach((fd, index) => {
                        if (fd === fund) {
                            removeIndex = index;
                        }
                    });
                    if (removeIndex) {
                        funds.splice(removeIndex, 1);
                    }
                    resolve(SETTING);
                } catch (err) {
                    reject(err);
                }
            }, delay);
        });
    }

    static addFund(fund) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const funds = SETTING.funds;
                    funds.push(fund);
                    resolve(SETTING);
                } catch (err) {
                    reject(err);
                }
            }, delay);
        });
    }

}

