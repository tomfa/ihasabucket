webpackHotUpdate("static/development/pages/404.js",{

/***/ "./components/icons/ArrowLeft.tsx":
/*!****************************************!*\
  !*** ./components/icons/ArrowLeft.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/icons/ArrowLeft.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Svg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].svg.withConfig({
  displayName: "ArrowLeft__Svg",
  componentId: "sc-1tzpkap-0"
})(["display:inline;margin-left:0.5rem;margin-right:0.3rem;& path{fill:", ";}"], function (p) {
  return p.color || p.theme.colors.secondary;
});

var ArrowLeftIcon = function ArrowLeftIcon(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 12 : _ref$size,
      color = _ref.color;
  return __jsx(Svg, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "".concat(size, "px"),
    height: "".concat(size, "px"),
    viewBox: "0 0 59 59",
    color: color,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }, __jsx("polygon", {
    points: "135.412,0 35.709,99.702 135.412,199.404 163.695,171.119 92.277,99.702 163.695,28.285 \t",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ArrowLeftIcon);

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
/* harmony import */ var _sections_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/Footer */ "./sections/Footer/index.tsx");
/* harmony import */ var _sections_HeaderSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/HeaderSection */ "./sections/HeaderSection/index.tsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Button */ "./components/Button.tsx");
/* harmony import */ var _components_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/icons/ArrowLeft */ "./components/icons/ArrowLeft.tsx");
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
  }, __jsx(_sections_HeaderSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }), __jsx(_sections_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  }, "Can I has bucket!?"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, "404: This page does not exist."), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    url: '/',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_components_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 23
    }
  }), " Go home"));
};

/***/ })

})
//# sourceMappingURL=404.js.80ead41c81b97ec7c568.hot-update.js.map