webpackHotUpdate("static/development/pages/index.js",{

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

  var summary = Object(_questions_useQuestions__WEBPACK_IMPORTED_MODULE_3__["useSummary"])(); // if (!hasAnsweredAll) {
  //   return null;
  // }

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
  console.log(summary);
  return [{
    id: 'faq:deploy',
    title: 'How do I deploy to this S3 bucket?',
    answer: __jsx(_Deployment__WEBPACK_IMPORTED_MODULE_5__["default"], {
      summary: summary,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
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
        lineNumber: 40,
        columnNumber: 11
      }
    }, "Very little."), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }, "S3 and Cloudfront are basic, cheap infrastructure. Since AWS charges per use, it's impossible to say exactly, but 1$ per month would likely covers 1000 monthly users for a web app."), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }
    }, "If you have recently signed up for AWS, the expenses will commonly be included in the free tier and you won't pay anything at all."), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, "See also ", __jsx("a", {
      href: "https://aws.amazon.com/s3/pricing/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 23
      }
    }, "aws.amazon.com/s3/pricing"), " for more details."))
  }, {
    id: 'faq:pre-deploy-change',
    title: 'Can I change the input before I deploy it?',
    answer: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }, "Yes, go right ahead!"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    }, "Hopefully, the arguments and code is self-explainatory. If not, check out", ' ', __jsx("a", {
      href: "http://github.com/tomfa/terraform",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, "github.com/tomfa/terraform"), ' ', "or the", ' ', __jsx("a", {
      href: "https://registry.terraform.io/providers/hashicorp/aws/latest",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
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
        lineNumber: 80,
        columnNumber: 11
      }
    }, "The script will stop and wait for the certificate settings to be verified to be correct before continuing."), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }
    }, "If you use AWS DNS,", ' ', summary.configureDns && __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 15
      }
    }, "which it looks like you do \u2013"), "go to your domain registrar, then configure the DNS servers to point to the newly created Route 53 zone that this script has created. You can find the DNS servers that you must point to in the", ' ', __jsx("a", {
      href: "https://console.aws.amazon.com/route53/v2/hostedzones#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, "AWS console > Route 53"), "."), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }
    }, "If you use a different DNS,", ' ', !summary.configureDns && summary.createCertificates && __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 15
      }
    }, "which it looks like you do \u2013 "), "you must add DNS records there to match the records wanted from AWS Certificate manager. These records can be found at", ' ', __jsx("a", {
      href: "https://console.aws.amazon.com/route53/v2/hostedzones#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }
    }, "AWS console > Certificate Manager")), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }
    }, "Both of these methods require DNS propagation before they take effect, so you might have to wait an hour or even a day. The script times out after 45 min, but you can re-run it tomorrow, and it will continue where it left off."), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }
    }, "A last resort, can be to add the following line inside terraform code:", __jsx(_components_code_Pre_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }, "module \"certificate\" { ", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 53
      }
    }), '  ', "... ", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 25
      }
    }), '  ', "validation_method = EMAIL ", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
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
        lineNumber: 135,
        columnNumber: 11
      }
    }, "You can rename your bucket and try again. If you want to keep your the domain name, simply replace the bucket_name variables in the script, but keep the domain variables, and run the script again."), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }
    }, "Tip: you can go to replace-me.s3.amazonaws.com to check if a given bucket is available. If it's not take, it will reply with error message ", __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
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
        lineNumber: 153,
        columnNumber: 11
      }
    }, "If you still have your ", __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 36
      }
    }, "terraform.tfstate"), " file, it will check the AWS resources, and check that they still match the code. If necessary, it will ask for confirmation before changing the infrastructure to match the code."), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
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
        lineNumber: 172,
        columnNumber: 11
      }
    }, "Yes. You can change the region, bucket name and most other things.", summary.createCertificates && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Note that if you make changes that affect the certificate it might be re-created.", ' ', !summary.configureDns && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Since you seem to not be using AWS for DNS, you will then have to reconfigure the DNS pointers to the certificate afterwards."))), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    }, "When you want to apply the changes, just re-run", ' ', __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
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
        lineNumber: 199,
        columnNumber: 9
      }
    }, __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 11
      }
    }, "terraform destroy"), " will take down all created infrastructure, as long as you have kept the", ' ', __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 11
      }
    }, "terraform.tfstate"), " file. If not, you will have to delete it from the ", __jsx("a", {
      href: "https://console.aws.amazon.com/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
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
        lineNumber: 212,
        columnNumber: 11
      }
    }, "Short answer:"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 11
      }
    }, "Save ", __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 18
      }
    }, "terraform.tfstate"), " for use later. The", ' ', __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 13
      }
    }, ".terraform"), " folder is basically a cache, and can be deleted."), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 11
      }
    }, "Longer answer:"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 11
      }
    }, "After you have run ", __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 32
      }
    }, "terraform apply"), ", a folder will be created named ", __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 27
      }
    }, ".terraform"), " along with a file named", ' ', __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 13
      }
    }, "terraform.tfstate")), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 11
      }
    }, "If you save ", __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 25
      }
    }, "terraform.tfstate"), " you can make changes in the code, and re-apply to make those changes take effect in the infrastructure. This file is also needed to perform", ' ', __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 13
      }
    }, "terraform destroy"), " in case you wish to take down the infrastructure."), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 11
      }
    }, "It's OK to delete everything as well, but then you'll have to make further changes using the", ' ', __jsx("a", {
      href: "https://console.aws.amazon.com",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 13
      }
    }, "AWS console"), "."))
  }];
};

/* harmony default export */ __webpack_exports__["default"] = (FAQ);

/***/ })

})
//# sourceMappingURL=index.js.a3272aade2203cb399bb.hot-update.js.map