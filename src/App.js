import {CountersPage, PostsPage} from './components'
import './App.css'
import {BrowserRouter, Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className={'navbar'}>
          <div className="navbar__links">
            <a href={'/counters'}>Counters</a>
            <a href={'/posts'}>Posts</a>
          </div>
        </div>
        <Route path={'/counters'}>
          <CountersPage />
        </Route>
        <Route path={'/posts'}>
          <PostsPage />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
