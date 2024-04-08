(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,4,7,8],{242:function(e,t,n){"use strict";n.r(t);var l={props:["visible","title"],data:function(){return{fileList:[]}},mounted:function(){},methods:{upload:function(){this.$emit("upload",this.fileList)},cancel:function(){this.$emit("cancel"),this.fileList=[]},fileChange:function(e,t){this.fileList=t}}},r=n(203),component=Object(r.a)(l,(function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{withHeader:!1,"append-to-body":!0,"show-close":!1,"lock-scroll":!1,visible:e.visible,width:"100%"}},[t("transition",{attrs:{name:"scale-in",mode:"out-in",appear:""}},[e.visible?t("el-row",{staticClass:"d-flex justify-content-center align-items-center"},[t("el-col",{attrs:{xs:24,sm:20,md:6}},[t("div",{staticClass:"d-flex flex-column rounded-xl shadow overflowxy p-4 bg-light pe-all"},[t("div",{staticClass:"d-flex flex-grow w-100 justify-content-between align-items-center mb-4"},[t("span",{staticClass:"h5 font-weight-bold my-0 text-black"},[e._v(e._s(e.title))]),e._v(" "),t("div",{staticClass:"d-flex flex-grow align-items-center"},[t("Button",{staticClass:"rounded-xl p-2 border cursor-pointer",attrs:{icon:{type:"element",src:"el-icon-close"}},on:{click:e.cancel}})],1)]),e._v(" "),t("div",{staticClass:"d-flex flex-column w-100"},[t("el-upload",{ref:"upload",staticClass:"d-flex w-100",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","auto-upload":!1,"on-change":e.fileChange,"file-list":e.fileList}},[t("Button",{staticClass:"d-flex flex-row w-100 rounded-xl p-2 border",attrs:{slot:"trigger",label:"Добавить",icon:{type:"element",src:"el-icon-plus"}},slot:"trigger"})],1),e._v(" "),t("Button",{staticClass:"d-flex flex-row rounded-xl border px-4 py-3 w-100 justify-content-center bg-success text-white mt-4",attrs:{label:"Загрузить"},on:{click:e.upload}})],1)])])],1):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports},458:function(e,t,n){"use strict";n.r(t);var l={props:["files"],methods:{removeFile:function(e){this.$emit("removeFile",e)}}},r=n(203),component=Object(r.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex flex-column rounded-xl border overflowxy mt-3"},[t("div",{staticClass:"d-flex flex-grow w-100 justify-content-between align-items-center p-3 bg-white border-bottom"},[t("span",[e._v("Файлы")]),e._v(" "),t("Button",{staticClass:"px-3 py-2 bg-success text-white rounded-xl",attrs:{label:"Добавить"},on:{click:function(t){return e.$emit("uploadStart")}}})],1),e._v(" "),t("el-row",{staticClass:"p-3",attrs:{gutter:20}},e._l(e.files,(function(n){return t("el-col",{key:n.originalname,attrs:{xs:24,sm:12,md:6}},[t("div",{staticClass:"d-flex flex-column rounded-xl border overflowxy"},[t("div",{staticClass:"d-flex flex-grow p-3 justify-content-between align-items-center bg-white"},[t("span",[e._v(e._s(n.fln))]),e._v(" "),t("Button",{staticClass:"p-2 rounded-xl border cursor-pointer",attrs:{icon:{type:"element",src:"el-icon-delete"}},on:{click:function(t){return e.removeFile(n)}}})],1),e._v(" "),t("div",{staticClass:"w-100 rounded-xl bg-white",staticStyle:{height:"200px"}},[t("Picture",{staticClass:"w-100 h-100",attrs:{dir:n.dir,fln:n.fln,ext:n.ext,size:"xs",fit:"cover"}})],1)])])})),1)],1)}),[],!1,null,null,null);t.default=component.exports},459:function(e,t,n){"use strict";n.r(t);n(204);var l=n(40),r=(n(83),n(215),n(57),n(140),n(141),n(205),n(84),n(80),n(143),n(237)),o=n.n(r),c={components:{DialogUpload:n(242).default},props:["building","client"],data:function(){return{dialogUpload:!1,current:{model:null,section:null,floor:null},models:[{name:"sections",label:"Секции",fields:["id","title","levels"]},{name:"floors",label:"Этажи",fields:["id","section","floorNumbers","flats","polygon","images"]},{name:"flats",label:"Планировки",fields:["id","title","section","polygon"]}]}},mounted:function(){this.current.model=this.models[2]},methods:{uploadFloorPlan:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var r,c,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=t.building.floors.find((function(e){return e.id===t.current.floor})).images,(c=new FormData).append("model","building"),d=t.client._id+"/buildings/"+t.building._id+"/floors/"+t.current.floor,c.append("dir",d),console.log(d,e),n.next=9,Promise.all(e.map(function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=o.a.randomBytes(8).toString("hex")+".jpg",c.append("images",t.raw,n),r.push({dir:"https://storage.yandexcloud.net/360m/"+d,filename:n});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 9:return n.next=11,t.$store.dispatch("adm/uploadImages",c);case 11:t.dialogUpload=!1,n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})))()},upload:function(e,t){"cancel"===e&&(this.dialogUpload=!1),"start"===e&&(this.current.floor=t,this.dialogUpload=!0)},remove:function(e){console.log(this.current.model.name,e),this.building[this.current.model.name]=this.building[this.current.model.name].filter((function(i){return i.id!==e}))},removeImage:function(e,image){e.images=e.images.filter((function(i){return i.filename!==image.filename}))},getLevels:function(e){return this.building.isOneSection?this.building.levels:e?Number(this.building.sections.find((function(s){return s.id===e})).levels):0},changeValue:function(e){e.id,e.value;this.models},goMenu:function(e){e.id;var t=e.item;this.current.model=this.models.find((function(e){return e.name===t}))},create:function(){var e={id:o.a.randomBytes(8).toString("hex")};"flats"===this.current.model.name&&(e.title="",e.polygon="",e.square=0,e.rooms=0,this.building.isOneSection||(e.section=null)),"sections"===this.current.model.name&&(e.title="",e.levels=0),"floors"===this.current.model.name&&(this.building.isOneSection||(e.section=null),e.flats=[],e.floorNumbers=[],e.images=[],e.polygon=""),this.building[this.current.model.name].push(e)}},computed:{getLevelNumbers:function(){return null!==this.current.section?this.current.section.levels:this.building.levels}}},d=c,m=n(203),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return null!==e.current.model?t("div",{staticClass:"d-flex flex-column w-100 pos-relative"},[t("div",{staticClass:"d-flex flex-grow w-100 justify-content-between align-items-center px-4 py-3 bg-white border-bottom fontsize13"},[t("Navmenu",{staticClass:"d-flex flex-row",attrs:{items:e.models,itemValueKey:"name",itemLabelKey:"label",itemClass:"mr-3 font-weight-bold cursor-pointer",itemClassDefault:"text-muted",itemClassActive:"text-dark",active:e.current.model.name,idKey:"navmenuBuilding"},on:{go:e.goMenu}}),e._v(" "),t("Button",{staticClass:"d-flex flex-grow rounded bg-success text-white p-2",attrs:{icon:{type:"element",src:"el-icon-plus"}},on:{click:e.create}})],1),e._v(" "),t("transition",{attrs:{name:"slide-fade-from-bottom"}},[t("div",{staticClass:"d-flex flex-column px-3 py-3 bg-light overflowYscroll",staticStyle:{"max-height":"500px"}},e._l(e.building[e.current.model.name],(function(n){return t("div",{key:n.id,staticClass:"d-flex flex-grow align-items-center justify-content-between border py-1 px-3 mb-2 rounded bg-white"},[t("div",{staticClass:"d-flex flex-grow align-items-center"},e._l(e.current.model.fields,(function(l){return t("div",{key:l,staticClass:"d-flex flex-grow mr-3 py-1"},["id"===l?t("span",{staticStyle:{width:"150px"}},[e._v(e._s(n.id))]):e._e(),e._v(" "),"title"===l?t("el-input",{attrs:{placeholder:"Название"},model:{value:n.title,callback:function(t){e.$set(n,"title",t)},expression:"item.title"}}):e._e(),e._v(" "),"levels"===l?t("el-input",{attrs:{placeholder:"Этажность"},model:{value:n.levels,callback:function(t){e.$set(n,"levels",t)},expression:"item.levels"}}):e._e(),e._v(" "),"polygon"===l?t("el-input",{attrs:{placeholder:"Полигон SVG"},model:{value:n.polygon,callback:function(t){e.$set(n,"polygon",t)},expression:"item.polygon"}}):e._e(),e._v(" "),"section"!==l||e.building.isOneSection?e._e():t("el-select",{model:{value:n.section,callback:function(t){e.$set(n,"section",t)},expression:"item.section"}},e._l(e.building.sections,(function(section){return t("el-option",{key:section.id,attrs:{value:section.id,label:section.title}})})),1),e._v(" "),"floorNumbers"===l&&null!==n.section?t("el-select",{attrs:{multiple:!0,"collapse-tags":!0},model:{value:n.floorNumbers,callback:function(t){e.$set(n,"floorNumbers",t)},expression:"item.floorNumbers"}},e._l(e.getLevels(n.section),(function(e,n){return t("el-option",{key:n,attrs:{value:e,label:e}})})),1):e._e(),e._v(" "),"flats"===l?t("el-select",{attrs:{multiple:!0,"collapse-tags":!0},model:{value:n.flats,callback:function(t){e.$set(n,"flats",t)},expression:"item.flats"}},e._l(e.building.flats,(function(e){return t("el-option",{key:e.id,attrs:{value:e.id,label:e.title}})})),1):e._e(),e._v(" "),"images"===l?t("div",{staticClass:"d-flex flex-grow"},e._l(n.images,(function(image){return t("el-popover",{key:image.filename,attrs:{placement:"right",width:"400",trigger:"click"}},[e.dialogUpload?e._e():t("div",{staticClass:"d-flex flex-column p-4"},[t("Picture",{attrs:{src:image.dir+"/small/"+image.filename}}),e._v(" "),t("Button",{staticClass:"rounded border text-danger px-3 py-2 mt-4 justify-content-between",attrs:{icon:{type:"element",src:"el-icon-delete"},label:"Удалить изображение"},on:{click:function(t){return e.removeImage(n,image)}}})],1),e._v(" "),t("Button",{staticClass:"rounded border p-2 mr-2",attrs:{slot:"reference",icon:{type:"element",src:"el-icon-picture"}},slot:"reference"})],1)})),1):e._e()],1)})),0),e._v(" "),t("div",{staticClass:"d-flex flex-grow align-items-center"},["floors"===e.current.model.name?t("Button",{staticClass:"rounded border p-2 mr-2",attrs:{icon:{type:"element",src:"el-icon-upload"}},on:{click:function(t){return e.upload("start",n.id)}}}):e._e(),e._v(" "),t("Button",{staticClass:"d-flex rounded p-2 border text-danger",attrs:{icon:{type:"element",src:"el-icon-delete"}},on:{click:function(t){return e.remove(n.id)}}})],1)])})),0)]),e._v(" "),t("DialogUpload",{attrs:{visible:e.dialogUpload,title:"Загрузить план этажа"},on:{upload:e.uploadFloorPlan,cancel:function(t){return e.upload("cancel")}}})],1):e._e()}),[],!1,null,null,null);t.default=component.exports},460:function(e,t,n){"use strict";n.r(t);var l=n(40),r=(n(83),n(215),n(57),n(84),n(80),n(237)),o=n.n(r),c={props:["pwa","client"],data:function(){return{currentRoute:null,options:{strs:[],prds:[],prjs:[],psts:[],strategies:{str:[{id:"custom",label:"Пользовательский"}],prj:[{id:"custom",label:"Пользовательский"},{id:"random",label:"Случайные"}],prd:[{id:"custom",label:"Пользовательский"},{id:"random",label:"Случайные"}],pst:[{id:"custom",label:"Пользовательский"},{id:"random",label:"Случайные"}]}},routes:[{id:"index",blocks:[]},{id:"proekty",blocks:[]},{id:"proekt",blocks:[]},{id:"realty",blocks:[]},{id:"room",blocks:[]},{id:"novosti",blocks:[]},{id:"novost",blocks:[]},{id:"ipoteka",blocks:[]},{id:"kontakty",blocks:[]}],blocks:[{id:"str",label:"Истории",items:[]},{id:"prj",label:"Проекты",strategy:"custom",items:[]},{id:"prd",label:"Помещения",strategy:"custom",items:[]},{id:"pst",label:"Посты",strategy:"custom",items:[]}]}},mounted:function(){0===this.pwa.routes.length&&(this.pwa.routes=this.routes),this.currentRoute=this.pwa.routes[0]},methods:{change:function(e){var t=e.id;e.item;this.currentRoute=this.pwa.routes.find((function(e){return e.id===t}))},create:function(e){var t=e.id,n=e.item,l={id:o.a.randomBytes(8).toString("hex"),type:n,items:[]};this.pwa.routes.find((function(e){return e.id===t})).blocks.push(l)},deleteBlock:function(e,t){e.blocks=e.blocks.filter((function(b){return b!==t}))},getAll:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l={model:e,db:t.client.alias},n.next=3,t.$axios.$get("/api/adm/getAll/"+JSON.stringify(l));case 3:t.options[e+"s"]=n.sent,console.log(t.options[e+"s"]);case 5:case"end":return n.stop()}}),n)})))()}}},d=n(203),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return null!==e.currentRoute?t("div",{staticClass:"d-flex flex-column w-100 overflowxy rounded-xl border shadow bg-white"},[e._m(0),e._v(" "),t("div",{staticClass:"d-flex flex-row p-3",staticStyle:{"flex-wrap":"nowrap",display:"flex","overflow-x":"scroll"}},e._l(e.pwa.routes,(function(n){return t("div",{key:n.id,staticClass:"d-flex p-3"},[t("div",{staticClass:"d-flex flex-column rounded-xl border bg-light overflowxy",staticStyle:{width:"300px"}},[t("div",{staticClass:"d-flex flex-row justify-content-between align-items-center p-3 bg-white border-bottom"},[t("span",[e._v(e._s(n.id))]),e._v(" "),t("el-popover",{attrs:{trigger:"click",placement:"bottom-end",width:"300"}},[t("div",{staticClass:"d-flex flex-wrap w-100 p-2"},[t("Navmenu",{staticClass:"d-flex flex-column",attrs:{items:e.blocks,idKey:n.id,itemValueKey:"id",itemLabelKey:"label",itemClass:"my-2 cursor-pointer"},on:{go:e.create}})],1),e._v(" "),t("Button",{staticClass:"d-flex flex-nowrap font-size-075 bg-success text-white px-3 py-2 rounded-xl cursor-pointer",attrs:{slot:"reference",label:"Добавить блок"},slot:"reference"})],1)],1),e._v(" "),t("div",{staticClass:"d-flex flex-column px-2"},e._l(n.blocks,(function(l){return t("div",{key:l.id,staticClass:"d-flex flex-column p-3 rounded-xl bg-white border my-2"},[t("div",{staticClass:"d-flex flex-row justify-content-between align-items-center mb-2"},[t("span",[e._v(e._s(l.type))]),e._v(" "),t("Button",{staticClass:"p-2 rounded-xl border",attrs:{icon:{type:"element",src:"el-icon-delete"}},on:{click:function(t){return e.deleteBlock(n,l)}}})],1),e._v(" "),t("el-select",{model:{value:l.strategy,callback:function(t){e.$set(l,"strategy",t)},expression:"block.strategy"}},e._l(e.options.strategies[l.type],(function(e){return t("el-option",{key:e.id,attrs:{value:e.id,label:e.label}})})),1),e._v(" "),"custom"===l.strategy?t("el-select",{attrs:{multiple:"","collapse-tags":""},on:{focus:function(t){return e.getAll(l.type)}},model:{value:l.items,callback:function(t){e.$set(l,"items",t)},expression:"block.items"}},e._l(e.options[l.type+"s"],(function(e){return t("el-option",{key:e._id,attrs:{value:e._id,label:e.title}})})),1):e._e()],1)})),0)])])})),0)]):e._e()}),[function(){var e=this._self._c;return e("div",{staticClass:"d-flex flex-row justify-content-between align-items-center p-4 border-bottom"},[e("span",{staticClass:"h5 my-0"},[this._v("Страницы")])])}],!1,null,null,null);t.default=component.exports},803:function(e,t,n){"use strict";n.r(t);n(204),n(80),n(57),n(211),n(217);var l=n(40),r=(n(83),n(136),n(216),n(243),n(221),n(140),n(141),n(205),n(84),n(459)),o=n(460),c=n(458),d=n(242),m=n(237),f=n.n(m);function v(e){var t,n,l,r=2;for("undefined"!=typeof Symbol&&(n=Symbol.asyncIterator,l=Symbol.iterator);r--;){if(n&&null!=(t=e[n]))return t.call(e);if(l&&null!=(t=e[l]))return new x(t.call(e));n="@@asyncIterator",l="@@iterator"}throw new TypeError("Object is not async iterable")}function x(e){function t(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then((function(e){return{value:e,done:t}}))}return x=function(e){this.s=e,this.n=e.next},x.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var n=this.s.return;return void 0===n?Promise.resolve({value:e,done:!0}):t(n.apply(this.s,arguments))},throw:function(e){var n=this.s.return;return void 0===n?Promise.reject(e):t(n.apply(this.s,arguments))}},new x(e)}var h={components:{UpdateBuilding:r.default,UpdatePWA:o.default,ListFiles:c.default,DialogUpload:d.default},props:["visible","current"],data:function(){return{dialogUpload:!1,fields:[{name:"title",type:"input",label:"Название"},{name:"description",type:"input",label:"Описание"},{name:"prefix",type:"input",label:"Префикс"},{name:"alias",type:"input",label:"Alias"},{name:"lat",type:"input",label:"Широта"},{name:"lng",type:"input",label:"Долгота"},{name:"dateFinished",type:"date",label:"Дата сдачи"},{name:"domain",type:"input",label:"Домен"},{name:"level",type:"input",label:"Этаж"},{name:"rooms",type:"input",label:"Комнат"},{name:"square",type:"input",label:"Площадь"},{name:"price",type:"input",label:"Цена"}],actions:[{name:"remove",label:"Удалить",icon:"el-icon-delete",btnClass:"bg-dark text-white"},{name:"save",label:"Сохранить",icon:"el-icon-check",btnClass:"bg-success border text-white"},{name:"cancel",label:"Отменить",icon:"el-icon-close",btnClass:"text-dark border border-dark"}]}},methods:{removeFile:function(e){console.log(e),this.current.item.files=this.current.item.files.filter((function(t){return t!==e}))},upload:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=new FormData,o=t.current.client.alias+"/"+t.current.model.name+"s/"+t.current.item._id,r.append("dir",o),n.next=6,Promise.all(e.map(function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(n){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=f.a.randomBytes(8).toString("hex"),r.append("files",n.raw,l),t.current.item.files.push({dir:"https://storage.yandexcloud.net/360m.media/"+o,fln:l,ext:"webp"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return n.next=8,t.$axios.$post("/api/adm/uploadImages",r);case 8:e=[],t.dialogUpload=!1,n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))()},goAction:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var l,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log(e),"cancel"===e&&t.$emit("cancel"),"save"!==e){n.next=11;break}return l={model:t.current.model.name,fields:t.current.item,fieldsUpdate:t.current.model.fieldsUpdate,db:null},"cln"===t.current.model.name?l.db="360m_dev":l.db=t.current.client.alias,n.next=7,t.$axios.$put("/api/adm/update",{params:JSON.stringify(l)});case 7:return r=n.sent,n.next=10,t.uploadJSON(r);case 10:t.$emit("success");case 11:case"end":return n.stop()}}),n)})))()},uploadJSON:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var l,r,o,c,d,m,f,x,h,w,y,_,k,C;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:l={},r=!1,o=!1,n.prev=3,d=v(t.current.model.fieldsJSON);case 5:return n.next=7,d.next();case 7:if(!(r=!(m=n.sent).done)){n.next=13;break}f=m.value,l[f]=e[f];case 10:r=!1,n.next=5;break;case 13:n.next=19;break;case 15:n.prev=15,n.t0=n.catch(3),o=!0,c=n.t0;case 19:if(n.prev=19,n.prev=20,!r||null==d.return){n.next=24;break}return n.next=24,d.return();case 24:if(n.prev=24,!o){n.next=27;break}throw c;case 27:return n.finish(24);case 28:return n.finish(19);case 29:return x=new FormData,h=JSON.stringify(l),w=new Blob([h],{type:"application/json"}),"app"===t.current.model.name?(y="app",_=e.domain):(y="clients/"+t.current.client._id+"/"+t.current.model.name+"s",_=e._id),x.append("dir",y),x.append("files",w,_+".json"),k={model:t.current.model.name,db:t.current.client.alias},n.next=40,t.$axios.$get("/api/adm/getAll/"+JSON.stringify(k));case 40:return C=n.sent,console.log(C.map((function(i){return i._id}))),n.abrupt("return",console.log(h));case 43:case"end":return n.stop()}}),n,null,[[3,15,19,29],[20,,24,28]])})))()},uploadJSON_old:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var l,r,o,c,d,m,f,v,x,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(l={model:t.current.model.name,db:t.current.client.alias},"prj"!==t.current.model.name){n.next=14;break}return n.next=4,t.$axios.$get("/api/adm/getAll/"+JSON.stringify(l));case 4:return r=n.sent,o=new FormData,c=new Blob([JSON.stringify(r)],{type:"application/json"}),d="clients/"+t.current.client.alias+"/"+t.current.model.name+"s","list",o.append("dir",d),o.append("files",c,"list.json"),n.next=13,t.$axios.$post("/api/adm/uploadJSON",o);case 13:case 29:return n.abrupt("return",n.sent);case 14:if("prd"!==t.current.model.name){n.next=30;break}return l._id=e._id,l.populate=[{path:"bld",model:"blds",select:"title"}],n.next=19,t.$axios.$get("/api/adm/getOne/"+JSON.stringify(l));case 19:return m=n.sent,console.log(m),f=new FormData,v=new Blob([JSON.stringify(m)],{type:"application/json"}),x="clients/"+t.current.client.alias+"/"+t.current.model.name+"s",h=e._id,f.append("dir",x),f.append("files",v,h+".json"),n.next=29,t.$axios.$post("/api/adm/uploadJSON",f);case 30:case"end":return n.stop()}}),n)})))()},setValue:function(e){var t=e.id,n=e.value;this.current.item[t]=n}}},w=h,y=n(203),component=Object(y.a)(w,(function(){var e=this,t=e._self._c;return t("b-modal",{staticClass:"p-0",attrs:{id:"modalUpdate",centered:"","hide-footer":"","hide-header":"",size:"xl"}},[t("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[null!==e.current.item?t("div",{staticClass:"d-flex flex-column w-100 h-100 overflowxy pe-all"},[t("div",{staticClass:"d-flex flex-row justify-content-between align-items-center bg-white border-bottom p-4"},[t("span",{staticClass:"h5 my-0"},[e._v(e._s(e.current.item._id))]),e._v(" "),t("div",{staticClass:"d-flex flex-grow align-items-center"},e._l(e.actions,(function(n){return t("Button",{key:n.name,staticClass:"d-flex flex-grow px-3 py-2 rounded-xl ml-3 cursor-pointer",class:n.btnClass,attrs:{icon:{type:"element",src:n.icon},label:n.label,labelClass:"ml-3"},on:{click:function(t){return e.goAction(n.name)}}})})),1)]),e._v(" "),t("div",{staticClass:"d-flex flex-column w-100 p-4 bg-light"},[t("b-row",e._l(e.fields.filter((function(t){return e.current.model.fieldsUpdate.includes(t.name)})),(function(n){return t("b-col",{key:n.name,staticClass:"mb-3",attrs:{xs:"12",md:"4"}},[t("div",{staticClass:"d-flex flex-column rounded-xl border shadow-sm p-3 bg-white"},[t("span",{staticClass:"mb-1 font-size-075"},[e._v(e._s(n.label))]),e._v(" "),"input"===n.type?t("b-form-input",{model:{value:e.current.item[n.name],callback:function(t){e.$set(e.current.item,n.name,t)},expression:"current.item[field.name]"}}):e._e()],1)])})),1),e._v(" "),t("b-row",["app"===e.current.model.name?t("UpdatePWA",{attrs:{pwa:e.current.item,client:e.current.client}}):e._e()],1),e._v(" "),"bld"===e.current.model.name?t("UpdateBuilding",{staticClass:"mt-3 rounded overflowxy bg-white border shadow-sm",attrs:{building:e.current.item,client:e.current.client}}):e._e(),e._v(" "),void 0!==e.current.item.files?t("ListFiles",{attrs:{files:e.current.item.files},on:{uploadStart:function(t){e.dialogUpload=!0},removeFile:e.removeFile}}):e._e(),e._v(" "),t("DialogUpload",{attrs:{visible:e.dialogUpload,title:"Загрузка"},on:{upload:e.upload,cancel:function(t){e.dialogUpload=!1}}})],1)]):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports}}]);