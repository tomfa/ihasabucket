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
  }, "Bucket is served!"), __jsx(_components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "Copy-paste the commands below, or share this", ' ', __jsx(_components_ShareLink__WEBPACK_IMPORTED_MODULE_6__["ShareLink"], {
    text: Object(_utils_sharing__WEBPACK_IMPORTED_MODULE_10__["getShareTitle"])(props),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "configuration url"), " for later."), sections.map(function (section, i) {
    return __jsx(_components_code_Code__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: i,
      bucketName: props.bucketName,
      intro: section.title,
      footer: section.description,
      mainTfContent: section.tfContent,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    });
  }), __jsx(_components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      fontWeight: 'bold'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, "The script above will plan the infrastructure and prompt you for confirmation."), footerText.map(function (text, i) {
    return __jsx(_components_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
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
      lineNumber: 62,
      columnNumber: 3
    }
  }, __jsx(Infrastructure, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.85e4451cec7c0fde5278.hot-update.js.map