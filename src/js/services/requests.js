import { userInterface } from '../modules/modal';
// import modalWindow from '../modules/modal';
let res = localStorage.getItem('token');
let authType = 'loggedIn';
const span = document.createElement('span');
const signInBtns = document.querySelectorAll('.sign-in-btn');
let userData = {};

const handlingResponse = (form, response) => {
    const loginBtn = form.querySelector('.sign-in-btn');

    if (response.non_field_errors && response.non_field_errors[0] === 'Unable to log in with provided credentials.') {
        span.innerText = 'Не верные имя пользователя или пароль';
    } else if (response.username && response.username[0] === 'A user with that username already exists.') {
        span.innerText = 'Данное имя пользователя уже занято';
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
        const response = await fetch(' http://165.22.21.103/api/user/', {
            method: 'GET',
            headers: {
                authorization: `Token ${res}`,
            },
        });
        userData = await response.json();
        if (userData.id) {
            localStorage.setItem('user', JSON.stringify(userData));
            await userInterface(authType, userData);
        }
    }
};

const login = async (data, path, form) => {
    const response = await fetch(` http://165.22.21.103/api/${path}/`, {
        method: 'POST',
        body: data,
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
};

const logout = async () => {
    await fetch(' http://165.22.21.103/api/logout/', {
        method: 'POST',
        headers: {
            authorization: `Token ${res}`,
        },
    });
    authType = 'logout';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    signInBtns.forEach((btn) => {
        const a = btn;
        a.disabled = false;
    });
    userInterface(authType);
};

export { login, auth, logout };
