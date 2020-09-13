webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/input/CheckboxGroup.tsx":
/*!********************************************!*\
  !*** ./components/input/CheckboxGroup.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkbox */ "./components/input/Checkbox.tsx");


var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/input/CheckboxGroup.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var CheckboxGroup = function CheckboxGroup(_ref) {
  var options = _ref.options,
      selectedOptions = _ref.selectedOptions,
      onChange = _ref.onChange,
      title = _ref.title,
      description = _ref.description,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var onOptionChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value, checked) {
    if (disabled) {
      return;
    }

    var selectedExceptThisOption = selectedOptions.filter(function (o) {
      return o.value !== value;
    });

    if (!checked) {
      return onChange(selectedExceptThisOption);
    }

    var checkedOption = options.find(function (o) {
      return o.value === value;
    });
    checkedOption && onChange([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedExceptThisOption), [checkedOption]));
  }, [disabled, options, onChange, selectedOptions]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, title && __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, title), options.map(function (o) {
    return __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: o.value,
      checked: selectedOptions.includes(o),
      onChange: onOptionChange,
      value: o.value,
      label: o.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    });
  }), description && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 23
    }
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckboxGroup);

/***/ })

})
//# sourceMappingURL=index.js.4d8a0fbff90a891212c1.hot-update.js.map