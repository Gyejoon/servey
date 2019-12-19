import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '~pages/Login';
import Home from '~pages/Home';
import ServeyCreate from '~pages/ServeyCreate';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/servey/create" component={ServeyCreate} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
