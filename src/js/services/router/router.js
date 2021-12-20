import data from '../helper/database/data';
// eslint-disable-next-line import/no-cycle
import routes from './routes';
// eslint-disable-next-line import/no-cycle
import stateOfChecked from '../app/filter';
// eslint-disable-next-line import/no-cycle
import {
    getItems, getKeyByValue, parseLSItem, addNotifyBlock,
} from '../helper/core';
import createSlider from '../../modules/slider';
import IntersectObserver from '../app/observers';

const grid = document.querySelector('.grid');

window.location.hash = '#/';
let id;

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

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
            IntersectObserver.observe(a);
        });
        if (grid.children.length > 0 && !document.body.classList.contains('loaded')) {
            document.body.classList.add('loaded_hiding');
            setTimeout(() => {
                document.body.classList.add('loaded');
                document.body.classList.remove('loaded_hiding');
            }, 1000);
        }
    } else if (path === '/detail') {
        grid.innerHTML = component(detailTank);
        grid.style.display = 'block';
        createSlider(detailTank);
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
        if (!event.target.classList.contains('checkbox')
        && !event.target.closest('div').classList.contains('add-to-cart')) {
            window.location.hash = '/detail';
            id = (event.target.closest('article')).dataset.id;
        }
    }
});
export default router;
