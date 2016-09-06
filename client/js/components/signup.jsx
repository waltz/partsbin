import React from 'react';
import ReactDOM from 'react-dom';

class Signup extends React.Component {
  render() {
    return(
      <div>
        <h2>Sign Up!</h2>
        <form id="signup" action="/user/new" action="post">
          <div className="textgroup">
            <label name="signup--email">Email</label>
            <input id="signup--email" type="email" required="true" />
          </div>
          <div className="textgroup">
            <label name="signup--password">Password</label>
            <input id="signup--password" type="password" required="true" />
          </div>
          <button type="submit">Signup</button>
        </form>
        {this.props.children}
      </div>
    );
  }
}

export default Signup;
