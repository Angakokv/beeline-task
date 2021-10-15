const expectationHelpers = require('../../helpers/expectation-helpers');

class HomePage {
    constructor() {
        this.homeButtonSelector = 'new UiSelector()' +
            '.description("Главное")';
    }

    get homeButton() { return $(`android=${this.homeButtonSelector}`); }

    async waitForHomeButtonToBeDisplayed() {
        await this.homeButton.waitForDisplayed();
    };

    async verifyHomeButtonIsDisplayed() {
        await expectationHelpers.verifyIsDisplayed(this.homeButton);
    };
}

module.exports = new HomePage();
