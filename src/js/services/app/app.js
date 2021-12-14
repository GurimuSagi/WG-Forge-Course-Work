import { coverPlace, shoppingButton } from '../helper/constants';
import { closeShoppingCart, openShoppingCart } from '../helper/core';

import router from '../router/router';

const premium = document.querySelector('.premium');

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

premium.addEventListener('click', () => {
    window.location.hash = '/';
});

shoppingButton.addEventListener('click', openShoppingCart);
coverPlace.addEventListener('click', closeShoppingCart);
