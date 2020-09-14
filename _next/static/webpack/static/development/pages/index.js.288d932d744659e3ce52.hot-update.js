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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums */ "./enums.ts");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var getMainTfContent = function getMainTfContent(_ref) {
  var webApp = _ref.webApp,
      staging = _ref.staging,
      shared = _ref.shared,
      staticPage = _ref.staticPage;
  var source = webApp ? 'git::https://github.com/tomfa/terraform.git//webapp' : "'git::https://github.com/tomfa/terraform.git//files";
  var parameters = {
    bucket_name: "var.".concat(_enums__WEBPACK_IMPORTED_MODULE_2__["INPUT"].BUCKET_NAME),
    aws_region: "var.".concat(_enums__WEBPACK_IMPORTED_MODULE_2__["INPUT"].AWS_REGION)
  };

  if (webApp) {
    parameters.error_path = '"/index.html"';
    parameters.error_code = staticPage ? '404' : '200';
  } else {
    parameters.acl = shared ? '"public-read"' : '"private"';
  }

  var genericBucketName = webApp ? 'web-app' : 'file-storage';
  var modules = staging ? [{
    name: "".concat(genericBucketName, "-production"),
    parameters: parameters
  }, {
    name: "".concat(genericBucketName, "-staging"),
    parameters: _objectSpread({}, parameters, {
      bucket_name: "\"\\${var.bucket_name}.staging\""
    })
  }] : [{
    name: genericBucketName,
    parameters: parameters
  }];
  var lines = [];

  var isUsed = function isUsed(inputVariable) {
    return !!modules.find(function (m) {
      return !!Object.values(m.parameters).find(function (p) {
        return p.includes("var.".concat(inputVariable));
      });
    });
  };

  Object.values(_enums__WEBPACK_IMPORTED_MODULE_2__["INPUT"]).filter(isUsed).forEach(function (input) {
    var description = Object(_enums__WEBPACK_IMPORTED_MODULE_2__["getInputDescription"])(input);

    if (!description) {
      lines.push("variable \"".concat(input, "\" {}"));
    } else {
      lines.push("variable \"".concat(input, "\" {"));
      lines.push("  description = \"".concat(description, "\""));
      lines.push("}");
    }
  });
  modules.forEach(function (module) {
    lines.push('');
    lines.push("module \"".concat(module.name, "\" {"));
    lines.push("  source = \"".concat(source, "\""));
    Object.entries(module.parameters).forEach(function (_ref2) {
      var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1];

      lines.push("  ".concat(key, " = ").concat(value));
    });
    lines.push("}");
  });
  lines.push('');
  Object(_enums__WEBPACK_IMPORTED_MODULE_2__["getOutput"])({
    bucketType: webApp ? _enums__WEBPACK_IMPORTED_MODULE_2__["BUCKET_TYPE"].WEBAPP : _enums__WEBPACK_IMPORTED_MODULE_2__["BUCKET_TYPE"].FILE_STORAGE,
    hasStaging: staging
  }).forEach(function (output) {
    lines.push("output \"".concat(output.label, "\" {"));
    lines.push("  value = ".concat(output.value));
    lines.push('}');
  });
  return lines;
};

var getTerraPackageDescription = function getTerraPackageDescription(_ref4) {
  var webApp = _ref4.webApp,
      staging = _ref4.staging,
      shared = _ref4.shared,
      staticPage = _ref4.staticPage;
  var count = staging ? 'two sets of' : 'a';
  var usecase = getUseCaseDescription({
    webApp: webApp,
    staticPage: staticPage,
    shared: shared
  });
  var iamUserInfo = staging ? 'Two sets of AWS keys will be created that are able to upload to the buckets. One for test and one for production environment' : 'A set of AWS keys will be created that is able to upload to the bucket';
  return "Once run, it will create ".concat(count, " S3 bucket ").concat(webApp ? '+ Cloudfront ' : '', ", configured ").concat(usecase, ". ").concat(iamUserInfo, ". Generated keys will be shown as output in the terminal.");
};

var getUseCaseDescription = function getUseCaseDescription(_ref5) {
  var webApp = _ref5.webApp,
      staticPage = _ref5.staticPage,
      shared = _ref5.shared;

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
    mainTfContent: getMainTfContent(props),
    description: getTerraPackageDescription(props)
  };
};

/***/ })

})
//# sourceMappingURL=index.js.288d932d744659e3ce52.hot-update.js.map