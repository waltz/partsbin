import React from 'react';
import ReactDOM from 'react-dom';

class Signup extends React.Component {
  render() {
    return(
      <div>
        <h2>Sign Up!</h2>
        <form>
          <input type="email" placeholder="Email" required="true" />
          <input type="password" placeholder="Password" required="true" />
          <button>Signup</button>
        </form>
        {this.props.children}
      </div>
    );
  }
}

export default Signup;
