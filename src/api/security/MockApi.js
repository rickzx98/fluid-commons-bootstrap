import { delay } from '../../utils/';

const SECURITY = {
    users: [{
        _id: "0002345",
        username: "rickzx98",
        password: "testPassword",
        fullname: "Jerico de Guzman",
        role: "admin"
    },
    {
        _id: "0002346",
        username: "rickzx98Lib",
        password: "testPassword",
        fullname: "Jerico as Librarian",
        role: "librarian"
    }]
};
let data = SETTING;
export class Api {
    static requestLogin(credentials) {
        return new Promise((resolve, reject) => {
            const users = SECURITY.users.filter(user => user.username === credentials.username);
            if (users.length > 0) {
                if (users[0].password === credentials.password) {
                    resolve({
                        username: users[0].username,
                        fullname: users[0].fullname,
                        role: users[0].role
                    });
                }
            }
            else {
                reject({
                    message: "Invalid username or password."
                });
            }
        });
    }
}

