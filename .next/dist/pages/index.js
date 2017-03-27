'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prismic = require('prismic.io');

var _prismic2 = _interopRequireDefault(_prismic);

var _reactPrismicHocs = require('react-prismic-hocs');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/peter/Repos/react-cms-boilerplate/pages/index.js?entry';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  // static async getInitialProps () {
  //
  // }

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactPrismicHocs.DocumentById, {
        url: 'https://react-cms-boilerplate.prismic.io/api',
        id: 'home',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, function (_ref) {
        var loading = _ref.loading,
            prismic = _ref.prismic,
            error = _ref.error;
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, !loading && prismic && _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, prismic.data['title']));
      });
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;