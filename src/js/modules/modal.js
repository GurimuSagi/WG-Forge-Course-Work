const modalTrigger = document.querySelector('[data-modal]');
const modal = document.querySelector('.popup_dialog');
const signInMenuBtn = document.querySelectorAll('.sign-in-menu-btn');
const loginForm = document.querySelector('#login-form');
const signInForm = document.querySelector('#sign-in-form');
const username = document.querySelector('.username');

const modalWindow = () => {
    signInMenuBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.classList.toggle('hidden');
            signInForm.classList.toggle('hidden');
            signInMenuBtn.forEach((item) => {
                item.classList.toggle('hidden');
            });
        });
    });

    modalTrigger.addEventListener('click', () => {
        modal.classList.toggle('hidden');
    });
};

const userInterface = (authType, data) => {
    modal.classList.add('hidden');
    if (authType === 'loggedIn' || authType === 'registered') {
        username.textContent = `${data.username}`;
        modalTrigger.children[1].textContent = `${data.username}`;
        modalTrigger.children[0].classList.toggle('hidden');
        if (authType === 'loggedIn') {
            modal.children[0].classList.toggle('hidden');
        } else {
            modal.children[1].classList.toggle('hidden');
            signInMenuBtn[0].classList.toggle('hidden');
            signInMenuBtn[1].classList.toggle('hidden');
        }
    } else if (authType === 'logout') {
        modalTrigger.children[0].classList.toggle('hidden');
        modal.children[0].classList.toggle('hidden');
        username.textContent = '';
        modalTrigger.children[1].textContent = '';
    }
    modal.children[2].classList.toggle('hidden');
    modalTrigger.lastElementChild.classList.toggle('fa-sign-in-alt');
    modalTrigger.lastElementChild.classList.toggle('fa-sign-out-alt');
};

export { modalWindow, userInterface };
