'use strict';

console.log('Welcome to Functional-JS!');

import React from 'react';
import ReactDOM from 'react-dom';

window.React = React;
window.ReactDOM = ReactDOM;

document.addEventListener('DOMContentLoaded', function(event) {
  ReactDOM.render(
    React.createElement('p', {}, "Loaded!"),
    document.getElementById('app')
  );
});
