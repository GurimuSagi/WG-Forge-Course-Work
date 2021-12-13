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
        });
};

const calcExchangeRate = (item) => {
    const prod = item;
    const newPrice = (prod * coefficient).toFixed(2);
    return `${newPrice} ${currentRate}`;
};

export { exchangeRate, calcExchangeRate };
