const { config } = require('./wdio.conf');

config.capabilities = [
    {
        platformName: 'Android',
        platformVersion: '9',
        deviceName: 'Device1',
        appPackage: 'ru.beeline.services',
        appActivity: 'ru.beeline.RootActivity',
        automationName: 'UiAutomator2',
    },
];

exports.config = config;
