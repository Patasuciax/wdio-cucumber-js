import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect} from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';
import Checkout_informationPage from '../pageobjects/checkout_information.page.js';
import Checkout_overviewPage from '../pageobjects/checkout_overview.page.js';
import Checkout_completePage from '../pageobjects/checkout_complete.page.js';
import checkout_completePage from '../pageobjects/checkout_complete.page.js';

Given(/^I am on the login page$/, async () => {
    await LoginPage.open()
});

Given
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^I add (\d+) to the shopping cart$/, async (quantity) => {
    await InventoryPage.addToCart(quantity)
});

When(/^I proceed to checkout as (\w+) (\w+) and postal code (.*)$/, async (first_name, last_name, zip) => {
    // Inventory section
    await InventoryPage.clickCart()
    // Cart section
    await CartPage.clickCheckout()
    // Checkout section
    await Checkout_informationPage.fillInformation(first_name, last_name, zip)
    await Checkout_informationPage.clickContinue()
    await Checkout_overviewPage.clickFinish()
});

Then(/^I see the inventory page$/, async() => {
    await expect(LoginPage.verifyLogin()).toBeTruthy();
})

// TO DO: include message into the verification
Then(/^I see the error: (.+)$/, async(message) => {
    await expect(LoginPage.msgInvalidCrendentials).toBeDisplayed();
})

Then(/^The product (.*) displays (.*) with the description (.*)$/, async(prName, prPrice, prDescription) => {
    await expect(await (InventoryPage.getProductDescriptionByName(prName))).toEqual(prDescription)
    await expect(await (InventoryPage.getProductPriceByName(prName))).toEqual(prPrice)
})

Then(/^Shopping cart displays (\d+) products$/, async(quantity) => {
    await expect(await (InventoryPage.cartBadge.getText())).toEqual(String(quantity))
})

Then(/^A confirmation message is displayed$/, async() => {
    await expect(Checkout_completePage.successIcon).toBeDisplayed()
    await expect(await Checkout_completePage.successMsgTitle.getText()).toEqual(Checkout_completePage.defaultMsgTitle)
    await expect(await Checkout_completePage.successMsgBody.getText()).toEqual(Checkout_completePage.defaultMsgBody)
})