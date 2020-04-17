"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetch = function fetch(options) {
  var _options$method = options.method,
      method = _options$method === void 0 ? 'get' : _options$method,
      data = options.data,
      headers = options.headers,
      uri = options.uri,
      _options$withCredenti = options.withCredentials,
      withCredentials = _options$withCredenti === void 0 ? true : _options$withCredenti;
  var cloneData = data;

  switch (method.toLowerCase()) {
    case 'get':
      return _axios.default.get(uri, {
        params: cloneData,
        headers: headers,
        withCredentials: withCredentials
      });

    case 'post':
      return _axios.default.post(uri, cloneData, {
        headers: _objectSpread({}, headers, {
          'content-type': headers && headers['content-type'] ? headers['content-type'] : 'application/json'
        }),
        withCredentials: withCredentials
      });

    case 'delete':
      return _axios.default.delete(uri, {
        params: cloneData,
        headers: _objectSpread({}, headers, {
          'content-type': headers && headers['content-type'] ? headers['content-type'] : 'application/json'
        }),
        withCredentials: withCredentials
      });

    case 'put':
      return _axios.default.put(uri, {
        params: cloneData,
        headers: _objectSpread({}, headers, {
          'content-type': headers && headers['content-type'] ? headers['content-type'] : 'application/json'
        }),
        withCredentials: withCredentials
      });

    default:
      return (0, _axios.default)(options);
  }
};

exports.fetch = fetch;