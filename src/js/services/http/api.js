import {
    allProductsUrl,
    prodTypes,
} from '../helper/api.helper';
import { updateLikes } from '../helper/core';
import data from '../helper/database/data';
import router from '../router/router';

const getProdTypes = fetch(prodTypes);
const getAllProducts = fetch(allProductsUrl);

const getData = async () => {
    await getProdTypes
        .then((response) => response.json())
        .then((types) => {
            types.forEach((type) => {
                data[type.name] = [];
            });
        });

    await getAllProducts
        .then((response) => response.json())
        .then((products) => {
            data.all = products;
            products.forEach((prod) => {
                prod.prod_type.forEach((item) => {
                    data[item.name].push(prod);
                });
            });
            console.log(data);
        });

    updateLikes(data.all);
    router();
};

export default getData;
