webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BlockQuote/index.tsx":
/*!*****************************************!*\
  !*** ./components/BlockQuote/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Quote */ "./components/BlockQuote/Quote.tsx");
/* harmony import */ var _Source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Source */ "./components/BlockQuote/Source.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/BlockQuote/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var BlockQuote = function BlockQuote(_ref) {
  var children = _ref.children,
      author = _ref.author,
      source = _ref.source;
  return __jsx(Block, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }, __jsx(_Quote__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, children), (author || source) && __jsx(_Source__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, author ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\u2014 ", author) : '', author && source && __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 30
    }
  }), source && __jsx("em", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 20
    }
  }, source)));
};

var Block = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].blockquote.withConfig({
  displayName: "BlockQuote__Block",
  componentId: "sc-1bt5mli-0"
})(["font-family:", " max-width:620px;margin-left:0;margin-right:0;align-self:center;"], function (p) {
  return p.theme.fonts.secondary;
});
/* harmony default export */ __webpack_exports__["default"] = (BlockQuote);

/***/ }),

/***/ "./components/utils.tsx":
/*!******************************!*\
  !*** ./components/utils.tsx ***!
  \******************************/
/*! exports provided: SectionWrapper, Section, Main, PageWrapper, Colored */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionWrapper", function() { return SectionWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageWrapper", function() { return PageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colored", function() { return Colored; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "utils__SectionWrapper",
  componentId: "sc-1vrdcy-0"
})(["width:100%;background-color:", ";color:", ";"], function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.color;
});
var Section = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "utils__Section",
  componentId: "sc-1vrdcy-1"
})(["max-width:", "px;width:100vw;margin:0 auto;padding:2rem;"], function (p) {
  return p.theme.layout.maxWidth;
});
var Main = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Section).withConfig({
  displayName: "utils__Main",
  componentId: "sc-1vrdcy-2"
})([""]);
var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "utils__PageWrapper",
  componentId: "sc-1vrdcy-3"
})(["display:flex;flex-direction:column;width:100vw;"]);
var Colored = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "utils__Colored",
  componentId: "sc-1vrdcy-4"
})(["color:", ";"], function (p) {
  return p.color || p.theme.colors.primary;
});

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/utils */ "./components/utils.tsx");
/* harmony import */ var _components_Header___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/ */ "./components/Header/index.tsx");
/* harmony import */ var _components_BlockQuote___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BlockQuote/ */ "./components/BlockQuote/index.tsx");
var _jsxFileName = "/Users/tomfa/repos/s3launchpad/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Home() {
  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["PageWrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_components_Header___WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Main"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(_components_BlockQuote___WEBPACK_IMPORTED_MODULE_3__["default"], {
    author: 'Lolrus, the bucket walrus',
    source: 'At the launch of AWS S3 in 2006',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Hosting a ", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 23
    }
  }, "webapp"), " or need a place to store files? Put them in S3 buckets. It's ", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 47
    }
  }, "cheap"), " and", ' ', __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "reliable"), ". Let me show how ", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 58
    }
  }, "easy"), ' ', "it is."))));
}

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
//# sourceMappingURL=index.js.ec974a148ccc62e62311.hot-update.js.map