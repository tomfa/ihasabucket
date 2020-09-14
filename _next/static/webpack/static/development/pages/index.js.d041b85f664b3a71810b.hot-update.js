webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Infrastructure/utils.ts":
/*!********************************************!*\
  !*** ./components/Infrastructure/utils.ts ***!
  \********************************************/
/*! exports provided: getTerraFormPackage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTerraFormPackage", function() { return getTerraFormPackage; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums */ "./enums.ts");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var getMainTfContent = function getMainTfContent(_ref) {
  var webApp = _ref.webApp,
      staging = _ref.staging,
      shared = _ref.shared,
      staticPage = _ref.staticPage,
      region = _ref.region,
      bucketName = _ref.bucketName;
  var source = webApp ? 'git::https://github.com/tomfa/terraform.git//webapp' : 'git::https://github.com/tomfa/terraform.git//files';
  var parameters = {
    bucket_name: bucketName ? "\"".concat(bucketName, "\"") : "var.".concat(_enums__WEBPACK_IMPORTED_MODULE_2__["INPUT"].BUCKET_NAME),
    aws_region: region ? "\"".concat(_enums__WEBPACK_IMPORTED_MODULE_2__["AWS_REGIONS"][region], "\"") : "var.".concat(_enums__WEBPACK_IMPORTED_MODULE_2__["INPUT"].AWS_REGION)
  };

  if (webApp) {
    parameters.error_path = '"/index.html"';
    parameters.error_code = staticPage ? '404' : '200';
  } else {
    parameters.acl = shared ? '"public-read"' : '"private"';
  }

  var genericBucketName = webApp ? 'web-app' : 'file-storage';
  var modules = staging ? [{
    name: "".concat(genericBucketName, "-production"),
    parameters: parameters
  }, {
    name: "".concat(genericBucketName, "-staging"),
    parameters: _objectSpread({}, parameters, {
      bucket_name: bucketName ? "\"".concat(bucketName, ".staging\"") : "\"\\${var.bucket_name}.staging\""
    })
  }] : [{
    name: genericBucketName,
    parameters: parameters
  }];
  var lines = [];

  var isUsed = function isUsed(inputVariable) {
    return !!modules.find(function (m) {
      return !!Object.values(m.parameters).find(function (p) {
        return p.includes("var.".concat(inputVariable));
      });
    });
  };

  Object.values(_enums__WEBPACK_IMPORTED_MODULE_2__["INPUT"]).filter(isUsed).forEach(function (input) {
    var description = Object(_enums__WEBPACK_IMPORTED_MODULE_2__["getInputDescription"])(input);

    if (!description) {
      lines.push("variable \"".concat(input, "\" {}"));
    } else {
      lines.push("variable \"".concat(input, "\" {"));
      lines.push("  description = \"".concat(description, "\""));
      lines.push("}");
    }
  });
  modules.forEach(function (module) {
    lines.push('');
    lines.push("module \"".concat(module.name, "\" {"));
    lines.push("  source = \"".concat(source, "\""));
    Object.entries(module.parameters).forEach(function (_ref2) {
      var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1];

      lines.push("  ".concat(key, " = ").concat(value));
    });
    lines.push("}");
  });
  lines.push('');
  Object(_enums__WEBPACK_IMPORTED_MODULE_2__["getOutput"])({
    bucketType: webApp ? _enums__WEBPACK_IMPORTED_MODULE_2__["BUCKET_TYPE"].WEBAPP : _enums__WEBPACK_IMPORTED_MODULE_2__["BUCKET_TYPE"].FILE_STORAGE,
    hasStaging: staging
  }).forEach(function (output) {
    lines.push("output \"".concat(output.label, "\" {"));
    lines.push("  value = ".concat(output.value));
    lines.push('}');
  });
  return lines;
};

var getTerraPackageDescription = function getTerraPackageDescription(_ref4) {
  var webApp = _ref4.webApp,
      staging = _ref4.staging,
      shared = _ref4.shared,
      staticPage = _ref4.staticPage,
      region = _ref4.region;
  var count = staging ? 'two sets of' : 'a';
  var usecase = getUseCaseDescription({
    webApp: webApp,
    staticPage: staticPage,
    shared: shared
  });
  var iamUserInfo = staging ? 'Two sets of AWS keys will be created that are able to upload to the buckets. One for test and one for production environment' : 'A set of AWS keys will be created that is able to upload to the bucket';
  return "Once run, it will create ".concat(count, " S3 bucket").concat(webApp ? ' + Cloudfront' : '', " in ").concat(region, ", configured ").concat(usecase, ". ").concat(iamUserInfo, ". Generated keys will be shown as output in the terminal.");
};

var getUseCaseDescription = function getUseCaseDescription(_ref5) {
  var webApp = _ref5.webApp,
      staticPage = _ref5.staticPage,
      shared = _ref5.shared;

  if (webApp) {
    if (staticPage) {
      return 'to serve a solid statically generated web app';
    }

    return 'to serve a blazingly fast single-page web app';
  }

  if (shared) {
    return 'for hosting publicly available files';
  }

  return 'for storing and serving files for authorized requests';
};

var getTerraFormPackage = function getTerraFormPackage(props) {
  return {
    mainTfContent: getMainTfContent(props),
    description: getTerraPackageDescription(props)
  };
};

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
          lineNumber: 204,
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
      lineNumber: 226,
      columnNumber: 9
    }
  }));
};

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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums */ "./enums.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./types.ts");



var _questionData;



var questionData = (_questionData = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_questionData, _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].domainName, {
  id: _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].domainName,
  title: "Your domain",
  type: _types__WEBPACK_IMPORTED_MODULE_3__["QuestionType"].TEXT,
  placeholder: 'mydomain.store',
  description: "We will use this as the S3 bucket name. The bucket name is permanent, but it doesn't have to match an actual domain. It does however have to be unique on S3, so \"example\" or \"my-bucket\" will not work. If you leave it empty, you'll be prompted for a bucket name at deploy time."
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_questionData, _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].storageType, {
  id: _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].storageType,
  title: 'What are we storing?',
  type: _types__WEBPACK_IMPORTED_MODULE_3__["QuestionType"].RADIO,
  description: 'Unlike normal file storage, webapps like React and Vue have a default path, and error pages.',
  options: [{
    value: 'webapp',
    label: 'A webapp'
  }, {
    value: 'files',
    label: 'Static files or media uploads'
  }]
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_questionData, _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].webappIsStatic, {
  id: _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].webappIsStatic,
  title: 'Is the web app statically generated?',
  type: _types__WEBPACK_IMPORTED_MODULE_3__["QuestionType"].RADIO,
  description: 'Statically generated sites can be optimized for search engines by returning correct HTTP status codes. If you are uncertain, select No.',
  options: [{
    value: _enums__WEBPACK_IMPORTED_MODULE_2__["BOOL_VALUE"].TRUE,
    label: 'Yes (e.g. Next, Gatsby, Nuxt)'
  }, {
    value: _enums__WEBPACK_IMPORTED_MODULE_2__["BOOL_VALUE"].FALSE,
    label: 'No (e.g. plain Vue or React)'
  }],
  showIf: [{
    questionId: _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].storageType,
    value: 'webapp'
  }]
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_questionData, _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].aclPublic, {
  id: _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].aclPublic,
  title: 'Should content be publicly available?',
  type: _types__WEBPACK_IMPORTED_MODULE_3__["QuestionType"].RADIO,
  description: 'If our files hold secret or personal information, we will need a stricter security policy than if we are storing publicly available files, e.g. media files for a CMS.',
  options: [{
    value: _enums__WEBPACK_IMPORTED_MODULE_2__["BOOL_VALUE"].TRUE,
    label: 'Yes, make files public'
  }, {
    value: _enums__WEBPACK_IMPORTED_MODULE_2__["BOOL_VALUE"].FALSE,
    label: 'No, let me control access to the files'
  }],
  showIf: [{
    questionId: _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].storageType,
    value: 'files'
  }]
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_questionData, _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].configureDns, {
  id: _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].configureDns,
  title: 'Should AWS set up DNS pointers?',
  type: _types__WEBPACK_IMPORTED_MODULE_3__["QuestionType"].RADIO,
  description: 'Should we setup DNS pointers for your domain? (Recommended). Route 53 costs 1.5$ / month',
  options: [{
    value: _enums__WEBPACK_IMPORTED_MODULE_2__["BOOL_VALUE"].TRUE,
    label: 'Yes, please do'
  }, {
    value: _enums__WEBPACK_IMPORTED_MODULE_2__["BOOL_VALUE"].FALSE,
    label: "No, I'll set up DNS afterwards"
  }],
  showIf: [{
    questionId: _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].domainName,
    value: _enums__WEBPACK_IMPORTED_MODULE_2__["VALUES"].NOT_EMPTY
  }]
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_questionData, _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].createCertificates, {
  id: _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].createCertificates,
  title: 'Should AWS create certificates to support the domain?',
  type: _types__WEBPACK_IMPORTED_MODULE_3__["QuestionType"].RADIO,
  description: 'AWS can create HTTPS certificates for us. This is recommended and free of charge.',
  options: [{
    value: _enums__WEBPACK_IMPORTED_MODULE_2__["BOOL_VALUE"].TRUE,
    label: 'Please do'
  }, {
    value: _enums__WEBPACK_IMPORTED_MODULE_2__["BOOL_VALUE"].FALSE,
    label: 'No, I`ll configure certificates myself'
  }],
  showIf: [{
    questionId: _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].domainName,
    value: _enums__WEBPACK_IMPORTED_MODULE_2__["VALUES"].NOT_EMPTY
  }, {
    questionId: _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].configureDns,
    value: _enums__WEBPACK_IMPORTED_MODULE_2__["BOOL_VALUE"].FALSE
  }]
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_questionData, _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].region, {
  id: _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].region,
  title: 'In what region do you want to host the buckets?',
  type: _types__WEBPACK_IMPORTED_MODULE_3__["QuestionType"].DROPDOWN,
  defaultValue: _enums__WEBPACK_IMPORTED_MODULE_2__["AWS_REGIONS"].EU_NORTH_1,
  description: 'A region closer to your users can give an extra performance boost.',
  options: Object.entries(_enums__WEBPACK_IMPORTED_MODULE_2__["AWS_REGIONS"]).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
        value = _ref2[0],
        label = _ref2[1];

    return {
      value: value,
      label: label
    };
  })
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_questionData, _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].stagingEnv, {
  id: _enums__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ID"].stagingEnv,
  title: 'Want a test environment?',
  type: _types__WEBPACK_IMPORTED_MODULE_3__["QuestionType"].RADIO,
  description: "A staging (or test) environment would mean a duplicate set of buckets. If you're uncertain, select No. You can always create a staging environment later.",
  options: [{
    value: _enums__WEBPACK_IMPORTED_MODULE_2__["BOOL_VALUE"].TRUE,
    label: 'Yes, please create a separate set of buckets for testing'
  }, {
    value: _enums__WEBPACK_IMPORTED_MODULE_2__["BOOL_VALUE"].FALSE,
    label: "No, I won't need that"
  }]
}), _questionData);
/* harmony default export */ __webpack_exports__["default"] = (questionData);

/***/ })

})
//# sourceMappingURL=index.js.d041b85f664b3a71810b.hot-update.js.map