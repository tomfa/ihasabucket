webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/input/Checkbox.tsx":
/*!***************************************!*\
  !*** ./components/input/Checkbox.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/input/Checkbox.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Checkbox = function Checkbox(_ref) {
  var checked = _ref.checked,
      _onChange = _ref.onChange,
      value = _ref.value,
      label = _ref.label,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var name = String(value);
  return __jsx("label", {
    htmlFor: name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("input", {
    id: name,
    value: value,
    name: name,
    type: "checkbox",
    checked: checked,
    onChange: function onChange() {
      return !disabled && _onChange(value, !checked);
    },
    disabled: disabled,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, label));
};

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

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
/* harmony import */ var _components_input_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/input/Checkbox */ "./components/input/Checkbox.tsx");
var _jsxFileName = "/Users/tomfa/repos/s3launchpad/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      checked = _useState[0],
      setChecked = _useState[1];

  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["PageWrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Main"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(_components_BlockQuote__WEBPACK_IMPORTED_MODULE_3__["default"], {
    author: 'Lolrus, the bucket walrus',
    source: 'At the launch of AWS S3 in 2006',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Hosting a", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, " webapp "), "or need to store uploads? Put them in S3 buckets. It's", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, " cheap "), "and", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, " reliable"), ". Let me show how", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, " easy "), "it is."))), __jsx("article", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_components_input_Checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    checked: checked,
    onChange: function onChange(v, c) {
      return setChecked(c);
    },
    value: 'fish',
    label: 'Fish',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.7bcea1a109bdd38866f4.hot-update.js.map