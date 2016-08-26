import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router';

class Navigation extends React.Component {
  render() {
    return(
      <nav>
        <h1>
          <Link to="/">PartsBin</Link>
        </h1>
        <ul>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
