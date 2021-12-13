import { countOfWish } from '../helper/constants';
import { addToLocalStorage, deleteFromLocalStorage, parseLSItem } from '../helper/core';
import data from '../helper/database/data';
import router from '../router/router';

const gridComponent = () => {
    const grid = document.querySelector('.grid');
    grid.addEventListener('click', (event) => {
        const { id } = (event.target.closest('article')).dataset;
        if (event.target.classList.contains('checkbox')) {
            if (!parseLSItem('user') && event.target) {
                const errMessage = document.createElement('p');
                const et = event.target;
                errMessage.innerText = 'Вы не залогинены';
                et.insertAdjacentElement('afterend', errMessage);
                et.checked = false;
                et.disabled = true;
                setTimeout(() => {
                    errMessage.remove();
                    et.disabled = false;
                }, 1000);
            } else if (event.target.checked && parseLSItem('user')) {
                const target = data.all.find((tank) => tank.uuid === id);
                target.check = true;
                addToLocalStorage(id, target);
                countOfWish.textContent = `(${localStorage.length})`;
            } else if (!event.target.checked && parseLSItem('user')) {
                const target = data.all.find((tank) => tank.uuid === id);
                target.check = false;
                deleteFromLocalStorage(`${parseLSItem('user').username}-cart-${id}`);
                countOfWish.textContent = `(${localStorage.length})`;
                if (event.target.classList.contains('checkbox') && window.location.hash === '#/wishlist') {
                    router();
                }
            }
        }
    });
};

export default gridComponent;
