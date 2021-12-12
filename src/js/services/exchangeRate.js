const exchangeRate = async () => {
    const exchange = await fetch('https://freecurrencyapi.net/api/v2/latest?apikey=c4dde9e0-5aa2-11ec-9a41-3950c67221af');
    const exchangeData = await exchange.json();
    console.log(JSON.stringify(exchangeData.data));
};

export default exchangeRate;
