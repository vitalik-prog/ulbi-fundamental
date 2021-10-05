import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../routes";

const Router = () => {
  const isAuth = true
  return (
    isAuth
      ?
      <Switch>
        <Redirect from='/login' to='/'/>
        {privateRoutes.map(route =>
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        )}
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route =>
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        )}
        <Redirect to='/login'/>
      </Switch>
  );
};

export default Router;