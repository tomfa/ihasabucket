webpackHotUpdate("static/development/pages/index.js",{

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


var getMainTfContent = function getMainTfContent(_ref) {
  var webApp = _ref.webApp,
      staging = _ref.staging,
      shared = _ref.shared,
      staticPage = _ref.staticPage;
  var source = webApp ? 'git::https://github.com/tomfa/terraform-sandbox.git//s3-webfiles-with-cloudfront' : 's3-privatefiles-with-cloudfront';
  var modules = staging ? ['prodbucket', 'stagingbucket'] : ['bucket'];
  var variables = {
    'var.bucket_name': 'var.bucket_name',
    'var.aws_region': 'var.aws_region',
    'var.aws_access_key': 'var.aws_access_key',
    'var.aws_secret_key': 'var.aws_secret_key'
  }; // TODO: Remove aws_secret_key and access_key
  // TODO: Add options for differentiating between static and shared

  var lines = [];
  modules.forEach(function (moduleName) {
    lines.push("module \"".concat(moduleName, "\" {"));
    lines.push("  source = \"".concat(source, "\""));
    Object.entries(variables).forEach(function (_ref2) {
      var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1];

      lines.push("  ");
    });
  });
  return "git::https://github.com/tomfa/terraform.git//".concat(bucketType, "/").concat(category, "/").concat(count);
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
//# sourceMappingURL=index.js.38015d61a08ce3236474.hot-update.js.map