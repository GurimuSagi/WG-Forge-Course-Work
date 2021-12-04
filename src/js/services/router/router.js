import data from '../helper/data.js';
import routes from './routes.js';

const grid = document.querySelector('.grid');

window.location.hash = '#/';
let id;

// eslint-disable-next-line no-restricted-globals
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

const router = () => {
    const detailTank = data.find((tank) => tank.tank_id === Number(id));
    const path = parseLocation();
    const componentByPath = (p, r) => r.find((item) => item.path === p) || undefined;
    const { component } = componentByPath(path, routes);
    if (path === '/') {
        setTimeout(() => {
            grid.style.display = 'grid';
            grid.innerHTML = component.render(data);
        }, 2000);
    } else if (path === '/detail') {
        grid.innerHTML = component.render(detailTank);
        grid.style.display = 'block';
    } else if (path === '/wishlist') {
        grid.innerHTML = component.render(data);
        grid.style.display = 'grid';
    }
};

grid.addEventListener('click', (event) => {
    if (!event.target.classList.contains('checkbox')) {
        window.location.hash = '/detail';
        id = (event.target.closest('article')).dataset.id;
    }
});

export default router;
