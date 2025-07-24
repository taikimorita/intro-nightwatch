module.exports = {
    'My first test case'(browser) {
        browser
        .url('https://esp2qa.gtsdmz.globetax.com/register')
        .waitForElementVisible('.esp')
        .assert.textContains(".esp", "New User Registration");
    }
}
