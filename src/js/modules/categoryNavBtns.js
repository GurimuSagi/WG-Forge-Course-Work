import data from '../services/helper/database/data';

const removeActiveClass = () => {
    const btns = document.querySelectorAll('.category-btn');
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });
};

const createCategoryBtns = () => {
    const categoryNav = document.querySelector('.item-nav');
    data.categories.forEach((item) => {
        const navBtn = document.createElement('p');
        navBtn.className = 'category-btn';
        navBtn.innerText = `${item}`;
        navBtn.addEventListener('click', () => {
            window.location.hash = `#/${item.replace(/\s+/g, '')}`;
            removeActiveClass();
            navBtn.classList.add('active');
        });
        categoryNav.appendChild(navBtn);
    });
};

export { createCategoryBtns, removeActiveClass };
