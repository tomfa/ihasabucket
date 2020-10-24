webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/code/Code.tsx":
/*!**********************************!*\
  !*** ./components/code/Code.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/clipboard */ "./utils/clipboard.ts");
/* harmony import */ var _Mute_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Mute.style */ "./components/Mute.style.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./components/utils.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _Pre_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pre.style */ "./components/code/Pre.style.tsx");
/* harmony import */ var _PreButton_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PreButton.style */ "./components/code/PreButton.style.tsx");
/* harmony import */ var _forms_Description_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../forms/Description.style */ "./components/forms/Description.style.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/code/Code.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/no-array-index-key */









var Code = function Code(_ref) {
  var lines = _ref.mainTfContent,
      bucketName = _ref.bucketName,
      intro = _ref.intro;
  var theme = Object(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      hasCopied = _useState[0],
      setHasCopied = _useState[1];

  var copy = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    Object(_utils_clipboard__WEBPACK_IMPORTED_MODULE_1__["copyToClipBoard"])(lines);
    setHasCopied(true);
  }, [lines]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return setHasCopied(false);
  }, [lines, bucketName]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_forms_Description_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, intro), __jsx(_Pre_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, lines.map(function (line, i) {
    if (line.trim().startsWith('#')) {
      return __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }
      }, line, '\n');
    }

    return __jsx("span", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }, line, '\n');
  }), __jsx(_PreButton_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: copy,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, hasCopied && __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Copied! ", __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["Colored"], {
    color: theme.colors.success,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "\u2713")) || 'Copy to clipboard')));
};

/* harmony default export */ __webpack_exports__["default"] = (Code);

/***/ })

})
//# sourceMappingURL=index.js.690eef55f65ca365c7de.hot-update.js.map