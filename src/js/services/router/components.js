// eslint-disable-next-line import/no-cycle
import { calcExchangeRate } from '../exchangeRate';

const components = {
    HomeComponent: {
        render: (arr) => {
            // const coumtOfcards = new Array(size).fill(1);
            const homeComponent = arr.map((i) => {
                let state;
                if (i.check) {
                    state = 'checked';
                } else {
                    state = '';
                }
                return `
            <article data-id=${i.uuid} class="art">
                <input type="checkbox" class="checkbox" ${state}>
                <img src='${i.main_image}' alt="img">
                <div>
                    <span class="country1"></span>
                    <h2>${i.title}</h2>
                    <p>${calcExchangeRate(i.price)}</p>
                </div>
            </article>
            `;
            });
            return homeComponent.join('');
        },
    },
    WishComponent: {
        render: (wishlist) => {
            if (wishlist.length === 0) {
                return '<p class="emptyWL">Your wishlist is empty</p>';
            }
            const wishComponent = wishlist.map((i) => `
                    <article data-id="${i.uuid}">
                        <input type="checkbox" class="checkbox" checked>
                        <img src="${i.main_image}" alt="img">
                        <div>
                            <span class="country1"></span>
                            <h2>${i.title}</h2>
                            <p>${i.price} curr</p>
                        </div>
                    </article>
                    `);
            return wishComponent.join('');
        },
    },
    DetailComponent: {
        render: (tank) => `
        <h2 class="detail_name">${tank.title}</h2>
        <div class="line_top"></div>

        <div class="top_block" data-id="tank.tank_id">
        <div class="detail_top">
        <div class="line_top"></div>
            <span class="detail_cost">$12.59</span>
            <button class="detail_purchase_btn">purchase</button>
        </div>
        <img class="detail_img" src="${tank.main_image}" alt="img">
    </div>
    <div class="premium-details">
        <h3 class="detail_title">DETAILS</h3>
        <div class="line_bottom"></div>
        <p class="description">${tank.description}</p>
    </div>
    `,
    },
};

export default components;
// <a href="purchase"><p>purchase</p></a>
