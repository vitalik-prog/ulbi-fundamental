import {BrowserRouter} from "react-router-dom";
import {Navbar, Router} from "./components/common";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <div className="App">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
