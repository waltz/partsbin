import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import App from './components/app.jsx';
import Homepage from './components/homepage.jsx';
import Signup from './components/signup.jsx';
import NoMatch from './components/nomatch.jsx';

document.addEventListener("DOMContentLoaded", function(event) {
  var container = document.getElementById('container');

  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Homepage} />
        <Route path="/sign-up" component={Signup} />
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  ), container);
});
