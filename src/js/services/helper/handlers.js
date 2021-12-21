import { ShoppingCart } from '../router/components';
import router from '../router/router';
import {
    countOfWish, ShoppingCartBlock, summShoppingList,
} from './constants';
import {
    addNotifyBlock,
    addToLocalStorage,
    changeDataShoppingList,
    checkItemContainsShoppingList,
    checkShippingCartCount,
    convertCostToCorrectCurrency,
    convertSummToCorrectCurrency,
    deleteFromLocalStorage,
    deleteItemFromShoppingList,
    getItems,
    getTarget,
    getUserName,
    parseLocation,
    parseLSItem,

} from './core';
import data from './database/data';

const gridHandler = (event) => {
    const location = parseLocation();
    let id;
    if (event.target.closest('article')) {
        id = (event.target.closest('article')).dataset.id;
    } else {
        id = event.target.dataset.id;
    }
    if (event.target.classList.contains('checkbox')) {
        if (!parseLSItem('user')) {
            addNotifyBlock(event.target);
        } else if (event.target.checked) {
            const target = getTarget(id, true);
            addToLocalStorage(id, target);
            countOfWish.textContent = `(${getItems().length})`;
        } else if (!event.target.checked) {
            const target = getTarget(id, false);
            addToLocalStorage(id, target);
            deleteFromLocalStorage(`${getUserName()}-wl-${id}`);
            countOfWish.textContent = `(${getItems().length})`;
            if (event.target.classList.contains('checkbox') && window.location.hash === '#/wishlist') {
                router();
            }
        }
    } else if (event.target.closest('div').classList.contains('add-to-cart')
        || event.target.classList.contains('detail_purchase_btn')) {
        if (!parseLSItem('user')) {
            addNotifyBlock();
        } else {
            let target;
            if (id) {
                target = data.all.find((tank) => tank.uuid === id);
            } else {
                const { uuid } = event.target.dataset;
                target = data.all.find((tank) => tank.uuid === uuid);
            }
            target.count = 1;
            if (localStorage.getItem(`${getUserName()}-cart`)) {
                if (!checkItemContainsShoppingList(id)) {
                    const cart = JSON.parse(localStorage.getItem(`${getUserName()}-cart`));
                    cart.push(target);
                    localStorage.setItem(`${getUserName()}-cart`, JSON.stringify(cart));
                }
            }
            checkShippingCartCount();
        }
    } else if (window.location.hash === '#/' || location === 'wishlist' || data[location]) {
        if (!event.target.classList.contains('checkbox')
        && !event.target.closest('div').classList.contains('add-to-cart')) {
            window.location.hash = window.location.hash === '#/' ? `/detail/${id}` : `${location}/detail/${id}`;
        }
    }
};

function shoppingCartHandler(e) {
    if (e.target.classList.contains('deleteItemCart')) {
        const { item } = e.target.dataset;
        const newShoppingList = deleteItemFromShoppingList(item);
        ShoppingCartBlock.innerHTML = ShoppingCart(newShoppingList);
        checkShippingCartCount();
    } else if (e.target.classList.contains('plus')) {
        const oldValue = Number(e.target.previousElementSibling.innerText);
        const { uuid } = e.target.dataset;
        changeDataShoppingList(uuid, 'count', oldValue + 1);
        document.getElementById(`count-${uuid}`).innerText = String(oldValue + 1);
        summShoppingList.textContent = convertSummToCorrectCurrency();
        document.getElementById(`sum-${uuid}`).innerText = convertCostToCorrectCurrency(uuid);
    } else if (e.target.classList.contains('minus')) {
        const oldValue = e.target.nextElementSibling.innerText;
        const { uuid } = e.target.dataset;
        if (oldValue > 1) {
            changeDataShoppingList(uuid, 'count', oldValue - 1);
            document.getElementById(`count-${uuid}`).innerText = String(oldValue - 1);
            summShoppingList.textContent = convertSummToCorrectCurrency();
            document.getElementById(`sum-${uuid}`).innerText = convertCostToCorrectCurrency(uuid);
        }
    }
}

export {
    gridHandler,
    shoppingCartHandler,
};
