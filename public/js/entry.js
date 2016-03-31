import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/homepage';

document.addEventListener("DOMContentLoaded", function(event) {
  var container = document.getElementById('container');
  ReactDOM.render(<Homepage/>, container);
});
