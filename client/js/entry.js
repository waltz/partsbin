import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import App from './components/app.js';
import Homepage from './components/homepage.js';
import Signup from './components/signup.js';

document.addEventListener("DOMContentLoaded", function(event) {
  var container = document.getElementById('container');

  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Homepage} />
        <Route path="/signup" component={Signup} />
      </Route>
    </Router>
  ), container);
});
