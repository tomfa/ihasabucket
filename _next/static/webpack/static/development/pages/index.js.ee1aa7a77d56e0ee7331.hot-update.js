webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Infrastructure/LoadingIcon.tsx":
false,

/***/ "./components/Infrastructure/index.tsx":
/*!*********************************************!*\
  !*** ./components/Infrastructure/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _forms_Description_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forms/Description.style */ "./components/forms/Description.style.tsx");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header.style */ "./components/Header.style.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./components/Infrastructure/utils.ts");
/* harmony import */ var _Pre_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pre.style */ "./components/Infrastructure/Pre.style.tsx");
/* harmony import */ var _List_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./List.style */ "./components/Infrastructure/List.style.tsx");
/* harmony import */ var _ListItem_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ListItem.style */ "./components/Infrastructure/ListItem.style.tsx");
/* harmony import */ var _Mute_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Mute.style */ "./components/Infrastructure/Mute.style.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/Infrastructure/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Infrastructure = function Infrastructure(props) {
  var _getTerraFormPackage = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getTerraFormPackage"])(props),
      url = _getTerraFormPackage.url,
      description = _getTerraFormPackage.description;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: 'h1',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "Create infrastructure"), "If you can has a bucket? Of course you can, my chubby friend \u2764\uFE0F Just run the script below!", __jsx(_Pre_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "terraform apply \\", '\n    ', url), __jsx(_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "The script above will ask you for your AWS keys and desired AWS region."), __jsx(_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, description), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "Prerequisites"), __jsx(_List_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(_ListItem_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "If you don't have an AWS account already, sign up at", ' ', __jsx("a", {
    href: "https://portal.aws.amazon.com/billing/signup#/start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "aws.amazon.com")), __jsx(_ListItem_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "If you don't have your ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 39
    }
  }, "AWS_SECRET_ACCESS_KEY"), " and", ' ', __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "AWS_ACCESS_KEY_ID"), " handy, find those in the top right corner under your name > Security credentials."), __jsx(_ListItem_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "If you haven't already,", ' ', __jsx("a", {
    href: "https://learn.hashicorp.com/tutorials/terraform/install-cli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "install Terraform"), "\n", __jsx(_Pre_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "# For Macs with homebrew", '\n'), "brew install hashicorp/tap/terraform"), __jsx(_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "See", ' ', __jsx("a", {
    href: "https://learn.hashicorp.com/tutorials/terraform/install-cli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "learn.hashicorp.com/tutorials/terraform/install-cli"), ' ', "for other platforms."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Infrastructure);

/***/ }),

/***/ "./components/utils.tsx":
/*!******************************!*\
  !*** ./components/utils.tsx ***!
  \******************************/
/*! exports provided: SectionBackground, Section, Main, PageWrapper, Colored */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionBackground", function() { return SectionBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageWrapper", function() { return PageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colored", function() { return Colored; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var SectionBackground = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "utils__SectionBackground",
  componentId: "sc-1vrdcy-0"
})(["width:100%;background-color:", ";color:", ";margin-top:", ";"], function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.color;
}, function (props) {
  return props.marginTop;
});
var Section = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "utils__Section",
  componentId: "sc-1vrdcy-1"
})(["max-width:", "px;width:100vw;margin:0 auto;padding:2rem;@media (max-width:350px){padding:1rem;}"], function (p) {
  return p.theme.layout.maxWidth;
});
var Main = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Section).withConfig({
  displayName: "utils__Main",
  componentId: "sc-1vrdcy-2"
})([""]);
var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "utils__PageWrapper",
  componentId: "sc-1vrdcy-3"
})(["display:flex;flex-direction:column;width:100vw;"]);
var Colored = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "utils__Colored",
  componentId: "sc-1vrdcy-4"
})(["color:", ";"], function (p) {
  return p.color || p.theme.colors.primary;
});

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

var _jsxFileName = "/Users/tomfa/repos/s3launchpad/pages/index.tsx";

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

  var hasSeleted = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (questionId, value) {
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
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(_components_HeaderSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Main"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(_components_BlockQuote__WEBPACK_IMPORTED_MODULE_4__["default"], {
    author: 'Lolrus, the bucket walrus',
    source: 'At the launch of AWS S3 in 2006',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Hosting a", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 22
    }
  }, " webapp "), "or need to store uploads? Put them in S3 buckets. It's", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, " cheap "), "and", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, " reliable"), ". With CloudFront cache, it'll be blazingly ", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 23
    }
  }, "fast"), ". Let's see how", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, " easy "), "it can be."))), __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
          lineNumber: 69,
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
          lineNumber: 87,
          columnNumber: 15
        }
      });
    }

    throw new Error("Unexpected question type ".concat(question.type));
  }), __jsx(_components_Infrastructure__WEBPACK_IMPORTED_MODULE_8__["default"], {
    webApp: hasSeleted(_enums__WEBPACK_IMPORTED_MODULE_9__["QUESTION_ID"].storageType, 'webapp'),
    shared: hasSeleted(_enums__WEBPACK_IMPORTED_MODULE_9__["QUESTION_ID"].aclPublic, _enums__WEBPACK_IMPORTED_MODULE_9__["BOOL_VALUE"].TRUE),
    staging: hasSeleted(_enums__WEBPACK_IMPORTED_MODULE_9__["QUESTION_ID"].stagingEnv, _enums__WEBPACK_IMPORTED_MODULE_9__["BOOL_VALUE"].TRUE),
    staticPage: hasSeleted(_enums__WEBPACK_IMPORTED_MODULE_9__["QUESTION_ID"].webappIsStatic, _enums__WEBPACK_IMPORTED_MODULE_9__["BOOL_VALUE"].TRUE),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.ee1aa7a77d56e0ee7331.hot-update.js.map