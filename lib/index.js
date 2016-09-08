#!/usr/bin/env node

// test file
// './RNTtyhuo.postman_collection',
// './RNTtyhuo.postman_environment'

const newman = require('newman');
const CryptUtil = require('./decrypt.js');
const argv = process.argv.slice(2);

if (argv.length < 1) {
  console.log('请指定 postman_collection 文件');

  return;
}

let options = {
  reporters: 'cli',
  reporters: 'cli',
  globals: {
    CryptUtil: CryptUtil,
    console: console
  },
  collection: argv[0]
};

if (argv.length > 1) {
  options.environment = argv[1];
}

newman.run(options, function(err, summary) {
  if (err) {
    throw err;
  }

  console.log('!!! Complete !!!');
});
