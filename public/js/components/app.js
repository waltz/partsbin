import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
