import emojione from 'emojione';

function createMarkup(shortname) {
  return {
    __html: emojione.toImage(shortname)
  };
}

export default createMarkup;
