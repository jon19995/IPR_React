import { LSRequest } from "./LSRequest";

const api = new LSRequest();

export class Auth {
    login() {
        api.setStorageData("login", true);
    }

    logout() {
        api.setStorageData("login", false);
    }

    isLogin() {
        const data = api.getStorageData("login");

        return data === true;
    }
}
