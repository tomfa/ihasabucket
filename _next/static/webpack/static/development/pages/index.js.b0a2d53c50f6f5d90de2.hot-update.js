webpackHotUpdate("static/development/pages/index.js",{

/***/ "./questions/useQuestions.ts":
/*!***********************************!*\
  !*** ./questions/useQuestions.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./enums.ts");
/* harmony import */ var _utils_useUrlState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useUrlState */ "./utils/useUrlState.ts");
/* harmony import */ var _utils_splitbee__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/splitbee */ "./utils/splitbee.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./questions/utils.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data */ "./questions/data.ts");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var useQuestions = function useQuestions() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      answeredQuestions = _useState[0],
      setAnsweredQuestions = _useState[1];

  var _useUrlState = Object(_utils_useUrlState__WEBPACK_IMPORTED_MODULE_4__["useUrlState"])(),
      urlData = _useUrlState.urlData,
      updateUrlData = _useUrlState.updateUrlData;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      answers = _useState2[0],
      setAnswers = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (answeredQuestions.length > 0 || Object.keys(answers).length > 0) {
      return;
    }

    var defaultAnswers = _data__WEBPACK_IMPORTED_MODULE_7__["questions"].reduce(function (map, question) {
      return _objectSpread({}, map, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, question.id, Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getDefaultAnswer"])(question, urlData[question.id] !== undefined ? String(urlData[question.id]) : undefined)));
    }, {});
    var isFirstRender = !Object.keys(answers).length;
    var isInitialLoadFromUrl = Object.keys(urlData).length;

    if (isInitialLoadFromUrl) {
      var urlQuestions = Object.keys(urlData); // TODO: dirty hack to assume that first answer is answered if there are others

      if (urlQuestions.length && !urlQuestions.includes(_enums__WEBPACK_IMPORTED_MODULE_3__["QUESTION_ID"].bucketName)) {
        urlQuestions.push(_enums__WEBPACK_IMPORTED_MODULE_3__["QUESTION_ID"].bucketName);
      }

      setAnsweredQuestions(urlQuestions);
      setAnswers(defaultAnswers);
    } else if (isFirstRender) {
      setAnswers(defaultAnswers);
    }
  }, [urlData, answeredQuestions]);
  var renderQuestions = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getQuestionsToRender"])(answers, answeredQuestions);
  }, [answeredQuestions, answers]);
  var hasAnsweredAll = !renderQuestions.find(function (q) {
    return !answeredQuestions.includes(q.id);
  });
  var updateAnswer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (questionId, answer) {
    updateUrlData(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, String(questionId), Object(_utils__WEBPACK_IMPORTED_MODULE_6__["normalizeAnswer"])(answer)));
    setAnswers(function (prevAnswers) {
      return _objectSpread({}, prevAnswers, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, questionId, answer));
    });
  }, [setAnswers, updateUrlData]);
  var answerQuestion = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (questionId, answer) {
    updateAnswer(questionId, answer);
    setAnsweredQuestions(function (qs) {
      if (qs.includes(questionId)) {
        return qs;
      }

      Object(_utils_splitbee__WEBPACK_IMPORTED_MODULE_5__["trail"])(questionId, {
        answer: answer
      });
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(qs), [questionId]);
    });
  }, [updateAnswer]);
  return {
    answers: answers,
    renderQuestions: renderQuestions,
    updateAnswer: updateAnswer,
    answerQuestion: answerQuestion,
    hasAnsweredAll: hasAnsweredAll
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useQuestions);

/***/ }),

/***/ "./questions/utils.ts":
/*!****************************!*\
  !*** ./questions/utils.ts ***!
  \****************************/
/*! exports provided: getDefaultAnswer, normalizeAnswer, getNormalizedAnswer, hasAnswered, getQuestionsToRender, getForwardingBucketValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultAnswer", function() { return getDefaultAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeAnswer", function() { return normalizeAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedAnswer", function() { return getNormalizedAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAnswered", function() { return hasAnswered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuestionsToRender", function() { return getQuestionsToRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getForwardingBucketValue", function() { return getForwardingBucketValue; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./enums.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./types.ts");
/* harmony import */ var _utils_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/domain */ "./utils/domain.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./questions/data.ts");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./conditions */ "./questions/conditions.ts");





var getDefaultAnswer = function getDefaultAnswer(question, answer) {
  if (question.type === _types__WEBPACK_IMPORTED_MODULE_1__["QuestionType"].TEXT) {
    return answer || question.defaultValue || null;
  }

  if (question.type === _types__WEBPACK_IMPORTED_MODULE_1__["QuestionType"].RADIO || question.type === _types__WEBPACK_IMPORTED_MODULE_1__["QuestionType"].DROPDOWN) {
    var defaultValue = answer || question.defaultValue;
    return question.options.find(function (o) {
      return (o === null || o === void 0 ? void 0 : o.value) === defaultValue;
    }) || null;
  }

  if (question.type === _types__WEBPACK_IMPORTED_MODULE_1__["QuestionType"].CHECKBOX) {
    var _defaultValue = answer || question.defaultValue;

    if (!_defaultValue) {
      return [];
    }

    if (typeof _defaultValue === 'string' || typeof _defaultValue === 'number') {
      return question.options.filter(function (o) {
        return o.value === _defaultValue;
      });
    }

    if (_defaultValue instanceof Array) {
      return question.options.filter(function (o) {
        return _defaultValue.includes(o.value);
      });
    }

    return null;
  }
};
var normalizeAnswer = function normalizeAnswer(answer) {
  if (answer === null) {
    return '';
  }

  if (typeof answer === 'string' || typeof answer === 'number' || typeof answer === 'boolean') {
    return String(answer).toLowerCase().trim();
  }

  if (answer instanceof Array) {
    return answer.map(function (o) {
      return o.value.toLowerCase().trim();
    }).join(',');
  }

  if (answer.value !== null) {
    return answer.value.toLowerCase().trim();
  }

  return '';
};
var getNormalizedAnswer = function getNormalizedAnswer(answers, questionId) {
  return normalizeAnswer(answers[questionId]);
};
var hasAnswered = function hasAnswered(answers, questionId, value) {
  var question = _data__WEBPACK_IMPORTED_MODULE_3__["questionMap"][questionId];

  if (!question) {
    throw new Error("Unknown questionId ".concat(questionId));
  }

  if (question.type === _types__WEBPACK_IMPORTED_MODULE_1__["QuestionType"].RADIO) {
    var answer = answers[questionId];

    if (answer === null) {
      return value === null;
    }

    return answer.value === value;
  }

  if (question.type === _types__WEBPACK_IMPORTED_MODULE_1__["QuestionType"].CHECKBOX) {
    var _answer = answers[questionId];

    if (_answer === null) {
      return value === null;
    }

    return !!_answer.find(function (o) {
      return o.value === value;
    });
  }

  if (question.type === _types__WEBPACK_IMPORTED_MODULE_1__["QuestionType"].DROPDOWN) {
    var _answer2 = answers[questionId];

    if (_answer2 === null) {
      return value === null;
    }

    return _answer2.value === value;
  }

  if (question.type === _types__WEBPACK_IMPORTED_MODULE_1__["QuestionType"].TEXT) {
    var _answer3 = answers[questionId];

    if (_answer3 === null) {
      return value === null;
    }

    return _answer3 === value;
  }
};

var isFulfilled = function isFulfilled(condition, answers) {
  if (typeof condition.value === 'function') {
    return condition.value(answers[condition.questionId]);
  }

  return hasAnswered(answers, condition.questionId, condition.value);
};

var shouldSkip = function shouldSkip(question, answers) {
  if (!question.showIf) {
    return false;
  }

  return !!question.showIf.find(function (c) {
    return !isFulfilled(c, answers);
  });
};

var getLastRenderIndex = function getLastRenderIndex(answers, answeredQuestions) {
  var startAtIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var question = _data__WEBPACK_IMPORTED_MODULE_3__["questions"][startAtIndex];

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
  _data__WEBPACK_IMPORTED_MODULE_3__["questions"].slice(0, lastRenderIndex + 1).forEach(function (question) {
    if (!shouldSkip(question, answers)) {
      questionsToRender.push(question);
    }
  });
  return questionsToRender;
};
var getForwardingBucketValue = function getForwardingBucketValue(answers) {
  var bucketName = answers[_enums__WEBPACK_IMPORTED_MODULE_0__["QUESTION_ID"].bucketName];
  var forwardToApex = answers[_enums__WEBPACK_IMPORTED_MODULE_0__["QUESTION_ID"].apexForwarding];
  var forwardToWWW = answers[_enums__WEBPACK_IMPORTED_MODULE_0__["QUESTION_ID"].wwwForwarding];

  if (Object(_conditions__WEBPACK_IMPORTED_MODULE_4__["answerIsApexDomain"])(bucketName) && forwardToWWW) {
    return "www.".concat(bucketName);
  }

  if (Object(_conditions__WEBPACK_IMPORTED_MODULE_4__["answerIsWWWDomain"])(bucketName) && forwardToApex) {
    return Object(_utils_domain__WEBPACK_IMPORTED_MODULE_2__["getApexDomain"])(bucketName);
  }

  return null;
};

/***/ })

})
//# sourceMappingURL=index.js.b0a2d53c50f6f5d90de2.hot-update.js.map