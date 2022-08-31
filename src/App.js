import React, {useState} from "react";
import {Provider} from "react-redux";

import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import {store} from "./redux/store";

export const Context = React.createContext();


function App() {
    const [token, setToken] = useState(localStorage.getItem('token'))

    // отслеживание токена , чтобы его убить

    const values = {
        token,
        setToken
    }
    return (
        <Provider store={store}>
            <Context.Provider value={values}>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </Context.Provider>
        </Provider>
    );
}

export default App;
