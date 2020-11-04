webpackHotUpdate("static/development/pages/index.js",{

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
      bucketName = _ref.bucketName,
      forwardingBucket = _ref.forwardingBucket,
      staging = _ref.staging;
  var getParameters = getParams();

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
var getParams = {};

/***/ }),

/***/ "./utils/terraform/names.ts":
/*!**********************************!*\
  !*** ./utils/terraform/names.ts ***!
  \**********************************/
/*! exports provided: getBucketModuleNames, getBucketTfValues, getBucketNameTfValue, getStagingBucketName, getStagingDomain, getBucketDomains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBucketModuleNames", function() { return getBucketModuleNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBucketTfValues", function() { return getBucketTfValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBucketNameTfValue", function() { return getBucketNameTfValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStagingBucketName", function() { return getStagingBucketName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStagingDomain", function() { return getStagingDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBucketDomains", function() { return getBucketDomains; });
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain */ "./utils/domain.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums */ "./enums.ts");


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
var getBucketTfValues = function getBucketTfValues(_ref2) {
  var forwardingBucket = _ref2.forwardingBucket,
      staging = _ref2.staging,
      bucketName = _ref2.bucketName;
  return {
    staging: staging ? "\"".concat(getStagingBucketName(bucketName), "\"") : null,
    main: getBucketNameTfValue(bucketName),
    redirect: forwardingBucket || null
  };
};
var getBucketNameTfValue = function getBucketNameTfValue(bucketName) {
  return bucketName ? "\"".concat(bucketName, "\"") : "var.".concat(_enums__WEBPACK_IMPORTED_MODULE_1__["INPUT"].BUCKET_NAME);
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
var getBucketDomains = function getBucketDomains(_ref3) {
  var bucketName = _ref3.bucketName,
      staging = _ref3.staging,
      forwardingBucket = _ref3.forwardingBucket;
  var stagingBucket = staging ? getStagingDomain(bucketName) : null;
  return {
    staging: stagingBucket,
    main: bucketName,
    redirect: forwardingBucket || null
  };
};

/***/ })

})
//# sourceMappingURL=index.js.2e06cd41cc32bd0d74bc.hot-update.js.map