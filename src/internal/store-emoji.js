import _ from 'lodash';
import store from 'store';

const storeEmoji = (emoji) => {
  const key = 'recent-emoji';
  const storedEmojis = store.get(key);
  let value;

  if (
    storedEmojis &&
    _.find(storedEmojis, storedEmoji => storedEmoji.shortname === emoji.shortname)
  ) {
    return false;
  }

  if (!storedEmojis) {
    value = [emoji];
  }

  if (
    storedEmojis &&
    !_.find(storedEmojis, storedEmoji => storedEmoji.shortname === emoji.shortname)
  ) {
    storedEmojis.unshift(emoji);
    value = storedEmojis;
  }

  if (value.length > 42) {
    value.pop();
  }

  store.set(key, value);

  return false;
};

export default storeEmoji;
