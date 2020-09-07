import React from "react";

export default [
    {
        path: '/dashboard',
        exact: true,
        auth: true,
        component: React.lazy(() => import('../Pages/Home/Dashboard'))
    },
    {
        path: '/products',
        exact: true,
        auth: true,
        component: React.lazy(() => import('../Pages/Home/ProductList'))
    },
    {
        path: '/setting',
        exact: true,
        auth: true,
        component: React.lazy(() => import('../Pages/Home/Setting'))
    }
];