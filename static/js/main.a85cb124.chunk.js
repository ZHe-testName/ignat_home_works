(this.webpackJsonpignat_home_works=this.webpackJsonpignat_home_works||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={affairs:"Affairs_affairs__3zw_M",deleteButton:"Affairs_deleteButton__eA62y"}},function(e,t,n){e.exports={inputField:"Greeting_inputField__3R7xf",errorMessage:"Greeting_errorMessage__Q1avd",error:"Greeting_error__3Ismh",noerror:"Greeting_noerror__O0FLE"}},,function(e,t,n){e.exports={message:"Message_message__9ho26",avatar:"Message_avatar__2Tnlj",textblock:"Message_textblock__3x_YK"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__lNY0Z",errorInput:"SuperInputText_errorInput__WrFfV",error:"SuperInputText_error__1ttBD"}},,,function(e,t,n){e.exports={blue:"HW4_blue__1w2X9",column:"HW4_column__NzHnl",testSpanError:"HW4_testSpanError__1Wy4Y"}},function(e,t,n){e.exports={default:"SuperButton_default__3njFc",red:"SuperButton_red__LRX6p"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__3koCE",spanClassName:"SuperCheckbox_spanClassName__14GAA"}},function(e,t,n){e.exports={hw6Class:"hw6_hw6Class__2P0s6",buttonRotation:"hw6_buttonRotation__232KT",pencil:"hw6_pencil__3Qw3s"}},,,function(e,t,n){e.exports={header:"header_header__2k0oC",arrow:"header_arrow__21xTS"}},,,,function(e,t,n){},function(e,t,n){e.exports={errorBlock:"error_errorBlock__2FPGV"}},function(e,t,n){e.exports={select:"sSelect_select__mNEXS"}},function(e,t,n){e.exports={radio:"sRadio_radio__3GVsA"}},function(e,t,n){e.exports={h3Class:"hw3_h3Class__2DzNc"}},function(e,t,n){e.exports={editableSpan:"superSpan_editableSpan__5vYTn"}},,function(e,t,n){e.exports={main:"hw5_main__2OEE3"}},,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(27),s=n.n(a),o=(n(41),n(28)),i=n.n(o),j=n(8),l=n(2),u=n(29),d=n.n(u),b=n(0);var h=function(){return Object(b.jsxs)("div",{className:d.a.errorBlock,children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},O=n(3),x=n(5),p=n(4),f=n(30),m=n.n(f),v=function(e){var t=e.options,n=void 0===t?[]:t,r=e.onChange,c=e.onChangeOption,a=Object(p.a)(e,["options","onChange","onChangeOption"]),s=null===n||void 0===n?void 0:n.map((function(e,t){return Object(b.jsx)("option",{children:e},t)}));return Object(b.jsx)("select",Object(x.a)(Object(x.a)({className:m.a.select,onChange:function(e){r&&r(e),c&&c(e.currentTarget.value)}},a),{},{children:s}))},_=n(31),g=n.n(_),C=function(e){e.type;var t=e.name,n=e.options,r=e.value,c=e.onChange,a=e.onChangeOption,s=(Object(p.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),a&&a(e.currentTarget.value)}),o=n?n.map((function(e,n){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",name:t,value:e,checked:r===e,onChange:s}),e.toUpperCase()]},t+"-"+n)})):[];return Object(b.jsx)("div",{className:g.a.radio,children:o})},k=["x","y","z"];var N=function(){var e=Object(r.useState)(k[1]),t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 7",Object(b.jsx)("div",{children:Object(b.jsx)(v,{options:k,value:n,onChangeOption:c})}),Object(b.jsx)("div",{children:Object(b.jsx)(C,{name:"radio",options:k,value:n,onChangeOption:c})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var w=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(N,{})})};var y=function(){return Object(b.jsx)("div",{children:"JuniorPlus"})},S=n(14),T=n.n(S);var E=function(e){var t=e.avatar,n=e.name,r=e.message,c=e.time;return Object(b.jsxs)("div",{className:T.a.message,children:[Object(b.jsx)("div",{className:T.a.avatar,children:Object(b.jsx)("img",{src:t,alt:"user avatar"})}),Object(b.jsxs)("div",{className:T.a.textblock,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:n}),Object(b.jsx)("div",{children:r})]}),Object(b.jsx)("div",{children:c})]})]})},B="https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470774-stock-photo-samurai-stands-circled-in-an.jpg",F="Some Name",P="some text",I="22:00";var A=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(E,{avatar:B,name:F,message:P,time:I}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},M=n(11),J=n.n(M);var K=function(e){var t;switch(e.affair.priority){case"high":t="rgb(43, 167, 167)";break;case"middle":t="yellowgreen";break;case"low":t="rgb(84, 84, 204)"}return Object(b.jsxs)("div",{className:J.a.affairField,style:{color:t},children:["show some text",Object(b.jsx)("button",{className:J.a.deleteButton,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var G=function(e){var t=e.data,n=e.setFilter,r=t.map((function(t){return Object(b.jsx)(K,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{className:J.a.affairs,children:[Object(b.jsx)("div",{children:r}),Object(b.jsx)("button",{onClick:function(){n("all")},children:"All"}),Object(b.jsx)("button",{onClick:function(){n("high")},children:"High"}),Object(b.jsx)("button",{onClick:function(){n("middle")},children:"Middle"}),Object(b.jsx)("button",{onClick:function(){n("low")},children:"Low"})]})},H=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var U=function(){var e=Object(r.useState)(H),t=Object(O.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("all"),s=Object(O.a)(a,2),o=s[0],i=s[1],j=function(e,t){switch(t){case"all":return e;case"high":return e.filter((function(e){return"high"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}))}}(n,o);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(G,{data:j,setFilter:i,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},W=n(36),R=n(50),D=n(12),z=n.n(D),X=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,c=e.onKeyPressHandler,a=e.error,s=e.totalUsers,o=a?z.a.error:z.a.noerror;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:z.a.inputField,children:[Object(b.jsx)("input",{type:"text",className:o,value:t,onChange:n,onKeyPress:c}),Object(b.jsx)("button",{onClick:r,disabled:Boolean(a),children:"add"}),Object(b.jsx)("span",{children:s})]}),Object(b.jsx)("span",{className:z.a.errorMessage,children:a})]})},Y=function(e){var t=e.users,n=e.addUserCallback,c=Object(r.useState)(""),a=Object(O.a)(c,2),s=a[0],o=a[1],i=Object(r.useState)(""),j=Object(O.a)(i,2),l=j[0],u=j[1],d=function(){if(""!==s.trim())return n(s),void o("");u("enter correct name!")},h=t.length;return Object(b.jsx)(X,{name:s,setNameCallback:function(e){o(e.currentTarget.value)},addUser:d,onKeyPressHandler:function(e){u(null),"Enter"===e.key&&d()},error:l,totalUsers:h})},L=n(32),V=n.n(L);var Q=function(){var e=Object(r.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{className:V.a.h3Class,children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(Y,{users:n,addUserCallback:function(e){var t=[].concat(Object(W.a)(n),[{_id:Object(R.a)(),name:e}]);console.log(t),c(t)}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Z=n(15),$=n.n(Z),q=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,s=e.className,o=e.spanClassName,i=Object(p.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat($.a.error," ").concat(o||""),l="".concat(a?$.a.errorInput:$.a.superInput," ").concat(s);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(x.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:l},i)),a&&Object(b.jsx)("span",{className:j,children:a})]})},ee=n(18),te=n.n(ee),ne=n(19),re=n.n(ne),ce=function(e){var t=e.red,n=e.className,r=Object(p.a)(e,["red","className"]),c="".concat(t?re.a.red:re.a.default," ").concat(n);return Object(b.jsx)("button",Object(x.a)({className:c},r))},ae=n(20),se=n.n(ae),oe=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(p.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(se.a.checkbox," ").concat(r||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(x.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),c&&Object(b.jsx)("span",{className:se.a.spanClassName,children:c})]})};var ie=function(){var e=Object(r.useState)(""),t=Object(O.a)(e,2),n=t[0],c=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(r.useState)(!1),i=Object(O.a)(o,2),j=i[0],l=i[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:te.a.column,children:[Object(b.jsx)(q,{value:n,onChangeText:c,onEnter:s,error:a}),Object(b.jsx)(q,{className:te.a.blue}),Object(b.jsx)(ce,{children:"default"}),Object(b.jsx)(ce,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(ce,{disabled:!0,children:"disabled"}),Object(b.jsx)(oe,{checked:j,onChangeChecked:l,children:"some text "}),Object(b.jsx)(oe,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},je=n(33),le=n.n(je),ue=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,a=Object(p.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),o=Object(O.a)(s,2),i=o[0],j=o[1],l=c||{},u=l.children,d=l.onDoubleClick,h=l.className,f=Object(p.a)(l,["children","onDoubleClick","className"]),m="".concat(le.a.editableSpan," ").concat(h);return Object(b.jsx)(b.Fragment,{children:i?Object(b.jsx)(q,Object(x.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},a)):Object(b.jsx)("span",Object(x.a)(Object(x.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:m},f),{},{children:u||a.value}))})};var de=n(21),be=n.n(de);var he=function(){var e="editable-span-value",t=Object(r.useState)(""),n=Object(O.a)(t,2),c=n[0],a=n[1];return Object(b.jsxs)("div",{className:be.a.hw6Class,children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsxs)("div",{children:[Object(b.jsx)(ue,{value:c,onChangeText:a,spanProps:{children:c?void 0:"enter text..."}}),Object(b.jsx)("div",{className:be.a.pencil})]}),Object(b.jsx)(ce,{onClick:function(){!function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}(e,c)},children:"save"}),Object(b.jsx)(ce,{onClick:function(){var t=function(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}(e,"");a(t)},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var Oe=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(A,{}),Object(b.jsx)(U,{}),Object(b.jsx)(Q,{}),Object(b.jsx)(ie,{}),Object(b.jsx)(he,{})]})},xe="/pre-junior",pe="/junior",fe="/junior-plus";var me=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(l.a,{to:xe})}}),Object(b.jsx)(l.b,{path:xe,render:function(){return Object(b.jsx)(Oe,{})}}),Object(b.jsx)(l.b,{path:pe,render:function(){return Object(b.jsx)(w,{})}}),Object(b.jsx)(l.b,{path:fe,render:function(){return Object(b.jsx)(y,{})}}),Object(b.jsx)(l.b,{render:function(){return Object(b.jsx)(h,{})}})]})})},ve=n(24),_e=n.n(ve);var ge=function(){return Object(b.jsx)("div",{className:_e.a.header,children:Object(b.jsxs)("nav",{children:[Object(b.jsx)(j.b,{to:xe,children:"Pre Junior"}),Object(b.jsx)(j.b,{to:pe,children:"Junior"}),Object(b.jsx)(j.b,{to:fe,children:"Junior +"}),Object(b.jsx)("div",{className:_e.a.arrow})]})})},Ce=n(35),ke=n.n(Ce);var Ne=function(){return Object(b.jsx)("div",{className:ke.a.main,children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(ge,{}),Object(b.jsx)(me,{})]})})};var we=function(){return Object(b.jsxs)("div",{className:i.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(Ne,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(we,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[48,1,2]]]);
//# sourceMappingURL=main.a85cb124.chunk.js.map