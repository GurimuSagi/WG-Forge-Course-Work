import '../style/style.scss';
import '../style/style.detail.scss';
import { modalWindow } from './modules/modal';
import forms from './modules/forms';
// import from './modules/forms';
import { auth } from './services/requests';
import './services/router/router';
import './services/api/api';
import './services/app/app';
import gridComponent from './services/app/grid';
import exchangeRate from './services/exchangeRate';

window.addEventListener('DOMContentLoaded', () => {
    exchangeRate();
    modalWindow();
    forms();
    gridComponent();
    auth();
});
