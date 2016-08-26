import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class Homepage extends React.Component {
  render() {
    return(
      <div>
        <h2>What is this?</h2>
        <p>
          PartsBin is a place for cyclists to buy and sell parts. Get all of
          that stuff out of your garage and turn it in to even more bits.
        </p>
      </div>
    );
  }
}

export default Homepage;
