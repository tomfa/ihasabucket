webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/terraform/fileStorage.ts":
/*!****************************************!*\
  !*** ./utils/terraform/fileStorage.ts ***!
  \****************************************/
/*! exports provided: getFileStorageBucketTfContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileStorageBucketTfContent", function() { return getFileStorageBucketTfContent; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums */ "./enums.ts");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./names */ "./utils/terraform/names.ts");


var getFileStorageBucketTfContent = function getFileStorageBucketTfContent(props) {
  if (props.webApp) {
    return [];
  }

  var tfContent = [];
  var names = Object(_names__WEBPACK_IMPORTED_MODULE_1__["getBucketModuleNames"])(props);
  var bucketName = props.bucketName,
      region = props.region,
      shared = props.shared;
  tfContent.push({
    name: names.main,
    source: 'git::https://github.com/tomfa/terraform.git//files',
    parameters: {
      bucket_name: bucketName ? "\"".concat(bucketName, "\"") : "var.".concat(_enums__WEBPACK_IMPORTED_MODULE_0__["INPUT"].BUCKET_NAME),
      aws_region: region ? "\"".concat(region, "\"") : "var.".concat(_enums__WEBPACK_IMPORTED_MODULE_0__["INPUT"].AWS_REGION),
      acl: shared ? '"public-read"' : '"private"'
    }
  });

  if (props.staging) {
    tfContent.push({
      name: names.staging,
      source: 'git::https://github.com/tomfa/terraform.git//files',
      parameters: {
        bucket_name: "\"".concat(Object(_names__WEBPACK_IMPORTED_MODULE_1__["getStagingBucketName"])(bucketName), "\""),
        aws_region: region ? "\"".concat(region, "\"") : "var.".concat(_enums__WEBPACK_IMPORTED_MODULE_0__["INPUT"].AWS_REGION),
        acl: shared ? '"public-read"' : '"private"'
      }
    });
  }

  return tfContent;
};

/***/ }),

/***/ "./utils/terraform/iamUser.ts":
/*!************************************!*\
  !*** ./utils/terraform/iamUser.ts ***!
  \************************************/
/*! exports provided: getIAMUserTfContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIAMUserTfContent", function() { return getIAMUserTfContent; });
var getIAMUserTfContent = function getIAMUserTfContent(_ref) {
  var webApp = _ref.webApp,
      bucketName = _ref.bucketName;

  if (!bucketName) {
    return [];
  }

  var parameters = {
    bucket_names: "[\"".concat(bucketName, "\"]"),
    iam_user_name: "\"".concat(bucketName, "-user\"")
  };

  if (webApp) {
    parameters.cloudfront_distribution_ids = "[module.web-app.CLOUDFRONT_DISTRIBUTION_ID]";
  }

  return [{
    name: 'user',
    source: "git::https://github.com/tomfa/terraform.git//user",
    parameters: parameters
  }];
};

/***/ }),

/***/ "./utils/terraform/names.ts":
/*!**********************************!*\
  !*** ./utils/terraform/names.ts ***!
  \**********************************/
/*! exports provided: getBucketModuleNames, getStagingBucketName, getStagingDomain, getBucketDomains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBucketModuleNames", function() { return getBucketModuleNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStagingBucketName", function() { return getStagingBucketName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStagingDomain", function() { return getStagingDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBucketDomains", function() { return getBucketDomains; });
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain */ "./utils/domain.ts");

var getBucketModuleNames = function getBucketModuleNames(_ref) {
  var webApp = _ref.webApp,
      staging = _ref.staging,
      forwardingBucket = _ref.forwardingBucket;
  var genericBucketName = webApp ? 'web-app' : 'file-storage';
  var mainBucket = staging ? "".concat(genericBucketName, "-production") : genericBucketName;
  var stagingBucket = staging ? "".concat(genericBucketName, "-staging") : null;
  return {
    staging: stagingBucket,
    main: mainBucket,
    redirect: forwardingBucket ? 'redirect' : null
  };
};
var getStagingBucketName = function getStagingBucketName(bucketName) {
  if (!bucketName) {
    return "staging.\\${var.bucket_name}";
  }

  return getStagingDomain(bucketName);
};
var getStagingDomain = function getStagingDomain(domain) {
  if (Object(_domain__WEBPACK_IMPORTED_MODULE_0__["domainIsApex"])(domain) || Object(_domain__WEBPACK_IMPORTED_MODULE_0__["domainIsWWW"])(domain)) {
    var apex = Object(_domain__WEBPACK_IMPORTED_MODULE_0__["getApexDomain"])(domain);
    return "staging.".concat(apex);
  }

  return "staging-".concat(domain);
};
var getBucketDomains = function getBucketDomains(_ref2) {
  var bucketName = _ref2.bucketName,
      staging = _ref2.staging,
      forwardingBucket = _ref2.forwardingBucket;
  var stagingBucket = staging ? getStagingDomain(bucketName) : null;
  return {
    staging: stagingBucket,
    main: bucketName,
    redirect: forwardingBucket || null
  };
};

/***/ }),

/***/ "./utils/terraform/webApp.ts":
/*!***********************************!*\
  !*** ./utils/terraform/webApp.ts ***!
  \***********************************/
/*! exports provided: getWebAppBucketTfContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWebAppBucketTfContent", function() { return getWebAppBucketTfContent; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums */ "./enums.ts");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./names */ "./utils/terraform/names.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var getWebAppBucketTfContent = function getWebAppBucketTfContent(props) {
  if (!props.webApp) {
    return [];
  }

  var names = Object(_names__WEBPACK_IMPORTED_MODULE_2__["getBucketModuleNames"])(props);
  var bucketName = props.bucketName,
      region = props.region,
      staticPage = props.staticPage,
      errorPath = props.errorPath;
  var bucketSpec = {
    name: names.main,
    source: 'git::https://github.com/tomfa/terraform.git//webapp',
    parameters: {
      bucket_name: bucketName ? "\"".concat(bucketName, "\"") : "var.".concat(_enums__WEBPACK_IMPORTED_MODULE_1__["INPUT"].BUCKET_NAME),
      aws_region: region ? "\"".concat(region, "\"") : "var.".concat(_enums__WEBPACK_IMPORTED_MODULE_1__["INPUT"].AWS_REGION),
      error_path: staticPage && errorPath ? "\"/".concat(errorPath, "\"") : '"/index.html"',
      error_code: staticPage ? '404' : '200'
    }
  };

  if (props.createCertificates) {
    bucketSpec.parameters.certificate_arn = 'module.certificate.CERTIFICATE_ARN';
  }

  if (props.configureDns && bucketName) {
    bucketSpec.parameters.domain_aliases = "[\"".concat(bucketName, "\"]");
  }

  if (!props.staging) {
    return [bucketSpec];
  }

  var stagingSpec = _objectSpread({}, bucketSpec, {
    name: names.staging,
    parameters: _objectSpread({}, bucketSpec.parameters, {
      bucket_name: "\"".concat(Object(_names__WEBPACK_IMPORTED_MODULE_2__["getStagingBucketName"])(bucketName), "\"")
    })
  });

  if (props.configureDns && bucketName) {
    stagingSpec.parameters.domain_aliases = "[\"".concat(Object(_names__WEBPACK_IMPORTED_MODULE_2__["getStagingDomain"])(bucketName), "\"]");
  }

  return [bucketSpec, stagingSpec];
};

/***/ })

})
//# sourceMappingURL=index.js.cb3e6e8ff7606409beac.hot-update.js.map