import components from './components';

const {
    HomeComponent,
    WishComponent,
    DetailComponent,
    // ErrorComponent,
} = components;

const routes = [
    {
        path: '/',
        component: HomeComponent,
    },
    {
        path: '/wishlist',
        component: WishComponent,
    },
    {
        path: '/detail',
        component: DetailComponent,
    },
];

export default routes;