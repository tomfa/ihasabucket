webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/HeaderSection/Title.style.tsx":
/*!**************************************************!*\
  !*** ./components/HeaderSection/Title.style.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1.withConfig({
  displayName: "Titlestyle__Title",
  componentId: "mdvwo2-0"
})(["margin:0;line-height:1.15;font-size:4rem;@media (max-width:450px){font-size:2.5rem;}& > a{color:", ";text-underline:none;}"], function (p) {
  return p.colors.textSecondary;
});
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./components/HeaderSection/index.tsx":
/*!********************************************!*\
  !*** ./components/HeaderSection/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _MetaTags_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MetaTags/Meta */ "./components/MetaTags/Meta.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./components/utils.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _Title_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Title.style */ "./components/HeaderSection/Title.style.tsx");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Link */ "./components/Link.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/HeaderSection/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Lolrus = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "HeaderSection__Lolrus",
  componentId: "sc-185uy67-0"
})(["width:150px;position:absolute;right:0;top:5px;@media (min-width:360px){display:block;right:-30px;top:0px;}"]);
var blank;

var HeaderSection = function HeaderSection(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'I has a bucket.' : _ref$title;
  var theme = Object(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  return __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["SectionBackground"], {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textSecondary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_MetaTags_Meta__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx(_Title_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: '/',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 16
    }
  }, title))), __jsx(Lolrus, {
    src: '/bucket.png',
    alt: 'Lolrus, the bucket walrus',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderSection);

/***/ })

})
//# sourceMappingURL=index.js.fab8245109ee7fe06d91.hot-update.js.map