const appConfig = require('../../../config/app.conf');

const LoginPage = require('../../../page-objects/login/login-page.po');
const HomePage  = require('../../../page-objects/home/home-page.po');

describe('Пользователь успешно входит в приложение', function() {
    const phoneNumber = appConfig.users.testUser.phoneNumber;
    const password = appConfig.users.testUser.password;

    it('Проверить, что отображается поле "Ваш номер телефона"', async function() {
        await LoginPage.verifyPhoneNumberFieldIsDisplayed();
    });

    describe('Отображается расширенная форма входа', function() {
        before(async function() {
            // await LoginPage.clickOnPhoneNumber();
        });

        it('Проверить, что отображается ссылка "Войти с паролем"', async function() {
            await LoginPage.verifyLoginByPasswordLinkIsDisplayed();
        });
    });

    describe('Пользователь ввел номер телефона', function() {
        before(async function() {
            await LoginPage.inputPhoneNumber(phoneNumber);
            await LoginPage.clickLoginByPasswordLink();
        });

        it('Проверить, что отображается поле "Введите пароль"', async function() {
            await LoginPage.verifyPasswordFieldIsDisplayed();
        });
    });

    describe('Пользователь ввел данные для входа', function() {
        before(async function() {
            await LoginPage.inputPassword(password);
            await LoginPage.clickLoginButton();
            await HomePage.waitForHomeButtonToBeDisplayed();
        });

        it('Проверить, что вход выполнен успешно', async function() {
            await HomePage.verifyHomeButtonIsDisplayed();
        });
    });
});
