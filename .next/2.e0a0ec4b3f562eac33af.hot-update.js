webpackHotUpdate(2,{

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(67);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(109);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(64);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(63);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(32);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(33);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(66);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(65);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(560);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(19);

var _react2 = _interopRequireDefault(_react);

var _document = __webpack_require__(323);

var _document2 = _interopRequireDefault(_document);

var _StyleSheet = __webpack_require__(324);

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _styledComponents = __webpack_require__(565);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/peter/Repos/react-cms-boilerplate/pages/_document.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\t@font-face {\n\t  font-family: \'Apercu\';\n\t}\n\n\tbody {\n    font-family: \'Apercu\';\n\t\tmargin: 0;\n\t}\n'], ['\n\t@font-face {\n\t  font-family: \'Apercu\';\n\t}\n\n\tbody {\n    font-family: \'Apercu\';\n\t\tmargin: 0;\n\t}\n']);

(0, _styledComponents.injectGlobal)(_templateObject);

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'React CMS Boilerplate')), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('injectGlobal', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var renderPage = _ref2.renderPage;
        var page, styles;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = renderPage();
                styles = _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _StyleSheet2.default.rules().map(function (rule) {
                      return rule.cssText;
                    }).join('\n') }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                  }
                });
                return _context.abrupt('return', (0, _extends3.default)({}, page, { styles: styles }));

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/peter/Repos/react-cms-boilerplate/pages/_document.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/peter/Repos/react-cms-boilerplate/pages/_document.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/_document")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/NDRlOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCOzs7O0FBQ3hCOzs7O0FBQ0U7Ozs7Ozs7O0FBRVQ7O0lBV3FCOzs7Ozs7Ozs7Ozs2QkFVakI7NkJBQ0U7O29CQUFBO3NCQUNFO0FBREY7QUFBQSx5QkFDRzs7b0JBQUQ7c0JBQ0U7QUFERjtBQUFBLHlCQUNFOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FFRjs7b0JBQUE7c0JBQ0U7QUFERjtBQUFBLHlCQUNFOztvQkFBQTtzQkFDRTtBQURGO0FBQUEseUJBQ0c7O29CQUFEO3NCQUNBO0FBREE7QUFBQSwwQkFDQzs7b0JBQUQ7c0JBS1Q7QUFMUztBQUFBOzs7Ozs7WUFqQnNCOzs7OzttQkFDeEI7dUJBQ0E7a0VBQ0csMkJBQTJCLDZCQUFtQixRQUFRLElBQUk7NkJBQVEsS0FBSztBQUFwQyx1QkFBNkMsS0FBSyxLQUE1RDs4QkFBaEM7Z0NBQUE7QUFBQTtpQkFBQTs0RUFFVSxRQUFNLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOa0I7O2tCQUFuQixXIiwiZmlsZSI6IjIuZTBhMGVjNGIzZjU2MmVhYzMzYWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2N1bWVudCwgeyBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCdcbmltcG9ydCBzdHlsZVNoZWV0IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzL2xpYi9tb2RlbHMvU3R5bGVTaGVldCdcbmltcG9ydCB7IGluamVjdEdsb2JhbCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW5qZWN0R2xvYmFsYFxuXHRAZm9udC1mYWNlIHtcblx0ICBmb250LWZhbWlseTogJ0FwZXJjdSc7XG5cdH1cblxuXHRib2R5IHtcbiAgICBmb250LWZhbWlseTogJ0FwZXJjdSc7XG5cdFx0bWFyZ2luOiAwO1xuXHR9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHJlbmRlclBhZ2UgfSkge1xuICAgIGNvbnN0IHBhZ2UgPSByZW5kZXJQYWdlKClcbiAgICBjb25zdCBzdHlsZXMgPSAoXG4gICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZVNoZWV0LnJ1bGVzKCkubWFwKHJ1bGUgPT4gcnVsZS5jc3NUZXh0KS5qb2luKCdcXG4nKSB9fSAvPlxuICAgIClcbiAgICByZXR1cm4geyAuLi5wYWdlLCBzdHlsZXMgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5SZWFjdCBDTVMgQm9pbGVycGxhdGU8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxpbmplY3RHbG9iYWw+XG4gICAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgICA8L2luamVjdEdsb2JhbD5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvX2RvY3VtZW50LmpzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==