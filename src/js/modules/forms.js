import { login, logout } from '../services/requests';

const forms = () => {
    const allForms = document.querySelectorAll('form');
    allForms.forEach((form) => {
        const f = form;
        f.onsubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            if (form.getAttribute('id') === 'login-form') {
                login(formData, 'login');
            } else if (form.getAttribute('id') === 'sign-in-form') {
                login(formData, 'register');
            } else {
                logout();
            }
        };
    });
};

export default forms;
