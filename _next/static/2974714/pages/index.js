(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/0+H":function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n("q1tI")),a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,r=void 0!==o&&o,a=e.hasQuery;return n||r&&(void 0!==a&&a)}t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(a.AmpStateContext))}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"0TmZ":function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),a=n("bnak"),i=n("iaY6"),c=n("vOnD"),l=c.c.ul.withConfig({displayName:"FooterLinksstyle__FooterLinks",componentId:"nwljl2-0"})(["list-style:none;line-height:1.4;padding-left:0;"]),u=r.a.createElement,s=c.c.li.withConfig({displayName:"Link__ListItem",componentId:"sc-1pdj3dm-0"})([""]),p=c.c.a.withConfig({displayName:"Link__ListItemLink",componentId:"sc-1pdj3dm-1"})(["color:white;&:focus{outline:none;color:black;}"]),d=function(e){var t=e.href,n=e.children;return u(s,null,u(p,{href:t},n))},f=c.c.aside.withConfig({displayName:"FooterAsidestyle__FooterAside",componentId:"pb7jnq-0"})(["flex:1;@media (min-width:600px){text-align:",";}"],(function(e){return e.right&&"right"})),m=n("Yr1c"),h=Object(c.c)(m.a).withConfig({displayName:"FooterHeaderstyle__FooterHeader",componentId:"l4q85z-0"})(["color:",";flex:1;font-size:1.3rem;"],(function(e){return e.theme.colors.textSecondary})),b=Object(c.c)(a.c).withConfig({displayName:"FooterSectionstyle__FooterSection",componentId:"sc-11fp392-0"})(["display:flex;flex-direction:column;padding-top:6rem;padding-bottom:3rem;@media (min-width:600px){flex-direction:row;}"]),y=r.a.createElement;t.a=function(){var e=Object(i.b)();return y(a.d,{backgroundColor:e.colors.secondary,color:e.colors.textSecondary,marginTop:"3rem"},y(b,null,y(f,null,y(h,null,"Wat"),y("p",null,"I love Heroku, Vercel seems awesome, Squarespace is a great product. All respect to those who maintain their own servers at DigitalOcean."),y("p",null,"But when it comes to simply hosting a Webapp or static files, AWS S3 is usually faster, cheaper, more reliable and easier \u2013 as long as you stay clear of the AWS console."),y("p",null,"Let me help you with that.")),y(f,{right:!0},y(h,null,"Articles"),y(l,null,y(d,{href:"https://medium.com/trackstack/deploying-a-react-app-to-aws-s3-with-github-actions-b1cb9ba75c95"},"Deploying Webapps to S3"),y(d,{href:"https://github.com/tomfa/s3-uploader"},"Allowing user upload to S3"),y(d,{href:"https://learn.hashicorp.com/tutorials/terraform/github-actions"},"Terraform CI deploy")),y(h,null,"Links"),y(l,null,y(d,{href:"https://github.com/tomfa/ihasabucket"},"Github"),y(d,{href:"https://linkedin.com/in/fagerbekk"},"LinkedIn"),y(d,{href:"https://tomfa.github.io"},"Homepage")))))}},"23aj":function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,"default",(function(){return ye}));var r=n("q1tI"),a=n.n(r),i=n("bnak"),c=n("Bd0E"),l=n("4DxX"),u=n("Yr1c"),s=n("vOnD"),p=s.c.label.withConfig({displayName:"Labelstyle__Label",componentId:"u2u342-0"})(["position:relative;cursor:pointer;padding-bottom:0.7rem;padding-top:0.7rem;padding-left:3rem;padding-right:1.2rem;margin-bottom:3px;background-color:",";color:",";border:2px solid transparent;&:before{content:'';display:block;width:",";height:20px;border:3px solid ",";position:absolute;left:",";top:",";opacity:",";-webkit-transition:all 0.12s,border-color 0.08s;transition:all 0.12s,border-color 0.08s;border-top-color:",";border-left-color:",";transform:",";}"],(function(e){return e.checked?e.theme.colors.primary:""}),(function(e){return e.checked?e.theme.colors.textSecondary:e.theme.colors.textPrimary}),(function(e){return e.checked?"10px":"20px"}),(function(e){return e.checked?"white":"black"}),(function(e){return e.checked?"18px":"13px"}),(function(e){return e.checked?"3px":"8px"}),(function(e){return e.checked?1:.6}),(function(e){return e.checked&&"transparent"}),(function(e){return e.checked&&"transparent"}),(function(e){return e.checked&&"rotate(45deg)"})),d=s.c.input.withConfig({displayName:"Inputstyle__Input",componentId:"sc-1nl68ta-0"})(["&[type='checkbox']{width:1px;height:1px;outline:none;border:none;opacity:0;}&[type='radio']{width:1px;height:1px;outline:none;border:none;opacity:0;}&[type='text']{padding:1rem;flex:1;border:none;font-size:1.2rem;&:focus{margin-right:4px;outline:2px dashed ",";}}&:focus + ","{outline:2px dashed ",";}&:focus::placeholder{color:transparent;}"],(function(e){return e.theme.colors.primary}),p,(function(e){return e.theme.colors.primary})),f=a.a.createElement,m=function(e){var t=e.checked,n=e.group,o=e.onChange,r=e.value,i=e.label,c=e.disabled,l=void 0!==c&&c,u="".concat(n,"-").concat(r);return f(a.a.Fragment,null,f(d,{id:u,value:r,name:u,type:"radio",group:n,checked:t,onChange:function(){return!l&&o(r,!t)},disabled:l}),f(p,{htmlFor:u,checked:t},i))},h=s.c.p.withConfig({displayName:"Descriptionstyle__Description",componentId:"sc-1vej8zf-0"})(["color:",";font-size:0.8rem;font-style:italic;"],(function(e){return e.theme.colors.textMuted})),b=s.c.div.withConfig({displayName:"Choicesstyle__Choices",componentId:"sc-1r49bg-0"})(["display:flex;flex-direction:column;"]),y=s.c.div.withConfig({displayName:"Questionstyle__Question",componentId:"sc-1ce9jof-0"})(["margin-bottom:2.5rem;"]),g=a.a.createElement,v=function(e){var t=e.id,n=e.options,o=e.selectedOption,a=e.onChange,i=e.title,c=e.description,l=e.disabled,s=void 0!==l&&l,p=Object(r.useCallback)((function(e,t){if(!s){if(!t)return a(null);var o=n.find((function(t){return t.value===e}));o&&a(o)}}),[s,n,a]);return g(y,null,i&&g(u.a,null,i),g(b,null,n.map((function(e){return g(m,{key:"".concat(t,"-").concat(e.value),group:t,checked:e===o,onChange:p,value:e.value,label:e.label})}))),c&&g(h,null,c))};function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _(e,t){if(e){if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function S(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||_(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E,O,k,A,C=a.a.createElement,x=function(e){var t=e.checked,n=e.onChange,o=e.value,r=e.label,i=e.group,c=e.disabled,l=void 0!==c&&c,u="".concat(i,"-").concat(o);return C(a.a.Fragment,null,C(d,{id:u,value:o,name:u,type:"checkbox",checked:t,onChange:function(){return!l&&n(o,!t)},disabled:l}),C(p,{htmlFor:u,checked:t},r))},T=a.a.createElement,I=function(e){var t=e.id,n=e.options,o=e.selectedOptions,a=e.onChange,i=e.title,c=e.description,l=e.disabled,s=void 0!==l&&l,p=Object(r.useCallback)((function(e,t){if(!s){var r=o.filter((function(t){return t.value!==e}));if(!t)return a(r);var i=n.find((function(t){return t.value===e}));i&&a([].concat(S(r),[i]))}}),[s,n,a,o]);return T(y,null,i&&T(u.a,null,i),T(b,null,n.map((function(e){return T(x,{group:t,key:e.value,checked:o.includes(e),onChange:p,value:e.value,label:e.label})}))),c&&T(h,null,c))};!function(e){e[e.NOT_EMPTY=0]="NOT_EMPTY"}(E||(E={})),function(e){e.createCertificates="create-certificates",e.domainName="domain-name",e.storageType="storage-type",e.webappIsStatic="webapp-type",e.aclPublic="acl-public",e.configureDns="configure-dns",e.stagingEnv="staging-env",e.region="region"}(O||(O={})),function(e){e.FALSE="false",e.TRUE="true"}(k||(k={})),function(e){e.BUCKET_NAME="bucket_name",e.AWS_REGION="aws_region",e.AWS_ACCESS_KEY="aws_access_key",e.AWS_SECRET_KEY="aws_secret_key",e.ACL="acl",e.ERROR_RESPONSE_CODE="error_response_code",e.ERROR_RESPONSE_PATH="error_response_path"}(A||(A={}));var j;!function(e){e.WEBAPP="web-app",e.FILE_STORAGE="file-storage"}(j||(j={}));var P,N,R;!function(e){e.US_EAST_2="us-east-2",e.US_EAST_1="us-east-1",e.US_WEST_1="us-west-1",e.US_WEST_2="us-west-2",e.AF_SOUTH_1="af-south-1",e.AP_EAST_1="ap-east-1",e.AP_SOUTH_1="ap-south-1",e.AP_NORTHEAST_3="ap-northeast-3",e.AP_NORTHEAST_2="ap-northeast-2",e.AP_SOUTHEAST_1="ap-southeast-1",e.AP_SOUTHEAST_2="ap-southeast-2",e.AP_NORTHEAST_1="ap-northeast-1",e.CA_CENTRAL_1="ca-central-1",e.CN_NORTH_1="cn-north-1",e.CN_NORTHWEST_1="cn-northwest-1",e.EU_CENTRAL_1="eu-central-1",e.EU_WEST_1="eu-west-1",e.EU_WEST_2="eu-west-2",e.EU_SOUTH_1="eu-south-1",e.EU_WEST_3="eu-west-3",e.EU_NORTH_1="eu-north-1",e.SA_EAST_1="sa-east-1",e.ME_SOUTH_1="me-south-1"}(P||(P={})),function(e){e.RADIO="radio",e.CHECKBOX="checkbox",e.TEXT="text",e.DROPDOWN="dropdown"}(N||(N={}));var L=(o(R={},O.domainName,{id:O.domainName,title:"",type:N.TEXT,placeholders:["mydomain.com","uploads.mydomain.com","staging.mydomain.com","www.mydomain.com","test.mydomain.com","uploads.mydomain.com"],description:'We will use this as the S3 bucket name. The bucket name is permanent, but it doesn\'t have to match an actual domain. It does however have to be unique on S3, so "example" or "my-bucket" will not work. If you leave it empty, you\'ll be prompted for a bucket name at deploy time.'}),o(R,O.storageType,{id:O.storageType,title:"What are we storing?",type:N.RADIO,description:"Unlike normal file storage, webapps like React and Vue have a default path, and error pages.",options:[{value:"webapp",label:"A webapp"},{value:"files",label:"Static files or media uploads"}]}),o(R,O.webappIsStatic,{id:O.webappIsStatic,title:"Is the web app statically generated?",type:N.RADIO,description:"Statically generated sites can be optimized for search engines by returning correct HTTP status codes. If you are uncertain, select No.",options:[{value:k.TRUE,label:"Yes (e.g. Next, Gatsby, Nuxt)"},{value:k.FALSE,label:"No (e.g. plain Vue or React)"}],showIf:[{questionId:O.storageType,value:"webapp"}]}),o(R,O.aclPublic,{id:O.aclPublic,title:"Should content be publicly available?",type:N.RADIO,description:"If our files hold secret or personal information, we will need a stricter security policy than if we are storing publicly available files, e.g. media files for a CMS.",options:[{value:k.TRUE,label:"Yes, make files public"},{value:k.FALSE,label:"No, let me control access to the files"}],showIf:[{questionId:O.storageType,value:"files"}]}),o(R,O.region,{id:O.region,title:"In what region do you want the buckets?",type:N.DROPDOWN,defaultValue:P.EU_NORTH_1,description:"A region closer to your users can give an extra performance boost.",options:Object.values(P).map((function(e){return{value:e,label:e}}))}),o(R,O.stagingEnv,{id:O.stagingEnv,title:"Want a test environment?",type:N.RADIO,description:"A staging (or test) environment would mean a duplicate set of buckets. If you're uncertain, select No. You can always create a staging environment later.",options:[{value:k.TRUE,label:"Yes, please create a separate set of buckets for testing"},{value:k.FALSE,label:"No, I won't need that"}]}),R);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=function(e){return"text"===e.type?null:e.options.find((function(t){return(null===t||void 0===t?void 0:t.value)===e.defaultValue}))||null},U=function(e){return"text"!==e.type&&e.defaultValue?"string"===typeof e.defaultValue?e.options.filter((function(t){return t.value===e.defaultValue})):e.defaultValue instanceof Array?e.options.filter((function(t){return e.defaultValue.includes(t.value)})):[]:[]},H=Object.values(L);function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(l){r=!0,a=l}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return n}}(e,t)||_(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=function(e){var t=e.webApp,n=e.staging,r=e.shared,a=e.staticPage,i=e.region,c=e.bucketName,l=t?"git::https://github.com/tomfa/terraform.git//webapp":"git::https://github.com/tomfa/terraform.git//files",u={bucket_name:c?'"'.concat(c,'"'):"var.".concat(A.BUCKET_NAME),aws_region:i?'"'.concat(i,'"'):"var.".concat(A.AWS_REGION)};t?(u.error_path='"/index.html"',u.error_code=a?"404":"200"):u.acl=r?'"public-read"':'"private"';var s=t?"web-app":"file-storage",p=n?[{name:"".concat(s,"-production"),parameters:u},{name:"".concat(s,"-staging"),parameters:B({},u,{bucket_name:c?'"'.concat(c,'.staging"'):'"\\${var.bucket_name}.staging"'})}]:[{name:s,parameters:u}],d=[];return Object.values(A).filter((function(e){return!!p.find((function(t){return!!Object.values(t.parameters).find((function(t){return t.includes("var.".concat(e))}))}))})).forEach((function(e){var t=function(e){var t;return(t={},o(t,A.BUCKET_NAME,"Name of S3 bucket"),o(t,A.AWS_REGION,"Region to deploy to, e.g. eu-north-1, us-east-1"),o(t,A.AWS_ACCESS_KEY,"e.g. AKIA... found in your AWS console > Security credentials"),o(t,A.AWS_SECRET_KEY,"e.g. yaAS$1... found in your AWS console > Security credentials"),o(t,A.ACL,"e.g. AKIA... found in your AWS console > Security credentials"),o(t,A.ERROR_RESPONSE_CODE,"e.g. HTTP status code response when no file matching path is found"),o(t,A.ERROR_RESPONSE_PATH,"e.g. Which file Cloudfront serves when encountering a missing file"),t)[e]}(e);t?(d.push('variable "'.concat(e,'" {')),d.push('  description = "'.concat(t,'"')),d.push("}")):d.push('variable "'.concat(e,'" {}'))})),p.forEach((function(e){d.push(""),d.push('module "'.concat(e.name,'" {')),d.push('  source = "'.concat(l,'"')),Object.entries(e.parameters).forEach((function(e){var t=F(e,2),n=t[0],o=t[1];d.push("  ".concat(n," = ").concat(o))})),d.push("}")})),d.push(""),function(e){var t=e.bucketType,n=e.hasStaging,o=[];return(n?["".concat(t,"-production"),"".concat(t,"-staging")]:[t]).forEach((function(e){var r=n&&e.split("-")[e.split("-").length-1],a=r?"".concat(r,"."):"";o.push({value:"module.".concat(e,".AWS_SECRET_ACCESS_KEY"),label:"".concat(a,"AWS_SECRET_ACCESS_KEY")}),o.push({value:"module.".concat(e,".AWS_ACCESS_KEY_ID"),label:"".concat(a,"AWS_ACCESS_KEY_ID")}),o.push({value:"module.".concat(e,".BUCKET_NAME"),label:"".concat(a,"BUCKET_NAME")}),t===j.WEBAPP&&o.push({value:"module.".concat(e,".CLOUDFRONT_URL"),label:"".concat(a,"CLOUDFRONT_URL")})})),o}({bucketType:t?j.WEBAPP:j.FILE_STORAGE,hasStaging:n}).forEach((function(e){d.push('output "'.concat(e.label,'" {')),d.push("  value = ".concat(e.value)),d.push("}")})),d},q=function(e){var t=e.webApp,n=e.staging,o=e.shared,r=e.staticPage,a=e.region,i=n?"two sets of":"a",c=z({webApp:t,staticPage:r,shared:o}),l=n?"Two sets of AWS keys will be created that are able to upload to the buckets. One for test and one for production environment":"A set of AWS keys will be created that is able to upload to the bucket";return"Once run, it will create ".concat(i," S3 bucket").concat(t?" + Cloudfront":""," in ").concat(a,", configured ").concat(c,". ").concat(l,". Generated keys will be shown as output in the terminal.")},z=function(e){var t=e.webApp,n=e.staticPage,o=e.shared;return t?n?"to serve a solid statically generated web app":"to serve a blazingly fast single-page web app":o?"for hosting publicly available files":"for storing and serving files for authorized requests"},G=s.c.pre.withConfig({displayName:"Prestyle__Pre",componentId:"sc-1nnst8t-0"})(["position:relative;background-color:#3a3a3a;color:white;padding:1rem;margin-top:1.7rem;margin-bottom:1.7rem;overflow:scroll;"]),V=s.c.span.withConfig({displayName:"Mutestyle__Mute",componentId:"sc-13y9s14-0"})(["color:",";"],(function(e){return e.theme.colors.textMuted})),X=a.a.createElement,Q=s.c.svg.withConfig({displayName:"LoadingIcon__Svg",componentId:"sc-39keo9-0"})(["margin:5rem auto;display:block;shape-rendering:auto;& path{fill:",";}"],(function(e){return e.theme.colors.primary})),$=function(e){var t=e.size,n=void 0===t?300:t;return X(Q,{xmlns:"http://www.w3.org/2000/svg",width:"".concat(n,"px"),height:"".concat(n,"px"),viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},X("g",{transform:"translate(50 50)"},X("g",null,X("animateTransform",{attributeName:"transform",type:"rotate",values:"0;45",keyTimes:"0;1",dur:"0.2s",repeatCount:"indefinite"}),X("path",{d:"M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 24.742744050198738 16.964569457146712 L24.742744050198738 16.964569457146712 L30.399598299691117 22.621423706639092 L22.621423706639096 30.399598299691114 L16.964569457146716 24.742744050198734 A30 30 0 0 1 5.5 29.491524206117255 L5.5 29.491524206117255 L5.5 37.491524206117255 L-5.499999999999997 37.491524206117255 L-5.499999999999997 29.491524206117255 A30 30 0 0 1 -16.964569457146705 24.742744050198738 L-16.964569457146705 24.742744050198738 L-22.621423706639085 30.399598299691117 L-30.399598299691117 22.621423706639092 L-24.742744050198738 16.964569457146712 A30 30 0 0 1 -29.491524206117255 5.500000000000009 L-29.491524206117255 5.500000000000009 L-37.491524206117255 5.50000000000001 L-37.491524206117255 -5.500000000000001 L-29.491524206117255 -5.500000000000002 A30 30 0 0 1 -24.742744050198738 -16.964569457146705 L-24.742744050198738 -16.964569457146705 L-30.399598299691117 -22.621423706639085 L-22.621423706639092 -30.399598299691117 L-16.964569457146712 -24.742744050198738 A30 30 0 0 1 -5.500000000000011 -29.491524206117255 L-5.500000000000011 -29.491524206117255 L-5.500000000000012 -37.491524206117255 L5.499999999999998 -37.491524206117255 L5.5 -29.491524206117255 A30 30 0 0 1 16.964569457146702 -24.74274405019874 L16.964569457146702 -24.74274405019874 L22.62142370663908 -30.39959829969112 L30.399598299691117 -22.6214237066391 L24.742744050198738 -16.964569457146716 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20"}))))},J=s.c.button.withConfig({displayName:"PreButtonstyle__PreButton",componentId:"acmi2m-0"})(["background-color:",";color:",";position:absolute;font-family:monospace;top:20px;right:20px;border:none;padding:0.3rem 0.6rem;cursor:pointer;outline-color:",";"],(function(e){return e.theme.colors.bgPrimary}),(function(e){return e.theme.colors.textPrimary}),(function(e){return e.theme.colors.secondary})),Z=a.a.createElement,ee=function(e){var t=e.mainTfContent,n=e.bucketName,o=Object(r.useState)(!1),a=o[0],i=o[1],c=Object(r.useMemo)((function(){return["# Create a folder to store infrastructure code","mkdir infrastructure","cd infrastructure","","# Create config file","cat <<EOT >> ".concat(n||"main",".tf")].concat(S(t),["EOT","","# Deploy","terraform init","terraform apply"])}),[t,n]),l=Object(r.useCallback)((function(){!function(e){var t=window.document.createElement("textarea");t.setAttribute("style","position: absolute; bottom: 0; top: 0; width: 1; height: 1; opacity: 0.01;"),e.forEach((function(e){t.append(e),t.append("\n")})),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(c),i(!0)}),[c]);return Z(G,null,c.map((function(e,t){return e.trim().startsWith("#")?Z(V,{key:t},e,"\n"):Z("span",{key:t},e,"\n")})),Z(J,{onClick:l},a?"Copied!":"Copy to clipboard"))},te=a.a.createElement,ne=function(e){var t=function(e){return{mainTfContent:Y(e),description:q(e)}}(e),n=t.description,o=t.mainTfContent,i=Object(r.useState)(!0),c=i[0],l=i[1];return Object(r.useEffect)((function(){setTimeout((function(){return l(!1)}),800)}),[o]),c?te($,null):te(a.a.Fragment,null,te(u.a,{as:"h1"},"Bucket is served!"),"Just run the script below!",te(ee,{bucketName:e.bucketName,mainTfContent:o}),te(h,null,"The script above ask you for desired bucket name and AWS region."),te(h,null,n),te(u.a,null,"Prerequisites"),te("h4",null,"AWS Account"),te("p",null,"If you don't have an AWS account already, sign up at"," ",te("a",{href:"https://portal.aws.amazon.com/billing/signup#/start"},"aws.amazon.com")),te("p",null,"If you don't have your ",te("strong",null,"AWS_SECRET_ACCESS_KEY")," and"," ",te("strong",null,"AWS_ACCESS_KEY_ID")," handy, find those in the top right corner under your name > Security credentials. They should be exported to your environment:",te(G,null,te(V,null,"# Export AWS keys","\n"),"export AWS_SECRET_ACCESS_KEY=yaAS$1...","\n","export AWS_ACCESS_KEY_ID=AKIA...")),te("h4",null,"Terraform installed"),te("p",null,"If you haven't already,"," ",te("a",{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"install Terraform"),"\n",te(G,null,te(V,null,"# For Macs with homebrew","\n"),"brew install hashicorp/tap/terraform"),te(h,null,"See"," ",te("a",{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"learn.hashicorp.com/tutorials/terraform/install-cli")," ","for other platforms.")))},oe=n("0TmZ"),re=n("o0o1"),ae=n.n(re),ie=s.c.div.withConfig({displayName:"InputContainerstyles__InputContainer",componentId:"sc-17e590b-0"})(["display:flex;"]),ce=s.c.button.withConfig({displayName:"SubmitButtonstyles__SubmitButton",componentId:"sc-75aind-0"})(["color:",";background-color:",";border:none;flex:0.5;position:relative;outline-style:dashed;outline-width:2px;cursor:pointer;&:focus,&:active{outline-color:",";}&:before{content:'';display:block;width:10px;height:20px;border:3px solid white;position:absolute;left:calc(50% - 10px);top:12px;-webkit-transition:all 0.12s,border-color 0.08s;transition:all 0.12s,border-color 0.08s;border-top-color:transparent;border-left-color:transparent;transform:rotate(45deg);}"],(function(e){return e.theme.colors.textSecondary}),(function(e){return e.complete?e.theme.colors.primary:""}),(function(e){return e.theme.colors.primary})),le=a.a.createElement,ue=function(e){var t=e.onSubmit,n=e.value,o=void 0===n?"":n,a=e.title,c=e.placeholder,l=e.placeholders,s=e.description,p=Object(r.useState)(o),f=p[0],m=p[1],b=Object(r.useState)(!1),g=b[0],v=b[1],w=Object(r.useState)((null===l||void 0===l?void 0:l.length)?0:-1),_=w[0],S=w[1],E=Object(r.useState)(-1===_?c:l[_]),O=E[0],k=E[1];Object(r.useEffect)((function(){if(l||!(l.length<2)){!function(){var e,t,n,o,r,a,c;ae.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,ae.a.awrap(Object(i.e)(7e3));case 2:e=l[_%l.length],t=l[(_+1)%l.length],n=e.length+t.length+4,o=25,r=0;case 7:if(!(r<=n)){u.next=16;break}return a=r<=e.length,c=n-r<=t.length,a?k(e.substr(0,e.length-r)):c&&k(t.substr(0,t.length-(n-r))),u.next=13,ae.a.awrap(Object(i.e)(o));case 13:r++,u.next=7;break;case 16:S((function(e){return e+1%l.length}));case 17:case"end":return u.stop()}}),null,null,null,Promise)}()}}),[_]);var A=function(e){v(!0),t(e)};return le(y,null,a&&le(u.a,null,a),le(ie,null,le(d,{type:"text",value:f,placeholder:O,onChange:function(e){m(e.target.value),g&&t(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&A(f)},onBlur:function(){return A(f)}}),le(ce,{type:"submit",complete:f.trim().length>0,onClick:function(){return A(f)}})),s&&le(h,null,s))},se=a.a.createElement,pe=s.c.select.withConfig({displayName:"Dropdown__Select",componentId:"ca76f5-0"})(["font-size:1.2rem;padding:1rem;flex:1;border:none;appearance:none;&:focus,&:active{outline-style:dashed;outline-width:2px;outline-color:",";margin-right:3px;}"],(function(e){return e.theme.colors.primary})),de=s.c.option.withConfig({displayName:"Dropdown__Choice",componentId:"ca76f5-1"})([""]),fe=function(e){var t=e.id,n=e.options,o=e.selectedOption,a=e.onChange,i=e.title,c=e.description,l=e.disabled,s=void 0!==l&&l,p=Object(r.useCallback)((function(e){if(!s){var t=n.find((function(t){return t.value===e}));t&&a(t)}}),[s,n,a]);return se(y,null,i&&se(u.a,null,i),se(ie,null,se(pe,{value:null===o||void 0===o?void 0:o.value,onChange:function(e){return p(e.target.value)}},n.map((function(e){return se(de,{key:"".concat(t,"-").concat(e.value),value:e.value,label:e.label})}))),se(ce,{type:"submit",complete:!!o,onClick:function(){return p(o.value)}})),c&&se(h,null,c))},me=a.a.createElement;function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ye(){return me(i.b,null,me(c.a,null),me(ge,null),me(ve,null),me(oe.a,null))}var ge=function(){return me(i.c,null,me(l.a,{author:"Lolrus, the bucket walrus"},me(a.a.Fragment,null,"Hosting a ",me(i.a,{secondary:!0}," webapp "),"or need to store uploads? Put them in S3 buckets. It's",me(i.a,{secondary:!0}," cheap "),"and",me(i.a,{secondary:!0}," reliable"),". With CloudFront cache, it'll be blazingly ",me(i.a,{secondary:!0},"fast"),". Let's see how",me(i.a,{secondary:!0}," easy "),"it can be.")))},ve=function(){var e,t=Object(r.useState)(H.filter((function(e){return"radio"===e.type||"dropdown"===e.type})).reduce((function(e,t){return W({},e,o({},t.id,M(t)))}),{})),n=t[0],a=t[1],c=Object(r.useState)(H.filter((function(e){return"checkbox"===e.type})).reduce((function(e,t){return W({},e,o({},t.id,U(t)))}),{})),l=c[0],u=c[1],s=Object(r.useState)({}),p=s[0],d=s[1],f=Object(r.useState)(0),m=f[0],h=f[1],b=Object(r.useCallback)((function(e,t){if(t===E.NOT_EMPTY)return y(e);var o,r=H.find((function(t){return t.id===e}));if(!r)throw Error("Missing question for ".concat(e));if("text"===r.type)return p[e]&&p[e]===t;if(!r.options.filter((function(e){return e.value===t})))throw Error("Question ".concat(e," does not have option ").concat(t));return"radio"===r.type||"dropdown"===r.type?(null===(o=n[r.id])||void 0===o?void 0:o.value)===t:"checkbox"===r.type?!!l[r.id].find((function(e){return e.value===t})):void 0}),[n,l,H]),y=Object(r.useCallback)((function(e){var t,o=H.find((function(t){return t.id===e}));if(!o)throw Error("Missing question for ".concat(e));return"radio"===o.type||"dropdown"===o.type?null!=(null===(t=n[o.id])||void 0===t?void 0:t.value):"checkbox"===o.type?l[o.id].length>0:"text"===o.type?Object.keys(p).includes(e):void 0}),[n,l,H]),g=Object(r.useCallback)((function(e){return e.showIf&&!!e.showIf.find((function(e){return!b(e.questionId,e.value)}))}),[b]),w=!H.find((function(e){return!y(e.id)&&!g(e)}));return me(i.c,null,H.slice(0,m+1).map((function(e){var t=H.indexOf(e),r=t===m;if(g(e))return r&&h((function(e){return e+1})),null;if("radio"===e.type){var i=n[e.id]||null;return me(v,{id:e.id,key:e.id,options:e.options,selectedOption:i,onChange:function(n){h((function(e){return Math.max(e,t+1)})),a((function(t){return be({},t,o({},e.id,n))}))},title:e.title,description:e.description})}if("checkbox"===e.type)return me(I,{id:e.id,key:e.id,options:e.options,selectedOptions:l[e.id]||[],onChange:function(n){h((function(e){return Math.max(e,t+1)})),u((function(t){return be({},t,o({},e.id,n))}))},title:e.title,description:e.description});if("text"===e.type)return me(ue,{id:e.id,key:e.id,placeholder:e.placeholder,placeholders:e.placeholders,onSubmit:function(n){d((function(t){return be({},t,o({},e.id,n))})),h((function(e){return Math.max(e,t+1)}))},title:e.title,description:e.description});if("dropdown"===e.type){var c=n[e.id]||null;return me(fe,{id:e.id,key:e.id,options:e.options,selectedOption:c,onChange:function(n){a((function(t){return be({},t,o({},e.id,n))})),h((function(e){return Math.max(e,t+1)}))},title:e.title,description:e.description})}throw new Error("Unexpected question type ".concat(e.type))})),w&&me(ne,{webApp:b(O.storageType,"webapp"),shared:b(O.aclPublic,k.TRUE),staging:b(O.stagingEnv,k.TRUE),staticPage:b(O.webappIsStatic,k.TRUE),bucketName:(e=L["domain-name"],p[e.id]),region:function(e){return n[e.id]}(L[O.region]).value}))}},"4DxX":function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),a=n("vOnD"),i=a.c.h2.withConfig({displayName:"Quotestyle__QuoteStyle",componentId:"sc-1bl7c8l-0"})(["font-family:",";position:relative;font-size:2rem;font-weight:normal;line-height:1.1;margin:0;border:2px solid #fff;border:solid 2px;border-radius:20px;padding:25px;& > *{line-height:1.1;}&:after{content:'';position:absolute;border:2px solid;border-radius:0 50px 0 0;width:60px;height:60px;bottom:-62px;left:50px;border-bottom:none;border-left:none;z-index:3;}&:before{content:'';position:absolute;width:80px;border:6px solid ",";bottom:-3px;left:50px;z-index:2;}"],(function(e){return e.theme.fonts.secondary}),(function(e){return e.theme.colors.bgPrimary})),c=a.c.h4.withConfig({displayName:"Sourcestyle__Source",componentId:"ec6o23-0"})(["margin-left:10rem;&:first-letter{margin-left:-18px;}"]),l=r.a.createElement,u=a.c.blockquote.withConfig({displayName:"BlockQuote__Block",componentId:"sc-1bt5mli-0"})(["font-family:"," max-width:620px;margin-left:0;margin-right:0;margin-bottom:1rem;align-self:center;"],(function(e){return e.theme.fonts.secondary}));t.a=function(e){var t=e.children,n=e.author,o=e.source;return l(u,null,l(i,null,t),(n||o)&&l(c,null,n&&l(r.a.Fragment,null,"\u2014\xa0",n),n&&o&&l("br",null),o&&l("em",null,o)))}},"5fIB":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"8Kt/":function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n("q1tI")),a=o(n("Xuae")),i=n("lwAK"),c=n("FYa8"),l=n("/0+H");function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=u;var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(r){var a=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var c=0,l=p.length;c<l;c++){var u=p[c];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var s=r.props[u],d=o[u]||new Set;d.has(s)?a=!1:(d.add(s),o[u]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var f=a.default();function m(e){var t=e.children;return r.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(f,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}m.rewind=f.rewind,t.default=m},Bd0E:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),a=n("8Kt/"),i=n.n(a),c=r.a.createElement,l=function(){return c(i.a,null,c("title",null,"ihasabucket - instant web app hosting"),c("meta",{property:"og:image",content:"https://user-images.githubusercontent.com/1502702/92998877-e9e1cc00-f51c-11ea-98e6-331460921cde.jpg"}),c("meta",{property:"og:url",content:"https://ihasabucket.it"}),c("meta",{property:"og:title",content:"I has a bucket - instant web app hosting"}),c("meta",{property:"og:description",content:"Guide for hosting React, Vue, Gatsby or user uploads on AWS S3 buckets"}),c("link",{rel:"icon",href:"/favicon.ico"}),c("link",{href:"https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600&display=swap",rel:"stylesheet"}))},u=n("bnak"),s=n("iaY6"),p=n("vOnD").c.h1.withConfig({displayName:"Titlestyle__Title",componentId:"mdvwo2-0"})(["margin:0;line-height:1.15;font-size:4rem;@media (max-width:450px){font-size:2.5rem;}"]),d=r.a.createElement;t.a=function(e){var t=e.title,n=void 0===t?"I has a bucket.":t,o=Object(s.b)();return d(u.d,{backgroundColor:o.colors.primary,color:o.colors.textSecondary},d(u.c,null,d(l,null),d(p,null,n)))}},Xuae:function(e,t,n){"use strict";var o=n("/GRZ"),r=n("qXWd"),a=n("i2R6"),i=n("48fX"),c=n("tCBg"),l=n("T0f4"),u=n("mPvQ");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=l(e);if(t){var r=l(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return c(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var p=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){i(u,c);var l=s(u);function u(e){var a;return o(this,u),a=l.call(this,e),d&&(t.add(r(a)),n(r(a))),a}return a(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(p.Component)}},Yr1c:function(e,t,n){"use strict";var o=n("vOnD").c.h4.withConfig({displayName:"Headerstyle__Header",componentId:"rxfv2u-0"})(["color:",";font-size:2rem;margin-bottom:0.6em;margin-top:0;@media (max-width:450px){font-size:1.4rem;}"],(function(e){return e.color||e.theme.colors.textPrimary}));t.a=o},bnak:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return l}));var o=n("vOnD"),r=o.c.div.withConfig({displayName:"utils__SectionBackground",componentId:"sc-1vrdcy-0"})(["width:100%;background-color:",";color:",";margin-top:",";"],(function(e){return e.backgroundColor}),(function(e){return e.color}),(function(e){return e.marginTop})),a=o.c.section.withConfig({displayName:"utils__Section",componentId:"sc-1vrdcy-1"})(["max-width:","px;width:100vw;margin:0 auto;padding:2rem;@media (max-width:350px){padding:1rem;}"],(function(e){return e.theme.layout.maxWidth})),i=o.c.div.withConfig({displayName:"utils__PageWrapper",componentId:"sc-1vrdcy-2"})(["display:flex;flex-direction:column;width:100vw;"]),c=o.c.span.withConfig({displayName:"utils__Colored",componentId:"sc-1vrdcy-3"})(["color:",";"],(function(e){return e.secondary?e.theme.colors.secondary:e.color||e.theme.colors.primary})),l=function(e){return new Promise((function(t){return setTimeout(t,e)}))}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n("q1tI"));t.AmpStateContext=r.createContext({})},mPvQ:function(e,t,n){var o=n("5fIB"),r=n("rlHP"),a=n("kG2m");e.exports=function(e){return o(e)||r(e)||a()}},o0o1:function(e,t,n){e.exports=n("ls82")},rlHP:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}}},[["/EDR",0,2,1,4]]]);