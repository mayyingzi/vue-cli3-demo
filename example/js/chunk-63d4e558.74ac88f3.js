(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-63d4e558"],{"0cd0":function(t,n,e){},"1c68":function(t,n,e){"use strict";var c=e("0cd0");e.n(c).a},a88a:function(t,n,e){"use strict";e.r(n);var c=e("88d8"),i=(e("7f7f"),e("66b9"),e("b650")),a=(e("cadf"),e("551c"),e("097d"),{name:"ChildTotop",data:function(){return{counter:0}},components:Object(c.a)({},i.a.name,i.a),methods:{increase:function(){this.counter++,this.$emit("increase",this.counter)},reduce:function(){this.counter--,this.$emit("reduce",this.counter)}}}),o=(e("1c68"),e("2877")),s=Object(o.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ChildTotop"},[e("p",{staticClass:"in-txt"},[t._v("自定义事件：把数据从子组件传回给父组件，子组件通过$emit()来触发事件，而父组件通过$on() 来监听事件，即观察者模式")]),e("van-button",{staticClass:"fir-btn",attrs:{type:"warning"},on:{click:t.increase}},[t._v("+1")]),e("van-button",{attrs:{type:"warning"},on:{click:t.reduce}},[t._v("-1")])],1)},[],!1,null,"c352ae5e",null);s.options.__file="childTotop.vue",n.default=s.exports}}]);