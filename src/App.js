import React, {useState} from "react";

import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Router/AppRouter/AppRouter";

export const Context = React.createContext();


function App() {
    const [isAuth, setIsAuth] = useState(false)
  return (
      <Context.Provider value={[isAuth, setIsAuth]}>
          <BrowserRouter>
              <AppRouter/>
          </BrowserRouter>
      </Context.Provider>

  );
}

export default App;
