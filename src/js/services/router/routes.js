// eslint-disable-next-line import/no-cycle
import { HomeComponent, WishComponent, DetailComponent } from './components';

const routes = [
    {
        path: '/',
        component: HomeComponent,
    },
    {
        path: 'all',
        component: HomeComponent,
    },
    {
        path: 'wishlist',
        component: WishComponent,
    },
    {
        path: 'detail',
        component: DetailComponent,
    },
];

const addRoutes = (category) => {
    routes.push({
        path: category,
        component: HomeComponent,
    });
};
export { routes, addRoutes };
