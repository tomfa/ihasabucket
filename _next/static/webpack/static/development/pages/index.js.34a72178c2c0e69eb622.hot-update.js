webpackHotUpdate("static/development/pages/index.js",{

/***/ "./enums.ts":
/*!******************!*\
  !*** ./enums.ts ***!
  \******************/
/*! exports provided: QUESTION_ID, BOOL_VALUE, INPUT, getInputDescription, BUCKET_TYPE, getOutput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_ID", function() { return QUESTION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOL_VALUE", function() { return BOOL_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT", function() { return INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputDescription", function() { return getInputDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCKET_TYPE", function() { return BUCKET_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOutput", function() { return getOutput; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


/* eslint-disable no-shadow */
var QUESTION_ID;

(function (QUESTION_ID) {
  QUESTION_ID["storageType"] = "storage-type";
  QUESTION_ID["webappIsStatic"] = "webapp-type";
  QUESTION_ID["aclPublic"] = "acl-public";
  QUESTION_ID["stagingEnv"] = "staging-env";
})(QUESTION_ID || (QUESTION_ID = {}));

var BOOL_VALUE;

(function (BOOL_VALUE) {
  BOOL_VALUE["FALSE"] = "false";
  BOOL_VALUE["TRUE"] = "true";
})(BOOL_VALUE || (BOOL_VALUE = {}));

var INPUT;

(function (INPUT) {
  INPUT["BUCKET_NAME"] = "bucket_name";
  INPUT["AWS_REGION"] = "aws_region";
  INPUT["AWS_ACCESS_KEY"] = "aws_access_key";
  INPUT["AWS_SECRET_KEY"] = "aws_secret_key";
  INPUT["ACL"] = "acl";
  INPUT["ERROR_RESPONSE_CODE"] = "error_response_code";
  INPUT["ERROR_RESPONSE_PATH"] = "error_response_path";
})(INPUT || (INPUT = {}));

var getInputDescription = function getInputDescription(input) {
  var _INPUT$BUCKET_NAME$IN;

  return (_INPUT$BUCKET_NAME$IN = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_INPUT$BUCKET_NAME$IN, INPUT.BUCKET_NAME, 'Name of S3 bucket'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_INPUT$BUCKET_NAME$IN, INPUT.AWS_REGION, 'Region to deploy to, e.g. eu-north-1, us-east-1'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_INPUT$BUCKET_NAME$IN, INPUT.AWS_ACCESS_KEY, 'e.g. AKIA... found in your AWS console > Security credentials'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_INPUT$BUCKET_NAME$IN, INPUT.AWS_SECRET_KEY, 'e.g. yaAS$1... found in your AWS console > Security credentials'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_INPUT$BUCKET_NAME$IN, INPUT.ACL, 'e.g. AKIA... found in your AWS console > Security credentials'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_INPUT$BUCKET_NAME$IN, INPUT.ERROR_RESPONSE_CODE, 'e.g. HTTP status code response when no file matching path is found'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_INPUT$BUCKET_NAME$IN, INPUT.ERROR_RESPONSE_PATH, 'e.g. Which file Cloudfront serves when encountering a missing file'), _INPUT$BUCKET_NAME$IN)[input];
};
var BUCKET_TYPE;

(function (BUCKET_TYPE) {
  BUCKET_TYPE["WEBAPP"] = "web-app";
  BUCKET_TYPE["FILE_STORAGE"] = "file-storage";
})(BUCKET_TYPE || (BUCKET_TYPE = {}));

var getOutput = function getOutput(_ref) {
  var bucketType = _ref.bucketType,
      hasStaging = _ref.hasStaging;
  var outputs = [];
  var bucketNames = hasStaging ? ["".concat(bucketType, "-production"), "".concat(bucketType, "-staging")] : [bucketType];
  bucketNames.forEach(function (name) {
    var stageName = name.split('-')[1];
    var prefix = stageName ? "".concat(stageName, ".") : '';
    outputs.push({
      value: "module.".concat(name, ".AWS_SECRET_ACCESS_KEY"),
      label: "".concat(prefix, "AWS_SECRET_ACCESS_KEY")
    });
    outputs.push({
      value: "module.".concat(name, ".AWS_ACCESS_KEY_ID"),
      label: "".concat(prefix, "AWS_ACCESS_KEY_ID")
    });
    outputs.push({
      value: "module.".concat(name, ".BUCKET_NAME"),
      label: "".concat(prefix, "BUCKET_NAME")
    });

    if (bucketType === BUCKET_TYPE.WEBAPP) {
      outputs.push({
        value: "module.".concat(name, ".CLOUDFRONT_URL"),
        label: "".concat(prefix, "CLOUDFRONT_URL")
      });
    }
  });
  return outputs;
};

/***/ })

})
//# sourceMappingURL=index.js.34a72178c2c0e69eb622.hot-update.js.map