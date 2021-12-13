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
    if (localStorage.getItem(item.id)) {
        // eslint-disable-next-line no-param-reassign
        item.check = true;
        base.push(item);
    } else base.push(item);
};

export {
    getKeyByValue,
    changeCountOfWishItems,
    addToLocalStorage,
    deleteFromLocalStorage,
    getItems,
    PushToStore,
    parseLSItem,
};
