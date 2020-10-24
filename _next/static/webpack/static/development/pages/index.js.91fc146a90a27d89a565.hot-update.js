webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/code/Code.tsx":
/*!**********************************!*\
  !*** ./components/code/Code.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/clipboard */ "./utils/clipboard.ts");
/* harmony import */ var _Mute_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Mute.style */ "./components/Mute.style.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./components/utils.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _forms_Description_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forms/Description.style */ "./components/forms/Description.style.tsx");
/* harmony import */ var _Pre_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pre.style */ "./components/code/Pre.style.tsx");
/* harmony import */ var _PreButton_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PreButton.style */ "./components/code/PreButton.style.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/code/Code.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/no-array-index-key */









var Code = function Code(_ref) {
  var lines = _ref.mainTfContent,
      bucketName = _ref.bucketName,
      intro = _ref.intro,
      footer = _ref.footer;
  var theme = Object(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      hasCopied = _useState[0],
      setHasCopied = _useState[1];

  var copy = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    Object(_utils_clipboard__WEBPACK_IMPORTED_MODULE_1__["copyToClipBoard"])(lines);
    setHasCopied(true);
  }, [lines]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return setHasCopied(false);
  }, [lines, bucketName]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !!intro && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }, intro), __jsx(_Pre_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: !!intro && {
      marginTop: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, lines.map(function (line, i) {
    if (line.trim().startsWith('#')) {
      return __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 15
        }
      }, line, '\n');
    }

    return __jsx("span", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, line, '\n');
  }), __jsx(_PreButton_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: copy,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, hasCopied && __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "Copied! ", __jsx(_utils__WEBPACK_IMPORTED_MODULE_3__["Colored"], {
    color: theme.colors.success,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 23
    }
  }, "\u2713")) || 'Copy to clipboard')), !!footer && __jsx(_forms_Description_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 20
    }
  }, footer));
};

/* harmony default export */ __webpack_exports__["default"] = (Code);

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
  var createFolders = {
    title: 'First, create a folder for your infrastructure code.',
    tfContent: ['mkdir infrastructure', 'cd infrastructure']
  };
  var mainContent = {
    title: 'Then, create a terraform config file',
    tfContent: ["cat <<EOT >> ".concat(props.bucketName || 'main', ".tf")].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(getMainTfContent(props)), ['EOT'])
  };

  if (!props.configureDns) {
    return {
      sections: [createFolders, mainContent, {
        title: 'Initialize the modules and deploy to AWS',
        tfContent: ['terraform init', 'terraform deploy']
      }].filter(function (m) {
        return m;
      }),
      footerText: Object(_descriptionText__WEBPACK_IMPORTED_MODULE_2__["getTerraPackageDescription"])(props)
    };
  }

  var loadTerraformModules = {
    title: 'Download the required modules',
    tfContent: ['terraform init']
  };
  var initialDnsDeploy = {
    title: 'Create the DNS servers',
    tfContent: ['terraform deploy --target=module.domain'],
    description: 'After this command completes, it will output DNS servers. ' + 'Before continuing, point your registrar to use these endpoints as DNS servers.'
  };
  var deploy = {
    title: 'Deploy the remaining infrastructure to AWS',
    tfContent: ['terraform deploy']
  };
  return {
    sections: [createFolders, mainContent, loadTerraformModules, initialDnsDeploy, deploy],
    footerText: Object(_descriptionText__WEBPACK_IMPORTED_MODULE_2__["getTerraPackageDescription"])(props)
  };
};

/***/ })

})
//# sourceMappingURL=index.js.91fc146a90a27d89a565.hot-update.js.map