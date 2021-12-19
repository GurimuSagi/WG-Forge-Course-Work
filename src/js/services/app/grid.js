import { countOfWish } from '../helper/constants';
import {
    addToLocalStorage,
    deleteFromLocalStorage,
    parseLSItem,
    getItems,
    addNotifyBlock,
    checkShippingCartCount,
    checkItemContainsShoppingList,
    getUserName,
} from '../helper/core';
import data from '../helper/database/data';
import router from '../router/router';

const gridComponent = () => {
    const grid = document.querySelector('.grid');
    grid.addEventListener('click', (event) => {
        const { id } = (event.target.closest('article')).dataset;
        if (event.target.classList.contains('checkbox')) {
            if (!parseLSItem('user')) {
                addNotifyBlock(event.target);
            } else if (event.target.checked) {
                const target = data.all.find((tank) => tank.uuid === id);
                target.check = true;
                addToLocalStorage(id, target);
                countOfWish.textContent = `(${getItems().length})`;
            } else if (!event.target.checked) {
                const target = data.all.find((tank) => tank.uuid === id);
                target.check = false;
                deleteFromLocalStorage(`${getUserName()}-wl-${id}`);
                countOfWish.textContent = `(${getItems().length})`;
                if (event.target.classList.contains('checkbox') && window.location.hash === '#/wishlist') {
                    router();
                }
            }
        } else if (event.target.closest('div').classList.contains('add-to-cart')) {
            if (!parseLSItem('user')) {
                addNotifyBlock();
            } else {
                const target = data.all.find((tank) => tank.uuid === id);
                target.count = 1;
                if (localStorage.getItem(`${getUserName()}-cart`)) {
                    if (!checkItemContainsShoppingList(id)) {
                        const cart = JSON.parse(localStorage.getItem(`${getUserName()}-cart`));
                        cart.push(target);
                        localStorage.setItem(`${getUserName()}-cart`, JSON.stringify(cart));
                    }
                }
                checkShippingCartCount();
            }
        }
    });
};

export default gridComponent;
