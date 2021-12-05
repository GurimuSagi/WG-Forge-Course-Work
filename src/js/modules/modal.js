const modalWindow = () => {
    const modalTrigger = document.querySelector('[data-modal]');
    const modal = document.querySelector('.popup_dialog');
    const modalCloseBtn = document.querySelector('.popup_close');
    const signInMenuBtn = document.querySelectorAll('.sign-in-menu-btn');
    const loginForm = document.querySelector('#login-form');
    const signInForm = document.querySelector('#sign-in-form');

    function closeModal() {
        modal.classList.toggle('show');
    }

    modalTrigger.addEventListener('click', () => {
        modal.classList.toggle('show');
    });

    modalCloseBtn.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

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
};

const createPpopup = () => {
    const popup = document.createElement('div');
    popup.classList.add('popup_dialog');
    const popupTemplate = `
        <button type="button" class="popup_close"><strong>&times;</strong></button>
        <form id="login-form">
            <input type="text" name="username" placeholder="username">
            <input type="text" name="password" placeholder="password">
            <button class="sign-in-btn" type="submit">Login</button>
        </form>
        <form id="sign-in-form" class="hidden">
            <input type="text" name="username" placeholder="username">
            <input type="text" name="email" placeholder="email">
            <input type="text" name="password" placeholder="password">
            <button class="sign-in-btn" type="submit">Sign in</button>
        </form>
        <div class="sign-in-menu-btn">Sign in</div>
        <div class="sign-in-menu-btn hidden">Log in</div>
    `;
    popup.innerHTML = popupTemplate;
    document.body.appendChild(popup);
};

export { modalWindow, createPpopup };
