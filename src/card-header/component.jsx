import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';
import Avatar from '../avatar';

/** A Card is a piece of paper with unique related data */
const CardHeader = ({
  style, title, headerStyle, titleStyle, subtitle, subtitleStyle, avatar, avatarStyle, ...custom
}) => (
  <header style={getStyles.root(style)} {...custom}>
    {avatar ? <Avatar image={avatar} style={getStyles.avatar(avatarStyle)} /> : null}
    <div style={getStyles.header(avatar, headerStyle)}>
      <h1 style={getStyles.title(titleStyle)}>{title}</h1>
      {subtitle ? <h2 style={getStyles.subtitle(subtitleStyle)}>{subtitle}</h2> : null}
    </div>
  </header>
);

CardHeader.displayName = 'CardHeader';

CardHeader.propTypes = {
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the title element */
  titleStyle: PropTypes.instanceOf(Object),
  /** The CardHeader's title */
  title: PropTypes.node.isRequired,
  /** Override the styles of the subtitle element */
  subtitleStyle: PropTypes.instanceOf(Object),
  /** The CardHeader's subtitle */
  subtitle: PropTypes.node,
  /** Path to an Avatar image */
  avatar: PropTypes.string,
  /** Override the styles of the subtitle element */
  avatarStyle: PropTypes.instanceOf(Object),
};

CardHeader.defaultProps = {
  style: {},
  headerStyle: {},
  titleStyle: {},
  subtitleStyle: {},
  subtitle: null,
  avatar: '',
  avatarStyle: {}
};

export default CardHeader;
