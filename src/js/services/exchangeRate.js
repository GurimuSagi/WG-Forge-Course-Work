// eslint-disable-next-line import/no-cycle
import getData from './http/api';

let exchangeRates = { USD: 1 };
let currentRate = 'USD';
let coefficient;

const exchangeRate = async () => {
    await fetch('https://freecurrencyapi.net/api/v2/latest?apikey=c4dde9e0-5aa2-11ec-9a41-3950c67221af')
        .then((i) => i.json())
        .then((i) => {
            exchangeRates = i.data;
        });

    await fetch('http://165.22.21.103/catalog/currency/')
        .then((j) => j.json())
        .then((j) => {
            currentRate = j[0].name;
            if (currentRate === 'USD') {
                coefficient = 1;
            } else {
                coefficient = exchangeRates[currentRate];
            }
            getData();
        });
};

const calcDiscount = (item) => {
    if (item.discount > 0) {
        const percents = ((item.discount * 100) / item.price).toFixed(0);
        return `<span class="discount-percent">Скидка ${percents}%</span>`;
    }
    return '';
};

const calcExchangeRate = (val, discount) => {
    const basePrice = val;
    const modifiedPrice = (basePrice * coefficient).toFixed(2);
    if (discount > 0) {
        const newPrice = (modifiedPrice - (discount * coefficient)).toFixed(2);
        return `<p class="old-price">${modifiedPrice}</p>&nbsp;<p class="new-price">${newPrice} ${currentRate}</p>`;
    }
    return `<p>${modifiedPrice} ${currentRate}</p>`;
};

export { exchangeRate, calcExchangeRate, calcDiscount };
