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
/* harmony import */ var _components_HeaderSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HeaderSection */ "./components/HeaderSection/index.tsx");
/* harmony import */ var _components_BlockQuote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlockQuote */ "./components/BlockQuote/index.tsx");
/* harmony import */ var _components_forms_RadioGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/forms/RadioGroup */ "./components/forms/RadioGroup.tsx");
/* harmony import */ var _components_forms_CheckboxGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/forms/CheckboxGroup */ "./components/forms/CheckboxGroup.tsx");
/* harmony import */ var _utils_questions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/questions */ "./utils/questions.ts");
/* harmony import */ var _components_Infrastructure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Infrastructure */ "./components/Infrastructure/index.tsx");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums */ "./enums.ts");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.tsx");


var _jsxFileName = "/Users/tomfa/repos/s3launchpad/pages/index.tsx",
    _this2 = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function Home() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_utils_questions__WEBPACK_IMPORTED_MODULE_7__["generateDefaultRadioSelectedOptions"])(_utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"])),
      selectedRadioOptions = _useState[0],
      setSelectedRadioOptions = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_utils_questions__WEBPACK_IMPORTED_MODULE_7__["generateDefaultCheckboxSelectedOptions"])(_utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"])),
      selectedCheckboxOptions = _useState2[0],
      setSelectedCheckboxOptions = _useState2[1];

  var hasSelected = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (questionId, value) {
    var question = _utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"].find(function (q) {
      return q.id === questionId;
    });

    if (!question) {
      throw Error("Missing question for ".concat(questionId));
    }

    if (!question.options.filter(function (o) {
      return o.value === value;
    })) {
      throw Error("Question ".concat(questionId, " does not have option ").concat(value));
    }

    if (question.type === 'radio') {
      var _selectedRadioOptions;

      return ((_selectedRadioOptions = selectedRadioOptions[question.id]) === null || _selectedRadioOptions === void 0 ? void 0 : _selectedRadioOptions.value) === value;
    }

    if (question.type === 'checkbox') {
      return !!selectedCheckboxOptions[question.id].find(function (o) {
        return o.value === value;
      });
    }
  }, [selectedRadioOptions, selectedCheckboxOptions, _utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"]]);
  var hasAnswered = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (questionId) {
    var question = _utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"].find(function (q) {
      return q.id === questionId;
    });

    if (!question) {
      throw Error("Missing question for ".concat(questionId));
    }

    if (question.type === 'radio') {
      var _selectedRadioOptions2;

      return !!((_selectedRadioOptions2 = selectedRadioOptions[question.id]) === null || _selectedRadioOptions2 === void 0 ? void 0 : _selectedRadioOptions2.value);
    }

    if (question.type === 'checkbox') {
      return selectedCheckboxOptions[question.id].length > 0;
    }
  }, [selectedRadioOptions, selectedCheckboxOptions, _utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"]]);

  var hasAnsweredAll = function hasAnsweredAll(questionIds) {
    return !!_utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"].find(function (q) {
      return !hasAnswered(q);
    });
  };

  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["PageWrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(_components_HeaderSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }), __jsx(Intro, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }), __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, _utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"].map(function (question) {
    if (question.type === 'radio') {
      return __jsx(_components_forms_RadioGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: question.id,
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
          lineNumber: 77,
          columnNumber: 15
        }
      });
    }

    if (question.type === 'checkbox') {
      return __jsx(_components_forms_CheckboxGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: question.id,
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
          lineNumber: 95,
          columnNumber: 15
        }
      });
    }

    throw new Error("Unexpected question type ".concat(question.type));
  })), hasAnsweredAll && __jsx(_components_Infrastructure__WEBPACK_IMPORTED_MODULE_8__["default"], {
    webApp: hasSelected(_enums__WEBPACK_IMPORTED_MODULE_9__["QUESTION_ID"].storageType, 'webapp'),
    shared: hasSelected(_enums__WEBPACK_IMPORTED_MODULE_9__["QUESTION_ID"].aclPublic, _enums__WEBPACK_IMPORTED_MODULE_9__["BOOL_VALUE"].TRUE),
    staging: hasSelected(_enums__WEBPACK_IMPORTED_MODULE_9__["QUESTION_ID"].stagingEnv, _enums__WEBPACK_IMPORTED_MODULE_9__["BOOL_VALUE"].TRUE),
    staticPage: hasSelected(_enums__WEBPACK_IMPORTED_MODULE_9__["QUESTION_ID"].webappIsStatic, _enums__WEBPACK_IMPORTED_MODULE_9__["BOOL_VALUE"].TRUE),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 26
    }
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }));
}

var Intro = function Intro() {
  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 3
    }
  }, __jsx(_components_BlockQuote__WEBPACK_IMPORTED_MODULE_4__["default"], {
    author: 'Lolrus, the bucket walrus',
    source: 'At the launch of AWS S3 in 2006',
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Hosting a", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 18
    }
  }, " webapp "), "or need to store uploads? Put them in S3 buckets. It's", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, " cheap "), "and", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, " reliable"), ". With CloudFront cache, it'll be blazingly ", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 19
    }
  }, "fast"), ". Let's see how", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, " easy "), "it can be.")));
};

var Questionare = function Questionare() {};

/***/ })

})
//# sourceMappingURL=index.js.09e92a9121134b2ed73d.hot-update.js.map