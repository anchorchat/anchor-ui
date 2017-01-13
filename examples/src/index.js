/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Theme } from '../../dist/index';
import './index.css';

ReactDOM.render(
  <Theme color="#1ba6c4"><App /></Theme>,
  document.getElementById('root')
);
