import {
    tankUrl,
    goldUrl,
    premiumdUrl,
} from '../helper/api.helper';
import { updateLikes } from '../helper/core';
import data from '../helper/database/data';
// eslint-disable-next-line no-unused-vars
import router from '../router/router';

const getAllTanks = fetch(tankUrl);
const getAllGolds = fetch(goldUrl);
const getAllPremium = fetch(premiumdUrl);

const getData = async () => {
    await getAllTanks
        .then((i) => i.json())
        .then((d) => {
            data.vehicles = d;
            data.collect();
        });

    await getAllGolds
        .then((i) => i.json())
        .then((d) => {
            data.gold = d;
            data.collect();
        });

    await getAllPremium
        .then((i) => i.json())
        .then((d) => {
            data.premium = d;
            data.collect();
        });
    updateLikes(data.all);
    router();
};

export default getData;
