webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/terraform/descriptionText.ts":
/*!********************************************!*\
  !*** ./utils/terraform/descriptionText.ts ***!
  \********************************************/
/*! exports provided: getTerraPackageDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTerraPackageDescription", function() { return getTerraPackageDescription; });
var getTerraPackageDescription = function getTerraPackageDescription(props) {
  var certificateWarningText = getCertificateWarning(props);
  var authText = getAuthDescription(props);
  var outcomeText = getOutcomeDescription(props);
  return [certificateWarningText, outcomeText, authText].filter(function (t) {
    return !!t;
  });
};

var getCertificateWarning = function getCertificateWarning(props) {
  if (!props.createCertificates) {
    return '';
  }

  if (props.configureDns) {
    return 'During the setup, we will request HTTPS certificates for your domain, and verify that they are set up correctly. ' + 'This means you will have to go to your registrar and change the DNS pointers to the AWS DNS servers. You can find their names in Route 53 in the AWS console. ' + 'Until that is done, -and- the DNS changes have propageted, the script WILL NOT COMPLETE. ' + 'Instead, it will likely time out. No worries though, just re-run the script after a while, when the DNS records are correct. ' + 'It will continue where it left off.';
  }

  return 'During the setup, we will request HTTPS certificates for your domain, and verify that they are set up correctly. ' + 'This means you will have to go to change your DNS pointers as specified in the Certificate Manager in the AWS console. ' + 'These instructions will be shown under the certificate in status "Pending Verification", which will show up after you have start this script. ' + 'Until that is done, -and- the DNS changes have propageted, the script WILL NOT COMPLETE. ' + 'Instead, it will likely time out. No worries though, just re-run the script after a while, when the DNS records are correct. ' + 'It will continue where it left off.';
};

var getOutcomeDescription = function getOutcomeDescription(props) {
  var useCaseText = getUseCaseDescription(props);
  var count = props.staging ? 'two sets of' : 'a';
  var infraStructure = "S3 bucket".concat(props.webApp ? ' + Cloudfront' : '', ";");
  return "Once run successfully, the script will create ".concat(count, " ").concat(infraStructure, " in ").concat(props.region, ", configured ").concat(useCaseText, ".");
};

var getAuthDescription = function getAuthDescription(_ref) {
  var staging = _ref.staging;
  var keysInfo = staging ? 'Two sets of AWS keys will be created that are able to upload to the buckets. One for test and one for production environment.' : 'A set of AWS keys will be created that is able to upload to the bucket.';
  var keysUsage = 'Generated keys will be shown as output in the terminal. These can be used to upload new versions of the app to the bucket.';
  return "".concat(keysInfo, " ").concat(keysUsage);
};

var getUseCaseDescription = function getUseCaseDescription(_ref2) {
  var webApp = _ref2.webApp,
      staticPage = _ref2.staticPage,
      shared = _ref2.shared;

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

/***/ })

})
//# sourceMappingURL=index.js.3dba4855eaef954ed356.hot-update.js.map