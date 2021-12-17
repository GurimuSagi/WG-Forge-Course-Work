import {
    coverPlace,
    shoppingCart,
} from './constants';

const romanDigits = [0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

const getKeyByValue = (object, value) => Object.keys(object).find((key) => object[key] === value);

const changeCountOfWishItems = (arrayOfWishItems, countValueOnPage) => {
    // eslint-disable-next-line no-param-reassign
    countValueOnPage.textContent = `(${arrayOfWishItems.length})`;
};
const addToLocalStorage = (id, item) => {
    const user = JSON.parse(localStorage.getItem('user'));
    localStorage.setItem(`${user.username}-cart-${id}`, JSON.stringify(item));
};

const parseLSItem = (item) => JSON.parse(localStorage.getItem(item));

const deleteFromLocalStorage = (item) => {
    localStorage.removeItem(item);
};

const addNotifyBlock = (target) => {
    const errMessage = document.createElement('div');
    errMessage.className = 'auth-notify';
    const notificationBlock = document.querySelector('main nav');
    errMessage.innerText = 'Вы не залогинены';
    notificationBlock.insertAdjacentElement('afterend', errMessage);
    let et;
    if (target) {
        et = target;
        et.checked = false;
        et.disabled = true;
    }
    setTimeout(() => {
        errMessage.remove();
        if (target) {
            et.disabled = false;
        }
    }, 1000);
};

const loadTankIcons = (item) => {
    if (item.nation) {
        return `
            <img src="${item.nation.icon}"></img>
            <img src="${item.type[0].icon}"></img>
            <span>${romanDigits[item.tier]}</span>
        `;
    }
    return '';
};

const getItems = () => {
    const keys = Object.keys(localStorage);
    const wishlist = [];
    keys.forEach((key) => {
        if (key.startsWith(`${parseLSItem('user').username}-cart-`)) {
            wishlist.push(JSON.parse(localStorage.getItem(key)));
        }
    });
    return wishlist;
};

const PushToStore = (item, base) => {
    // eslint-disable-next-line no-param-reassign
    item.check = false;
    if (parseLSItem('user') && localStorage.getItem(`${parseLSItem('user').username}-cart-${item.uuid}`)) {
        // eslint-disable-next-line no-param-reassign
        item.check = true;
        base.push(item);
    } else base.push(item);
};

// Open/close Shopping cart

const openShoppingCart = () => {
    coverPlace.classList.remove('hidden');
    document.body.classList.add('notScroll');
    shoppingCart.classList.remove('hidden');
};
const closeShoppingCart = () => {
    coverPlace.classList.add('hidden');
    document.body.classList.remove('notScroll');
    shoppingCart.classList.add('hidden');
};

export {
    getKeyByValue,
    changeCountOfWishItems,
    addToLocalStorage,
    deleteFromLocalStorage,
    getItems,
    PushToStore,
    parseLSItem,
    addNotifyBlock,
    openShoppingCart,
    closeShoppingCart,
    loadTankIcons,
};
