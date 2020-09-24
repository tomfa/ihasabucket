webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Button.styles.tsx":
/*!**************************************!*\
  !*** ./components/Button.styles.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "Buttonstyles__ButtonStyle",
  componentId: "sc-1y62u2l-0"
})(["color:", ";background-color:", ";border:none;padding:", ";font-size:1rem;margin-top:1rem;margin-bottom:1rem;outline-style:dashed;outline-width:2px;cursor:pointer;&:focus,&:active{outline-color:", ";}& > a{color:", ";padding:1rem;display:block;}"], function (p) {
  return p.theme.colors.textSecondary;
}, function (p) {
  return p.theme.colors.primary;
}, function (p) {
  return !p.link && '1rem';
}, function (p) {
  return p.theme.colors.primary;
}, function (p) {
  return p.theme.colors.textSecondary;
});
/* harmony default export */ __webpack_exports__["default"] = (ButtonStyle);

/***/ }),

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
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/ShareLink.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/anchor-is-valid */



var ShareLink = function ShareLink(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'ihasabuvket.it' : _ref$title,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'Setup frontend or file hosting in 3 minutes' : _ref$text,
      url = _ref.url;
  var currentUrl = Object(_utils_useCurrentUrl__WEBPACK_IMPORTED_MODULE_1__["useCurrentUrl"])(true);
  var supportsNavigatorShare = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return navigator && navigator.share;
  }, [navigator]);

  if (true) {
    return __jsx(_Button_styles__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
        lineNumber: 26,
        columnNumber: 7
      }
    }, children || 'Share this page');
  }

  return __jsx("a", {
    href: url || currentUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 10
    }
  }, children || 'Share this page');
};

/***/ })

})
//# sourceMappingURL=index.js.9fe22d2b9b39b4c2bf90.hot-update.js.map