'use strict';

const assert = require('assertthat');

const tryConnect = require('../../src/tryConnect');

suite('tryConnect', () => {
  test('is a function.', async () => {
    assert.that(tryConnect).is.ofType('function');
  });

  test('throws an error when url is missing.', async () => {
    await assert.that(async () => {
      await tryConnect();
    }).is.throwingAsync('Url is missing.');
  });

  test('throws an error when the protocol is unknown.', async () => {
    await assert.that(async () => {
      await tryConnect('non-existent://user:secret@host:12345/');
    }).is.throwingAsync('Unknown protocol.');
  });

  suite('amqp', () => {
    test('tries to connect to RabbitMQ.', async () => {
      await tryConnect('amqp://wolkenkit:wolkenkit@localhost:5672');
    });

    test('fails when no connection could be established.', async () => {
      await assert.that(async () => {
        await tryConnect('amqp://wolkenkit:wolkenkit@non-existent:5672');
      }).is.throwingAsync('Failed to connect to amqp://wolkenkit:wolkenkit@non-existent:5672.');
    });
  });

  suite('pg', () => {
    test('tries to connect to PostgreSQL.', async () => {
      await tryConnect('pg://wolkenkit:wolkenkit@localhost:5432/wolkenkit');
    });

    test('fails when no connection could be established.', async () => {
      await assert.that(async () => {
        await tryConnect('pg://wolkenkit:wolkenkit@non-existent:5432/wolkenkit');
      }).is.throwingAsync('Failed to connect to pg://wolkenkit:wolkenkit@non-existent:5432/wolkenkit.');
    });
  });

  suite('mongodb', () => {
    test('tries to connect to MongoDB.', async () => {
      await tryConnect('mongodb://wolkenkit:wolkenkit@localhost:27017/wolkenkit');
    });

    test('fails when no connection could be established.', async () => {
      await assert.that(async () => {
        await tryConnect('mongodb://wolkenkit:wolkenkit@non-existent:27017/wolkenkit');
      }).is.throwingAsync('Failed to connect to mongodb://wolkenkit:wolkenkit@non-existent:27017/wolkenkit.');
    });
  });
});
