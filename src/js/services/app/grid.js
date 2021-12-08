import data from '../helper/data';
import router from '../router/router';

const gridComponent = () => {
    const grid = document.querySelector('.grid');

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
};

export default gridComponent;
