/* eslint-disable import/no-cycle */
// import stateOfChecked from './filter';
import { calcExchangeRate } from '../exchangeRate';
// import { ShoppingCart } from '../router/components';
import data from './database/data';
import {
    countOfShoppingCart,
    coverPlace, payBlock,
    shoppingCart, ShoppingCartBlock,
    shoppingCartItems,
    summPayPage,
    summShoppingList,
} from './constants';
import { ShoppingCart } from '../router/components';

const romanDigits = [0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

// const getKeyByValue = (value) => Object.keys(stateOfChecked)
//     .find((key) => stateOfChecked[key] === value);

const changeCountOfWishItems = (arrayOfWishItems, countValueOnPage) => {
    countValueOnPage.textContent = `(${arrayOfWishItems.length})`;
};

const getUserName = () => (JSON.parse(localStorage.getItem('user')).username);

const addToLocalStorage = (id, item) => {
    localStorage.setItem(`${getUserName()}-wl-${id}`, JSON.stringify(item));
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
            <img class="img-nation" src="${item.nation.icon}"></img>
            <img class="img-type" src="${item.type[0].icon}"></img>
            <span>${romanDigits[item.tier]}</span>
        `;
    }
    return '';
};

const itemIsTank = (item) => {
    if (item.nation != null) {
        return `
            <img class="img-nation" src="${item.nation.icon}"></img>
            <img class="img-type" src="${item.type[0].icon}"></img>
            <span>${romanDigits[item.tier]}</span>
            <span>${item.title}</span>
        `
    }
    return '';
};

const parseLocation = () => location.hash.slice(1).split('/')[1].toLowerCase() || '/';
const getId = () => location.hash.slice(1).split('/')[2];

const getItems = () => {
    const keys = Object.keys(localStorage);
    const wishlist = [];
    keys.forEach((key) => {
        if (key.startsWith(`${getUserName()}-wl-`)) {
            wishlist.push(JSON.parse(localStorage.getItem(key)));
        }
    });
    return wishlist;
};

const updateLikes = (items) => {
    items.forEach((item) => {
        item.check = false;
        if (parseLSItem('user') && localStorage.getItem(`${getUserName()}-wl-${item.uuid}`)) {
            item.check = true;
        }
    });
};

// get item from all list and return. Change trigger of wishlist

const getTarget = (uuid, state) => {
    const target = data.all.find((tank) => tank.uuid === uuid);
    target.check = state;
    return target;
};

// get item from all atmems by id

const getItemById = (id) => {
    const target = data.all.find((tank) => tank.uuid === id);
    return target;
};

// get all items from local storage

const getAllShoppingListItems = () => JSON.parse(localStorage.getItem(`${getUserName()}-cart`));

// add shopping list items to local storage

const addShoppingListItems = (items) => localStorage.setItem(`${getUserName()}-cart`, JSON.stringify(items));

// change data in shopping list item

const changeDataShoppingList = (id, targetValue, value) => {
    const allItems = getAllShoppingListItems();
    if (allItems) {
        const index = allItems.findIndex((i) => i.uuid === id);
        allItems[index].count = value;
        addShoppingListItems(allItems);
    }
};

// Check and update start state of shipping cart count

const checkShippingCartCount = () => {
    if (localStorage.getItem('user') && localStorage.getItem(`${getUserName()}-cart`)) {
        countOfShoppingCart.textContent = `(${(JSON.parse(localStorage.getItem(`${getUserName()}-cart`))).length})`;
    } else {
        countOfShoppingCart.textContent = '';
    }
};

// calc cost shopping cart items

const getCostShoppingCartItems = () => {
    const items = JSON.parse(localStorage.getItem(`${getUserName()}-cart`));
    let result = 0;
    if (items) {
        // eslint-disable-next-line no-return-assign
        items.forEach((item) => result += item.price * item.count);
    }
    return result;
};

// calc cost shopping cart item by id

const getCostShoppingCartOneItem = (uuid) => {
    const items = JSON.parse(localStorage.getItem(`${getUserName()}-cart`));
    let result = 0;
    let cost;
    let count;
    if (items) {
        const index = items.findIndex((i) => i.uuid === uuid);
        count = items[index].count;
        cost = items[index].price;
        result = count * cost;
    }
    return result;
};

// convert Currency for Shopping list

const convertSummToCorrectCurrency = () => {
    const summ = getCostShoppingCartItems();
    const summWithCurrency = calcExchangeRate(summ);
    const div = document.createElement('div');
    div.innerHTML = summWithCurrency;
    return div.textContent || div.innerText || '';
};

// convert Currency for Shopping Item

const convertCostToCorrectCurrency = (uuid) => {
    const cost = getCostShoppingCartOneItem(uuid);
    const CostWithCurrency = calcExchangeRate(cost);
    const div = document.createElement('div');
    div.innerHTML = CostWithCurrency;
    return div.textContent || div.innerText || '';
};

// Open/close Shopping cart

const openShoppingCart = () => {
    if (!parseLSItem('user')) {
        addNotifyBlock();
    } else {
        coverPlace.classList.remove('hidden');
        document.body.classList.add('notScroll');
        shoppingCart.classList.remove('hidden');
        summShoppingList.textContent = convertSummToCorrectCurrency();
        if (localStorage.getItem(`${getUserName()}-cart`)) {
            ShoppingCartBlock.innerHTML = ShoppingCart(JSON.parse(localStorage.getItem(`${getUserName()}-cart`)));
        }
    }
};

const backToShoppingCart = () => {
    payBlock.classList.add('hidden');
    shoppingCartItems.classList.remove('hidden');
};

// delete item from shopping list

const deleteItemFromShoppingList = (id) => {
    const listOfShoppingListItems = JSON.parse(localStorage.getItem(`${getUserName()}-cart`));
    // eslint-disable-next-line max-len
    const updatelistOfShoppingListItems = listOfShoppingListItems.filter((item) => item.uuid !== id);
    localStorage.setItem(`${getUserName()}-cart`, JSON.stringify(updatelistOfShoppingListItems));
    summShoppingList.textContent = convertSummToCorrectCurrency();
    return updatelistOfShoppingListItems;
};

const closeShoppingCart = () => {
    coverPlace.classList.add('hidden');
    document.body.classList.remove('notScroll');
    shoppingCart.classList.add('hidden');
};

const closeShoppingCartAndPay = () => {
    coverPlace.classList.add('hidden');
    document.body.classList.remove('notScroll');
    shoppingCart.classList.add('hidden');
    shoppingCartItems.classList.remove('hidden');
    payBlock.classList.add('hidden');
    document.body.style.marginRight = '0px';
};

// close cart and open pay

const openPay = () => {
    const shoppingList = getAllShoppingListItems();
    if (shoppingList.length > 0) {
        shoppingCartItems.classList.add('hidden');
        payBlock.classList.remove('hidden');
        summPayPage.textContent = convertSummToCorrectCurrency();
    }
};

// check contains item on shopping list

const checkItemContainsShoppingList = (uuid) => {
    const allItems = getAllShoppingListItems();
    const item = allItems.find((i) => i.uuid === uuid);
    if (item !== undefined) {
        return true;
    }
    return false;
};

// change url to dateil/id

const gridHandler = (event) => {
    if (window.location.hash === '#/') {
        if (!event.target.classList.contains('checkbox')
        && !event.target.closest('div').classList.contains('add-to-cart')) {
            const { id } = (event.target.closest('article')).dataset;
            window.location.hash = `/detail/${id}`;
        }
    }
};

// shipping cart Handler

export {
    parseLocation,
    getId,
    checkShippingCartCount,
    // getKeyByValue,
    changeCountOfWishItems,
    addToLocalStorage,
    deleteFromLocalStorage,
    getItems,
    updateLikes,
    parseLSItem,
    addNotifyBlock,
    openShoppingCart,
    closeShoppingCart,
    openPay,
    closeShoppingCartAndPay,
    getItemById,
    checkItemContainsShoppingList,
    backToShoppingCart,
    loadTankIcons,
    itemIsTank,
    getUserName,
    gridHandler,
    getTarget,
    deleteItemFromShoppingList,
    changeDataShoppingList,
    convertSummToCorrectCurrency,
    convertCostToCorrectCurrency,
    getAllShoppingListItems,
    addShoppingListItems,
};
