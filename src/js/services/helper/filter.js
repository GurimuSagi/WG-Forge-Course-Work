import {
    buttonAll, buttonGold, buttonPremium, buttonVehicles,
} from './constants';
// eslint-disable-next-line import/no-cycle
import router from '../router/router';

const stateOfChecked = {
    update: function checkedFilterParams() {
        if (
            !buttonVehicles.checked
            && !buttonGold.checked
            && !buttonPremium.checked
        ) {
            buttonAll.checked = true;
            stateOfChecked.all = true;
        }
    },
    all: false,
    gold: false,
    premium: false,
    vehicles: false,
};

buttonAll.addEventListener('change', () => {
    if (buttonAll.checked) {
        buttonVehicles.checked = false;
        buttonGold.checked = false;
        buttonPremium.checked = false;
        stateOfChecked.all = true;
        stateOfChecked.gold = false;
        stateOfChecked.premium = false;
        stateOfChecked.vehicles = false;
        router();
    }
});
buttonVehicles.addEventListener('change', () => {
    if (buttonVehicles.checked) {
        buttonAll.checked = false;
        buttonGold.checked = false;
        buttonPremium.checked = false;
        stateOfChecked.all = false;
        stateOfChecked.gold = false;
        stateOfChecked.premium = false;
        stateOfChecked.vehicles = true;
        router();
    }
});
buttonGold.addEventListener('change', () => {
    if (buttonGold.checked) {
        buttonAll.checked = false;
        buttonVehicles.checked = false;
        buttonPremium.checked = false;
        stateOfChecked.all = false;
        stateOfChecked.gold = true;
        stateOfChecked.premium = false;
        stateOfChecked.vehicles = false;
        router();
    }
});
buttonPremium.addEventListener('change', () => {
    if (buttonPremium.checked) {
        buttonAll.checked = false;
        buttonVehicles.checked = false;
        buttonGold.checked = false;
        stateOfChecked.all = false;
        stateOfChecked.gold = false;
        stateOfChecked.premium = true;
        stateOfChecked.vehicles = false;
        router();
    }
});

export default stateOfChecked;
