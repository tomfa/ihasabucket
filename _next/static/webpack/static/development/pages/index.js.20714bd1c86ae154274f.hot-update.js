webpackHotUpdate("static/development/pages/index.js",{

/***/ "./sections/HeaderSection/index.tsx":
/*!******************************************!*\
  !*** ./sections/HeaderSection/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _MetaTags_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MetaTags/Meta */ "./sections/MetaTags/Meta.tsx");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/utils */ "./components/utils.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _components_Title_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Title.style */ "./components/Title.style.tsx");
/* harmony import */ var _utils_splitbee__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/splitbee */ "./utils/splitbee.ts");


var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/sections/HeaderSection/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Lolrus = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "HeaderSection__Lolrus",
  componentId: "a1mdh2-0"
})(["width:150px;position:absolute;right:-30px;top:0;transition:transform 300ms;@media (min-width:560px){display:block;right:30px;}&:hover{transform:translateY(30px);}"]);

var HeaderSection = function HeaderSection(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'I has a bucket.' : _ref$title;
  var theme = Object(_styles_theme__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var _document;

    return Object(_utils_splitbee__WEBPACK_IMPORTED_MODULE_8__["trail"])('hi-threre', {
      referrer: (_document = document) === null || _document === void 0 ? void 0 : _document.referrer
    });
  }, []);

  var refreshEverything = function refreshEverything() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function refreshEverything$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(router.push('/'));

          case 2:
            // TODO: Clear state instead of reloading the entire app
            router.reload();

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_5__["SectionBackground"], {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textSecondary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(_MetaTags_Meta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx(_components_Title_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: refreshEverything,
    role: 'button',
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, title), __jsx(Lolrus, {
    src: '/bucket.png',
    alt: 'Lolrus, the bucket walrus',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderSection);

/***/ })

})
//# sourceMappingURL=index.js.20714bd1c86ae154274f.hot-update.js.map