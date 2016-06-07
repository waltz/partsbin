import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'

class Homepage extends React.Component {
  render() {
    return(
      <div>
        <h1>Welcome to PartsBin</h1>
        <p>What do you think?</p>
        <Link to="/signup">Get Started!</Link>
      </div>
    );
  }
}

export default Homepage;
