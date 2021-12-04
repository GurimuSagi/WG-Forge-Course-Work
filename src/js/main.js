import '../style/style.scss';
import { modalWindow, createPpopup } from './modules/modal.js';
import forms from './modules/forms.js';
import { auth } from './services/requests.js';
import './services/router/router';
import './services/api/api';
import './services/app/app';

window.addEventListener('DOMContentLoaded', () => {
    auth();
    createPpopup();
    modalWindow();
    forms();
});
