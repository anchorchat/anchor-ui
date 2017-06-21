const emojione = require('./emojione.json');
const map = require('lodash/map');

console.log('export default ['); // eslint-disable-line no-console

map(emojione, (e) => {
  console.log( // eslint-disable-line no-console
    `{
      title: '${e.shortname.replace(/:levitate:/g, ':man_in_business_suit_levitating:')}${e.diversities.length > 0 && !e.diversity ? ' tone0' : ''}',
      name: '${e.name}',
      shortname: '${e.shortname.replace(/:levitate:/g, ':man_in_business_suit_levitating:')}',
      category: '${e.category}',
      diversity: ${Boolean(e.diversities.length > 0 || e.diversity)}
    },`
  );
});

console.log('];'); // eslint-disable-line no-console
