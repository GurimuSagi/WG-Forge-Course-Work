import { userInterface } from '../modules/modal';
import { countOfWish, ShoppingCartBlock } from './helper/constants';
import {
    checkShippingCartCount, getAllShoppingListItems, getItems, updateLikes,
// eslint-disable-next-line import/named
} from './helper/core';
import router from './router/router';
import data from './helper/database/data';
// eslint-disable-next-line import/named
import { ShoppingCart } from './router/components';

const span = document.createElement('span');
const signInBtns = document.querySelectorAll('.sign-in-btn');
let userData = {};
let res = localStorage.getItem('token');
let authType = 'loggedIn';

const handlingResponse = (form, response) => {
    const loginBtn = form.querySelector('.sign-in-btn');
    if (response.non_field_errors && response.non_field_errors[0] === 'Unable to log in with provided credentials.') {
        span.innerText = 'Не верные имя пользователя или пароль';
    } else if (response.username && response.username[0] === 'A user with that username already exists.') {
        span.innerText = 'Данное имя пользователя уже занято';
    } else if (response.username && response.username[0] === 'Enter a valid username. This value may contain only letters, numbers, and @/./+/-/_ characters.') {
        span.innerText = 'Имя пользователя может содержать только буквы, цифры, и символы @/./+/-/_ ';
    } else if (response.email && response.email[0] === 'Enter a valid email address.') {
        span.innerText = 'Email не валидный';
    } else {
        span.innerText = 'Вы успешно зарегистрировались, войдите пожалуйста в свою учетную запись';
    }
    form.insertBefore(span, loginBtn);
    setTimeout(() => {
        loginBtn.disabled = false;
        span.remove();
    }, 3000);
};

const auth = async () => {
    if (res) {
        const response = await fetch('https://tanks-api.demo-project.space/api/user/', {
            method: 'GET',
            headers: {
                authorization: `Token ${res}`,
            },
        });
        userData = await response.json();
        if (userData.id) {
            localStorage.setItem('user', JSON.stringify(userData));
            if (!localStorage.getItem(`${userData.username}-cart`)) {
                localStorage.setItem(`${userData.username}-cart`, JSON.stringify([]));
            }
            countOfWish.textContent = `(${getItems().length})`;
            await userInterface(authType, userData);
        } else if (userData.detail === 'Invalid token.') {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
        updateLikes(data.all);
        checkShippingCartCount();
        router();
    }
};

const login = async (input, path, form) => {
    const response = await fetch(`https://tanks-api.demo-project.space/api/${path}/`, {
        method: 'POST',
        body: input,
    });
    res = await response.json();
    if (res.token && path === 'login') {
        localStorage.setItem('token', res.token);
        res = res.token;
        authType = 'loggedIn';
        auth();
    } else {
        handlingResponse(form, res);
    }
    // const userList = getAllShoppingListItems();
    // if (userList === null) {
    //     localStorage.setItem('userCart', JSON.stringify([]));
    // } else {
    //     localStorage.setItem('userCart', JSON.stringify(userList));
    // }
};

const logout = async () => {
    await fetch('https://tanks-api.demo-project.space/api/logout/', {
        method: 'POST',
        headers: {
            authorization: `Token ${res}`,
        },
    });
    authType = 'logout';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    countOfWish.textContent = '';
    signInBtns.forEach((btn) => {
        const a = btn;
        a.disabled = false;
    });
    window.location.hash = '#/';
    userInterface(authType);
    updateLikes(data.all);
    ShoppingCartBlock.innerHTML = ShoppingCart([]);
    checkShippingCartCount();
    router();
};

export { login, auth, logout };
