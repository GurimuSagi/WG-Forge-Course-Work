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
            <article data-id=${i.id} class="art">
                <input type="checkbox" class="checkbox" ${state}>
                <img src='${i.images[0].image}' alt="img">
                <div>
                    <span class="country1"></span>
                    <h2>${i.title}</h2>
                    <p>$ 47.99</p>
                </div>
            </article>
            `;
            });
            return homeComponent.join('');
        },
    },
    WishComponent: {
        render: (wishlist) => {
            const wishComponent = wishlist.map((i) => `
                    <article data-id="${i.id}">
                        <input type="checkbox" class="checkbox" checked>
                        <img src="${i.images[0].image}" alt="img">
                        <div>
                            <span class="country1"></span>
                            <h2>${i.title}</h2>
                            <p>$ 47.99</p>
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
        <h2 class="detail_name">${tank.name}</h2>
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
    `,
    },
};

export default components;
// <a href="purchase"><p>purchase</p></a>
