import Page from './page.js';

class CartPage extends Page {

    get btnCheckout () {
        return $('#checkout');
    }

    async clickCheckout () {
        await this.btnCheckout.click()
    }
}

export default new CartPage();