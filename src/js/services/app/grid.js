import { countOfWish, grid } from '../helper/constants';
import {
    addToLocalStorage,
    deleteFromLocalStorage,
    parseLSItem,
    getItems,
    addNotifyBlock,
    checkShippingCartCount,
    checkItemContainsShoppingList,
} from '../helper/core';
import data from '../helper/database/data';
import router from '../router/router';

const gridComponent = () => {
    grid.addEventListener('click', (event) => {
        const { id } = (event.target.closest('article')).dataset;
        if (event.target.classList.contains('checkbox')) {
            if (!parseLSItem('user')) {
                addNotifyBlock(event.target);
            } else if (event.target.checked && parseLSItem('user')) {
                const target = data.all.find((tank) => tank.uuid === id);
                target.check = true;
                addToLocalStorage(id, target);
                countOfWish.textContent = `(${getItems().length})`;
            } else if (!event.target.checked && parseLSItem('user')) {
                const target = data.all.find((tank) => tank.uuid === id);
                target.check = false;
                deleteFromLocalStorage(`${parseLSItem('user').username}-cart-${id}`);
                countOfWish.textContent = `(${getItems().length})`;
                if (event.target.classList.contains('checkbox') && window.location.hash === '#/wishlist') {
                    router();
                }
            }
        } else if (event.target.closest('div').classList.contains('add-to-cart')) {
            const target = data.all.find((tank) => tank.uuid === id);
            target.count = 1;
            if (localStorage.getItem('userCart')) {
                if (!checkItemContainsShoppingList(id)) {
                    const cart = JSON.parse(localStorage.getItem('userCart'));
                    cart.push(target);
                    localStorage.setItem('userCart', JSON.stringify(cart));
                }
            }
            checkShippingCartCount();
        }
    });
};

export default gridComponent;
