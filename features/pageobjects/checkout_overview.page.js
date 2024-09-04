import Page from './page.js';

class CheckoutOverviewPage extends Page {

    get btnFinish () {
        return $('#finish');
    }

    async clickFinish () {
        await this.btnFinish.click()
    }
}

export default new CheckoutOverviewPage();