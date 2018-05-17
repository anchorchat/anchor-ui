import isArray from 'lodash/isArray';
import take from 'lodash/take';
import unionBy from 'lodash/unionBy';
import store from 'store';

const storeEmoji = (emoji) => {
  let storedEmojis = store.get('recent-emoji');

  if (!isArray(storedEmojis)) {
    storedEmojis = [];
  }

  store.set('recent-emoji', take(unionBy([emoji], storedEmojis, 'shortname'), 42));
};

export default storeEmoji;
