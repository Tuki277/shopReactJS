import React from 'react';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Index from './components/Index/Index'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Shop from './components/Shop/Shop'
import ProductsDetails from './pages/ProductsDetail/ProductsDetail'
import ShopDetails from './components/ShopDetails/ShopDetails'
import CartItem from './components/CartItem/CartItem';
import Thankyou from './components/Thankyou/Thankyou';
import Checkout from './components/Checkout/Checkout';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Index />
    },
    {
        path: '/about',
        exact: true,
        main: () => <About />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/products',
        exact: false,
        main: () => <Shop />
    },
    {
        path: '/product/:id',
        exact: false,
        main: ({ match }) => <ProductsDetails match={ match }/>
    },
    {
        path: '/cart',
        exact: false,
        main: () => <CartItem />
    },
    {
        path: '/thankyou',
        exact: false,
        main: () => <Thankyou />
    },
    {
        path: '/checkout',
        exact: false,
        main: () => <Checkout />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;