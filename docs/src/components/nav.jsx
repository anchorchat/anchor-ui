import React from 'react';
import PropTypes from 'prop-types';
import List from '../../../dist/list';
import ListItem from '../../../dist/list-item';
import npmPackage from '../../../package.json';

const Nav = (props, context) => {
  const { router } = context;

  return (
    <nav>
      <List>
        <ListItem onClick={() => router.push('/')} active={router.location.pathname === '/'} primaryText="Getting started" secondaryText={`Version: ${npmPackage.version}`} />
        <ListItem onClick={() => router.push('/admin-badge')} active={router.isActive('/admin-badge')} primaryText="AdminBadge" />
        <ListItem onClick={() => router.push('/alert')} active={router.isActive('/alert')} primaryText="Alert" />
        <ListItem onClick={() => router.push('/app-header')} active={router.isActive('/app-header')} primaryText="AppHeader" />
        <ListItem onClick={() => router.push('/avatar')} active={router.isActive('/avatar')} primaryText="Avatar" />
        <ListItem onClick={() => router.push('/badge')} active={router.isActive('/badge')} primaryText="Badge" />
        <ListItem onClick={() => router.push('/button')} active={router.isActive('/button')} primaryText="Button" />
        <ListItem onClick={() => router.push('/card')} active={router.isActive('/card')} primaryText="Card" />
        <ListItem onClick={() => router.push('/channel-header')} active={router.isActive('/channel-header')} primaryText="ChannelHeader" />
        <ListItem onClick={() => router.push('/checkbox')} active={router.isActive('/checkbox')} primaryText="Checkbox" />
        <ListItem onClick={() => router.push('/commands')} active={router.isActive('/commands')} primaryText="Commands" />
        <ListItem onClick={() => router.push('/dialog')} active={router.isActive('/dialog')} primaryText="Dialog" />
        <ListItem onClick={() => router.push('/divider')} active={router.isActive('/divider')} primaryText="Divider" />
        <ListItem onClick={() => router.push('/emoji-menu')} active={router.isActive('/emoji-menu')} primaryText="EmojiMenu" />
        <ListItem onClick={() => router.push('/empty-state')} active={router.isActive('/empty-state')} primaryText="EmptyState" />
        <ListItem onClick={() => router.push('/icons')} active={router.isActive('/icons')} primaryText="Icons" />
        <ListItem onClick={() => router.push('/icon-menu')} active={router.isActive('/icon-menu')} primaryText="IconMenu" />
        <ListItem onClick={() => router.push('/input')} active={router.isActive('/input')} primaryText="Input" />
        <ListItem onClick={() => router.push('/lightbox')} active={router.isActive('/lightbox')} primaryText="Lightbox" />
        <ListItem onClick={() => router.push('/list')} active={router.isActive('/list')} primaryText="List" />
        <ListItem onClick={() => router.push('/list-item')} active={router.isActive('/list-item')} primaryText="ListItem" />
        <ListItem onClick={() => router.push('/loader')} active={router.isActive('/loader')} primaryText="Loader" />
        <ListItem onClick={() => router.push('/menu')} active={router.isActive('/menu')} primaryText="Menu" />
        <ListItem onClick={() => router.push('/menu-item')} active={router.isActive('/menu-item')} primaryText="MenuItem" />
        <ListItem onClick={() => router.push('/message')} active={router.isActive('/message')} primaryText="Message" />
        <ListItem onClick={() => router.push('/message-list')} active={router.isActive('/message-list')} primaryText="MessageList" />
        <ListItem onClick={() => router.push('/message-input')} active={router.isActive('/message-input')} primaryText="MessageInput" />
        <ListItem onClick={() => router.push('/modal')} active={router.isActive('/modal')} primaryText="Modal" />
        <ListItem onClick={() => router.push('/pagination')} active={router.isActive('/pagination')} primaryText="Pagination" />
        <ListItem onClick={() => router.push('/paper')} active={router.isActive('/paper')} primaryText="Paper" />
        <ListItem onClick={() => router.push('/pop-over')} active={router.isActive('/pop-over')} primaryText="PopOver" />
        <ListItem onClick={() => router.push('/profile')} active={router.isActive('/profile')} primaryText="Profile" />
        <ListItem onClick={() => router.push('/profile-card')} active={router.isActive('/profile-card')} primaryText="ProfileCard" />
        <ListItem onClick={() => router.push('/radio-button')} active={router.isActive('/radio-button')} primaryText="RadioButton" />
        <ListItem onClick={() => router.push('/search-box')} active={router.isActive('/search-box')} primaryText="SearchBox" />
        <ListItem onClick={() => router.push('/select')} active={router.isActive('/select')} primaryText="Select" />
        <ListItem onClick={() => router.push('/slider')} active={router.isActive('/slider')} primaryText="Slider" />
        <ListItem onClick={() => router.push('/switch')} active={router.isActive('/switch')} primaryText="Switch" />
        <ListItem onClick={() => router.push('/table')} active={router.isActive('/table')} primaryText="Table" />
        <ListItem onClick={() => router.push('/tabs')} active={router.isActive('/tabs')} primaryText="Tabs" />
        <ListItem onClick={() => router.push('/theme-provider')} active={router.isActive('/theme-provider')} primaryText="ThemeProvider" />
        <ListItem onClick={() => router.push('/themeable')} active={router.isActive('/themeable')} primaryText="themeable" />
        <ListItem onClick={() => router.push('/with-theme')} active={router.isActive('/with-theme')} primaryText="WithTheme" />
      </List>
    </nav>
  );
};

Nav.contextTypes = {
  router: PropTypes.object
};

export default Nav;
