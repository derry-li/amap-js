(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{298:function(t,e,i){},328:function(t,e,i){"use strict";var s=i(298);i.n(s).a},331:function(t,e,i){"use strict";i.r(e);var s={name:"demo-block",data:function(){return{isExpanded:!1,metaHeight:0}},watch:{isExpanded:function(){this.metaHeight=this.codeAreaHeight()}},methods:{codeAreaHeight:function(){return this.$el.getElementsByClassName("description").length>0?this.$el.getElementsByClassName("description")[0].clientHeight+this.$el.getElementsByClassName("highlight")[0].clientHeight+30:this.$el.getElementsByClassName("highlight")[0].clientHeight+20}}},n=(i(328),i(38)),a=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"demo-block"},[i("div",{staticClass:"source"},[t._t("source")],2),t._v(" "),i("div",{ref:"meta",staticClass:"meta",style:t.isExpanded&&{height:t.metaHeight+"px"}},[i("div",{staticClass:"description"},[t._t("default")],2),t._v(" "),i("div",{staticClass:"highlight"},[t._t("highlight")],2)]),t._v(" "),i("div",{staticClass:"demo-block-control",on:{click:function(e){t.isExpanded=!t.isExpanded}}},[i("span",[t._v(t._s(t.isExpanded?"隐藏代码":"显示代码"))])])])}),[],!1,null,null,null);e.default=a.exports}}]);