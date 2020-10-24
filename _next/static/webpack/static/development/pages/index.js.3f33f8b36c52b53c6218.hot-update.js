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
  var outcomeText = getOutcomeDescription(props);
  return [certificateWarningText, outcomeText].filter(function (t) {
    return !!t;
  });
};

var getCertificateWarning = function getCertificateWarning(props) {
  if (!props.createCertificates) {
    return '';
  }

  if (props.configureDns) {
    return 'During the setup, we will request HTTPS certificates for your domain, and verify that they are set up correctly. ' + 'This means you will have to go to your registrar and change the DNS pointers to the AWS DNS servers. The DNS server names will be outp' + 'Until that is done, -and- the DNS changes have propageted, the script WILL NOT COMPLETE. ' + 'Instead, it will likely time out. No worries though, just re-run the script after a while, when the DNS records are correct. ' + 'It will continue where it left off.';
  }

  return 'During the setup, we will request HTTPS certificates for your domain, and verify that they are set up correctly. ' + 'This means you will have to go to change your DNS pointers as specified in the Certificate Manager in the AWS console. ' + 'These instructions will be shown under the certificate in status "Pending Verification", which will show up after you have start this script. ' + 'Until that is done, -and- the DNS changes have propageted, the script WILL NOT COMPLETE. ' + 'Instead, it will likely time out. No worries though, just re-run the script after a while, when the DNS records are correct. ' + 'It will continue where it left off.';
};

var getOutcomeDescription = function getOutcomeDescription(props) {
  var useCaseText = getUseCaseDescription(props);
  var count = props.staging ? 'two sets of' : 'a';
  var infraStructure = "S3 bucket".concat(props.webApp ? ' + Cloudfront' : '', ";");
  return "Once run successfully, the script will create ".concat(count, " ").concat(infraStructure, " in ").concat(props.region, ", configured ").concat(useCaseText, ".");
};

var getUseCaseDescription = function getUseCaseDescription(_ref) {
  var webApp = _ref.webApp,
      staticPage = _ref.staticPage,
      shared = _ref.shared;

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
//# sourceMappingURL=index.js.3f33f8b36c52b53c6218.hot-update.js.map