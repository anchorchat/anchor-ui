/* eslint react/jsx-filename-extension: [0] */
/* global document */
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
import Card from './components/card';
import ChannelHeader from './components/channel-header';
import Checkbox from './components/checkbox';
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
import Icons from './components/icons';
import IconMenu from './components/icon-menu';
import SearchBox from './components/search-box';
import MenuItem from './components/menu-item';
import PopOver from './components/pop-over';
import WithTheme from './components/with-theme';
import Paper from './components/paper';
import Modal from './components/modal';
import AdminBadge from './components/admin-badge';
import Divider from './components/divider';
import Select from './components/select';
import RadioButton from './components/radio-button';
import Switch from './components/switch';
import EmojiMenu from './components/emoji-menu';
import Tabs from './components/tabs';
import Profile from './components/profile';
import Menu from './components/menu';
import Slider from './components/slider';
import Lightbox from './components/lightbox';
import ThemeProviderDoc from './components/theme-provider';
import Table from './components/table';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/admin-badge" component={AdminBadge} />
      <Route path="/alert" component={Alert} />
      <Route path="/app-header" component={AppHeader} />
      <Route path="/avatar" component={Avatar} />
      <Route path="/badge" component={Badge} />
      <Route path="/button" component={Button} />
      <Route path="/card" component={Card} />
      <Route path="/channel-header" component={ChannelHeader} />
      <Route path="/checkbox" component={Checkbox} />
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
      <Route path="/icons" component={Icons} />
      <Route path="/icon-menu" component={IconMenu} />
      <Route path="/search-box" component={SearchBox} />
      <Route path="/menu-item" component={MenuItem} />
      <Route path="/pop-over" component={PopOver} />
      <Route path="/paper" component={Paper} />
      <Route path="/with-theme" component={WithTheme} />
      <Route path="/modal" component={Modal} />
      <Route path="/divider" component={Divider} />
      <Route path="/select" component={Select} />
      <Route path="/radio-button" component={RadioButton} />
      <Route path="/switch" component={Switch} />
      <Route path="/emoji-menu" component={EmojiMenu} />
      <Route path="/tabs" component={Tabs} />
      <Route path="/profile" component={Profile} />
      <Route path="/menu" component={Menu} />
      <Route path="/slider" component={Slider} />
      <Route path="/lightbox" component={Lightbox} />
      <Route path="/table" component={Table} />
      <Route path="/theme-provider" component={ThemeProviderDoc} />
    </Route>
  </Router>,
  document.getElementById('root')
);
