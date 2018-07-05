'use strict';

const retry = require('async-retry');

const protocols = require('./protocols');

const tryConnect = async function (url, retries = 0) {
  if (!url) {
    throw new Error('Url is missing.');
  }

  const [ protocol ] = url.split('://');

  if (!protocols[protocol]) {
    throw new Error('Unknown protocol.');
  }

  try {
    await retry(async () => {
      await protocols[protocol](url);
    }, { retries });
  } catch (ex) {
    throw new Error(`Failed to connect to ${url}.`);
  }
};

module.exports = tryConnect;
