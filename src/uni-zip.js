const progressBar = require('./progressBar.js')

module.exports = function UniZip(inputFile, outFile = '') {
  const fs = require('fs')
  const zlib = require('zlib')

  // inputFile has .gz on end:, true gunzip, false gzip.
  const isGunzip = /\.gz$/g.test(inputFile)
  const uniZip = isGunzip ? zlib.createGunzip : zlib.createGzip
  const output = outFile
    ? outFile
    : isGunzip
    ? inputFile.replace(/\.gz$/, '')
    : `${inputFile}.gz`

  // size of input file in bytes
  const { size } = fs.statSync(inputFile)
  let receivedBytes = 0
  progressBar.start(size, 0)

  const data = fs.createReadStream(inputFile)
  // handle video data => on: data, end, error
  data
    .on('data', (chunk) => {
      receivedBytes += chunk.length
      progressBar.update(receivedBytes)
    })
    .pipe(uniZip())
    .pipe(fs.createWriteStream(output))
  data.on('end', () => {
    progressBar.stop()
    console.log(`${output} finished!`)
    if (isGunzip)
      fs.unlink(inputFile, (err) => {
        if (err) console.log(err)
        console.log(`Deleted gzipped file`)
      })
  })
  data.on('error', (err) => console.log('Data error:', err))
}
