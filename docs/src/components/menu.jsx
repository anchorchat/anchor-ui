import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import List from '../../../dist/list';
import ListItem from '../../../dist/list-item';
import npmPackage from '../../../package.json';

function Menu(props, context) {
  const { router } = context;

  return (
    <nav>
      <List>
        <Link to="/"><ListItem active={router.location.pathname === '/'} primaryText="Getting started" secondaryText={`Version: ${npmPackage.version}`} /></Link>
        <Link to="/alert"><ListItem active={router.isActive('/alert')} primaryText="Alert" /></Link>
        <Link to="/app-header"><ListItem active={router.isActive('/app-header')} primaryText="AppHeader" /></Link>
        <Link to="/avatar"><ListItem active={router.isActive('/avatar')} primaryText="Avatar" /></Link>
        <Link to="/badge"><ListItem active={router.isActive('/badge')} primaryText="Badge" /></Link>
        <Link to="/button"><ListItem active={router.isActive('/button')} primaryText="Button" /></Link>
        <Link to="/channel-header"><ListItem active={router.isActive('/channel-header')} primaryText="ChannelHeader" /></Link>
        <Link to="/dialog"><ListItem active={router.isActive('/dialog')} primaryText="Dialog" /></Link>
        <Link to="/empty-state"><ListItem active={router.isActive('/empty-state')} primaryText="EmptyState" /></Link>
        <Link to="/icons"><ListItem active={router.isActive('/icons')} primaryText="Icons" /></Link>
        <Link to="/icon-menu"><ListItem active={router.isActive('/icon-menu')} primaryText="IconMenu" /></Link>
        <Link to="/input"><ListItem active={router.isActive('/input')} primaryText="Input" /></Link>
        <Link to="/list"><ListItem active={router.isActive('/list')} primaryText="List" /></Link>
        <Link to="/list-item"><ListItem active={router.isActive('/list-item')} primaryText="ListItem" /></Link>
        <Link to="/loader"><ListItem active={router.isActive('/loader')} primaryText="Loader" /></Link>
        <Link to="/menu-item"><ListItem active={router.isActive('/menu-item')} primaryText="MenuItem" /></Link>
        <Link to="/message"><ListItem active={router.isActive('/message')} primaryText="Message" /></Link>
        <Link to="/message-list"><ListItem active={router.isActive('/message-list')} primaryText="MessageList" /></Link>
        <Link to="/message-input"><ListItem active={router.isActive('/message-input')} primaryText="MessageInput" /></Link>
        <Link to="/paper"><ListItem active={router.isActive('/paper')} primaryText="Paper" /></Link>
        <Link to="/pop-over"><ListItem active={router.isActive('/pop-over')} primaryText="PopOver" /></Link>
        <Link to="/profile-card"><ListItem active={router.isActive('/profile-card')} primaryText="ProfileCard" /></Link>
        <Link to="/search-box"><ListItem active={router.isActive('/search-box')} primaryText="SearchBox" /></Link>
        <Link to="/with-theme"><ListItem active={router.isActive('/with-theme')} primaryText="WithTheme" /></Link>
      </List>
    </nav>
  );
}

Menu.contextTypes = {
  router: PropTypes.object
};

export default Menu;
