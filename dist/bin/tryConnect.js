#!/usr/bin/env node


'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buntstift = require('buntstift'),
    processenv = require('processenv');

var tryConnect = require('../tryConnect');

(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var url;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = void 0;
          _context.prev = 1;

          url = processenv('URL');

          if (!url) {
            buntstift.error('Environment variable URL is missing.');
            buntstift.exit(1);
          }

          buntstift.info('Trying to connect to ' + url + '...');

          _context.next = 7;
          return tryConnect(url);

        case 7:

          buntstift.success('Successfully connected.');
          buntstift.exit();
          _context.next = 17;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context['catch'](1);

          buntstift.error('Failed to connect.');
          buntstift.info(_context.t0.message);
          buntstift.verbose(_context.t0.stack);
          buntstift.exit(1);

        case 17:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined, [[1, 11]]);
}))();