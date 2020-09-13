webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/forms/Description.style.tsx":
/*!************************************************!*\
  !*** ./components/forms/Description.style.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var DescriptionStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "Descriptionstyle__DescriptionStyle",
  componentId: "sc-1vej8zf-0"
})(["color:#888888;font-style:italic;colo"]);
/* harmony default export */ __webpack_exports__["default"] = (DescriptionStyle);

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
/* harmony import */ var _Title_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title.style */ "./components/forms/Title.style.tsx");
/* harmony import */ var _Description_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Description.style */ "./components/forms/Description.style.tsx");
/* harmony import */ var _Choices_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Choices.style */ "./components/forms/Choices.style.tsx");
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, title && __jsx(_Title_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, title), __jsx(_Choices_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, options.map(function (o) {
    return __jsx(_Radio__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: o.value,
      checked: o === selectedOption,
      onChange: onOptionChange,
      value: o.value,
      label: o.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    });
  })), description && __jsx(_Description_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 23
    }
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (RadioGroup);

/***/ })

})
//# sourceMappingURL=index.js.9a3691d953c88c145e83.hot-update.js.map