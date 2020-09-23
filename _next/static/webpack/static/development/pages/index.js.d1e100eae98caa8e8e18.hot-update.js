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
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");
/* harmony import */ var _utils_useCurrentUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useCurrentUrl */ "./utils/useCurrentUrl.ts");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/ShareLink.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ShareLink = function ShareLink(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'I has a bucket' : _ref$title,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'Setup frontend or file hosting in 3 minutes' : _ref$text,
      url = _ref.url;
  var currentUrl = Object(_utils_useCurrentUrl__WEBPACK_IMPORTED_MODULE_2__["useCurrentUrl"])(true);
  var supportsNavigatorShare = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return navigator && navigator.share;
  }, [navigator]);

  if (supportsNavigatorShare) {
    return __jsx(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: function onClick() {
        return navigator.share({
          title: title,
          text: text,
          url: url || currentUrl
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }, children || 'Share this page');
  }

  return __jsx("a", {
    href: currentUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
  }, "Bucket is served!"), "Just run the script below, or", ' ', __jsx(_components_ShareLink__WEBPACK_IMPORTED_MODULE_8__["ShareLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "save this configuration"), " for later.", __jsx(_components_code_Code__WEBPACK_IMPORTED_MODULE_7__["default"], {
    bucketName: props.bucketName,
    mainTfContent: mainTfContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx(_components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "The script above will plan the infrastructure and prompt you for confirmation."), __jsx(_components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, description), __jsx(_components_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "Prerequisites"), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "AWS Account"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "If you don't have an AWS account already, sign up at", ' ', __jsx("a", {
    href: "https://portal.aws.amazon.com/billing/signup#/start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "aws.amazon.com")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, "If you don't have your ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 37
    }
  }, "AWS_SECRET_ACCESS_KEY"), " and", ' ', __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "AWS_ACCESS_KEY_ID"), " handy, find those in the top right corner under your name > Security credentials. They should be exported to your environment:"), __jsx(_components_code_Pre_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(_components_Mute_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "# Export AWS keys", '\n'), "export AWS_SECRET_ACCESS_KEY=yaAS$1...", '\n', "export AWS_ACCESS_KEY_ID=AKIA..."), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "Terraform installed"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, "If you haven't already,", ' ', __jsx("a", {
    href: "https://learn.hashicorp.com/tutorials/terraform/install-cli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "install Terraform")), __jsx(_components_code_Pre_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(_components_Mute_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, "# For Macs with homebrew", '\n'), "brew install hashicorp/tap/terraform"), __jsx(_components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, "See", ' ', __jsx("a", {
    href: "https://learn.hashicorp.com/tutorials/terraform/install-cli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, "learn.hashicorp.com/tutorials/terraform/install-cli"), ' ', "for other platforms."));
};

/* harmony default export */ __webpack_exports__["default"] = (Infrastructure);

/***/ })

})
//# sourceMappingURL=index.js.d1e100eae98caa8e8e18.hot-update.js.map