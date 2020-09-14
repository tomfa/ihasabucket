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



var Code = function Code(_ref) {
  var mainTfContent = _ref.mainTfContent,
      bucketName = _ref.bucketName;
  return __jsx(_Pre_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, "# Create a folder to store infrastructure code"), '\n', "mkdir infrastructure", '\n', "cd infrastructure", '\n', '\n', __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, "# Create config file"), '\n', "cat <<EOT >> $", bucketName || 'main.tf', ".tf", '\n', mainTfContent.map(function (line, i) {
    return (// eslint-disable-next-line react/no-array-index-key
      __jsx("span", {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 7
        }
      }, line, '\n')
    );
  }), "EOT", '\n', '\n', __jsx(_Mute_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, "# Deploy"), '\n', "terraform init", '\n', "terraform apply", '\n');
};

/* harmony default export */ __webpack_exports__["default"] = (Code);

/***/ })

})
//# sourceMappingURL=index.js.dd1fbdd9b638c03966e5.hot-update.js.map