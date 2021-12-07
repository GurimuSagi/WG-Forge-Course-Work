import '../style/style.scss';
// import from './modules/forms';
import { auth } from './services/requests';
import './services/router/router';
import './services/api/api';
import './services/app/app';
import { modalWindow } from './modules/modal';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    modalWindow();
    forms();
    auth();
});
