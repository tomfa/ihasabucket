webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/forms/TextInput.tsx":
/*!****************************************!*\
  !*** ./components/forms/TextInput.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header.style */ "./components/Header.style.tsx");
/* harmony import */ var _Description_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Description.style */ "./components/forms/Description.style.tsx");
/* harmony import */ var _Question_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Question.style */ "./components/forms/Question.style.tsx");
/* harmony import */ var _Input_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input.style */ "./components/forms/Input.style.tsx");
/* harmony import */ var _InputContainer_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputContainer.styles */ "./components/forms/InputContainer.styles.tsx");
/* harmony import */ var _SubmitButton_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubmitButton.styles */ "./components/forms/SubmitButton.styles.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/forms/TextInput.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var TextInput = function TextInput(_ref) {
  var onSubmit = _ref.onSubmit,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      title = _ref.title,
      placeholder = _ref.placeholder,
      placeholders = _ref.placeholders,
      description = _ref.description;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value),
      inputValue = _useState[0],
      setInputValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      hasSubmitted = _useState2[0],
      setSubmitted = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])((placeholders === null || placeholders === void 0 ? void 0 : placeholders.length) && placeholders[0] || placeholder),
      currentPlaceHolder = _useState3[0],
      setCurrentPlaceHolder = _useState3[1];

  var submit = function submit(submitValue) {
    setSubmitted(true);
    onSubmit(submitValue);
  };

  return __jsx(_Question_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, title && __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, title), __jsx(_InputContainer_styles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(_Input_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "text",
    value: inputValue,
    placeholder: currentPlaceHolder,
    onChange: function onChange(e) {
      setInputValue(e.target.value);

      if (hasSubmitted) {
        onSubmit(e.target.value);
      }
    },
    onKeyPress: function onKeyPress(e) {
      return e.key === 'Enter' && submit(inputValue);
    },
    onBlur: function onBlur() {
      return submit(inputValue);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx(_SubmitButton_styles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "submit",
    complete: inputValue.trim().length > 0,
    onClick: function onClick() {
      return submit(inputValue);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  })), description && __jsx(_Description_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 23
    }
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ })

})
//# sourceMappingURL=index.js.ef8ae9089ff23daa23c2.hot-update.js.map