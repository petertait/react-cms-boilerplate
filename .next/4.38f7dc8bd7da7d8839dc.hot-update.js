webpackHotUpdate(4,{

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _prismic = __webpack_require__(581);

var _prismic2 = _interopRequireDefault(_prismic);

var _reactPrismicHocs = __webpack_require__(591);

var _head = __webpack_require__(234);

var _head2 = _interopRequireDefault(_head);

var _link = __webpack_require__(580);

var _link2 = _interopRequireDefault(_link);

var _header = __webpack_require__(590);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/peter/Repos/react-cms-boilerplate/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/peter/Repos/react-cms-boilerplate/pages/index.js"); } } })();
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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9mMjM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFDQTs7OztBQUNFOztBQUNGOzs7O0FBQ0E7Ozs7QUFFWTs7Ozs7Ozs7OztrQ0FHakI7O0FBQ0E7QUFDQTtBQUVBOztrQkFBYSxPQUFPO3dDQUFBOztpSUFFbkI7Ozs7OzZCQUdDOzZCQUNHO2FBRUM7WUFBSTs7b0JBRk47c0JBSUc7QUFKSDtBQUNFLE9BREYsa0JBSUc7WUFBRTtZQUFTO1lBQVM7K0JBQ25COztzQkFBQTt3QkFDRztBQURIO0FBQUEsWUFDSSxXQUFXLDJCQUNYOztzQkFBQTt3QkFBTTtBQUFOO0FBQUEsbUJBQWMsS0FBSztBQU05Qjs7Ozs7RUF4QjBCLGdCQUFNIiwiZmlsZSI6IjQuMzhmN2RjOGJkN2RhN2Q4ODM5ZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcmlzbWljIGZyb20gJ3ByaXNtaWMuaW8nXG5pbXBvcnQgeyBEb2N1bWVudEJ5SWQgfSBmcm9tICdyZWFjdC1wcmlzbWljLWhvY3MnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLy8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gIC8vXG4gIC8vIH1cblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERvY3VtZW50QnlJZFxuICAgICAgICB1cmw9eydodHRwczovL3JlYWN0LWNtcy1ib2lsZXJwbGF0ZS5wcmlzbWljLmlvL2FwaSd9XG4gICAgICAgIGlkPXsnaG9tZSd9XG4gICAgICA+XG4gICAgICAgIHsoe2xvYWRpbmcsIHByaXNtaWMsIGVycm9yfSkgPT4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7IWxvYWRpbmcgJiYgcHJpc21pYyAmJlxuICAgICAgICAgICAgICA8ZGl2PntwcmlzbWljLmRhdGFbJ3RpdGxlJ119PC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0RvY3VtZW50QnlJZD5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==