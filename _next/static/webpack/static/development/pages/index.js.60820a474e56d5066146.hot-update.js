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

/***/ })

})
//# sourceMappingURL=index.js.60820a474e56d5066146.hot-update.js.map