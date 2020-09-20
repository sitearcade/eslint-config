#!/usr/bin/env node

// import

const {exec} = require('promisify-child-process');

const {peerDependencies} = require('../package.json');

// vars

const pkgs = Object.keys(peerDependencies);

// run

(async () => {
  try {
    const {stdout} = await exec(`npm i -D ${pkgs.join(' ')}`);

    console.info(stdout.trim());
  } catch (err) {
    console.error(err);
  }
})();
