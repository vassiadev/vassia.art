(window.webpackJsonp=window.webpackJsonp||[]).push([[24,25],{448:function(t,e,c){var content=c(725);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(209).default)("3c701d04",content,!0,{sourceMap:!1})},465:function(t,e,c){"use strict";c.r(e);var n={components:{Avatar:c(335).default},data:function(){return{projectsPopover:!1,projectsGroups:[{id:"ph",label:"Photography"},{id:"viz",label:"Vizualisation"}],contacts:[{id:"telegram",label:"Telegram",icon:{type:"fab",src:"telegram"}},{id:"whatsapp",label:"Telegram",icon:{type:"fab",src:"telegram"}},{id:"mail",label:"Telegram",icon:{type:"fab",src:"telegram"}}]}}},o=c(203),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex flex-column aic justify-content-between p-5"},[e("div"),t._v(" "),e("div",{staticClass:"d-flex flex-column aic jcc"},[e("Avatar",{staticClass:"rounded-circle ovfxy",attrs:{size:100}}),t._v(" "),e("span",{staticClass:"h5 font-weight-black mt-4 mb-4"},[t._v("Sergei Vasilev")])],1),t._v(" "),e("Button",{staticClass:"text-success px-4 py-2 rounded-xl cursor-pointer",attrs:{label:"New project",icon:["fas","rocket"],iconClass:"mr-2"},on:{click:function(e){return t.$emit("lead")}}})],1)}),[],!1,null,null,null);e.default=component.exports},724:function(t,e,c){"use strict";c(448)},725:function(t,e,c){var n=c(208)((function(i){return i[1]}));n.push([t.i,".closeBtn{cursor:pointer;height:50px;position:absolute;right:0;top:0;width:50px;z-index:9999}",""]),n.locals={},t.exports=n},820:function(t,e,c){"use strict";c.r(e);c(210),c(143),c(206);var n=c(332),o=c(333),r=c(334),l=c(465),d=c(449),f={props:["c"],components:{ProductSpinner:n.default,StoriesGallery:o.default,Promo:l.default,Picture:d.default,BeforeAfter:r.default},data:function(){return{images:[],visible:!1}},mounted:function(){},methods:{getModalStyle:function(t){return["ba"].includes(t)?"background: white;":"background: #41494b;"},zoomCard:function(t){this.$emit("zoom",t)},getImages:function(t){var e=[];if("st"===t.type)for(var i=1;i<Number(t.images)+1;i++)e.push({src:"cases/".concat(t.id,"/big/").concat(t.id,"_").concat(i,".jpg"),thumb:"cases/".concat(t.id,"/thumb/").concat(t.id,"_").concat(i,".jpg")});if("sp"===t.type)for(var c=1;c<21;c++)e.push("cases/".concat(t.id,"/big/").concat(t.id,"_").concat(c,".jpg"));return"ba"===t.type&&(e.push("cases/".concat(t.id,"/big/").concat(t.id,"_1.jpg")),e.push("cases/".concat(t.id,"/big/").concat(t.id,"_2.jpg"))),e},visibleHandler:function(t){this.visible=t}}},m=(c(724),c(203)),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex flex-column w-100 h-100 ovfxy jcc aic",style:t.getModalStyle(t.c.type)},[["sp","ba"].includes(t.c.type)?e("b-aspect",{attrs:{ratio:"1:1"}},["ba"===t.c.type?e("BeforeAfter",{staticClass:"w-100 h-100",attrs:{images:t.getImages(t.c)}}):t._e(),t._v(" "),"sp"===t.c.type?e("ProductSpinner",{staticClass:"w-100 h-100",attrs:{autoload:!0,images:t.getImages(t.c)}}):t._e()],1):t._e(),t._v(" "),e("Button",{staticClass:"closeBtn d-flex rounded-circle jcc aic m-3 bg-danger text-white",attrs:{icon:["fas","xmark"]},on:{click:function(e){return t.$emit("close")}}}),t._v(" "),"st"===t.c.type?e("StoriesGallery",{staticClass:"w-100 h-100",attrs:{stories:t.getImages(t.c),arrows:!0,transitions:["animate__fadeIn","animate__fadeOut"],storyClass:"animate__animated",fit:"contain"}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);