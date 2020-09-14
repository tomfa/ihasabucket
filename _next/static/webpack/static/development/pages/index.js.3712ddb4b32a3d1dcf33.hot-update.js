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
      lineNumber: 37,
      columnNumber: 5
    }
  }, lines.map(function (line, i) {
    if (line.trim().startsWith('#')) {
      return __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 18
        }
      }, line, '\n');
    }

    return __jsx("span", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 16
      }
    }, line, '\n');
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Code);

/***/ })

})
//# sourceMappingURL=index.js.3712ddb4b32a3d1dcf33.hot-update.js.map