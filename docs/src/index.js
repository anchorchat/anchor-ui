/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/home';
import Alert from './components/alert';
import AppHeader from './components/app-header';
import Avatar from './components/avatar';
import Badge from './components/badge';
import Button from './components/button';
import ChannelHeader from './components/channel-header';
import Dialog from './components/dialog';
import EmptyState from './components/empty-state';
import Input from './components/input';
import ListItem from './components/list-item';
import List from './components/list';
import Loader from './components/loader';
import MessageInput from './components/message-input';
import Message from './components/message';
import MessageList from './components/message-list';
import ProfileCard from './components/profile-card';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/alert" component={Alert} />
      <Route path="/app-header" component={AppHeader} />
      <Route path="/avatar" component={Avatar} />
      <Route path="/badge" component={Badge} />
      <Route path="/button" component={Button} />
      <Route path="/channel-header" component={ChannelHeader} />
      <Route path="/dialog" component={Dialog} />
      <Route path="/empty-state" component={EmptyState} />
      <Route path="/input" component={Input} />
      <Route path="/list-item" component={ListItem} />
      <Route path="/list" component={List} />
      <Route path="/loader" component={Loader} />
      <Route path="/message-input" component={MessageInput} />
      <Route path="/message-list" component={MessageList} />
      <Route path="/message" component={Message} />
      <Route path="/profile-card" component={ProfileCard} />
    </Route>
  </Router>,
  document.getElementById('root')
);
