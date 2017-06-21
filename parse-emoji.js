const emojione = require('./emojione.json');
const map = require('lodash/map');

console.log('export default [');

map(emojione, (e) => {
  console.log(`
    {title: '${e.shortname}',
    name: '${e.name}',
    shortname: '${e.shortname}',
    category: '${e.category}',
    diversity: ${e.diversities.length > 0 ? true : false}},
  `);
});

console.log('];');
