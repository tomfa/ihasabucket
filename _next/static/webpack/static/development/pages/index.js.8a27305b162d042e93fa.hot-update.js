webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/terraform/redirect.ts":
/*!*************************************!*\
  !*** ./utils/terraform/redirect.ts ***!
  \*************************************/
/*! exports provided: getRedirectBucketTfContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRedirectBucketTfContent", function() { return getRedirectBucketTfContent; });
var getRedirectBucketTfContent = function getRedirectBucketTfContent(_ref) {
  var forwardingBucket = _ref.forwardingBucket,
      bucketName = _ref.bucketName,
      region = _ref.region;

  if (!forwardingBucket) {
    return [];
  }

  return [{
    name: 'redirect',
    source: "git::https://github.com/tomfa/terraform.git//redirect",
    parameters: {
      bucket_name: "\"".concat(forwardingBucket, "\""),
      redirect_url: "\"".concat(bucketName, "\""),
      aws_region: "\"".concat(region, "\"")
    }
  }];
};

/***/ })

})
//# sourceMappingURL=index.js.8a27305b162d042e93fa.hot-update.js.map