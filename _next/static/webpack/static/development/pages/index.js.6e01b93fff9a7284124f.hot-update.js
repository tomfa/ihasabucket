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
var getTerraPackageUrl = function getTerraPackageUrl(_ref) {
  var webApp = _ref.webApp,
      staging = _ref.staging,
      shared = _ref.shared,
      staticPage = _ref.staticPage;
  var bucketType = webApp ? 'webapp' : 'files';
  var count = staging ? 'double' : 'single';
  var category = getBucketSubCategory({
    webApp: webApp,
    shared: shared,
    staticPage: staticPage
  });
  return "github.com/tomfa/terraform/".concat(bucketType, "/").concat(category, "/").concat(count);
};

var getTerraPackageDescription = function getTerraPackageDescription(_ref2) {
  var webApp = _ref2.webApp,
      staging = _ref2.staging,
      shared = _ref2.shared,
      staticPage = _ref2.staticPage;
  var count = staging ? 'two sets of' : 'a';
  var usecase = getUseCaseDescription({
    webApp: webApp,
    staticPage: staticPage,
    shared: shared
  });
  var iamUserInfo = staging ? 'Two sets of AWS keys will be created that are able to upload to the buckets. One for test and one for production environment' : 'A set of AWS keys will be created that is able to upload to the bucket';
  return "Once run, it will create ".concat(count, " S3 bucket + Cloudfront, configured ").concat(usecase, ". ").concat(iamUserInfo, ".");
};

var getBucketSubCategory = function getBucketSubCategory(_ref3) {
  var webApp = _ref3.webApp,
      staticPage = _ref3.staticPage,
      shared = _ref3.shared;

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

var getUseCaseDescription = function getUseCaseDescription(_ref4) {
  var webApp = _ref4.webApp,
      staticPage = _ref4.staticPage,
      shared = _ref4.shared;

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
    url: getTerraPackageUrl(props),
    description: getTerraPackageDescription(props)
  };
};

/***/ })

})
//# sourceMappingURL=index.js.6e01b93fff9a7284124f.hot-update.js.map