'use strict';

console.log('Welcome to Functional-JS!');

import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './components/sign_up.jsx';

window.React = React;
window.ReactDOM = ReactDOM;

document.addEventListener('DOMContentLoaded', function(event) {
  ReactDOM.render(
    React.createElement(SignUp),
    document.getElementById('app')
  );
});
