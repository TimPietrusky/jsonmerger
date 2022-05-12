const _ = require('lodash');
const fs = require('fs');

const main = require('./main.json');
const sub = require('./sub.json');

// Convert the main and sub objects to a single object
const merged = _.merge(main, sub);

// Write the merged object to a file
fs.writeFileSync('./merged.json', JSON.stringify(merged, null, 2));
