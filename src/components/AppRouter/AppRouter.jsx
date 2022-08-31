import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "../../routes";
import {useDispatch, useSelector} from "react-redux";
import {setAuth} from "../../redux/store/authReducer";

const AppRouter = () => {
    const dispatch = useDispatch()
    const auth = Boolean(localStorage.getItem('auth'))
    dispatch(setAuth(auth))
    const isAuth = useSelector(state => state.authReducer.isAuth)
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                )}
                <Route path="*" element={<Navigate replace to='/'/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                )}
                <Route path="*" element={<Navigate replace to='/'/>}/>
            </Routes>
    );
};

export default AppRouter;