webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Infrastructure/List.style.tsx":
false,

/***/ "./components/Infrastructure/ListItem.style.tsx":
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
/* harmony import */ var _Mute_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Mute.style */ "./components/Infrastructure/Mute.style.tsx");
/* harmony import */ var _LoadingIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoadingIcon */ "./components/Infrastructure/LoadingIcon.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/Infrastructure/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/no-array-index-key */








var Infrastructure = function Infrastructure(props) {
  var _getTerraFormPackage = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getTerraFormPackage"])(props),
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
    return __jsx(_LoadingIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 12
      }
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: 'h1',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "Bucket is served!"), "Just run the script below!", __jsx(_Pre_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "# Create a folder to store infrastructure code"), '\n', "mkdir infrastructure", '\n', "cd infrastructure", '\n', '\n', __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "# Create config file"), '\n', "cat <<EOT >> main.tf", '\n', mainTfContent.map(function (line, i) {
    return __jsx("span", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, line, '\n');
  }), "EOT", '\n', '\n', __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "# Deploy"), '\n', "terraform init", '\n', "terraform apply", '\n'), __jsx(_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "The script above ask you for desired bucket name and AWS region."), __jsx(_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, description), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, "Prerequisites"), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "AWS Account"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "If you don't have an AWS account already, sign up at", ' ', __jsx("a", {
    href: "https://portal.aws.amazon.com/billing/signup#/start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "aws.amazon.com")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "If you don't have your ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 39
    }
  }, "AWS_SECRET_ACCESS_KEY"), " and", ' ', __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, "AWS_ACCESS_KEY_ID"), " handy, find those in the top right corner under your name > Security credentials. They should be exported to your environment:", __jsx(_Pre_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "# Export AWS keys", '\n'), "export AWS_SECRET_ACCESS_KEY=yaAS$1...", '\n', "export AWS_ACCESS_KEY_ID=AKIA...")), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, "Terraform installed"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, "If you haven't already,", ' ', __jsx("a", {
    href: "https://learn.hashicorp.com/tutorials/terraform/install-cli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, "install Terraform"), "\n", __jsx(_Pre_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "# For Macs with homebrew", '\n'), "brew install hashicorp/tap/terraform"), __jsx(_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, "See", ' ', __jsx("a", {
    href: "https://learn.hashicorp.com/tutorials/terraform/install-cli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "learn.hashicorp.com/tutorials/terraform/install-cli"), ' ', "for other platforms.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Infrastructure);

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
  description: 'Unlike normal file storage, webapps like React and Vue have a default path, and error pages.',
  options: [{
    value: 'webapp',
    label: 'A webapp'
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
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_questionData, _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].configureDns, {
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
    questionId: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].domainName,
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["VALUES"].NOT_EMPTY
  }]
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_questionData, _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].createCertificates, {
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
    questionId: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].domainName,
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["VALUES"].NOT_EMPTY
  }, {
    questionId: _enums__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ID"].configureDns,
    value: _enums__WEBPACK_IMPORTED_MODULE_1__["BOOL_VALUE"].FALSE
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

/***/ })

})
//# sourceMappingURL=index.js.7cac772eaab6fbb7339c.hot-update.js.map