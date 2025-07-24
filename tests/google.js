module.exports = {
    '@tags': ['google'],
    'Google advanced search: Ryan Gosling'(browser) {
        const mainQuery = 'Ryan Gosling';

        const mainQueryInputSelector = 'input[name="as_q"]';
        const languageDropdownOpenerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_de"]';
        const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
        const lastUpdateDropdownValueSelector = '.goog-menuitem[value="w"]';
        const submitButtonSelector = '.jfk-button[type="submit"]'

        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropdownOpenerSelector)
            .click(languageDropdownValueSelector)
            .click(lastUpdateDropdownOpenerSelector)
            .click(lastUpdateDropdownValueSelector)
            .click(submitButtonSelector)
            .assert.urlContains('as_q=Ryan+Gosling')
            .assert.urlContains('lr=lang_it')
            .assert.urlContains('as_qdr=m')
            .saveScreenshot('tests_output/google.png')
    }
}
