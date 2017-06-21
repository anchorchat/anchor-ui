const emojione = require('./emojione.json');
const map = require('lodash/map');

console.log('export default ['); // eslint-disable-line no-console

map(emojione, (e) => {
  console.log(
    `{
      title: '${e.shortname}',
      name: '${e.name}',
      shortname: '${e.shortname}',
      category: '${e.category}',
      diversity: ${Boolean(e.diversities.length > 0 || e.diversity)}
    },`
  );
});

console.log('];'); // eslint-disable-line no-console
