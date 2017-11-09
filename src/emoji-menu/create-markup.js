import emojione from 'emojione';

function createMarkup(shortname) {
  return emojione.toImage(shortname);
}

export default createMarkup;
