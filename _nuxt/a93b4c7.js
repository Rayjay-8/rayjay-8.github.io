(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{258:function(t,e,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(95).default)("9ef1822c",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n(258)},281:function(t,e,n){var r=n(94)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.chat-conversas[data-v-7b682203]{\n  height:600px;\n  border:1px solid hsla(0,0%,51.4%,.32941176470588235);\n  overflow:auto\n}\n.chat__textarea[data-v-7b682203]{\n  position:absolute;\n  bottom:2px;\n  width:50%\n}\n@media(max-width:992px){\n.chat__textarea[data-v-7b682203]{\n    width:60%\n}\n}\n@media(max-width:767px){\n.chat__textarea[data-v-7b682203]{\n    width:80%\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},309:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{minhamsg:"My msg..."}},props:["Listamensagens"],methods:{sendMsg:function(){this.$emit("input",this.minhamsg)},resize:function(){console.log(this.$refs.textarea.style.height),this.$refs.textarea.style.height="30px",this.$refs.textarea.style.height=this.$refs.textarea.scrollHeight+"px"}}},o=(n(280),n(44)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat_area"},[n("div",{staticClass:"chat-conversas chat_msg_area"},[t._l(t.Listamensagens,(function(e,r){return[n("div",{staticClass:"msg-conteiner m-6 p-2"},[n("h3",{staticClass:"user-name w-full"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"user-msg"},[t._v(t._s(e.content))])])]}))],2),t._v(" "),n("div",{staticClass:"chat__textarea flex m-6"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.minhamsg,expression:"minhamsg"}],ref:"textarea",staticClass:"outline-none appearance-none w-full mr-3 py-1 px-2 mb-4",attrs:{placeholder:"Aa"},domProps:{value:t.minhamsg},on:{input:function(e){e.target.composing||(t.minhamsg=e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn flex flex-row w-auto justify-center items-center btn-primary btn-xl",attrs:{tabindex:"1"},on:{click:function(e){return t.sendMsg()}}},[t._v("\n      Send Msg\n    ")])])])}),[],!1,null,"7b682203",null);e.default=component.exports}}]);