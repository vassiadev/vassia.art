(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{809:function(e,t,l){"use strict";l.r(t);var n={props:["idKey","items","itemClass","itemClassActive","itemClassDefault","itemClassIcon","itemValueKey","itemLabelKey","itemIconKey","icons","active","itemStyle","collapsed"],methods:{go:function(e){this.$emit("go",{id:this.idKey,item:e})},getItemClass:function(e){var t=this.itemClass;return t=this.active===e[this.itemValueKey]?t+" "+this.itemClassActive:t+" "+this.itemClassDefault}}},o=l(203),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",[e._l(e.items,(function(l){return t("div",{directives:[{name:"show",rawName:"v-show",value:!e.collapsed,expression:"!collapsed"}],key:l[e.itemValueKey],class:e.getItemClass(l),style:e.itemStyle,on:{click:function(t){return e.go(l[e.itemValueKey])}}},[void 0!==e.itemIconKey?t("div",{class:e.itemClassIcon},["fa"===l[e.itemIconKey].type?t("fa",{attrs:{icon:[l[e.itemIconKey].prefix,l[e.itemIconKey].src]}}):e._e(),e._v(" "),"svg"===l[e.itemIconKey].type?t("img",{attrs:{src:"/icons/svg/"+l[e.itemIconKey].src+".svg",height:l[e.itemIconKey].height+"px"}}):e._e()],1):e._e(),e._v(" "),void 0!==e.itemLabelKey?t("div",[e._v("\n            "+e._s(l[e.itemLabelKey])+"\n        ")]):e._e()])})),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.collapsed,expression:"collapsed"}]})],2)}),[],!1,null,null,null);t.default=component.exports}}]);