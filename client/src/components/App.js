import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from './Landing';
import Header from './Header';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/Login" component={Login} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
