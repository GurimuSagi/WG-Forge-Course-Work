import { countOfWish } from '../helper/constants';
import {
    addToLocalStorage, deleteFromLocalStorage, parseLSItem, getItems, addNotifyBlock,
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
        }
    });
};

export default gridComponent;
