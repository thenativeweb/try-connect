'use strict';

const { promisify } = require('util');

const oneLine = require('common-tags/lib/oneLine'),
      shell = require('shelljs');

const sleep = promisify(setTimeout);

const pre = async function () {
  shell.exec(oneLine`
    docker run
      -d
      -p 5672:5672
      -e RABBITMQ_DEFAULT_USER=wolkenkit
      -e RABBITMQ_DEFAULT_PASS=wolkenkit
      --name rabbitmq-units
      thenativeweb/wolkenkit-rabbitmq:latest
  `);
  shell.exec(oneLine`
    docker run
      -d
      -p 27017:27017
      -e MONGODB_DATABASE=wolkenkit
      -e MONGODB_USER=wolkenkit
      -e MONGODB_PASS=wolkenkit
      --name mongodb-units
      thenativeweb/wolkenkit-mongodb:latest
  `);
  shell.exec(oneLine`
    docker run
      -d
      -p 5432:5432
      -e POSTGRES_DB=wolkenkit
      -e POSTGRES_USER=wolkenkit
      -e POSTGRES_PASSWORD=wolkenkit
      --name postgres-units
      thenativeweb/wolkenkit-postgres:latest
  `);

  // Just wait long enough to give all the containers the chance to be ready.
  await sleep(30 * 1000);
};

module.exports = pre;
