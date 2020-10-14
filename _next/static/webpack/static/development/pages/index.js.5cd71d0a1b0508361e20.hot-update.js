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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./components/utils.tsx");
/* harmony import */ var _Description_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Description.style */ "./components/forms/Description.style.tsx");
/* harmony import */ var _Question_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Question.style */ "./components/forms/Question.style.tsx");
/* harmony import */ var _Input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Input.style */ "./components/forms/Input.style.tsx");
/* harmony import */ var _InputContainer_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InputContainer.styles */ "./components/forms/InputContainer.styles.tsx");
/* harmony import */ var _SubmitButton_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SubmitButton.styles */ "./components/forms/SubmitButton.styles.tsx");


var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/forms/TextInput.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var TextInput = function TextInput(_ref) {
  var _onChange = _ref.onChange,
      onSubmit = _ref.onSubmit,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      title = _ref.title,
      placeholder = _ref.placeholder,
      placeholders = _ref.placeholders,
      description = _ref.description;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((placeholders === null || placeholders === void 0 ? void 0 : placeholders.length) ? 0 : -1),
      placeholderIndex = _useState[0],
      setPlaceholderIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(placeholderIndex === -1 ? placeholder : placeholders[placeholderIndex]),
      currentPlaceHolder = _useState2[0],
      setCurrentPlaceHolder = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!placeholders || placeholders.length < 2) {
      return;
    }

    updatePlaceHolderDelayed(placeholders, placeholderIndex, setPlaceholderIndex, setCurrentPlaceHolder);
  }, [placeholderIndex]);
  var cleanInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (val) {
    return val.toLowerCase().replace(' ', '-');
  }, []);
  var submit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (submitValue) {
    onSubmit(cleanInput(submitValue));
  }, [onSubmit, cleanInput]);
  return __jsx(_Question_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, title && __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, title), __jsx(_InputContainer_styles__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(_Input_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "text",
    value: value || '',
    placeholder: currentPlaceHolder,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    onKeyPress: function onKeyPress(e) {
      return e.key === 'Enter' && submit(value);
    },
    onBlur: function onBlur() {
      return submit(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx(_SubmitButton_styles__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "submit",
    complete: value && value.trim().length > 0,
    onClick: function onClick() {
      return submit(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  })), description && __jsx(_Description_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 23
    }
  }, description));
};

var updatePlaceHolderDelayed = function updatePlaceHolderDelayed(placeholders, placeholderIndex, setPlaceholderIndex, setCurrentPlaceHolder) {
  var delayMs,
      oldPlaceHolder,
      newPlaceHolder,
      steps,
      stepSizeMs,
      i,
      shouldRemove,
      shouldAdd,
      _args = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function updatePlaceHolderDelayed$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          delayMs = _args.length > 4 && _args[4] !== undefined ? _args[4] : 7000;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["sleep"])(delayMs));

        case 3:
          oldPlaceHolder = placeholders[placeholderIndex % placeholders.length];
          newPlaceHolder = placeholders[(placeholderIndex + 1) % placeholders.length];
          steps = oldPlaceHolder.length + newPlaceHolder.length + 4;
          stepSizeMs = 25;
          i = 0;

        case 8:
          if (!(i <= steps)) {
            _context.next = 17;
            break;
          }

          shouldRemove = i <= oldPlaceHolder.length;
          shouldAdd = steps - i <= newPlaceHolder.length;

          if (shouldRemove) {
            setCurrentPlaceHolder(oldPlaceHolder.substr(0, oldPlaceHolder.length - i));
          } else if (shouldAdd) {
            setCurrentPlaceHolder(newPlaceHolder.substr(0, newPlaceHolder.length - (steps - i)));
          } //  – it's ok in a for loop
          // eslint-disable-next-line no-await-in-loop


          _context.next = 14;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["sleep"])(stepSizeMs));

        case 14:
          i++;
          _context.next = 8;
          break;

        case 17:
          setPlaceholderIndex(function (index) {
            return index + 1 % placeholders.length;
          });

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ })

})
//# sourceMappingURL=index.js.5cd71d0a1b0508361e20.hot-update.js.map