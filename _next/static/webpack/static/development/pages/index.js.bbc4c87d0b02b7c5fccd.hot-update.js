webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/forms/Radio.tsx":
/*!************************************!*\
  !*** ./components/forms/Radio.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Label_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label.style */ "./components/forms/Label.style.tsx");
/* harmony import */ var _Input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input.style */ "./components/forms/Input.style.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/forms/Radio.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Radio = function Radio(_ref) {
  var checked = _ref.checked,
      _onChange = _ref.onChange,
      value = _ref.value,
      label = _ref.label,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var name = String(value);
  return __jsx(_Label_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    htmlFor: name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_Input_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: name,
    value: value,
    name: name,
    type: "radio",
    checked: checked,
    onChange: function onChange() {
      return !disabled && _onChange(value, !checked);
    },
    disabled: disabled,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, label));
};

/* harmony default export */ __webpack_exports__["default"] = (Radio);

/***/ })

})
//# sourceMappingURL=index.js.bbc4c87d0b02b7c5fccd.hot-update.js.map