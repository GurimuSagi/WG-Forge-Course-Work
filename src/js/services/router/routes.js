// eslint-disable-next-line import/no-cycle
import { HomeComponent, WishComponent, DetailComponent } from './components';

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
