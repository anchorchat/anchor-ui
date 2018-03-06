import times from 'lodash/times';
import sortBy from 'lodash/sortBy';
import toLower from 'lodash/toLower';
import faker from 'faker';

const generateRandomUsers = amount => (
  times(amount, () => ({
    userId: faker.random.uuid(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    message: faker.lorem.sentence()
  }))
);

const sortUsersByUsername = users => (
  sortBy(users, user => toLower(user.username))
);

export {
  generateRandomUsers,
  sortUsersByUsername
};
