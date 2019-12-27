import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '~pages/Login';
import Home from '~pages/Home';
import PrivateRoute from '~components/PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" component={Home} redirectTo="/login" />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
