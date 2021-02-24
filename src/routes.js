import React from 'react';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Index from './components/Index/Index'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Index />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;