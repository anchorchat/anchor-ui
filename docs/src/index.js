/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/app';
import Alert from './components/alert';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/alert" component={Alert} />
  </Router>,
  document.getElementById('root')
);
