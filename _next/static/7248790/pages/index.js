(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ye}));var r,o,a,i,c=n("q1tI"),u=n.n(c),l=n("bnak"),s=n("winv"),p=n("TCG4"),f=n("4DxX"),d=u.a.createElement,h=function(){return d(l.c,null,d(f.a,{author:"Lolrus, the bucket walrus"},d(u.a.Fragment,null,"Hosting a ",d(l.a,{secondary:!0}," web app "),"or need to store uploads? Put them in S3 buckets. It's",d(l.a,{secondary:!0}," cheap "),"and",d(l.a,{secondary:!0}," reliable"),". With CloudFront cache, it'll be blazingly ",d(l.a,{secondary:!0},"fast"),". Let's see how",d(l.a,{secondary:!0}," easy "),"it can be.")))};function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){if(e){if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function g(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(e){e[e.NOT_EMPTY=0]="NOT_EMPTY"}(r||(r={})),function(e){e.createCertificates="create-certificates",e.bucketName="bucket",e.storageType="storage",e.webappIsStatic="static",e.aclPublic="public",e.configureDns="configure-dns",e.stagingEnv="staging",e.region="region"}(o||(o={})),function(e){e.FALSE="false",e.TRUE="true"}(a||(a={})),function(e){e.BUCKET_NAME="bucket_name",e.AWS_REGION="aws_region",e.AWS_ACCESS_KEY="aws_access_key",e.AWS_SECRET_KEY="aws_secret_key",e.ACL="acl",e.ERROR_RESPONSE_CODE="error_response_code",e.ERROR_RESPONSE_PATH="error_response_path"}(i||(i={}));var v;!function(e){e.WEBAPP="web-app",e.FILE_STORAGE="file-storage"}(v||(v={}));var w;function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}!function(e){e.US_EAST_2="us-east-2",e.US_EAST_1="us-east-1",e.US_WEST_1="us-west-1",e.US_WEST_2="us-west-2",e.AF_SOUTH_1="af-south-1",e.AP_EAST_1="ap-east-1",e.AP_SOUTH_1="ap-south-1",e.AP_NORTHEAST_3="ap-northeast-3",e.AP_NORTHEAST_2="ap-northeast-2",e.AP_SOUTHEAST_1="ap-southeast-1",e.AP_SOUTHEAST_2="ap-southeast-2",e.AP_NORTHEAST_1="ap-northeast-1",e.CA_CENTRAL_1="ca-central-1",e.CN_NORTH_1="cn-north-1",e.CN_NORTHWEST_1="cn-northwest-1",e.EU_CENTRAL_1="eu-central-1",e.EU_WEST_1="eu-west-1",e.EU_WEST_2="eu-west-2",e.EU_SOUTH_1="eu-south-1",e.EU_WEST_3="eu-west-3",e.EU_NORTH_1="eu-north-1",e.SA_EAST_1="sa-east-1",e.ME_SOUTH_1="me-south-1"}(w||(w={}));var E=n("s4NR"),S=n.n(E),_=n("nOHt");function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){return Object.entries(e).reduce((function(e,t){var n=O(t,2),r=n[0],o=n[1];return o?C({},e,y({},r,o)):e}),{})};var T,j=function(e){return"false"!==e.toLowerCase()&&("true"===e.toLowerCase()||(function(e){return!Number.isNaN(parseInt(e))}(e)?parseInt(e):e))},P=function(e){return Object.entries(e).reduce((function(e,t){var n=O(t,2),r=n[0],o=n[1];return C({},e,y({},r,o instanceof Array?o.map((function(e){return String(e)})):String(o)))}),{})},N=function(e){var t={};return Object.entries(e).forEach((function(e){var n=O(e,2),r=n[0],o=n[1];o&&(t[r]=o instanceof Array?o.map(j):j(o))})),t},x=function(e,t){return JSON.stringify(e)!==JSON.stringify(t)};function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}!function(e){e.RADIO="radio",e.CHECKBOX="checkbox",e.TEXT="text",e.DROPDOWN="dropdown"}(T||(T={}));var R=[{id:o.bucketName,title:"",type:T.TEXT,placeholders:["mydomain.com","uploads.mydomain.com","staging.mydomain.com","www.mydomain.com","test.mydomain.com","uploads.mydomain.com"],description:'We will use this as the S3 bucket name. The bucket name is permanent, but it doesn\'t have to match an actual domain. It does however have to be unique on S3, so "example" or "my-bucket" will not work. If you leave it empty, you\'ll be prompted for a bucket name at deploy time.'},{id:o.storageType,title:"What are we storing?",type:T.RADIO,description:"Unlike normal file storage, web apps like React and Vue have a default path, and error pages.",options:[{value:"webapp",label:"A web app"},{value:"files",label:"Static files or media uploads"}]},{id:o.webappIsStatic,title:"Is the web app statically generated?",type:T.RADIO,description:"Statically generated sites can be optimized for search engines by returning correct HTTP status codes. If you are uncertain, select No.",options:[{value:a.TRUE,label:"Yes (e.g. Next, Gatsby, Nuxt)"},{value:a.FALSE,label:"No (e.g. plain Vue or React)"}],showIf:[{questionId:o.storageType,value:"webapp"}]},{id:o.aclPublic,title:"Should content be publicly available?",type:T.RADIO,description:"If our files hold secret or personal information, we will need a stricter security policy than if we are storing publicly available files, e.g. media files for a CMS.",options:[{value:a.TRUE,label:"Yes, make files public"},{value:a.FALSE,label:"No, let me control access to the files"}],showIf:[{questionId:o.storageType,value:"files"}]},{id:o.configureDns,title:"Should AWS set up DNS pointers?",type:T.RADIO,description:"Should we setup DNS pointers for your domain? (Recommended). Route 53 costs 1.5$ / month",options:[{value:a.TRUE,label:"Yes, please do"},{value:a.FALSE,label:"No, I'll set up DNS afterwards"}],showIf:[{questionId:o.bucketName,value:r.NOT_EMPTY}]},{id:o.createCertificates,title:"Should AWS create certificates to support the domain?",type:T.RADIO,description:"AWS can create HTTPS certificates for us. This is recommended and free of charge.",options:[{value:a.TRUE,label:"Please do"},{value:a.FALSE,label:"No, I`ll configure certificates myself"}],showIf:[{questionId:o.bucketName,value:r.NOT_EMPTY},{questionId:o.configureDns,value:a.FALSE}]},{id:o.region,title:"In what region do you want the buckets?",type:T.DROPDOWN,defaultValue:w.EU_NORTH_1,description:"A region closer to your users can give an extra performance boost.",options:Object.values(w).map((function(e){return{value:e,label:e}}))},{id:o.stagingEnv,title:"Want a test environment?",type:T.RADIO,description:"A staging (or test) environment would mean a duplicate set of buckets. If you're uncertain, select No. You can always create a staging environment later.",options:[{value:a.TRUE,label:"Yes, please create a separate set of buckets for testing"},{value:a.FALSE,label:"No, I won't need that"}]}],D=R.reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,y({},t.id,t))}),{}),L=function(e){return null===e?"":"string"===typeof e||"number"===typeof e||"boolean"===typeof e?String(e):e instanceof Array?e.map((function(e){return e.value})).join(","):null!==e.value?e.value:""},W=function(e,t){return L(e[t])},U=function(e,t,n){var r=D[t];if(r.type===T.RADIO){var o=e[t];return null===o?null===n:o.value===n}if(r.type===T.CHECKBOX){var a=e[t];return null===a?null===n:!!a.find((function(e){return e.value===n}))}if(r.type===T.DROPDOWN){var i=e[t];return null===i?null===n:i.value===n}if(r.type===T.TEXT){var c=e[t];return null===c?null===n:c===n}},M=function(e,t){return e.showIf&&!!e.showIf.find((function(e){return!function(e,t){return U(t,e.questionId,e.value)}(e,t)}))},H=function(e,t){var n=[],r=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=R[r];if(!o)return r;var a=!n.includes(o.id)&&!M(o,t);return a?r:e(t,n,r+1)}(e,t);return R.slice(0,r+1).forEach((function(t){M(t,e)||n.push(t)})),n};function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(){var e=Object(c.useState)([]),t=e[0],n=e[1],r=function(){var e=Object(_.useRouter)(),t=Object(c.useState)({}),n=t[0],r=t[1];Object(c.useEffect)((function(){var t=N(e.query);x(n,t)&&r(t)}),[JSON.stringify(e.query)]);var o=Object(c.useCallback)((function(t){var o=k(C({},P(n),{},P(t)));r(o),e.push("/?"+S.a.stringify(o))}),[n]);return{urlData:n,updateUrlData:o}}(),a=r.urlData,i=r.updateUrlData,u=Object(c.useState)({}),l=u[0],s=u[1];Object(c.useEffect)((function(){if(!(t.length>0)){var e=R.reduce((function(e,t){return Y({},e,y({},t.id,function(e,t){if(e.type===T.TEXT)return t||e.defaultValue||null;if(e.type===T.RADIO||e.type===T.DROPDOWN){var n=t||e.defaultValue;return e.options.find((function(e){return(null===e||void 0===e?void 0:e.value)===n}))||null}if(e.type===T.CHECKBOX){var r=t||e.defaultValue;return r?"string"===typeof r||"number"===typeof r?e.options.filter((function(e){return e.value===r})):r instanceof Array?e.options.filter((function(e){return r.includes(e.value)})):null:[]}}(t,void 0!==a[t.id]?String(a[t.id]):void 0)))}),{}),r=!Object.keys(l).length;if(Object.keys(a).length){var i=Object.keys(a);i.length&&!i.includes(o.bucketName)&&i.push(o.bucketName),n(i),s(e)}else r&&s(e)}}),[a,t]);var p=Object(c.useMemo)((function(){return H(l,t)}),[t,l]),f=!p.find((function(e){return!t.includes(e.id)})),d=Object(c.useCallback)((function(e,t){i(y({},String(e),L(t))),s((function(n){return Y({},n,y({},e,t))})),n((function(t){return[].concat(g(t),[e])}))}),[i]);return{answers:l,renderQuestions:p,answerQuestion:d,hasAnsweredAll:f}},B=n("Yr1c"),q=n("vOnD"),z=q.c.label.withConfig({displayName:"Labelstyle__Label",componentId:"u2u342-0"})(["position:relative;cursor:pointer;padding-bottom:0.7rem;padding-top:0.7rem;padding-left:3rem;padding-right:1.2rem;margin-bottom:3px;background-color:",";color:",";border:2px solid transparent;&:before{content:'';display:block;width:",";height:20px;border:3px solid ",";position:absolute;left:",";top:",";opacity:",";-webkit-transition:all 0.12s,border-color 0.08s;transition:all 0.12s,border-color 0.08s;border-top-color:",";border-left-color:",";transform:",";}"],(function(e){return e.checked?e.theme.colors.primary:""}),(function(e){return e.checked?e.theme.colors.textSecondary:e.theme.colors.textPrimary}),(function(e){return e.checked?"10px":"20px"}),(function(e){return e.checked?"white":"black"}),(function(e){return e.checked?"18px":"13px"}),(function(e){return e.checked?"3px":"8px"}),(function(e){return e.checked?1:.6}),(function(e){return e.checked&&"transparent"}),(function(e){return e.checked&&"transparent"}),(function(e){return e.checked&&"rotate(45deg)"})),X=q.c.input.withConfig({displayName:"Inputstyle__Input",componentId:"sc-1nl68ta-0"})(["&[type='checkbox']{width:1px;height:1px;outline:none;border:none;opacity:0;}&[type='radio']{width:1px;height:1px;outline:none;border:none;opacity:0;}&[type='text']{padding:1rem;flex:1;border:none;font-size:1.2rem;&:focus{margin-right:4px;outline:2px dashed ",";}}&:focus + ","{outline:2px dashed ",";}&:focus::placeholder{color:transparent;}"],(function(e){return e.theme.colors.primary}),z,(function(e){return e.theme.colors.primary})),G=u.a.createElement,Q=function(e){var t=e.checked,n=e.group,r=e.onChange,o=e.value,a=e.label,i=e.disabled,c=void 0!==i&&i,l="".concat(n,"-").concat(o);return G(u.a.Fragment,null,G(X,{id:l,value:o,name:l,type:"radio",group:n,checked:t,onChange:function(){return!c&&r(o,!t)},disabled:c}),G(z,{htmlFor:l,checked:t},a))},J=q.c.p.withConfig({displayName:"Descriptionstyle__Description",componentId:"sc-1vej8zf-0"})(["color:",";font-size:0.8rem;font-style:italic;"],(function(e){return e.theme.colors.textMuted})),V=q.c.div.withConfig({displayName:"Choicesstyle__Choices",componentId:"sc-1r49bg-0"})(["display:flex;flex-direction:column;"]),$=q.c.div.withConfig({displayName:"Questionstyle__Question",componentId:"sc-1ce9jof-0"})(["margin-bottom:2.5rem;"]),Z=u.a.createElement,ee=function(e){var t=e.id,n=e.options,r=e.selectedOption,o=e.onChange,a=e.title,i=e.description,u=e.disabled,l=void 0!==u&&u,s=Object(c.useCallback)((function(e,t){if(!l){if(!t)return o(null);var r=n.find((function(t){return t.value===e}));r&&o(r)}}),[l,n,o]);return Z($,null,a&&Z(B.a,null,a),Z(V,null,n.map((function(e){return Z(Q,{key:"".concat(t,"-").concat(e.value),group:t,checked:e===r,onChange:s,value:e.value,label:e.label})}))),i&&Z(J,null,i))},te=u.a.createElement,ne=function(e){var t=e.checked,n=e.onChange,r=e.value,o=e.label,a=e.group,i=e.disabled,c=void 0!==i&&i,l="".concat(a,"-").concat(r);return te(u.a.Fragment,null,te(X,{id:l,value:r,name:l,type:"checkbox",checked:t,onChange:function(){return!c&&n(r,!t)},disabled:c}),te(z,{htmlFor:l,checked:t},o))},re=u.a.createElement,oe=function(e){var t=e.id,n=e.options,r=e.selectedOptions,o=e.onChange,a=e.title,i=e.description,u=e.disabled,l=void 0!==u&&u,s=Object(c.useCallback)((function(e,t){if(!l){var a=r.filter((function(t){return t.value!==e}));if(!t)return o(a);var i=n.find((function(t){return t.value===e}));i&&o([].concat(g(a),[i]))}}),[l,n,o,r]);return re($,null,a&&re(B.a,null,a),re(V,null,n.map((function(e){return re(ne,{group:t,key:e.value,checked:r.includes(e),onChange:s,value:e.value,label:e.label})}))),i&&re(J,null,i))},ae=n("o0o1"),ie=n.n(ae),ce=q.c.div.withConfig({displayName:"InputContainerstyles__InputContainer",componentId:"sc-17e590b-0"})(["display:flex;"]),ue=q.c.button.withConfig({displayName:"SubmitButtonstyles__SubmitButton",componentId:"sc-75aind-0"})(["color:",";background-color:",";border:none;flex:0.5;position:relative;outline-style:dashed;outline-width:2px;cursor:pointer;&:focus,&:active{outline-color:",";}&:before{content:'';display:block;width:10px;height:20px;border:3px solid white;position:absolute;left:calc(50% - 10px);top:12px;-webkit-transition:all 0.12s,border-color 0.08s;transition:all 0.12s,border-color 0.08s;border-top-color:transparent;border-left-color:transparent;transform:rotate(45deg);}"],(function(e){return e.theme.colors.textSecondary}),(function(e){return e.complete?e.theme.colors.primary:e.theme.colors.bgMuted}),(function(e){return e.theme.colors.primary})),le=u.a.createElement,se=function(e){var t=e.onSubmit,n=e.value,r=void 0===n?"":n,o=e.title,a=e.placeholder,i=e.placeholders,u=e.description,s=Object(c.useState)(r||""),p=s[0],f=s[1],d=Object(c.useState)(!1),h=d[0],b=d[1],m=Object(c.useState)((null===i||void 0===i?void 0:i.length)?0:-1),g=m[0],y=m[1],v=Object(c.useState)(-1===g?a:i[g]),w=v[0],O=v[1];Object(c.useEffect)((function(){null!==r&&void 0!==r&&(f(r),b(!0))}),[r]),Object(c.useEffect)((function(){if(i||!(i.length<2)){!function(){var e,t,n,r,o,a,c;ie.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,ie.a.awrap(Object(l.e)(7e3));case 2:e=i[g%i.length],t=i[(g+1)%i.length],n=e.length+t.length+4,r=25,o=0;case 7:if(!(o<=n)){u.next=16;break}return a=o<=e.length,c=n-o<=t.length,a?O(e.substr(0,e.length-o)):c&&O(t.substr(0,t.length-(n-o))),u.next=13,ie.a.awrap(Object(l.e)(r));case 13:o++,u.next=7;break;case 16:y((function(e){return e+1%i.length}));case 17:case"end":return u.stop()}}),null,null,null,Promise)}()}}),[g]);var E=function(e){b(!0),t(e)};return le($,null,o&&le(B.a,null,o),le(ce,null,le(X,{type:"text",value:p,placeholder:w,onChange:function(e){h?t(e.target.value):f(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&E(p)},onBlur:function(){return E(p)}}),le(ue,{type:"submit",complete:p.trim().length>0,onClick:function(){return E(p)}})),u&&le(J,null,u))},pe=u.a.createElement,fe=q.c.select.withConfig({displayName:"Dropdown__Select",componentId:"ca76f5-0"})(["font-size:1.2rem;padding:1rem;flex:1;border:none;appearance:none;background-color:white;&:focus,&:active{outline-style:dashed;outline-width:2px;outline-color:",";margin-right:3px;}"],(function(e){return e.theme.colors.primary})),de=q.c.option.withConfig({displayName:"Dropdown__Choice",componentId:"ca76f5-1"})(["color:",";"],(function(e){return e.theme.colors.textPrimary})),he=function(e){var t=e.id,n=e.options,r=e.selectedOption,o=e.onChange,a=e.title,i=e.description,u=e.disabled,l=void 0!==u&&u,s=Object(c.useCallback)((function(e){if(!l){var t=n.find((function(t){return t.value===e}));t&&o(t)}}),[l,n,o]);return pe($,null,a&&pe(B.a,null,a),pe(ce,null,pe(fe,{value:null===r||void 0===r?void 0:r.value,onChange:function(e){return s(e.target.value)}},n.map((function(e){return pe(de,{key:"".concat(t,"-").concat(e.value),value:e.value,label:e.label},e.label)}))),pe(ue,{type:"submit",complete:!!r,onClick:function(){return s(r.value)}})),i&&pe(J,null,i))};function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge=function(e){var t=e.webApp,n=e.staging,r=e.shared,o=e.staticPage,a=e.region,c=e.bucketName,u=t?"git::https://github.com/tomfa/terraform.git//webapp":"git::https://github.com/tomfa/terraform.git//files",l={bucket_name:c?'"'.concat(c,'"'):"var.".concat(i.BUCKET_NAME),aws_region:a?'"'.concat(a,'"'):"var.".concat(i.AWS_REGION)};t?(l.error_path='"/index.html"',l.error_code=o?"404":"200"):l.acl=r?'"public-read"':'"private"';var s=t?"web-app":"file-storage",p=n?[{name:"".concat(s,"-production"),parameters:l},{name:"".concat(s,"-staging"),parameters:me({},l,{bucket_name:c?'"'.concat(c,'.staging"'):'"\\${var.bucket_name}.staging"'})}]:[{name:s,parameters:l}],f=[];return Object.values(i).filter((function(e){return!!p.find((function(t){return!!Object.values(t.parameters).find((function(t){return t.includes("var.".concat(e))}))}))})).forEach((function(e){var t=function(e){var t;return(t={},y(t,i.BUCKET_NAME,"Name of S3 bucket"),y(t,i.AWS_REGION,"Region to deploy to, e.g. eu-north-1, us-east-1"),y(t,i.AWS_ACCESS_KEY,"e.g. AKIA... found in your AWS console > Security credentials"),y(t,i.AWS_SECRET_KEY,"e.g. yaAS$1... found in your AWS console > Security credentials"),y(t,i.ACL,"e.g. AKIA... found in your AWS console > Security credentials"),y(t,i.ERROR_RESPONSE_CODE,"e.g. HTTP status code response when no file matching path is found"),y(t,i.ERROR_RESPONSE_PATH,"e.g. Which file Cloudfront serves when encountering a missing file"),t)[e]}(e);t?(f.push('variable "'.concat(e,'" {')),f.push('  description = "'.concat(t,'"')),f.push("}")):f.push('variable "'.concat(e,'" {}'))})),p.forEach((function(e){f.push(""),f.push('module "'.concat(e.name,'" {')),f.push('  source = "'.concat(u,'"')),Object.entries(e.parameters).forEach((function(e){var t=O(e,2),n=t[0],r=t[1];f.push("  ".concat(n," = ").concat(r))})),f.push("}")})),f.push(""),function(e){var t=e.bucketType,n=e.hasStaging,r=[];return(n?["".concat(t,"-production"),"".concat(t,"-staging")]:[t]).forEach((function(e){var o=n&&e.split("-")[e.split("-").length-1],a=o?"".concat(o,"."):"";r.push({value:"module.".concat(e,".AWS_SECRET_ACCESS_KEY"),label:"".concat(a,"AWS_SECRET_ACCESS_KEY")}),r.push({value:"module.".concat(e,".AWS_ACCESS_KEY_ID"),label:"".concat(a,"AWS_ACCESS_KEY_ID")}),r.push({value:"module.".concat(e,".BUCKET_NAME"),label:"".concat(a,"BUCKET_NAME")}),t===v.WEBAPP&&r.push({value:"module.".concat(e,".CLOUDFRONT_URL"),label:"".concat(a,"CLOUDFRONT_URL")})})),r}({bucketType:t?v.WEBAPP:v.FILE_STORAGE,hasStaging:n}).forEach((function(e){f.push('output "'.concat(e.label,'" {')),f.push("  value = ".concat(e.value)),f.push("}")})),f},ye=function(e){var t=e.webApp,n=e.staging,r=e.shared,o=e.staticPage,a=e.region,i=n?"two sets of":"a",c=ve({webApp:t,staticPage:o,shared:r}),u=n?"Two sets of AWS keys will be created that are able to upload to the buckets. One for test and one for production environment":"A set of AWS keys will be created that is able to upload to the bucket";return"Once run, it will create ".concat(i," S3 bucket").concat(t?" + Cloudfront":""," in ").concat(a,", configured ").concat(c,". ").concat(u,". Generated keys will be shown as output in the terminal.")},ve=function(e){var t=e.webApp,n=e.staticPage,r=e.shared;return t?n?"to serve a solid statically generated web app":"to serve a blazingly fast single-page web app":r?"for hosting publicly available files":"for storing and serving files for authorized requests"},we=q.c.pre.withConfig({displayName:"Prestyle__Pre",componentId:"sc-1cjlqsr-0"})(["position:relative;background-color:#3a3a3a;color:white;padding:1rem;margin-top:1.7rem;margin-bottom:1.7rem;overflow:auto;"]),Oe=q.c.span.withConfig({displayName:"Mutestyle__Mute",componentId:"sc-12r7eop-0"})(["color:",";"],(function(e){return e.theme.colors.textMuted})),Ee=u.a.createElement,Se=q.c.svg.withConfig({displayName:"LoadingIcon__Svg",componentId:"sc-1nn4cpf-0"})(["margin:5rem auto;display:block;shape-rendering:auto;& path{fill:",";}"],(function(e){return e.theme.colors.primary})),_e=function(e){var t=e.size,n=void 0===t?300:t;return Ee(Se,{xmlns:"http://www.w3.org/2000/svg",width:"".concat(n,"px"),height:"".concat(n,"px"),viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},Ee("g",{transform:"translate(50 50)"},Ee("g",null,Ee("animateTransform",{attributeName:"transform",type:"rotate",values:"0;45",keyTimes:"0;1",dur:"0.2s",repeatCount:"indefinite"}),Ee("path",{d:"M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 24.742744050198738 16.964569457146712 L24.742744050198738 16.964569457146712 L30.399598299691117 22.621423706639092 L22.621423706639096 30.399598299691114 L16.964569457146716 24.742744050198734 A30 30 0 0 1 5.5 29.491524206117255 L5.5 29.491524206117255 L5.5 37.491524206117255 L-5.499999999999997 37.491524206117255 L-5.499999999999997 29.491524206117255 A30 30 0 0 1 -16.964569457146705 24.742744050198738 L-16.964569457146705 24.742744050198738 L-22.621423706639085 30.399598299691117 L-30.399598299691117 22.621423706639092 L-24.742744050198738 16.964569457146712 A30 30 0 0 1 -29.491524206117255 5.500000000000009 L-29.491524206117255 5.500000000000009 L-37.491524206117255 5.50000000000001 L-37.491524206117255 -5.500000000000001 L-29.491524206117255 -5.500000000000002 A30 30 0 0 1 -24.742744050198738 -16.964569457146705 L-24.742744050198738 -16.964569457146705 L-30.399598299691117 -22.621423706639085 L-22.621423706639092 -30.399598299691117 L-16.964569457146712 -24.742744050198738 A30 30 0 0 1 -5.500000000000011 -29.491524206117255 L-5.500000000000011 -29.491524206117255 L-5.500000000000012 -37.491524206117255 L5.499999999999998 -37.491524206117255 L5.5 -29.491524206117255 A30 30 0 0 1 16.964569457146702 -24.74274405019874 L16.964569457146702 -24.74274405019874 L22.62142370663908 -30.39959829969112 L30.399598299691117 -22.6214237066391 L24.742744050198738 -16.964569457146716 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20"}))))},Ae=n("iaY6"),Ce=q.c.button.withConfig({displayName:"PreButtonstyle__PreButton",componentId:"sc-1i8d5dz-0"})(["background-color:",";color:",";position:absolute;font-family:monospace;top:20px;right:20px;border:none;padding:0.3rem 0.6rem;cursor:pointer;outline-color:",";"],(function(e){return e.theme.colors.bgPrimary}),(function(e){return e.theme.colors.textPrimary}),(function(e){return e.theme.colors.secondary})),ke=u.a.createElement,Te=function(e){var t=e.mainTfContent,n=e.bucketName,r=Object(Ae.b)(),o=Object(c.useState)(!1),a=o[0],i=o[1],u=Object(c.useMemo)((function(){return["# Create a folder to store infrastructure code","mkdir infrastructure","cd infrastructure","","# Create config file","cat <<EOT >> ".concat(n||"main",".tf")].concat(g(t),["EOT","","# Deploy","terraform init","terraform apply"])}),[t,n]),s=Object(c.useCallback)((function(){!function(e){var t=window.document.createElement("textarea");t.setAttribute("style","position: absolute; bottom: 0; top: 0; width: 1; height: 1; opacity: 0.01;"),e.forEach((function(e){t.append(e),t.append("\n")})),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(u),i(!0)}),[u]);return Object(c.useEffect)((function(){return i(!1)}),[t,n]),ke(we,null,u.map((function(e,t){return e.trim().startsWith("#")?ke(Oe,{key:t},e,"\n"):ke("span",{key:t},e,"\n")})),ke(Ce,{onClick:s},a&&ke("span",null,"Copied! ",ke(l.a,{color:r.colors.success},"\u2713"))||"Copy to clipboard"))},je=function(){return window&&window.location?window.location.origin||"".concat(window.location.protocol,"//").concat(window.location.hostname):"https://ihasabucket.it"},Pe=n("Q2XR"),Ne=u.a.createElement,xe=q.c.svg.withConfig({displayName:"Share__Svg",componentId:"sc-177gq3a-0"})(["display:inline;margin-left:0.5rem;margin-right:0.3rem;& path{fill:",";}"],(function(e){return e.color||e.theme.colors.secondary})),Ie=function(e){var t=e.size,n=void 0===t?12:t,r=e.color;return Ne(xe,{xmlns:"http://www.w3.org/2000/svg",width:"".concat(n,"px"),height:"".concat(n,"px"),viewBox:"0 0 59 59",color:r},Ne("path",{d:"M47,39c-2.671,0-5.182,1.04-7.071,2.929c-0.524,0.524-0.975,1.1-1.365,1.709l-17.28-10.489 C21.741,32.005,22,30.761,22,29.456c0-1.305-0.259-2.549-0.715-3.693l17.284-10.409C40.345,18.142,43.456,20,47,20 c5.514,0,10-4.486,10-10S52.514,0,47,0S37,4.486,37,10c0,1.256,0.243,2.454,0.667,3.562L20.361,23.985 c-1.788-2.724-4.866-4.529-8.361-4.529c-5.514,0-10,4.486-10,10s4.486,10,10,10c3.495,0,6.572-1.805,8.36-4.529L37.664,45.43 C37.234,46.556,37,47.759,37,49c0,2.671,1.04,5.183,2.929,7.071C41.818,57.96,44.329,59,47,59s5.182-1.04,7.071-2.929 C55.96,54.183,57,51.671,57,49s-1.04-5.183-2.929-7.071C52.182,40.04,49.671,39,47,39z"}))},Re=u.a.createElement,De=function(e){var t=e.children,n=e.title,r=void 0===n?"ihasabucket.it":n,o=e.url,a=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(_.useRouter)(),n=Object(c.useMemo)((function(){var n=t.query?"".concat(t.pathname,"?").concat(S.a.stringify(t.query)):t.pathname;return e?"".concat(je()).concat(n):n}),[t.query,t.pathname,t.route]);return n}(!0);return Object(c.useMemo)((function(){return navigator&&navigator.share}),[navigator.share])?Re(Pe.a,{thin:!0,onClick:function(){return navigator.share({title:r,url:o||a})}},t||"Share this page",Re(Ie,{color:"white"})):Re("a",{href:o||a},t||"Share this page")},Le=u.a.createElement,We=function(e){var t=e.bucketName,n=e.webApp,r=e.region,o=e.shared,a=r?" in ".concat(r):"";return t&&r?"Launch ".concat(t).concat(a):n&&r?"Launch a web app ".concat(a):!n&&r?"Host ".concat(o?"public":"private"," files in ").concat(a):void 0},Ue=function(e){var t=function(e){return{mainTfContent:ge(e),description:ye(e)}}(e),n=t.description,r=t.mainTfContent,o=Object(c.useState)(!0),a=o[0],i=o[1];return Object(c.useEffect)((function(){setTimeout((function(){return i(!1)}),800)}),[r]),a?Le(_e,null):Le(u.a.Fragment,null,Le(B.a,{as:"h1"},"Bucket is served!"),"Just run the script below, or share this"," ",Le(De,{title:We(e)},"configuration url")," for later.",Le(Te,{bucketName:e.bucketName,mainTfContent:r}),Le(J,null,"The script above will plan the infrastructure and prompt you for confirmation."),Le(J,null,n),Le(B.a,null,"Prerequisites"),Le("h4",null,"AWS Account"),Le("p",null,"If you don't have an AWS account already, sign up at"," ",Le("a",{href:"https://portal.aws.amazon.com/billing/signup#/start"},"aws.amazon.com")),Le("p",null,"If you don't have your ",Le("strong",null,"AWS_SECRET_ACCESS_KEY")," and"," ",Le("strong",null,"AWS_ACCESS_KEY_ID")," handy, find those in the top right corner under your name > Security credentials. They should be exported to your environment:"),Le(we,null,Le(Oe,null,"# Export AWS keys","\n"),"export AWS_SECRET_ACCESS_KEY=yaAS$1...","\n","export AWS_ACCESS_KEY_ID=AKIA..."),Le("h4",null,"Terraform installed"),Le("p",null,"If you haven't already,"," ",Le("a",{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"install Terraform")),Le(we,null,Le(Oe,null,"# For Macs with homebrew","\n"),"brew install hashicorp/tap/terraform"),Le(J,null,"See"," ",Le("a",{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"learn.hashicorp.com/tutorials/terraform/install-cli")," ","for other platforms."))},Me=u.a.createElement,He=function(){var e=F(),t=e.answers,n=e.renderQuestions,r=e.answerQuestion,i=e.hasAnsweredAll;return Me(l.c,null,n.map((function(e){if("radio"===e.type){var n=t[e.id];return Me(ee,{id:e.id,key:e.id,options:e.options,selectedOption:n,onChange:function(t){return r(e.id,t)},title:e.title,description:e.description})}if("dropdown"===e.type){var o=t[e.id];return Me(he,{id:e.id,key:e.id,options:e.options,selectedOption:o,onChange:function(t){return r(e.id,t)},title:e.title,description:e.description})}if("checkbox"===e.type){var a=t[e.id];return Me(oe,{id:e.id,key:e.id,options:e.options,selectedOptions:a,onChange:function(t){return r(e.id,t)},title:e.title,description:e.description})}if("text"===e.type){var i=t[e.id];return Me(se,{id:e.id,key:e.id,value:i,placeholder:e.placeholder,placeholders:e.placeholders,onSubmit:function(t){return r(e.id,t)},title:e.title,description:e.description})}throw new Error("Unexpected question type in ".concat(e))})),i&&Me(Ue,{webApp:U(t,o.storageType,"webapp"),shared:U(t,o.aclPublic,a.TRUE),staging:U(t,o.stagingEnv,a.TRUE),staticPage:U(t,o.webappIsStatic,a.TRUE),bucketName:W(t,o.bucketName),region:W(t,o.region)}))},Ke=u.a.createElement;function Ye(){return Ke(l.b,null,Ke(s.a,null),Ke(h,null),Ke(He,null),Ke(p.a,null))}},o0o1:function(e,t,n){e.exports=n("ls82")}},[["/EDR",0,2,1,3,4]]]);