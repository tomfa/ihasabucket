webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BlockQuote/Quote.style.tsx":
/*!***********************************************!*\
  !*** ./components/BlockQuote/Quote.style.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var QuoteStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2.withConfig({
  displayName: "Quotestyle__QuoteStyle",
  componentId: "sc-1bl7c8l-0"
})(["font-family:", ";position:relative;font-size:2rem;font-weight:normal;line-height:1;margin:0;border:2px solid #fff;border:solid 2px;border-radius:20px;padding:25px;&:after{content:'';position:absolute;border:2px solid;border-radius:0 50px 0 0;width:60px;height:60px;bottom:-62px;left:50px;border-bottom:none;border-left:none;z-index:3;}&:before{content:'';position:absolute;width:80px;border:6px solid ", ";bottom:-3px;left:50px;z-index:2;}"], function (p) {
  return p.theme.fonts.secondary;
}, function (props) {
  return props.theme.colors.bgPrimary;
});
/* harmony default export */ __webpack_exports__["default"] = (QuoteStyle);

/***/ }),

/***/ "./components/BlockQuote/Quote.tsx":
false,

/***/ "./components/BlockQuote/Source.style.tsx":
/*!************************************************!*\
  !*** ./components/BlockQuote/Source.style.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Source = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h4.withConfig({
  displayName: "Sourcestyle__Source",
  componentId: "ec6o23-0"
})(["margin-left:10rem;&:first-letter{margin-left:-18px;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Source);

/***/ }),

/***/ "./components/BlockQuote/Source.tsx":
false,

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
/* harmony import */ var _Quote_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Quote.style */ "./components/BlockQuote/Quote.style.tsx");
/* harmony import */ var _Source_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Source.style */ "./components/BlockQuote/Source.style.tsx");
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
  }, __jsx(_Quote_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, children), (author || source) && __jsx(_Source_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, author && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\u2014\xA0", author), author && source && __jsx("br", {
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

/***/ })

})
//# sourceMappingURL=index.js.3b009b9af6edf45bf368.hot-update.js.map