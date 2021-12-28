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
import createFilter from '../../modules/filter-vehicles';
import { lazyLoadObserver, removeObserver } from '../app/observers';

const router = () => {
    const id = getId();
    const path = parseLocation();
    const detailTank = data.all.find((tank) => tank.uuid === id);
    const componentByPath = (p, r) => r.find((item) => item.path === p) || '';
    const { component } = componentByPath(path, routes);

    if ((data[path] || path === '/') && data.all.length > 0) {
        grid.innerHTML = '';

        if (path === 'vehicles') {
            createFilter(data);
        } else {
            createFilter(false);
        }
        grid.style.display = 'grid';
        const renderData = path === '/' ? data.all : data[path];
        lazyLoadObserver(renderData, component);
    } else if (detailTank && path === 'detail') {
        grid.innerHTML = component(detailTank);
        grid.style.display = 'block';
        createSlider(detailTank);
        removeObserver();
    } else if (path === 'wishlist' && parseLSItem('user')) {
        grid.innerHTML = component(getItems());
        grid.style.display = 'grid';
        removeObserver();
    } else if (path === 'wishlist' && !parseLSItem('user')) {
        window.location.hash = '#/';
    }
};

export default router;
