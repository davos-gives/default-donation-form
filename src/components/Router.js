import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import ThankYou from './ThankYou';
import React from 'react';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/step/:stepId" component={App} />
      <Route path="/thanks" component={ThankYou} />
    </Switch>
  </BrowserRouter>
)

export default Router;
