webpackHotUpdate("static/development/pages/index.js",{

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

  console.log('DEFAULT');
  console.log(question);
  return question.options.find(function (o) {
    return o.value === question.defaultValue;
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

/***/ })

})
//# sourceMappingURL=index.js.fe162ea03a6afbd0c39c.hot-update.js.map