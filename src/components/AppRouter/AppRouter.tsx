import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import {privateRoutes, publicRoutes} from "../../routes";
import {setAuth} from "../../redux/actions/authActions";
import {getAuth} from "../../redux/selectors/authSelectors";

const AppRouter = () => {
    const dispatch = useDispatch()

    const isAuth: boolean = useSelector(getAuth)

    useEffect(() => {
        const auth: boolean = Boolean(localStorage.getItem('auth'))
        dispatch(setAuth(auth))
    },[])

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