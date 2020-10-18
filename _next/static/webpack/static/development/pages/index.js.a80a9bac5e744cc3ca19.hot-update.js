webpackHotUpdate("static/development/pages/index.js",{

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
  console.log(answeredQuestions);
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
//# sourceMappingURL=index.js.a80a9bac5e744cc3ca19.hot-update.js.map