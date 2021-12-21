import { createCategoryBtns } from '../../modules/categoryNavBtns';
import {
    allProductsUrl,
    prodTypes,
} from '../helper/api.helper';
import { updateLikes } from '../helper/core';
import data from '../helper/database/data';
import router from '../router/router';
import { addRoutes } from '../router/routes';

const getProdTypes = fetch(prodTypes);
const getAllProducts = fetch(allProductsUrl);

const getData = async () => {
    await getProdTypes
        .then((response) => response.json())
        .then((types) => {
            let name = '';
            types.forEach((type) => {
                name = type.name.replace(/\s+/g, '');
                data[name] = [];
                data.categories.push(type.name);
                addRoutes(name);
            });
            createCategoryBtns();
        });

    await getAllProducts
        .then((response) => response.json())
        .then((products) => {
            let name = '';
            products.forEach((prod) => {
                if (prod.display === true) {
                    if (prod.prod_type.length > 0) {
                        data.all.push(prod);
                    }
                    prod.prod_type.forEach((item) => {
                        name = item.name.replace(/\s+/g, '');
                        data[name].push(prod);
                    });
                }
            });
        });

    updateLikes(data.all);
    router();
};

export default getData;
