const getKeyByValue = (object, value) => Object.keys(object).find((key) => object[key] === value);

const changeCountOfWishItems = (arrayOfWishItems, countValueOnPage) => {
    // eslint-disable-next-line no-param-reassign
    countValueOnPage.textContent = `(${arrayOfWishItems.length})`;
};

const addToLocalStorage = (id, item) => {
    localStorage.setItem(id, JSON.stringify(item));
};

const deleteFromLocalStorage = (id) => {
    localStorage.removeItem(id);
};

const getItems = () => {
    const keys = Object.keys(localStorage);
    const wishlist = [];
    keys.forEach((key) => wishlist.push(JSON.parse(localStorage.getItem(key))));
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
};
