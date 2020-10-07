import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Graphic from '../containers/Graphic';
import History from '../containers/History';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/History' component={History} />
      <Route exact path='/Graphic' component={Graphic} />
    </Switch>
  </BrowserRouter>
);

export default App;
