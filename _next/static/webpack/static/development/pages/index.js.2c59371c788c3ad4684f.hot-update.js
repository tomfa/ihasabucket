webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _components_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/icons/LoadingIcon */ "./components/icons/LoadingIcon.tsx");
/* harmony import */ var _components_code_Code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/code/Code */ "./components/code/Code.tsx");
/* harmony import */ var _components_ShareLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ShareLink */ "./components/ShareLink.tsx");
/* harmony import */ var _utils_splitbee__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/splitbee */ "./utils/splitbee.ts");
/* harmony import */ var _questions_useQuestions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../questions/useQuestions */ "./questions/useQuestions.tsx");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/utils */ "./components/utils.tsx");
/* harmony import */ var _utils_sharing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/sharing */ "./utils/sharing.ts");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/sections/Infrastructure.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/no-array-index-key */












var Infrastructure = function Infrastructure() {
  var _useQuestions = Object(_questions_useQuestions__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      hasAnsweredAll = _useQuestions.hasAnsweredAll;

  var props = Object(_questions_useQuestions__WEBPACK_IMPORTED_MODULE_8__["useSummary"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return Object(_utils_splitbee__WEBPACK_IMPORTED_MODULE_7__["trail"])('completed', props);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (hasAnsweredAll) {
      setTimeout(function () {
        return setLoading(false);
      }, 800);
    }
  }, [hasAnsweredAll]);

  if (!hasAnsweredAll) {
    return null;
  }

  if (loading) {
    return __jsx(_components_icons_LoadingIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 12
      }
    });
  }

  var _getTerraFormPackage = Object(_utils_terraform__WEBPACK_IMPORTED_MODULE_3__["getTerraFormPackage"])(props),
      footerText = _getTerraFormPackage.footerText,
      sections = _getTerraFormPackage.sections;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: 'h1',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "Bucket is served!"), "Just run the scripts below, or share this", ' ', __jsx(_components_ShareLink__WEBPACK_IMPORTED_MODULE_6__["ShareLink"], {
    text: Object(_utils_sharing__WEBPACK_IMPORTED_MODULE_10__["getShareTitle"])(props),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "configuration url"), " for later.", sections.map(function (section) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, section.introduction && __jsx(_components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 59
      }
    }, section.introduction), __jsx(_components_code_Code__WEBPACK_IMPORTED_MODULE_5__["default"], {
      bucketName: props.bucketName,
      mainTfContent: section.tfContent,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 109
      }
    }));
  }), __jsx(_components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      fontWeight: 'bold'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "The script above will plan the infrastructure and prompt you for confirmation."), footerText.map(function (text, i) {
    return __jsx(_components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }, text);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_9__["Section"], {
    id: "infrastructure",
    tight: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 3
    }
  }, __jsx(Infrastructure, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }));
});

/***/ }),

/***/ "./utils/terraform/index.ts":
/*!**********************************!*\
  !*** ./utils/terraform/index.ts ***!
  \**********************************/
/*! exports provided: getTerraFormPackage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTerraFormPackage", function() { return getTerraFormPackage; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _certificate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./certificate */ "./utils/terraform/certificate.ts");
/* harmony import */ var _descriptionText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./descriptionText */ "./utils/terraform/descriptionText.ts");
/* harmony import */ var _dns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dns */ "./utils/terraform/dns.ts");
/* harmony import */ var _fileStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fileStorage */ "./utils/terraform/fileStorage.ts");
/* harmony import */ var _redirect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redirect */ "./utils/terraform/redirect.ts");
/* harmony import */ var _webApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webApp */ "./utils/terraform/webApp.ts");
/* harmony import */ var _terraformText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./terraformText */ "./utils/terraform/terraformText.ts");
/* harmony import */ var _iamUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./iamUser */ "./utils/terraform/iamUser.ts");


/* eslint-disable camelcase */









var getMainTfContent = function getMainTfContent(props) {
  var modules = [];
  modules.push.apply(modules, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_webApp__WEBPACK_IMPORTED_MODULE_6__["getWebAppBucketTfContent"])(props)));
  modules.push.apply(modules, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_fileStorage__WEBPACK_IMPORTED_MODULE_4__["getFileStorageBucketTfContent"])(props)));
  modules.push.apply(modules, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_dns__WEBPACK_IMPORTED_MODULE_3__["getDomainTfContent"])(props)));
  modules.push.apply(modules, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_dns__WEBPACK_IMPORTED_MODULE_3__["getDomainRecordTfContent"])(props)));
  modules.push.apply(modules, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_certificate__WEBPACK_IMPORTED_MODULE_1__["getCertificateTfContent"])(props)));
  modules.push.apply(modules, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_redirect__WEBPACK_IMPORTED_MODULE_5__["getRedirectBucketTfContent"])(props)));
  modules.push.apply(modules, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_iamUser__WEBPACK_IMPORTED_MODULE_8__["getIAMUserTfContent"])(props)));
  var lines = [];
  lines.push.apply(lines, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_terraformText__WEBPACK_IMPORTED_MODULE_7__["toVariablesText"])(modules)));
  lines.push.apply(lines, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_terraformText__WEBPACK_IMPORTED_MODULE_7__["toModulesText"])(modules)));
  lines.push.apply(lines, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_terraformText__WEBPACK_IMPORTED_MODULE_7__["getOutputLines"])(props)));
  return lines;
};

var getTerraFormPackage = function getTerraFormPackage(props) {
  return {
    sections: [{
      tfContent: getMainTfContent(props)
    }],
    footerText: Object(_descriptionText__WEBPACK_IMPORTED_MODULE_2__["getTerraPackageDescription"])(props)
  };
};

/***/ })

})
//# sourceMappingURL=index.js.2c59371c788c3ad4684f.hot-update.js.map