(window.webpackJsonp=window.webpackJsonp||[]).push([[15,13],{470:function(t,e,n){var content=n(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(88).default)("54ae33d8",content,!0,{sourceMap:!1})},472:function(t,e,n){"use strict";n(470)},473:function(t,e,n){var r=n(87)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n[data-v-72544b91]:root{\n  --primary-text:#050505;\n  --secondary-text:#65676b;\n  --bg-color:#fff;\n  --primary-color:#66c;\n  --hover-color:hsla(0,0%,94.5%,0.1450980392156863)\n}\n.is-dark[data-v-72544b91],.is-dark[data-v-72544b91]:root,html:not(.style-scope)[darkmode][data-v-72544b91]{\n  --primary-color:#393968\n}\n.is-dark[data-v-72544b91],.is-dark[data-v-72544b91]:root{\n  --hover-color:#3a3a3a;\n  --primary-text:#5b5c5d;\n  --secondary-text:#b0b3b8;\n  --bg-color:#242526\n}\np[data-v-72544b91]{\n  -webkit-animation:fadein-data-v-72544b91 2s;\n  animation:fadein-data-v-72544b91 2s\n}\n.card[data-v-72544b91]{\n  position:relative;\n  display:grid;\n  align-items:center;\n  padding:12px;\n  cursor:pointer;\n  border-radius:7px;\n  grid-auto-flow:column;\n  gap:12px\n}\n.card[data-v-72544b91]:hover{\n  background-color:hsla(0,0%,94.5%,0.1450980392156863);\n  background-color:var(--hover-color)\n}\n.card.thema[data-v-72544b91]{\n  color:#444\n}\n.card:hover.thema[data-v-72544b91]{\n  background-color:#f1f1f1\n}\n.card__content[data-v-72544b91]{\n  display:flex\n}\n.card__content[data-v-72544b91],.card__content__start[data-v-72544b91]{\n  flex:1;\n  min-width:0\n}\n.card__content__start .row[data-v-72544b91]{\n  display:flex;\n  align-items:center\n}\n.card__content__start h3[data-v-72544b91],.card__content__start p[data-v-72544b91]{\n  overflow-x:hidden;\n  overflow-y:hidden;\n  white-space:nowrap;\n  text-overflow:ellipsis\n}\n.separator[data-v-72544b91]{\n  margin-left:4px;\n  margin-right:4px\n}\n.card__content__end[data-v-72544b91]{\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  margin-left:12px\n}\n.card .card__content__title[data-v-72544b91]{\n  color:#050505;\n  color:var(--primary-text);\n  margin-top:6px;\n  margin-bottom:6px;\n  font-size:15px\n}\n.card .card__content__subtitle[data-v-72544b91]{\n  display:flex;\n  color:#65676b;\n  color:var(--secondary-text);\n  font-size:1rem\n}\n.card__image[data-v-72544b91]{\n  position:relative;\n  display:flex;\n  margin-right:12px\n}\n@media(max-width:767px){\n.card__image[data-v-72544b91]{\n    margin-right:0\n}\n}\n.badge[data-v-72544b91]{\n  position:absolute;\n  right:3px;\n  bottom:3px;\n  width:10px;\n  height:10px;\n  background:#5ad539;\n  border-radius:50%\n}\n.border[data-v-72544b91]{\n  stroke-width:6;\n  -webkit-backdrop-filter:blur(19.8px);\n          backdrop-filter:blur(19.8px);\n  stroke:rgba(0,0,0,.1);\n  fill:none\n}\n.makeflex[data-v-72544b91]{\n  display:flex\n}\n@keyframes fadein-data-v-72544b91{\n0%{\n    opacity:0\n}\nto{\n    opacity:1\n}\n}\n@-webkit-keyframes fadein-data-v-72544b91{\n0%{\n    opacity:0\n}\nto{\n    opacity:1\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},474:function(t,e,n){"use strict";n.r(e);n(137);var r={props:{name:String,index:Number,imgurl:Number,thema:{type:String,default:"#242526"}},data:function(){return{imgProfile:"https://randomuser.me/api/portraits/women/"+this.index+".jpg"}}},o=(n(472),n(73)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card is-dark",class:t.thema},[n("div",{staticClass:"card__image"},[n("svg",{staticStyle:{height:"56px",width:"56px"},attrs:{role:"none"}},[n("mask",{attrs:{id:"circle"}},[n("circle",{attrs:{cx:"28",cy:"28",fill:"white",r:"28"}}),t._v(" "),n("circle",{attrs:{cx:"48",cy:"48",fill:"black",r:"7"}})]),t._v(" "),n("g",{attrs:{mask:"url(#circle)"}},[n("image",{staticStyle:{height:"56px",width:"56px"},attrs:{x:"0",y:"0",height:"100%",preserveAspectRatio:"xMidYMid slice",width:"100%",href:t.imgProfile}}),t._v(" "),n("circle",{staticClass:"border",attrs:{cx:"28",cy:"28",r:"28"}})])]),t._v(" "),n("div",{staticClass:"badge"})]),t._v(" "),n("div",{staticClass:"card__content"},[n("div",{staticClass:"card__content__start"},[n("h3",{staticClass:"card__content__title"},[t._v(t._s(t.name))]),t._v(" "),n("div",{staticClass:"row card__content__subtitle"},[n("p",[t._v("\n            In the figure above, the second card content wrap into multiple\n            lines. This isn’t looking good for such a component. To avoid\n            that, here is what to do\n          ")]),t._v(" "),n("span",{staticClass:"separator"},[t._v(".")]),t._v(" "),n("time",[t._t("default")],2)])]),t._v(" "),n("div",{staticClass:"card__content__end"})])])])}),[],!1,null,"72544b91",null);e.default=component.exports},539:function(t,e,n){"use strict";n.r(e);var r={},o=n(73),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col bg-white w-screen"},[n("div",{staticClass:"border-b-2 mt-3 pl-8 flex items-center w-full text-blue-500"},[n("svg",{staticClass:"h-8 w-8",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z","clip-rule":"evenodd"}})]),t._v(" "),n("h1",{staticClass:"text-2xl m-3 text-gray-500"},[t._v("Messaging")])]),t._v(" "),n("div",{staticClass:"flex text-gray-700",staticStyle:{overflow:"hidden","padding-right":"0px"}},[n("div",{staticClass:"chat w-1/4 border-gray-300 border-r-2 pt-6 flex",staticStyle:{height:"892px",width:"270px","flex-direction":"column"}},[n("div",{staticClass:"flex p-1 justify-between"},[n("h2",[t._v("Chats")]),t._v(" "),n("div",{staticClass:"flex text-gray-400"},[n("svg",{staticClass:"h-6 w-6 hover:text-blue-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"}})]),t._v(" "),n("svg",{staticClass:"h-6 w-6 hover:text-blue-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"}})])])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"userson mt-8"},[n("ChatProfileImg",{attrs:{name:"Leslie Laurens",thema:"thema"}},[t._v("\n          3h\n        ")]),t._v(" "),n("ChatProfileImg",{attrs:{name:"Grupo dev",thema:"thema"}},[t._v("\n          12m\n        ")]),t._v(" "),n("ChatProfileImg",{attrs:{name:"Laurem Palmeri",thema:"thema"}},[t._v("\n          44m\n        ")])],1),t._v(" "),t._m(1)]),t._v(" "),t._m(2),t._v(" "),t._m(3)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tags flex p-1"},[n("p",{staticClass:"w-min bg-blue-100 text-blue-400 rounded-xl p-2 m-1"},[t._v("Open")]),t._v(" "),n("p",{staticClass:"w-min bg-blue-100 text-blue-400 rounded-xl p-2 m-1"},[t._v("Done")]),t._v(" "),n("p",{staticClass:"w-min bg-blue-100 text-blue-400 rounded-xl p-2 m-1"},[t._v("\n          Unread\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"flex justify-center",attrs:{href:"/feedback"}},[n("div",{staticClass:"flex justify-center align-middle items-center text-gray-700 w-64 m-2 p-2 rounded-xl absolute bottom-2 bg-gray-200"},[t._v("\n          Submit Feedback\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gropo w-full"},[n("h2",[t._v("Grupo dev")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info w-1/4 bg-gray-100",staticStyle:{"min-width":"250px"}},[n("div",{staticClass:"flex"},[n("h2",[t._v("Chat membros")]),t._v(" "),n("h2",[t._v("Shared Files")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ChatProfileImg:n(474).default})}}]);