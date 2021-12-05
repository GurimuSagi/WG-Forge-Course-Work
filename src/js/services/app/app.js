import router from '../router/router';
import data from '../helper/data';
// import wishlist from '../helper/database/wishlist';

const premium = document.querySelector('.premium');
const grid = document.querySelector('.grid');

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

premium.addEventListener('click', () => {
    window.location.hash = '/';
});

grid.addEventListener('click', (event) => {
    const { id } = (event.target.closest('article')).dataset;
    if (event.target.classList.contains('checkbox')) {
        if (event.target.checked) {
            const target = data.find((tank) => tank.tank_id === Number(id));
            target.check = true;
        } else if (!event.target.checked) {
            const target = data.find((tank) => tank.tank_id === Number(id));
            target.check = false;
            if (event.target.classList.contains('checkbox') && window.location.hash === '#/wishlist') {
                router();
            }
        }
    }
});
