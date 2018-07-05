'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DsnParser = require('dsn-parser'),
    pg = require('pg');

var tryPg = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url) {
    var result, _result, host, port, user, password, database, pool, connection;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (url) {
              _context.next = 2;
              break;
            }

            throw new Error('Url is missing.');

          case 2:
            result = void 0;
            _context.prev = 3;

            result = new DsnParser(url).getParts();
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](3);
            throw new Error('Failed to parse url.');

          case 10:
            _result = result, host = _result.host, port = _result.port, user = _result.user, password = _result.password, database = _result.database;
            pool = new pg.Pool({ host: host, port: port, user: user, password: password, database: database });
            _context.next = 14;
            return pool.connect();

          case 14:
            connection = _context.sent;


            connection.release();
            _context.next = 18;
            return pool.end();

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 7]]);
  }));

  return function tryPg(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = tryPg;