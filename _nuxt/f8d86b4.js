(window.webpackJsonp=window.webpackJsonp||[]).push([[23,24],{285:function(n,t,e){var content=e(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(75).default)("dee26f34",content,!0,{sourceMap:!1})},297:function(n,t,e){var content=e(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(75).default)("0f9785a1",content,!0,{sourceMap:!1})},298:function(n,t,e){"use strict";e(285)},299:function(n,t,e){var r=e(74)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n.conteiner[data-v-2bd0c64e]{\n  width:-webkit-fill-available;\n  color:#fff\n}\np[data-v-2bd0c64e]{\n  color:#fff\n}\n.tagscoteiner[data-v-2bd0c64e]{\n  display:flex;\n  flex-wrap:wrap;\n  overflow:hidden\n}\n.tags[data-v-2bd0c64e]{\n  background:#dfe9ff;\n  color:#343434;\n  margin:.1rem;\n  padding:.5rem;\n  height:-webkit-min-content;\n  height:-moz-min-content;\n  height:min-content;\n  border-radius:.5rem;\n  font-size:10px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},309:function(n,t,e){"use strict";e.r(t);e(29),e(15);var r=e(326),o=e.n(r),d={props:{ctt:{default:"Nada ainda..."},tipo:{default:"String"},porcent:{default:0}},computed:{convertertolist:function(){return Array.from(this.ctt)},markdownToHtml:function(){return o()(this.ctt)}}},c=(e(298),e(47)),component=Object(c.a)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"conteiner p-2"},[e("div",{staticClass:"flex items-center py-1 justify-center"},["String"==n.tipo?e("p",{domProps:{innerHTML:n._s(n.markdownToHtml)}}):n._e()])])}),[],!1,null,"2bd0c64e",null);t.default=component.exports},324:function(n,t,e){"use strict";e(297)},325:function(n,t,e){var r=e(74)((function(i){return i[1]}));r.push([n.i,'/*purgecss start ignore*/\n[data-v-07ffa16a]:root{\n  --primary-text:#fff;\n  --secondary-text:#65676b;\n  --bg-color:#fff;\n  --primary-color:#28272a;\n  --primary-color-hover:#2d2d5c;\n  --msg-color-conteiner:#222;\n  --border-width-default:1px;\n  --border-width-input:2px;\n  --border-width-input-overlay-unfocused:1px;\n  --border-width-marked:3px;\n  --border-width-spinner:2px;\n  --border-width-tag:2px;\n  --border-radius-none:0;\n  --border-radius-small:0.2rem;\n  --border-radius-medium:0.4rem;\n  --border-radius-large:0.6rem;\n  --border-radius-extra-large:1rem;\n  --border-radius-extra-extra-large:1.6rem;\n  --border-radius-rounded:9000px\n}\nhtml[darkmode][data-v-07ffa16a]{\n  --primary-color:#28262e;\n  --primary-text:#fff;\n  --primary-color-hover:#7878db;\n  --msg-color-conteiner:#9b87d1\n}\n*[data-v-07ffa16a]{\n  font-family:eastman\n}\nbody[data-v-07ffa16a]{\n  background-color:#28272a;\n  background-color:var(--primary-color);\n  color:#fff;\n  color:var(--primary-text)\n}\nh3[data-v-07ffa16a],p[data-v-07ffa16a]{\n  margin:0\n}\n.testdarkmode[data-v-07ffa16a]{\n  width:400px;\n  background-color:#28272a;\n  background-color:var(--primary-color);\n  aspect-ratio:4/3\n}\n.input[data-v-07ffa16a],textarea[data-v-07ffa16a]{\n  overflow:hidden;\n  width:100%;\n  border-radius:.5rem;\n  border-width:1px;\n  border-color:#a6abc9;\n  background-color:#fff;\n  font-size:1rem;\n  line-height:1.5rem;\n  color:#131520\n}\n.input.input-lg[data-v-07ffa16a]{\n  height:3rem;\n  padding:.75rem .875rem .75rem 1rem\n}\n.input.erro[data-v-07ffa16a],.input.erro[data-v-07ffa16a]:focus{\n  border-color:#f8b4b4\n}\n.btn-primary[data-v-07ffa16a]{\n  border-color:#6b46c1;\n  --tw-bg-opacity:1;\n  background-color:#6b46c1;\n  --tw-text-opacity:1;\n  color:#fff;\n  --tw-shadow:0px 1px 2px rgba(16,24,40,0.05);\n  box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);\n  box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);\n  box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)\n}\n.btn-primary[data-v-07ffa16a]:focus,.btn-primary[data-v-07ffa16a]:hover{\n  border-color:#553c9a;\n  background-color:#2d2d5c;\n  background-color:var(--primary-color-hover);\n  color:#fff\n}\n.btn[data-v-07ffa16a]{\n  display:flex;\n  width:auto;\n  flex-direction:row;\n  align-items:center;\n  justify-content:center;\n  white-space:nowrap;\n  border-radius:.5rem;\n  padding-left:1rem;\n  padding-right:1rem;\n  text-align:center;\n  font-size:.875rem;\n  line-height:1.25rem;\n  font-weight:500;\n  text-decoration:none;\n  outline:2px solid transparent;\n  outline-offset:2px;\n  transition-duration:.3s;\n  transition-timing-function:cubic-bezier(.4,0,.2,1);\n  height:40px;\n  line-height:100%;\n  transition-property:all\n}\n.btn-xl[data-v-07ffa16a]{\n  padding-left:1.25rem;\n  padding-right:1.25rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  height:48px\n}\n.label[data-v-07ffa16a],.optionstags[data-v-07ffa16a]{\n  width:100%\n}\n.label[data-v-07ffa16a]{\n  display:flex;\n  color:#000;\n  background-color:#1c1b23;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none;\n  overflow-x:auto;\n  margin:0 auto;\n  -webkit-overflow-scrolling:touch;\n  justify-content:center\n}\n@media(max-width:767px){\n.label[data-v-07ffa16a]{\n    justify-content:left\n}\n}\np[data-v-07ffa16a]{\n  margin:.5rem 1rem;\n  padding:8px;\n  border-radius:.3rem;\n  color:#9e9e9e;\n  cursor:pointer\n}\np[data-v-07ffa16a]:hover{\n  background-color:#444\n}\np[disabled][data-v-07ffa16a]{\n  background:#b8b8b8;\n  color:#555;\n  cursor:not-allowed\n}\n.pSelect[data-v-07ffa16a]{\n  color:#252435\n}\n.pSelect[data-v-07ffa16a],.pSelect[data-v-07ffa16a]:hover{\n  background-color:#fff\n}\n.e-mail[data-v-07ffa16a]:before{\n  content:attr(data-website) "@" attr(data-user);\n  unicode-bidi:bidi-override;\n  direction:rtl\n}\n\n/*purgecss end ignore*/',""]),r.locals={},n.exports=r},356:function(n,t,e){"use strict";e.r(t);var r={data:function(){return{opcselect:"Resumo",conteudo:"...",tipo:"String",items:[{message:"Resumo",conteudo:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitation veniamconsequat sunt nostrud amet.",tipo:"String"},{message:"Grupos",conteudo:"dfdfgdf",tipo:"String"},{message:"Habilidades",conteudo:["Marketing","Event Management","Maketing Communications","Digital Marketing","Graphic Design","Product Management","Social Media Marketing"],tipo:"Lista"},{message:"Paginas",conteudo:"## Hellow ###teste *legal* **lelele**",tipo:"String"},{message:"Mais",tipo:"String"}]}}},o=(e(324),e(47)),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"optionstags"},[e("div",{staticClass:"label"},n._l(n.items,(function(t){return e("div",{key:t.message},[e("p",{class:{pSelect:n.opcselect==t.message},on:{click:function(e){n.opcselect=t.message,n.conteudo=t.conteudo,n.tipo=t.tipo}}},[n._v("\n        "+n._s(t.message)+"\n      ")])])})),0),n._v(" "),e("div",{staticClass:"flex items-center py-1 mt-2 justify-center"},[e("SubMenuCDConteudo",{attrs:{ctt:n.conteudo,tipo:n.tipo}})],1),n._v(" "),e("div",{staticClass:"e-mail"},[n._v("ray silva de arruda")])])}),[],!1,null,"07ffa16a",null);t.default=component.exports;installComponents(component,{SubMenuCDConteudo:e(309).default})}}]);