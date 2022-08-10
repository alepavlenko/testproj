import React, {useState} from "react";

import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Router/AppRouter/AppRouter";

export const Context = React.createContext();


function App() {
    const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem('user')))

    const values = {
        isAuth,
        setIsAuth
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
