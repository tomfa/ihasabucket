webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/urls.ts":
/*!***********************!*\
  !*** ./utils/urls.ts ***!
  \***********************/
/*! exports provided: useUrlState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUrlState", function() { return useUrlState; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var useUrlState = function useUrlState() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      urlData = _useState[0],
      setUrlData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var newData = getDataFromUrlQuery(router.query);

    if (hasChanged(urlData, newData)) {
      console.log('USEFFECT');
      console.log(urlData, newData);
      setUrlData(newData);
    }
  }, [JSON.stringify(router.query)]);
  console.log('urlData', urlData);
  var updateUrlData = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (data) {
    console.log('urlData', urlData);
    var newData = filterInvalidValues(_objectSpread({}, mapToQuery(urlData), {}, mapToQuery(data)));
    setUrlData(newData);
    console.log('setting url', newData);
    router.push("/?" + querystring__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(newData));
  }, [urlData]);
  return {
    urlData: urlData,
    updateUrlData: updateUrlData
  };
};

var filterInvalidValues = function filterInvalidValues(data) {
  return Object.entries(data).reduce(function (map, _ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (value) {
      return _objectSpread({}, map, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, key, value));
    }

    return map;
  }, {});
};

function valueIsNumber(value) {
  return !Number.isNaN(parseInt(value));
}

var parseToValue = function parseToValue(value) {
  if (value.toLowerCase() === 'false') {
    return false;
  }

  if (value.toLowerCase() === 'true') {
    return true;
  }

  if (valueIsNumber(value)) {
    return parseInt(value);
  }

  return value;
};

var mapToQuery = function mapToQuery(data) {
  return Object.entries(data).reduce(function (map, _ref3) {
    var _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    var stringValue = value instanceof Array ? value.map(function (v) {
      return String(v);
    }) : String(value);
    return _objectSpread({}, map, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, key, stringValue));
  }, {});
};

var getDataFromUrlQuery = function getDataFromUrlQuery(parsedUrlQuery) {
  // Note: This ignores empty string values, e.g. would not support ?webapp
  var urlState = {};
  Object.entries(parsedUrlQuery).forEach(function (_ref5) {
    var _ref6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, 2),
        query = _ref6[0],
        value = _ref6[1];

    if (value) {
      if (value instanceof Array) {
        urlState[query] = value.map(parseToValue);
      } else {
        urlState[query] = parseToValue(value);
      }
    }
  });
  return urlState;
};

var hasChanged = function hasChanged(oldData, newData) {
  return JSON.stringify(oldData) !== JSON.stringify(newData);
};

/***/ })

})
//# sourceMappingURL=index.js.dd52114d1b9b95744310.hot-update.js.map