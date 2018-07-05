#!/usr/bin/env node

'use strict';

const buntstift = require('buntstift'),
      processenv = require('processenv');

const tryConnect = require('../tryConnect');

(async () => {
  let url;

  try {
    url = processenv('URL');

    if (!url) {
      buntstift.error('Environment variable URL is missing.');
      buntstift.exit(1);
    }

    buntstift.info(`Trying to connect to ${url}...`);

    await tryConnect(url);

    buntstift.success('Successfully connected.');
    buntstift.exit();
  } catch (ex) {
    buntstift.error('Failed to connect.');
    buntstift.info(ex.message);
    buntstift.verbose(ex.stack);
    buntstift.exit(1);
  }
})();
