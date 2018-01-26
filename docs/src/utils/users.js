import _ from 'lodash';
import faker from 'faker';

const generateRandomUsers = amount => (
  _.times(amount, () => ({
    userId: faker.random.uuid(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    message: faker.lorem.sentence()
  }))
);

const sortUsersByUsername = users => (
  _.sortBy(users, user => _.toLower(user.username))
);

export {
  generateRandomUsers,
  sortUsersByUsername
};
