import React from 'react';
import { Link } from 'react-router';
import List from 'anchor-ui/list';
import ListItem from 'anchor-ui/list-item';

function Menu() {
  return (
    <nav>
      <List>
        <Link to="/"><ListItem primaryText="Getting started" /></Link>
        <Link to="/alert"><ListItem primaryText="Alert" /></Link>
        <Link to="/app-header"><ListItem primaryText="AppHeader" /></Link>
        <Link to="/avatar"><ListItem primaryText="Avatar" /></Link>
        <Link to="/badge"><ListItem primaryText="Badge" /></Link>
        <Link to="/button"><ListItem primaryText="Button" /></Link>
        <Link to="/channel-header"><ListItem primaryText="ChannelHeader" /></Link>
        <Link to="/dialog"><ListItem primaryText="Dialog" /></Link>
        <Link to="/empty-state"><ListItem primaryText="EmptyState" /></Link>
        <Link to="/input"><ListItem primaryText="Input" /></Link>
        <Link to="/list"><ListItem primaryText="List" /></Link>
        <Link to="/list-item"><ListItem primaryText="ListItem" /></Link>
        <Link to="/loader"><ListItem primaryText="Loader" /></Link>
        <Link to="/message"><ListItem primaryText="Message" /></Link>
        <Link to="/message-list"><ListItem primaryText="MessageList" /></Link>
        <Link to="/message-input"><ListItem primaryText="MessageInput" /></Link>
        <Link to="/profile-card"><ListItem primaryText="ProfileCard" /></Link>
      </List>
    </nav>
  );
}

export default Menu;
