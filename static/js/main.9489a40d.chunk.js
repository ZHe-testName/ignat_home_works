(this.webpackJsonpignat_home_works=this.webpackJsonpignat_home_works||[]).push([[0],{111:function(e,t,n){e.exports={h3Class:"hw3_h3Class__2DzNc"}},112:function(e,t,n){e.exports={editableSpan:"superSpan_editableSpan__5vYTn"}},113:function(e,t,n){e.exports={main:"hw5_main__2OEE3"}},123:function(e,t,n){},195:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(10),s=n.n(r),o=n(41),i=(n(123),n(87)),j=n.n(i),l=n(29),u=n(6),d=n(88),b=n.n(d),h=n(1);var O=function(){return Object(h.jsxs)("div",{className:b.a.errorBlock,children:[Object(h.jsx)("div",{children:"404"}),Object(h.jsx)("div",{children:"Page not found!"}),Object(h.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},x=n(7),p=n(11),v=n(65),f=n.n(v),m=function(e){var t=e.red,n=e.className,c=Object(p.a)(e,["red","className"]),a="".concat(t?f.a.red:f.a.default," ").concat(n);return Object(h.jsx)("button",Object(x.a)({className:a},c))},_="SWITC_IS_LOADING",g={isLoading:!1},k=function(e){return{type:_,isLoading:e}},C=n(54),w=n.n(C);var N=function(){var e=Object(o.c)((function(e){return e.loading})),t=Object(o.b)();return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 10",Object(h.jsx)("div",{className:w.a.wrap,children:e.isLoading?Object(h.jsx)("div",{className:w.a.loader}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:w.a.dummy}),Object(h.jsx)("div",{children:Object(h.jsx)(m,{onClick:function(){t(k(!0)),setTimeout((function(){return t(k(!1))}),2e3)},children:"set loading..."})})]})}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},y=n(5),S=n(89),R=n.n(S),F=function(e){var t=e.options,n=void 0===t?[]:t,c=e.onChange,a=e.onChangeOption,r=Object(p.a)(e,["options","onChange","onChangeOption"]),s=null===n||void 0===n?void 0:n.map((function(e,t){return Object(h.jsx)("option",{children:e},t)}));return Object(h.jsx)("select",Object(x.a)(Object(x.a)({className:R.a.select,onChange:function(e){c&&c(e),a&&a(e.currentTarget.value)}},r),{},{children:s}))},T=n(90),E=n.n(T),I=function(e){e.type;var t=e.name,n=e.options,c=e.value,a=e.onChange,r=e.onChangeOption,s=(Object(p.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){a&&a(e),r&&r(e.currentTarget.value)}),o=n?n.map((function(e,n){return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"radio",name:t,value:e,checked:c===e,onChange:s}),e.toUpperCase()]},t+"-"+n)})):[];return Object(h.jsx)("div",{className:E.a.radio,children:o})},B=["x","y","z"];var A=function(){var e=Object(c.useState)(B[1]),t=Object(y.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 7",Object(h.jsx)("div",{children:Object(h.jsx)(F,{options:B,value:n,onChangeOption:a})}),Object(h.jsx)("div",{children:Object(h.jsx)(I,{name:"radio",options:B,value:n,onChangeOption:a})}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},L=n(42),M=function(e,t){switch(t.type){case"sort":return"up"===t.payload?Object(L.a)(e).sort((function(e,t){return e.age-t.age})):"down"===t.payload?Object(L.a)(e).sort((function(e,t){return t.age-e.age})):e;case"check":return e.filter((function(e){return e.age>=18}));default:return e}},P=n(55),D=n.n(P),G=[{_id:0,name:"Kat",age:3},{_id:1,name:"Johney",age:66},{_id:2,name:"Simon",age:16},{_id:3,name:"Freddy",age:44},{_id:4,name:"HULK",age:40},{_id:5,name:"Ira",age:55}];var K=function(){var e=Object(c.useState)(G),t=Object(y.a)(e,2),n=t[0],a=t[1],r=n.map((function(e){return Object(h.jsxs)("div",{className:D.a.userRow,children:[Object(h.jsx)("span",{children:e.name}),Object(h.jsx)("span",{children:e.age})]},e._id)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("hr",{}),"homeworks 8",Object(h.jsxs)("div",{className:D.a.main,children:[r,Object(h.jsxs)("div",{className:D.a.buttonsBlok,children:[Object(h.jsx)("div",{children:Object(h.jsx)(m,{onClick:function(){return a(M(G,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(h.jsx)("div",{children:Object(h.jsx)(m,{onClick:function(){return a(M(G,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(h.jsx)("div",{children:Object(h.jsx)(m,{onClick:function(){return a(M(G,{type:"check",payload:18}))},children:"18 filter"})})]})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},W=n(56),H=n.n(W);var J=function(){var e=Object(c.useState)(0),t=Object(y.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),s=Object(y.a)(r,2),o=s[0],i=s[1],j=Object(c.useState)(!1),l=Object(y.a)(j,2),u=l[0],d=l[1],b=Object(c.useState)(v()),O=Object(y.a)(b,2),x=O[0],p=O[1];function v(){var e=new Date,t=e.getSeconds(),n=e.getMinutes(),c=e.getHours();return"".concat(c<10?"0"+c:c," : ").concat(n<10?"0"+n:n," : ").concat(t<10?"0"+t:t)}var f=function(){clearInterval(n),a(0)},_=x,g=o;return Object(h.jsxs)("div",{className:H.a.clockWrap,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{onClick:function(){f();var e=window.setInterval((function(){p(v())}),1e3);a(e)},children:"start"}),Object(h.jsx)(m,{onClick:f,children:"stop"})]}),Object(h.jsxs)("div",{className:H.a.clock,children:[Object(h.jsx)("div",{onMouseEnter:function(){i(function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,c=e.getFullYear();return"".concat(t<10?"0"+t:t," . ").concat(n<10?"0"+n:n," . ").concat(c)}()),d(!0)},onMouseLeave:function(){d(!1)},children:_}),u&&Object(h.jsx)("div",{className:H.a.date,children:g})]})]})};var U=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 9",Object(h.jsx)(J,{}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})};var V=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(A,{}),Object(h.jsx)(K,{}),Object(h.jsx)(U,{}),Object(h.jsx)(N,{})]})},z=n(91),X=n.n(z),Y=function(e){e.type;var t=e.onChange,n=e.onChangeRange,c=e.className,a=e.value,r=Object(p.a)(e,["type","onChange","onChangeRange","className","value"]),s="".concat(X.a.range," ").concat(c||"");return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("input",Object(x.a)({value:a,type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:s},r))})},Q=n(198),q=function(e){var t=e.onChangeRange,n=e.value,c=e.max,a=void 0===c?100:c,r=e.min,s=void 0===r?0:r,o=e.defaultValue;return Object(h.jsx)(Q.a,{range:!0,defaultValue:o,value:n,onChange:t,min:s,max:a})},Z=n(35),$=n.n(Z);var ee=function(){var e=Object(c.useState)(20),t=Object(y.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([20,40]),s=Object(y.a)(r,2),o=s[0],i=s[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 11",Object(h.jsxs)("div",{className:$.a.superRange,children:[Object(h.jsx)("span",{className:$.a.values,children:n}),Object(h.jsx)(Y,{value:n,onChangeRange:function(e){a(e)}})]}),Object(h.jsxs)("div",{className:$.a.doubleSuperRange,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:$.a.values,children:o[0]}),Object(h.jsx)("span",{className:$.a.values,children:o[1]})]}),Object(h.jsx)(q,{onChangeRange:function(e){i(e)},defaultValue:o,value:o,max:300})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})};var te=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(ee,{})})},ne=n(57),ce=n.n(ne);var ae=function(e){var t=e.avatar,n=e.name,c=e.message,a=e.time;return Object(h.jsxs)("div",{className:ce.a.message,children:[Object(h.jsx)("div",{className:ce.a.avatar,children:Object(h.jsx)("img",{src:t,alt:"user avatar"})}),Object(h.jsxs)("div",{className:ce.a.textblock,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:n}),Object(h.jsx)("div",{children:c})]}),Object(h.jsx)("div",{children:a})]})]})},re="https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470774-stock-photo-samurai-stands-circled-in-an.jpg",se="Some Name",oe="some text",ie="22:00";var je=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 1",Object(h.jsx)(ae,{avatar:re,name:se,message:oe,time:ie}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},le=n(40),ue=n.n(le);var de=function(e){var t;switch(e.affair.priority){case"high":t="rgb(43, 167, 167)";break;case"middle":t="yellowgreen";break;case"low":t="rgb(84, 84, 204)"}return Object(h.jsxs)("div",{className:ue.a.affairField,style:{color:t},children:["show some text",Object(h.jsx)("button",{className:ue.a.deleteButton,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var be=function(e){var t=e.data,n=e.setFilter,c=t.map((function(t){return Object(h.jsx)(de,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(h.jsxs)("div",{className:ue.a.affairs,children:[Object(h.jsx)("div",{children:c}),Object(h.jsx)("button",{onClick:function(){n("all")},children:"All"}),Object(h.jsx)("button",{onClick:function(){n("high")},children:"High"}),Object(h.jsx)("button",{onClick:function(){n("middle")},children:"Middle"}),Object(h.jsx)("button",{onClick:function(){n("low")},children:"Low"})]})},he=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var Oe=function(){var e=Object(c.useState)(he),t=Object(y.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("all"),s=Object(y.a)(r,2),o=s[0],i=s[1],j=function(e,t){switch(t){case"all":return e;case"high":return e.filter((function(e){return"high"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}))}}(n,o);return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 2",Object(h.jsx)(be,{data:j,setFilter:i,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},xe=n(199),pe=n(43),ve=n.n(pe),fe=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,a=e.onKeyPressHandler,r=e.error,s=e.totalUsers,o=r?ve.a.error:ve.a.noerror;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:ve.a.inputField,children:[Object(h.jsx)("input",{type:"text",className:o,value:t,onChange:n,onKeyPress:a}),Object(h.jsx)("button",{onClick:c,disabled:Boolean(r),children:"add"}),Object(h.jsx)("span",{children:s})]}),Object(h.jsx)("span",{className:ve.a.errorMessage,children:r})]})},me=function(e){var t=e.users,n=e.addUserCallback,a=Object(c.useState)(""),r=Object(y.a)(a,2),s=r[0],o=r[1],i=Object(c.useState)(""),j=Object(y.a)(i,2),l=j[0],u=j[1],d=function(){if(""!==s.trim())return n(s),void o("");u("enter correct name!")},b=t.length;return Object(h.jsx)(fe,{name:s,setNameCallback:function(e){o(e.currentTarget.value)},addUser:d,onKeyPressHandler:function(e){u(null),"Enter"===e.key&&d()},error:l,totalUsers:b})},_e=n(111),ge=n.n(_e);var ke=function(){var e=Object(c.useState)([]),t=Object(y.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{className:ge.a.h3Class,children:[Object(h.jsx)("hr",{}),"homeworks 3",Object(h.jsx)(me,{users:n,addUserCallback:function(e){var t=[].concat(Object(L.a)(n),[{_id:Object(xe.a)(),name:e}]);console.log(t),a(t)}}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},Ce=n(58),we=n.n(Ce),Ne=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,a=e.onEnter,r=e.error,s=e.className,o=e.spanClassName,i=Object(p.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(we.a.error," ").concat(o||""),l="".concat(r?we.a.errorInput:we.a.superInput," ").concat(s);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",Object(x.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),a&&"Enter"===e.key&&a()},className:l},i)),r&&Object(h.jsx)("span",{className:j,children:r})]})},ye=n(69),Se=n.n(ye),Re=n(70),Fe=n.n(Re),Te=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,a=(e.spanClassName,e.children),r=Object(p.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Fe.a.checkbox," ").concat(c||"");return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",Object(x.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),a&&Object(h.jsx)("span",{className:Fe.a.spanClassName,children:a})]})};var Ee=function(){var e=Object(c.useState)(""),t=Object(y.a)(e,2),n=t[0],a=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(c.useState)(!1),i=Object(y.a)(o,2),j=i[0],l=i[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 4",Object(h.jsxs)("div",{className:Se.a.column,children:[Object(h.jsx)(Ne,{value:n,onChangeText:a,onEnter:s,error:r}),Object(h.jsx)(Ne,{className:Se.a.blue}),Object(h.jsx)(m,{children:"default"}),Object(h.jsx)(m,{red:!0,onClick:s,children:"delete "}),Object(h.jsx)(m,{disabled:!0,children:"disabled"}),Object(h.jsx)(Te,{checked:j,onChangeChecked:l,children:"some text "}),Object(h.jsx)(Te,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},Ie=n(112),Be=n.n(Ie),Ae=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,r=Object(p.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),o=Object(y.a)(s,2),i=o[0],j=o[1],l=a||{},u=l.children,d=l.onDoubleClick,b=l.className,O=Object(p.a)(l,["children","onDoubleClick","className"]),v="".concat(Be.a.editableSpan," ").concat(b);return Object(h.jsx)(h.Fragment,{children:i?Object(h.jsx)(Ne,Object(x.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(h.jsx)("span",Object(x.a)(Object(x.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:v},O),{},{children:u||r.value}))})};var Le=n(71),Me=n.n(Le);var Pe=function(){var e="editable-span-value",t=Object(c.useState)(""),n=Object(y.a)(t,2),a=n[0],r=n[1];return Object(h.jsxs)("div",{className:Me.a.hw6Class,children:[Object(h.jsx)("hr",{}),"homeworks 6",Object(h.jsxs)("div",{children:[Object(h.jsx)(Ae,{value:a,onChangeText:r,spanProps:{children:a?void 0:"enter text..."}}),Object(h.jsx)("div",{className:Me.a.pencil})]}),Object(h.jsx)(m,{onClick:function(){!function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}(e,a)},children:"save"}),Object(h.jsx)(m,{onClick:function(){var t=function(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}(e,"");r(t)},children:"restore"}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})};var De=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(je,{}),Object(h.jsx)(Oe,{}),Object(h.jsx)(ke,{}),Object(h.jsx)(Ee,{}),Object(h.jsx)(Pe,{})]})},Ge="/pre-junior",Ke="/junior",We="/junior-plus";var He=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(h.jsx)(u.a,{to:Ge})}}),Object(h.jsx)(u.b,{path:Ge,render:function(){return Object(h.jsx)(De,{})}}),Object(h.jsx)(u.b,{path:Ke,render:function(){return Object(h.jsx)(V,{})}}),Object(h.jsx)(u.b,{path:We,render:function(){return Object(h.jsx)(te,{})}}),Object(h.jsx)(u.b,{render:function(){return Object(h.jsx)(O,{})}})]})})},Je=n(74),Ue=n.n(Je);var Ve=function(){return Object(h.jsx)("div",{className:Ue.a.header,children:Object(h.jsxs)("nav",{children:[Object(h.jsx)(l.b,{to:Ge,children:"Pre Junior"}),Object(h.jsx)(l.b,{to:Ke,children:"Junior"}),Object(h.jsx)(l.b,{to:We,children:"Junior +"}),Object(h.jsx)("div",{className:Ue.a.arrow})]})})},ze=n(113),Xe=n.n(ze);var Ye=function(){return Object(h.jsx)("div",{className:Xe.a.main,children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(Ve,{}),Object(h.jsx)(He,{})]})})};var Qe=function(){return Object(h.jsxs)("div",{className:j.a.App,children:[Object(h.jsx)("div",{children:"react homeworks:"}),Object(h.jsx)(Ye,{})]})},qe=n(53),Ze=Object(qe.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(x.a)(Object(x.a)({},e),{},{isLoading:t.isLoading});default:return e}}}),$e=Object(qe.b)(Ze),et=$e;window.store=$e;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(194);s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(o.a,{store:et,children:Object(h.jsx)(Qe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,n){e.exports={superRange:"hw11_superRange__RpG1T",doubleSuperRange:"hw11_doubleSuperRange__2C9L1",values:"hw11_values__GxsL3"}},40:function(e,t,n){e.exports={affairs:"Affairs_affairs__3zw_M",deleteButton:"Affairs_deleteButton__eA62y"}},43:function(e,t,n){e.exports={inputField:"Greeting_inputField__3R7xf",errorMessage:"Greeting_errorMessage__Q1avd",error:"Greeting_error__3Ismh",noerror:"Greeting_noerror__O0FLE"}},54:function(e,t,n){e.exports={wrap:"hw10_wrap__2640q",dummy:"hw10_dummy__DFyQE",loader:"hw10_loader__37EaH"}},55:function(e,t,n){e.exports={main:"hw8_main__2Xkz-",userRow:"hw8_userRow__3K7FD",buttonsBlok:"hw8_buttonsBlok__2Liht"}},56:function(e,t,n){e.exports={clockWrap:"clock_clockWrap__3xiid",date:"clock_date__3hqoA",clock:"clock_clock__1FlRG"}},57:function(e,t,n){e.exports={message:"Message_message__9ho26",avatar:"Message_avatar__2Tnlj",textblock:"Message_textblock__3x_YK"}},58:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__lNY0Z",errorInput:"SuperInputText_errorInput__WrFfV",error:"SuperInputText_error__1ttBD"}},65:function(e,t,n){e.exports={default:"SuperButton_default__3njFc",red:"SuperButton_red__LRX6p"}},69:function(e,t,n){e.exports={blue:"HW4_blue__1w2X9",column:"HW4_column__NzHnl",testSpanError:"HW4_testSpanError__1Wy4Y"}},70:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__3koCE",spanClassName:"SuperCheckbox_spanClassName__14GAA"}},71:function(e,t,n){e.exports={hw6Class:"hw6_hw6Class__2P0s6",buttonRotation:"hw6_buttonRotation__232KT",pencil:"hw6_pencil__3Qw3s"}},74:function(e,t,n){e.exports={header:"header_header__2k0oC",arrow:"header_arrow__21xTS"}},87:function(e,t,n){},88:function(e,t,n){e.exports={errorBlock:"error_errorBlock__2FPGV"}},89:function(e,t,n){e.exports={select:"sSelect_select__mNEXS"}},90:function(e,t,n){e.exports={radio:"sRadio_radio__3GVsA"}},91:function(e,t,n){e.exports={range:"SuperRange_range__3NkRx"}}},[[195,1,2]]]);
//# sourceMappingURL=main.9489a40d.chunk.js.map