webpackHotUpdate("static/development/pages/index.js",{

/***/ "./sections/HeaderSection/index.tsx":
/*!******************************************!*\
  !*** ./sections/HeaderSection/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _MetaTags_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MetaTags/Meta */ "./sections/MetaTags/Meta.tsx");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/utils */ "./components/utils.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _components_Title_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Title.style */ "./components/Title.style.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/sections/HeaderSection/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Lolrus = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "HeaderSection__Lolrus",
  componentId: "a1mdh2-0"
})(["width:150px;position:absolute;right:-30px;top:0;transition:transform 300ms;@media (min-width:560px){display:block;right:30px;}&:hover{transform:translateY(30px);}"]);

var HeaderSection = function HeaderSection(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'I has a bucket.' : _ref$title;
  var theme = Object(_styles_theme__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_4__["SectionBackground"], {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textSecondary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_4__["Section"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(_MetaTags_Meta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(_components_Title_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: function onClick() {
      console.log('HEIHEI');
      router.push('/');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, title), __jsx(Lolrus, {
    src: '/bucket.png',
    alt: 'Lolrus, the bucket walrus',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderSection);

/***/ })

})
//# sourceMappingURL=index.js.75d422ada950a0858129.hot-update.js.map