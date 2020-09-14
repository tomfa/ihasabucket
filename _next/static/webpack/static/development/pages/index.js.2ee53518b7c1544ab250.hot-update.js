webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/forms/Dropdown.tsx":
/*!***************************************!*\
  !*** ./components/forms/Dropdown.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header.style */ "./components/Header.style.tsx");
/* harmony import */ var _Description_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Description.style */ "./components/forms/Description.style.tsx");
/* harmony import */ var _Question_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Question.style */ "./components/forms/Question.style.tsx");
/* harmony import */ var _InputContainer_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputContainer.styles */ "./components/forms/InputContainer.styles.tsx");
/* harmony import */ var _SubmitButton_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubmitButton.styles */ "./components/forms/SubmitButton.styles.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/forms/Dropdown.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Select = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].select.withConfig({
  displayName: "Dropdown__Select",
  componentId: "ca76f5-0"
})(["font-size:1.2rem;padding:1rem;flex:1;border:none;appearance:none;&:focus,&:active{outline-style:dashed;outline-width:2px;outline-color:", ";margin-right:3px;}"], function (p) {
  return p.theme.colors.primary;
});
var Choice = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].option.withConfig({
  displayName: "Dropdown__Choice",
  componentId: "ca76f5-1"
})([""]);

var DropDown = function DropDown(_ref) {
  var id = _ref.id,
      options = _ref.options,
      selectedOption = _ref.selectedOption,
      onChange = _ref.onChange,
      title = _ref.title,
      description = _ref.description,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var onOptionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    if (disabled) {
      return;
    }

    var checkedOption = options.find(function (o) {
      return o.value === value;
    });
    checkedOption && onChange(checkedOption);
  }, [disabled, options, onChange]);
  return __jsx(_Question_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, title && __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, title), __jsx(_InputContainer_styles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(Select, {
    value: selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value,
    onChange: function onChange(e) {
      return onOptionChange(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, options.map(function (o) {
    return __jsx(Choice, {
      key: "".concat(id, "-").concat(o.value),
      value: o.value,
      label: o.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    });
  })), __jsx(_SubmitButton_styles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "submit",
    complete: !!selectedOption,
    onClick: function onClick() {
      return onOptionChange(selectedOption.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  })), description && __jsx(_Description_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 23
    }
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (DropDown);

/***/ })

})
//# sourceMappingURL=index.js.2ee53518b7c1544ab250.hot-update.js.map