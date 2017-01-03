import React, { PropTypes } from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';

const styles = csjs`
.ul {
  padding-left: 0
}
.li {
  list-style: none
}`;

function UserList({ users, classes }) {
  return (
    <ul className={classes.ul}>
      {users.map(user => (<li className={classes.li} key={`user-list-${user.username}`}>{user.username}</li>))}
    </ul>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({ username: PropTypes.string.isRequired })).isRequired,
  classes: React.PropTypes.objectOf(React.PropTypes.object).isRequired
};

export default withStyles(styles)(UserList);
