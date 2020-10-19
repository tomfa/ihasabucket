webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _sections_HeaderSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/HeaderSection */ "./sections/HeaderSection/index.tsx");
/* harmony import */ var _sections_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/Footer */ "./sections/Footer/index.tsx");
/* harmony import */ var _sections_Intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/Intro */ "./sections/Intro.tsx");
/* harmony import */ var _sections_Questionare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/Questionare */ "./sections/Questionare.tsx");
/* harmony import */ var _questions_useQuestions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../questions/useQuestions */ "./questions/useQuestions.tsx");
/* harmony import */ var _sections_Infrastructure__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sections/Infrastructure */ "./sections/Infrastructure.tsx");
/* harmony import */ var _sections_Prerequisites__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sections/Prerequisites */ "./sections/Prerequisites.tsx");
/* harmony import */ var _sections_FAQ__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sections/FAQ */ "./sections/FAQ/index.tsx");
var _jsxFileName = "/Users/tomfa/repos/s3launchpad/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Home() {
  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_1__["PageWrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_questions_useQuestions__WEBPACK_IMPORTED_MODULE_6__["QuestionProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_sections_HeaderSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx(_sections_Intro__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx(_sections_Questionare__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx(_sections_Infrastructure__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx(_sections_Prerequisites__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx(_sections_FAQ__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx(_sections_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./sections/FAQ/Deployment.tsx":
/*!*************************************!*\
  !*** ./sections/FAQ/Deployment.tsx ***!
  \*************************************/
/*! exports provided: GitlabDeployment, CircleCIDeployment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitlabDeployment", function() { return GitlabDeployment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleCIDeployment", function() { return CircleCIDeployment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_forms_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/forms/Dropdown */ "./components/forms/Dropdown.tsx");
/* harmony import */ var _components_code_Pre_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/code/Pre.style */ "./components/code/Pre.style.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/sections/FAQ/Deployment.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

/* eslint-disable @typescript-eslint/no-unused-vars */




var local = {
  value: 'local',
  label: 'Command line'
};
var github = {
  value: 'github',
  label: 'Github Actions'
};
var circleCI = {
  value: 'circleCI',
  label: 'Circle CI'
};
var wercker = {
  value: 'wercker',
  label: 'Oracle Wercker'
};
var gitlab = {
  value: 'gitlab',
  label: 'Gitlab CI'
};
var deploymentOptions = [local, github, gitlab, circleCI, wercker];

var Deployment = function Deployment(_ref) {
  var summary = _ref.summary;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(github),
      ci = _useState[0],
      setCi = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "Depends where you want to deploy it from."), __jsx(_components_forms_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: 'deployment',
    options: deploymentOptions,
    selectedOption: ci,
    onChange: setCi,
    title: '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), ci === local && __jsx(LocalDeployment, {
    summary: summary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 24
    }
  }), ci === wercker && __jsx(WerckerDeployment, {
    summary: summary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 26
    }
  }), ci === github && __jsx(GithubDeployment, {
    summary: summary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }), ci === gitlab && __jsx(GitlabDeployment, {
    summary: summary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }), ci === circleCI && __jsx(CircleCIDeployment, {
    summary: summary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 27
    }
  }));
};

var LocalDeployment = function LocalDeployment(_ref2) {
  var summary = _ref2.summary;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, "1. Download and install the", ' ', __jsx("a", {
    href: "https://aws.amazon.com/cli/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, "AWS CLI"), "."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, "2. Add the following to your package.json"), __jsx(_components_code_Pre_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, "\"scripts\": {", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), '  ', "...", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), '  ', "\"deploy\": \"aws s3 sync build/ s3://", summary.bucketName || 'my-beautiful-bucket', "\"", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), "}", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  })), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, "This will sync the local folder build to s3. You might have to adjust that for your own setup."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, "With the script above, you will be able to deploy to S3 using", ' ', __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, "yarn deploy"), " locally, given that you have your AWS credentials in the environment."));
};

var WerckerDeployment = function WerckerDeployment(_ref3) {
  var summary = _ref3.summary;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, "1. Add the following code to your ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 41
    }
  }, "wercker.yml")), __jsx(_components_code_Pre_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, "deploy_frontend:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }), '  ', "steps:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }), '    ', "- script:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }), '      ', "name: install dependencies", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }), '      ', "code: yarn", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }), '    ', "- script:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }), '      ', "name: build frontend", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }), '      ', "code: npm run build", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }), '    ', "- s3sync:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }), '      ', "source_dir: build", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }), '      ', "delete-removed: true", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }), '      ', "key-id: $AWS_ACCESS_KEY_ID", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }), '      ', "key-secret: $AWS_SECRET_ACCESS_KEY", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }), '      ', "bucket-url: s3://$AWS_S3_BUCKET_NAME", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }), '    ', "- script:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }), '      ', "name: invalidate cloudfront cache", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }), '      ', "code: |", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }), '        ', "if [[ -n \"$AWS_CDN_DISTRIBUTION_ID\" ]]; then", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }), '          ', "sudo apt-get update", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }), '          ', "sudo apt-get install unzip -y", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }), '          ', "sudo apt-get install libpython-dev -y", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }), '          ', "wget https://s3.amazonaws.com/aws-cli/awscli-bundle.zip", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }), '          ', "unzip awscli-bundle.zip", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }), '          ', "sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }), '          ', "rm -rf awscli-bundle*", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }), '          ', "aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }), '          ', "aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }), '          ', "aws cloudfront create-invalidation --distribution-id $AWS_CDN_DISTRIBUTION_ID --paths \"/*\"", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }), '        ', "fi"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }, "Set this pipeline up in", ' ', __jsx("a", {
    href: "https://app.wercker.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, "app.wercker.com"), " with the required keys, and add a workflow to run it on master."));
};

var GithubDeployment = function GithubDeployment(_ref4) {
  var summary = _ref4.summary;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }
  }, "1. Add the following file to your repo:", ' ', __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, ".github/workflows/main.yml")), __jsx(_components_code_Pre_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 5
    }
  }, "name: Production Build", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }), "on:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }
  }), '  ', "pull_request:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }), '  ', "push:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }), '  ', '  ', "branches:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', "- master", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }), "jobs:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }), '  ', "build:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }), '  ', '  ', "runs-on: ubuntu-latest", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }), '  ', '  ', "strategy:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', "matrix:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', '  ', "node-version: [13.x]", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }), '  ', '  ', "steps:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }
  }), '  ', '  ', "- uses: actions/checkout@v1", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }
  }), '  ', '  ', "- name: Use Node.js ${{ matrix.node-version }}", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }
  }), '  ', '  ', "uses: actions/setup-node@v1", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  }), '  ', '  ', "with:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', "node-version: ${{ matrix.node-version }}", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }
  }), '  ', '  ', "- name: Yarn Install", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', "run: |", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', '  ', "yarn install", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }
  }), '  ', '  ', "- name: Production Build", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', "run: |", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', '  ', "yarn build", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 7
    }
  }), '  ', '  ', "- name: Deploy to S3", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', "uses: jakejarvis/s3-sync-action@master", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', "with:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', '  ', "args: --acl public-read --delete", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', "env:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', '  ', "AWS_S3_BUCKET: ${{ secrets.AWS_PRODUCTION_BUCKET_NAME }}", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', '  ', "AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', '  ', "AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', '  ', "AWS_REGION: \"", summary.region, "\"", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', '  ', "SOURCE_DIR: \"public\""), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 5
    }
  }, "Set this up in the Actions tab in your Github repo."));
};

var GitlabDeployment = function GitlabDeployment(_ref5) {
  var summary = _ref5.summary;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 5
    }
  }, "See", ' ', __jsx("a", {
    href: "https://hackernoon.com/using-gitlab-ci-cd-to-auto-deploy-your-vue-js-application-to-aws-s3-9affe1eb3457",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 7
    }
  }, "this article"), ' ', "for some hints."), __jsx(_components_code_Pre_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 5
    }
  }, "deploy prod:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 7
    }
  }), " image: python:latest", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 7
    }
  }), " stage: deploy", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 7
    }
  }), " only:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 7
    }
  }), '   ', "- tags", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 7
    }
  }), " script:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 7
    }
  }), '   ', "- pip install awscli", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 7
    }
  }), '   ', "- aws s3 sync ./dist s3://YOUR_BUCKET_NAME"));
};
var CircleCIDeployment = function CircleCIDeployment(_ref6) {
  var summary = _ref6.summary;
  return __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 3
    }
  }, "See", ' ', __jsx("a", {
    href: "https://circleci.com/developer/orbs/orb/circleci/aws-s3#commands-sync",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 5
    }
  }, "CircleCI S3 Orbs"));
};
/* harmony default export */ __webpack_exports__["default"] = (Deployment);

/***/ }),

/***/ "./sections/FAQ/FAQAccordian.tsx":
/*!***************************************!*\
  !*** ./sections/FAQ/FAQAccordian.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QuestionTitle_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionTitle.styles */ "./sections/FAQ/QuestionTitle.styles.tsx");
/* harmony import */ var _FAQAnswer_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FAQAnswer.styles */ "./sections/FAQ/FAQAnswer.styles.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/sections/FAQ/FAQAccordian.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var FAQAccordian = function FAQAccordian(_ref) {
  var question = _ref.question;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setOpen = _useState[1];

  var children = typeof question.answer === 'string' ? divideText(question.answer) : question.answer;
  return __jsx("div", {
    id: question.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_QuestionTitle_styles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: function onClick() {
      return setOpen(function (open) {
        return !open;
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, question.title), __jsx(_FAQAnswer_styles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    open: isOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, children));
};

var divideText = function divideText(text) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, text.split('\n').map(function (t, i) {
    return (// eslint-disable-next-line react/no-array-index-key
      __jsx("p", {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }
      }, t)
    );
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FAQAccordian);

/***/ }),

/***/ "./sections/FAQ/index.tsx":
/*!********************************!*\
  !*** ./sections/FAQ/index.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header.style */ "./components/Header.style.tsx");
/* harmony import */ var _components_code_Pre_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/code/Pre.style */ "./components/code/Pre.style.tsx");
/* harmony import */ var _questions_useQuestions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../questions/useQuestions */ "./questions/useQuestions.tsx");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/utils */ "./components/utils.tsx");
/* harmony import */ var _Deployment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Deployment */ "./sections/FAQ/Deployment.tsx");
/* harmony import */ var _FAQAccordian__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FAQAccordian */ "./sections/FAQ/FAQAccordian.tsx");
var _this = undefined,
    _jsxFileName = "/Users/tomfa/repos/s3launchpad/sections/FAQ/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var FAQ = function FAQ() {
  var _useQuestions = Object(_questions_useQuestions__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      hasAnsweredAll = _useQuestions.hasAnsweredAll;

  var summary = Object(_questions_useQuestions__WEBPACK_IMPORTED_MODULE_3__["useSummary"])();

  if (!hasAnsweredAll) {
    return null;
  }

  var faqData = getFAQuestions(summary);
  return __jsx(_components_utils__WEBPACK_IMPORTED_MODULE_4__["Section"], {
    id: "faq",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(_components_Header_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "Frequently asked questions"), faqData.map(function (q) {
    return __jsx(_FAQAccordian__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: q.id,
      question: q,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    });
  }));
};

var getFAQuestions = function getFAQuestions(summary) {
  return [{
    id: 'faq:deploy',
    title: 'How do I deploy to this S3 bucket?',
    answer: __jsx(_Deployment__WEBPACK_IMPORTED_MODULE_5__["default"], {
      summary: summary,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    })
  }, {
    id: 'faq:charged',
    title: 'How much will I be charged?',
    answer: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, "Very little."), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, "S3 and Cloudfront are basic, cheap infrastructure. Since AWS charges per use, it's impossible to say exactly, but 1$ per month would likely covers 1000 monthly users for a lightweight web app."), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, "If you have recently signed up for AWS, the expenses will commonly be included in the free tier and you won't pay anything at all."), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }, "For more details on file hosting and data transfer fees, see", ' ', __jsx("a", {
      href: "https://aws.amazon.com/s3/pricing/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, "aws.amazon.com/s3/pricing"), "."))
  }, {
    id: 'faq:pre-deploy-change',
    title: 'Can I change the input before I deploy it?',
    answer: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    }, "Yes, go right ahead!"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }
    }, "Hopefully, the arguments and code is self-explainatory. If not, check out", ' ', __jsx("a", {
      href: "http://github.com/tomfa/terraform",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, "github.com/tomfa/terraform"), ' ', "or the", ' ', __jsx("a", {
      href: "https://registry.terraform.io/providers/hashicorp/aws/latest",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }, "Terraform registry"), ", which contains the modules which the repo uses."))
  }, {
    id: 'faq:stuck-on-validation',
    title: 'My deployment is stuck on verification of certificate.',
    answer: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }
    }, "The script will stop and wait for the certificate settings to be verified to be correct before continuing."), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }
    }, "If you use AWS DNS,", ' ', summary.configureDns && __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    }, "which it looks like you do \u2013"), "go to your domain registrar, then configure the DNS servers to point to the newly created Route 53 zone that this script has created. You can find the DNS servers that you must point to in the", ' ', __jsx("a", {
      href: "https://console.aws.amazon.com/route53/v2/hostedzones#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, "AWS console > Route 53"), "."), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }
    }, "If you use a different DNS,", ' ', !summary.configureDns && summary.createCertificates && __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }
    }, "which it looks like you do \u2013 "), "you must add DNS records there to match the records wanted from AWS Certificate manager. These records can be found at", ' ', __jsx("a", {
      href: "https://console.aws.amazon.com/route53/v2/hostedzones#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }
    }, "AWS console > Certificate Manager")), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }
    }, "Both of these methods require DNS propagation before they take effect, so you might have to wait an hour or even a day. The script times out after 45 min, but you can re-run it tomorrow, and it will continue where it left off."), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }
    }, "A last resort, can be to add the following line inside terraform code:", __jsx(_components_code_Pre_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }
    }, "module \"certificate\" { ", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 53
      }
    }), '  ', "... ", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 25
      }
    }), '  ', "validation_method = EMAIL ", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 47
      }
    }), "}"), "Note that you will have to respond to an email sent to postmaster@your-bucket-domain for the validation to go through, and that this process will have to be re-run every 3 years or so."))
  }, {
    id: 'faq:name-taken',
    title: 'My bucket name was taken',
    answer: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }
    }, "You can rename your bucket and try again. If you want to keep your the domain name, simply replace the bucket_name variables in the script, but keep the domain variables, and run the script again."), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 11
      }
    }, "Tip: you can go to replace-me.s3.amazonaws.com to check if a given bucket is available. If it's not take, it will reply with error message ", __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 21
      }
    }, "The specified bucket does not exist")))
  }, {
    id: 'faq:deploy-twice',
    title: 'What happens if I deploy it twice?',
    answer: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 11
      }
    }, "If you still have your ", __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 36
      }
    }, "terraform.tfstate"), " file, it will check the AWS resources, and check that they still match the code. If necessary, it will ask for confirmation before changing the infrastructure to match the code."), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 11
      }
    }, "If you don't have your state file, it will attempt to recreate everything. It will likely fail due to a duplicate bucket name, unless you've changed that."))
  }, {
    id: 'faq:post-deploy-change',
    title: 'Can I change the input and redeploy?',
    answer: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 11
      }
    }, "Yes. You can change the region, bucket name and most other things.", summary.createCertificates && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Note that if you make changes that affect the certificate it might be re-created.", ' ', !summary.configureDns && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Since you seem to not be using AWS for DNS, you will then have to reconfigure the DNS pointers to the certificate afterwards."))), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 11
      }
    }, "When you want to apply the changes, just re-run", ' ', __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 13
      }
    }, "terraform apply"), "."))
  }, {
    id: 'faq:terraform-destroy',
    title: 'How can I remove everything I just created?',
    answer: __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }
    }, __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 11
      }
    }, "terraform destroy"), " will take down all created infrastructure, as long as you have kept the", ' ', __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 11
      }
    }, "terraform.tfstate"), " file. If not, you will have to delete it from the ", __jsx("a", {
      href: "https://console.aws.amazon.com/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 23
      }
    }, "AWS console"), ".")
  }, {
    id: 'faq:generated-files',
    title: 'What do I do with the generated files?',
    answer: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 11
      }
    }, "Short answer:"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 11
      }
    }, "Save ", __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 18
      }
    }, "terraform.tfstate"), " for use later. The", ' ', __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 13
      }
    }, ".terraform"), " folder is basically a cache, and can be deleted."), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 11
      }
    }, "Longer answer:"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 11
      }
    }, "After you have run ", __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 32
      }
    }, "terraform apply"), ", a folder will be created named ", __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 27
      }
    }, ".terraform"), " along with a file named", ' ', __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 13
      }
    }, "terraform.tfstate")), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 11
      }
    }, "If you save ", __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 25
      }
    }, "terraform.tfstate"), " you can make changes in the code, and re-apply to make those changes take effect in the infrastructure. This file is also needed to perform", ' ', __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 13
      }
    }, "terraform destroy"), " in case you wish to take down the infrastructure."), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 11
      }
    }, "It's OK to delete everything as well, but then you'll have to make further changes using the", ' ', __jsx("a", {
      href: "https://console.aws.amazon.com",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 13
      }
    }, "AWS console"), "."))
  }];
};

/* harmony default export */ __webpack_exports__["default"] = (FAQ);

/***/ })

})
//# sourceMappingURL=index.js.17e24aabc1c3a1c29e1c.hot-update.js.map