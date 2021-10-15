const expectationHelpers = require('../../helpers/expectation-helpers');

class LoginPage {
    constructor() {
        this.phoneNumberFieldSelector = 'new UiSelector()' +
            '.resourceId("ru.beeline.services:id/login_edit_text")' +
            '.childSelector(UiSelector().resourceId("ru.beeline.services:id/edit_text"))';
        this.loginByPasswordLinkSelector  = 'new UiSelector()' +
            '.text("Войти с паролем")';
        this.passwordFieldSelector    = 'new UiSelector()' +
            '.resourceId("ru.beeline.services:id/password_edit_text")';
        this.loginButtonSelector      = 'new UiSelector()' +
            '.text("Войти")';
    }

    get phoneNumberField()    { return $(`android=${this.phoneNumberFieldSelector}`);    }
    get loginByPasswordLink() { return $(`android=${this.loginByPasswordLinkSelector}`); }
    get passwordField()       { return $(`android=${this.passwordFieldSelector}`);       }
    get loginButton()         { return $(`android=${this.loginButtonSelector}`);         }

    async inputPhoneNumber(phoneNumber) {
        await this.phoneNumberField.setValue(phoneNumber);
    };

    async clickOnPhoneNumber() {
        await this.phoneNumberField.click();
    };

    async clickLoginByPasswordLink() {
        await this.loginByPasswordLink.click();
    };

    async inputPassword(password) {
        await this.passwordField.setValue(password);
    };

    async clickLoginButton() {
        await this.loginButton.click();
    };

    async verifyPhoneNumberFieldIsDisplayed() {
        await expectationHelpers.verifyIsDisplayed(this.phoneNumberField);
    };

    async verifyLoginByPasswordLinkIsDisplayed() {
        await expectationHelpers.verifyIsDisplayed(this.loginByPasswordLink);
    };

    async verifyPasswordFieldIsDisplayed() {
        await expectationHelpers.verifyIsDisplayed(this.passwordField);
    };

    async verifyLoginButtonIsDisplayed() {
        await expectationHelpers.verifyIsDisplayed(this.loginButton);
    };
}

module.exports = new LoginPage();
