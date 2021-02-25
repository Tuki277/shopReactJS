import React from 'react';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Index from './components/Index/Index'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Shop from './components/Shop/Shop'
import ProductsDetails from './pages/ProductsDetail/ProductsDetail'
import ShopDetails from './components/ShopDetails/ShopDetails'

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
        main: () => <ProductsDetails />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;