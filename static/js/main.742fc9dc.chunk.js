(this["webpackJsonpmeiling-dev.stella-it.com"]=this["webpackJsonpmeiling-dev.stella-it.com"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n(1),s=n.n(c),o=n(17),i=n.n(o),u=(n(41),n(7)),d=n(14),l=n(5),j=n(88),h=n(87),p=(n(42),n(43),n(44),n(45),function(){return Object(a.jsx)("div",{id:"logo_wrapper",children:Object(a.jsx)("div",{id:"logo"})})}),b=n(2),O=n.n(b),m=n(4),x=n(9),g=(n(47),function(e){var t=e.children,n=e.value,r=e.max,c=e.grow,s=void 0!==c&&c,o=e.disabled,i=void 0!==o&&o,u=(Object(x.a)(e,["children","value","max","grow","disabled"]),[]);s&&u.push("grow"),i&&u.push("disabled");var d=void 0;void 0!==n&&void 0!==r&&(d=n/r*100);var l=(void 0!==d?d.toPrecision(2)+"% \uc9c4\ud589 \uc644\ub8cc.":"")+(i?" \ube44\ud65c\uc131\ud654\ub428.":"");return Object(a.jsxs)("progress",{className:u.join(" "),value:n,max:r,"aria-label":l,children:[l," ",t]})}),v=n(3),f=(n(48),function(e){var t=e.children,n=e.position,r=void 0===n?"center":n,c=Object(x.a)(e,["children","position"]),o=["btn_row_wrapper"];return s.a.Children.count(t)<=1&&o.push(r),Object(a.jsx)("div",Object(v.a)(Object(v.a)({className:o.join(" ")},c),{},{children:t}))}),_=(n(49),function(e){var t=e.pageName,n=void 0===t?"":t,r=e.progressValue,c=e.progressDisabled,s=void 0!==c&&c,o=e.content,i=e.buttonsBottom,u=e.buttonsBottomPosition,d=void 0===u?"center":u,l=[];r&&l.push("progress");var j=void 0!==r?Object(a.jsx)(g,{value:r,max:100,disabled:s,grow:!0}):Object(a.jsx)(a.Fragment,{}),h=void 0!==i?i:Object(a.jsx)("div",{});return Object(a.jsxs)("div",{id:"wrapper",children:[Object(a.jsxs)("div",{id:"content_wrapper",className:l.join(" "),children:[j,Object(a.jsx)("div",{id:"content",className:n,children:o})]}),Object(a.jsx)(f,{position:d,children:h})]})}),N=(n(50),function(e){e.children;var t=e.type,n=e.placeholder,r=void 0===n?"":n,c=e.onChange,s=e.onEnter,o=e.autoComplete,i=e.readonly,u=void 0!==i&&i,d=e.grow,l=void 0!==d&&d,j=e.disabled,h=void 0!==j&&j,p=Object(x.a)(e,["children","type","placeholder","onChange","onEnter","autoComplete","readonly","grow","disabled"]),b=[];return l&&b.push("grow"),Object(a.jsx)("input",Object(v.a)(Object(v.a)(Object(v.a)({className:b.join(" "),type:t,onChange:c,onKeyPress:function(e){e.shiftKey||"Enter"!==e.key||s&&s()},placeholder:r,autoComplete:o},u),h),p))}),T=(n(51),function(e){var t=e.children,n=["caption"];return e.grow&&n.push("grow"),Object(a.jsx)("p",{className:n.join(" "),children:t})}),E=(n(52),function(e){var t=e.type,n=void 0===t?"text":t,r=e.placeholder,c=void 0===r?"":r,s=e.onChange,o=e.onEnter,i=e.status,u=void 0===i?"normal":i,d=e.width,l=void 0===d?"full":d,j=e.caption,h=void 0===j?"":j,p=e.autoComplete,b=Object(x.a)(e,["type","placeholder","onChange","onEnter","status","width","caption","autoComplete"]);return Object(a.jsxs)("div",Object(v.a)(Object(v.a)({className:"textfield_wrapper ".concat(u," ").concat(l)},b),{},{children:[Object(a.jsx)(N,{grow:!0,type:n,placeholder:c,onChange:s,onEnter:o,autoComplete:p}),Object(a.jsx)(T,{children:h})]}))}),I=(n(53),function(e){var t=e.children,n=e.to,r=e.href,c=(e.center,Object(x.a)(e,["children","to","href","center"]));return n?Object(a.jsx)(d.b,Object(v.a)(Object(v.a)({to:n,className:"textlink"},c),{},{children:t})):Object(a.jsx)("a",Object(v.a)(Object(v.a)({href:r,className:"textlink"},c),{},{children:t}))}),w=(n(59),function(e){var t=e.children,n=e.styleType,r=void 0===n?"primary":n,c=e.to,s=e.href,o=e.grow,i=void 0!==o&&o,u=e.isSquare,l=void 0!==u&&u,j=e.disabled,h=void 0!==j&&j,p=Object(x.a)(e,["children","styleType","to","href","grow","isSquare","disabled"]),b=[r];return i&&b.push("grow"),l&&b.push("square"),c&&h||s&&h?(b.push("button disabled"),Object(a.jsx)("button",Object(v.a)(Object(v.a)({className:b.join(" "),disabled:!0},p),{},{children:t}))):c?(b.push("button"),Object(a.jsx)(d.b,Object(v.a)(Object(v.a)({to:c,className:b.join(" ")},p),{},{children:t}))):s?(b.push("button"),Object(a.jsx)("a",Object(v.a)(Object(v.a)({href:s,className:b.join(" ")},p),{},{children:t}))):Object(a.jsx)("button",Object(v.a)(Object(v.a)({className:b.join(" "),disabled:h},p),{},{children:t}))}),y=(n(60),n(34)),A=n(15),S=n.n(A),k="https://meiling.stella-api.dev",R="meiling-v1-token";function C(){return U.apply(this,arguments)}function U(){return(U=Object(m.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem(R),e.next=3,S.a.get("".concat(k,"/v1/meiling/session"),{headers:null===t||void 0===t?void 0:{Authorization:"Bearer ".concat(t)}});case 3:if(!(n=e.sent.data).success){e.next=17;break}if(null!==n.token&&void 0!==n.token&&(t=n.token),!t){e.next=11;break}return localStorage.setItem(R,t),e.abrupt("return",t);case 11:return localStorage.removeItem(R),e.next=14,C();case 14:return e.abrupt("return",e.sent);case 15:e.next=21;break;case 17:return localStorage.removeItem(R),e.next=20,C();case 20:return e.abrupt("return",e.sent);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return D.apply(this,arguments)}function D(){return(D=Object(m.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return n=e.sent,e.next=5,S.a.post("".concat(k,"/v1/meiling/signin"),{type:"username_check",data:{username:t}},{headers:null===n||void 0===n?void 0:{Authorization:"Bearer ".concat(n)}});case 5:return r=e.sent.data,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){return M.apply(this,arguments)}function M(){return(M=Object(m.a)(O.a.mark((function e(t,n){var r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return r=e.sent,e.next=5,S.a.post("".concat(k,"/v1/meiling/signin"),{type:"username_and_password",data:{username:t,password:n}},{headers:null===r||void 0===r?void 0:{Authorization:"Bearer ".concat(r)}});case 5:return a=e.sent.data,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return H.apply(this,arguments)}function H(){return(H=Object(m.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("Nope");case 2:return e.next=4,C();case 4:return n=e.sent,e.next=7,S.a.get("".concat(k,"/v1/meiling/users/").concat(t),{headers:null===n||void 0===n?void 0:{Authorization:"Bearer ".concat(n)}});case 7:return r=e.sent.data,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return B.apply(this,arguments)}function B(){return(B=Object(m.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return t=e.sent,e.next=5,S.a.get("".concat(k,"/v1/meiling/users"),{headers:null===t||void 0===t?void 0:{Authorization:"Bearer ".concat(t)}});case 5:return n=e.sent.data,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t){return W.apply(this,arguments)}function W(){return(W=Object(m.a)(O.a.mark((function e(t,n){var r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return r=e.sent,e.next=5,S.a.post("".concat(k,"/v1/meiling/signin"),{type:t,context:n?{username:n}:void 0},{headers:null===r||void 0===r?void 0:{Authorization:"Bearer ".concat(r)}});case 5:return a=e.sent.data,e.abrupt("return",a.methods);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,t,n){return Y.apply(this,arguments)}function Y(){return(Y=Object(m.a)(O.a.mark((function e(t,n,r){var a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return a=e.sent,e.next=5,S.a.post("".concat(k,"/v1/meiling/signin"),{type:t,context:r?{username:r}:void 0,data:{method:n}},{headers:null===a||void 0===a?void 0:{Authorization:"Bearer ".concat(a)}});case 5:return c=e.sent.data,e.abrupt("return",c.challenge);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e){return q.apply(this,arguments)}function q(){return(q=Object(m.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return n=e.sent,e.next=5,S.a.get("".concat(k,"/v1/meiling/signout").concat(void 0!==t?"?uuid=".concat(t):""),{headers:null===n||void 0===n?void 0:{Authorization:"Bearer ".concat(n)}});case 5:return r=e.sent.data,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e){if(void 0===e)return[];var t=e.split("?",2)[1],n=[];if("undefined"!==typeof t){var r,a=t.split("&"),c=Object(y.a)(a);try{for(c.s();!(r=c.n()).done;){var s=r.value.split("="),o=s[0],i=s[1];n.push({name:o,value:i})}}catch(u){c.e(u)}finally{c.f()}}return n}function J(e){if(e.response&&e.response.data)return e.response.data}function Z(e){if(void 0===e)return"\uc54c \uc218 \uc5c6\ub294 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.";switch(e.type){case r.ALREADY_SIGNED_IN:return"\uc774\ubbf8 \ub85c\uadf8\uc778 \ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.";case r.ALREADY_SIGNED_OUT:return"\uc774\ubbf8 \ub85c\uadf8\uc544\uc6c3 \ub418\uc5b4\uc788\uc2b5\ub2c8\ub2e4.";case r.AUTHENTICATION_NOT_CURRENT_CHALLENGE_METHOD:return"\uc11c\ubc84\uc0c1\uc758 \uc778\uc99d\uc2dc\ub3c4\uc640 \uc774\ubc88 \uc778\uc99d \uc2dc\ub3c4\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.";case r.AUTHENTICATION_REQUEST_NOT_GENERATED:return"\uc815\uc0c1\uc801\uc778 \uc778\uc99d \uc2dc\ub3c4\uac00 \uc0dd\uc131\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.";case r.AUTHENTICATION_TIMEOUT:return"\uc778\uc99d \uc81c\ud55c\uc2dc\uac04\uc774 \ucd08\uacfc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.";case r.INVALID_REQUEST:return"\uc62c\ubc14\ub974\uc9c0 \uc54a\uc740 \uc694\uccad\uc785\ub2c8\ub2e4.";case r.INVALID_SESSION:return"\ud604\uc7ac \uc138\uc158\uc774 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\ub97c \uc7ac\uc2dc\uc791 \ud574 \ubcf4\uc138\uc694.";case r.INVALID_SIGNIN_METHOD:return"\uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uc778\uc99d \uc218\ub2e8\uc785\ub2c8\ub2e4.";case r.INVALID_SIGNIN_TYPE:return"\uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ub85c\uadf8\uc778 \ubc29\ubc95\uc785\ub2c8\ub2e4.";case r.MORE_THAN_ONE_USER_MATCHED:return"\uc5ec\ub7ec \uacc4\uc815\uc5d0 \ud574\ub2f9\ub418\uc5b4, \ub85c\uadf8\uc778 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778\ud574 \ubcf4\uc138\uc694.";case r.NOT_IMPLMENETED:return"\uc11c\ubc84\uc5d0\uc11c \uc544\uc9c1 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4.";case r.SIGNIN_FAILED:return"\ub85c\uadf8\uc778\uc744 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.";case r.TWO_FACTOR_AUTHENTICATION_REQUEST_NOT_GENERATED:return"2\ucc28 \uc778\uc99d \uc694\uccad\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc0dd\uc131\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \ub85c\uadf8\uc778\uc744 \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.";case r.TWO_FACTOR_AUTHENTICATION_REQUIRED:return"2\ucc28 \uc778\uc99d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.";case r.UNAUTHORIZED:return"\uc811\uadfc \uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.";case r.UNSUPPORTED_SIGNIN_METHOD:return"\uc9c0\uc6d0 \ud558\uc9c0 \uc54a\ub294 \uc778\uc99d \uc218\ub2e8\uc785\ub2c8\ub2e4.";case r.WRONG_PASSWORD:return"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.";case r.WRONG_USERNAME:return"\uc544\uc774\ub514 \ub610\ub294 \uc774\uba54\uc77c\uc774 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.";default:return"\uc54c \uc218 \uc5c6\ub294 \uc624\ub958 (".concat(e.type,") \uc774 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4: ").concat(e.description)}}!function(e){e.UNAUTHORIZED="unauthorized",e.ALREADY_SIGNED_IN="already_signed_in",e.ALREADY_SIGNED_OUT="already_signed_out",e.INVALID_REQUEST="invalid_request",e.INVALID_SESSION="invalid_session",e.WRONG_USERNAME="wrong_username",e.WRONG_PASSWORD="wrong_password",e.INVALID_SIGNIN_TYPE="invalid_signin_type",e.INVALID_SIGNIN_METHOD="invalid_signin_method",e.SIGNIN_FAILED="signin_failed",e.UNSUPPORTED_SIGNIN_METHOD="unsupported_signin_method",e.TWO_FACTOR_AUTHENTICATION_REQUIRED="two_factor_authentication_required",e.TWO_FACTOR_AUTHENTICATION_REQUEST_NOT_GENERATED="two_factor_authentication_request_not_generated",e.MORE_THAN_ONE_USER_MATCHED="more_than_one_user_matched",e.AUTHENTICATION_REQUEST_NOT_GENERATED="authentication_request_not_generated",e.AUTHENTICATION_NOT_CURRENT_CHALLENGE_METHOD="authentication_not_current_challenge_method",e.AUTHENTICATION_TIMEOUT="authentication_timeout",e.NOT_IMPLMENETED="not_implemented"}(r||(r={}));var X,$,ee=function(e){var t=e.history,n=e.location,r=Object(c.useState)(""),s=Object(u.a)(r,2),o=s[0],i=s[1],d=Object(c.useState)({userId:{status:"normal",message:""}}),l=Object(u.a)(d,2),j=l[0],h=l[1],p=function(){var e=Object(m.a)(O.a.mark((function e(){var r,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F(o);case 3:r=e.sent,e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),e.t0.response?(a=J(e.t0),h({userId:{status:"negative",message:Z(a)}})):h({userId:{status:"negative",message:"Meiling API \uc11c\ubc84\uc640\uc758 \ud1b5\uc2e0\uc5d0 \uc2e4\ud328 \ud588\uc2b5\ub2c8\ub2e4."}}),e.abrupt("return");case 10:r.success?(c=r.data?{name:r.data.name,username:o,profileUrl:""===r.data.profileUrl?void 0:r.data.profileUrl}:{username:o},t.push({pathname:"/password",search:n.search,state:c})):h({userId:{status:"negative",message:"\uc0ac\uc6a9\uc790 \uc774\ub984\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}});case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(c.Fragment,{children:Object(a.jsx)(_,{pageName:"signin",progressValue:1/3*100,content:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(E,{type:"text",status:j.userId.status,onChange:function(e){i(e.target.value),h({userId:{status:"normal",message:""}})},onEnter:function(){p()},placeholder:"\uc544\uc774\ub514 \ub610\ub294 \uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694.",caption:j.userId.message,autoComplete:"username email"}),Object(a.jsx)(I,{to:"signup",children:"\uacc4\uc815\uc774 \uc5c6\uc73c\uc2e0\uac00\uc694?"})]}),buttonsBottom:[Object(a.jsx)(w,{styleType:"secondary",to:"socialsignin".concat(n.search),children:"\uc18c\uc15c \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778"},"button_socialsignin"),Object(a.jsx)(w,{onClick:p,children:"\ub2e4\uc74c"},"button_next")]})})},te=function(e){var t,n=e.location,r=Object(c.useState)({loaded:!1,error:!1}),s=Object(u.a)(r,2),o=s[0],i=s[1];return Object(c.useEffect)((function(){o.loaded||Object(m.a)(O.a.mark((function e(){var t,r,a,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=void 0,r="/",n.search&&(a=K(n.search),c=a.find((function(e){return"uuid"===e.name})),s=a.find((function(e){return"uuid"===e.name})),c&&(t=c.value),s&&s.value&&(r=s.value)),e.next=6,Q(t);case 6:i({loaded:!0,error:!1}),window.location.href=r,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),i({loaded:!0,error:!0});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()})),o.loaded?o.error&&(t=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"\uc778\uc99d \uc11c\ubc84\uc640\uc758 \ud1b5\uc2e0 \uc911 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."}),Object(a.jsx)("p",{children:"Meiling API \uac00 \uc628\ub77c\uc778\uc778\uc9c0 \ud655\uc778\ud558\uc138\uc694."})]})):t=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"\ub85c\uadf8\uc544\uc6c3 \ud558\ub294 \uc911 \uc785\ub2c8\ub2e4."}),Object(a.jsx)("p",{children:"\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824 \uc8fc\uc138\uc694."})]}),Object(a.jsx)(c.Fragment,{children:Object(a.jsx)(_,{pageName:"index",progressValue:10,content:t||Object(a.jsx)(l.a,{to:"/".concat(n.search)}),buttonsBottom:[]})})},ne=(n(79),function(e){var t=e.children,n=e.platform,r=e.href,c=Object(x.a)(e,["children","platform","href"]);return Object(a.jsx)("a",Object(v.a)(Object(v.a)({className:"social-button ".concat(n),href:r},c),{},{children:t}))}),re=(n(80),function(){return Object(a.jsxs)("div",{className:"social-buttons-group",children:[Object(a.jsx)(ne,{platform:"github",href:"#",children:"1"}),Object(a.jsx)(ne,{platform:"naver",href:"#",children:"1"}),Object(a.jsx)(ne,{platform:"kakao",href:"#",children:"1"}),Object(a.jsx)(ne,{platform:"google",href:"#",children:"1"})]})}),ae=function(e){var t=e.location;return Object(a.jsx)(c.Fragment,{children:Object(a.jsx)(_,{pageName:"socialsignin",progressDisabled:!0,content:Object(a.jsx)(re,{}),buttonsBottom:[Object(a.jsx)(w,{styleType:"secondary",to:"signin".concat(t.search),children:"\uc544\uc774\ub514\ub098 \uc774\uba54\uc77c\ub85c \ub85c\uadf8\uc778"})],buttonsBottomPosition:"left"})})},ce=(n(81),function(e){var t=e.alt,n=void 0===t?"":t,r=e.src,c=void 0===r?"":r,s=e.size,o=void 0===s?"large":s,i=Object(x.a)(e,["alt","src","size"]);return Object(a.jsx)("img",Object(v.a)({className:"profile_img ".concat(o),src:c,alt:n},i))}),se=(n(82),function(e){var t=e.src,n=void 0===t?"":t,r=e.size,c=void 0===r?"large":r,s=e.msg,o=e.username,i=["profile_info",c];return s&&i.push("msg"),Object(a.jsxs)("div",{className:i.join(" "),children:[Object(a.jsx)(ce,{src:n,size:c}),void 0!==s?Object(a.jsx)("p",{className:"msg",children:s}):Object(a.jsx)(a.Fragment,{}),void 0!==o?Object(a.jsx)("p",{className:"username",children:o}):Object(a.jsx)(a.Fragment,{})]})}),oe=(n(83),function(e){var t,n,s,o=e.location,i=e.history,d=Object(c.useState)(""),j=Object(u.a)(d,2),h=j[0],p=j[1],b=Object(c.useState)({password:{status:"normal",message:""}}),x=Object(u.a)(b,2),g=x[0],v=x[1],f=null===(t=o.state)||void 0===t?void 0:t.name,N=null===(n=o.state)||void 0===n?void 0:n.username,T=null===(s=o.state)||void 0===s?void 0:s.profileUrl;if(!N)return Object(a.jsx)(l.a,{to:"/signin"});var y=function(){var e=Object(m.a)(O.a.mark((function e(){var t,n,a,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P(N,h);case 3:t=e.sent,e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),e.t0.response?(n=J(e.t0),v({password:{status:"negative",message:Z(n)}}),n&&n.type===r.TWO_FACTOR_AUTHENTICATION_REQUIRED&&i.push({pathname:"/2fa",search:o.search})):v({password:{status:"negative",message:"Meiling API \uc11c\ubc84\uc640\uc758 \ud1b5\uc2e0\uc5d0 \uc2e4\ud328 \ud588\uc2b5\ub2c8\ub2e4."}}),e.abrupt("return");case 10:t.success?(a=K(null===o||void 0===o?void 0:o.search),c=a.find((function(e){return"redirect_uri"===e.name})),s="/",c&&c.value&&(s=c.value),window.location.href=s):v({password:{status:"negative",message:"\uc54c \uc218 \uc5c6\ub294 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."}});case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(_,{pageName:"password",progressValue:2/3*100,content:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(se,{size:"large",src:"".concat(void 0!==T?T:"https://placehold.it/128x128"),msg:"\ud658\uc601\ud569\ub2c8\ub2e4.".concat(void 0!==f?" ".concat(f," \ub2d8."):""),username:N}),Object(a.jsx)("input",{className:"hidden",autoComplete:"username email",value:N,readOnly:!0}),Object(a.jsx)(E,{type:"password",status:g.password.status,onChange:function(e){p(e.target.value),v({password:{status:"normal",message:""}})},onEnter:y,placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.",caption:g.password.message,autoComplete:"password"}),Object(a.jsx)(I,{to:"find-password",children:"\ube44\ubc00\ubc88\ud638\ub97c \uc78a\uc73c\uc168\ub098\uc694?"}),Object(a.jsx)(I,{to:"find-password",children:"\ube44\ubc00\ubc88\ud638 \uc5c6\uc774 \ub85c\uadf8\uc778\ud569\ub2c8\ub2e4."})]}),buttonsBottom:[Object(a.jsx)(w,{styleType:"secondary",to:"signin".concat(o.search),children:"\uc774\uc804"}),Object(a.jsx)(w,{onClick:y,children:"\ub2e4\uc74c"})]})}),ie=function(e){var t=e.location,n=Object(c.useState)({loaded:!1,loggedIn:!1,commsFailed:!1}),r=Object(u.a)(n,2),s=r[0],o=r[1];return Object(c.useEffect)((function(){s.loaded||Object(m.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G();case 3:t=e.sent,o({loaded:!0,loggedIn:!!t&&t.length>0,commsFailed:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response?o({loaded:!0,loggedIn:!1,commsFailed:!1}):o({loaded:!1,loggedIn:!1,commsFailed:!0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()})),s.loaded?s.loggedIn?Object(a.jsx)(l.a,{to:"/users".concat(t.search)}):Object(a.jsx)(l.a,{to:"/signin".concat(t.search)}):Object(a.jsx)(c.Fragment,{children:Object(a.jsx)(_,{pageName:"index",progressValue:10,content:s.commsFailed?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"\uc778\uc99d \uc11c\ubc84\uc640\uc758 \ud1b5\uc2e0 \uc911 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."}),Object(a.jsx)("p",{children:"Meiling API \uac00 \uc628\ub77c\uc778\uc778\uc9c0 \ud655\uc778\ud558\uc138\uc694."})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"\uc778\uc99d \uc11c\ubc84\uc640 \ud1b5\uc2e0 \uc911 \uc785\ub2c8\ub2e4."}),Object(a.jsx)("p",{children:"\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824 \uc8fc\uc138\uc694."})]}),buttonsBottom:[]})})},ue=(n(84),function(){return Object(a.jsx)(c.Fragment,{children:Object(a.jsx)(_,{pageName:"testmode",progressValue:10,content:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"\ud14c\uc2a4\ud2b8 \ubaa8\ub4dc"}),Object(a.jsx)("p",{children:"\ud14c\uc2a4\ud2b8 \ubaa8\ub4dc\uc5d0 \uc811\uc18d\ud558\uc168\uc2b5\ub2c8\ub2e4."}),Object(a.jsx)("h2",{children:"\uc811\uc18d \uac00\ub2a5\ud55c \ud398\uc774\uc9c0"}),Object(a.jsxs)("div",{className:"btn_column_wrapper",children:[Object(a.jsx)(w,{to:"signin",grow:!0,styleType:"secondary",children:"\ub85c\uadf8\uc778"}),Object(a.jsx)(w,{to:"signout",grow:!0,styleType:"secondary",children:"\ub85c\uadf8\uc544\uc6c3"}),Object(a.jsx)(w,{to:"socialsignin",grow:!0,styleType:"secondary",children:"\uc18c\uc15c \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778"}),Object(a.jsx)(w,{onClick:Object(m.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("meiling-v1-token"),e.prev=1,e.next=4,C();case 4:n=e.sent,alert("localStorage: ".concat(t,"\n\nserverVersion: ").concat(n,"\nisNewToken: ").concat(n!==t)),window.confirm("\ud074\ub9bd\ubcf4\ub4dc\ub85c \ubcf5\uc0ac\ud560\uae4c\uc694?")&&(navigator.clipboard.writeText(n),alert("\ud074\ub9bd\ubcf4\ub4dc\ub85c \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4!")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),alert("Meiling API \uc11c\ubc84\uc640 \ud1b5\uc2e0\uc5d0 \uc2e4\ud328 \ud588\uc2b5\ub2c8\ub2e4!");case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),grow:!0,styleType:"secondary",children:"\uba54\uc774\ub9c1 \uc11c\ubc84 \uc138\uc158\ud1a0\ud070 \ubc1c\uae09 \ud14c\uc2a4\ud2b8"}),Object(a.jsx)(w,{href:"https://github.com/Stella-IT/meiling-dev.stella-it.com",grow:!0,styleType:"secondary",children:"\uae43\ud5c8\ube0c \ub808\ud3ec\uc9c0\ud1a0\ub9ac \uc811\uc18d"})]})]}),buttonsBottom:[Object(a.jsx)(w,{styleType:"secondary",href:"https://opensource.stella-it.com/developers/",children:"\uac1c\ubc1c\uc790 \ub9ac\uc18c\uc2a4"},"button_developers"),Object(a.jsx)(w,{to:"signin",children:"\ub85c\uadf8\uc778"},"button_signin")]})})}),de=function(e){var t,n=e.location,r=Object(c.useState)({loaded:!1,error:!1,users:[]}),s=Object(u.a)(r,2),o=s[0],i=s[1];return Object(c.useEffect)((function(){o.loaded||Object(m.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G();case 3:t=e.sent,i({loaded:!0,error:!1,users:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),i({loaded:!0,error:!0,users:[]});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()})),o.loaded?o.error&&(t=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"\uc778\uc99d \uc11c\ubc84\uc640\uc758 \ud1b5\uc2e0 \uc911 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."}),Object(a.jsx)("p",{children:"Meiling API \uac00 \uc628\ub77c\uc778\uc778\uc9c0 \ud655\uc778\ud558\uc138\uc694."})]})):t=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"\uacc4\uc815 \uc815\ubcf4\ub97c \ubd88\ub7ec\uc624\ub294 \uc911 \uc785\ub2c8\ub2e4."}),Object(a.jsx)("p",{children:"\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824 \uc8fc\uc138\uc694."})]}),Object(a.jsx)(c.Fragment,{children:Object(a.jsx)(_,{pageName:"index",progressValue:10,content:t||(o.users.length>0?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"\uacc4\uc815 \uc120\ud0dd"}),Object(a.jsx)("p",{children:"\ubcf8 \uacc4\uc815 \uc120\ud0dd \ud654\uba74\uc740 \ucd5c\uc885\ubcf8\uc774 \uc544\ub2d9\ub2c8\ub2e4."}),o.users.map((function(e){return Object(a.jsx)(w,{to:"/users/".concat(e.id),styleType:"secondary",grow:!0,children:e.name})})),Object(a.jsx)(w,{grow:!0,to:"/signin".concat(n.search),styleType:"tertiary",children:"\uc0c8\ub85c\uc6b4 \uacc4\uc815 \ucd94\uac00"}),Object(a.jsx)(w,{grow:!0,to:"/signout?redirect_uri=".concat(window.location.href),styleType:"tertiary",children:"\ub85c\uadf8\uc544\uc6c3"})]}):Object(a.jsx)(l.a,{to:"/signin".concat(n.search)})),buttonsBottom:[]})})},le=function(e){var t,n,r=e.location,s=e.match,o=Object(c.useState)({loaded:!1,error:!1,user:void 0}),i=Object(u.a)(o,2),d=i[0],j=i[1],h=r.state,p=(null===h||void 0===h?void 0:h.user_id)?null===h||void 0===h?void 0:h.user_id:null===(t=s.params)||void 0===t?void 0:t.user_id;if(Object(c.useEffect)((function(){d.loaded||Object(m.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L(p);case 3:t=e.sent,j({loaded:!0,error:!1,user:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),j({loaded:!0,error:!0,user:void 0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()})),!p)return Object(a.jsx)(l.a,{to:"/"});d.loaded?d.error&&(n=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"\uc778\uc99d \uc11c\ubc84\uc640\uc758 \ud1b5\uc2e0 \uc911 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."}),Object(a.jsx)("p",{children:"Meiling API \uac00 \uc628\ub77c\uc778\uc778\uc9c0 \ud655\uc778\ud558\uc138\uc694."})]})):n=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"\uacc4\uc815 \uc815\ubcf4\ub97c \ubd88\ub7ec\uc624\ub294 \uc911 \uc785\ub2c8\ub2e4."}),Object(a.jsx)("p",{children:"\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824 \uc8fc\uc138\uc694."})]});var b=d.user;return Object(a.jsx)(c.Fragment,{children:Object(a.jsx)(_,{pageName:"index",progressValue:10,content:n||(b?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(se,{size:"large",src:"".concat(void 0!==b.profileUrl?b.profileUrl:"https://placehold.it/128x128"),msg:"".concat(void 0!==b.name?" ".concat(b.name):""),username:b.username}),Object(a.jsxs)("p",{children:["\uacc4\uc815 \uc0dd\uc131 \uc77c\uc790: ",b.createdAt]}),Object(a.jsxs)("p",{children:["\uacc4\uc815 \ub85c\uadf8\uc778 \uc77c\uc790: ",b.lastSignIn]}),Object(a.jsxs)("p",{children:["\uacc4\uc815 \uc778\uc99d \uc77c\uc790: ",b.lastAuthenticated]})]}):Object(a.jsx)(l.a,{to:"/"})),buttonsBottom:[]})})};function je(e){if(void 0===e)return"\uc54c \uc218 \uc5c6\ub294 \uc218\ub2e8";switch(e){case $.EMAIL:return"\uc774\uba54\uc77c";case $.OTP:return"OTP";case $.PGP_SIGNATURE:return"PGP \uc804\uc790\uc11c\uba85";case $.SECURITY_KEY:return"\ubcf4\uc548\ud0a4";case $.SMS:return"\ubb38\uc790";default:return"\uc54c \uc218 \uc5c6\ub294 \uc218\ub2e8 (".concat(e,")")}}!function(e){e.USERNAME_CHECK="username_check",e.USERNAME_AND_PASSWORD="username_and_password",e.TWO_FACTOR_AUTH="two_factor_authentication",e.PASSWORDLESS="passwordless"}(X||(X={})),function(e){e.PGP_SIGNATURE="pgp_signature",e.OTP="otp",e.SMS="sms",e.EMAIL="email",e.SECURITY_KEY="security_key"}($||($={}));var he=function(e){e.history,e.location;var t,n,r,s=e.match,o=Object(c.useState)({loaded:!1,error:void 0,methods:[],challenge:void 0}),i=Object(u.a)(o,2),d=i[0],l=i[1],j=Object(c.useState)(s.params.method),h=Object(u.a)(j,2),p=h[0],b=h[1];return Object(c.useEffect)((function(){d.loaded||(p?Object(m.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z(X.TWO_FACTOR_AUTH,p);case 3:t=e.sent,l({loaded:!0,error:!1,methods:[],challenge:t}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n=J(e.t0),l(n?{loaded:!0,error:Z(n),methods:[],challenge:void 0}:{loaded:!0,error:!0,methods:[],challenge:void 0});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))():Object(m.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V(X.TWO_FACTOR_AUTH);case 3:t=e.sent,l({loaded:!0,error:void 0,methods:t,challenge:void 0}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n=J(e.t0),l(n?{loaded:!0,error:Z(n),methods:[],challenge:void 0}:{loaded:!0,error:!0,methods:[],challenge:void 0});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))())})),d.loaded?d.error&&(t=!0===d.error?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"\uc778\uc99d \uc11c\ubc84\uc640\uc758 \ud1b5\uc2e0 \uc911 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."}),Object(a.jsx)("p",{children:"Meiling API \uac00 \uc628\ub77c\uc778\uc778\uc9c0 \ud655\uc778\ud558\uc138\uc694."})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"\uc624\ub958 \ubc1c\uc0dd!"}),Object(a.jsx)("p",{children:d.error})]})):t=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"2\ucc28 \uc778\uc99d \uc815\ubcf4\ub97c \ubd88\ub7ec\uc624\ub294 \uc911 \uc785\ub2c8\ub2e4."}),Object(a.jsx)("p",{children:"\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824 \uc8fc\uc138\uc694."})]}),t?Object(a.jsx)(c.Fragment,{children:Object(a.jsx)(_,{pageName:"index",progressValue:10,content:t,buttonsBottom:[]})}):p?Object(a.jsx)(c.Fragment,{children:Object(a.jsx)(_,{pageName:"index",progressValue:10,content:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"2\ucc28 \uc778\uc99d"}),Object(a.jsx)("h2",{children:je(p)}),Object(a.jsx)("p",{children:d.challenge})]}),buttonsBottom:[]})}):Object(a.jsx)(c.Fragment,{children:Object(a.jsx)(_,{pageName:"index",progressValue:10,content:d.methods&&(null===(n=d.methods)||void 0===n?void 0:n.length)>0?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"2\ucc28 \uc778\uc99d"}),Object(a.jsx)("p",{children:"\uc774 \uacc4\uc815\uc740 2\ucc28 \uc778\uc99d\uc73c\ub85c \ubcf4\ud638\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc778\uc99d\ud558\uc2e4 \uc218\ub2e8\uc744 \uc120\ud0dd\ud558\uc138\uc694. (\ubcf8 2\ucc28 \uc778\uc99d \ud654\uba74\uc740 \ucd5c\uc885\ubcf8\uc774 \uc544\ub2d9\ub2c8\ub2e4.)"}),null===(r=d.methods)||void 0===r?void 0:r.map((function(e){return Object(a.jsx)(w,{onClick:function(){b(e),l({loaded:!1,error:!1,methods:[],challenge:void 0})},styleType:"secondary",grow:!0,children:je(e)})}))]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"\uc624\ub958 \ubc1c\uc0dd!"}),Object(a.jsx)("p",{children:"\uc774 \uacc4\uc815\uc758 2\ucc28 \uc778\uc99d\uc774 \ud65c\uc131\ud654 \ub418\uc5b4\uc788\uc9c0\ub9cc, \uc0ac\uc6a9 \ud560 \uc218 \uc788\ub294 2\ucc28 \uc778\uc99d \uc218\ub2e8\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),Object(a.jsx)("p",{children:"\ub85c\uadf8\uc778\uc744 \ub354 \uc774\uc0c1 \uc9c4\ud589 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uacc4\uc815\uc758 \uc218\ub3d9 \ubcf5\uad6c\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."}),Object(a.jsx)("p",{children:"Meiling API \uc6b4\uc601\uc790\uc5d0\uac8c \ubb38\uc758\ud558\uc138\uc694."})]}),buttonsBottom:[]})})};var pe=function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){return e.matches},n=Object(c.useState)(t()?"dark":"light"),r=Object(u.a)(n,2),s=r[0],o=r[1];return e.addEventListener("change",(function(){o(t()?"dark":"light")})),Object(c.useEffect)((function(){"dark"===s?(document.body.classList.remove("theme-light"),document.body.classList.add("theme-dark")):(document.body.classList.remove("theme-dark"),document.body.classList.add("theme-light"))})),Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)(p,{}),Object(a.jsx)(d.a,{children:Object(a.jsx)(l.b,{render:function(e){var t=e.location;return console.log(t.key),Object(a.jsx)(j.a,{children:Object(a.jsx)(h.a,{timeout:400,classNames:"page",children:Object(a.jsxs)(l.d,{location:t,children:[Object(a.jsx)(l.b,{exact:!0,path:"/",component:ie}),Object(a.jsx)(l.b,{exact:!0,path:"/signin",component:ee}),Object(a.jsx)(l.b,{exact:!0,path:"/signout",component:te}),Object(a.jsx)(l.b,{exact:!0,path:"/socialsignin",component:ae}),Object(a.jsx)(l.b,{exact:!0,path:"/password",component:oe}),Object(a.jsx)(l.b,{exact:!0,path:"/testmode",component:ue}),Object(a.jsx)(l.b,{exact:!0,path:"/users",component:de}),Object(a.jsx)(l.b,{exact:!0,path:"/users/:user_id",component:le}),Object(a.jsx)(l.b,{exact:!0,path:"/2fa",component:he}),Object(a.jsx)(l.b,{exact:!0,path:"/2fa/:method",component:he})]})},t.key)})}})})]})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(pe,{})}),document.getElementById("root")),be()}},[[85,1,2]]]);
//# sourceMappingURL=main.742fc9dc.chunk.js.map