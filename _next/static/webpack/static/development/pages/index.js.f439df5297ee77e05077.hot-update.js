webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/Title.style.tsx":
/*!*******************************************!*\
  !*** ./components/Header/Title.style.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var TitleStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1.withConfig({
  displayName: "Titlestyle__TitleStyle",
  componentId: "sc-1mywt52-0"
})(["margin:0;line-height:1.15;font-size:4rem;a{color:", ";text-decoration:none;&:hover,&:focus,&:active{text-decoration:underline;}}@media (max-width:450px){font-size:2.5rem;}"], function (p) {
  return p.theme.colors.links;
});
/* harmony default export */ __webpack_exports__["default"] = (TitleStyle);

/***/ }),

/***/ "./components/Header/Title.tsx":
false,

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
/* harmony import */ var _Title_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Title.style */ "./components/Header/Title.style.tsx");
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
  }), __jsx(_Title_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "I has a bucket.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.f439df5297ee77e05077.hot-update.js.map