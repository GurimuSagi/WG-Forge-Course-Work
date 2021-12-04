import '../style/style.scss';
import { modalWindow, createPpopup } from './modules/modal.js';
import forms from './modules/forms.js';
import { auth } from './services/requests.js';

window.addEventListener('DOMContentLoaded', () => {
    auth();
    createPpopup();
    modalWindow();
    forms();
});
