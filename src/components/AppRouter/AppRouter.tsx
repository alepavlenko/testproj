import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {privateRoutes, publicRoutes} from "../../routes";
import {getAuth} from "../../redux/selectors/authSelectors";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {authActions} from "../../redux/actions/authActions";

const AppRouter = () => {

    const dispatch = useAppDispatch()
    const auth: boolean = Boolean(localStorage.getItem('auth'))
    useEffect(() => {
        dispatch(authActions.setAuth(auth))
    },[])
    const isAuth: boolean = useAppSelector(getAuth)


    return (
        auth
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