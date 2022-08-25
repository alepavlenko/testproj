import React, { useState} from "react";

import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";

export const Context = React.createContext();


function App() {

    const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem('auth')))
    const [wareHouses, setWareHouses] = useState([])
    const [items, setItems] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token'))

    const values = {
        isAuth,
        setIsAuth,
        wareHouses,
        setWareHouses,
        items,
        setItems,
        token,
        setToken
    }
    return (
        <Context.Provider value={values}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </Context.Provider>

    );
}

export default App;
