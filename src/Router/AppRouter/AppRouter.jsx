import React, {useContext} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {Context} from "../../App";
import {privateRoutes, publicRoutes} from "../Router";

const AppRouter = () => {
    const {isAuth} = useContext(Context)
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                    />
                )}
                <Route path="*" element={<Navigate replace to='/' />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                    />
                )}
                <Route path="*" element={<Navigate replace to='/' />} />
            </Routes>

    );
};

export default AppRouter;