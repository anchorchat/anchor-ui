import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import List from 'anchor-ui/list';
import ListItem from 'anchor-ui/list-item';
import npmPackage from '../../../package.json';

function Menu(props, context) {
  const { router } = context;

  return (
    <nav>
      <List>
        <Link to="/"><ListItem active={router.location.pathname === '/'} primaryText="Getting started" secondaryText={`Version: ${npmPackage.version}`} /></Link>
        <Link to="/alert"><ListItem active={router.isActive('/alert')} primaryText="Alert" /></Link>
        <Link to="/app-header"><ListItem active={router.isActive('/app-header')} primaryText="App Header" /></Link>
        <Link to="/avatar"><ListItem active={router.isActive('/avatar')} primaryText="Avatar" /></Link>
        <Link to="/badge"><ListItem active={router.isActive('/badge')} primaryText="Badge" /></Link>
        <Link to="/button"><ListItem active={router.isActive('/button')} primaryText="Button" /></Link>
        <Link to="/channel-header"><ListItem active={router.isActive('/channel-header')} primaryText="Channel Header" /></Link>
        <Link to="/dialog"><ListItem active={router.isActive('/dialog')} primaryText="Dialog" /></Link>
        <Link to="/empty-state"><ListItem active={router.isActive('/empty-state')} primaryText="Empty State" /></Link>
        <Link to="/input"><ListItem active={router.isActive('/input')} primaryText="Input" /></Link>
        <Link to="/icons"><ListItem active={router.isActive('/icons')} primaryText="Icons" /></Link>
        <Link to="/icon-menu"><ListItem active={router.isActive('/icon-menu')} primaryText="Icon Menu" /></Link>
        <Link to="/list"><ListItem active={router.isActive('/list')} primaryText="List" /></Link>
        <Link to="/list-item"><ListItem active={router.isActive('/list-item')} primaryText="List Item" /></Link>
        <Link to="/loader"><ListItem active={router.isActive('/loader')} primaryText="Loader" /></Link>
        <Link to="/message"><ListItem active={router.isActive('/message')} primaryText="Message" /></Link>
        <Link to="/message-list"><ListItem active={router.isActive('/message-list')} primaryText="Message List" /></Link>
        <Link to="/message-input"><ListItem active={router.isActive('/message-input')} primaryText="Message Input" /></Link>
        <Link to="/profile-card"><ListItem active={router.isActive('/profile-card')} primaryText="Profile Card" /></Link>
        <Link to="/search-box"><ListItem active={router.isActive('/search-box')} primaryText="Search Box" /></Link>
      </List>
    </nav>
  );
}

Menu.contextTypes = {
  router: PropTypes.object
};

export default Menu;
