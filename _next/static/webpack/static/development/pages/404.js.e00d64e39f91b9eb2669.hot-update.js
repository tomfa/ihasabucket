webpackHotUpdate("static/development/pages/404.js",{

/***/ "./components/Button.styles.tsx":
/*!**************************************!*\
  !*** ./components/Button.styles.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "Buttonstyles__Button",
  componentId: "sc-1y62u2l-0"
})(["color:", ";background-color:", ";border:none;padding:", ";font-size:1rem;margin-top:1rem;margin-bottom:1rem;outline-style:dashed;outline-width:2px;cursor:pointer;&:focus,&:active{outline-color:", ";}& > a{color:", ";padding:1rem;}"], function (p) {
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
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./pages/404.tsx":
/*!***********************!*\
  !*** ./pages/404.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFound; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/utils */ "./components/utils.tsx");
/* harmony import */ var _components_BlockQuote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BlockQuote */ "./components/BlockQuote/index.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.tsx");
/* harmony import */ var _components_HeaderSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HeaderSection */ "./components/HeaderSection/index.tsx");
/* harmony import */ var _components_Link_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Link.styles */ "./components/Link.styles.tsx");
/* harmony import */ var _components_Button_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button.styles */ "./components/Button.styles.tsx");
var _jsxFileName = "/Users/tomfa/repos/s3launchpad/pages/404.tsx",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function NotFound() {
  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["PageWrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_components_HeaderSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "404 Not found",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx(Intro, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
}

var Intro = function Intro() {
  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Section"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }
  }, __jsx(_components_BlockQuote__WEBPACK_IMPORTED_MODULE_2__["default"], {
    author: 'Lolrus, the bucket walrus',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, "Can I has bucket!?"), __jsx(_components_Button_styles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    link: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_components_Link_styles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, "Go home and get a bucket")));
};

/***/ })

})
//# sourceMappingURL=404.js.e00d64e39f91b9eb2669.hot-update.js.map