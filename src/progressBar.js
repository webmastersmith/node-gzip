const cliProgress = require('cli-progress') //npm i cli-progress colors
const _colors = require('colors')

// create progressBar options
module.exports = new cliProgress.SingleBar({
  format:
    'CLI Progress |' +
    _colors.cyan('{bar}') +
    '| {percentage}% || {value}/{total} Chunks',
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true,
})
