import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';

Given(/^I am on the login page$/, async () => {
    await LoginPage.open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I see the inventory page$/, async() => {
    await expect(LoginPage.verifyLogin()).toBeTruthy();
})

Then(/^I see the error: (.+)$/, async(message) => {
    await expect(LoginPage.msgInvalidCrendentials).toBeDisplayed();
})