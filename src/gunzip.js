const progressBar = require('./progressBar.js')

module.exports = function Gunzip(input, output) {
  const fs = require('fs')
  const zlib = require('zlib')

  // size of input file in bytes
  const { size } = fs.statSync(input)
  let receivedBytes = 0
  progressBar.start(size, 0)

  const data = fs.createReadStream(input)
  // handle video data => on: data, end, error
  data
    .on('data', (chunk) => {
      receivedBytes += chunk.length
      progressBar.update(receivedBytes)
    })
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(output))
  data.on('end', () => {
    progressBar.stop()
    console.log('Finished!')
  })
  data.on('error', (err) => console.log('Data error:', err))
}
