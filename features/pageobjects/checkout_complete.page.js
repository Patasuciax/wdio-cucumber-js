import Page from './page.js';

class CheckoutCompletePage extends Page {

    get successIcon () {
        return $('//img[@data-test="pony-express"]');
    }

    get successMsgTitle () {
        return $('//h2[@data-test="complete-header"]');
    }

    get successMsgBody () {
        return $('//div[@data-test="complete-text"]');
    }

    // Values by default for a Checkout completed with success
    get defaultMsgTitle () {
        return ('Thank you for your order!')
    }

    get defaultMsgBody () {
        return ('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    }
    
}

export default new CheckoutCompletePage();