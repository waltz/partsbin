import React from 'react';
import ReactDOM from 'react-dom';

class Homepage extends React.Component {
  render() {
    return(
      <div>
        <h1>Welcome to PartsBin</h1>
        <p>What do you think?</p>
        <a href="/signup">Get started!</a>
      </div>
    );
  }
}

export default Homepage;
