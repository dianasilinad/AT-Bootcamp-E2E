const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the Home page", async () => {
    await browser.refresh();
    await browser.url(`https://www.newegg.com`);
    await expect(browser).toHaveUrl('https://www.newegg.com/');
    
});
Given("I close the banner", async () => {
    $('#modal-Website > div.modal-dialog.modal-dialog-centered > div > div').waitForDisplayed
    const closeTheBanner = await $('#modal-Website > div.modal-dialog.modal-dialog-centered > div > button');
    closeTheBanner.click();
});

