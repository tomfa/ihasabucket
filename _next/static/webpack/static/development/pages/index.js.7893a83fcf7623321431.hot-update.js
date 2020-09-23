webpackHotUpdate("static/development/pages/index.js",{

/***/ "./questions/data.ts":
false,

/***/ "./questions/useQuestions.ts":
false,

/***/ "./questions/utils.ts":
false,

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
/* harmony import */ var _utils_terraform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/terraform */ "./utils/terraform.ts");
/* harmony import */ var _components_code_Pre_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/code/Pre.style */ "./components/code/Pre.style.tsx");
/* harmony import */ var _components_Mute_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Mute.style */ "./components/Mute.style.tsx");
/* harmony import */ var _components_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/icons/LoadingIcon */ "./components/icons/LoadingIcon.tsx");
/* harmony import */ var _components_code_Code__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/code/Code */ "./components/code/Code.tsx");
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
    setTimeout(function () {
      return setLoading(false);
    }, 800);
  }, [mainTfContent]);

  if (loading) {
    return __jsx(_components_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 12
      }
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: 'h1',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "Bucket is served!"), "Just run the script below!", __jsx(_components_code_Code__WEBPACK_IMPORTED_MODULE_7__["default"], {
    bucketName: props.bucketName,
    mainTfContent: mainTfContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx(_components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "The script above will plan the infrastructure and prompt you for confirmation."), __jsx(_components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, description), __jsx(_components_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }, "AWS_ACCESS_KEY_ID"), " handy, find those in the top right corner under your name > Security credentials. They should be exported to your environment:", __jsx(_components_code_Pre_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(_components_Mute_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "# Export AWS keys", '\n'), "export AWS_SECRET_ACCESS_KEY=yaAS$1...", '\n', "export AWS_ACCESS_KEY_ID=AKIA...")), __jsx("h4", {
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
  }, "install Terraform"), "\n", __jsx(_components_code_Pre_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(_components_Mute_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, "# For Macs with homebrew", '\n'), "brew install hashicorp/tap/terraform"), __jsx(_components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, "See", ' ', __jsx("a", {
    href: "https://learn.hashicorp.com/tutorials/terraform/install-cli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, "learn.hashicorp.com/tutorials/terraform/install-cli"), ' ', "for other platforms.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Infrastructure);

/***/ }),

/***/ "./sections/Questionare.tsx":
/*!**********************************!*\
  !*** ./sections/Questionare.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/utils */ "./components/utils.tsx");
/* harmony import */ var _components_forms_RadioGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/forms/RadioGroup */ "./components/forms/RadioGroup.tsx");
/* harmony import */ var _components_forms_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/forms/CheckboxGroup */ "./components/forms/CheckboxGroup.tsx");
/* harmony import */ var _utils_questions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/questions */ "./utils/questions.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums */ "./enums.ts");
/* harmony import */ var _components_forms_TextInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/forms/TextInput */ "./components/forms/TextInput.tsx");
/* harmony import */ var _components_forms_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/forms/Dropdown */ "./components/forms/Dropdown.tsx");
/* harmony import */ var _utils_questionData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/questionData */ "./utils/questionData.ts");
/* harmony import */ var _Infrastructure__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Infrastructure */ "./sections/Infrastructure.tsx");
/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/urls */ "./utils/urls.ts");


var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/sections/Questionare.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var Questionare = function Questionare() {
  var _useUrlState = Object(_utils_urls__WEBPACK_IMPORTED_MODULE_11__["useUrlState"])(),
      urlData = _useUrlState.urlData,
      updateUrlData = _useUrlState.updateUrlData;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(urlData);
  }, [urlData]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_utils_questions__WEBPACK_IMPORTED_MODULE_5__["generateDefaultRadioSelectedOptions"])(_utils_questions__WEBPACK_IMPORTED_MODULE_5__["questions"])),
      selectedRadioOptions = _useState[0],
      setRadioAnswers = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_utils_questions__WEBPACK_IMPORTED_MODULE_5__["generateDefaultCheckboxSelectedOptions"])(_utils_questions__WEBPACK_IMPORTED_MODULE_5__["questions"])),
      selectedCheckboxOptions = _useState2[0],
      setCheckboxAnswers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      textAnswers = _useState3[0],
      setTextAnswers = _useState3[1];

  var setTextAnswer = function setTextAnswer(questionId, value) {
    setTextAnswers(function (prev) {
      return _objectSpread({}, prev, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, questionId, value));
    });
    updateUrlData(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, questionId, value));
  };

  var setRadioAnswer = function setRadioAnswer(questionId, option) {
    setRadioAnswers(function (prev) {
      return _objectSpread({}, prev, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, questionId, option));
    });
    updateUrlData(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, questionId, option.value));
  };

  var setCheckboxAnswer = function setCheckboxAnswer(questionId, options) {
    setCheckboxAnswers(function (prev) {
      return _objectSpread({}, prev, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, questionId, options));
    });
    updateUrlData(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, questionId, options.map(function (o) {
      return o.value;
    })));
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      questionRenderCount = _useState4[0],
      setQuestionRenderCount = _useState4[1];

  var hasSelected = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (questionId, value) {
    if (value === _enums__WEBPACK_IMPORTED_MODULE_6__["VALUES"].NOT_EMPTY) {
      return hasAnswered(questionId);
    }

    var question = _utils_questions__WEBPACK_IMPORTED_MODULE_5__["questions"].find(function (q) {
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
  }, [selectedRadioOptions, selectedCheckboxOptions, _utils_questions__WEBPACK_IMPORTED_MODULE_5__["questions"]]);

  var getTextAnswer = function getTextAnswer(question) {
    return textAnswers[question.id];
  };

  var getRadioAnswer = function getRadioAnswer(question) {
    return selectedRadioOptions[question.id];
  };

  var hasAnswered = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (questionId) {
    var question = _utils_questions__WEBPACK_IMPORTED_MODULE_5__["questions"].find(function (q) {
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
  }, [selectedRadioOptions, selectedCheckboxOptions, _utils_questions__WEBPACK_IMPORTED_MODULE_5__["questions"]]);
  var shouldSkip = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (question) {
    return question.showIf && !!question.showIf.find(function (c) {
      return !hasSelected(c.questionId, c.value);
    });
  }, [hasSelected]);
  var hasAnsweredAll = !_utils_questions__WEBPACK_IMPORTED_MODULE_5__["questions"].find(function (q) {
    return !hasAnswered(q.id) && !shouldSkip(q);
  });
  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, _utils_questions__WEBPACK_IMPORTED_MODULE_5__["questions"].slice(0, questionRenderCount + 1).map(function (question) {
    var indexOfAllQuestions = _utils_questions__WEBPACK_IMPORTED_MODULE_5__["questions"].indexOf(question);
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
      return __jsx(_components_forms_RadioGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: question.id,
        key: question.id,
        options: question.options,
        selectedOption: answerValue,
        onChange: function onChange(value) {
          setQuestionRenderCount(function (c) {
            return Math.max(c, indexOfAllQuestions + 1);
          });
          setRadioAnswer(question.id, value);
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }
      });
    }

    if (question.type === 'checkbox') {
      return __jsx(_components_forms_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: question.id,
        key: question.id,
        options: question.options,
        selectedOptions: selectedCheckboxOptions[question.id] || [],
        onChange: function onChange(value) {
          setQuestionRenderCount(function (c) {
            return Math.max(c, indexOfAllQuestions + 1);
          });
          setCheckboxAnswer(question.id, value);
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }
      });
    }

    if (question.type === 'text') {
      return __jsx(_components_forms_TextInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: question.id,
        key: question.id,
        placeholder: question.placeholder,
        placeholders: question.placeholders,
        onSubmit: function onSubmit(value) {
          setTextAnswer(question.id, value.trim().toLowerCase());
          setQuestionRenderCount(function (c) {
            return Math.max(c, indexOfAllQuestions + 1);
          });
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 13
        }
      });
    }

    if (question.type === 'dropdown') {
      var _answerValue = selectedRadioOptions[question.id] || null;

      return __jsx(_components_forms_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: question.id,
        key: question.id,
        options: question.options,
        selectedOption: _answerValue,
        onChange: function onChange(value) {
          setRadioAnswer(question.id, value);
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

    throw new Error("Unexpected question type ".concat(question.type));
  }), hasAnsweredAll && __jsx(_Infrastructure__WEBPACK_IMPORTED_MODULE_10__["default"], {
    webApp: hasSelected(_enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].storageType, 'webapp'),
    shared: hasSelected(_enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].aclPublic, _enums__WEBPACK_IMPORTED_MODULE_6__["BOOL_VALUE"].TRUE),
    staging: hasSelected(_enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].stagingEnv, _enums__WEBPACK_IMPORTED_MODULE_6__["BOOL_VALUE"].TRUE),
    staticPage: hasSelected(_enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].webappIsStatic, _enums__WEBPACK_IMPORTED_MODULE_6__["BOOL_VALUE"].TRUE),
    bucketName: getTextAnswer(_utils_questionData__WEBPACK_IMPORTED_MODULE_9__["default"]['domain-name']),
    region: getRadioAnswer(_utils_questionData__WEBPACK_IMPORTED_MODULE_9__["default"][_enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].region]).value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Questionare);

/***/ }),

/***/ "./utils/questionData.ts":
/*!*******************************!*\
  !*** ./utils/questionData.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ "./enums.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./types.ts");


var _questionData;



var questionData = (_questionData = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_questionData, _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].domainName, {
  id: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].domainName,
  title: '',
  type: _types__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].TEXT,
  placeholders: ['mydomain.com', 'uploads.mydomain.com', 'staging.mydomain.com', 'www.mydomain.com', 'test.mydomain.com', 'uploads.mydomain.com'],
  description: "We will use this as the S3 bucket name. The bucket name is permanent, but it doesn't have to match an actual domain. It does however have to be unique on S3, so \"example\" or \"my-bucket\" will not work. If you leave it empty, you'll be prompted for a bucket name at deploy time."
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_questionData, _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].storageType, {
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
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_questionData, _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].webappIsStatic, {
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
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_questionData, _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].aclPublic, {
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
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_questionData, _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].region, {
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
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_questionData, _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].stagingEnv, {
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
}), _questionData);
/* harmony default export */ __webpack_exports__["default"] = (questionData);

/***/ }),

/***/ "./utils/questions.ts":
/*!****************************!*\
  !*** ./utils/questions.ts ***!
  \****************************/
/*! exports provided: generateDefaultRadioSelectedOptions, generateDefaultCheckboxSelectedOptions, getDefaultRadioOption, getDefaultCheckboxOption, questions, questionsMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDefaultRadioSelectedOptions", function() { return generateDefaultRadioSelectedOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDefaultCheckboxSelectedOptions", function() { return generateDefaultCheckboxSelectedOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultRadioOption", function() { return getDefaultRadioOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultCheckboxOption", function() { return getDefaultCheckboxOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questions", function() { return questions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionsMap", function() { return questionsMap; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _questionData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questionData */ "./utils/questionData.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var generateDefaultRadioSelectedOptions = function generateDefaultRadioSelectedOptions(radioQuestions) {
  return radioQuestions.filter(function (q) {
    return q.type === 'radio' || q.type === 'dropdown';
  }).reduce(function (map, question) {
    return _objectSpread({}, map, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, question.id, getDefaultRadioOption(question)));
  }, {});
};
var generateDefaultCheckboxSelectedOptions = function generateDefaultCheckboxSelectedOptions(checkboxQuestions) {
  return checkboxQuestions.filter(function (q) {
    return q.type === 'checkbox';
  }).reduce(function (map, question) {
    return _objectSpread({}, map, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, question.id, getDefaultCheckboxOption(question)));
  }, {});
};
var getDefaultRadioOption = function getDefaultRadioOption(question) {
  if (question.type === 'text') {
    return null;
  }

  return question.options.find(function (o) {
    return (o === null || o === void 0 ? void 0 : o.value) === question.defaultValue;
  }) || null;
};
var getDefaultCheckboxOption = function getDefaultCheckboxOption(question) {
  if (question.type === 'text' || !question.defaultValue) {
    return [];
  }

  if (typeof question.defaultValue === 'string') {
    return question.options.filter(function (o) {
      return o.value === question.defaultValue;
    });
  }

  if (question.defaultValue instanceof Array) {
    return question.options.filter(function (o) {
      return question.defaultValue.includes(o.value);
    });
  }

  return [];
};
var questions = Object.values(_questionData__WEBPACK_IMPORTED_MODULE_1__["default"]);
var questionsMap = _questionData__WEBPACK_IMPORTED_MODULE_1__["default"];

/***/ }),

/***/ "./utils/urls.ts":
/*!***********************!*\
  !*** ./utils/urls.ts ***!
  \***********************/
/*! exports provided: useUrlState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUrlState", function() { return useUrlState; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var useUrlState = function useUrlState() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(getDataFromUrlQuery(router.query)),
      urlData = _useState[0],
      setUrlData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var newData = getDataFromUrlQuery(router.query);
    console.log('LOAD DATA');
    console.log(urlData);

    if (hasChanged(urlData, newData)) {
      console.log('setting it');
      setUrlData(newData);
    }
  }, [JSON.stringify(router.query)]);
  var updateUrlData = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (data) {
    var newData = filterInvalidValues(_objectSpread({}, mapToQuery(urlData), {}, mapToQuery(data)));
    router.push(router.route, newData);
  }, [router.route, urlData]);
  return {
    urlData: urlData,
    updateUrlData: updateUrlData,
    setUrlData: setUrlData
  };
};

var filterInvalidValues = function filterInvalidValues(data) {
  return Object.entries(data).reduce(function (map, _ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (value) {
      return _objectSpread({}, map, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, key, value));
    }

    return map;
  }, {});
};

function valueIsNumber(value) {
  return !Number.isNaN(parseInt(value));
}

var parseToValue = function parseToValue(value) {
  if (value.toLowerCase() === 'false') {
    return false;
  }

  if (value.toLowerCase() === 'true') {
    return true;
  }

  if (valueIsNumber(value)) {
    return parseInt(value);
  }

  return value;
};

var mapToQuery = function mapToQuery(data) {
  return Object.entries(data).reduce(function (map, _ref3) {
    var _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    var stringValue = value instanceof Array ? value.map(function (v) {
      return String(v);
    }) : String(value);
    return _objectSpread({}, map, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, key, stringValue));
  }, {});
};

var getDataFromUrlQuery = function getDataFromUrlQuery(parsedUrlQuery) {
  // Note: This ignores empty string values, e.g. would not support ?webapp
  var urlState = {};
  Object.entries(parsedUrlQuery).forEach(function (_ref5) {
    var _ref6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, 2),
        query = _ref6[0],
        value = _ref6[1];

    if (value) {
      if (value instanceof Array) {
        urlState[query] = value.map(parseToValue);
      } else {
        urlState[query] = parseToValue(value);
      }
    }
  });
  return urlState;
};

var hasChanged = function hasChanged(oldData, newData) {
  // Note: This thinks that '1' === 1 and 'false' === false
  return !!Object.keys(oldData).find(function (key) {
    return String(newData[key]) !== String(oldData[key]);
  });
};

/***/ })

})
//# sourceMappingURL=index.js.7893a83fcf7623321431.hot-update.js.map