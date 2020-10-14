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
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conditions */ "./questions/conditions.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var questions = [{
  id: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].bucketName,
  title: '',
  type: _types__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].TEXT,
  placeholders: ['mydomain.com', 'uploads.mydomain.com', 'staging.mydomain.com', 'www.mydomain.com', 'test.mydomain.com', 'uploads.mydomain.com'],
  description: "We will use this as the S3 bucket name. The bucket name is permanent, but it doesn't have to match an actual domain. It does however have to be unique on S3, so \"example\" or \"my-bucket\" will not work. If you leave it empty, you'll be prompted for a bucket name at deploy time."
}, {
  id: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].configureDns,
  title: 'Should we set up DNS pointers?',
  type: _types__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].RADIO,
  description: 'Should we setup DNS pointers and certificates for your domain? (Recommended). AWS Route 53 costs 0.5$ / month. If you select Yes, we will output the AWS DNS server urls after setting up the infrastructure. You must point to these servers from your registrar to enable them. If you select No, we will output AWS domain urls for the S3 bucket / Cloudfront, so you can set DNS up yourself.',
  options: [{
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].TRUE,
    label: 'Yes, please do.'
  }, {
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].FALSE,
    label: "No, I'll handle DNS manually."
  }],
  showIf: [{
    questionId: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].bucketName,
    value: _conditions__WEBPACK_IMPORTED_MODULE_3__["answerIsDomain"]
  }]
}, {
  id: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].createCertificates,
  title: 'What about certificates (HTTPS)?',
  type: _types__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].RADIO,
  description: "Even though we don't set up DNS in AWS, we can create certificates for the domain. This is free, but will require you to set up a DNS record manually to verify the domain ownership..",
  options: [{
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].TRUE,
    label: 'Yes, please create one.'
  }, {
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].FALSE,
    label: "No thanks."
  }],
  showIf: [{
    questionId: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].bucketName,
    value: _conditions__WEBPACK_IMPORTED_MODULE_3__["answerIsDomain"]
  }, {
    questionId: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].configureDns,
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].FALSE
  }]
}, {
  id: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].apexForwarding,
  title: 'Forward apex to www?',
  type: _types__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].RADIO,
  description: 'It looks like your domain name is a www domain. (e.g. www.mydomain.com). Click Yes if you want to forward the apex domain (e.g. mydomain.com) to www (e.g. www.mydomain.com)',
  options: [{
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].TRUE,
    label: 'Yes, forward my apex domain to www.'
  }, {
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].FALSE,
    label: "No thanks."
  }],
  showIf: [{
    questionId: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].bucketName,
    value: _conditions__WEBPACK_IMPORTED_MODULE_3__["answerIsWWWDomain"]
  }, {
    questionId: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].configureDns,
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].TRUE
  }]
}, {
  id: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].wwwForwarding,
  title: 'Forward www to apex?',
  type: _types__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].RADIO,
  description: 'It looks like your domain name is an apex domain (e.g. mydomain.com). Click Yes if you want to forward the www domain (e.g. www.mydomain.com) to the apex domain.',
  options: [{
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].TRUE,
    label: 'Yes, forward www to apex domain.'
  }, {
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].FALSE,
    label: "No thanks."
  }],
  showIf: [{
    questionId: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].bucketName,
    value: _conditions__WEBPACK_IMPORTED_MODULE_3__["answerIsApexDomain"]
  }, {
    questionId: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].configureDns,
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].TRUE
  }]
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
  id: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].errorPath,
  title: "What's the \"Not found\" path?",
  type: _types__WEBPACK_IMPORTED_MODULE_2__["QuestionType"].TEXT,
  defaultValue: '404',
  placeholder: '404',
  description: '"404" would work with a /404.html or /404/index.html file. This path will be rendered in cases when the file is not found.',
  showIf: [{
    questionId: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].webappIsStatic,
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].TRUE
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

/***/ })

})
//# sourceMappingURL=index.js.6ba2d7140fd9b6186f6a.hot-update.js.map