import React from 'react';
import { Route, Routes } from 'react-router';
import { authRoutes, publicRoutes } from '../utils/routes';

const AppRoutes = () => {
    const isAuth = true

    return (
        <>
            <Routes>
                {publicRoutes.map(r => <Route path={r.path} element={r.element} key={r.path} />)}
                
                {isAuth
                    && authRoutes.map(r => <Route path={r.path} element={r.element} key={r.path} />)}
            </Routes>
        </>
    );
};

export default AppRoutes;