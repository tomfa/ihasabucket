webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Infrastructure/Code.tsx":
/*!********************************************!*\
  !*** ./components/Infrastructure/Code.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Mute_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mute.style */ "./components/Infrastructure/Mute.style.tsx");
/* harmony import */ var _Pre_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pre.style */ "./components/Infrastructure/Pre.style.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/Infrastructure/Code.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



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
  var lines = ['# Create a folder to store infrastructure code', '', 'mkdir infrastructure', 'cd infrastructure', '', '# Create config file', "cat <<EOT >> ".concat(bucketName || 'main', ".tf")];
  return __jsx(_Pre_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "# Create a folder to store infrastructure code"), '\n', "mkdir infrastructure", '\n', "cd infrastructure", '\n', '\n', __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "# Create config file"), '\n', "cat <<EOT >> $", bucketName || 'main.tf', ".tf", '\n', mainTfContent.map(function (line, i) {
    return (// eslint-disable-next-line react/no-array-index-key
      __jsx("span", {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      }, line, '\n')
    );
  }), "EOT", '\n', '\n', __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, "# Deploy"), '\n', "terraform init", '\n', "terraform apply", '\n');
};

/* harmony default export */ __webpack_exports__["default"] = (Code);

/***/ })

})
//# sourceMappingURL=index.js.904eb6d34d533844cbe2.hot-update.js.map