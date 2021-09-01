const UniZip = require('./src/uni-zip')

// if input is a .gz file, gunzip it. If not gzip it.
// UniZip(input, output)  //output file is optional. If empty, will create file in same directory.
UniZip(
  'F:/Raid_Backup/Videos/YouTube/Dr._Bruce_Lipton_Explains_How_to_Reprogram_Your_Mind-xsA91lxuF00 - Copy.webm.gz'
)
