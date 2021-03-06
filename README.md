# Предварительные условия
1. Глобально установлен "Appium" (https://appium.io/docs/en/about-appium/getting-started/#installing-appium).
1. Установлен "UiAutomator2 Driver for Android" (https://appium.io/docs/en/drivers/android-uiautomator2/index.html#basic-setup).
1. Установлен stable Node.js.
1. Команда `appium-doctor --android` успешно проходит все проверки (https://appium.io/docs/en/about-appium/getting-started/#verifying-the-installation).
1. На эмуляторе или физическом устройстве для теста установлено приложение "Мой Билайн".

# Как запустить тесты локально
1. Запустить эмулятор или подключить физическое устройство на базе ОS Android.
1. Склонировать или загрузить данный репозиторий.
1. Перейти в корневую директорию загруженного репозитория.
1. Выполнить команду `npm install` в командной строке.
1. Установить в локальной ОС переменную окружения `USER_PHONENUMBER` с номером телефона, с помощью которого будет выполняться вход в приложение.
1. Установить в локальной ОС переменную окружения `USER_PASSWORD` с паролем, с помощью которого будет выполняться вход в приложение.    
1. Выполнить команду `npm run android-test` в командной строке.

# Как просмотреть тестовый отчет
1. Сгенерировать отчет, выполнив команду `npm run generate-allure-report` в командной строке.
1. Открыть отчет, выполнив команду `npm run open-allure-reportt` в командной строке.

Тестовый отчет откроется в браузере.

# Ограничения реализации
- Используется глобально установленный Appium.
- Подключена стандартная функциональность Allure отчета без логирования кастомных шагов.
- Отсутствует обработка splash screen после входа в приложение.