import { login } from '../services/requests.js';

const forms = () => {
    const allForms = document.querySelectorAll('form');
    // console.log(formElem);
    allForms.forEach(form => {
        form.onsubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            if (form.getAttribute('id') === 'login-form') {
                login(formData, 'login');
            } else {
                login(formData, 'register');
            }
        };
    });
};

export default forms;
