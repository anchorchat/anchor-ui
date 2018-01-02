import _ from 'lodash';
import store from 'store';

const storeEmoji = (emoji) => {
  let storedEmojis = store.get('recent-emoji');

  if (!_.isArray(storedEmojis)) {
    storedEmojis = [];
  }

  store.set('recent-emoji', _.take(_.unionBy([emoji], storedEmojis, 'shortname'), 42));
};

export default storeEmoji;
