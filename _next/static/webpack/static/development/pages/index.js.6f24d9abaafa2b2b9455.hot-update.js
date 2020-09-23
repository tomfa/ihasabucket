webpackHotUpdate("static/development/pages/index.js",{

/***/ "./questions/utils.ts":
/*!****************************!*\
  !*** ./questions/utils.ts ***!
  \****************************/
/*! exports provided: getDefaultAnswer, getQuestionsToRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultAnswer", function() { return getDefaultAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuestionsToRender", function() { return getQuestionsToRender; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./types.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./questions/data.ts");


var getDefaultAnswer = function getDefaultAnswer(question) {
  if (question.type === _types__WEBPACK_IMPORTED_MODULE_0__["QuestionType"].TEXT) {
    return question.defaultValue || null;
  }

  if (question.type === _types__WEBPACK_IMPORTED_MODULE_0__["QuestionType"].RADIO || question.type === _types__WEBPACK_IMPORTED_MODULE_0__["QuestionType"].DROPDOWN) {
    return question.options.find(function (o) {
      return (o === null || o === void 0 ? void 0 : o.value) === question.defaultValue;
    }) || null;
  }

  if (question.type === _types__WEBPACK_IMPORTED_MODULE_0__["QuestionType"].CHECKBOX) {
    var defaultValue = question.defaultValue;

    if (!defaultValue) {
      return [];
    }

    if (typeof defaultValue === 'string' || typeof defaultValue === 'number') {
      return question.options.filter(function (o) {
        return o.value === defaultValue;
      });
    }

    if (defaultValue instanceof Array) {
      return question.options.filter(function (o) {
        return defaultValue.includes(o.value);
      });
    }

    return null;
  }
};

var isFulfilled = function isFulfilled(condition, answers) {
  var question = _data__WEBPACK_IMPORTED_MODULE_1__["questionMap"][condition.questionId];

  if (question.type === _types__WEBPACK_IMPORTED_MODULE_0__["QuestionType"].RADIO) {
    var answer = answers[condition.questionId];
    return answer.value === condition.value;
  }

  if (question.type === _types__WEBPACK_IMPORTED_MODULE_0__["QuestionType"].CHECKBOX) {
    var _answer = answers[condition.questionId];
    return !!_answer.find(function (o) {
      return o.value === condition.value;
    });
  }

  if (question.type === _types__WEBPACK_IMPORTED_MODULE_0__["QuestionType"].DROPDOWN) {
    var _answer2 = answers[condition.questionId];
    return _answer2.value === condition.value;
  }

  if (question.type === _types__WEBPACK_IMPORTED_MODULE_0__["QuestionType"].TEXT) {
    var _answer3 = answers[condition.questionId];
    return _answer3 === condition.value;
  }
};

var shouldSkip = function shouldSkip(question, answers) {
  return question.showIf && !!question.showIf.find(function (c) {
    return !isFulfilled(c, answers);
  });
};

var getLastRenderIndex = function getLastRenderIndex(answers, answeredQuestions) {
  var startAtIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var question = _data__WEBPACK_IMPORTED_MODULE_1__["questions"][startAtIndex];

  if (!question) {
    return startAtIndex;
  }

  var questionMissingAnswer = !answeredQuestions.includes(question.id) && !shouldSkip(question, answers);

  if (questionMissingAnswer) {
    return startAtIndex;
  }

  return getLastRenderIndex(answers, answeredQuestions, startAtIndex + 1);
};

var getQuestionsToRender = function getQuestionsToRender(answers, answeredQuestions) {
  var questionsToRender = [];
  var lastRenderIndex = getLastRenderIndex(answers, answeredQuestions);
  _data__WEBPACK_IMPORTED_MODULE_1__["questions"].slice(0, lastRenderIndex + 1).forEach(function (question) {
    if (!shouldSkip(question, answers)) {
      questionsToRender.push(question);
    }
  });
  return questionsToRender;
};

/***/ }),

/***/ "./sections/Questionare.tsx":
/*!**********************************!*\
  !*** ./sections/Questionare.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _questions_useQuestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../questions/useQuestions */ "./questions/useQuestions.ts");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/utils */ "./components/utils.tsx");
/* harmony import */ var _components_forms_RadioGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/forms/RadioGroup */ "./components/forms/RadioGroup.tsx");
/* harmony import */ var _components_forms_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/forms/CheckboxGroup */ "./components/forms/CheckboxGroup.tsx");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums */ "./enums.ts");
/* harmony import */ var _components_forms_TextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/forms/TextInput */ "./components/forms/TextInput.tsx");
/* harmony import */ var _components_forms_Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/forms/Dropdown */ "./components/forms/Dropdown.tsx");
/* harmony import */ var _Infrastructure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Infrastructure */ "./sections/Infrastructure.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/sections/Questionare.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Questionare = function Questionare() {
  var _useQuestions = Object(_questions_useQuestions__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      answers = _useQuestions.answers,
      renderQuestions = _useQuestions.renderQuestions,
      answerQuestion = _useQuestions.answerQuestion,
      hasAnsweredAll = _useQuestions.hasAnsweredAll;

  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, renderQuestions.map(function (question) {
    if (question.type === 'radio') {
      var answer = answers[question.id];
      return __jsx(_components_forms_RadioGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: question.id,
        key: question.id,
        options: question.options,
        selectedOption: answer,
        onChange: function onChange(value) {
          return answerQuestion(question.id, value);
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }
      });
    }

    if (question.type === 'dropdown') {
      var _answer = answers[question.id];
      return __jsx(_components_forms_Dropdown__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: question.id,
        key: question.id,
        options: question.options,
        selectedOption: _answer,
        onChange: function onChange(value) {
          return answerQuestion(question.id, value);
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }
      });
    }

    if (question.type === 'checkbox') {
      var _answer2 = answers[question.id];
      return __jsx(_components_forms_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: question.id,
        key: question.id,
        options: question.options,
        selectedOptions: _answer2,
        onChange: function onChange(value) {
          return answerQuestion(question.id, value);
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      });
    }

    if (question.type === 'text') {
      return __jsx(_components_forms_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: question.id,
        key: question.id,
        placeholder: question.placeholder,
        placeholders: question.placeholders,
        onSubmit: function onSubmit(value) {
          return answerQuestion(question.id, value);
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }
      });
    }

    throw new Error("Unexpected question type in ".concat(question));
  }), hasAnsweredAll && __jsx(_Infrastructure__WEBPACK_IMPORTED_MODULE_8__["default"], {
    webApp: answers[_enums__WEBPACK_IMPORTED_MODULE_5__["QUESTION_ID"].storageType] === 'webapp',
    shared: answers[_enums__WEBPACK_IMPORTED_MODULE_5__["QUESTION_ID"].aclPublic] === _enums__WEBPACK_IMPORTED_MODULE_5__["BOOL_VALUE"].TRUE,
    staging: answers[_enums__WEBPACK_IMPORTED_MODULE_5__["QUESTION_ID"].stagingEnv] === _enums__WEBPACK_IMPORTED_MODULE_5__["BOOL_VALUE"].TRUE,
    staticPage: answers[_enums__WEBPACK_IMPORTED_MODULE_5__["QUESTION_ID"].webappIsStatic] === _enums__WEBPACK_IMPORTED_MODULE_5__["BOOL_VALUE"].TRUE,
    bucketName: String(answers[_enums__WEBPACK_IMPORTED_MODULE_5__["QUESTION_ID"].domainName]),
    region: answers[_enums__WEBPACK_IMPORTED_MODULE_5__["QUESTION_ID"].region].value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Questionare);

/***/ })

})
//# sourceMappingURL=index.js.6f24d9abaafa2b2b9455.hot-update.js.map