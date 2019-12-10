import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import SignUp from "./containers/Signup";
import Dashboard from "./containers/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" exact component={Login} />
    </Switch>
  );
}
