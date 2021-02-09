import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import DashScreen from "./Components/DashScreen";
import LoginTest from "./Components/LoginTest";

export function Main() {
  return (
    <main>
      
      <Switch>
        <Route exact path="/" component={DashScreen} />
        <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dash" component={DashScreen} />
      </Switch>
    </main>
  );
}

