import {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {Navbar, Router} from "./components/common";
import {AuthContext} from "./context";
import './App.css'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isAppLoading, setIsAppLoading] = useState(true)

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsAppLoading(false)
  },[])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isAppLoading
    }}>
      <BrowserRouter>
        <Navbar/>
        <div className="App">
          <Router />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
