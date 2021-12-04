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
            <article data-id=${i.tank_id} class="art">
                <input type="checkbox" class="checkbox" ${state}>
                <img src=${i.images.big_icon} alt="img">
                <div>
                    <span class="country1"></span>
                    <h2>${i.name}</h2>
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
            // if (size === 0) {
            //     return '';
            // }
            // const coumtOfcards = new Array(size).fill(1);
            const wishComponent = wishlist.map((i) => {
                if (i.check === true) {
                    return `
                    <article data-id="${i.tank_id}">
                        <input type="checkbox" class="checkbox" checked>
                        <img src="${i.images.big_icon}" alt="img">
                        <div>
                            <span class="country1"></span>
                            <h2>${i.name}</h2>
                            <p>$ 47.99</p>
                        </div>
                    </article>
                    `;
                }
                return '';
            });
            return wishComponent.join('');
        },
    },
    DetailComponent: {
        render: (tank) => `
        <div data-id="tank.tank_id">
        <h2>${tank.name}</h2>
        <hr>
        <div class="premium-purchase-panel">
            <p>$12.59</p>
            <a href="purchase"><p>purchase</p></a>
        </div>
    </div>
    <img src="${tank.images.big_icon}" alt="img">
    <div class="premium-details">
        <h3>DETAILS</h3>
        <hr>
        <p>${tank.description}</p>
    </div>
                `,
    },
};

export default components;
