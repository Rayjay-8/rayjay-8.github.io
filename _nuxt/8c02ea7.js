(window.webpackJsonp=window.webpackJsonp||[]).push([[2,14],{441:function(n,e,t){var content=t(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(50).default)("375de52c",content,!0,{sourceMap:!1})},479:function(n,e,t){"use strict";t(441)},480:function(n,e,t){var o=t(49)((function(i){return i[1]}));o.push([n.i,'/*purgecss start ignore*/\n.empty[data-v-51dc9b8b]{\n  display:grid;\n  place-content:center;\n  height:100%\n}\nvideo[data-v-51dc9b8b]{\n  -o-object-fit:cover;\n     object-fit:cover;\n  width:100%;\n  height:calc(100vh - 190px);\n  position:fixed;\n  filter:grayscale(.8)\n}\n.chat_area[data-v-51dc9b8b]{\n  display:grid;\n  grid-template-rows:1fr auto;\n  gap:1rem;\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:auto;\n  padding:0 16px 16px\n}\n.img[data-v-51dc9b8b]{\n  background-image:url(https://cdn.dribbble.com/users/4532782/screenshots/16769145/media/b90dd88179099053bbd0454e374b4b11.gif);\n  filter:grayscale(.8);\n  background-size:cover;\n  background-repeat:no-repeat;\n  background-position:50%;\n  height:calc(100vh - 190px)\n}\n.chat-conversas[data-v-51dc9b8b]{\n  overflow:auto;\n  scroll-behavior:auto;\n  scroll-behavior:smooth\n}\n.chat__textarea[data-v-51dc9b8b]{\n  padding:.5rem;\n  background-color:#445;\n  color:#fff;\n  border-radius:5px;\n  display:grid;\n  gap:1rem;\n  flex-direction:column;\n  grid-template-columns:1fr auto;\n  grid-template-rows:20px\n}\n.chat__textarea textarea[data-v-51dc9b8b]{\n  color:#fff;\n  resize:none;\n  background-color:transparent;\n  border:0;\n  padding:0 9px\n}\n.user-name[data-v-51dc9b8b]{\n  padding-top:.2rem;\n  font-size:.8rem;\n  color:#8a8a8a;\n  width:15ch;\n  overflow-x:hidden;\n  overflow-y:hidden;\n  white-space:nowrap;\n  text-overflow:ellipsis\n}\n.user-name[data-v-51dc9b8b]:before{\n  content:"@"\n}\n.minhamsg>.user-name[data-v-51dc9b8b]{\n  display:none\n}\n.minhamsg[data-v-51dc9b8b]{\n  display:grid;\n  margin-right:10px;\n  justify-content:end;\n  margin-left:50%\n}\n.msgdeoutro[data-v-51dc9b8b]{\n  display:grid;\n  justify-content:left\n}\n.msgdeoutro>.msg-conteiner[data-v-51dc9b8b]{\n  background-color:#445;\n  border-radius:var(--border-radius-large)\n}\n.msg-conteiner[data-v-51dc9b8b]{\n  color:var(--primary-text);\n  background-color:#66c;\n  border-radius:var(--border-radius-large) var(--border-radius-large) 0 var(--border-radius-large);\n  color:#fff;\n  word-break:break-word\n}\n.asd[data-v-51dc9b8b]{\n  display:grid;\n  grid-auto-flow:column;\n  align-items:end;\n  -webkit-margin-start:1rem;\n          margin-inline-start:1rem;\n  width:50%;\n  gap:1.5rem;\n  grid-auto-columns:auto 1fr\n}\n.asd[data-v-51dc9b8b],.asdmeu[data-v-51dc9b8b]{\n  margin-top:.5rem\n}\n.card__image[data-v-51dc9b8b]{\n  position:relative;\n  display:flex;\n  margin-right:0\n}\n.card__image[data-v-51dc9b8b]:after{\n  content:"";\n  background-color:#5ad539;\n  flex-flow:wrap-reverse;\n  margin-inline:-7px\n}\n.badge[data-v-51dc9b8b],.card__image[data-v-51dc9b8b]:after{\n  height:10px;\n  width:10px;\n  border-radius:50%\n}\n.badge[data-v-51dc9b8b]{\n  position:absolute;\n  right:7px;\n  bottom:3px;\n  background:#5ad539\n}\n\n/*purgecss end ignore*/',""]),o.locals={},n.exports=o},513:function(n,e,t){var content=t(582);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(50).default)("a03b1e60",content,!0,{sourceMap:!1})},514:function(n,e,t){var content=t(584);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(50).default)("5538bdb8",content,!0,{sourceMap:!1})},531:function(n,e,t){"use strict";t.r(e);t(102);var o={data:function(){return{minhamsg:""}},props:["Listamensagens","meuid","imgurl"],methods:{scrollToElement:function(){console.log("scroll with timeout")},focusOnEditButton:function(){this.$refs.textareamsg.focus(),console.log("DANDO FOCO NO TEXTAREA ")},sendMsg:function(){var n=this;if(document.getElementById("textwritter").click(),""!=this.minhamsg)return this.$emit("input",this.minhamsg),this.minhamsg="",setTimeout((function(){n.focusOnEditButton()}),500),"ok";console.log("auiii"),setTimeout((function(){n.focusOnEditButton()}),1e3)}}},r=(t(479),t(73)),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"chat_area"},[t("div",{ref:"msgscroll",staticClass:"chat-conversas chat_msg_area",style:0==n.Listamensagens.length?"overflow: hidden;":""},[0==n.Listamensagens.length?t("div",{staticClass:"empty"},[n._v("\n      Ainda não há mensgens 😅\n    ")]):n._e(),n._v(" "),n._l(n.Listamensagens,(function(e,o){return[t("div",{class:n.meuid==e.name?"asdmeu":"asd"},[t("div",{directives:[{name:"show",rawName:"v-show",value:n.meuid!=e.name,expression:"meuid != msg.name"}],staticClass:"card__image"},[t("svg",{staticStyle:{"border-radius":"100%",height:"30px",width:"30px"},attrs:{role:"none"}},[t("mask",{attrs:{id:"circle"}},[t("circle",{attrs:{cx:"28",cy:"18",fill:"white",r:"28"}}),n._v(" "),t("circle",{attrs:{cx:"48",cy:"28",fill:"black",r:"7"}})]),n._v(" "),t("g",{attrs:{mask:"url(#circle)"}},[t("image",{attrs:{x:"0",y:"0",height:"100%",preserveAspectRatio:"xMidYMid slice",width:"100%",href:e.imgprofile?e.imgprofile:"https://randomuser.me/api/portraits/women/"+o+".jpg"}})])])]),n._v(" "),t("div",{class:n.meuid==e.name?"minhamsg":"msgdeoutro"},[t("div",{staticClass:"msg-conteiner p-3"},[n._v("\n            "+n._s(e.content)+"\n          ")]),n._v(" "),t("p",{staticClass:"user-name"},[n._v(n._s(e.name))])])])]})),n._v(" "),t("div",{attrs:{id:"deep"}})],2),n._v(" "),t("div",{staticClass:"chat__textarea"},[t("div",{staticStyle:{flex:"1 1 auto","min-height":"0","min-width":"0"}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:n.minhamsg,expression:"minhamsg"}],ref:"textareamsg",staticClass:"outline-none appearance-none",staticStyle:{height:"20px !important"},attrs:{placeholder:"Mensagem...",id:"textwritter2",autofocus:""},domProps:{value:n.minhamsg},on:{keyup:function(e){return!e.type.indexOf("key")&&n._k(e.keyCode,"enter",13,e.key,"Enter")?null:n.sendMsg.apply(null,arguments)},input:function(e){e.target.composing||(n.minhamsg=e.target.value)}}})]),n._v(" "),t("a",{staticStyle:{display:"none"},attrs:{id:"textwritter",href:"#deep"}}),n._v(" "),n.minhamsg.length>0?t("div",[t("div",{staticClass:"flex",staticStyle:{cursor:"pointer"},on:{click:function(e){return n.sendMsg()}}},[t("div",{staticStyle:{"margin-right":"8px",color:"#a4a4e9"}},[n._v("Enviar")]),n._v(" "),t("svg",{staticStyle:{"margin-top":"-6px"},attrs:{width:"30",height:"30",viewBox:"0 0 68 68",fill:"#CCCCCC",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{attrs:{"clip-path":"url(#clip0_26_10)"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M48.0833 19.799C48.619 20.3347 48.806 21.127 48.5665 21.8457L35.8385 60.0294C35.5946 60.7614 34.9513 61.2877 34.1855 61.382C33.4198 61.4763 32.6681 61.1217 32.2539 60.4707L22.593 45.2893L7.41158 35.6285C6.76065 35.2142 6.40604 34.4625 6.50031 33.6968C6.59458 32.931 7.12092 32.2878 7.85287 32.0438L46.0366 19.3159C46.7553 19.0763 47.5476 19.2633 48.0833 19.799ZM26.5903 44.1204L33.3726 54.7782L42.0926 28.6181L26.5903 44.1204ZM39.2642 25.7897L23.7619 41.292L13.1041 34.5097L39.2642 25.7897Z",fill:""}})]),n._v(" "),t("defs",[t("clipPath",{attrs:{id:"clip0_26_10"}},[t("rect",{attrs:{width:"48",height:"48",fill:"white",transform:"translate(33.9412) rotate(45)"}})])])])])]):n._e()])])}),[],!1,null,"51dc9b8b",null);e.default=component.exports},578:function(n,e,t){t(579)},579:function(n,e,t){"use strict";var o=t(0),r=t(42),l=t(12),c=t(137),d=t(27),m=t(66),h=t(138),f=t(282),v=t(11),x=t(5),w=v("replace"),y=RegExp.prototype,_=Math.max,k=function(n,e,t){return t>n.length?-1:""===e?t:n.indexOf(e,t)};o({target:"String",proto:!0},{replaceAll:function(n,e){var t,o,v,C,O,E,H,I,S=r(this),L=0,M=0,N="";if(null!=n){if((t=c(n))&&!~d(r("flags"in y?n.flags:h.call(n))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(o=m(n,w))return o.call(n,S,e);if(x&&t)return d(S).replace(n,e)}for(v=d(S),C=d(n),(O=l(e))||(e=d(e)),E=C.length,H=_(1,E),L=k(v,C,0);-1!==L;)I=O?d(e(C,L,v)):f(C,v,L,[],void 0,e),N+=v.slice(M,L)+I,M=L+E,L=k(v,C,L+H);return M<v.length&&(N+=v.slice(M)),N}})},580:function(n){n.exports=JSON.parse('[{"id":0,"imgprofile":"https://res.cloudinary.com/practicaldev/image/fetch/s--n7ApUOku--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/592165/46614067-4880-40e4-bebd-74c6d7119182.png","name":"Ray_Teste","content":"Hello  !! H ello!!Hello!!H  ello!!H lo!!Hell  o Hell o!!Hello!!Hel  lo!!Hello!!Hello  !! H ello!!Hello!!H  ello!!H lo!!Hell  o Hell o!!Hello!!Hel  lo!!Hello!!Hello  !! H ello!!Hello!!H  ello!!H lo!!Hell  o Hell o!!Hello!!Hel  lo!!Hello!!"}]')},581:function(n,e,t){"use strict";t(513)},582:function(n,e,t){var o=t(49)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\nhtml[data-v-260c3316]{\n  font-size:16px;\n  overflow:hidden\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},583:function(n,e,t){"use strict";t(514)},584:function(n,e,t){var o=t(49)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\n:root{\n  --primary-text:#fff;\n  --secondary-text:#65676b;\n  --bg-color:#fff;\n  --primary-color:#19172b;\n  --primary-color-hover:#2d2d5c;\n  --msg-color-conteiner:#222;\n  --border-width-default:1px;\n  --border-width-input:2px;\n  --border-width-input-overlay-unfocused:1px;\n  --border-width-marked:3px;\n  --border-width-spinner:2px;\n  --border-width-tag:2px;\n  --border-radius-none:0;\n  --border-radius-small:0.2rem;\n  --border-radius-medium:0.4rem;\n  --border-radius-large:0.6rem;\n  --border-radius-extra-large:1rem;\n  --border-radius-extra-extra-large:1.6rem;\n  --border-radius-rounded:9000px\n}\nhtml[darkmode]{\n  --primary-color:#2f2c50;\n  --primary-text:#fff;\n  --primary-color-hover:#7878db;\n  --msg-color-conteiner:#9b87d1\n}\n*{\n  font-family:eastman,system-ui\n}\nbody{\n  background-color:#19172b;\n  background-color:var(--primary-color);\n  color:#fff;\n  color:var(--primary-text)\n}\nh3,p{\n  margin:0\n}\n.testdarkmode{\n  width:400px;\n  background-color:#19172b;\n  background-color:var(--primary-color);\n  aspect-ratio:4/3\n}\n.input,textarea{\n  overflow:hidden;\n  width:100%;\n  border-radius:.5rem;\n  border-width:1px;\n  border-color:#a6abc9;\n  background-color:#fff;\n  font-size:1rem;\n  line-height:1.5rem;\n  color:#131520\n}\n.input.input-lg{\n  height:3rem;\n  padding:.75rem .875rem .75rem 1rem\n}\n.input.erro,.input.erro:focus{\n  border-color:#f8b4b4\n}\n.btn-primary{\n  border-color:#6b46c1;\n  --tw-bg-opacity:1;\n  background-color:#6b46c1;\n  --tw-text-opacity:1;\n  color:#fff;\n  --tw-shadow:0px 1px 2px rgba(16,24,40,0.05);\n  box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);\n  box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);\n  box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)\n}\n.btn-primary:focus,.btn-primary:hover{\n  border-color:#553c9a;\n  background-color:#2d2d5c;\n  background-color:var(--primary-color-hover);\n  color:#fff\n}\n.btn{\n  display:flex;\n  width:auto;\n  flex-direction:row;\n  align-items:center;\n  justify-content:center;\n  white-space:nowrap;\n  border-radius:.5rem;\n  padding-left:1rem;\n  padding-right:1rem;\n  text-align:center;\n  font-size:.875rem;\n  line-height:1.25rem;\n  font-weight:500;\n  text-decoration:none;\n  outline:2px solid transparent;\n  outline-offset:2px;\n  transition-duration:.3s;\n  transition-timing-function:cubic-bezier(.4,0,.2,1);\n  height:40px;\n  line-height:100%;\n  transition-property:all\n}\n.btn-xl{\n  padding-left:1.25rem;\n  padding-right:1.25rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  height:48px\n}\n.flexdirec{\n  display:flex;\n  flex-direction:column\n}\n.apps{\n  display:grid;\n  gap:1.5rem;\n  flex-direction:row;\n  grid-template-columns:320px 1fr;\n  transition:all 1.4s\n}\n.apps .chat_msg_area:empty{\n  background-size:cover;\n  background-repeat:no-repeat;\n  background-position:50%;\n  filter:grayscale(.8)\n}\n.apps .chatuser{\n  margin-top:1rem\n}\n@media(max-width:767px){\n.apps{\n    margin:0;\n    padding:0\n}\n.apps,.apps .apps{\n    display:block\n}\n.apps .informacoesadd{\n    display:none!important\n}\n.apps .usuarioscards{\n    height:87px;\n    display:flex;\n    overflow-x:auto;\n    width:100%;\n    -webkit-overflow-scrolling:touch\n}\n}\n@media(max-width:992px){\n.apps{\n    grid-template-columns:200px 1fr\n}\n}\n.apps .usuarioscards{\n  height:87vh;\n  overflow-y:auto;\n  -webkit-overflow-scrolling:touch\n}\n@media(max-width:767px){\n.apps .usuarioscards{\n    height:90px;\n    overflow-y:hidden\n}\n}\n@media(max-width:992px){\n.apps .card{\n    background-color:transparent;\n    box-shadow:0 0 0 0;\n    width:-webkit-min-content;\n    width:-moz-min-content;\n    width:min-content\n}\n.apps .card__content{\n    display:none!important\n}\n.apps .chatuser{\n    margin:.2rem\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},625:function(n,e,t){"use strict";t.r(e);t(20),t(102),t(578),t(62),t(75);var o=t(580),r={data:function(){return{mensagens:o,usuariosOnline:[],statusconecao:"OFFLINE",idws:"00",connection:null,token:"token-unico-123123",Usuarioslogados:0,clientname:"Nome padrao",userandimg:""}},computed:{Filtroporadmin:function(){return o.filter((function(n){return n.admin}))}},mounted:function(){this.$nextTick((function(){console.log("Montado")}))},created:function(){!1===this.$store.state.websocketconnect?(console.log("Iniciando nova conecção com o websocket"),this.connection=new WebSocket(this.$store.state.urlwebsocket),this.$store.commit("WEBSOCKETCONNECTED",!0),this.$store.commit("SETCONNECTION",this.connection),this.apps()):(console.log("JÁ TEMOS UMA CONEXAO ABERTA"),console.log(this.$store.state.websocket),this.connection=this.$store.state.websocket,this.apps())},methods:{apps:function(){console.log(this.$store.state.usuariosOnline);var n=this;console.log(this.statusconecao),this.connection.addEventListener("open",(function(e){console.log("sending token == "+n.token),n.connection.send(JSON.stringify({type:"autentificacao",token:n.token}))})),n.ouvir(),n.statusconecao="Online",this.connection.addEventListener("close",(function(e){console.log("Disconnected from the WS Server!"),n.statusconecao="OFFLINE",setTimeout((function(){console.log("try reconnect..."),n.apps()}),1e4)}))},ouvir:function(){console.log("OUVIR IIIII");var n=this.mensagens,e=this.usuariosOnline,t=this;this.connection.addEventListener("open",(function(n){console.log("Conectado OK"),t.statusconecao="Online"})),this.connection.addEventListener("message",(function(o){var r=o.data.replaceAll("'",'"');if(r=JSON.parse(r),console.log("typo = "+r.type),"users"==r.type){t.Usuarioslogados=r.count,console.log("O server disse que tem "+r.count+" Cliente conectados"),console.log(r.uuids),console.log("LIMPERIIIIIIIIIIIIIIII"),console.log(e);for(var l=0;l<r.uuids.length;l++){var element=r.uuids[l];console.log(element),element===t.idws||e.includes(element)||(console.log("Vou add esse => "+element),e.push(element))}}else"user_saiu"==r.type?(console.log(r),t.Usuarioslogados=r.count,console.log("nao fassa esse pop"),t.usuariosOnline.pop(r.id)):"my_id"==r.type?(t.idws=r.id,e.push(r.id)):"msg-post"==r.type?(console.log("recebeu uma msg"),n.push({id:n.length,name:r.cliente,content:r.mssg}),document.getElementById("textwritter").click()):console.log("typo ainda nao configurado")}))},sendmsg:function(n){var e={type:"msg-post",cliente:this.idws,mssg:n};this.connection.send(JSON.stringify(e)),this.mensagens.push({id:this.mensagens.length,name:e.cliente,content:e.mssg})}}},l=(t(581),t(583),t(73)),component=Object(l.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"apps",staticStyle:{height:"100vh"}},[t("div",{staticClass:"flexdirec",staticStyle:{"border-right":"0.5px solid #5e5a6a8c"}},[t("div",{staticClass:"informacoesadd m-10"},[t("h1",{staticStyle:{"font-size":"2rem"}},[n._v("Chat Room")]),n._v(" "),t("p",{staticStyle:{color:"#bbb"}},[n._v("Status coneccao: "+n._s(n.statusconecao))])])]),n._v(" "),t("ChatConversar",{ref:"myChild",staticClass:"w-full",attrs:{Listamensagens:n.mensagens,meuid:n.idws,imgurl:n.Usuarioslogados},on:{input:function(e){n.sendmsg(e)}}})],1)}),[],!1,null,"260c3316",null);e.default=component.exports;installComponents(component,{ChatConversar:t(531).default})}}]);