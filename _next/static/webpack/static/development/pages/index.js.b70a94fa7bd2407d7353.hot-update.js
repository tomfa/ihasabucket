webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/forms/QuestionTitle.tsx":
/*!********************************************!*\
  !*** ./components/forms/QuestionTitle.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var QuestionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h4.withConfig({
  displayName: "QuestionTitle",
  componentId: "sc-19n0rv-0"
})([""]);
/* harmony default export */ __webpack_exports__["default"] = (QuestionTitle);

/***/ }),

/***/ "./components/forms/RadioGroup.tsx":
/*!*****************************************!*\
  !*** ./components/forms/RadioGroup.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Radio */ "./components/forms/Radio.tsx");
/* harmony import */ var _QuestionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestionTitle */ "./components/forms/QuestionTitle.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/forms/RadioGroup.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var RadioGroup = function RadioGroup(_ref) {
  var options = _ref.options,
      selectedOption = _ref.selectedOption,
      onChange = _ref.onChange,
      title = _ref.title,
      description = _ref.description,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var onOptionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value, checked) {
    if (disabled) {
      return;
    }

    if (!checked) {
      return onChange(null);
    }

    var checkedOption = options.find(function (o) {
      return o.value === value;
    });
    checkedOption && onChange(checkedOption);
  }, [disabled, options, onChange]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, title && __jsx(_QuestionTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, title), options.map(function (o) {
    return __jsx(_Radio__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: o.value,
      checked: o === selectedOption,
      onChange: onOptionChange,
      value: o.value,
      label: o.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    });
  }), description && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 23
    }
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (RadioGroup);

/***/ })

})
//# sourceMappingURL=index.js.b70a94fa7bd2407d7353.hot-update.js.map