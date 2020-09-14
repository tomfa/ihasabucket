webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _LoadingIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LoadingIcon */ "./components/Infrastructure/LoadingIcon.tsx");
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
    return __jsx(_LoadingIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "# Create a folder to store infrastructure code"), '\n', "mkdir infrastructure", '\n', "cd infrastructure", '\n', '\n', __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }), "EOT", '\n', '\n', __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, "Prerequisites"), __jsx(_List_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(_ListItem_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  }, "aws.amazon.com")), __jsx(_ListItem_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  }, __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "# Export AWS keys", '\n'), "export AWS_SECRET_ACCESS_KEY=yaAS$1...", '\n', "export AWS_ACCESS_KEY_ID=AKIA...")), __jsx(_ListItem_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, "If you haven't already,", ' ', __jsx("a", {
    href: "https://learn.hashicorp.com/tutorials/terraform/install-cli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, "install Terraform"), "\n", __jsx(_Pre_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, "# For Macs with homebrew", '\n'), "brew install hashicorp/tap/terraform"), __jsx(_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, "See", ' ', __jsx("a", {
    href: "https://learn.hashicorp.com/tutorials/terraform/install-cli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "learn.hashicorp.com/tutorials/terraform/install-cli"), ' ', "for other platforms."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Infrastructure);

/***/ })

})
//# sourceMappingURL=index.js.2af55d23a5437feacb38.hot-update.js.map