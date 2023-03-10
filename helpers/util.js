const fs = require('fs');

const writeToFile = (destination, content) =>
  fs.writeFileSync(destination, JSON.stringify(content, null, 2), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
);

module.exports = { writeToFile };