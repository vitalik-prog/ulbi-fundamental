import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Homepage, Notfound} from "./index";
import {CountersPage, PostsPage} from "..";

const Router = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Homepage/>
      </Route>
      <Route path='/counters'>
        <CountersPage/>
      </Route>
      <Route path='/posts'>
        <PostsPage/>
      </Route>
      <Route path='*'>
        <Notfound/>
      </Route>
    </Switch>
  );
};

export default Router;