const userInterface = (data) => {
    const modalTrigger = document.querySelector('[data-modal]');
    const helloUser = document.createElement('div');
    // modalTrigger.classList.toggle('hidden');
    modalTrigger.firstElementChild.textContent = `Hello ${data.username}`;
    modalTrigger.lastElementChild.classList.remove('fa-sign-in-alt');
    modalTrigger.lastElementChild.classList.add('fa-sign-out-alt');
    modalTrigger.parentNode.appendChild(helloUser);
    // console.log(document.querySelector('.fas fa-sign-out-alt'));
};

export default userInterface;
