'use strict';

const amqp = require('amqplib');

const tryAmqp = async function (url) {
  if (!url) {
    throw new Error('Url is missing.');
  }

  const connection = await amqp.connect(url, {});

  await connection.close();
};

module.exports = tryAmqp;
