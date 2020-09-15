webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/utils.tsx":
/*!******************************!*\
  !*** ./components/utils.tsx ***!
  \******************************/
/*! exports provided: SectionBackground, Section, PageWrapper, Colored, sleep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionBackground", function() { return SectionBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageWrapper", function() { return PageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colored", function() { return Colored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var SectionBackground = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "utils__SectionBackground",
  componentId: "sc-1vrdcy-0"
})(["width:100%;background-color:", ";color:", ";margin-top:", ";position:relative;overflow:hidden;"], function (props) {
  return props.backgroundColor !== undefined && props.backgroundColor || props.theme.colors.bgPrimary;
}, function (props) {
  return props.color;
}, function (props) {
  return props.marginTop;
});
var Section = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "utils__Section",
  componentId: "sc-1vrdcy-1"
})(["max-width:", "px;width:100%;margin:0 auto;padding:2rem 1rem;position:relative;@media (min-width:375px){padding-left:2rem;padding-right:2rem;}"], function (p) {
  return p.theme.layout.maxWidth;
});
var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "utils__PageWrapper",
  componentId: "sc-1vrdcy-2"
})(["display:flex;flex-direction:column;width:100%;"]);
var Colored = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "utils__Colored",
  componentId: "sc-1vrdcy-3"
})(["color:", ";"], function (p) {
  return p.secondary ? p.theme.colors.secondary : p.color || p.theme.colors.primary;
});
var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

/***/ })

})
//# sourceMappingURL=index.js.84173f11a03d2396c094.hot-update.js.map