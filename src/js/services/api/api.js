import url from '../helper/api.helper.js';
import data from '../helper/data.js';

const getAllItems = fetch(url);

getAllItems
    .then((i) => i.json())
    .then((i) => Object.entries(i)[2])
    .then((i) => Object.entries(i)[1])
    .then((i) => Object.values(i[1]).forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.check = false;
        data.push(item);
    }));
