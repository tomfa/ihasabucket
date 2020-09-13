webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Infrastructure/LoadingIcon.tsx":
/*!***************************************************!*\
  !*** ./components/Infrastructure/LoadingIcon.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/Infrastructure/LoadingIcon.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Svg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].svg.withConfig({
  displayName: "LoadingIcon__Svg",
  componentId: "sc-39keo9-0"
})(["margin:auto;display:block;shape-rendering:auto;& path{fill:", ";}"], function (p) {
  return p.theme.colors.primary;
});

var LoadingIcon = function LoadingIcon(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 300 : _ref$size;
  return __jsx(Svg, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "".concat(size, "px"),
    height: "".concat(size, "px"),
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, __jsx("g", {
    transform: "translate(50 50)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("g", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    values: "0;45",
    keyTimes: "0;1",
    dur: "0.2s",
    repeatCount: "indefinite",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 24.742744050198738 16.964569457146712 L24.742744050198738 16.964569457146712 L30.399598299691117 22.621423706639092 L22.621423706639096 30.399598299691114 L16.964569457146716 24.742744050198734 A30 30 0 0 1 5.5 29.491524206117255 L5.5 29.491524206117255 L5.5 37.491524206117255 L-5.499999999999997 37.491524206117255 L-5.499999999999997 29.491524206117255 A30 30 0 0 1 -16.964569457146705 24.742744050198738 L-16.964569457146705 24.742744050198738 L-22.621423706639085 30.399598299691117 L-30.399598299691117 22.621423706639092 L-24.742744050198738 16.964569457146712 A30 30 0 0 1 -29.491524206117255 5.500000000000009 L-29.491524206117255 5.500000000000009 L-37.491524206117255 5.50000000000001 L-37.491524206117255 -5.500000000000001 L-29.491524206117255 -5.500000000000002 A30 30 0 0 1 -24.742744050198738 -16.964569457146705 L-24.742744050198738 -16.964569457146705 L-30.399598299691117 -22.621423706639085 L-22.621423706639092 -30.399598299691117 L-16.964569457146712 -24.742744050198738 A30 30 0 0 1 -5.500000000000011 -29.491524206117255 L-5.500000000000011 -29.491524206117255 L-5.500000000000012 -37.491524206117255 L5.499999999999998 -37.491524206117255 L5.5 -29.491524206117255 A30 30 0 0 1 16.964569457146702 -24.74274405019874 L16.964569457146702 -24.74274405019874 L22.62142370663908 -30.39959829969112 L30.399598299691117 -22.6214237066391 L24.742744050198738 -16.964569457146716 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingIcon);

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


var _jsxFileName = "/Users/tomfa/repos/s3launchpad/pages/index.tsx",
    _this2 = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function Home() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_utils_questions__WEBPACK_IMPORTED_MODULE_7__["generateDefaultRadioSelectedOptions"])(_utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"])),
      selectedRadioOptions = _useState[0],
      setSelectedRadioOptions = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_utils_questions__WEBPACK_IMPORTED_MODULE_7__["generateDefaultCheckboxSelectedOptions"])(_utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"])),
      selectedCheckboxOptions = _useState2[0],
      setSelectedCheckboxOptions = _useState2[1];

  var hasSelected = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (questionId, value) {
    var question = _utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"].find(function (q) {
      return q.id === questionId;
    });

    if (!question) {
      throw Error("Missing question for ".concat(questionId));
    }

    if (!question.options.filter(function (o) {
      return o.value === value;
    })) {
      throw Error("Question ".concat(questionId, " does not have option ").concat(value));
    }

    if (question.type === 'radio') {
      var _selectedRadioOptions;

      return ((_selectedRadioOptions = selectedRadioOptions[question.id]) === null || _selectedRadioOptions === void 0 ? void 0 : _selectedRadioOptions.value) === value;
    }

    if (question.type === 'checkbox') {
      return !!selectedCheckboxOptions[question.id].find(function (o) {
        return o.value === value;
      });
    }
  }, [selectedRadioOptions, selectedCheckboxOptions, _utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"]]);
  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["PageWrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(_components_HeaderSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), __jsx(Intro, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, _utils_questions__WEBPACK_IMPORTED_MODULE_7__["questions"].map(function (question) {
    if (question.type === 'radio') {
      return __jsx(_components_forms_RadioGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: question.id,
        key: question.id,
        options: question.options,
        selectedOption: selectedRadioOptions[question.id] || null,
        onChange: function onChange(value) {
          return setSelectedRadioOptions(function (prev) {
            return _objectSpread({}, prev, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, question.id, value));
          });
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
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
          return setSelectedCheckboxOptions(function (prev) {
            return _objectSpread({}, prev, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, question.id, value));
          });
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 15
        }
      });
    }

    throw new Error("Unexpected question type ".concat(question.type));
  })), __jsx(_components_Infrastructure__WEBPACK_IMPORTED_MODULE_8__["default"], {
    webApp: hasSelected(_enums__WEBPACK_IMPORTED_MODULE_9__["QUESTION_ID"].storageType, 'webapp'),
    shared: hasSelected(_enums__WEBPACK_IMPORTED_MODULE_9__["QUESTION_ID"].aclPublic, _enums__WEBPACK_IMPORTED_MODULE_9__["BOOL_VALUE"].TRUE),
    staging: hasSelected(_enums__WEBPACK_IMPORTED_MODULE_9__["QUESTION_ID"].stagingEnv, _enums__WEBPACK_IMPORTED_MODULE_9__["BOOL_VALUE"].TRUE),
    staticPage: hasSelected(_enums__WEBPACK_IMPORTED_MODULE_9__["QUESTION_ID"].webappIsStatic, _enums__WEBPACK_IMPORTED_MODULE_9__["BOOL_VALUE"].TRUE),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }));
}

var Intro = function Intro() {
  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 3
    }
  }, __jsx(_components_BlockQuote__WEBPACK_IMPORTED_MODULE_4__["default"], {
    author: 'Lolrus, the bucket walrus',
    source: 'At the launch of AWS S3 in 2006',
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Hosting a", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 18
    }
  }, " webapp "), "or need to store uploads? Put them in S3 buckets. It's", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, " cheap "), "and", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, " reliable"), ". With CloudFront cache, it'll be blazingly ", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 19
    }
  }, "fast"), ". Let's see how", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, " easy "), "it can be.")));
};

var Questionare = function Questionare() {};

/***/ })

})
//# sourceMappingURL=index.js.4b87871772c5f7a0a46f.hot-update.js.map