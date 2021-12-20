import { login, logout } from '../services/requests';

const forms = () => {
    const allForms = document.querySelectorAll('form');
    allForms.forEach((form) => {
        const f = form;
        f.onsubmit = (e) => {
            e.preventDefault();
            const submitBtn = f.querySelector('.sign-in-btn');
            const formData = new FormData(form);
            if (form.getAttribute('id') === 'login-form') {
                login(formData, 'login', f);
            } else if (form.getAttribute('id') === 'sign-in-form') {
                login(formData, 'register', f);
            } else {
                logout(f);
            }
            submitBtn.disabled = true;
        };
    });
};

export default forms;
