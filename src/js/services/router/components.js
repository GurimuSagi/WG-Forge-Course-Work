// eslint-disable-next-line import/no-cycle
import { calcExchangeRate, calcDiscount } from '../exchangeRate';
import { loadTankIcons } from '../helper/core';

// import MiniSlider from '../../modules/slider-mini'
// export const ShowUpSlider = new MiniSlider({
//     container: '.grid',
//     prev: '.leftSlider',
//     next: '.rightSlider'
// });
const HomeComponent = (arr) => {
    const homeComponent = arr.map((i) => {
        let state;
        if (i.check) {
            state = 'checked';
        } else {
            state = '';
        }
        return `
            <article data-id=${i.uuid} class="art">
                <img class="bg lazy" data-src='${i.main_image}' alt="img">
                ${calcDiscount(i)}
                <label class="checkbox-cont">
                    <input type="checkbox" class="checkbox" ${state}>
                    <span class="checkmark far fa-heart"><span class="checkmark-checked fas fa-heart"></span></span>
                </label>
                <div class="item-info">
                    <div class="tank-details">${loadTankIcons(i)}</div>
                    <h2>${i.title}</h2>
                    <div class="price-discount">
                        ${calcExchangeRate(i.price, i.discount)}
                    </div>
                </div>
                <div class="add-to-cart"><span>Купить</span></div>
            </article>
        `;
    });
    return homeComponent.join('');
};

const WishComponent = (wishlist) => {
    if (wishlist.length === 0) {
        return '<p class="emptyWL">Your wishlist is empty</p>';
    }
    const wishComponent = wishlist.map((i) => `
        <article data-id="${i.uuid}">
            <img class="bg" src="${i.images[0].image}" alt="img">
            ${calcDiscount(i)}
            <label class="checkbox-cont">
                <input type="checkbox" class="checkbox" checked>
                <span class="checkmark far fa-heart"><span class="checkmark-checked fas fa-heart"></span></span>
            </label>
            <div class="item-info">
                    <div class="tank-details">${loadTankIcons(i)}</div>
                    <h2>${i.title}</h2>
                    <div class="price-discount">
                        ${calcExchangeRate(i.price, i.discount)}
                    </div>
                </div>
            <div class="add-to-cart"><span>Купить</span></div>
        </article>
    `);
    return wishComponent.join('');
};

const DetailComponent = (tank) => `
        <h2 class="detail_name">${tank.title}</h2>
        <div class="line_top"></div>


        <div class="top_block" data-id="tank.tank_id">
        <div class="detail_top">
        <div class="line_top"></div>
            <span class="detail_cost">$12.59</span>
            <button class="detail_purchase_btn">purchase</button>
        </div>
        <img class="detail_img" src="${tank.images[0].image}" alt="img">
        </div>
        <div class="premium-details">
            <h3 class="detail_title">DETAILS</h3>
            <div class="line_bottom"></div>
            <p class="description">${tank.description}</p>
        </div>
`;

export { HomeComponent, WishComponent, DetailComponent };
