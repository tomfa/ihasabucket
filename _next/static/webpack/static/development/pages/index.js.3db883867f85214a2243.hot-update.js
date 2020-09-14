webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Infrastructure/Code.tsx":
/*!********************************************!*\
  !*** ./components/Infrastructure/Code.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Mute_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mute.style */ "./components/Infrastructure/Mute.style.tsx");
/* harmony import */ var _Pre_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pre.style */ "./components/Infrastructure/Pre.style.tsx");
/* harmony import */ var _PreButton_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreButton.style */ "./components/Infrastructure/PreButton.style.tsx");


var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/Infrastructure/Code.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable react/no-array-index-key */




var copyToClipBoard = function copyToClipBoard(text) {
  var textField = document.createElement('textarea');
  textField.setAttribute('style', 'position: absolute; bottom: 0; top: 0; opacity: 0.01; height: 1px; width: 1px');
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
};

var Code = function Code(_ref) {
  var mainTfContent = _ref.mainTfContent,
      bucketName = _ref.bucketName;
  var lines = ['# Create a folder to store infrastructure code', 'mkdir infrastructure', 'cd infrastructure', '', '# Create config file', "cat <<EOT >> ".concat(bucketName || 'main', ".tf")].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(mainTfContent), ['EOT', '', '# Deploy', 'terraform init', 'terraform apply']);
  return __jsx(_Pre_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, lines.map(function (line, i) {
    if (line.trim().startsWith('#')) {
      return __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 18
        }
      }, line, '\n');
    }

    return __jsx("span", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 16
      }
    }, line, '\n');
  }), __jsx(_PreButton_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: copyToClipBoard(lines.join('\n')),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "Copy to clipboard"));
};

/* harmony default export */ __webpack_exports__["default"] = (Code);

/***/ }),

/***/ "./components/Infrastructure/PreButton.style.tsx":
/*!*******************************************************!*\
  !*** ./components/Infrastructure/PreButton.style.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var PreButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "PreButtonstyle__PreButton",
  componentId: "acmi2m-0"
})(["background-color:", ";color:", ";position:absolute;bottom:5px;right:5px;"], function (p) {
  return p.theme.colors.bgPrimary;
}, function (p) {
  return p.theme.colors.textPrimary;
});
/* harmony default export */ __webpack_exports__["default"] = (PreButton);

/***/ })

})
//# sourceMappingURL=index.js.3db883867f85214a2243.hot-update.js.map