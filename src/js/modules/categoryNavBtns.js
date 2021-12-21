import data from '../services/helper/database/data';

const createCategoryBtns = () => {
    const categoryNav = document.querySelector('.item-nav');
    data.categories.forEach((item) => {
        const navBtn = document.createElement('div');
        navBtn.className = 'category-btn';
        navBtn.innerText = `${item}`;
        navBtn.addEventListener('click', () => {
            window.location.hash = `#/${item.replace(/\s+/g, '')}`;
        });
        categoryNav.appendChild(navBtn);
    });
};

export default createCategoryBtns;
