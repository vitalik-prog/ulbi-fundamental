import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Homepage, Notfound} from "./index";
import {CountersPage, PostsPage} from "..";
import PostPage from "../post/PostPage";

const Router = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Homepage/>
      </Route>
      <Route path='/counters'>
        <CountersPage/>
      </Route>
      <Route exact path='/posts'>
        <PostsPage/>
      </Route>
      <Route exact path={`/posts/:id`}>
        <PostPage/>
      </Route>
      <Route path='*'>
        <Notfound/>
      </Route>
    </Switch>
  );
};

export default Router;