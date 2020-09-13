webpackHotUpdate("static/development/pages/index.js",{

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
  description: 'Unlike normal file storage, webapps like React and Vue have a default path, and error pages.',
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
  description: 'A staging (or test) environment would mean a duplicate set of buckets. The cost is insignificant.',
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

var generateDefaultRadioSelectedOptions = function generateDefaultRadioSelectedOptions(questions) {
  return questions.filter(function (q) {
    return q.type === 'radio';
  }).reduce(function (map, question) {
    return _objectSpread({}, map, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, question.id, getDefaultRadioOption(question)));
  }, {});
};

var generateDefaultCheckboxSelectedOptions = function generateDefaultCheckboxSelectedOptions(questions) {
  return questions.filter(function (q) {
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
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }), __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Main"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx(_components_BlockQuote__WEBPACK_IMPORTED_MODULE_4__["default"], {
    author: 'Lolrus, the bucket walrus',
    source: 'At the launch of AWS S3 in 2006',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Hosting a", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 22
    }
  }, " webapp "), "or need to store uploads? Put them in S3 buckets. It's", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, " cheap "), "and", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, " reliable"), ". Let me show how", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, " easy "), "it is."))), __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
          lineNumber: 117,
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
          lineNumber: 133,
          columnNumber: 15
        }
      });
    }
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.07252657a68068e2fabc.hot-update.js.map