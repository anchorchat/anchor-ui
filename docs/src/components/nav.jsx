import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Menu from '../../../dist/menu';
import MenuItem from '../../../dist/menu-item';
import npmPackage from '../../../package.json';
import * as icons from '../../../dist/icons';

const Nav = (props, context) => {
  const { router } = context;

  const style = {
    icon: {
      width: '24px',
      height: '24px'
    }
  };

  return (
    <Menu header={`Version: ${npmPackage.version}`} headerIcon={React.createElement(_.sample(icons), { style: style.icon })}>
      <MenuItem onClick={() => router.push('/')} active={router.location.pathname === '/'} text="Getting started" />
      <MenuItem onClick={() => router.push('/admin-badge')} active={router.isActive('/admin-badge')} text="AdminBadge" />
      <MenuItem onClick={() => router.push('/alert')} active={router.isActive('/alert')} text="Alert" />
      <MenuItem onClick={() => router.push('/app-header')} active={router.isActive('/app-header')} text="AppHeader" />
      <MenuItem onClick={() => router.push('/avatar')} active={router.isActive('/avatar')} text="Avatar" />
      <MenuItem onClick={() => router.push('/badge')} active={router.isActive('/badge')} text="Badge" />
      <MenuItem onClick={() => router.push('/button')} active={router.isActive('/button')} text="Button" />
      <MenuItem onClick={() => router.push('/card')} active={router.isActive('/card')} text="Card" />
      <MenuItem onClick={() => router.push('/channel-header')} active={router.isActive('/channel-header')} text="ChannelHeader" />
      <MenuItem onClick={() => router.push('/checkbox')} active={router.isActive('/checkbox')} text="Checkbox" />
      <MenuItem onClick={() => router.push('/commands')} active={router.isActive('/commands')} text="Commands" />
      <MenuItem onClick={() => router.push('/dialog')} active={router.isActive('/dialog')} text="Dialog" />
      <MenuItem onClick={() => router.push('/divider')} active={router.isActive('/divider')} text="Divider" />
      <MenuItem onClick={() => router.push('/emoji-menu')} active={router.isActive('/emoji-menu')} text="EmojiMenu" />
      <MenuItem onClick={() => router.push('/empty-state')} active={router.isActive('/empty-state')} text="EmptyState" />
      <MenuItem onClick={() => router.push('/icons')} active={router.isActive('/icons')} text="Icons" />
      <MenuItem onClick={() => router.push('/icon-menu')} active={router.isActive('/icon-menu')} text="IconMenu" />
      <MenuItem onClick={() => router.push('/input')} active={router.isActive('/input')} text="Input" />
      <MenuItem onClick={() => router.push('/lightbox')} active={router.isActive('/lightbox')} text="Lightbox" />
      <MenuItem onClick={() => router.push('/list')} active={router.isActive('/list')} text="List" />
      <MenuItem onClick={() => router.push('/list-item')} active={router.isActive('/list-item')} text="ListItem" />
      <MenuItem onClick={() => router.push('/loader')} active={router.isActive('/loader')} text="Loader" />
      <MenuItem onClick={() => router.push('/menu')} active={router.isActive('/menu')} text="Menu" />
      <MenuItem onClick={() => router.push('/menu-item')} active={router.isActive('/menu-item')} text="MenuItem" />
      <MenuItem onClick={() => router.push('/message')} active={router.isActive('/message')} text="Message" />
      <MenuItem onClick={() => router.push('/message-list')} active={router.isActive('/message-list')} text="MessageList" />
      <MenuItem onClick={() => router.push('/message-input')} active={router.isActive('/message-input')} text="MessageInput" />
      <MenuItem onClick={() => router.push('/modal')} active={router.isActive('/modal')} text="Modal" />
      <MenuItem onClick={() => router.push('/pagination')} active={router.isActive('/pagination')} text="Pagination" />
      <MenuItem onClick={() => router.push('/paper')} active={router.isActive('/paper')} text="Paper" />
      <MenuItem onClick={() => router.push('/pop-over')} active={router.isActive('/pop-over')} text="PopOver" />
      <MenuItem onClick={() => router.push('/profile')} active={router.isActive('/profile')} text="Profile" />
      <MenuItem onClick={() => router.push('/profile-card')} active={router.isActive('/profile-card')} text="ProfileCard" />
      <MenuItem onClick={() => router.push('/radio-button')} active={router.isActive('/radio-button')} text="RadioButton" />
      <MenuItem onClick={() => router.push('/search-box')} active={router.isActive('/search-box')} text="SearchBox" />
      <MenuItem onClick={() => router.push('/select')} active={router.isActive('/select')} text="Select" />
      <MenuItem onClick={() => router.push('/slider')} active={router.isActive('/slider')} text="Slider" />
      <MenuItem onClick={() => router.push('/switch')} active={router.isActive('/switch')} text="Switch" />
      <MenuItem onClick={() => router.push('/table')} active={router.isActive('/table')} text="Table" />
      <MenuItem onClick={() => router.push('/tabs')} active={router.isActive('/tabs')} text="Tabs" />
      <MenuItem onClick={() => router.push('/theme-provider')} active={router.isActive('/theme-provider')} text="ThemeProvider" />
      <MenuItem onClick={() => router.push('/themeable')} active={router.isActive('/themeable')} text="themeable" />
      <MenuItem onClick={() => router.push('/with-theme')} active={router.isActive('/with-theme')} text="WithTheme" />
    </Menu>
  );
};

Nav.contextTypes = {
  router: PropTypes.object
};

export default Nav;
