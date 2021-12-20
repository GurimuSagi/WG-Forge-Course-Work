/* eslint-disable import/no-cycle */
import data from '../helper/database/data';
import routes from './routes';
import {
    getItems,
    getKeyByValue,
    parseLSItem,
    addNotifyBlock,
    parseLocation,
    getId,

} from '../helper/core';
import createSlider from '../../modules/slider';
import { grid } from '../helper/constants';

window.location.hash = '#/';

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
    const id = getId();
    const path = parseLocation();
    const detailTank = data.all.find((tank) => tank.uuid === id);
    const componentByPath = (p, r) => r.find((item) => item.path === p) || undefined;
    const { component } = componentByPath(path, routes);
    if (path === '/') {
        grid.style.display = 'grid';
        const renderData = data[getKeyByValue(true)];
        grid.innerHTML = component(renderData);
        const el = document.querySelectorAll('.bg');
        el.forEach((a) => {
            observer.observe(a);
        });
    } else if (path === 'detail') {
        grid.innerHTML = component(detailTank);
        grid.style.display = 'block';
        createSlider(detailTank);
    } else if (path === 'wishlist' && parseLSItem('user')) {
        grid.innerHTML = component(getItems());
        grid.style.display = 'grid';
    } else if (path === 'wishlist' && !parseLSItem('user')) {
        addNotifyBlock();
        window.location.hash = '#/';
    }
};

export default router;
