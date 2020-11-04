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
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./names */ "./utils/terraform/names.ts");

var getIAMUserTfContent = function getIAMUserTfContent(props) {
  var parameters = getParams(props);
  return [{
    name: 'user',
    source: "git::https://github.com/tomfa/terraform.git//user",
    parameters: parameters
  }];
};

var getParams = function getParams(props) {
  var allBucketNamesTf = Object(_names__WEBPACK_IMPORTED_MODULE_0__["getBucketTfValues"])(props);
  var userNameTf = Object(_names__WEBPACK_IMPORTED_MODULE_0__["getIAMBucketUserNameTfValue"])(props.bucketName);
  var bucketNamesTf = Object.values(allBucketNamesTf).filter(function (name) {
    return !!name;
  });
  var params = {
    bucket_names: "[".concat(bucketNamesTf.join(', '), "]"),
    iam_user_name: userNameTf
  };

  if (props.webApp) {
    params.cloudfront_distribution_ids = "[module.web-app.CLOUDFRONT_DISTRIBUTION_ID]";
  }

  return params;
};

/***/ })

})
//# sourceMappingURL=index.js.9810dbdd49a9ef06b0c0.hot-update.js.map