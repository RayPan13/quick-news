(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{302:function(t,e,o){var content=o(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("f7bf2698",content,!0,{sourceMap:!1})},314:function(t,e,o){"use strict";o(302)},315:function(t,e,o){var r=o(25)(!1);r.push([t.i,".category[data-v-451beb1e]{width:100%;margin-bottom:32px}.category .container[data-v-451beb1e]{display:flex;flex-wrap:wrap;position:relative}.category .billboard[data-v-451beb1e]{color:rgba(0,0,0,.1)}.category h2[data-v-451beb1e]{font-size:5rem;font-weight:700;margin:0 0 24px;flex-basis:100%;line-height:1.5}.category .left[data-v-451beb1e]{flex-basis:70%;display:flex;flex-wrap:wrap;padding-right:32px}@media(max-width:768px){.category .left[data-v-451beb1e]{flex-basis:100%;padding-right:0}}.category .left .item[data-v-451beb1e]{flex-basis:50%}.category .left .item img.isLoading[data-v-451beb1e]{height:250px;background-color:#ddd}@media(max-width:768px){.category .left .item[data-v-451beb1e]{flex-basis:100%}}.category .left .item.big[data-v-451beb1e]{flex-basis:100%}.category .left .item.big img.isLoading[data-v-451beb1e]{height:230px;background-color:#ddd}.category .left .item.video[data-v-451beb1e]{padding-left:32px}@media(max-width:768px){.category .left .item.video[data-v-451beb1e]{padding-left:0}}.category .left .item.video img.isLoading[data-v-451beb1e]{height:330px;background-color:#ddd}.category .right[data-v-451beb1e]{flex-basis:30%}@media(max-width:768px){.category .right[data-v-451beb1e]{flex-basis:100%}}.category .item[data-v-451beb1e]{flex-basis:100%;margin-bottom:32px}.category .item .pic[data-v-451beb1e]{width:100%;position:relative;margin-bottom:12px;overflow:hidden}.category .item .pic a[data-v-451beb1e]{position:absolute;top:0;left:0;right:0;bottom:0;z-index:3}.category .item .pic a:hover~img[data-v-451beb1e]{transform:scale(1.2);filter:grayscale(1)}.category .item .pic img[data-v-451beb1e]{transform:scale(1);transform-origin:center;transition-duration:1s;width:100%}.category .item .pic img.isLoading[data-v-451beb1e]{height:570px;background-color:#ddd}.category .item .pic .tag[data-v-451beb1e]{background-color:rgba(234,177,23,.7);color:#fff;position:absolute;top:8px;right:8px;padding:12px;border-radius:4px;z-index:2;font-weight:600}.category .item .pic .play-btn[data-v-451beb1e]{position:absolute;left:20px;bottom:20px;color:#fff;font-size:1.2rem;font-weight:600;z-index:2}.category .item .pic .play-btn .icon[data-v-451beb1e]{margin-right:4px}.category .item h3[data-v-451beb1e]{padding-bottom:12px;margin:0 0 12px;font-size:2rem;border-bottom:1px solid #ddd;transition:color .5s}.category .item h3[data-v-451beb1e]:hover{color:#eab117}.category .item .info[data-v-451beb1e]{display:flex;flex-wrap:wrap;margin-bottom:12px;font-size:1.4rem}.category .item .info .icon[data-v-451beb1e]{margin-right:4px}.category .item .info>div[data-v-451beb1e]{margin:0 12px 12px 0}.category .more[data-v-451beb1e]{flex-basis:100%;text-align:center;font-size:1.4rem;font-weight:600}.category .more a[data-v-451beb1e]:hover{opacity:.5}.category .more .icon[data-v-451beb1e]{margin-left:4px}",""]),t.exports=r},323:function(t,e,o){"use strict";o.r(e);o(44),o(13);var r={name:"TheCategory",props:{postData:{type:Object,required:!0}},computed:{leftAty:function(){return"{}"===JSON.stringify(this.postData)?[]:this.postData.top.filter((function(t){return!t.isTall}))},rightAty:function(){return"{}"===JSON.stringify(this.postData)?[]:this.postData.top.filter((function(t){return t.isTall}))},moreText:function(){return"{}"===JSON.stringify(this.postData)?"":"ALL ".concat(this.postData.title.toUpperCase())}}},n=(o(314),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"category"},["{}"!==JSON.stringify(t.postData)?o("div",{staticClass:"container"},[o("div",{staticClass:"billboard"},[t._v(t._s(t.postData.title))]),t._v(" "),o("h2",[t._v(t._s(t.postData.title))]),t._v(" "),o("div",{staticClass:"left"},t._l(t.leftAty,(function(e){return o("div",{key:e.title,staticClass:"item",class:{video:e.isVideo,big:e.isBig},attrs:{"data-aos":"fade-up"}},[o("div",{staticClass:"pic"},[o("a",{attrs:{href:e.url}}),t._v(" "),o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":e.src[e.img],alt:""}}),t._v(" "),o("div",{staticClass:"tag"},[t._v(t._s(t.postData.tag))]),t._v(" "),e.isVideo?o("div",{staticClass:"play-btn"},[o("span",{staticClass:"icon"},[o("fa",{attrs:{icon:["fas","play"]}})],1),t._v(" "),o("span",[t._v("PLAY")])]):t._e()]),t._v(" "),o("div",{staticClass:"txt"},[e.isVideo?t._e():o("h3",[o("a",{attrs:{href:e.url}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])]),t._v(" "),o("div",{staticClass:"info"},[o("div",{staticClass:"date"},[o("span",{staticClass:"icon"},[o("fa",{attrs:{icon:["far","calendar"]}})],1),t._v(" "),o("span",[t._v(t._s(e.time))])]),t._v(" "),e.isBig?o("div",{staticClass:"author"},[o("span",{staticClass:"icon"},[o("fa",{attrs:{icon:["far","user"]}})],1),t._v(" "),o("span",[t._v(t._s(e.author))])]):t._e(),t._v(" "),e.isBig?o("div",{staticClass:"views"},[o("span",{staticClass:"icon"},[o("fa",{attrs:{icon:["far","eye"]}})],1),t._v(" "),o("span",[t._v(t._s(e.views)+" views")])]):t._e(),t._v(" "),e.isBig?o("div",{staticClass:"comments"},[o("span",{staticClass:"icon"},[o("fa",{attrs:{icon:["far","comment"]}})],1),t._v(" "),o("span",[t._v(t._s(e.comments)+" comments")])]):t._e()])])])})),0),t._v(" "),o("div",{staticClass:"right"},t._l(t.rightAty,(function(e){return o("div",{key:e.title,staticClass:"item",attrs:{"data-aos":"fade-up"}},[o("div",{staticClass:"pic"},[o("a",{attrs:{href:e.url}}),t._v(" "),o("div",{staticClass:"tag"},[t._v(t._s(t.postData.tag))]),t._v(" "),o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":e.src[e.img],alt:""}})]),t._v(" "),o("div",{staticClass:"txt"},[o("h3",[o("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])]),t._v(" "),o("div",{staticClass:"info"},[o("div",{staticClass:"date"},[o("span",{staticClass:"icon"},[o("fa",{attrs:{icon:["far","calendar"]}})],1),t._v(" "),o("span",[t._v(t._s(e.time))])])])])])})),0),t._v(" "),o("div",{staticClass:"more"},[o("a",{attrs:{href:t.postData.url}},[o("span",[t._v(t._s(t.moreText))]),t._v(" "),o("span",{staticClass:"icon"},[o("fa",{attrs:{icon:["fas","angle-right"]}})],1)])])]):t._e()])}),[],!1,null,"451beb1e",null);e.default=component.exports}}]);