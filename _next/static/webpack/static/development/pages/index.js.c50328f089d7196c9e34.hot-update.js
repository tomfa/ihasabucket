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
    if (answeredQuestions.length > 0) {
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

/***/ "./sections/HeaderSection/index.tsx":
/*!******************************************!*\
  !*** ./sections/HeaderSection/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _MetaTags_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MetaTags/Meta */ "./sections/MetaTags/Meta.tsx");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/utils */ "./components/utils.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _components_Title_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Title.style */ "./components/Title.style.tsx");
/* harmony import */ var _utils_splitbee__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/splitbee */ "./utils/splitbee.ts");


var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/sections/HeaderSection/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Lolrus = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "HeaderSection__Lolrus",
  componentId: "a1mdh2-0"
})(["width:150px;position:absolute;right:-30px;top:0;transition:transform 300ms;@media (min-width:560px){display:block;right:30px;}&:hover{transform:translateY(30px);}"]);

var HeaderSection = function HeaderSection(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'I has a bucket.' : _ref$title;
  var theme = Object(_styles_theme__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var _document;

    return Object(_utils_splitbee__WEBPACK_IMPORTED_MODULE_8__["trail"])('hi-there', {
      referrer: (_document = document) === null || _document === void 0 ? void 0 : _document.referrer
    });
  }, []);

  var refreshEverything = function refreshEverything() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function refreshEverything$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(router.push('/'));

          case 2:
            // TODO: Clear state instead of reloading the entire app
            router.reload();

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_5__["SectionBackground"], {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textSecondary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(_MetaTags_Meta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx(_components_Title_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: refreshEverything,
    role: 'button',
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, title), __jsx(Lolrus, {
    src: '/bucket.png',
    alt: 'Lolrus, the bucket walrus',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderSection);

/***/ })

})
//# sourceMappingURL=index.js.c50328f089d7196c9e34.hot-update.js.map