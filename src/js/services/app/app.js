import {
    coverPlace,
    shoppingButton,
    closeShoppingCartBtn,
    closePayBtn,
    PayShoppingCartBtn,
} from '../helper/constants';

import {
    closeShoppingCart,
    openPay,
    openShoppingCart,
    closeShoppingCartAndPay,
} from '../helper/core';
import router from '../router/router';

const premium = document.querySelector('.premium');

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

premium.addEventListener('click', () => {
    window.location.hash = '/';
});

shoppingButton.addEventListener('click', openShoppingCart);
coverPlace.addEventListener('click', closeShoppingCart);
closeShoppingCartBtn.addEventListener('click', closeShoppingCart);
closePayBtn.addEventListener('click', closeShoppingCartAndPay);
PayShoppingCartBtn.addEventListener('click', openPay);
