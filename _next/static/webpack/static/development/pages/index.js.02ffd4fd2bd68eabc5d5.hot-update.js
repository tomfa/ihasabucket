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
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Title */ "./components/Header/Title.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/Header/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Header = function Header() {
  var theme = Object(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  return __jsx(_utils__WEBPACK_IMPORTED_MODULE_2__["SectionBackground"], {
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
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(_MetaTags_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx(_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "I has a bucket.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/utils.tsx":
/*!******************************!*\
  !*** ./components/utils.tsx ***!
  \******************************/
/*! exports provided: SectionBackground, Section, Main, PageWrapper, Colored */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionBackground", function() { return SectionBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageWrapper", function() { return PageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colored", function() { return Colored; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var SectionBackground = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "utils__SectionBackground",
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

/***/ })

})
//# sourceMappingURL=index.js.02ffd4fd2bd68eabc5d5.hot-update.js.map