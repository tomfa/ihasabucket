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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./questions/utils.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./questions/data.ts");
/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/urls */ "./utils/urls.ts");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var useQuestions = function useQuestions() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      answeredQuestions = _useState[0],
      setAnsweredQuestions = _useState[1];

  var _useUrlState = Object(_utils_urls__WEBPACK_IMPORTED_MODULE_5__["useUrlState"])(),
      urlData = _useUrlState.urlData,
      updateUrlData = _useUrlState.updateUrlData;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      answers = _useState2[0],
      setAnswers = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (answeredQuestions.length > 0) {
      return;
    }

    var defaultAnswers = _data__WEBPACK_IMPORTED_MODULE_4__["questions"].reduce(function (map, question) {
      return _objectSpread({}, map, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, question.id, urlData[question.id] || Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getDefaultAnswer"])(question)));
    }, {});
    setAnsweredQuestions(Object.keys(urlData));
    setAnswers(defaultAnswers);
  }, [urlData, answeredQuestions]);
  var renderQuestions = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getQuestionsToRender"])(answers, answeredQuestions);
  }, [answeredQuestions, answers]);
  var hasAnsweredAll = !renderQuestions.find(function (q) {
    return !answeredQuestions.includes(q.id);
  });
  var answerQuestion = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (questionId, answer) {
    updateUrlData(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, String(questionId), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["normalizeAnswer"])(answer)));
    setAnswers(function (prevAnswers) {
      return _objectSpread({}, prevAnswers, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, questionId, answer));
    });
    setAnsweredQuestions(function (qs) {
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(qs), [questionId]);
    });
  }, [updateUrlData]);
  return {
    answers: answers,
    renderQuestions: renderQuestions,
    answerQuestion: answerQuestion,
    hasAnsweredAll: hasAnsweredAll
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useQuestions);

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
/* harmony import */ var _questions_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../questions/utils */ "./questions/utils.ts");
/* harmony import */ var _Infrastructure__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Infrastructure */ "./sections/Infrastructure.tsx");
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
      lineNumber: 25,
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
          lineNumber: 30,
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
          lineNumber: 44,
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
          lineNumber: 58,
          columnNumber: 13
        }
      });
    }

    if (question.type === 'text') {
      var _answer3 = answers[question.id];
      return __jsx(_components_forms_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: question.id,
        key: question.id,
        value: _answer3,
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
          lineNumber: 72,
          columnNumber: 13
        }
      });
    }

    throw new Error("Unexpected question type in ".concat(question));
  }), hasAnsweredAll && __jsx(_Infrastructure__WEBPACK_IMPORTED_MODULE_9__["default"], {
    webApp: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_8__["hasAnswered"])(answers, _enums__WEBPACK_IMPORTED_MODULE_5__["QUESTION_ID"].storageType, 'webapp'),
    shared: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_8__["hasAnswered"])(answers, _enums__WEBPACK_IMPORTED_MODULE_5__["QUESTION_ID"].aclPublic, _enums__WEBPACK_IMPORTED_MODULE_5__["BOOL_VALUE"].TRUE),
    staging: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_8__["hasAnswered"])(answers, _enums__WEBPACK_IMPORTED_MODULE_5__["QUESTION_ID"].stagingEnv, _enums__WEBPACK_IMPORTED_MODULE_5__["BOOL_VALUE"].TRUE),
    staticPage: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_8__["hasAnswered"])(answers, _enums__WEBPACK_IMPORTED_MODULE_5__["QUESTION_ID"].webappIsStatic, _enums__WEBPACK_IMPORTED_MODULE_5__["BOOL_VALUE"].TRUE),
    bucketName: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_8__["getNormalizedAnswer"])(answers, _enums__WEBPACK_IMPORTED_MODULE_5__["QUESTION_ID"].domainName),
    region: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_8__["getNormalizedAnswer"])(answers, _enums__WEBPACK_IMPORTED_MODULE_5__["QUESTION_ID"].region),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Questionare);

/***/ })

})
//# sourceMappingURL=index.js.6fbe07992fa69ab643dd.hot-update.js.map