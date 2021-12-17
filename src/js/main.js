import '../style/style.scss';
import '../style/style.detail.scss';
import { exchangeRate } from './services/exchangeRate';
import { modalWindow } from './modules/modal';
import forms from './modules/forms';
import { auth } from './services/requests';
import './services/router/router';
// import getData from './services/http/api';
import './services/app/app';
import gridComponent from './services/app/grid';
import stateOfChecked from './services/app/filter';
import { countOfWish } from './services/helper/constants';

// import { ShowUpSlider } from './services/router/components';

window.addEventListener('DOMContentLoaded', () => {
    exchangeRate();
    countOfWish.textContent = `(${localStorage.length})`;
    modalWindow();
    forms();
    gridComponent();
    auth();
    stateOfChecked.update();  
    
    // ShowUpSlider.init();
});
