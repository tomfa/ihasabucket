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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./questions/utils.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data */ "./questions/data.ts");
/* harmony import */ var _utils_splitbee__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/splitbee */ "./utils/splitbee.ts");



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

    var defaultAnswers = _data__WEBPACK_IMPORTED_MODULE_6__["questions"].reduce(function (map, question) {
      return _objectSpread({}, map, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, question.id, Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getDefaultAnswer"])(question, urlData[question.id] !== undefined ? String(urlData[question.id]) : undefined)));
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
    return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getQuestionsToRender"])(answers, answeredQuestions);
  }, [answeredQuestions, answers]);
  var hasAnsweredAll = !renderQuestions.find(function (q) {
    return !answeredQuestions.includes(q.id);
  });
  var updateAnswer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (questionId, answer) {
    updateUrlData(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, String(questionId), Object(_utils__WEBPACK_IMPORTED_MODULE_5__["normalizeAnswer"])(answer)));
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

      Object(_utils_splitbee__WEBPACK_IMPORTED_MODULE_7__["trail"])(questionId);
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

/***/ "./sections/Infrastructure.tsx":
/*!*************************************!*\
  !*** ./sections/Infrastructure.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/forms/Description.style */ "./components/forms/Description.style.tsx");
/* harmony import */ var _components_Header_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header.style */ "./components/Header.style.tsx");
/* harmony import */ var _utils_terraform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/terraform */ "./utils/terraform/index.ts");
/* harmony import */ var _components_code_Pre_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/code/Pre.style */ "./components/code/Pre.style.tsx");
/* harmony import */ var _components_Mute_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Mute.style */ "./components/Mute.style.tsx");
/* harmony import */ var _components_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/icons/LoadingIcon */ "./components/icons/LoadingIcon.tsx");
/* harmony import */ var _components_code_Code__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/code/Code */ "./components/code/Code.tsx");
/* harmony import */ var _components_ShareLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ShareLink */ "./components/ShareLink.tsx");
/* harmony import */ var _utils_splitbee__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/splitbee */ "./utils/splitbee.ts");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/sections/Infrastructure.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/no-array-index-key */











var Infrastructure = function Infrastructure(props) {
  var _getTerraFormPackage = Object(_utils_terraform__WEBPACK_IMPORTED_MODULE_3__["getTerraFormPackage"])(props),
      description = _getTerraFormPackage.description,
      mainTfContent = _getTerraFormPackage.mainTfContent;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return Object(_utils_splitbee__WEBPACK_IMPORTED_MODULE_9__["trail"])('completedForm', props);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setTimeout(function () {
      return setLoading(false);
    }, 800);
  }, [mainTfContent]);

  if (loading) {
    return __jsx(_components_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 12
      }
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: 'h1',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "Bucket is served!"), "Just run the script below, or share this", ' ', __jsx(_components_ShareLink__WEBPACK_IMPORTED_MODULE_8__["ShareLink"], {
    text: getShareTitle(props),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "configuration url"), " for later.", __jsx(_components_code_Code__WEBPACK_IMPORTED_MODULE_7__["default"], {
    bucketName: props.bucketName,
    mainTfContent: mainTfContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx(_components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      fontWeight: 'bold'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "The script above will plan the infrastructure and prompt you for confirmation."), description.map(function (text, i) {
    return __jsx(_components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, text);
  }), __jsx(_components_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "Prerequisites"), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "AWS Account"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "If you don't have an AWS account already, sign up at", ' ', __jsx("a", {
    href: "https://portal.aws.amazon.com/billing/signup#/start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "aws.amazon.com")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, "If you don't have your ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 37
    }
  }, "AWS_SECRET_ACCESS_KEY"), " and", ' ', __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "AWS_ACCESS_KEY_ID"), " handy, find those in the top right corner under your name > Security credentials. They should be exported to your environment:"), __jsx(_components_code_Pre_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_components_Mute_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "# Export AWS keys", '\n'), "export AWS_SECRET_ACCESS_KEY=yaAS$1...", '\n', "export AWS_ACCESS_KEY_ID=AKIA..."), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, "Terraform installed"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "If you haven't already,", ' ', __jsx("a", {
    href: "https://learn.hashicorp.com/tutorials/terraform/install-cli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, "install Terraform")), __jsx(_components_code_Pre_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(_components_Mute_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, "# For Macs with homebrew", '\n'), "brew install hashicorp/tap/terraform"), __jsx(_components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, "See", ' ', __jsx("a", {
    href: "https://learn.hashicorp.com/tutorials/terraform/install-cli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, "learn.hashicorp.com/tutorials/terraform/install-cli"), ' ', "for other platforms."));
};

var getShareTitle = function getShareTitle(_ref) {
  var bucketName = _ref.bucketName,
      webApp = _ref.webApp,
      region = _ref.region,
      shared = _ref.shared;
  var regionPostfix = region ? " in ".concat(region) : '';

  if (bucketName && region) {
    return "Launch ".concat(bucketName).concat(regionPostfix);
  }

  if (webApp && region) {
    return "Launch a web app ".concat(regionPostfix);
  }

  if (!webApp && region) {
    var aclText = shared ? 'public' : 'private';
    return "Host ".concat(aclText, " files in ").concat(regionPostfix);
  }

  return undefined;
};

/* harmony default export */ __webpack_exports__["default"] = (Infrastructure);

/***/ }),

/***/ "./utils/splitbee.ts":
/*!***************************!*\
  !*** ./utils/splitbee.ts ***!
  \***************************/
/*! exports provided: trail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trail", function() { return trail; });
var trail = function trail(name, data) {
  // @ts-ignore
  if (!window || !window.splitbee) {
    // eslint-disable-next-line no-console
    console.log('No splitbee');
  } // @ts-ignore
  // eslint-disable-next-line no-console


  console.log('track', name, data); // eslint-disable-next-line
  //window.splitbee.track(name, data);
};

/***/ })

})
//# sourceMappingURL=index.js.0be9ada358fe2bee2515.hot-update.js.map