import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

Given(/^I am on the login page$/, async () => {
    await LoginPage.open()
});

Given
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
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