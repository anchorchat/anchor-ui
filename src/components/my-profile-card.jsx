import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import getClassNames from '../get-class-names';
import myProfileCard from '../style/profile-cards';

function MyProfileCard({ username, sheet: { classes }, style }) {
  return (
    <section className={getClassNames(classes, 'myProfileCard', style)}>
      {username}
    </section>
  );
}

MyProfileCard.propTypes = {
  username: PropTypes.string.isRequired,
  sheet: PropTypes.shape({
    classes: PropTypes.shape({
      myProfileCard: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  style: PropTypes.shape({
    myProfileCard: PropTypes.object
  })
};

export default injectSheet(myProfileCard)(MyProfileCard);
