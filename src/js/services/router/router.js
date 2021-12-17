import data from '../helper/database/data';
// eslint-disable-next-line import/no-cycle
import routes from './routes';
// eslint-disable-next-line import/no-cycle
import stateOfChecked from '../app/filter';
import {
    getItems, getKeyByValue, parseLSItem, addNotifyBlock,
} from '../helper/core';

const grid = document.querySelector('.grid');

window.location.hash = '#/';
let id;

// eslint-disable-next-line no-restricted-globals
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('load-img');
            entry.target.src = entry.target.dataset.src;
            obs.unobserve(entry.target);
        }
    });
});

const router = () => {
    const detailTank = data.all.find((tank) => tank.uuid === id);
    const path = parseLocation();
    const componentByPath = (p, r) => r.find((item) => item.path === p) || undefined;
    const { component } = componentByPath(path, routes);
    if (path === '/') {
        grid.style.display = 'grid';
        const renderData = data[getKeyByValue(stateOfChecked, true)];
        grid.innerHTML = component(renderData);
        const el = document.querySelectorAll('.bg');
        el.forEach((a) => {
            observer.observe(a);
        });
    } else if (path === '/detail') {
        grid.innerHTML = component(detailTank);
        grid.style.display = 'block';
    } else if (path === '/wishlist' && parseLSItem('user')) {
        grid.innerHTML = component(getItems());
        grid.style.display = 'grid';
    } else if (path === '/wishlist' && !parseLSItem('user')) {
        addNotifyBlock();
        window.location.hash = '#/';
    }
};

grid.addEventListener('click', (event) => {
    if (window.location.hash === '#/') {
        if (!event.target.classList.contains('checkbox')) {
            window.location.hash = '/detail';
            id = (event.target.closest('article')).dataset.id;
        }
    }
});

export default router;
