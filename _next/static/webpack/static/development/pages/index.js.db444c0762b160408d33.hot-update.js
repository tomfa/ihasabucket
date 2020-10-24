webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/terraform/terraformText.ts":
/*!******************************************!*\
  !*** ./utils/terraform/terraformText.ts ***!
  \******************************************/
/*! exports provided: toVariablesText, toModulesText, getOutputLines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toVariablesText", function() { return toVariablesText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toModulesText", function() { return toModulesText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOutputLines", function() { return getOutputLines; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums */ "./enums.ts");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./names */ "./utils/terraform/names.ts");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var toVariablesText = function toVariablesText(modules) {
  var lines = [];

  var isUsed = function isUsed(inputVariable) {
    return !!modules.find(function (m) {
      return !!Object.values(m.parameters).find(function (p) {
        return p.includes("var.".concat(inputVariable));
      });
    });
  };

  Object.values(_enums__WEBPACK_IMPORTED_MODULE_3__["INPUT"]).filter(isUsed).forEach(function (input) {
    var description = Object(_enums__WEBPACK_IMPORTED_MODULE_3__["getInputDescription"])(input);

    if (!description) {
      lines.push("variable \"".concat(input, "\" {}"));
    } else {
      lines.push("variable \"".concat(input, "\" {"));
      lines.push("  description = \"".concat(description, "\""));
      lines.push("}");
    }
  });
  lines.push('');
  return lines;
};
var toModulesText = function toModulesText(modules) {
  var lines = [];
  modules.forEach(function (module) {
    lines.push("module \"".concat(module.name, "\" {"));
    lines.push("  source = \"".concat(module.source, "\""));
    Object.entries(module.parameters).forEach(function (_ref) {
      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      lines.push("  ".concat(key, " = ").concat(value));
    });
    lines.push("}");
    lines.push('');
  });
  return lines;
};
var getOutputLines = function getOutputLines(props) {
  var lines = [];
  var bucketModuleNames = Object(_names__WEBPACK_IMPORTED_MODULE_4__["getBucketModuleNames"])(props);
  var bucketType = props.webApp ? _enums__WEBPACK_IMPORTED_MODULE_3__["BUCKET_TYPE"].WEBAPP : _enums__WEBPACK_IMPORTED_MODULE_3__["BUCKET_TYPE"].FILE_STORAGE;
  var outputs = getOutput(_objectSpread({}, props, {
    moduleName: bucketModuleNames.main,
    prefix: props.staging ? 'production-' : ''
  }));

  if (props.staging) {
    outputs.push.apply(outputs, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(getOutput({
      moduleName: bucketModuleNames.staging,
      bucketType: bucketType,
      prefix: 'staging-'
    })));
  }

  outputs.push({
    value: "module.user.AWS_ACCESS_KEY_ID",
    label: "AWS_ACCESS_KEY_ID"
  }, {
    value: "module.user.AWS_SECRET_ACCESS_KEY",
    label: "AWS_SECRET_ACCESS_KEY"
  });
  outputs.forEach(function (output) {
    return lines.push.apply(lines, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(outputAsText(output)));
  });
  return lines;
};

var getOutput = function getOutput(_ref3) {
  var webApp = _ref3.webApp,
      configureDns = _ref3.configureDns,
      moduleName = _ref3.moduleName,
      _ref3$prefix = _ref3.prefix,
      prefix = _ref3$prefix === void 0 ? '' : _ref3$prefix;
  var outputs = [];
  outputs.push({
    value: "module.".concat(moduleName, ".BUCKET_NAME"),
    label: "".concat(prefix, "BUCKET_NAME")
  });

  if (webApp) {
    if (!configureDns) {
      outputs.push({
        value: "module.".concat(moduleName, ".CLOUDFRONT_URL"),
        label: "".concat(prefix, "CLOUDFRONT_URL")
      });
    }

    outputs.push({
      value: "module.".concat(moduleName, ".CLOUDFRONT_DISTRIBUTION_ID "),
      label: "".concat(prefix, "CLOUDFRONT_URL")
    });
  }

  return outputs;
};

var outputAsText = function outputAsText(output) {
  var lines = [];
  lines.push("output \"".concat(output.label, "\" {"));
  lines.push("  value = ".concat(output.value));

  if (output.description) {
    lines.push("  description = ".concat(output.description));
  }

  lines.push('}');
  return lines;
};

/***/ })

})
//# sourceMappingURL=index.js.db444c0762b160408d33.hot-update.js.map