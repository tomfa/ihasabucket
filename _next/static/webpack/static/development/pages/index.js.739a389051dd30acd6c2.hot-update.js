webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BlockQuote/Quote.style.tsx":
/*!***********************************************!*\
  !*** ./components/BlockQuote/Quote.style.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var QuoteStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2.withConfig({
  displayName: "Quotestyle__QuoteStyle",
  componentId: "sc-1bl7c8l-0"
})(["font-family:", ";position:relative;font-size:1.4rem;font-weight:normal;line-height:1.1;margin:0;border:2px solid #fff;border:solid 2px;border-radius:20px;padding:25px;& > *{line-height:1.1;}&:after{content:'';position:absolute;border:2px solid;border-radius:0 50px 0 0;width:60px;height:60px;bottom:-62px;left:50px;border-bottom:none;border-left:none;z-index:3;}&:before{content:'';position:absolute;width:80px;border:6px solid ", ";bottom:-3px;left:50px;z-index:2;}@media (min-width:600px){font-size:2rem;}"], function (p) {
  return p.theme.fonts.secondary;
}, function (props) {
  return props.theme.colors.bgPrimary;
});
/* harmony default export */ __webpack_exports__["default"] = (QuoteStyle);

/***/ }),

/***/ "./components/forms/CheckboxGroup.tsx":
/*!********************************************!*\
  !*** ./components/forms/CheckboxGroup.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header.style */ "./components/Header.style.tsx");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Checkbox */ "./components/forms/Checkbox.tsx");
/* harmony import */ var _Description_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Description.style */ "./components/forms/Description.style.tsx");
/* harmony import */ var _Choices_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Choices.style */ "./components/forms/Choices.style.tsx");
/* harmony import */ var _Question_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Question.style */ "./components/forms/Question.style.tsx");


var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/forms/CheckboxGroup.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var CheckboxGroup = function CheckboxGroup(_ref) {
  var id = _ref.id,
      options = _ref.options,
      selectedOptions = _ref.selectedOptions,
      onChange = _ref.onChange,
      title = _ref.title,
      description = _ref.description,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var onOptionChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (value, checked) {
    if (disabled) {
      return;
    }

    var selectedExceptThisOption = selectedOptions.filter(function (o) {
      return o.value !== value;
    });

    if (!checked) {
      return onChange(selectedExceptThisOption);
    }

    var checkedOption = options.find(function (o) {
      return o.value === value;
    });
    checkedOption && onChange([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedExceptThisOption), [checkedOption]));
  }, [disabled, options, onChange, selectedOptions]);
  return __jsx(_Question_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, title && __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, title), __jsx(_Choices_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, options.map(function (o) {
    return __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
      group: id,
      key: o.value,
      checked: selectedOptions.includes(o),
      onChange: onOptionChange,
      value: o.value,
      label: o.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    });
  })), description && __jsx(_Description_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 23
    }
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckboxGroup);

/***/ }),

/***/ "./components/forms/Dropdown.tsx":
/*!***************************************!*\
  !*** ./components/forms/Dropdown.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header.style */ "./components/Header.style.tsx");
/* harmony import */ var _Description_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Description.style */ "./components/forms/Description.style.tsx");
/* harmony import */ var _Question_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Question.style */ "./components/forms/Question.style.tsx");
/* harmony import */ var _InputContainer_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputContainer.styles */ "./components/forms/InputContainer.styles.tsx");
/* harmony import */ var _SubmitButton_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubmitButton.styles */ "./components/forms/SubmitButton.styles.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/forms/Dropdown.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Select = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].select.withConfig({
  displayName: "Dropdown__Select",
  componentId: "ca76f5-0"
})(["font-size:1.2rem;padding:1rem;flex:1;border:none;appearance:none;background-color:white;&:focus,&:active{outline-style:dashed;outline-width:2px;outline-color:", ";margin-right:3px;}"], function (p) {
  return p.theme.colors.primary;
});
var Choice = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].option.withConfig({
  displayName: "Dropdown__Choice",
  componentId: "ca76f5-1"
})(["color:", ";"], function (p) {
  return p.theme.colors.textPrimary;
});

var DropDown = function DropDown(_ref) {
  var id = _ref.id,
      options = _ref.options,
      selectedOption = _ref.selectedOption,
      onChange = _ref.onChange,
      title = _ref.title,
      description = _ref.description,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var onOptionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    if (disabled) {
      return;
    }

    var checkedOption = options.find(function (o) {
      return o.value === value;
    });
    checkedOption && onChange(checkedOption);
  }, [disabled, options, onChange]);
  return __jsx(_Question_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, title && __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, title), __jsx(_InputContainer_styles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(Select, {
    value: selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value,
    onChange: function onChange(e) {
      return onOptionChange(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, options.map(function (o) {
    return __jsx(Choice, {
      key: "".concat(id, "-").concat(o.value),
      value: o.value,
      label: o.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, o.label);
  })), __jsx(_SubmitButton_styles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "submit",
    complete: !!selectedOption,
    onClick: function onClick() {
      return onOptionChange(selectedOption.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  })), description && __jsx(_Description_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 23
    }
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (DropDown);

/***/ }),

/***/ "./components/forms/RadioGroup.tsx":
/*!*****************************************!*\
  !*** ./components/forms/RadioGroup.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header.style */ "./components/Header.style.tsx");
/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Radio */ "./components/forms/Radio.tsx");
/* harmony import */ var _Description_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Description.style */ "./components/forms/Description.style.tsx");
/* harmony import */ var _Choices_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Choices.style */ "./components/forms/Choices.style.tsx");
/* harmony import */ var _Question_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Question.style */ "./components/forms/Question.style.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/forms/RadioGroup.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var RadioGroup = function RadioGroup(_ref) {
  var id = _ref.id,
      options = _ref.options,
      selectedOption = _ref.selectedOption,
      onChange = _ref.onChange,
      title = _ref.title,
      description = _ref.description,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var onOptionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value, checked) {
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
  }, [disabled, options, onChange]);
  return __jsx(_Question_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, title && __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, title), __jsx(_Choices_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, options.map(function (o) {
    return __jsx(_Radio__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: "".concat(id, "-").concat(o.value),
      group: id,
      checked: o === selectedOption,
      onChange: onOptionChange,
      value: o.value,
      label: o.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }
    });
  })), description && __jsx(_Description_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 23
    }
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (RadioGroup);

/***/ }),

/***/ "./components/forms/TextInput.tsx":
/*!****************************************!*\
  !*** ./components/forms/TextInput.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header.style */ "./components/Header.style.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./components/utils.tsx");
/* harmony import */ var _Description_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Description.style */ "./components/forms/Description.style.tsx");
/* harmony import */ var _Question_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Question.style */ "./components/forms/Question.style.tsx");
/* harmony import */ var _Input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Input.style */ "./components/forms/Input.style.tsx");
/* harmony import */ var _InputContainer_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InputContainer.styles */ "./components/forms/InputContainer.styles.tsx");
/* harmony import */ var _SubmitButton_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SubmitButton.styles */ "./components/forms/SubmitButton.styles.tsx");


var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/components/forms/TextInput.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var TextInput = function TextInput(_ref) {
  var id = _ref.id,
      _onChange = _ref.onChange,
      onSubmit = _ref.onSubmit,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      title = _ref.title,
      placeholder = _ref.placeholder,
      placeholders = _ref.placeholders,
      description = _ref.description;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((placeholders === null || placeholders === void 0 ? void 0 : placeholders.length) ? 0 : -1),
      placeholderIndex = _useState[0],
      setPlaceholderIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(placeholderIndex === -1 ? placeholder : placeholders[placeholderIndex]),
      currentPlaceHolder = _useState2[0],
      setCurrentPlaceHolder = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!placeholders || placeholders.length < 2) {
      return;
    }

    updatePlaceHolderDelayed(placeholders, placeholderIndex, setPlaceholderIndex, setCurrentPlaceHolder);
  }, [placeholderIndex]);
  var cleanInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (val) {
    if (!val) {
      return '';
    }

    return val.toLowerCase().replace(' ', '-');
  }, []);
  var submit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (submitValue) {
    onSubmit(cleanInput(submitValue));
  }, [onSubmit, cleanInput]);
  return __jsx(_Question_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, title && __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, title), __jsx(_InputContainer_styles__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(_Input_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "text",
    value: value || '',
    placeholder: currentPlaceHolder,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    onKeyPress: function onKeyPress(e) {
      return e.key === 'Enter' && submit(value);
    },
    onBlur: function onBlur() {
      return submit(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx(_SubmitButton_styles__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "submit",
    complete: value && value.trim().length > 0,
    onClick: function onClick() {
      return submit(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  })), description && __jsx(_Description_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 23
    }
  }, description));
};

var updatePlaceHolderDelayed = function updatePlaceHolderDelayed(placeholders, placeholderIndex, setPlaceholderIndex, setCurrentPlaceHolder) {
  var delayMs,
      oldPlaceHolder,
      newPlaceHolder,
      steps,
      stepSizeMs,
      i,
      shouldRemove,
      shouldAdd,
      _args = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function updatePlaceHolderDelayed$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          delayMs = _args.length > 4 && _args[4] !== undefined ? _args[4] : 7000;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["sleep"])(delayMs));

        case 3:
          oldPlaceHolder = placeholders[placeholderIndex % placeholders.length];
          newPlaceHolder = placeholders[(placeholderIndex + 1) % placeholders.length];
          steps = oldPlaceHolder.length + newPlaceHolder.length + 4;
          stepSizeMs = 25;
          i = 0;

        case 8:
          if (!(i <= steps)) {
            _context.next = 17;
            break;
          }

          shouldRemove = i <= oldPlaceHolder.length;
          shouldAdd = steps - i <= newPlaceHolder.length;

          if (shouldRemove) {
            setCurrentPlaceHolder(oldPlaceHolder.substr(0, oldPlaceHolder.length - i));
          } else if (shouldAdd) {
            setCurrentPlaceHolder(newPlaceHolder.substr(0, newPlaceHolder.length - (steps - i)));
          } //  – it's ok in a for loop
          // eslint-disable-next-line no-await-in-loop


          _context.next = 14;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["sleep"])(stepSizeMs));

        case 14:
          i++;
          _context.next = 8;
          break;

        case 17:
          setPlaceholderIndex(function (index) {
            return index + 1 % placeholders.length;
          });

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ }),

/***/ "./node_modules/scroll-into-view/scrollIntoView.js":
/*!*********************************************************!*\
  !*** ./node_modules/scroll-into-view/scrollIntoView.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var COMPLETE = 'complete',
    CANCELED = 'canceled';

function raf(task){
    if('requestAnimationFrame' in window){
        return window.requestAnimationFrame(task);
    }

    setTimeout(task, 16);
}

function setElementScroll(element, x, y){
    if(element.self === element){
        element.scrollTo(x, y);
    }else{
        element.scrollLeft = x;
        element.scrollTop = y;
    }
}

function getTargetScrollLocation(scrollSettings, parent){
    var align = scrollSettings.align,
        target = scrollSettings.target,
        targetPosition = target.getBoundingClientRect(),
        parentPosition,
        x,
        y,
        differenceX,
        differenceY,
        targetWidth,
        targetHeight,
        leftAlign = align && align.left != null ? align.left : 0.5,
        topAlign = align && align.top != null ? align.top : 0.5,
        leftOffset = align && align.leftOffset != null ? align.leftOffset : 0,
        topOffset = align && align.topOffset != null ? align.topOffset : 0,
        leftScalar = leftAlign,
        topScalar = topAlign;

    if(scrollSettings.isWindow(parent)){
        targetWidth = Math.min(targetPosition.width, parent.innerWidth);
        targetHeight = Math.min(targetPosition.height, parent.innerHeight);
        x = targetPosition.left + parent.pageXOffset - parent.innerWidth * leftScalar + targetWidth * leftScalar;
        y = targetPosition.top + parent.pageYOffset - parent.innerHeight * topScalar + targetHeight * topScalar;
        x -= leftOffset;
        y -= topOffset;
        differenceX = x - parent.pageXOffset;
        differenceY = y - parent.pageYOffset;
    }else{
        targetWidth = targetPosition.width;
        targetHeight = targetPosition.height;
        parentPosition = parent.getBoundingClientRect();
        var offsetLeft = targetPosition.left - (parentPosition.left - parent.scrollLeft);
        var offsetTop = targetPosition.top - (parentPosition.top - parent.scrollTop);
        x = offsetLeft + (targetWidth * leftScalar) - parent.clientWidth * leftScalar;
        y = offsetTop + (targetHeight * topScalar) - parent.clientHeight * topScalar;
        x -= leftOffset;
        y -= topOffset;
        x = Math.max(Math.min(x, parent.scrollWidth - parent.clientWidth), 0);
        y = Math.max(Math.min(y, parent.scrollHeight - parent.clientHeight), 0);
        differenceX = x - parent.scrollLeft;
        differenceY = y - parent.scrollTop;
    }

    return {
        x: x,
        y: y,
        differenceX: differenceX,
        differenceY: differenceY
    };
}

function animate(parent){
    var scrollSettings = parent._scrollSettings;

    if(!scrollSettings){
        return;
    }

    var maxSynchronousAlignments = scrollSettings.maxSynchronousAlignments;

    var location = getTargetScrollLocation(scrollSettings, parent),
        time = Date.now() - scrollSettings.startTime,
        timeValue = Math.min(1 / scrollSettings.time * time, 1);

    if(scrollSettings.endIterations >= maxSynchronousAlignments){
        setElementScroll(parent, location.x, location.y);
        parent._scrollSettings = null;
        return scrollSettings.end(COMPLETE);
    }

    var easeValue = 1 - scrollSettings.ease(timeValue);

    setElementScroll(parent,
        location.x - location.differenceX * easeValue,
        location.y - location.differenceY * easeValue
    );

    if(time >= scrollSettings.time){
        scrollSettings.endIterations++;
        return animate(parent);
    }

    raf(animate.bind(null, parent));
}

function defaultIsWindow(target){
    return target.self === target
}

function transitionScrollTo(target, parent, settings, callback){
    var idle = !parent._scrollSettings,
        lastSettings = parent._scrollSettings,
        now = Date.now(),
        cancelHandler,
        passiveOptions = { passive: true };

    if(lastSettings){
        lastSettings.end(CANCELED);
    }

    function end(endType){
        parent._scrollSettings = null;

        if(parent.parentElement && parent.parentElement._scrollSettings){
            parent.parentElement._scrollSettings.end(endType);
        }

        if(settings.debug){
            console.log('Scrolling ended with type', endType, 'for', parent)
        }

        callback(endType);
        if(cancelHandler){
            parent.removeEventListener('touchstart', cancelHandler, passiveOptions);
            parent.removeEventListener('wheel', cancelHandler, passiveOptions);
        }
    }

    var maxSynchronousAlignments = settings.maxSynchronousAlignments;

    if(maxSynchronousAlignments == null){
        maxSynchronousAlignments = 3;
    }

    parent._scrollSettings = {
        startTime: now,
        endIterations: 0,
        target: target,
        time: settings.time,
        ease: settings.ease,
        align: settings.align,
        isWindow: settings.isWindow || defaultIsWindow,
        maxSynchronousAlignments: maxSynchronousAlignments,
        end: end
    };

    if(!('cancellable' in settings) || settings.cancellable){
        cancelHandler = end.bind(null, CANCELED);
        parent.addEventListener('touchstart', cancelHandler, passiveOptions);
        parent.addEventListener('wheel', cancelHandler, passiveOptions);
    }

    if(idle){
        animate(parent);
    }

    return cancelHandler
}

function defaultIsScrollable(element){
    return (
        'pageXOffset' in element ||
        (
            element.scrollHeight !== element.clientHeight ||
            element.scrollWidth !== element.clientWidth
        ) &&
        getComputedStyle(element).overflow !== 'hidden'
    );
}

function defaultValidTarget(){
    return true;
}

function findParentElement(el){
    if (el.assignedSlot) {
        return findParentElement(el.assignedSlot);
    }

    if (el.parentElement) {
        if(el.parentElement.tagName === 'BODY'){
            return el.parentElement.ownerDocument.defaultView || el.parentElement.ownerDocument.ownerWindow;
        }
        return el.parentElement;
    }

    if (el.getRootNode){
        var parent = el.getRootNode()
        if(parent.nodeType === 11) {
            return parent.host;
        }
    }
}

module.exports = function(target, settings, callback){
    if(!target){
        return;
    }

    if(typeof settings === 'function'){
        callback = settings;
        settings = null;
    }

    if(!settings){
        settings = {};
    }

    settings.time = isNaN(settings.time) ? 1000 : settings.time;
    settings.ease = settings.ease || function(v){return 1 - Math.pow(1 - v, v / 2);};

    var parent = findParentElement(target),
        parents = 1;

    function done(endType){
        parents--;
        if(!parents){
            callback && callback(endType);
        }
    }

    var validTarget = settings.validTarget || defaultValidTarget;
    var isScrollable = settings.isScrollable;

    if(settings.debug){
        console.log('About to scroll to', target)

        if(!parent){
            console.error('Target did not have a parent, is it mounted in the DOM?')
        }
    }

    var cancel;

    while(parent){
        if(settings.debug){
            console.log('Scrolling parent node', parent)
        }

        if(validTarget(parent, parents) && (isScrollable ? isScrollable(parent, defaultIsScrollable) : defaultIsScrollable(parent))){
            parents++;
            cancel = transitionScrollTo(target, parent, settings, done);
        }

        parent = findParentElement(parent);

        if(!parent){
            done(COMPLETE)
            break;
        }
    }

    return cancel;
};


/***/ }),

/***/ "./questions/useQuestions.ts":
/*!***********************************!*\
  !*** ./questions/useQuestions.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./enums.ts");
/* harmony import */ var _utils_useUrlState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useUrlState */ "./utils/useUrlState.ts");
/* harmony import */ var _utils_splitbee__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/splitbee */ "./utils/splitbee.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./questions/utils.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data */ "./questions/data.ts");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var useQuestions = function useQuestions() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      hasReceivedInput = _useState[0],
      setHasReceivedInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      answeredQuestions = _useState2[0],
      setAnsweredQuestions = _useState2[1];

  var _useUrlState = Object(_utils_useUrlState__WEBPACK_IMPORTED_MODULE_4__["useUrlState"])(),
      urlData = _useUrlState.urlData,
      updateUrlData = _useUrlState.updateUrlData;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      answers = _useState3[0],
      setAnswers = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var initialDefaultAnswersLoaded = Object.keys(answers).length > 0;
    var hasUrlData = Object.keys(urlData).length > 0;
    var hasAnsweredQuestions = answeredQuestions.length > 0;

    if (hasReceivedInput || hasAnsweredQuestions) {
      return;
    }

    if (!initialDefaultAnswersLoaded) {
      var defaultAnswers = getInitialAnswers();
      setAnswers(defaultAnswers);
    }

    if (!hasUrlData) {
      return;
    }

    var urlAnsweredQuestions = getQuestionsInUrlData(urlData);
    var urlAnswers = getInitialAnswers(urlData);
    setAnswers(urlAnswers);
    setAnsweredQuestions(urlAnsweredQuestions);
  }, [urlData, answers, answeredQuestions, hasReceivedInput]);
  var renderQuestions = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getQuestionsToRender"])(answers, answeredQuestions);
  }, [answeredQuestions, answers]);
  var hasAnsweredAll = !renderQuestions.find(function (q) {
    return !answeredQuestions.includes(q.id);
  });
  var updateAnswer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (questionId, answer) {
    setHasReceivedInput(true);
    updateUrlData(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, String(questionId), Object(_utils__WEBPACK_IMPORTED_MODULE_6__["normalizeAnswer"])(answer)));
    setAnswers(function (prevAnswers) {
      return _objectSpread({}, prevAnswers, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, questionId, answer));
    });
  }, [setAnswers, updateUrlData]);
  var answerQuestion = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (questionId, answer) {
    updateAnswer(questionId, answer);
    setAnsweredQuestions(function (qs) {
      if (qs.includes(questionId)) {
        return qs;
      }

      Object(_utils_splitbee__WEBPACK_IMPORTED_MODULE_5__["trail"])(questionId, {
        answer: answer
      });
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(qs), [questionId]);
    });
  }, [updateAnswer]);
  return {
    answers: answers,
    renderQuestions: renderQuestions,
    updateAnswer: updateAnswer,
    answerQuestion: answerQuestion,
    hasAnsweredAll: hasAnsweredAll
  };
};

var getInitialAnswers = function getInitialAnswers(urlData) {
  return _data__WEBPACK_IMPORTED_MODULE_7__["questions"].reduce(function (map, question) {
    return _objectSpread({}, map, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, question.id, Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getDefaultAnswer"])(question, urlData && urlData[question.id] !== undefined ? String(urlData[question.id]) : undefined)));
  }, {});
};

var getQuestionsInUrlData = function getQuestionsInUrlData(urlData) {
  var urlQuestions = Object.keys(urlData);
  var hasAnsweredEmptyBucketName = urlQuestions.length && !urlQuestions.includes(_enums__WEBPACK_IMPORTED_MODULE_3__["QUESTION_ID"].bucketName);

  if (hasAnsweredEmptyBucketName) {
    urlQuestions.push(_enums__WEBPACK_IMPORTED_MODULE_3__["QUESTION_ID"].bucketName);
  }

  return urlQuestions;
};

/* harmony default export */ __webpack_exports__["default"] = (useQuestions);

/***/ }),

/***/ "./sections/Footer/index.tsx":
/*!***********************************!*\
  !*** ./sections/Footer/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/utils */ "./components/utils.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _FooterLinks_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterLinks.style */ "./sections/Footer/FooterLinks.style.tsx");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Link */ "./sections/Footer/Link.tsx");
/* harmony import */ var _FooterAside_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FooterAside.style */ "./sections/Footer/FooterAside.style.tsx");
/* harmony import */ var _FooterHeader_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FooterHeader.style */ "./sections/Footer/FooterHeader.style.tsx");
/* harmony import */ var _FooterSection_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FooterSection.style */ "./sections/Footer/FooterSection.style.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/sections/Footer/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Footer = function Footer() {
  var theme = Object(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["SectionBackground"], {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.textSecondary,
    marginTop: '3rem',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_FooterSection_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_FooterAside_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_FooterHeader_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Wat"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "I love Heroku, Vercel seems awesome, Squarespace is a great product. All respect to those who maintain their own servers at DigitalOcean."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "But when it comes to simply hosting a web app or static files, AWS S3 is usually faster, cheaper, more reliable and easier \u2013 as long as you stay clear of the AWS console."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Let me help you with that.")), __jsx(_FooterAside_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    right: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_FooterHeader_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Links"), __jsx(_FooterLinks_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: 'https://tomasafagerbekk.typeform.com/to/K9yBG3Af',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Give feedback"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: 'https://tomasafagerbekk.typeform.com/to/K9yBG3Af',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Ask a question"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: 'https://medium.com/trackstack/deploying-a-react-app-to-aws-s3-with-github-actions-b1cb9ba75c95',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Deploying app to S3"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: 'https://github.com/tomfa/s3-uploader',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "User upload to S3"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: 'https://learn.hashicorp.com/tutorials/terraform/github-actions',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Infrastructure with CI")), __jsx(_FooterHeader_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "Me"), __jsx(_FooterLinks_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: 'https://github.com/tomfa/ihasabucket',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Github"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: 'https://linkedin.com/in/fagerbekk',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "LinkedIn"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: 'https://tomfa.github.io',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Homepage")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./sections/Questionare.tsx":
/*!**********************************!*\
  !*** ./sections/Questionare.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scroll_into_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scroll-into-view */ "./node_modules/scroll-into-view/scrollIntoView.js");
/* harmony import */ var scroll_into_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scroll_into_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _questions_useQuestions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questions/useQuestions */ "./questions/useQuestions.ts");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/utils */ "./components/utils.tsx");
/* harmony import */ var _components_forms_RadioGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/forms/RadioGroup */ "./components/forms/RadioGroup.tsx");
/* harmony import */ var _components_forms_CheckboxGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/forms/CheckboxGroup */ "./components/forms/CheckboxGroup.tsx");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums */ "./enums.ts");
/* harmony import */ var _components_forms_TextInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/forms/TextInput */ "./components/forms/TextInput.tsx");
/* harmony import */ var _components_forms_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/forms/Dropdown */ "./components/forms/Dropdown.tsx");
/* harmony import */ var _questions_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../questions/utils */ "./questions/utils.ts");
/* harmony import */ var _utils_domain__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/domain */ "./utils/domain.ts");
/* harmony import */ var _Infrastructure__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Infrastructure */ "./sections/Infrastructure.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/sections/Questionare.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var Questionare = function Questionare() {
  var _useQuestions = Object(_questions_useQuestions__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      answers = _useQuestions.answers,
      renderQuestions = _useQuestions.renderQuestions,
      updateAnswer = _useQuestions.updateAnswer,
      answerQuestion = _useQuestions.answerQuestion,
      hasAnsweredAll = _useQuestions.hasAnsweredAll;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (hasAnsweredAll) {
      var element = document.getElementById('infrastructure');

      if (element) {
        scroll_into_view__WEBPACK_IMPORTED_MODULE_1___default()(element, {
          align: {
            top: 0,
            topOffset: 50
          }
        });
      }
    } else if (renderQuestions.length > 1) {
      var lastQuestion = renderQuestions[renderQuestions.length - 1];

      var _element = document.getElementById(lastQuestion.id);

      if (_element) {
        scroll_into_view__WEBPACK_IMPORTED_MODULE_1___default()(_element, {
          align: {
            top: 0,
            topOffset: 50
          }
        });
      }
    }
  }, [hasAnsweredAll, renderQuestions.length]);
  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, renderQuestions.map(function (question) {
    if (question.type === 'radio') {
      var answer = answers[question.id];
      return __jsx(_components_forms_RadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: question.id,
        key: question.id,
        options: question.options,
        selectedOption: answer,
        onChange: function onChange(value) {
          return answerQuestion(question.id, value);
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }
      });
    }

    if (question.type === 'dropdown') {
      var _answer = answers[question.id];
      return __jsx(_components_forms_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: question.id,
        key: question.id,
        options: question.options,
        selectedOption: _answer,
        onChange: function onChange(value) {
          return answerQuestion(question.id, value);
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      });
    }

    if (question.type === 'checkbox') {
      var _answer2 = answers[question.id];
      return __jsx(_components_forms_CheckboxGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: question.id,
        key: question.id,
        options: question.options,
        selectedOptions: _answer2,
        onChange: function onChange(value) {
          return answerQuestion(question.id, value);
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }
      });
    }

    if (question.type === 'text') {
      var _answer3 = answers[question.id];
      return __jsx(_components_forms_TextInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: question.id,
        key: question.id,
        value: _answer3,
        placeholder: question.placeholder,
        placeholders: question.placeholders,
        onChange: function onChange(value) {
          return updateAnswer(question.id, value);
        },
        onSubmit: function onSubmit(value) {
          return answerQuestion(question.id, value);
        },
        title: question.title,
        description: question.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }
      });
    }

    throw new Error("Unexpected question type in ".concat(question));
  }), __jsx(ScrollToAnchor, {
    id: "infrastructure",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }), hasAnsweredAll && __jsx(_Infrastructure__WEBPACK_IMPORTED_MODULE_11__["default"], {
    webApp: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["hasAnswered"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].storageType, 'webapp'),
    shared: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["hasAnswered"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].aclPublic, _enums__WEBPACK_IMPORTED_MODULE_6__["BOOL_VALUE"].TRUE),
    staging: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["hasAnswered"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].stagingEnv, _enums__WEBPACK_IMPORTED_MODULE_6__["BOOL_VALUE"].TRUE),
    staticPage: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["hasAnswered"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].webappIsStatic, _enums__WEBPACK_IMPORTED_MODULE_6__["BOOL_VALUE"].TRUE),
    createCertificates: Object(_utils_domain__WEBPACK_IMPORTED_MODULE_10__["isDomain"])(Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["getNormalizedAnswer"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].bucketName)) && (Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["hasAnswered"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].configureDns, _enums__WEBPACK_IMPORTED_MODULE_6__["BOOL_VALUE"].TRUE) || Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["hasAnswered"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].createCertificates, _enums__WEBPACK_IMPORTED_MODULE_6__["BOOL_VALUE"].TRUE)),
    configureDns: Object(_utils_domain__WEBPACK_IMPORTED_MODULE_10__["isDomain"])(Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["getNormalizedAnswer"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].bucketName)) && Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["hasAnswered"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].configureDns, _enums__WEBPACK_IMPORTED_MODULE_6__["BOOL_VALUE"].TRUE),
    errorPath: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["getNormalizedAnswer"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].errorPath),
    forwardingBucket: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["getForwardingBucketValue"])(answers),
    bucketName: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["getNormalizedAnswer"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].bucketName),
    region: Object(_questions_utils__WEBPACK_IMPORTED_MODULE_9__["getNormalizedAnswer"])(answers, _enums__WEBPACK_IMPORTED_MODULE_6__["QUESTION_ID"].region),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }));
};

var ScrollToAnchor = function ScrollToAnchor(_ref) {
  var id = _ref.id;
  return __jsx("div", {
    id: id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 52
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Questionare);

/***/ }),

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
  try {
    if (true) {
      return;
    }

    if (sensitiveKeys.includes(name)) {
      return;
    }

    var payload = data && Object.fromEntries(Object.entries(data).map(clean)); // @ts-ignore

    if (!window || !window.splitbee) {
      return;
    } // @ts-ignore


    window.splitbee.track(name, payload);
  } catch (error) {// That's fine <3
  }
};

var clean = function clean(_ref) {
  var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];

  if (sensitiveKeys.includes(key)) {
    return [key, '---'];
  }

  if (['string', 'number', 'boolean'].includes(typeof value)) {
    return [key, value];
  }

  if (!value) {
    return [key, null];
  }

  if (value instanceof Array) {
    return [key, value.map(function (v) {
      return v.value;
    }).join(',')];
  }

  return [key, value.value];
};

var sensitiveKeys = ['bucketName', 'forwardingBucket'];

/***/ })

})
//# sourceMappingURL=index.js.739a389051dd30acd6c2.hot-update.js.map