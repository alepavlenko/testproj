import React, {useEffect, useState} from "react";

import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";

export const Context = React.createContext();


function App() {

// узнать по поовду этого ?? и почему при первой херни не отоброжается
    useEffect(() =>{
        const localRows = []

        if(!JSON.parse(localStorage.getItem('items'))) {
            localStorage.setItem('items', JSON.stringify(localRows))
        }

        if(!JSON.parse(localStorage.getItem('warehouses'))){
            localStorage.setItem('warehouses', JSON.stringify(localRows))
        }
    },[])

    const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem('user')))
    const [wareHouses, setWareHouses] = useState(JSON.parse(localStorage.getItem('warehouses')))
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')))

    const values = {
        isAuth,
        setIsAuth,
        wareHouses,
        setWareHouses,
        items,
        setItems
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
