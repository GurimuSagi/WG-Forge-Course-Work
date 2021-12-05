import userInterface from '../modules/userInterface';

const auth = async () => {
    const res = localStorage.getItem('token');
    let userData = {
        id: '',
        username: '',
        email: '',
    };
    console.log(res);

    if (res) {
        const response = await fetch('https://stark-temple-62869.herokuapp.com/api/user/', {
            method: 'GET',
            headers: {
                authorization: `Token ${res}`,
            },
        });
        userData = await response.json();
        if (userData.id) {
            console.log('qweqwe');
        }
        console.log(userData);
        await userInterface(userData);
    }
};

const login = async (data, path) => {
    let res = localStorage.getItem('token');

    try {
        const response = await fetch(`https://stark-temple-62869.herokuapp.com/api/${path}/`, {
            method: 'POST',
            body: data,
        });
        res = await response.json();
        res = res.token;
        if (res !== undefined) {
            localStorage.setItem('token', res);
        }
        auth();
    } catch (error) {
        console.error('Ошибка:', JSON.stringify(error));
    }
};

export { login, auth };
