import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './navigation.jsx';

class App extends React.Component {
  render() {
    return(
      <div id="app">
        <Navigation/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
