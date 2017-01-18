import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import Avatar from './avatar';
import getClassNames from '../internal/get-class-names';
import profileCardStyleSheet from '../style/profile-cards';
import colors from '../style/colors';

class ProfileCard extends Component {
  static propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.node.isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        profileCard: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    avatar: '',
    style: {}
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style } = props;
    const className = getClassNames(classes, style, 'profileCard', 'ProfileCard');

    this.state = {
      className
    };
  }

  render() {
    const { username, avatar, sheet: { classes } } = this.props;
    const { className } = this.state;
    const { color } = this.context;
    const backgroundColor = color || colors.theme;

    const style = {
      avatar: {
        float: 'left',
        width: '80px',
        height: '80px',
        border: `3px solid ${colors.white}`,
        marginRight: '15px'
      }
    };

    return (
      <section
        className={classNames(className, { [classes.avatar]: avatar })}
        style={{ backgroundColor }}
      >
        {avatar ? <Avatar image={avatar} style={style.avatar} /> : null}
        {username}
      </section>
    );
  }
}

export default injectSheet(profileCardStyleSheet)(ProfileCard);
