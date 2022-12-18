# Snippets library

Библиотека сниппетов для типовых задач. Npm-зависимостей здесь нет

## Как использовать

Берёшь нужный файл, копируешь код в свой проект.<br/>

## Содержимое:

### Хуки

* [useWindowScroll](https://github.com/Forestvov/_library/blob/main/hooks/useWindowScroll.js) - для отслеживания скролла страницы
* [useOnOutsideClick](https://github.com/Forestvov/_library/blob/main/hooks/useOnOutsideClick.js) - хук, реагирующий на клик вне блока
* [useWindowSize](https://github.com/Forestvov/_library/blob/main/hooks/useWindowSize.js) - хук, возвращающий размеры экрана
* [convertErrors](https://github.com/Forestvov/_library/blob/main/hooks/convertErrors.js) - хук, конвертирующий ошибки приходящие с бэка при отправке формы
* [useDebounce](https://github.com/Forestvov/_library/blob/main/hooks/useDebounce.js) - хук, позволяющий дебаунсить любое быстро меняющееся значение

### Компоненты

* [TextToggle](https://github.com/Forestvov/_library/blob/main/components/TextToggle) - компонент для разворачивания/сворачивания текста
* [MetaLayout](https://github.com/Forestvov/_library/blob/main/components/layouts/MetaLayout.js) - компонент обертка для meta данных страницы
* [Price](https://github.com/Forestvov/_library/blob/main/components/Price.js) - компонент для форматирование цены по типу **3 000 ₽**

### Утилиты

* [noop](https://github.com/Forestvov/_library/blob/main/utils/noop.js) - функция заглушка
* [setCookie](https://github.com/Forestvov/_library/blob/main/utils/setCookie.js) - функция, устанавливающая куку
* [getCookie](https://github.com/Forestvov/_library/blob/main/utils/getCookie.js) - функция, возвращающая куку
* [queryPhp](https://github.com/Forestvov/_library/blob/main/utils/queryPhp.js) - функция, возвращающая строку в виде квери параметров
* [getNoun](https://github.com/Forestvov/_library/blob/main/utils/getNoun.js) - функция, возвращающая и склоняющая слово от зависимости числа (1 товар, 2 товара, 5 товаров)
* [getData](https://github.com/Forestvov/_library/blob/main/utils/getData.js) - функция, конвертирующая дату с бэка в нужный формат
* [fixPopup](https://github.com/Forestvov/_library/blob/main/utils/fixPopup.js) - функция, блокирующая скролл страницы + добавляет отступ, чтоб страница не дергалась


### [Redux Toolkit RTK Query](https://redux-toolkit.js.org/tutorials/rtk-query)

Вообще все зависит от бэка и дизайна. <br/>
В библиотеке приведены несколько примеров реализации **редюсеров** и **сервисов(api)**  <br/>

`Reducers:`
* [authReducer](https://github.com/Forestvov/_library/blob/main/store/reducers/authReducer.js) - редюсер авторизации
* [cartReducer](https://github.com/Forestvov/_library/blob/main/store/reducers/cartReducer.js) - редюсер коризны
* [profileReducer](https://github.com/Forestvov/_library/blob/main/store/reducers/profileReducer.js) - редюсер профиля

`Services:`
* [authService](https://github.com/Forestvov/_library/blob/main/store/services/authService) - сервис авторизации
* [cartService](https://github.com/Forestvov/_library/blob/main/store/services/cartService) - сервис коризны
* [profileService](https://github.com/Forestvov/_library/blob/main/store/services/profileService.js) - сервис профиля