import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get msgInvalidCrendentials () {
        return $("h3[data-test='error']")
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open("");
    }

    async verifyLogin () {
        return (await super.url()).endsWith("inventory.html")
    }
}

export default new LoginPage();
