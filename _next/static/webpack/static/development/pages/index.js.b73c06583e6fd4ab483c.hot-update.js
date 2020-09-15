webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/code/Code.tsx":
/*!**********************************!*\
  !*** ./components/code/Code.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/clipboard */ "./utils/clipboard.ts");
/* harmony import */ var _Mute_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Mute.style */ "./components/Mute.style.tsx");
/* harmony import */ var _Pre_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pre.style */ "./components/code/Pre.style.tsx");
/* harmony import */ var _PreButton_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PreButton.style */ "./components/code/PreButton.style.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./components/utils.tsx");


var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/code/Code.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable react/no-array-index-key */







var Code = function Code(_ref) {
  var mainTfContent = _ref.mainTfContent,
      bucketName = _ref.bucketName;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hasCopied = _useState[0],
      setHasCopied = _useState[1];

  var lines = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return ['# Create a folder to store infrastructure code', 'mkdir infrastructure', 'cd infrastructure', '', '# Create config file', "cat <<EOT >> ".concat(bucketName || 'main', ".tf")].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(mainTfContent), ['EOT', '', '# Deploy', 'terraform init', 'terraform apply']);
  }, [mainTfContent, bucketName]);
  var copy = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    Object(_utils_clipboard__WEBPACK_IMPORTED_MODULE_2__["copyToClipBoard"])(lines);
    setHasCopied(true);
  }, [lines]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return setHasCopied(false);
  }, [mainTfContent, bucketName]);
  return __jsx(_Pre_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, lines.map(function (line, i) {
    if (line.trim().startsWith('#')) {
      return __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }
      }, line, '\n');
    }

    return __jsx("span", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, line, '\n');
  }), __jsx(_PreButton_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: copy,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, hasCopied && __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 24
    }
  }, "Copied! ", __jsx(_utils__WEBPACK_IMPORTED_MODULE_6__["Colored"], {
    color: theme.colors.success,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 38
    }
  }, "\u2714"), " ") || 'Copy to clipboard'));
};

/* harmony default export */ __webpack_exports__["default"] = (Code);

/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/*! exports provided: theme, useTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var theme = {
  fonts: {
    primary: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n' + '    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    secondary: "'Barlow Condensed', sans-serif"
  },
  colors: {
    primary: '#fd9228',
    secondary: '#e15342',
    bgPrimary: '#fdf6e6',
    bgSecondary: '#111111',
    bgMuted: '#efefef',
    textPrimary: '#000000',
    textSecondary: '#fafafa',
    textMuted: '#888888',
    links: '#0070f3',
    success: '#22ee22'
  },
  layout: {
    maxWidth: 640
  }
};
var useTheme = function useTheme() {
  var themeContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"]);
  return themeContext;
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ })

})
//# sourceMappingURL=index.js.b73c06583e6fd4ab483c.hot-update.js.map