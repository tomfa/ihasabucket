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
      description = _getTerraFormPackage.description,
      mainTfContent = _getTerraFormPackage.mainTfContent;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setLoading(true);
    setTimeout(function () {
      return setLoading(false);
    }, 800);
  }, [mainTfContent]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: 'h1',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "Bucket is served!"), "Just run the script below!", __jsx(_Pre_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "mkdir infrastructure", '\n', "cd infrastructure", '\n', "cat <<EOT >> main.tf", '\n', mainTfContent.map(function (line, i) {
    return __jsx("span", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, line, '\n');
  }), "EOT", '\n', "terraform init", '\n', "terraform apply", '\n'), __jsx(_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "The script above ask you for desired bucket name and AWS region."), __jsx(_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, description), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "Prerequisites"), __jsx(_List_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_ListItem_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "If you don't have an AWS account already, sign up at", ' ', __jsx("a", {
    href: "https://portal.aws.amazon.com/billing/signup#/start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "aws.amazon.com")), __jsx(_ListItem_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "If you don't have your ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 39
    }
  }, "AWS_SECRET_ACCESS_KEY"), " and", ' ', __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "AWS_ACCESS_KEY_ID"), " handy, find those in the top right corner under your name > Security credentials. They should be exported to your environment:", __jsx(_Pre_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "# Export AWS keys", '\n'), "export AWS_SECRET_ACCESS_KEY=yaAS$1...", '\n', "export AWS_ACCESS_KEY_ID=AKIA...")), __jsx(_ListItem_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "If you haven't already,", ' ', __jsx("a", {
    href: "https://learn.hashicorp.com/tutorials/terraform/install-cli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, "install Terraform"), "\n", __jsx(_Pre_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "# For Macs with homebrew", '\n'), "brew install hashicorp/tap/terraform"), __jsx(_forms_Description_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, "See", ' ', __jsx("a", {
    href: "https://learn.hashicorp.com/tutorials/terraform/install-cli",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "learn.hashicorp.com/tutorials/terraform/install-cli"), ' ', "for other platforms."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Infrastructure);

/***/ }),

/***/ "./components/Infrastructure/utils.ts":
/*!********************************************!*\
  !*** ./components/Infrastructure/utils.ts ***!
  \********************************************/
/*! exports provided: getTerraFormPackage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTerraFormPackage", function() { return getTerraFormPackage; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getMainTfContent = function getMainTfContent(_ref) {
  var webApp = _ref.webApp,
      staging = _ref.staging,
      shared = _ref.shared,
      staticPage = _ref.staticPage;
  var source = webApp ? 'git::https://github.com/tomfa/terraform-sandbox.git//s3-webfiles-with-cloudfront' : '\'git::https://github.com/tomfa/terraform-sandbox.git//s3-privatefiles-with-cloudfront';
  var defaultVariables = {
    'var.bucket_name': 'var.bucket_name',
    'var.aws_region': 'var.aws_region',
    'var.aws_access_key': 'var.aws_access_key',
    'var.aws_secret_key': 'var.aws_secret_key'
  };
  var modules = staging ? [{
    name: 'prodbucket',
    variables: defaultVariables
  }, {
    name: 'stagingbucket',
    variables: _objectSpread({}, defaultVariables, {
      'var.bucket_name': "\"${var.bucket-name}.staging\""
    })
  }] : [{
    name: 'bucket',
    variables: defaultVariables
  }]; // TODO: Remove aws_secret_key and access_key
  // TODO: Add options for differentiating between static and shared

  var lines = [];
  modules.forEach(function (module) {
    lines.push('');
    lines.push("module \"".concat(module.name, "\" {"));
    lines.push("  source = \"".concat(source, "\""));
    Object.entries(module.variables).forEach(function (_ref2) {
      var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1];

      lines.push("  ".concat(key, " = ").concat(value));
    });
    lines.push("}");
  });
  return lines;
};

var getTerraPackageDescription = function getTerraPackageDescription(_ref4) {
  var webApp = _ref4.webApp,
      staging = _ref4.staging,
      shared = _ref4.shared,
      staticPage = _ref4.staticPage;
  var count = staging ? 'two sets of' : 'a';
  var usecase = getUseCaseDescription({
    webApp: webApp,
    staticPage: staticPage,
    shared: shared
  });
  var iamUserInfo = staging ? 'Two sets of AWS keys will be created that are able to upload to the buckets. One for test and one for production environment' : 'A set of AWS keys will be created that is able to upload to the bucket';
  return "Once run, it will create ".concat(count, " S3 bucket + Cloudfront, configured ").concat(usecase, ". ").concat(iamUserInfo, ".");
};

var getBucketSubCategory = function getBucketSubCategory(_ref5) {
  var webApp = _ref5.webApp,
      staticPage = _ref5.staticPage,
      shared = _ref5.shared;

  if (webApp) {
    if (staticPage) {
      return 'static';
    }

    return 'singlepage';
  }

  if (shared) {
    return 'public';
  }

  return 'private';
};

var getUseCaseDescription = function getUseCaseDescription(_ref6) {
  var webApp = _ref6.webApp,
      staticPage = _ref6.staticPage,
      shared = _ref6.shared;

  if (webApp) {
    if (staticPage) {
      return 'to serve a solid statically generated web app';
    }

    return 'to serve a blazingly fast single-page web app';
  }

  if (shared) {
    return 'for hosting publicly available files';
  }

  return 'for storing and serving files for authorized requests';
};

var getTerraFormPackage = function getTerraFormPackage(props) {
  return {
    mainTfContent: getMainTfContent(props),
    description: getTerraPackageDescription(props)
  };
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ })

})
//# sourceMappingURL=index.js.3dbec9ad6ffd8670affe.hot-update.js.map