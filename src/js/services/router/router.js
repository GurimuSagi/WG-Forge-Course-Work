/* eslint-disable import/no-cycle */
import data from '../helper/database/data';
import { routes } from './routes';
import {
    getItems,
    parseLSItem,
    addNotifyBlock,
    parseLocation,
    getId,

} from '../helper/core';
import createSlider from '../../modules/slider';
import { grid } from '../helper/constants';
import IntersectObserver from '../app/observers';

// window.location.hash = '#/';

const router = () => {
    const id = getId();
    const path = parseLocation();
    const detailTank = data.all.find((tank) => tank.uuid === id);
    const componentByPath = (p, r) => r.find((item) => item.path === p) || '';
    const { component } = componentByPath(path, routes);
    if (data[path] || path === '/') {
        grid.style.display = 'grid';
        const renderData = path === '/' ? data.all : data[path];
        grid.innerHTML = component(renderData);
        const el = document.querySelectorAll('.bg');
        el.forEach((a) => {
            IntersectObserver.observe(a);
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
