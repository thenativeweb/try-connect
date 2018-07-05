'use strict';

const { MongoClient } = require('mongodb');

const tryMongodb = async function (url) {
  if (!url) {
    throw new Error('Url is missing.');
  }

  /* eslint-disable id-length */
  const connection = await MongoClient.connect(url, { w: 1 });
  /* eslint-enable id-length */

  await connection.close();
};

module.exports = tryMongodb;
