'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var retry = require('async-retry');

var protocols = require('./protocols');

var tryConnect = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(url) {
    var _this = this;

    var retries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var _url$split, _url$split2, protocol;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (url) {
              _context2.next = 2;
              break;
            }

            throw new Error('Url is missing.');

          case 2:
            _url$split = url.split('://'), _url$split2 = (0, _slicedToArray3.default)(_url$split, 1), protocol = _url$split2[0];

            if (protocols[protocol]) {
              _context2.next = 5;
              break;
            }

            throw new Error('Unknown protocol.');

          case 5:
            _context2.prev = 5;
            _context2.next = 8;
            return retry((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
              return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return protocols[protocol](url);

                    case 2:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, _this);
            })), { retries: retries });

          case 8:
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2['catch'](5);
            throw new Error('Failed to connect to ' + url + '.');

          case 13:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[5, 10]]);
  }));

  return function tryConnect(_x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = tryConnect;