import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import jss from 'jss';

const styles = {
  ul: {
    'padding-left': '0'
  },
  li: {
    listStyle: 'none'
  }
};

function UserList({ users, sheet: { classes }, style }) {
  const test = jss.createStyleSheet(style).attach();

  return (
    <ul className={classNames(classes.ul, test.classes.ul)}>
      {users.map(user => (<li className={classes.li} key={`user-list-${user.username}`}>{user.username}</li>))}
    </ul>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({ username: PropTypes.string.isRequired })).isRequired,
  sheet: PropTypes.shape({
    classes: PropTypes.shape({
      ul: PropTypes.string.isRequired, li: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  style: PropTypes.shape({
    ul: PropTypes.object,
    li: PropTypes.object
  })
};

export default injectSheet(styles)(UserList);
