webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/forms/TextInput.tsx":
/*!****************************************!*\
  !*** ./components/forms/TextInput.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header.style */ "./components/Header.style.tsx");
/* harmony import */ var _Description_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Description.style */ "./components/forms/Description.style.tsx");
/* harmony import */ var _Question_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Question.style */ "./components/forms/Question.style.tsx");
/* harmony import */ var _Input_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Input.style */ "./components/forms/Input.style.tsx");
/* harmony import */ var _InputContainer_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InputContainer.styles */ "./components/forms/InputContainer.styles.tsx");
/* harmony import */ var _SubmitButton_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SubmitButton.styles */ "./components/forms/SubmitButton.styles.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./components/utils.tsx");


var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/forms/TextInput.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var TextInput = function TextInput(_ref) {
  var onSubmit = _ref.onSubmit,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      title = _ref.title,
      placeholder = _ref.placeholder,
      placeholders = _ref.placeholders,
      description = _ref.description;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(value),
      inputValue = _useState[0],
      setInputValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hasSubmitted = _useState2[0],
      setSubmitted = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((placeholders === null || placeholders === void 0 ? void 0 : placeholders.length) ? 0 : -1),
      placeholderIndex = _useState3[0],
      setPlaceholderIndex = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(placeholderIndex === -1 ? placeholder : placeholders[placeholderIndex]),
      currentPlaceHolder = _useState4[0],
      setCurrentPlaceHolder = _useState4[1];

  var changePlaceHolder = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!placeholders && placeholders.length > 2) {
      return;
    }

    var go = function go() {
      var oldPlaceHolder, newPlaceHolder, steps, stepSizeMs, i, shouldRemove, shouldAdd;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function go$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              oldPlaceHolder = placeholders[placeholderIndex];
              newPlaceHolder = placeholders[(placeholderIndex + 1) % placeholders.length];
              steps = oldPlaceHolder.length + newPlaceHolder.length + 7;
              stepSizeMs = 100;
              i = 0;

            case 5:
              if (!(i < steps)) {
                _context.next = 14;
                break;
              }

              shouldRemove = i <= oldPlaceHolder.length;
              shouldAdd = steps - i <= newPlaceHolder.length;

              if (shouldRemove) {
                setCurrentPlaceHolder(placeholder.substr(0, oldPlaceHolder.length - i));
              }

              _context.next = 11;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils__WEBPACK_IMPORTED_MODULE_8__["sleep"])(stepSizeMs));

            case 11:
              i++;
              _context.next = 5;
              break;

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    };

    var currentPlaceHolder;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (value) {
      return;
    }

    var newValue = setCurrentPlaceHolder(newValue);
  }, [placeholders, value]);

  var submit = function submit(submitValue) {
    setSubmitted(true);
    onSubmit(submitValue);
  };

  return __jsx(_Question_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, title && __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, title), __jsx(_InputContainer_styles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(_Input_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx(_SubmitButton_styles__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "submit",
    complete: inputValue.trim().length > 0,
    onClick: function onClick() {
      return submit(inputValue);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  })), description && __jsx(_Description_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 23
    }
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ }),

/***/ "./components/utils.tsx":
/*!******************************!*\
  !*** ./components/utils.tsx ***!
  \******************************/
/*! exports provided: SectionBackground, Section, PageWrapper, Colored, sleep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionBackground", function() { return SectionBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageWrapper", function() { return PageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colored", function() { return Colored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var SectionBackground = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "utils__SectionBackground",
  componentId: "sc-1vrdcy-0"
})(["width:100%;background-color:", ";color:", ";margin-top:", ";"], function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.color;
}, function (props) {
  return props.marginTop;
});
var Section = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "utils__Section",
  componentId: "sc-1vrdcy-1"
})(["max-width:", "px;width:100vw;margin:0 auto;padding:2rem;@media (max-width:350px){padding:1rem;}"], function (p) {
  return p.theme.layout.maxWidth;
});
var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "utils__PageWrapper",
  componentId: "sc-1vrdcy-2"
})(["display:flex;flex-direction:column;width:100vw;"]);
var Colored = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "utils__Colored",
  componentId: "sc-1vrdcy-3"
})(["color:", ";"], function (p) {
  return p.color || p.theme.colors.primary;
});
var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

/***/ })

})
//# sourceMappingURL=index.js.ddda93cd3d6a84419f5c.hot-update.js.map