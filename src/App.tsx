import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Config from './pages/Config'
import Index from './pages/Index'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/config" component={Config} exact />
      </Switch>
    </Router>
  );
}

export default App;
