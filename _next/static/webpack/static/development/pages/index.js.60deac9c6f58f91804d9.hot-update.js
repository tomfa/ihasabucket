webpackHotUpdate("static/development/pages/index.js",{

/***/ "./questions/data.ts":
/*!***************************!*\
  !*** ./questions/data.ts ***!
  \***************************/
/*! exports provided: questions, questionMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questions", function() { return questions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionMap", function() { return questionMap; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ "./enums.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./types.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var questions = [{
  id: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].domainName,
  title: '',
  type: _types__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].TEXT,
  placeholders: ['mydomain.com', 'uploads.mydomain.com', 'staging.mydomain.com', 'www.mydomain.com', 'test.mydomain.com', 'uploads.mydomain.com'],
  description: "We will use this as the S3 bucket name. The bucket name is permanent, but it doesn't have to match an actual domain. It does however have to be unique on S3, so \"example\" or \"my-bucket\" will not work. If you leave it empty, you'll be prompted for a bucket name at deploy time."
}, {
  id: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].storageType,
  title: 'What are we storing?',
  type: _types__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].RADIO,
  description: 'Unlike normal file storage, web apps like React and Vue have a default path, and error pages.',
  options: [{
    value: 'webapp',
    label: 'A web app'
  }, {
    value: 'files',
    label: 'Static files or media uploads'
  }]
}, {
  id: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].webappIsStatic,
  title: 'Is the web app statically generated?',
  type: _types__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].RADIO,
  description: 'Statically generated sites can be optimized for search engines by returning correct HTTP status codes. If you are uncertain, select No.',
  options: [{
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].TRUE,
    label: 'Yes (e.g. Next, Gatsby, Nuxt)'
  }, {
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].FALSE,
    label: 'No (e.g. plain Vue or React)'
  }],
  showIf: [{
    questionId: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].storageType,
    value: 'webapp'
  }]
}, {
  id: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].aclPublic,
  title: 'Should content be publicly available?',
  type: _types__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].RADIO,
  description: 'If our files hold secret or personal information, we will need a stricter security policy than if we are storing publicly available files, e.g. media files for a CMS.',
  options: [{
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].TRUE,
    label: 'Yes, make files public'
  }, {
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].FALSE,
    label: 'No, let me control access to the files'
  }],
  showIf: [{
    questionId: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].storageType,
    value: 'files'
  }]
}, {
  id: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].configureDns,
  title: 'Should AWS set up DNS pointers?',
  type: _types__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].RADIO,
  description: 'Should we setup DNS pointers for your domain? (Recommended). Route 53 costs 1.5$ / month',
  options: [{
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].TRUE,
    label: 'Yes, please do'
  }, {
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].FALSE,
    label: "No, I'll set up DNS afterwards"
  }],
  showIf: [{
    questionId: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].domainName,
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["VALUES"].NOT_EMPTY
  }]
}, {
  id: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].createCertificates,
  title: 'Should AWS create certificates to support the domain?',
  type: _types__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].RADIO,
  description: 'AWS can create HTTPS certificates for us. This is recommended and free of charge.',
  options: [{
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].TRUE,
    label: 'Please do'
  }, {
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].FALSE,
    label: 'No, I`ll configure certificates myself'
  }],
  showIf: [{
    questionId: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].domainName,
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["VALUES"].NOT_EMPTY
  }, {
    questionId: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].configureDns,
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].FALSE
  }]
}, {
  id: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].region,
  title: 'In what region do you want the buckets?',
  type: _types__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].DROPDOWN,
  defaultValue: _enums__WEBPACK_IMPORTED_MODULE_1__["AWS_REGIONS"].EU_NORTH_1,
  description: 'A region closer to your users can give an extra performance boost.',
  options: Object.values(_enums__WEBPACK_IMPORTED_MODULE_1__["AWS_REGIONS"]).map(function (value) {
    return {
      value: value,
      label: value
    };
  })
}, {
  id: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].stagingEnv,
  title: 'Want a test environment?',
  type: _types__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].RADIO,
  description: "A staging (or test) environment would mean a duplicate set of buckets. If you're uncertain, select No. You can always create a staging environment later.",
  options: [{
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].TRUE,
    label: 'Yes, please create a separate set of buckets for testing'
  }, {
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].FALSE,
    label: "No, I won't need that"
  }]
}];
var questionMap = questions.reduce(function (map, question) {
  return _objectSpread({}, map, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, question.id, question));
}, {});

/***/ }),

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

/***/ })

})
//# sourceMappingURL=index.js.60deac9c6f58f91804d9.hot-update.js.map