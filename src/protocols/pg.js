'use strict';

const DsnParser = require('dsn-parser'),
      pg = require('pg');

const tryPg = async function (url) {
  if (!url) {
    throw new Error('Url is missing.');
  }

  let result;

  try {
    result = new DsnParser(url).getParts();
  } catch (ex) {
    throw new Error('Failed to parse url.');
  }

  const { host, port, user, password, database } = result;

  const pool = new pg.Pool({ host, port, user, password, database });
  const connection = await pool.connect();

  connection.release();
  await pool.end();
};

module.exports = tryPg;
