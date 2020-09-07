import React from "react";

export default [
    {
        path: '/login',
        exact: true,
        auth: false,
        component: React.lazy(() => import('../Pages/Auth/Login'))
    },
    {
        path: '/register',
        exact: true,
        auth: false,
        component: React.lazy(() => import('../Pages/Auth/Register'))
    }
];