import React from 'react';
import {HashRouter,Route,Switch} from "react-router-dom";
import Home from "./components/core/Home";
import Shop from "./components/core/Shop";
import Signin from "./components/core/Signin";
import Signup from "./components/core/Signup";


const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/shop" component={Shop} />
        <Route path="/singin" component={Signin} />
        <Route path="/singup" component={Signup} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
