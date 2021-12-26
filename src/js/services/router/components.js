/* eslint-disable import/no-cycle */
import { calcExchangeRate, calcDiscount } from '../exchangeRate';
import { loadTankIcons } from '../helper/core';
import { grid } from '../helper/constants';

const HomeComponent = (arr) => {
    if (!arr.length) {
        return;
    }
    arr.forEach((i) => {
        let state;
        if (i.check) {
            state = 'checked';
        } else {
            state = '';
        }
        const article = document.createElement('article');
        article.setAttribute('data-id', i.uuid);
        article.className = 'art';
        const artInner = `
            <img class="bg lazy load-img" loading="lazy" src='${i.main_image}' alt="img">
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
            <div style="width: 100%; height: 100%; position: absolute; color: red; z-index: 50; display: none; pointer-events: none;"><span>Good</span><div>
        `;
        article.innerHTML = artInner;
        grid.appendChild(article);
    });
};

const ShoppingCart = (cartItems) => {
    if (cartItems.length === 0) {
        return '<h1 style="text-align: center;">В корзине нет товаров</h1>';
    }
    const shoppingCart = cartItems.map((i) => `
        <div class="shopinngCart_item">
            <div class="shopinngCart_item-image">
                <img src="${i.main_image}" alt="">
            </div>
            <div class="shopinngCart_item-title">
                <h3>${i.title}</h3>
            </div>
            <div class="shopinngCart_item-cost">
                <span>${calcExchangeRate(i.price)}</span>
            </div>
            <div class="shopinngCart_item-count">
                <button class="minus btn_plus_minus" data-uuid="${i.uuid}">-</button>
                <span id="count-${i.uuid}">${i.count}</span>
                <button class="plus btn_plus_minus" data-uuid="${i.uuid}">+</button>
            </div>
            <div class="shopinngCart_item-summ">
                <span id="sum-${i.uuid}">${calcExchangeRate((i.price) * i.count)}</span>
            </div>
            <div class="shopinngCart_item-delete">
                <button data-item="${i.uuid}" class="deleteItemCart">X</button>
            </div>
        </div>
        `);
    return shoppingCart.join('');
};

const WishComponent = (wishlist) => {
    if (wishlist.length === 0) {
        return '<p class="emptyWL">Your wishlist is empty</p>';
    }
    const wishComponent = wishlist.map((i) => `
        <article data-id="${i.uuid}">
            <img class="bg load-img" src="${i.main_image}" alt="img">
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
        <div class="top_block" data-id="tank.tank_id">
        <div class="detail_top">
        <h2 class="detail_name">${tank.title}</h2>
        <div class="line_top"></div>
            <div class="price-discount">
            ${calcExchangeRate(tank.price, tank.discount)}
            </div>
            <button class="detail_purchase_btn" data-id="${tank.uuid}">purchase</button>
        </div>
        <div class="slider"></div>
        </div>
        <div class="premium-details">
            <h3 class="detail_title">DETAILS</h3>
            <div class="line_bottom"></div>
            <p class="description">${tank.description}</p>
        </div>
`;

export {
    HomeComponent,
    WishComponent,
    DetailComponent,
    ShoppingCart,
};
