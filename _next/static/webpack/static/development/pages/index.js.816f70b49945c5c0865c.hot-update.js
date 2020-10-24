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
    source: "\"git::https://github.com/tomfa/terraform.git//user\"",
    parameters: parameters
  }];
};

/***/ })

})
//# sourceMappingURL=index.js.816f70b49945c5c0865c.hot-update.js.map