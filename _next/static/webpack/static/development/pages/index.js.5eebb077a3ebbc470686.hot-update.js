webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MetaTags_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MetaTags/Meta */ "./components/MetaTags/Meta.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./components/utils.tsx");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Title */ "./components/Header/Title.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/Header/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Header = function Header() {
  var theme = Object(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  return __jsx(_utils__WEBPACK_IMPORTED_MODULE_2__["SectionWrapper"], {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textSecondary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_MetaTags_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "I has a bucket.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/*! exports provided: useTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var theme = {
  fonts: {
    primary: '',
    secondary: "'Barlow Condensed', sans-serif"
  },
  colors: {
    primary: '#fd9228',
    secondary: '',
    bgPrimary: '#ffffff',
    bgSecondary: '#111111',
    textPrimary: '#ff00ff',
    textSecondary: '#fafafa',
    links: '#0070f3'
  }
};
var useTheme = function useTheme() {
  var theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"]);
  return theme;
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ })

})
//# sourceMappingURL=index.js.5eebb077a3ebbc470686.hot-update.js.map