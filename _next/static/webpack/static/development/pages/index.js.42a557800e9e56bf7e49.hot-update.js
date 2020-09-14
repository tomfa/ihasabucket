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

  var submit = function submit(submitValue) {
    setSubmitted(true);
    onSubmit(submitValue);
  };

  return __jsx(_Question_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, title && __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, title), __jsx(_InputContainer_styles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(_Input_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "text",
    value: inputValue,
    placeholder: placeholder,
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
      lineNumber: 39,
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
      lineNumber: 52,
      columnNumber: 9
    }
  })), description && __jsx(_Description_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 23
    }
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (TextInput);

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
/* harmony import */ var _components_HeaderSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HeaderSection */ "./components/HeaderSection/index.tsx");
/* harmony import */ var _components_BlockQuote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlockQuote */ "./components/BlockQuote/index.tsx");
/* harmony import */ var _components_forms_RadioGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/forms/RadioGroup */ "./components/forms/RadioGroup.tsx");
/* harmony import */ var _components_forms_CheckboxGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/forms/CheckboxGroup */ "./components/forms/CheckboxGroup.tsx");
/* harmony import */ var _utils_questions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/questions */ "./utils/questions.ts");
/* harmony import */ var _components_Infrastructure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Infrastructure */ "./components/Infrastructure/index.tsx");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums */ "./enums.ts");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.tsx");
/* harmony import */ var _components_forms_TextInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/forms/TextInput */ "./components/forms/TextInput.tsx");
/* harmony import */ var _components_forms_Dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/forms/Dropdown */ "./components/forms/Dropdown.tsx");
/* harmony import */ var _utils_questionData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/questionData */ "./utils/questionData.ts");


var _jsxFileName = "/Users/tomfa/repos/s3launchpad/pages/index.tsx",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














function Home() {
  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["PageWrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_components_HeaderSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx(Intro, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx(Questionare, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }));
}

var Intro = function Intro() {
  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 3
    }
  }, __jsx(_components_BlockQuote__WEBPACK_IMPORTED_MODULE_4__["default"], {
    author: 'Lolrus, the bucket walrus',
    source: 'At the launch of AWS S3 in 2006',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Hosting a", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 18
    }
  }, " webapp "), "or need to store uploads? Put them in S3 buckets. It's", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, " cheap "), "and", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, " reliable"), ". With CloudFront cache, it'll be blazingly ", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, "fast"), ". Let's see how", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, " easy "), "it can be.")));
};

var Questionare = function Questionare() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_utils_questions__WEBPACK_IMPORTED_MODULE_7__["generateDefaultRadioSelectedOptions"])(_utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"])),
      selectedRadioOptions = _useState[0],
      setSelectedRadioOptions = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_utils_questions__WEBPACK_IMPORTED_MODULE_7__["generateDefaultCheckboxSelectedOptions"])(_utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"])),
      selectedCheckboxOptions = _useState2[0],
      setSelectedCheckboxOptions = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      textAnswers = _useState3[0],
      setTextAnswers = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      questionRenderCount = _useState4[0],
      setQuestionRenderCount = _useState4[1];

  var hasSelected = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (questionId, value) {
    if (value === _enums__WEBPACK_IMPORTED_MODULE_9__["VALUES"].NOT_EMPTY) {
      return hasAnswered(questionId);
    }

    var question = _utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"].find(function (q) {
      return q.id === questionId;
    });

    if (!question) {
      throw Error("Missing question for ".concat(questionId));
    }

    if (question.type === 'text') {
      return textAnswers[questionId] && textAnswers[questionId] === value;
    }

    if (!question.options.filter(function (o) {
      return o.value === value;
    })) {
      throw Error("Question ".concat(questionId, " does not have option ").concat(value));
    }

    if (question.type === 'radio' || question.type === 'dropdown') {
      var _selectedRadioOptions;

      return ((_selectedRadioOptions = selectedRadioOptions[question.id]) === null || _selectedRadioOptions === void 0 ? void 0 : _selectedRadioOptions.value) === value;
    }

    if (question.type === 'checkbox') {
      return !!selectedCheckboxOptions[question.id].find(function (o) {
        return o.value === value;
      });
    }
  }, [selectedRadioOptions, selectedCheckboxOptions, _utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"]]);

  var getTextAnswer = function getTextAnswer(question) {
    return textAnswers[question.id];
  };

  var getRadioAnswer = function getRadioAnswer(question) {
    return selectedRadioOptions[question.id];
  };

  var hasAnswered = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (questionId) {
    var question = _utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"].find(function (q) {
      return q.id === questionId;
    });

    if (!question) {
      throw Error("Missing question for ".concat(questionId));
    }

    if (question.type === 'radio' || question.type === 'dropdown') {
      var _selectedRadioOptions2;

      return ((_selectedRadioOptions2 = selectedRadioOptions[question.id]) === null || _selectedRadioOptions2 === void 0 ? void 0 : _selectedRadioOptions2.value) != null;
    }

    if (question.type === 'checkbox') {
      return selectedCheckboxOptions[question.id].length > 0;
    }

    if (question.type === 'text') {
      return Object.keys(textAnswers).includes(questionId);
    }
  }, [selectedRadioOptions, selectedCheckboxOptions, _utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"]]);
  var shouldSkip = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (question) {
    return question.showIf && !!question.showIf.find(function (c) {
      return !hasSelected(c.questionId, c.value);
    });
  }, [hasSelected]);
  var hasAnsweredAll = !_utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"].find(function (q) {
    return !hasAnswered(q.id) && !shouldSkip(q);
  });
  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 5
    }
  }, _utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"].slice(0, questionRenderCount + 1).map(function (question) {
    var indexOfAllQuestions = _utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"].indexOf(question);
    var isLast = indexOfAllQuestions === questionRenderCount;

    if (shouldSkip(question)) {
      if (isLast) {
        setQuestionRenderCount(function (q) {
          return q + 1;
        });
      }

      return null;
    }

    if (question.type === 'radio') {
      var answerValue = selectedRadioOptions[question.id] || null;
      return __jsx(_components_forms_RadioGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: question.id,
        key: question.id,
        options: question.options,
        selectedOption: answerValue,
        onChange: function onChange(value) {
          setQuestionRenderCount(function (c) {
            return Math.max(c, indexOfAllQuestions + 1);
          });
          setSelectedRadioOptions(function (prev) {
            return _objectSpread({}, prev, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, question.id, value));
          });
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
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
          setQuestionRenderCount(function (c) {
            return Math.max(c, indexOfAllQuestions + 1);
          });
          setSelectedCheckboxOptions(function (prev) {
            return _objectSpread({}, prev, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, question.id, value));
          });
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 13
        }
      });
    }

    if (question.type === 'text') {
      return __jsx(_components_forms_TextInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: question.id,
        key: question.id,
        placeholder: question.placeholder,
        placeholders: question.placeholders,
        onSubmit: function onSubmit(value) {
          setTextAnswers(function (prev) {
            return _objectSpread({}, prev, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, question.id, value));
          });
          setQuestionRenderCount(function (c) {
            return Math.max(c, indexOfAllQuestions + 1);
          });
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 13
        }
      });
    }

    if (question.type === 'dropdown') {
      var _answerValue = selectedRadioOptions[question.id] || null;

      return __jsx(_components_forms_Dropdown__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: question.id,
        key: question.id,
        options: question.options,
        selectedOption: _answerValue,
        onChange: function onChange(value) {
          setSelectedRadioOptions(function (prev) {
            return _objectSpread({}, prev, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, question.id, value));
          });
          setQuestionRenderCount(function (c) {
            return Math.max(c, indexOfAllQuestions + 1);
          });
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 13
        }
      });
    }

    throw new Error("Unexpected question type ".concat(question.type));
  }), hasAnsweredAll && __jsx(_components_Infrastructure__WEBPACK_IMPORTED_MODULE_8__["default"], {
    webApp: hasSelected(_enums__WEBPACK_IMPORTED_MODULE_9__["QUESTION_ID"].storageType, 'webapp'),
    shared: hasSelected(_enums__WEBPACK_IMPORTED_MODULE_9__["QUESTION_ID"].aclPublic, _enums__WEBPACK_IMPORTED_MODULE_9__["BOOL_VALUE"].TRUE),
    staging: hasSelected(_enums__WEBPACK_IMPORTED_MODULE_9__["QUESTION_ID"].stagingEnv, _enums__WEBPACK_IMPORTED_MODULE_9__["BOOL_VALUE"].TRUE),
    staticPage: hasSelected(_enums__WEBPACK_IMPORTED_MODULE_9__["QUESTION_ID"].webappIsStatic, _enums__WEBPACK_IMPORTED_MODULE_9__["BOOL_VALUE"].TRUE),
    bucketName: getTextAnswer(_utils_questionData__WEBPACK_IMPORTED_MODULE_13__["default"]['domain-name']),
    region: getRadioAnswer(_utils_questionData__WEBPACK_IMPORTED_MODULE_13__["default"][_enums__WEBPACK_IMPORTED_MODULE_9__["QUESTION_ID"].region]).value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 9
    }
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.42a557800e9e56bf7e49.hot-update.js.map