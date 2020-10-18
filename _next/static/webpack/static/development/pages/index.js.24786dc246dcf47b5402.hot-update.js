webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var scroll_into_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scroll-into-view */ "./node_modules/scroll-into-view/scrollIntoView.js");
/* harmony import */ var scroll_into_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scroll_into_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _questions_useQuestions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questions/useQuestions */ "./questions/useQuestions.ts");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/utils */ "./components/utils.tsx");
/* harmony import */ var _components_forms_RadioGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/forms/RadioGroup */ "./components/forms/RadioGroup.tsx");
/* harmony import */ var _components_forms_CheckboxGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/forms/CheckboxGroup */ "./components/forms/CheckboxGroup.tsx");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums */ "./enums.ts");
/* harmony import */ var _components_forms_TextInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/forms/TextInput */ "./components/forms/TextInput.tsx");
/* harmony import */ var _components_forms_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/forms/Dropdown */ "./components/forms/Dropdown.tsx");
/* harmony import */ var _questions_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../questions/utils */ "./questions/utils.ts");
/* harmony import */ var _Infrastructure__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Infrastructure */ "./sections/Infrastructure.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/sections/Questionare.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var Questionare = function Questionare() {
  var _useQuestions = Object(_questions_useQuestions__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      answers = _useQuestions.answers,
      renderQuestions = _useQuestions.renderQuestions,
      updateAnswer = _useQuestions.updateAnswer,
      answerQuestion = _useQuestions.answerQuestion,
      hasAnsweredAll = _useQuestions.hasAnsweredAll;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (hasAnsweredAll) {
      var element = document.getElementById('infrastructure');

      if (element) {
        scroll_into_view__WEBPACK_IMPORTED_MODULE_1___default()(element, {
          align: {
            top: 0,
            topOffset: 50
          }
        });
      }
    } else if (renderQuestions.length > 1) {
      var lastQuestion = renderQuestions[renderQuestions.length - 1];

      var _element = document.getElementById(lastQuestion.id);

      if (_element) {
        scroll_into_view__WEBPACK_IMPORTED_MODULE_1___default()(_element, {
          align: {
            top: 0,
            topOffset: 50
          }
        });
      }
    }
  }, [hasAnsweredAll, renderQuestions]);
  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, renderQuestions.map(function (question) {
    if (question.type === 'radio') {
      var answer = answers[question.id];
      return __jsx(_components_forms_RadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
          lineNumber: 54,
          columnNumber: 13
        }
      });
    }

    if (question.type === 'dropdown') {
      var _answer = answers[question.id];
      return __jsx(_components_forms_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
          lineNumber: 68,
          columnNumber: 13
        }
      });
    }

    if (question.type === 'checkbox') {
      var _answer2 = answers[question.id];
      return __jsx(_components_forms_CheckboxGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
          lineNumber: 82,
          columnNumber: 13
        }
      });
    }

    if (question.type === 'text') {
      var _answer3 = answers[question.id];
      return __jsx(_components_forms_TextInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: question.id,
        key: question.id,
        value: _answer3,
        placeholder: question.placeholder,
        placeholders: question.placeholders,
        onChange: function onChange(value) {
          return updateAnswer(question.id, value);
        },
        onSubmit: function onSubmit(value) {
          return answerQuestion(question.id, value);
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }
      });
    }

    throw new Error("Unexpected question type in ".concat(question));
  }), __jsx(ScrollToAnchor, {
    id: "infrastructure",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }), hasAnsweredAll && __jsx(_Infrastructure__WEBPACK_IMPORTED_MODULE_10__["default"], {
    webApp: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["hasAnswered"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].storageType, 'webapp'),
    shared: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["hasAnswered"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].aclPublic, _enums__WEBPACK_IMPORTED_MODULE_6__["BOOL_VALUE"].TRUE),
    staging: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["hasAnswered"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].stagingEnv, _enums__WEBPACK_IMPORTED_MODULE_6__["BOOL_VALUE"].TRUE),
    staticPage: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["hasAnswered"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].webappIsStatic, _enums__WEBPACK_IMPORTED_MODULE_6__["BOOL_VALUE"].TRUE),
    createCertificates: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["hasAnswered"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].configureDns, _enums__WEBPACK_IMPORTED_MODULE_6__["BOOL_VALUE"].TRUE) || Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["hasAnswered"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].createCertificates, _enums__WEBPACK_IMPORTED_MODULE_6__["BOOL_VALUE"].TRUE),
    configureDns: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["hasAnswered"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].configureDns, _enums__WEBPACK_IMPORTED_MODULE_6__["BOOL_VALUE"].TRUE),
    errorPath: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["getNormalizedAnswer"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].errorPath),
    forwardingBucket: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["getForwardingBucketValue"])(answers),
    bucketName: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["getNormalizedAnswer"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].bucketName),
    region: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["getNormalizedAnswer"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].region),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }));
};

var ScrollToAnchor = function ScrollToAnchor(_ref) {
  var id = _ref.id;
  return __jsx("div", {
    id: id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 52
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Questionare);

/***/ })

})
//# sourceMappingURL=index.js.24786dc246dcf47b5402.hot-update.js.map