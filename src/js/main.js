import '../style/style.scss';
import '../style/style.detail.scss';
import { modalWindow } from './modules/modal';
import forms from './modules/forms';
import { auth } from './services/requests';
import './services/router/router';
import './services/http/api';
import './services/app/app';
import gridComponent from './services/app/grid';
import stateOfChecked from './services/app/filter';
import { countOfWish } from './services/helper/constants';
import { exchangeRate } from './services/exchangeRate';

window.addEventListener('DOMContentLoaded', () => {
    countOfWish.textContent = `(${localStorage.length})`;
    exchangeRate();
    modalWindow();
    forms();
    gridComponent();
    auth();
    stateOfChecked.update();
});
