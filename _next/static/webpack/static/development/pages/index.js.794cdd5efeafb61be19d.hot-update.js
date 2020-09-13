webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/forms/Checkbox.tsx":
/*!***************************************!*\
  !*** ./components/forms/Checkbox.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Label_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label.style */ "./components/forms/Label.style.tsx");
/* harmony import */ var _Input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input.style */ "./components/forms/Input.style.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/forms/Checkbox.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Checkbox = function Checkbox(_ref) {
  var checked = _ref.checked,
      _onChange = _ref.onChange,
      value = _ref.value,
      label = _ref.label,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var name = String(value);
  return __jsx(_Label_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    htmlFor: name,
    checked: checked,
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
    type: "checkbox",
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

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./components/forms/CheckboxGroup.tsx":
/*!********************************************!*\
  !*** ./components/forms/CheckboxGroup.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkbox */ "./components/forms/Checkbox.tsx");
/* harmony import */ var _Title_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Title.style */ "./components/forms/Title.style.tsx");
/* harmony import */ var _Description_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Description.style */ "./components/forms/Description.style.tsx");
/* harmony import */ var _Choices_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Choices.style */ "./components/forms/Choices.style.tsx");
/* harmony import */ var _Question_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Question.style */ "./components/forms/Question.style.tsx");


var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/forms/CheckboxGroup.tsx";


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
  return __jsx(_Question_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, title && __jsx(_Title_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, title), __jsx(_Choices_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, options.map(function (o) {
    return __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: o.value,
      checked: selectedOptions.includes(o),
      onChange: onOptionChange,
      value: o.value,
      label: o.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    });
  })), description && __jsx(_Description_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 23
    }
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckboxGroup);

/***/ }),

/***/ "./components/forms/Choices.style.tsx":
/*!********************************************!*\
  !*** ./components/forms/Choices.style.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Choices = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Choicesstyle__Choices",
  componentId: "sc-1r49bg-0"
})(["display:flex;flex-direction:column;"]);
/* harmony default export */ __webpack_exports__["default"] = (Choices);

/***/ }),

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
})(["color:", ";font-size:0.8rem;font-style:italic;"], function (p) {
  return p.theme.colors.textMuted;
});
/* harmony default export */ __webpack_exports__["default"] = (DescriptionStyle);

/***/ }),

/***/ "./components/forms/Input.style.tsx":
/*!******************************************!*\
  !*** ./components/forms/Input.style.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input.withConfig({
  displayName: "Inputstyle__Input",
  componentId: "sc-1nl68ta-0"
})(["&[type='checkbox']{display:none;}&[type='radio']{display:none;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/forms/Label.style.tsx":
/*!******************************************!*\
  !*** ./components/forms/Label.style.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Label = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label.withConfig({
  displayName: "Labelstyle__Label",
  componentId: "u2u342-0"
})(["position:relative;cursor:pointer;padding-bottom:0.7rem;padding-top:0.7rem;padding-left:3rem;margin-bottom:3px;background-color:", ";color:", ";&:before{content:'';display:block;width:", ";height:20px;border:1px solid ", ";position:absolute;left:", ";top:", ";opacity:", ";-webkit-transition:all 0.12s,border-color 0.08s;transition:all 0.12s,border-color 0.08s;border-top-color:", ";border-left-color:", ";transform:", ";}"], function (p) {
  return p.checked ? p.theme.colors.primary : '';
}, function (p) {
  return p.checked ? p.theme.colors.textSecondary : p.theme.colors.textPrimary;
}, function (p) {
  return p.checked ? '10px' : '20px';
}, function (p) {
  return p.checked ? 'white' : 'black';
}, function (p) {
  return p.checked ? '20px' : '15px';
}, function (p) {
  return p.checked ? '5px' : '10px';
}, function (p) {
  return p.checked ? 1 : 0.6;
}, function (p) {
  return p.checked && 'transparent';
}, function (p) {
  return p.checked && 'transparent';
}, function (p) {
  return p.checked && 'rotate(45deg)';
});
/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./components/forms/Question.style.tsx":
/*!*********************************************!*\
  !*** ./components/forms/Question.style.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var QuestionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Questionstyle__QuestionWrapper",
  componentId: "sc-1ce9jof-0"
})(["margin-bottom:2.5rem;"]);
/* harmony default export */ __webpack_exports__["default"] = (QuestionWrapper);

/***/ }),

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
    checked: checked,
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
/* harmony import */ var _Question_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Question.style */ "./components/forms/Question.style.tsx");
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
  return __jsx(_Question_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, title && __jsx(_Title_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, title), __jsx(_Choices_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
        lineNumber: 44,
        columnNumber: 11
      }
    });
  })), description && __jsx(_Description_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 23
    }
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (RadioGroup);

/***/ }),

/***/ "./components/forms/Title.style.tsx":
/*!******************************************!*\
  !*** ./components/forms/Title.style.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var TitleStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h4.withConfig({
  displayName: "Titlestyle__TitleStyle",
  componentId: "lc00ep-0"
})(["color:", ";font-size:2rem;margin-bottom:0.6em;margin-top:0;@media (max-width:450px){font-size:1.4rem;}"], function (p) {
  return p.theme.colors.textPrimary;
});
/* harmony default export */ __webpack_exports__["default"] = (TitleStyle);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/utils */ "./components/utils.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.tsx");
/* harmony import */ var _components_BlockQuote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlockQuote */ "./components/BlockQuote/index.tsx");
/* harmony import */ var _components_forms_RadioGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/forms/RadioGroup */ "./components/forms/RadioGroup.tsx");
/* harmony import */ var _components_forms_CheckboxGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/forms/CheckboxGroup */ "./components/forms/CheckboxGroup.tsx");

var _jsxFileName = "/Users/tomfa/repos/s3launchpad/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var questions = [{
  id: 'storage-type',
  title: 'What do we store',
  type: 'radio',
  description: 'Unlike normal file storage, webapps like React and Vue have a ' + 'default path, and error pages.',
  options: [{
    value: 'webapp',
    label: 'A webapp'
  }, {
    value: 'files',
    label: 'Files'
  }]
}, {
  id: 'staging-env',
  title: 'Do we want a staging environment',
  type: 'radio',
  description: 'A staging (or test) environment would mean a duplicate ' + 'set of buckets. The cost is insignificant.',
  options: [{
    value: true,
    label: 'Yes'
  }, {
    value: false,
    label: 'No'
  }]
}];

var getDefaultRadioOption = function getDefaultRadioOption(question) {
  return question.options.find(function (o) {
    return o.value === question.defaultValue;
  }) || null;
};

var getDefaultCheckboxOption = function getDefaultCheckboxOption(question) {
  if (!question.defaultValue) {
    return [];
  }

  if (typeof question.defaultValue === 'string') {
    return question.options.filter(function (o) {
      return o.value === question.defaultValue;
    });
  }

  if (question.defaultValue instanceof Array) {
    return question.options.filter(function (o) {
      return question.defaultValue.includes(o.value);
    });
  }

  return [];
};

var generateDefaultRadioSelectedOptions = function generateDefaultRadioSelectedOptions(radioQuestions) {
  return radioQuestions.filter(function (q) {
    return q.type === 'radio';
  }).reduce(function (map, question) {
    return _objectSpread({}, map, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, question.id, getDefaultRadioOption(question)));
  }, {});
};

var generateDefaultCheckboxSelectedOptions = function generateDefaultCheckboxSelectedOptions(checkboxQuestions) {
  return checkboxQuestions.filter(function (q) {
    return q.type === 'checkbox';
  }).reduce(function (map, question) {
    return _objectSpread({}, map, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, question.id, getDefaultCheckboxOption(question)));
  }, {});
};

function Home() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(generateDefaultRadioSelectedOptions(questions)),
      selectedRadioOptions = _useState[0],
      setSelectedRadioOptions = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(generateDefaultCheckboxSelectedOptions(questions)),
      selectedCheckboxOptions = _useState2[0],
      setSelectedCheckboxOptions = _useState2[1];

  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["PageWrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }), __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Main"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx(_components_BlockQuote__WEBPACK_IMPORTED_MODULE_4__["default"], {
    author: 'Lolrus, the bucket walrus',
    source: 'At the launch of AWS S3 in 2006',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Hosting a", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 22
    }
  }, " webapp "), "or need to store uploads? Put them in S3 buckets. It's", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, " cheap "), "and", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, " reliable"), ". Let me show how", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, " easy "), "it is."))), __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, questions.map(function (question) {
    if (question.type === 'radio') {
      return __jsx(_components_forms_RadioGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: question.id,
        options: question.options,
        selectedOption: selectedRadioOptions[question.id] || null,
        onChange: function onChange(value) {
          return setSelectedRadioOptions(function (prev) {
            return _objectSpread({}, prev, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, question.id, value));
          });
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 15
        }
      });
    } else if (question.type === 'checkbox') {
      return __jsx(_components_forms_CheckboxGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: question.id,
        options: question.options,
        selectedOptions: selectedCheckboxOptions[question.id] || [],
        onChange: function onChange(value) {
          return setSelectedCheckboxOptions(function (prev) {
            return _objectSpread({}, prev, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, question.id, value));
          });
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 15
        }
      });
    }

    throw new Error("Unexpected question type ".concat(question.type));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.794cdd5efeafb61be19d.hot-update.js.map