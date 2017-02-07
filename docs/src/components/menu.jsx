import React from 'react';
import { Link } from 'react-router';

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alert">Alert</Link></li>
        <li><Link to="/app-header">AppHeader</Link></li>
        <li><Link to="/avatar">Avatar</Link></li>
        <li><Link to="/badge">Badge</Link></li>
        <li><Link to="/button">Button</Link></li>
        <li><Link to="/channel-header">ChannelHeader</Link></li>
        <li><Link to="/dialog">Dialog</Link></li>
        <li><Link to="/empty-state">EmptyState</Link></li>
        <li><Link to="/input">Input</Link></li>
        <li><Link to="/list">List</Link></li>
        <li><Link to="/list-item">ListItem</Link></li>
        <li><Link to="/loader">Loader</Link></li>
        <li><Link to="/message">Message</Link></li>
        <li><Link to="/message-input">MessageInput</Link></li>
        <li><Link to="/profile-card">ProfileCard</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
