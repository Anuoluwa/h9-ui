import logo from './logo.svg';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
const Homepage =  lazy(() => import('./pages/homepage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {/* <Route exact path="/" component={Login}/> */}
        <Route exact path="/" component={Homepage}/>
        {/* <Route exact path="/metrics" component={Metrics}/>
        <Route exact path="/average-metrics" component={AverageMetrics}/> */}
      </Switch>
    </Suspense>
  );
}

export default App;
