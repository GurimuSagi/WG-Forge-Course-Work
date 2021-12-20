import {
    cardNumber,
    monthField,
    yearField,
    nameField,
    cvcField,
    payForm,
} from './constants';
import { getUserName, closeShoppingCartAndPay, deleteFromLocalStorage } from './core';

cardNumber.addEventListener('keydown', (event) => {
    if (cardNumber.value.length > 15 && event.key !== 'Backspace') {
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

payForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (cardNumber.validity.valid
    && monthField.validity.valid
    && yearField.validity.valid
    && nameField.validity.valid
    && cvcField.validity.valid
    ) {
        cardNumber.value = '';
        monthField.value = '';
        yearField.value = '';
        nameField.value = '';
        cvcField.value = '';
        closeShoppingCartAndPay();
        deleteFromLocalStorage(`${getUserName()}-cart`);
    }
});
