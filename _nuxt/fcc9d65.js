(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{301:function(t,n,e){var content=e(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(75).default)("fa4b713c",content,!0,{sourceMap:!1})},331:function(t,n,e){"use strict";e(301)},332:function(t,n,e){var o=e(74)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.contt{\n  position:relative;\n  perspective:500px;\n  width:-webkit-fit-content;\n  width:-moz-fit-content;\n  width:fit-content;\n  transition:transform .15s\n}\n.contt,.showcase>div{\n  will-change:transform\n}\n.showcase>div{\n  transition:transform .25s;\n  position:absolute;\n  width:100%;\n  height:70px;\n  background:hsl(194deg 63% 34%/var(--opacity));\n  border-radius:12px;\n  transform-origin:center center\n}\n.showcase button{\n  will-change:transform;\n  will-change:scale;\n  transition-delay:.3s\n}\n.showcase button:hover{\n  transform:scale(1.05);\n  transition:transform .35s cubic-bezier(.3,.7,.4,1.5)\n}\n.showcase button:active{\n  transform:scale(.95);\n  transition:transform 34ms\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},340:function(t,n,e){"use strict";e.r(n);e(348);var o=e(349),r=e.n(o),l=(e(350),{components:{VueSlider:r.a},data:function(){return{value:30}},computed:{alls:function(){var data="";return data+="transform: rotateY(-"+(.45*this.value).toFixed(2)+"deg)"},getStyle:function(){var data="",t=(-.2*this.value).toFixed(2)+"px,  0px, "+(.2*this.value).toFixed(2)+"px";return data+="--opacity:"+(1-this.value/100).toFixed(2)+"; ",data+="transform: translate3d("+t+")",console.log(data),data}}}),c=(e(331),e(47)),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"contt",style:t.alls},[e("div",{staticClass:"showcase p-2 m-3",style:t.getStyle},[t._t("default")],2)]),t._v(" "),e("div",{staticClass:"controler bg-blue-500 p-2 m-3 w-1/2"},[e("h2",{staticClass:"m-1"},[t._v("Stilos applicados:")]),t._v(" "),e("p",[t._v(t._s(t.getStyle))]),t._v(" "),e("vue-slider",{model:{value:t.value,callback:function(n){t.value=n},expression:"value"}})],1)])}),[],!1,null,null,null);n.default=component.exports}}]);