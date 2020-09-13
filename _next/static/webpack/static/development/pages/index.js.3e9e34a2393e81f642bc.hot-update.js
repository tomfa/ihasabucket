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
      disabled = _ref.disabled;
  var onOptionChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return function (value, checked) {
      if (disabled) {
        return;
      }

      if (!checked) {
        return onChange(selectedOptions.filter(function (o) {
          return o.value !== value;
        }));
      }

      var checkedOption = options.find(function (o) {
        return o.value === value;
      });
      checkedOption && onChange([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedOptions), [checkedOption]));
    };
  }, [disabled, options, onChange, selectedOptions]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, title && __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, title), description && __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 23
    }
  }, description), options.map(function (o) {
    return __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: o.value,
      checked: selectedOptions.includes(o),
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
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckboxGroup);

/***/ })

})
//# sourceMappingURL=index.js.3e9e34a2393e81f642bc.hot-update.js.map