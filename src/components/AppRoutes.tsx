import React from 'react';
import { Route, Routes } from 'react-router';
import { useAppSelector } from '../hooks/reduxHooks';
import { authRoutes, publicRoutes } from '../utils/routes';

const AppRoutes = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth)

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