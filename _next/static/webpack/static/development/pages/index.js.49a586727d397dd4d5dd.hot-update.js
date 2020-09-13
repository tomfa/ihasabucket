webpackHotUpdate("static/development/pages/index.js",{

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
    marginTop: "3rem",
    marginBottom: "3rem",
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
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(_FooterSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_FooterHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Wat"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "I love Heroku, I am curious about Vercel, Squarespace is a great product."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "But when it comes to simply hosting a Webapp or static files, AWS S3 is simply better \u2013 as long as you stay clear of the AWS console."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Let me help you with that.")), __jsx(_FooterSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    right: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_FooterHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Articles"), __jsx(_FooterLinks_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: 'https://medium.com/trackstack/deploying-a-react-app-to-aws-s3-with-github-actions-b1cb9ba75c95',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Deploying Webapps to S3"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: 'https://github.com/tomfa/s3-uploader',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Allowing user upload to S3")), __jsx(_FooterHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "Links"), __jsx(_FooterLinks_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: 'https://github.com/tomfa/ihasabucket',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Github"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: 'https://linkedin.com/in/fagerbekk',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "LinkedIn"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: 'https://tomfa.github.io',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Homepage")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

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
})(["width:100%;background-color:", ";color:", ";margin-top:", ";margin-bottom:", ";"], function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.color;
}, function (props) {
  return props.marginVertical;
}, function (props) {
  return props.marginVertical;
});
var Section = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "utils__Section",
  componentId: "sc-1vrdcy-1"
})(["max-width:", "px;width:100vw;margin:0 auto;padding:2rem;@media (max-width:350px){padding:1rem;}"], function (p) {
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
//# sourceMappingURL=index.js.49a586727d397dd4d5dd.hot-update.js.map