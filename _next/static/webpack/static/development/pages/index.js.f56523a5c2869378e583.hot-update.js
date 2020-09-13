webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/input/CheckboxGroup.tsx":
/*!********************************************!*\
  !*** ./components/input/CheckboxGroup.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox */ "./components/input/Checkbox.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/input/CheckboxGroup.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CheckboxGroup = function CheckboxGroup(_ref) {
  var options = _ref.options,
      selectedOption = _ref.selectedOption,
      onChange = _ref.onChange,
      title = _ref.title,
      disabled = _ref.disabled;
  var onOptionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return function (value, checked) {
      if (disabled) {
        return;
      }

      if (!checked) {
        return onChange(null);
      }

      var checkedOption = options.find(function (o) {
        return o.value === value;
      });
      checkedOption && onChange(checkedOption);
    };
  }, [disabled, options, onChange]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, title && __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, title), options.map(function (o) {
    return __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: o.value,
      checked: selectedOption && selectedOption.value === o.value,
      onChange: onOptionChange,
      value: o.value,
      label: o.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckboxGroup);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/utils */ "./components/utils.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.tsx");
/* harmony import */ var _components_BlockQuote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BlockQuote */ "./components/BlockQuote/index.tsx");
/* harmony import */ var _components_input_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/input/CheckboxGroup */ "./components/input/CheckboxGroup.tsx");
var _jsxFileName = "/Users/tomfa/repos/s3launchpad/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      selected = _useState[0],
      setSelected = _useState[1];

  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["PageWrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Main"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(_components_BlockQuote__WEBPACK_IMPORTED_MODULE_3__["default"], {
    author: 'Lolrus, the bucket walrus',
    source: 'At the launch of AWS S3 in 2006',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Hosting a", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 22
    }
  }, " webapp "), "or need to store uploads? Put them in S3 buckets. It's", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, " cheap "), "and", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, " reliable"), ". Let me show how", __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Colored"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, " easy "), "it is."))), __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["Section"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_components_input_CheckboxGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    options: [{
      value: 'fish',
      label: 'Fish'
    }, {
      value: 'hunt',
      label: 'Hunt'
    }],
    selectedOption: {
      value: 'fish',
      label: 'Fish'
    },
    onChange: function onChange() {},
    title: 'Do you want to fish or hunt?',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.f56523a5c2869378e583.hot-update.js.map