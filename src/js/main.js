import '../style/style.scss';
import { modalWindow, createPpopup } from './modules/modal';
import forms from './modules/forms';
import { auth } from './services/requests';
import './services/router/router';
import './services/api/api';
import './services/app/app';

window.addEventListener('DOMContentLoaded', () => {
    auth();
    createPpopup();
    modalWindow();
    forms();
});
