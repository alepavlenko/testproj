import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import AppRouter from "./components/AppRouter/AppRouter";
import {store} from "./redux/store";

function App() {

    store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
    return (
        <Provider store={store}>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
        </Provider>
    );
}

export default App;
