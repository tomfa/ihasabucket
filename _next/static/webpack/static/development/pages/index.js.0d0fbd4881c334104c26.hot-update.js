webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ShareLink.tsx":
/*!**********************************!*\
  !*** ./components/ShareLink.tsx ***!
  \**********************************/
/*! exports provided: ShareLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareLink", function() { return ShareLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useCurrentUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useCurrentUrl */ "./utils/useCurrentUrl.ts");
/* harmony import */ var _Button_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.styles */ "./components/Button.styles.tsx");
/* harmony import */ var _icons_Share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/Share */ "./components/icons/Share.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/ShareLink.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/anchor-is-valid */




var ShareLink = function ShareLink(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'ihasabucket.it' : _ref$title,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'Share to e.g. email or slack for later use' : _ref$text,
      url = _ref.url;
  var currentUrl = Object(_utils_useCurrentUrl__WEBPACK_IMPORTED_MODULE_1__["useCurrentUrl"])(true);
  var supportsNavigatorShare = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return navigator && navigator.share;
  }, [navigator.share]);

  if (true) {
    return __jsx(_Button_styles__WEBPACK_IMPORTED_MODULE_2__["default"], {
      thin: true,
      onClick: function onClick() {
        return console.log({
          title: title,
          text: text,
          url: url || currentUrl
        });
      } //navigator.share({ title, text, url: url || currentUrl })
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, children || 'Share this page', __jsx(_icons_Share__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: 'white',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }));
  }

  return __jsx("a", {
    href: url || currentUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 10
    }
  }, children || 'Share this page');
};

/***/ })

})
//# sourceMappingURL=index.js.0d0fbd4881c334104c26.hot-update.js.map