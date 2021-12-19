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
    shippingCartHandler,
    backToShoppingCart,
    gridHandler,
} from '../helper/core';
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
shoppingCart.addEventListener('click', shippingCartHandler);
BackToShoppingListBnt.addEventListener('click', backToShoppingCart);
grid.addEventListener('click', gridHandler);
