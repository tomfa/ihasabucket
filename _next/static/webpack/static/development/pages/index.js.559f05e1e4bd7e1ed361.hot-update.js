webpackHotUpdate("static/development/pages/index.js",{

/***/ "./enums.ts":
/*!******************!*\
  !*** ./enums.ts ***!
  \******************/
/*! exports provided: VALUES, QUESTION_ID, BOOL_VALUE, INPUT, getInputDescription, BUCKET_TYPE, getOutput, AWS_REGIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALUES", function() { return VALUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_ID", function() { return QUESTION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOL_VALUE", function() { return BOOL_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT", function() { return INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputDescription", function() { return getInputDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCKET_TYPE", function() { return BUCKET_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOutput", function() { return getOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWS_REGIONS", function() { return AWS_REGIONS; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


/* eslint-disable no-shadow */
var VALUES;

(function (VALUES) {
  VALUES[VALUES["NOT_EMPTY"] = 0] = "NOT_EMPTY";
})(VALUES || (VALUES = {}));

var QUESTION_ID;

(function (QUESTION_ID) {
  QUESTION_ID["createCertificates"] = "create-certificates";
  QUESTION_ID["bucketName"] = "bucket";
  QUESTION_ID["storageType"] = "storage";
  QUESTION_ID["webappIsStatic"] = "static";
  QUESTION_ID["aclPublic"] = "public";
  QUESTION_ID["configureDns"] = "configure-dns";
  QUESTION_ID["stagingEnv"] = "staging";
  QUESTION_ID["region"] = "region";
})(QUESTION_ID || (QUESTION_ID = {}));

var BOOL_VALUE;

(function (BOOL_VALUE) {
  BOOL_VALUE["FALSE"] = "false";
  BOOL_VALUE["TRUE"] = "true";
})(BOOL_VALUE || (BOOL_VALUE = {}));

var INPUT;

(function (INPUT) {
  INPUT["BUCKET_NAME"] = "bucket_name";
  INPUT["AWS_REGION"] = "aws_region";
  INPUT["AWS_ACCESS_KEY"] = "aws_access_key";
  INPUT["AWS_SECRET_KEY"] = "aws_secret_key";
  INPUT["ACL"] = "acl";
  INPUT["ERROR_RESPONSE_CODE"] = "error_response_code";
  INPUT["ERROR_RESPONSE_PATH"] = "error_response_path";
})(INPUT || (INPUT = {}));

var getInputDescription = function getInputDescription(input) {
  var _INPUT$BUCKET_NAME$IN;

  return (_INPUT$BUCKET_NAME$IN = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_INPUT$BUCKET_NAME$IN, INPUT.BUCKET_NAME, 'Name of S3 bucket'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_INPUT$BUCKET_NAME$IN, INPUT.AWS_REGION, 'Region to deploy to, e.g. eu-north-1, us-east-1'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_INPUT$BUCKET_NAME$IN, INPUT.AWS_ACCESS_KEY, 'e.g. AKIA... found in your AWS console > Security credentials'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_INPUT$BUCKET_NAME$IN, INPUT.AWS_SECRET_KEY, 'e.g. yaAS$1... found in your AWS console > Security credentials'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_INPUT$BUCKET_NAME$IN, INPUT.ACL, 'e.g. AKIA... found in your AWS console > Security credentials'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_INPUT$BUCKET_NAME$IN, INPUT.ERROR_RESPONSE_CODE, 'e.g. HTTP status code response when no file matching path is found'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_INPUT$BUCKET_NAME$IN, INPUT.ERROR_RESPONSE_PATH, 'e.g. Which file Cloudfront serves when encountering a missing file'), _INPUT$BUCKET_NAME$IN)[input];
};
var BUCKET_TYPE;

(function (BUCKET_TYPE) {
  BUCKET_TYPE["WEBAPP"] = "web-app";
  BUCKET_TYPE["FILE_STORAGE"] = "file-storage";
})(BUCKET_TYPE || (BUCKET_TYPE = {}));

var getOutput = function getOutput(_ref) {
  var bucketType = _ref.bucketType,
      hasStaging = _ref.hasStaging;
  var outputs = [];
  var bucketNames = hasStaging ? ["".concat(bucketType, "-production"), "".concat(bucketType, "-staging")] : [bucketType];
  bucketNames.forEach(function (name) {
    var stageName = hasStaging && name.split('-')[name.split('-').length - 1];
    var prefix = stageName ? "".concat(stageName, ".") : '';
    outputs.push({
      value: "module.".concat(name, ".AWS_SECRET_ACCESS_KEY"),
      label: "".concat(prefix, "AWS_SECRET_ACCESS_KEY")
    });
    outputs.push({
      value: "module.".concat(name, ".AWS_ACCESS_KEY_ID"),
      label: "".concat(prefix, "AWS_ACCESS_KEY_ID")
    });
    outputs.push({
      value: "module.".concat(name, ".BUCKET_NAME"),
      label: "".concat(prefix, "BUCKET_NAME")
    });

    if (bucketType === BUCKET_TYPE.WEBAPP) {
      outputs.push({
        value: "module.".concat(name, ".CLOUDFRONT_URL"),
        label: "".concat(prefix, "CLOUDFRONT_URL")
      });
    }
  });
  return outputs;
};
var AWS_REGIONS;

(function (AWS_REGIONS) {
  AWS_REGIONS["US_EAST_2"] = "us-east-2";
  AWS_REGIONS["US_EAST_1"] = "us-east-1";
  AWS_REGIONS["US_WEST_1"] = "us-west-1";
  AWS_REGIONS["US_WEST_2"] = "us-west-2";
  AWS_REGIONS["AF_SOUTH_1"] = "af-south-1";
  AWS_REGIONS["AP_EAST_1"] = "ap-east-1";
  AWS_REGIONS["AP_SOUTH_1"] = "ap-south-1";
  AWS_REGIONS["AP_NORTHEAST_3"] = "ap-northeast-3";
  AWS_REGIONS["AP_NORTHEAST_2"] = "ap-northeast-2";
  AWS_REGIONS["AP_SOUTHEAST_1"] = "ap-southeast-1";
  AWS_REGIONS["AP_SOUTHEAST_2"] = "ap-southeast-2";
  AWS_REGIONS["AP_NORTHEAST_1"] = "ap-northeast-1";
  AWS_REGIONS["CA_CENTRAL_1"] = "ca-central-1";
  AWS_REGIONS["CN_NORTH_1"] = "cn-north-1";
  AWS_REGIONS["CN_NORTHWEST_1"] = "cn-northwest-1";
  AWS_REGIONS["EU_CENTRAL_1"] = "eu-central-1";
  AWS_REGIONS["EU_WEST_1"] = "eu-west-1";
  AWS_REGIONS["EU_WEST_2"] = "eu-west-2";
  AWS_REGIONS["EU_SOUTH_1"] = "eu-south-1";
  AWS_REGIONS["EU_WEST_3"] = "eu-west-3";
  AWS_REGIONS["EU_NORTH_1"] = "eu-north-1";
  AWS_REGIONS["SA_EAST_1"] = "sa-east-1";
  AWS_REGIONS["ME_SOUTH_1"] = "me-south-1";
})(AWS_REGIONS || (AWS_REGIONS = {}));

/***/ }),

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
  id: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].bucketName,
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
    questionId: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].bucketName,
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
    questionId: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].bucketName,
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
/* harmony import */ var _utils_useUrlState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useUrlState */ "./utils/useUrlState.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./questions/utils.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./questions/data.ts");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var useQuestions = function useQuestions() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      answeredQuestions = _useState[0],
      setAnsweredQuestions = _useState[1];

  var _useUrlState = Object(_utils_useUrlState__WEBPACK_IMPORTED_MODULE_3__["useUrlState"])(),
      urlData = _useUrlState.urlData,
      updateUrlData = _useUrlState.updateUrlData;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      answers = _useState2[0],
      setAnswers = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (answeredQuestions.length > 0) {
      return;
    }

    var defaultAnswers = _data__WEBPACK_IMPORTED_MODULE_5__["questions"].reduce(function (map, question) {
      return _objectSpread({}, map, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, question.id, Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getDefaultAnswer"])(question, String(urlData[question.id]))));
    }, {});
    setAnsweredQuestions(Object.keys(urlData));
    var hasChanged = JSON.stringify(defaultAnswers) !== JSON.stringify(answers);

    if (hasChanged) {
      setAnswers(defaultAnswers);
    }
  }, [urlData, answeredQuestions]);
  var renderQuestions = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getQuestionsToRender"])(answers, answeredQuestions);
  }, [answeredQuestions, answers]);
  var hasAnsweredAll = !renderQuestions.find(function (q) {
    return !answeredQuestions.includes(q.id);
  });
  var answerQuestion = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (questionId, answer) {
    updateUrlData(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, String(questionId), Object(_utils__WEBPACK_IMPORTED_MODULE_4__["normalizeAnswer"])(answer)));
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
    bucketName: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_8__["getNormalizedAnswer"])(answers, _enums__WEBPACK_IMPORTED_MODULE_5__["QUESTION_ID"].bucketName),
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
//# sourceMappingURL=index.js.559f05e1e4bd7e1ed361.hot-update.js.map