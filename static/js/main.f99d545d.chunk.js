(this.webpackJsonpignat_home_works=this.webpackJsonpignat_home_works||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={affairs:"Affairs_affairs__3zw_M",deleteButton:"Affairs_deleteButton__eA62y"}},,function(e,t,n){e.exports={inputField:"Greeting_inputField__3R7xf",errorMessage:"Greeting_errorMessage__Q1avd",error:"Greeting_error__3Ismh",noerror:"Greeting_noerror__O0FLE"}},,function(e,t,n){e.exports={main:"hw8_main__2Xkz-",userRow:"hw8_userRow__3K7FD",buttonsBlok:"hw8_buttonsBlok__2Liht"}},function(e,t,n){e.exports={message:"Message_message__9ho26",avatar:"Message_avatar__2Tnlj",textblock:"Message_textblock__3x_YK"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__lNY0Z",errorInput:"SuperInputText_errorInput__WrFfV",error:"SuperInputText_error__1ttBD"}},,,function(e,t,n){e.exports={default:"SuperButton_default__3njFc",red:"SuperButton_red__LRX6p"}},function(e,t,n){e.exports={blue:"HW4_blue__1w2X9",column:"HW4_column__NzHnl",testSpanError:"HW4_testSpanError__1Wy4Y"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__3koCE",spanClassName:"SuperCheckbox_spanClassName__14GAA"}},function(e,t,n){e.exports={hw6Class:"hw6_hw6Class__2P0s6",buttonRotation:"hw6_buttonRotation__232KT",pencil:"hw6_pencil__3Qw3s"}},,,function(e,t,n){e.exports={header:"header_header__2k0oC",arrow:"header_arrow__21xTS"}},,,,function(e,t,n){},function(e,t,n){e.exports={errorBlock:"error_errorBlock__2FPGV"}},function(e,t,n){e.exports={select:"sSelect_select__mNEXS"}},function(e,t,n){e.exports={radio:"sRadio_radio__3GVsA"}},function(e,t,n){e.exports={h3Class:"hw3_h3Class__2DzNc"}},function(e,t,n){e.exports={editableSpan:"superSpan_editableSpan__5vYTn"}},,function(e,t,n){e.exports={main:"hw5_main__2OEE3"}},,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(29),s=n.n(a),o=(n(42),n(30)),i=n.n(o),j=n(8),l=n(2),u=n(31),d=n.n(u),b=n(0);var h=function(){return Object(b.jsxs)("div",{className:d.a.errorBlock,children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},O=n(3),x=n(5),p=n(4),f=n(32),m=n.n(f),_=function(e){var t=e.options,n=void 0===t?[]:t,r=e.onChange,c=e.onChangeOption,a=Object(p.a)(e,["options","onChange","onChangeOption"]),s=null===n||void 0===n?void 0:n.map((function(e,t){return Object(b.jsx)("option",{children:e},t)}));return Object(b.jsx)("select",Object(x.a)(Object(x.a)({className:m.a.select,onChange:function(e){r&&r(e),c&&c(e.currentTarget.value)}},a),{},{children:s}))},v=n(33),g=n.n(v),k=function(e){e.type;var t=e.name,n=e.options,r=e.value,c=e.onChange,a=e.onChangeOption,s=(Object(p.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),a&&a(e.currentTarget.value)}),o=n?n.map((function(e,n){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",name:t,value:e,checked:r===e,onChange:s}),e.toUpperCase()]},t+"-"+n)})):[];return Object(b.jsx)("div",{className:g.a.radio,children:o})},C=["x","y","z"];var w=function(){var e=Object(r.useState)(C[1]),t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 7",Object(b.jsx)("div",{children:Object(b.jsx)(_,{options:C,value:n,onChangeOption:c})}),Object(b.jsx)("div",{children:Object(b.jsx)(k,{name:"radio",options:C,value:n,onChangeOption:c})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},N=n(12),y=function(e,t){switch(t.type){case"sort":return"up"===t.payload?Object(N.a)(e).sort((function(e,t){return e.age-t.age})):"down"===t.payload?Object(N.a)(e).sort((function(e,t){return t.age-e.age})):e;case"check":return e.filter((function(e){return e.age>=18}));default:return e}},S=n(20),B=n.n(S),F=function(e){var t=e.red,n=e.className,r=Object(p.a)(e,["red","className"]),c="".concat(t?B.a.red:B.a.default," ").concat(n);return Object(b.jsx)("button",Object(x.a)({className:c},r))},T=n(15),E=n.n(T),I=[{_id:0,name:"Kat",age:3},{_id:1,name:"Johney",age:66},{_id:2,name:"Simon",age:16},{_id:3,name:"Freddy",age:44},{_id:4,name:"HULK",age:40},{_id:5,name:"Ira",age:55}];var P=function(){var e=Object(r.useState)(I),t=Object(O.a)(e,2),n=t[0],c=t[1],a=n.map((function(e){return Object(b.jsxs)("div",{className:E.a.userRow,children:[Object(b.jsx)("span",{children:e.name}),Object(b.jsx)("span",{children:e.age})]},e._id)}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("hr",{}),"homeworks 8",Object(b.jsxs)("div",{className:E.a.main,children:[a,Object(b.jsxs)("div",{className:E.a.buttonsBlok,children:[Object(b.jsx)("div",{children:Object(b.jsx)(F,{onClick:function(){return c(y(I,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(b.jsx)("div",{children:Object(b.jsx)(F,{onClick:function(){return c(y(I,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(b.jsx)("div",{children:Object(b.jsx)(F,{onClick:function(){return c(y(I,{type:"check",payload:18}))},children:"18 filter"})})]})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var A=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(w,{}),Object(b.jsx)(P,{})]})};var K=function(){return Object(b.jsx)("div",{children:"JuniorPlus"})},J=n(16),M=n.n(J);var R=function(e){var t=e.avatar,n=e.name,r=e.message,c=e.time;return Object(b.jsxs)("div",{className:M.a.message,children:[Object(b.jsx)("div",{className:M.a.avatar,children:Object(b.jsx)("img",{src:t,alt:"user avatar"})}),Object(b.jsxs)("div",{className:M.a.textblock,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:n}),Object(b.jsx)("div",{children:r})]}),Object(b.jsx)("div",{children:c})]})]})},H="https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470774-stock-photo-samurai-stands-circled-in-an.jpg",U="Some Name",G="some text",W="22:00";var D=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(R,{avatar:H,name:U,message:G,time:W}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},z=n(11),L=n.n(z);var X=function(e){var t;switch(e.affair.priority){case"high":t="rgb(43, 167, 167)";break;case"middle":t="yellowgreen";break;case"low":t="rgb(84, 84, 204)"}return Object(b.jsxs)("div",{className:L.a.affairField,style:{color:t},children:["show some text",Object(b.jsx)("button",{className:L.a.deleteButton,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var Y=function(e){var t=e.data,n=e.setFilter,r=t.map((function(t){return Object(b.jsx)(X,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{className:L.a.affairs,children:[Object(b.jsx)("div",{children:r}),Object(b.jsx)("button",{onClick:function(){n("all")},children:"All"}),Object(b.jsx)("button",{onClick:function(){n("high")},children:"High"}),Object(b.jsx)("button",{onClick:function(){n("middle")},children:"Middle"}),Object(b.jsx)("button",{onClick:function(){n("low")},children:"Low"})]})},V=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var Q=function(){var e=Object(r.useState)(V),t=Object(O.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("all"),s=Object(O.a)(a,2),o=s[0],i=s[1],j=function(e,t){switch(t){case"all":return e;case"high":return e.filter((function(e){return"high"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}))}}(n,o);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(Y,{data:j,setFilter:i,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Z=n(51),$=n(13),q=n.n($),ee=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,c=e.onKeyPressHandler,a=e.error,s=e.totalUsers,o=a?q.a.error:q.a.noerror;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:q.a.inputField,children:[Object(b.jsx)("input",{type:"text",className:o,value:t,onChange:n,onKeyPress:c}),Object(b.jsx)("button",{onClick:r,disabled:Boolean(a),children:"add"}),Object(b.jsx)("span",{children:s})]}),Object(b.jsx)("span",{className:q.a.errorMessage,children:a})]})},te=function(e){var t=e.users,n=e.addUserCallback,c=Object(r.useState)(""),a=Object(O.a)(c,2),s=a[0],o=a[1],i=Object(r.useState)(""),j=Object(O.a)(i,2),l=j[0],u=j[1],d=function(){if(""!==s.trim())return n(s),void o("");u("enter correct name!")},h=t.length;return Object(b.jsx)(ee,{name:s,setNameCallback:function(e){o(e.currentTarget.value)},addUser:d,onKeyPressHandler:function(e){u(null),"Enter"===e.key&&d()},error:l,totalUsers:h})},ne=n(34),re=n.n(ne);var ce=function(){var e=Object(r.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{className:re.a.h3Class,children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(te,{users:n,addUserCallback:function(e){var t=[].concat(Object(N.a)(n),[{_id:Object(Z.a)(),name:e}]);console.log(t),c(t)}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},ae=n(17),se=n.n(ae),oe=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,s=e.className,o=e.spanClassName,i=Object(p.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(se.a.error," ").concat(o||""),l="".concat(a?se.a.errorInput:se.a.superInput," ").concat(s);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(x.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:l},i)),a&&Object(b.jsx)("span",{className:j,children:a})]})},ie=n(21),je=n.n(ie),le=n(22),ue=n.n(le),de=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(p.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(ue.a.checkbox," ").concat(r||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(x.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),c&&Object(b.jsx)("span",{className:ue.a.spanClassName,children:c})]})};var be=function(){var e=Object(r.useState)(""),t=Object(O.a)(e,2),n=t[0],c=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(r.useState)(!1),i=Object(O.a)(o,2),j=i[0],l=i[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:je.a.column,children:[Object(b.jsx)(oe,{value:n,onChangeText:c,onEnter:s,error:a}),Object(b.jsx)(oe,{className:je.a.blue}),Object(b.jsx)(F,{children:"default"}),Object(b.jsx)(F,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(F,{disabled:!0,children:"disabled"}),Object(b.jsx)(de,{checked:j,onChangeChecked:l,children:"some text "}),Object(b.jsx)(de,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},he=n(35),Oe=n.n(he),xe=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,a=Object(p.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),o=Object(O.a)(s,2),i=o[0],j=o[1],l=c||{},u=l.children,d=l.onDoubleClick,h=l.className,f=Object(p.a)(l,["children","onDoubleClick","className"]),m="".concat(Oe.a.editableSpan," ").concat(h);return Object(b.jsx)(b.Fragment,{children:i?Object(b.jsx)(oe,Object(x.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},a)):Object(b.jsx)("span",Object(x.a)(Object(x.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:m},f),{},{children:u||a.value}))})};var pe=n(23),fe=n.n(pe);var me=function(){var e="editable-span-value",t=Object(r.useState)(""),n=Object(O.a)(t,2),c=n[0],a=n[1];return Object(b.jsxs)("div",{className:fe.a.hw6Class,children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsxs)("div",{children:[Object(b.jsx)(xe,{value:c,onChangeText:a,spanProps:{children:c?void 0:"enter text..."}}),Object(b.jsx)("div",{className:fe.a.pencil})]}),Object(b.jsx)(F,{onClick:function(){!function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}(e,c)},children:"save"}),Object(b.jsx)(F,{onClick:function(){var t=function(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}(e,"");a(t)},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var _e=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(D,{}),Object(b.jsx)(Q,{}),Object(b.jsx)(ce,{}),Object(b.jsx)(be,{}),Object(b.jsx)(me,{})]})},ve="/pre-junior",ge="/junior",ke="/junior-plus";var Ce=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(l.a,{to:ve})}}),Object(b.jsx)(l.b,{path:ve,render:function(){return Object(b.jsx)(_e,{})}}),Object(b.jsx)(l.b,{path:ge,render:function(){return Object(b.jsx)(A,{})}}),Object(b.jsx)(l.b,{path:ke,render:function(){return Object(b.jsx)(K,{})}}),Object(b.jsx)(l.b,{render:function(){return Object(b.jsx)(h,{})}})]})})},we=n(26),Ne=n.n(we);var ye=function(){return Object(b.jsx)("div",{className:Ne.a.header,children:Object(b.jsxs)("nav",{children:[Object(b.jsx)(j.b,{to:ve,children:"Pre Junior"}),Object(b.jsx)(j.b,{to:ge,children:"Junior"}),Object(b.jsx)(j.b,{to:ke,children:"Junior +"}),Object(b.jsx)("div",{className:Ne.a.arrow})]})})},Se=n(37),Be=n.n(Se);var Fe=function(){return Object(b.jsx)("div",{className:Be.a.main,children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(ye,{}),Object(b.jsx)(Ce,{})]})})};var Te=function(){return Object(b.jsxs)("div",{className:i.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(Fe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(Te,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[49,1,2]]]);
//# sourceMappingURL=main.f99d545d.chunk.js.map