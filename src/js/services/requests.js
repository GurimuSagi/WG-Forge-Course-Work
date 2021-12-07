import { userInterface } from '../modules/modal';
// import modalWindow from '../modules/modal';
let res = localStorage.getItem('token');
let authType = 'loggedIn';

const auth = async () => {
    let userData = {
        id: '',
        username: '',
        email: '',
    };

    if (res) {
        const response = await fetch('https://stark-temple-62869.herokuapp.com/api/user/', {
            method: 'GET',
            headers: {
                authorization: `Token ${res}`,
            },
        });
        userData = await response.json();
        console.log(userData, authType);
        if (userData.id) {
            await userInterface(authType, userData);
        }
    }
};

const login = async (data, path) => {
    try {
        const response = await fetch(`https://stark-temple-62869.herokuapp.com/api/${path}/`, {
            method: 'POST',
            body: data,
        });
        res = await response.json();
        console.log(res);
        res = res.token;
        if (res !== undefined) {
            localStorage.setItem('token', res);
        }
        if (path === 'login') {
            authType = 'loggedIn';
        } else {
            authType = 'registered';
        }
        auth();
    } catch (error) {
        console.error('Ошибка:', JSON.stringify(error));
    }
};

const logout = async () => {
    await fetch('https://stark-temple-62869.herokuapp.com/api/logout/', {
        method: 'POST',
        headers: {
            authorization: `Token ${res}`,
        },
    });
    authType = 'logout';
    localStorage.setItem('token', '');
    userInterface(authType);
};

export { login, auth, logout };
