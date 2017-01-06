import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import getClassNames from '../internal/get-class-names';
import profileCardStyleSheet from '../style/profile-cards';

class ProfileCard extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        profileCard: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.shape({
      profileCard: PropTypes.object
    })
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
    const { username } = this.props;
    const { className } = this.state;

    return (
      <section className={className}>
        {username}
      </section>
    );
  }
}

export default injectSheet(profileCardStyleSheet)(ProfileCard);
