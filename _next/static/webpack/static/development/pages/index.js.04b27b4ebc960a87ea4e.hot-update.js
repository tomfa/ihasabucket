webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer/Link.tsx":
/*!************************************!*\
  !*** ./components/Footer/Link.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/Footer/Link.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Link__ListItem",
  componentId: "sc-1pdj3dm-0"
})([""]);
var ListItemLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Link__ListItemLink",
  componentId: "sc-1pdj3dm-1"
})(["color:white;&:focus{outline:none;color:black;}"]);

var Link = function Link(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return __jsx(ListItem, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, __jsx(ListItemLink, {
    href: href,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Link);

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
/* harmony import */ var _FooterLinks_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterLinks.style */ "./components/Footer/FooterLinks.style.tsx");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Link */ "./components/Footer/Link.tsx");
/* harmony import */ var _FooterSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FooterSection */ "./components/Footer/FooterSection.tsx");
/* harmony import */ var _FooterHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FooterHeader */ "./components/Footer/FooterHeader.tsx");
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
      lineNumber: 11,
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
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_FooterSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_FooterHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Wat"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "I love Heroku, I am curious about Vercel, Squarespace is a great product."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "But when it comes to simply hosting a Webapp or static files, AWS S3 is simply better \u2013 as long as you stay clear of the AWS console."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Let me help you with that.")), __jsx(_FooterSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    right: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_FooterHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Articles"), __jsx(_FooterLinks_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: 'https://vg.no',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "Deploying Webapps to S3"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: 'https://vg.no',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "Allowing user upload to S3")), __jsx(_FooterHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "Links"), __jsx(_FooterLinks_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: 'https://github.com/tomfa/ihasabucket',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Github"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: 'https://linkedin.com/in/fagerbekk',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "LinkedIn"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: 'https://tomfa.github.io',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Homepage")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.04b27b4ebc960a87ea4e.hot-update.js.map