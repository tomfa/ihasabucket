webpackHotUpdate("static/development/pages/index.js",{

/***/ "./enums.ts":
/*!******************!*\
  !*** ./enums.ts ***!
  \******************/
/*! exports provided: VALUES, QUESTION_ID, BOOL_VALUE, INPUT, getInputDescription, BUCKET_TYPE, getOutput, AWS_REGIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALUES", function() { return VALUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_ID", function() { return QUESTION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOL_VALUE", function() { return BOOL_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT", function() { return INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputDescription", function() { return getInputDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCKET_TYPE", function() { return BUCKET_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOutput", function() { return getOutput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWS_REGIONS", function() { return AWS_REGIONS; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


/* eslint-disable no-shadow */
var VALUES;

(function (VALUES) {
  VALUES[VALUES["NOT_EMPTY"] = 0] = "NOT_EMPTY";
})(VALUES || (VALUES = {}));

var QUESTION_ID;

(function (QUESTION_ID) {
  QUESTION_ID["createCertificates"] = "create-certificates";
  QUESTION_ID["bucketName"] = "bucket";
  QUESTION_ID["storageType"] = "storage";
  QUESTION_ID["webappIsStatic"] = "static";
  QUESTION_ID["aclPublic"] = "public";
  QUESTION_ID["configureDns"] = "configure-dns";
  QUESTION_ID["stagingEnv"] = "staging-env";
  QUESTION_ID["region"] = "region";
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
    var stageName = hasStaging && name.split('-')[name.split('-').length - 1];
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
var AWS_REGIONS;

(function (AWS_REGIONS) {
  AWS_REGIONS["US_EAST_2"] = "us-east-2";
  AWS_REGIONS["US_EAST_1"] = "us-east-1";
  AWS_REGIONS["US_WEST_1"] = "us-west-1";
  AWS_REGIONS["US_WEST_2"] = "us-west-2";
  AWS_REGIONS["AF_SOUTH_1"] = "af-south-1";
  AWS_REGIONS["AP_EAST_1"] = "ap-east-1";
  AWS_REGIONS["AP_SOUTH_1"] = "ap-south-1";
  AWS_REGIONS["AP_NORTHEAST_3"] = "ap-northeast-3";
  AWS_REGIONS["AP_NORTHEAST_2"] = "ap-northeast-2";
  AWS_REGIONS["AP_SOUTHEAST_1"] = "ap-southeast-1";
  AWS_REGIONS["AP_SOUTHEAST_2"] = "ap-southeast-2";
  AWS_REGIONS["AP_NORTHEAST_1"] = "ap-northeast-1";
  AWS_REGIONS["CA_CENTRAL_1"] = "ca-central-1";
  AWS_REGIONS["CN_NORTH_1"] = "cn-north-1";
  AWS_REGIONS["CN_NORTHWEST_1"] = "cn-northwest-1";
  AWS_REGIONS["EU_CENTRAL_1"] = "eu-central-1";
  AWS_REGIONS["EU_WEST_1"] = "eu-west-1";
  AWS_REGIONS["EU_WEST_2"] = "eu-west-2";
  AWS_REGIONS["EU_SOUTH_1"] = "eu-south-1";
  AWS_REGIONS["EU_WEST_3"] = "eu-west-3";
  AWS_REGIONS["EU_NORTH_1"] = "eu-north-1";
  AWS_REGIONS["SA_EAST_1"] = "sa-east-1";
  AWS_REGIONS["ME_SOUTH_1"] = "me-south-1";
})(AWS_REGIONS || (AWS_REGIONS = {}));

/***/ })

})
//# sourceMappingURL=index.js.532df9ef4c79e3e75b89.hot-update.js.map