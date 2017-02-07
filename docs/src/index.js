/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/app';
import AppHeader from './components/app-header';
import Alert from './components/alert';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/alert" component={Alert} />
    <Route path="/app-header" component={AppHeader} />
  </Router>,
  document.getElementById('root')
);
