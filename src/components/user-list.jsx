import React, { PropTypes } from 'react';

function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (<li key={`user-list-${user.username}`}>{user.username}</li>))}
    </ul>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({ username: PropTypes.string.isRequired })).isRequired,
};

export default UserList;
