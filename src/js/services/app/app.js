import {
    coverPlace,
    shoppingButton,
    closeShoppingCartBtn,
    closePayBtn,
    PayShoppingCartBtn,
    shoppingCart,
    BackToShoppingListBnt,
    grid,
    logo,
    wishListBtn,
} from '../helper/constants';
import { removeActiveClass } from '../../modules/categoryNavBtns';
import {
    closeShoppingCart,
    openPay,
    openShoppingCart,
    closeShoppingCartAndPay,
    backToShoppingCart,
    openWishlist,
} from '../helper/core';
import { gridHandler, shoppingCartHandler } from '../helper/handlers';

import router from '../router/router';

const premium = document.querySelector('.premium');

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

premium.addEventListener('click', () => {
    window.location.hash = '/';
    removeActiveClass();
});

if (window.location.hash === '') {
    window.location.hash = '#/';
}

wishListBtn.addEventListener('click', openWishlist);
shoppingButton.addEventListener('click', openShoppingCart);
coverPlace.addEventListener('click', closeShoppingCartAndPay);
closeShoppingCartBtn.addEventListener('click', closeShoppingCart);
closePayBtn.addEventListener('click', closeShoppingCartAndPay);
PayShoppingCartBtn.addEventListener('click', openPay);
shoppingCart.addEventListener('click', shoppingCartHandler);
BackToShoppingListBnt.addEventListener('click', backToShoppingCart);
grid.addEventListener('click', gridHandler);
logo.addEventListener('click', () => {
    window.location.hash = '#/';
    removeActiveClass();
});
