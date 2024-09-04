import Page from './page.js';

class CheckoutInformationPage extends Page {

    get txtFirstName () {
        return $('#first-name');
    }

    get txtLastName () {
        return $('#last-name');
    }

    get txtPostalCode () {
        return $('#postal-code');
    }

    get btnContinue () {
        return $('#continue');
    }

    // Actions
    async clickContinue () {
        await this.btnContinue.click()
    }

    async fillInformation (firstName, lastName,zip) {
        await this.txtFirstName.setValue(firstName);
        await this.txtLastName.setValue(lastName);
        await this.txtPostalCode.setValue(zip);
    }
}

export default new CheckoutInformationPage();