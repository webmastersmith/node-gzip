# node-gzip

Use nodejs to gzip/gunzip large files with the node file system stream and progress bar.
Max memory usage is about 30MB, no matter how large file is.

### Windows cmd line:
1. Clone repository: git clone https://github.com/webmastersmith/node-gzip.git
2. cd into directory
3. npm i
4. edit index.js to point to your file:
   * Will create gzipped file in same directory as input file if no output file path is provided.
   * If input file has '.gz' on the end, unizip will automatically know to unzip it.
5. run from command line: node .\index.js

![command line progress bar image](src/images/cli.png)
