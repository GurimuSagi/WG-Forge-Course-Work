import { countOfWish } from '../helper/constants';
import { addToLocalStorage, deleteFromLocalStorage } from '../helper/core';
import data from '../helper/database/data';
import router from '../router/router';

const gridComponent = () => {
    const grid = document.querySelector('.grid');

    grid.addEventListener('click', (event) => {
        const { id } = (event.target.closest('article')).dataset;
        if (event.target.classList.contains('checkbox')) {
            if (event.target.checked) {
                const target = data.all.find((tank) => tank.uuid === id);
                target.check = true;
                addToLocalStorage(id, target);
                countOfWish.textContent = `(${localStorage.length})`;
            } else if (!event.target.checked) {
                const target = data.all.find((tank) => tank.uuid === id);
                target.check = false;
                deleteFromLocalStorage(id);
                countOfWish.textContent = `(${localStorage.length})`;
                if (event.target.classList.contains('checkbox') && window.location.hash === '#/wishlist') {
                    router();
                }
            }
        }
    });
};

export default gridComponent;
