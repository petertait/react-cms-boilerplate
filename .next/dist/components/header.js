'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/peter/Repos/react-cms-boilerplate/components/header.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background: grey;\n  padding: 20px;\n'], ['\n  background: grey;\n  padding: 20px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\n'], ['\n\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  color: red;\n'], ['\n  color: red;\n']);

var Wrapper = _styledComponents2.default.header(_templateObject);

var Nav = _styledComponents2.default.nav(_templateObject2);

var A = _styledComponents2.default.a(_templateObject3);

var Header = function Header(props) {
  return _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(A, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement(A, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, 'About'))));
};

exports.default = Header;