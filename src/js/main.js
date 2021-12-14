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
import { exchangeRate } from './services/exchangeRate';

window.addEventListener('DOMContentLoaded', () => {
    exchangeRate();
    modalWindow();
    forms();
    gridComponent();
    auth();
    stateOfChecked.update();
});
