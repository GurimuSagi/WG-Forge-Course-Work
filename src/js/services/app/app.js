import {
    coverPlace,
    shoppingButton,
    closeShoppingCartBtn,
    closePayBtn,
    PayShoppingCartBtn,
    shoppingCart,
    BackToShoppingListBnt,
    grid,
} from '../helper/constants';

import {
    closeShoppingCart,
    openPay,
    openShoppingCart,
    closeShoppingCartAndPay,
    backToShoppingCart,
} from '../helper/core';
import { gridHandler, shoppingCartHandler } from '../helper/handlers';

import router from '../router/router';

const premium = document.querySelector('.premium');

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

premium.addEventListener('click', () => {
    window.location.hash = '/';
});

shoppingButton.addEventListener('click', openShoppingCart);
coverPlace.addEventListener('click', closeShoppingCartAndPay);
closeShoppingCartBtn.addEventListener('click', closeShoppingCart);
closePayBtn.addEventListener('click', closeShoppingCartAndPay);
PayShoppingCartBtn.addEventListener('click', openPay);
shoppingCart.addEventListener('click', shoppingCartHandler);
BackToShoppingListBnt.addEventListener('click', backToShoppingCart);
grid.addEventListener('click', gridHandler);
