webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/useCurrentUrl.ts":
/*!********************************!*\
  !*** ./utils/useCurrentUrl.ts ***!
  \********************************/
/*! exports provided: useCurrentUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCurrentUrl", function() { return useCurrentUrl; });
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var getDomain = function getDomain() {
  if (window && window.location) {
    return window.location.origin || "".concat(window.location.protocol, "://").concat(window.location.hostname);
  } // TODO: Config this part


  return 'https://ihasabucket.it';
};

var useCurrentUrl = function useCurrentUrl() {
  var includeDomain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var currentUrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var relativeUrl = router.query ? "".concat(router.pathname, "?").concat(querystring__WEBPACK_IMPORTED_MODULE_0___default.a.stringify(router.query)) : router.pathname;

    if (!includeDomain) {
      return relativeUrl;
    }

    return "".concat(getDomain()).concat(currentUrl);
  }, [router.query, router.pathname, router.route]);
  return currentUrl;
};

/***/ })

})
//# sourceMappingURL=index.js.146f3e94aa7a1bc7dfc6.hot-update.js.map