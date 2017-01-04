import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import getClassNames from '../get-class-names';
import listStyle from '../style/lists';

function UserList({ users, sheet: { classes }, style }) {
  return (
    <ul className={getClassNames(classes, 'list', style)}>
      {users.map(user => (
        <li
          className={getClassNames(classes, 'listItem', style)}
          key={`user-list-${user.username}`}
        >
          {user.username}
        </li>
      ))}
    </ul>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({ username: PropTypes.string.isRequired })).isRequired,
  sheet: PropTypes.shape({
    classes: PropTypes.shape({
      list: PropTypes.string.isRequired,
      listItem: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  style: PropTypes.shape({
    list: PropTypes.object,
    listItem: PropTypes.object
  })
};

export default injectSheet(listStyle)(UserList);
