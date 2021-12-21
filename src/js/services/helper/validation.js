import {
    cardNumber,
    monthField,
    yearField,
    nameField,
    cvcField,
    btnPay,
} from './constants';
import { addShoppingListItems, checkShippingCartCount, closeShoppingCartAndPay } from './core';

cardNumber.addEventListener('keydown', (event) => {
    if (!Number(event.key) && event.key !== 'Backspace') {
        event.preventDefault();
    } else if (cardNumber.value.length > 15 && event.key !== 'Backspace') {
        event.preventDefault();
    }
});

monthField.addEventListener('keydown', (event) => {
    if (monthField.value.length > 1 && event.key !== 'Backspace') {
        event.preventDefault();
    }
});

yearField.addEventListener('keydown', (event) => {
    if (yearField.value.length > 1 && event.key !== 'Backspace') {
        event.preventDefault();
    }
});

cvcField.addEventListener('keydown', (event) => {
    if (cvcField.value.length > 2 && event.key !== 'Backspace') {
        event.preventDefault();
    }
});

btnPay.addEventListener('click', () => {
    if (cardNumber.validity.valid
        && monthField.validity.valid
        && yearField.validity.valid
        && nameField.validity.valid
        && cvcField.validity.valid
    ) {
        alert('Удачи в бою!');
        closeShoppingCartAndPay();
        cardNumber.value = '';
        monthField.value = '';
        yearField.value = '';
        nameField.value = '';
        cvcField.value = '';
        addShoppingListItems([]);
        checkShippingCartCount();
    }
});
