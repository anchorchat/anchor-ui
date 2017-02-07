import React from 'react';
import { Link } from 'react-router';
import { List, ListItem } from 'anchor-ui';

function Menu() {
  return (
    <nav>
      <List>
        <ListItem primaryText={<Link to="/">Home</Link>} />
        <ListItem primaryText={<Link to="/alert">Alert</Link>} />
        <ListItem primaryText={<Link to="/app-header">AppHeader</Link>} />
        <ListItem primaryText={<Link to="/avatar">Avatar</Link>} />
        <ListItem primaryText={<Link to="/badge">Badge</Link>} />
        <ListItem primaryText={<Link to="/button">Button</Link>} />
        <ListItem primaryText={<Link to="/channel-header">ChannelHeader</Link>} />
        <ListItem primaryText={<Link to="/dialog">Dialog</Link>} />
        <ListItem primaryText={<Link to="/empty-state">EmptyState</Link>} />
        <ListItem primaryText={<Link to="/input">Input</Link>} />
        <ListItem primaryText={<Link to="/list">List</Link>} />
        <ListItem primaryText={<Link to="/list-item">ListItem</Link>} />
        <ListItem primaryText={<Link to="/loader">Loader</Link>} />
        <ListItem primaryText={<Link to="/message">Message</Link>} />
        <ListItem primaryText={<Link to="/message-input">MessageInput</Link>} />
        <ListItem primaryText={<Link to="/profile-card">ProfileCard</Link>} />
      </List>
    </nav>
  );
}

export default Menu;
