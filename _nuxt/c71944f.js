(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{286:function(t,e,o){var content=o(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("609c122a",content,!0,{sourceMap:!1})},292:function(t,e,o){"use strict";o(286)},293:function(t,e,o){var n=o(25)(!1);n.push([t.i,'.kv[data-v-3764ce37]{width:100%;position:relative}.kv>.container[data-v-3764ce37]{transform:translateY(-50%)}.carousel[data-v-3764ce37]{position:relative;width:100%;background-color:#000}.carousel .box[data-v-3764ce37]{height:600px}@media(max-width:990px){.carousel .box[data-v-3764ce37]{height:500px}}.carousel .item[data-v-3764ce37]{background-size:cover;background-position:50%;background-repeat:no-repeat;width:100%;height:600px;position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center}@media(max-width:990px){.carousel .item[data-v-3764ce37]{height:500px}}.carousel .item[data-v-3764ce37]:after{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.7)}.carousel .container[data-v-3764ce37]{position:relative;z-index:1;display:flex;align-items:center;color:#fff}@media(max-width:768px){.carousel .container[data-v-3764ce37]{flex-wrap:wrap}}.carousel .context[data-v-3764ce37]{flex-basis:100%;padding-right:5%}@media(max-width:768px){.carousel .context[data-v-3764ce37]{padding-right:12px}}.carousel .type[data-v-3764ce37]{display:inline-block;font-size:1.4rem;font-weight:600;padding:12px;border:2px solid #eab117;border-radius:4px;color:#eab117;margin-bottom:20px}.carousel h2[data-v-3764ce37]{font-size:6rem;font-weight:300;margin:0 0 20px}@media(max-width:990px){.carousel h2[data-v-3764ce37]{font-size:5rem}}@media(max-width:768px){.carousel h2[data-v-3764ce37]{font-size:4rem}}@media(max-width:480px){.carousel h2[data-v-3764ce37]{font-size:3rem}}.carousel .info[data-v-3764ce37]{width:100%;display:flex;font-size:1.5rem}.carousel .author[data-v-3764ce37]{margin-right:24px}.carousel .icon[data-v-3764ce37]{margin-right:8px}.carousel .date[data-v-3764ce37]{font-size:1.6rem;padding-right:5%;flex-shrink:0}@media(max-width:768px){.carousel .date[data-v-3764ce37]{flex-basis:100%;order:-1;padding-right:0;margin-bottom:24px}}.dots[data-v-3764ce37]{position:absolute;top:0;left:0;right:0;bottom:0}.dots .container[data-v-3764ce37]{height:100%}.dots ul[data-v-3764ce37]{margin:0;padding:0;position:absolute;top:50%;right:10px;transform:translateY(-50%)}.dots li[data-v-3764ce37]{list-style:none;width:10px;height:10px;background-color:hsla(0,0%,100%,.4);border-radius:50%;margin-bottom:8px;cursor:pointer}.dots li.active[data-v-3764ce37]{background-color:#fff}.breaking[data-v-3764ce37]{padding:24px 12px;color:#fff;background-color:#eab117;display:flex;align-items:center;justify-content:space-between;cursor:pointer}.breaking[data-v-3764ce37]:hover{background-color:#000}.breaking p[data-v-3764ce37]{font-size:1.4rem;font-weight:300;line-height:1.5;margin:0;padding-right:12px}.breaking p .bold[data-v-3764ce37]{font-weight:700}.breaking svg[data-v-3764ce37]{font-size:2rem}.fade-enter[data-v-3764ce37]{opacity:0}.fade-enter-active[data-v-3764ce37]{transition:opacity 1.5s}.fade-enter-to[data-v-3764ce37],.fade-leave[data-v-3764ce37]{opacity:1}.fade-leave-active[data-v-3764ce37]{transition:opacity 1.5s}.fade-leave-to[data-v-3764ce37]{opacity:0}',""]),t.exports=n},301:function(t,e,o){"use strict";o.r(e);o(62),o(33),o(198);var n={name:"TheKv",data:function(){return{carousel:[{id:1,type:"LIFESTYLE",title:"Oceans May Reduce Sea Life",author:"John Adams",comments:10,date:"11/04",bg:"https://picsum.photos/1920/1080.webp?random=101"},{id:2,type:"TRAVEL",title:"Warning Oceans May Reduce Sea Life by 17%",author:"John Adams",comments:2,date:"10/31",bg:"https://picsum.photos/1920/1080.webp?random=102"}],showIndex:0}},mounted:function(){var t=this;setInterval((function(){t.setShow(t.showIndex+1)}),8e3)},methods:{monthFormat:function(t){return["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec"][t.split("/")[0]-1]},dayFormat:function(t){return t.split("/")[1]},setShow:function(t){var e=this.carousel.length-1;this.showIndex=t>e?0:t}}},r=(o(292),o(12)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"kv"},[o("div",{staticClass:"carousel"},[o("transition-group",{staticClass:"box",attrs:{tag:"div",name:"fade"}},t._l(t.carousel,(function(e,n){return o("div",{directives:[{name:"show",rawName:"v-show",value:n===t.showIndex,expression:"index === showIndex"}],key:e.id,staticClass:"item",style:{backgroundImage:"url("+e.bg+")"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"context"},[o("div",{staticClass:"type"},[t._v(t._s(e.type))]),t._v(" "),o("h2",[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"info"},[o("div",{staticClass:"author"},[o("span",{staticClass:"icon"},[o("fa",{attrs:{icon:["far","user"]}})],1),t._v(" "),o("span",[t._v(t._s(e.author))])]),t._v(" "),o("div",{staticClass:"comment"},[o("span",{staticClass:"icon"},[o("fa",{attrs:{icon:["far","comment"]}})],1),t._v(" "),o("span",{staticClass:"count"},[t._v(t._s(e.comments))]),t._v(" "),o("span",[t._v("comments")])])])]),t._v(" "),o("div",{staticClass:"date"},[o("span",{staticClass:"icon"},[o("fa",{attrs:{icon:["far","calendar"]}})],1),t._v(" "),o("span",{staticClass:"month"},[t._v(t._s(t.monthFormat(e.date)))]),t._v(" "),o("span",{staticClass:"day"},[t._v(t._s(t.dayFormat(e.date)))])])])])})),0),t._v(" "),o("div",{staticClass:"dots"},[o("div",{staticClass:"container"},[o("div",{staticClass:"billboard"},[t._v("News")]),t._v(" "),o("ul",t._l(t.carousel.length,(function(e,n){return o("li",{key:e,class:{active:n===t.showIndex},on:{click:function(e){return t.setShow(n)}}})})),0)])])],1),t._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"breaking"},[t._m(0),t._v(" "),o("fa",{attrs:{icon:["fas","angle-right"]}})],1)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("span",{staticClass:"bold"},[t._v("Breaking news!")]),t._v(" 9 Ways to Generate More Revenue For Your Business Read this\n                to bring you more revenue more happiness!\n            ")])}],!1,null,"3764ce37",null);e.default=component.exports}}]);