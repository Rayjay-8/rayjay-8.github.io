(window.webpackJsonp=window.webpackJsonp||[]).push([[47,8,13,25,39,43],{427:function(n,e,t){"use strict";t.r(e);var o={name:"Button"},r=(t(432),t(51)),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"action"},[t("button",{staticClass:"button-cta"},[n._t("default")],2)])}),[],!1,null,"19e4ba9c",null);e.default=component.exports;installComponents(component,{Button:t(427).default})},428:function(n,e,t){var content=t(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(42).default)("7cffbe41",content,!0,{sourceMap:!1})},432:function(n,e,t){"use strict";t(428)},433:function(n,e,t){var o=t(41)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\n.button[data-v-19e4ba9c]{\n  width:auto;\n  min-height:42px;\n  border:7px;\n  padding:.5rem 1rem;\n  border-radius:7px;\n  text-align:center\n}\n.button-cta[data-v-19e4ba9c]{\n  position:relative;\n  text-align:center;\n  font-weight:700;\n  height:3rem;\n  border-radius:2.8rem;\n  padding:0 2rem;\n  font-size:1rem;\n  transition:background 1.6s cubic-bezier(.16,1.08,.38,.98);\n  display:inline-flex;\n  justify-content:center;\n  align-items:center;\n  flex-shrink:0;\n  background:url(https://contra.com/images/home/play-background.jpg) no-repeat #bd3f3f 50%;\n  background-size:100% 100%;\n  -webkit-mask-size:95% 95%\n}\n.action[data-v-19e4ba9c]{\n  width:200px;\n  transition:transform 1.3s cubic-bezier(.16,1.08,.38,.98);\n  will-change:transform\n}\n.action[data-v-19e4ba9c]:hover{\n  transform:scale(1.05) translateZ(0);\n  transition-duration:.3s\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},437:function(n,e,t){var content=t(453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(42).default)("d06b6a14",content,!0,{sourceMap:!1})},438:function(n,e,t){var content=t(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(42).default)("52cd8057",content,!0,{sourceMap:!1})},450:function(n,e,t){var content=t(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(42).default)("e13bf5c2",content,!0,{sourceMap:!1})},451:function(n,e,t){var content=t(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(42).default)("fde7d53e",content,!0,{sourceMap:!1})},452:function(n,e,t){"use strict";t(437)},453:function(n,e,t){var o=t(41)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\n.class__icon[data-v-448dac9d]{\n  font-size:2rem\n}\n.class__icon[sm][data-v-448dac9d]{\n  font-size:1rem\n}\n.class__icon[md][data-v-448dac9d]{\n  font-size:3rem\n}\n.class__icon[lg][data-v-448dac9d]{\n  font-size:4rem\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},454:function(n,e,t){"use strict";t(438)},455:function(n,e,t){var o=t(41),r=t(266),c=t(456),l=t(457),d=o((function(i){return i[1]})),f=r(c),v=r(l);d.push([n.i,'/*purgecss start ignore*/\n.size-toggler[data-v-a4251e5c]{\n  width:42px;\n  height:auto;\n  cursor:pointer;\n  position:relative;\n  background-color:#3d44cc;\n  border-color:#deceff;\n  aspect-ratio:2/1\n}\n.outside[data-v-a4251e5c]{\n  background-color:#deceff;\n  position:absolute;\n  width:1.5rem;\n  height:auto;\n  border-radius:100%;\n  aspect-ratio:1\n}\n.toggle-checkbox33:checked+.outside[data-v-a4251e5c],.toggle-checkbox33:checked+.size-toggler[data-v-a4251e5c]{\n  background-color:#383838;\n  transform:translateX(1.5rem);\n  left:-21px\n}\n.icons[data-v-a4251e5c]{\n  fill:#3d44cc;\n  width:80%;\n  height:-webkit-fit-content;\n  height:-moz-fit-content;\n  height:fit-content;\n  aspect-ratio:1\n}\n.toggle-label[data-v-a4251e5c]{\n  position:relative;\n  cursor:pointer;\n  padding:1rem 1.7rem\n}\n.toggle-label[data-v-a4251e5c]:before{\n  position:absolute;\n  top:10%;\n  left:2px;\n  display:block;\n  content:"";\n  width:1.55rem;\n  height:1.55rem;\n  border-radius:9999%;\n  background-color:#909090;\n  border:2px solid #909090;\n  background-position:50%;\n  background-repeat:no-repeat;\n  --background-image:url('+f+");\n  background-size:20px;\n  transition:transform .15s cubic-bezier(0,0,.2,1);\n  transform:translateX(0);\n  box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)\n}\n.toggle-checkbox:checked+.toggle-label[data-v-a4251e5c]:before{\n  transform:translateX(1.5rem);\n  left:1px;\n  background-color:#deceff;\n  border:2px solid #deceff;\n  --background-image:url("+v+");\n  box-shadow:0 1px 10px 1px #131313\n}\n.toggle.slim .toggle-label[data-v-a4251e5c]:before{\n  top:-.15rem;\n  left:0\n}\n.toggle.slim .toggle-checkbox:checked+.toggle-label[data-v-a4251e5c]:before{\n  transform:translateX(1.75rem)\n}\n.toggle.colour .toggle-label[data-v-a4251e5c]{\n  background-color:#383838;\n  border:2px solid #383838\n}\n.toggle.colour .toggle-checkbox:checked+.toggle-label[data-v-a4251e5c]{\n  background-color:#3d44cc;\n  border:2px solid #deceff\n}\n\n/*purgecss end ignore*/",""]),d.locals={},n.exports=d},456:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDVhNSA1IDAgMTExMCAwQTUgNSAwIDAxMCA1em0zLjUtLjVhLjc1Ljc1IDAgMTAwLTEuNS43NS43NSAwIDAwMCAxLjV6bTMgMGEuNzUuNzUgMCAxMDAtMS41Ljc1Ljc1IDAgMDAwIDEuNXptLjQ4MyAyLjkzM0EuNS41IDAgMDE2LjMgNy4yNUM2LjA0IDYuOCA1LjU1NCA2LjUgNSA2LjVhMS41IDEuNSAwIDAwLTEuMy43NS41LjUgMCAwMS0uODY1LS41IDIuNDk5IDIuNDk5IDAgMDE0LjMzIDAgLjUuNSAwIDAxLS4xODIuNjgzeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo="},457:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDVhNSA1IDAgMTExMCAwQTUgNSAwIDAxMCA1em0yLjU1My0xLjk3NGEuNS41IDAgMDAuMjI0LjY3MWwuMTA0LjA1My0uMTA0LjA1M2EuNS41IDAgMTAuNDQ2Ljg5NGwxLS41YS41LjUgMCAwMDAtLjg5NGwtMS0uNWEuNS41IDAgMDAtLjY3LjIyNHptNC42Ny42NzFhLjUuNSAwIDEwLS40NDYtLjg5NGwtMSAuNWEuNS41IDAgMDAwIC44OTRsMSAuNWEuNS41IDAgMTAuNDQ2LS44OTRsLS4xMDUtLjA1My4xMDUtLjA1M3pNMy4yNjggNS41YS41LjUgMCAwMC0uNDMzLjc1IDIuNDk5IDIuNDk5IDAgMDA0LjMzIDAgLjUuNSAwIDAwLS40MzMtLjc1SDMuMjY4eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo="},472:function(n,e,t){"use strict";t.r(e);var o={name:"Icon"},r=(t(452),t(51)),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement;return(n._self._c||e)("div",{staticClass:"class__icon"},[n._t("default")],2)}),[],!1,null,"448dac9d",null);e.default=component.exports},473:function(n,e,t){"use strict";t.r(e);var o={data:function(){return{valueToggle:!1}}},r=(t(454),t(51)),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",[t("div",{staticClass:"toggle colour"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.valueToggle,expression:"valueToggle"}],staticClass:"toggle-checkbox hidden",attrs:{id:"check3",type:"checkbox"},domProps:{checked:Array.isArray(n.valueToggle)?n._i(n.valueToggle,null)>-1:n.valueToggle},on:{change:function(e){var t=n.valueToggle,o=e.target,r=!!o.checked;if(Array.isArray(t)){var c=n._i(t,null);o.checked?c<0&&(n.valueToggle=t.concat([null])):c>-1&&(n.valueToggle=t.slice(0,c).concat(t.slice(c+1)))}else n.valueToggle=r}}}),n._v(" "),t("label",{staticClass:"toggle-label block w-12 h-6 rounded-full transition-color duration-150 ease-out",attrs:{for:"check3"}})])])])}),[],!1,null,"a4251e5c",null);e.default=component.exports},484:function(n,e,t){"use strict";t(450)},485:function(n,e,t){var o=t(41)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\n.Card__conteiner[data-v-9483911a]{\n  background-color:#242424;\n  border-color:#424242;\n  border-width:2px;\n  border-radius:20px;\n  color:#f1f1f1\n}\n.titulo[data-v-9483911a]{\n  width:100%;\n  text-align:center;\n  margin-bottom:1rem\n}\n[flex][data-v-9483911a]{\n  display:flex;\n  justify-content:space-between;\n  align-items:center\n}\n[gap-100][data-v-9483911a]{\n  gap:2rem\n}\n[padding][data-v-9483911a]{\n  padding:1rem 2rem\n}\n[padding-sm][data-v-9483911a]{\n  padding:.5rem 2rem\n}\n[nowrap][data-v-9483911a]{\n  white-space:nowrap\n}\n[c100][data-v-9483911a]{\n  color:#111213\n}\n[c200][data-v-9483911a]{\n  color:#303436\n}\n[c300][data-v-9483911a]{\n  color:#484e51\n}\n[c400][data-v-9483911a]{\n  color:#60686c\n}\n[c500][data-v-9483911a]{\n  color:#788287\n}\n[c600][data-v-9483911a]{\n  color:#939b9f\n}\n[c700][data-v-9483911a]{\n  color:#aeb4b7\n}\n[c800][data-v-9483911a]{\n  color:#c9cdcf\n}\n[c900][data-v-9483911a]{\n  color:#f5f8f9\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},486:function(n,e,t){"use strict";t(451)},487:function(n,e,t){var o=t(41)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\n.conteiner[data-v-0a39d296]{\n  background-color:#321616;\n  border-radius:20px;\n  color:#ef3434;\n  padding:1rem 1.5rem;\n  min-height:42px\n}\n.content[data-v-0a39d296]{\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  gap:1rem\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},508:function(n,e,t){"use strict";t.r(e);t(484);var o=t(51),component=Object(o.a)({},(function(){var n=this,e=n.$createElement;return(n._self._c||e)("div",{staticClass:"Card__conteiner"},[n._t("default")],2)}),[],!1,null,"9483911a",null);e.default=component.exports},519:function(n,e,t){var content=t(597);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(42).default)("45bb5d1e",content,!0,{sourceMap:!1})},534:function(n,e,t){"use strict";t.r(e);var o={name:"Warning"},r=(t(486),t(51)),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"conteiner"},[t("div",{staticClass:"content"},[t("Icon",[n._v("⚠")]),n._v(" "),n._t("default")],2)])}),[],!1,null,"0a39d296",null);e.default=component.exports;installComponents(component,{Icon:t(472).default})},596:function(n,e,t){"use strict";t(519)},597:function(n,e,t){var o=t(41)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\n.grade[data-v-21973841]{\n  grid-template-columns:1fr 1fr;\n  margin:1rem\n}\n.gap[data-v-21973841]{\n  display:grid;\n  gap:1rem\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},642:function(n,e,t){"use strict";t.r(e);var o={components:{Card:t(508).default}},r=(t(596),t(51)),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"grade gap"},[t("Card",{attrs:{padding:""}},[t("h3",{attrs:{slot:"titulo"},slot:"titulo"},[n._v("Create a new wallet")])]),n._v(" "),t("Card",{staticClass:"gap",attrs:{padding:""}},[t("h3",{attrs:{slot:"titulo"},slot:"titulo"},[n._v("Create a new wallet")]),n._v(" "),t("Warning",[n._v("\n      Keep your recorery phase in a safe place and dont share it with anyone!\n    ")]),n._v(" "),t("Button",[n._v("Continuar")]),n._v(" "),t("div",{attrs:{bordert:""}}),n._v(" "),t("Card",{attrs:{flex:"",padding:"","gap-100":""}},[t("div",{attrs:{flex:"","gap-100":""}},[t("Icon",[n._v("⚠")]),n._v(" "),t("div",{attrs:{nowrap:""}},[t("p",[n._v("Public Access")]),n._v(" "),t("p",{attrs:{c600:""}},[n._v("Public and share link with anyone")])])],1),n._v(" "),t("Toggler2021")],1)],1)],1)}),[],!1,null,"21973841",null);e.default=component.exports;installComponents(component,{Card:t(508).default,Warning:t(534).default,Button:t(427).default,Icon:t(472).default,Toggler2021:t(473).default})}}]);