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
  }, author ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\u2014", author) : '', author && source && __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 30
    }
  }), source && __jsx("em", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.tsx");
/* harmony import */ var _components_BlockQuote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BlockQuote */ "./components/BlockQuote/index.tsx");
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
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }, __jsx(_components_BlockQuote__WEBPACK_IMPORTED_MODULE_3__["default"], {
    author: 'Lolrus, the bucket walrus',
    source: 'At the launch of AWS S3 in 2006',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Hosting a", ' ', __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, " webapp"), ' ', "or need to store uploads? Put them in S3 buckets. It's", ' ', __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, " cheap"), ' ', "and", ' ', __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, " reliable"), ". Let me show how", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, " easy"), ' ', "it is."))));
}

/***/ })

})
//# sourceMappingURL=index.js.6bd2bf414d44a204f1a4.hot-update.js.map