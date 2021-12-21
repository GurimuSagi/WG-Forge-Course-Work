import '../style/style.scss';
import '../style/animate.scss';
import '../style/style.detail.scss';
import { exchangeRate } from './services/exchangeRate';
import { modalWindow } from './modules/modal';
import forms from './modules/forms';
import { auth } from './services/requests';
import './services/router/router';
import './services/app/app';
import './services/helper/validation';
import './services/helper/handlers';
import stateOfChecked from './services/helper/filter';
import { checkShippingCartCount } from './services/helper/core';

window.addEventListener('DOMContentLoaded', () => {
    auth();
    exchangeRate();
    modalWindow();
    forms();
    stateOfChecked.update();
    checkShippingCartCount();
});
