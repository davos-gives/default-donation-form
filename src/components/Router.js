import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import React from 'react';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/step/:stepId" component={App} />
    </Switch>
  </BrowserRouter>
)

export default Router;
