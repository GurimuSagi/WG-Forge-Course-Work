import '../style/style.scss';
import '../style/style.detail.scss';
import { modalWindow, createPpopup } from './modules/modal';
import forms from './modules/forms';
// import from './modules/forms';
import { auth } from './services/requests';
import './services/router/router';
import './services/api/api';
import './services/app/app';
import gridComponent from './services/app/grid';

window.addEventListener('DOMContentLoaded', () => {
    modalWindow();
    forms();
    gridComponent();
    auth();
});
