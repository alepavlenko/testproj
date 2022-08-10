import React, {useState} from "react";

import { MainPage } from "./components/MainPage";

export const Context = React.createContext();


function App() {
    const [isAuth, setIsAuth] = useState(false)
  return (
      <Context.Provider value={[isAuth, setIsAuth]}>
          <div>
              <MainPage />
          </div>
      </Context.Provider>

  );
}

export default App;
