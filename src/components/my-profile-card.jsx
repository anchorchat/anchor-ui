import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import getClassNames from '../internal/get-class-names';
import myProfileCard from '../style/profile-cards';

class MyProfileCard extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        myProfileCard: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.shape({
      myProfileCard: PropTypes.object
    })
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style } = props;
    const className = getClassNames(classes, style, 'myProfileCard', 'MyProfileCard');

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

export default injectSheet(myProfileCard)(MyProfileCard);
