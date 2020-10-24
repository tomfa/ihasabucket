webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/terraform/index.ts":
/*!**********************************!*\
  !*** ./utils/terraform/index.ts ***!
  \**********************************/
/*! exports provided: getTerraFormPackage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTerraFormPackage", function() { return getTerraFormPackage; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _certificate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./certificate */ "./utils/terraform/certificate.ts");
/* harmony import */ var _descriptionText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./descriptionText */ "./utils/terraform/descriptionText.ts");
/* harmony import */ var _dns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dns */ "./utils/terraform/dns.ts");
/* harmony import */ var _fileStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fileStorage */ "./utils/terraform/fileStorage.ts");
/* harmony import */ var _redirect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redirect */ "./utils/terraform/redirect.ts");
/* harmony import */ var _webApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webApp */ "./utils/terraform/webApp.ts");
/* harmony import */ var _terraformText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./terraformText */ "./utils/terraform/terraformText.ts");
/* harmony import */ var _iamUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./iamUser */ "./utils/terraform/iamUser.ts");


/* eslint-disable camelcase */









var getMainTfContent = function getMainTfContent(props) {
  var modules = [];
  modules.push.apply(modules, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_webApp__WEBPACK_IMPORTED_MODULE_6__["getWebAppBucketTfContent"])(props)));
  modules.push.apply(modules, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_fileStorage__WEBPACK_IMPORTED_MODULE_4__["getFileStorageBucketTfContent"])(props)));
  modules.push.apply(modules, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_dns__WEBPACK_IMPORTED_MODULE_3__["getDomainTfContent"])(props)));
  modules.push.apply(modules, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_dns__WEBPACK_IMPORTED_MODULE_3__["getDomainRecordTfContent"])(props)));
  modules.push.apply(modules, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_certificate__WEBPACK_IMPORTED_MODULE_1__["getCertificateTfContent"])(props)));
  modules.push.apply(modules, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_redirect__WEBPACK_IMPORTED_MODULE_5__["getRedirectBucketTfContent"])(props)));
  modules.push.apply(modules, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_iamUser__WEBPACK_IMPORTED_MODULE_8__["getIAMUserTfContent"])(props)));
  var lines = [];
  lines.push.apply(lines, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_terraformText__WEBPACK_IMPORTED_MODULE_7__["toVariablesText"])(modules)));
  lines.push.apply(lines, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_terraformText__WEBPACK_IMPORTED_MODULE_7__["toModulesText"])(modules)));
  lines.push.apply(lines, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_terraformText__WEBPACK_IMPORTED_MODULE_7__["getOutputLines"])(props)));
  return lines;
};

var getTerraFormPackage = function getTerraFormPackage(props) {
  var createFolders = {
    description: 'Create folder for your infrastructure code.',
    tfContent: getMainTfContent(props)
  };
  var mainContent = {
    tfContent: getMainTfContent(props)
  };
  return {
    sections: [createFolders, mainContent],
    footerText: Object(_descriptionText__WEBPACK_IMPORTED_MODULE_2__["getTerraPackageDescription"])(props)
  };
};

/***/ })

})
//# sourceMappingURL=index.js.f9c0bcb90049e2aef068.hot-update.js.map