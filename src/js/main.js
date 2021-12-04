import '../style/style.scss';
import { modalWindow, createPpopup } from './modules/modal.js';
import forms from './modules/forms.js';
import { auth } from './services/requests.js';
import './services/router/router.js';
import './services/api/api.js';
import './services/app/app.js';

window.addEventListener('DOMContentLoaded', () => {
    auth();
    createPpopup();
    modalWindow();
    forms();
});
