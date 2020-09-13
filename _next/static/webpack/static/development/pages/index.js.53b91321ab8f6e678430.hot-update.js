webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer/FooterHeader.tsx":
/*!********************************************!*\
  !*** ./components/Footer/FooterHeader.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header.style */ "./components/Header.style.tsx");


var FooterHeader = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_Header_style__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "FooterHeader",
  componentId: "sc-1xf3sgb-0"
})(["color:", ";flex:1;fontSize:1.3rem"], function (p) {
  return p.theme.colors.textSecondary;
});
/* harmony default export */ __webpack_exports__["default"] = (FooterHeader);

/***/ }),

/***/ "./components/Footer/index.tsx":
/*!*************************************!*\
  !*** ./components/Footer/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./components/utils.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header.style */ "./components/Header.style.tsx");
/* harmony import */ var _FooterLinks_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FooterLinks.style */ "./components/Footer/FooterLinks.style.tsx");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Link */ "./components/Footer/Link.tsx");
/* harmony import */ var _FooterSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FooterSection */ "./components/Footer/FooterSection.tsx");
/* harmony import */ var _FooterHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FooterHeader */ "./components/Footer/FooterHeader.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/Footer/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Footer = function Footer() {
  var theme = Object(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  return __jsx(_utils__WEBPACK_IMPORTED_MODULE_1__["SectionBackground"], {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textSecondary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_utils__WEBPACK_IMPORTED_MODULE_1__["Section"], {
    style: {
      flexDirection: 'row',
      display: 'flex'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_FooterSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      flex: '1',
      fontSize: '1.3rem'
    },
    color: theme.colors.textSecondary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "Wat"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "I love Heroku, I am curious about Vercel, Squarespace is a great product."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "But when it comes to simply hosting a Webapp or static files, AWS S3 is simply better \u2013 as long as you stay clear of the AWS console."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Let me help you with that.")), __jsx(_FooterSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
    right: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(_FooterHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: theme.colors.textSecondary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Articles"), __jsx(_FooterLinks_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    url: '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Deploying Webapps to S3"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    url: '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Allowing user upload to S3")), __jsx(_FooterHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: theme.colors.textSecondary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Links"), __jsx(_FooterLinks_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    url: 'https://github.com/tomfa/ihasabucket',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Github"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    url: 'https://linkedin.com/in/fagerbekk',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "LinkedIn"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    url: 'https://tomfa.github.io',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Homepage")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.53b91321ab8f6e678430.hot-update.js.map