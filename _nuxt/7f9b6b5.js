(window.webpackJsonp=window.webpackJsonp||[]).push([[11,13],{470:function(n,t,e){var content=e(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(88).default)("571d5d80",content,!0,{sourceMap:!1})},472:function(n,t,e){"use strict";e(470)},473:function(n,t,e){var r=e(87)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n[data-v-4be982b2]:root{\n  --primary-text:#050505;\n  --secondary-text:#65676b;\n  --bg-color:#fff;\n  --primary-color:#66c;\n  --hover-color:hsla(0,0%,94.5%,0.1450980392156863)\n}\n.is-dark[data-v-4be982b2],.is-dark[data-v-4be982b2]:root,html:not(.style-scope)[darkmode][data-v-4be982b2]{\n  --primary-color:#393968\n}\n.is-dark[data-v-4be982b2],.is-dark[data-v-4be982b2]:root{\n  --hover-color:#3a3a3a;\n  --primary-text:#5b5c5d;\n  --secondary-text:#b0b3b8;\n  --bg-color:#242526\n}\np[data-v-4be982b2]{\n  -webkit-animation:fadein-data-v-4be982b2 2s;\n  animation:fadein-data-v-4be982b2 2s\n}\n.card[data-v-4be982b2]{\n  position:relative;\n  display:grid;\n  align-items:center;\n  padding:12px;\n  cursor:pointer;\n  border-radius:7px;\n  grid-auto-flow:column;\n  gap:12px\n}\n.card[data-v-4be982b2]:hover{\n  background-color:hsla(0,0%,94.5%,0.1450980392156863);\n  background-color:var(--hover-color)\n}\n.card.thema[data-v-4be982b2]{\n  color:#444\n}\n.card:hover.thema[data-v-4be982b2]{\n  background-color:#f1f1f1\n}\n.card__content[data-v-4be982b2]{\n  display:flex\n}\n.card__content[data-v-4be982b2],.card__content__start[data-v-4be982b2]{\n  flex:1;\n  min-width:0\n}\n.card__content__start .row[data-v-4be982b2]{\n  display:flex;\n  align-items:center\n}\n.card__content__start h3[data-v-4be982b2],.card__content__start p[data-v-4be982b2]{\n  overflow-x:hidden;\n  overflow-y:hidden;\n  white-space:nowrap;\n  text-overflow:ellipsis\n}\n.separator[data-v-4be982b2]{\n  margin-left:4px;\n  margin-right:4px\n}\n.card__content__end[data-v-4be982b2]{\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  margin-left:12px\n}\n.card .card__content__title[data-v-4be982b2]{\n  color:#050505;\n  color:var(--primary-text);\n  margin-top:6px;\n  margin-bottom:6px;\n  font-size:15px\n}\n.card .card__content__subtitle[data-v-4be982b2]{\n  display:flex;\n  color:#65676b;\n  color:var(--secondary-text);\n  font-size:1rem\n}\n.card__image[data-v-4be982b2]{\n  position:relative;\n  display:flex;\n  margin-right:12px\n}\n@media(max-width:767px){\n.card__image[data-v-4be982b2]{\n    margin-right:0\n}\n}\n.badge[data-v-4be982b2]{\n  position:absolute;\n  right:3px;\n  bottom:3px;\n  width:10px;\n  height:10px;\n  background:#5ad539;\n  border-radius:50%\n}\n.border[data-v-4be982b2]{\n  stroke-width:6;\n  -webkit-backdrop-filter:blur(19.8px);\n          backdrop-filter:blur(19.8px);\n  stroke:rgba(0,0,0,.1);\n  fill:none\n}\n.makeflex[data-v-4be982b2]{\n  display:flex\n}\n@keyframes fadein-data-v-4be982b2{\n0%{\n    opacity:0\n}\nto{\n    opacity:1\n}\n}\n@-webkit-keyframes fadein-data-v-4be982b2{\n0%{\n    opacity:0\n}\nto{\n    opacity:1\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},474:function(n,t,e){"use strict";e.r(t);var r={props:{name:String,thema:{type:String,default:"#242526"}},data:function(){return{imgProfile:"https://picsum.photos/100/100"}}},o=(e(472),e(73)),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"card is-dark",class:n.thema},[e("div",{staticClass:"card__image"},[e("svg",{staticStyle:{height:"56px",width:"56px"},attrs:{role:"none"}},[e("mask",{attrs:{id:"circle"}},[e("circle",{attrs:{cx:"28",cy:"28",fill:"white",r:"28"}}),n._v(" "),e("circle",{attrs:{cx:"48",cy:"48",fill:"black",r:"7"}})]),n._v(" "),e("g",{attrs:{mask:"url(#circle)"}},[e("image",{staticStyle:{height:"56px",width:"56px"},attrs:{x:"0",y:"0",height:"100%",preserveAspectRatio:"xMidYMid slice",width:"100%",href:n.imgProfile}}),n._v(" "),e("circle",{staticClass:"border",attrs:{cx:"28",cy:"28",r:"28"}})])]),n._v(" "),e("div",{staticClass:"badge"})]),n._v(" "),e("div",{staticClass:"card__content"},[e("div",{staticClass:"card__content__start"},[e("h3",{staticClass:"card__content__title"},[n._v(n._s(n.name))]),n._v(" "),e("div",{staticClass:"row card__content__subtitle"},[e("p",[n._v("\n            In the figure above, the second card content wrap into multiple\n            lines. This isn’t looking good for such a component. To avoid\n            that, here is what to do\n          ")]),n._v(" "),e("span",{staticClass:"separator"},[n._v(".")]),n._v(" "),e("time",[n._t("default")],2)])]),n._v(" "),e("div",{staticClass:"card__content__end"})])])])}),[],!1,null,"4be982b2",null);t.default=component.exports},484:function(n,t,e){var content=e(512);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(88).default)("7c14093a",content,!0,{sourceMap:!1})},511:function(n,t,e){"use strict";e(484)},512:function(n,t,e){var r=e(87)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n.Online{\n  color:#44cc56\n}\n.OFFLINE{\n  color:#e00\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},560:function(n,t,e){"use strict";e.r(t);var r={components:{ChatProfileImg:e(474).default}},o=(e(511),e(73)),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",[n._t("default")],2)}),[],!1,null,null,null);t.default=component.exports}}]);