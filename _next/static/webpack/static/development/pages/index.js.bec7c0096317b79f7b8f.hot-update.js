webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ShareLink.tsx":
/*!**********************************!*\
  !*** ./components/ShareLink.tsx ***!
  \**********************************/
/*! exports provided: ShareLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareLink", function() { return ShareLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useCurrentUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useCurrentUrl */ "./utils/useCurrentUrl.ts");
/* harmony import */ var _Button_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.styles */ "./components/Button.styles.tsx");
/* harmony import */ var _icons_Share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/Share */ "./components/icons/Share.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/ShareLink.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/anchor-is-valid */




var ShareLink = function ShareLink(_ref) {
  var children = _ref.children,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'ihasabucket.it' : _ref$text,
      url = _ref.url;
  var currentUrl = Object(_utils_useCurrentUrl__WEBPACK_IMPORTED_MODULE_1__["useCurrentUrl"])(true);
  var supportsNavigatorShare = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return navigator && navigator.share;
  }, [navigator.share]);

  if (supportsNavigatorShare) {
    return __jsx(_Button_styles__WEBPACK_IMPORTED_MODULE_2__["default"], {
      thin: true,
      onClick: function onClick() {
        return navigator.share({
          text: text,
          url: url || currentUrl
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, children || 'Share this page', __jsx(_icons_Share__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: 'white',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }));
  }

  return __jsx("a", {
    href: url || currentUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 10
    }
  }, children || 'Share this page');
};

/***/ }),

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
/* harmony import */ var _components_ShareLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ShareLink */ "./components/ShareLink.tsx");
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
        lineNumber: 29,
        columnNumber: 12
      }
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: 'h1',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Bucket is served!"), "Just run the script below, or share this", ' ', __jsx(_components_ShareLink__WEBPACK_IMPORTED_MODULE_8__["ShareLink"], {
    text: getShareTitle(props),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "configuration url"), " for later.", __jsx(_components_code_Code__WEBPACK_IMPORTED_MODULE_7__["default"], {
    bucketName: props.bucketName,
    mainTfContent: mainTfContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx(_components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "The script above will plan the infrastructure and prompt you for confirmation."), __jsx(_components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, description), __jsx(_components_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "Prerequisites"), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "AWS Account"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "If you don't have an AWS account already, sign up at", ' ', __jsx("a", {
    href: "https://portal.aws.amazon.com/billing/signup#/start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "aws.amazon.com")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, "If you don't have your ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  }, "AWS_SECRET_ACCESS_KEY"), " and", ' ', __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "AWS_ACCESS_KEY_ID"), " handy, find those in the top right corner under your name > Security credentials. They should be exported to your environment:"), __jsx(_components_code_Pre_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(_components_Mute_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, "# Export AWS keys", '\n'), "export AWS_SECRET_ACCESS_KEY=yaAS$1...", '\n', "export AWS_ACCESS_KEY_ID=AKIA..."), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, "Terraform installed"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, "If you haven't already,", ' ', __jsx("a", {
    href: "https://learn.hashicorp.com/tutorials/terraform/install-cli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, "install Terraform")), __jsx(_components_code_Pre_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_components_Mute_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "# For Macs with homebrew", '\n'), "brew install hashicorp/tap/terraform"), __jsx(_components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, "See", ' ', __jsx("a", {
    href: "https://learn.hashicorp.com/tutorials/terraform/install-cli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "learn.hashicorp.com/tutorials/terraform/install-cli"), ' ', "for other platforms."));
};

var getShareTitle = function getShareTitle(_ref) {
  var bucketName = _ref.bucketName,
      webApp = _ref.webApp,
      region = _ref.region,
      shared = _ref.shared;
  var regionPostfix = region ? " in ".concat(region) : '';

  if (bucketName && region) {
    return "Launch ".concat(bucketName).concat(regionPostfix);
  }

  if (webApp && region) {
    return "Launch a web app ".concat(regionPostfix);
  }

  if (!webApp && region) {
    var aclText = shared ? 'public' : 'private';
    return "Host ".concat(aclText, " files in ").concat(regionPostfix);
  }

  return undefined;
};

/* harmony default export */ __webpack_exports__["default"] = (Infrastructure);

/***/ })

})
//# sourceMappingURL=index.js.bec7c0096317b79f7b8f.hot-update.js.map