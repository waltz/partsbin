import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/homepage.js';

document.addEventListener("DOMContentLoaded", function(event) {
  var container = document.getElementById('container');
  ReactDOM.render(<Homepage/>, container);
});
