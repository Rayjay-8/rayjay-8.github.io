(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{478:function(e,t,n){var content=n(543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(85).default)("b7497816",content,!0,{sourceMap:!1})},542:function(e,t,n){"use strict";n(478)},543:function(e,t,n){var o=n(84)((function(i){return i[1]}));o.push([e.i,"/*purgecss start ignore*/\n.done{\n  text-decoration:line-through\n}\n\n/*purgecss end ignore*/",""]),o.locals={},e.exports=o},572:function(e,t,n){"use strict";n.r(t);n(18),n(14),n(20),n(31),n(16),n(33);var o=n(7),r=n(97);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={computed:{todos:function(){return this.$store.state.todos.list}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({addTodo:function(e){this.$store.commit("todos/add",e.target.value),e.target.value=""}},Object(r.b)({toggle:"todos/toggle"}))},d=l,f=(n(542),n(71)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[e._l(e.todos,(function(t){return n("li",{key:t.text},[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.done},on:{change:function(n){return e.toggle(t)}}}),e._v(" "),n("span",{class:{done:t.done}},[e._v(e._s(t.text))])])})),e._v(" "),n("li",[n("input",{attrs:{placeholder:"What needs to be done?"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo.apply(null,arguments)}}})])],2)}),[],!1,null,null,null);t.default=component.exports}}]);