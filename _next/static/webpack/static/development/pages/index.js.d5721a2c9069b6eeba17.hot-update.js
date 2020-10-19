webpackHotUpdate("static/development/pages/index.js",{

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
  }, "1. Add the following file to your repo: ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 47
    }
  }, ".github/workflows/main.yml")), __jsx(_components_code_Pre_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 5
    }
  }, "name: Production Build", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }), "on:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }), '  ', "pull_request:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }), '  ', "push:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }
  }), '  ', '  ', "branches:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', "- master", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }), "jobs:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }), '  ', "build:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }), '  ', '  ', "runs-on: ubuntu-latest", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 1
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }), '  ', '  ', "strategy:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', "matrix:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', '  ', "node-version: [13.x]", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 1
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }), '  ', '  ', "steps:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }), '  ', '  ', "- uses: actions/checkout@v1", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }), '  ', '  ', "- name: Use Node.js ${{ matrix.node-version }}", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }), '  ', '  ', "uses: actions/setup-node@v1", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }), '  ', '  ', "with:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', "node-version: ${{ matrix.node-version }}", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }
  }), '  ', '  ', "- name: Yarn Install", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', "run: |", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', '  ', "yarn install", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }), '  ', '  ', "- name: Production Build", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', "run: |", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', '  ', "yarn build", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }), '  ', '  ', "- name: Deploy to S3", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', "uses: jakejarvis/s3-sync-action@master", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', "with:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', '  ', "args: --acl public-read --delete", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', "env:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', '  ', "AWS_S3_BUCKET: ${{ secrets.AWS_PRODUCTION_BUCKET_NAME }}", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', '  ', "AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', '  ', "AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', '  ', "AWS_REGION: \"", summary.region, "\"", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }
  }), '  ', '  ', '  ', '  ', "SOURCE_DIR: \"public\""), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
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
      lineNumber: 201,
      columnNumber: 5
    }
  }, "See ", __jsx("a", {
    href: "https://hackernoon.com/using-gitlab-ci-cd-to-auto-deploy-your-vue-js-application-to-aws-s3-9affe1eb3457",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 12
    }
  }, "this article"), " for some hints."), __jsx(_components_code_Pre_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 5
    }
  }, "deploy prod:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  }), ' ', "image: python:latest", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }), ' ', "stage: deploy", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }
  }), ' ', "only:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }), '   ', "- tags", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }
  }), ' ', "script:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }), '   ', "- pip install awscli", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
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
      lineNumber: 217,
      columnNumber: 3
    }
  }, "See ", __jsx("a", {
    href: "https://circleci.com/developer/orbs/orb/circleci/aws-s3#commands-sync",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 10
    }
  }, "CircleCI S3 Orbs"));
};
/* harmony default export */ __webpack_exports__["default"] = (Deployment);

/***/ })

})
//# sourceMappingURL=index.js.d5721a2c9069b6eeba17.hot-update.js.map