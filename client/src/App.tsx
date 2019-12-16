import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '~pages/Login';
import Home from '~pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="" component={Home} />
        <Route path="/login" component={Login} />        
      </Switch>
    </BrowserRouter>
  );
};

export default App;
