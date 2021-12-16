import logo from "./logo.svg";
import React, { lazy, Suspense, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import store from "./redux/store";
import PrivateRoute from "./route/PrivateRoute";
import { loadAdmin } from "./redux/actions/authActions";
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));
const Homepage = lazy(() => import("./pages/homepage"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Users = lazy(() => import("./pages/users"));
const Subscriptions = lazy(() => import("./pages/subscriptions"));
const Vouchers = lazy(() => import("./pages/vouchers"));

function App() {
  useEffect(() => {
    store.dispatch(loadAdmin());
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/house9/h/login" component={Login} />
        <Route exact path="/house9/h/register" component={Register} />
        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
        <PrivateRoute exact path="/users" component={Users} />
        <PrivateRoute exact path="/subscriptions" component={Subscriptions} />
        <PrivateRoute exact path="/vouchers" component={Vouchers} />
      </Switch>
    </Suspense>
  );
}

export default App;
