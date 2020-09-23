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
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/ShareLink.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/anchor-is-valid */


var ShareLink = function ShareLink(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'I has a bucket' : _ref$title,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'Setup frontend or file hosting in 3 minutes' : _ref$text,
      url = _ref.url;
  var currentUrl = Object(_utils_useCurrentUrl__WEBPACK_IMPORTED_MODULE_1__["useCurrentUrl"])(true);
  var supportsNavigatorShare = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return navigator && navigator.share;
  }, [navigator]);

  if (supportsNavigatorShare) {
    return __jsx("a", {
      href: "#",
      role: "button",
      onClick: function onClick() {
        return navigator.share({
          title: title,
          text: text,
          url: url || currentUrl
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, children || 'Share this page');
  }

  return __jsx("a", {
    href: currentUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 10
    }
  }, children || 'Share this page');
};

/***/ })

})
//# sourceMappingURL=index.js.d179f579cf5102579a4e.hot-update.js.map