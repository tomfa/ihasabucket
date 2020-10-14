webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/splitbee.ts":
/*!***************************!*\
  !*** ./utils/splitbee.ts ***!
  \***************************/
/*! exports provided: trail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trail", function() { return trail; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");

var trail = function trail(name, data) {
  var payload = data && Object.fromEntries(Object.entries(data).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return [k, stringify(v)];
  })); // @ts-ignore

  if (!window || !window.splitbee) {
    // eslint-disable-next-line no-console
    console.log('No splitbee');
  } // @ts-ignore
  // eslint-disable-next-line no-console


  console.log('track', name, payload); // eslint-disable-next-line
  //window.splitbee.track(name, data);
};

var stringify = function stringify(value) {
  if (typeof value === 'string') {
    return value;
  }

  if (!value) {
    return null;
  }

  if (value instanceof Array) {
    return value.map(function (v) {
      return v.value;
    }).join(',');
  }

  return value.value;
};

var sensitiveKeys = 'bucketName';

/***/ })

})
//# sourceMappingURL=index.js.07eb1a5cc2fc4714a6db.hot-update.js.map