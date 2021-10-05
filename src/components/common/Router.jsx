import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../routes";
import {AuthContext} from "../../context";
import {Loader} from "./index";

const Router = () => {
  const { isAuth, isAppLoading } = useContext(AuthContext)

  if(isAppLoading) {
    return <Loader />
  }

  return (
    isAuth
      ?
      <Switch>
        <Redirect from='/login' to='/posts'/>
        {privateRoutes.map(route =>
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
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
            key={route.path}
          />
        )}
        <Redirect to='/login'/>
      </Switch>
  );
};

export default Router;