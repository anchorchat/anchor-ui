import React, { PropTypes } from 'react';

function MyProfileCard({ username }) {
  return (
    <section>
      {username}
    </section>
  );
}

MyProfileCard.propTypes = {
  username: PropTypes.string.isRequired
};

export default MyProfileCard;
