webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/forms/Description.style.tsx":
/*!************************************************!*\
  !*** ./components/forms/Description.style.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var DescriptionStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "Descriptionstyle__DescriptionStyle",
  componentId: "sc-1vej8zf-0"
})(["color:", ";font-style:italic;"], function (p) {
  return p.theme.colors.textMuted;
});
/* harmony default export */ __webpack_exports__["default"] = (DescriptionStyle);

/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/*! exports provided: theme, useTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var theme = {
  fonts: {
    primary: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n' + '    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    secondary: "'Barlow Condensed', sans-serif"
  },
  colors: {
    primary: '#fd9228',
    secondary: '',
    bgPrimary: '#ffffff',
    bgSecondary: '#111111',
    textPrimary: '#000000',
    textSecondary: '#fafafa',
    textMuted: '#888888',
    links: '#0070f3'
  },
  layout: {
    maxWidth: '800'
  }
};
var useTheme = function useTheme() {
  var themeContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"]);
  return themeContext;
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ })

})
//# sourceMappingURL=index.js.b63f395870bd1ea8f69e.hot-update.js.map