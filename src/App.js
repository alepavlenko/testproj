import React, {useState} from "react";
import {Provider} from "react-redux";



import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import {store} from "./redux/store";

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
