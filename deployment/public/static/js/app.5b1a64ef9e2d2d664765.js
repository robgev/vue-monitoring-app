webpackJsonp([1],[,,,,,,,function(e,t,a){"use strict";var n=a(0),c=a(15),o=a(22),r=a(21),s=a(23);n.default.use(c.a);var i={app:"monitoring",companies:{Hanseaticsoft:{projects:{"cfm-cloud-mt":{changes:[],id:"maintenance",tabLabel:"maintenance"},"cfm-cloud-blg":{changes:[],id:"blog",tabLabel:"blog"},"cfm-cloud-cw":{changes:[],id:"crewing",tabLabel:"crewing"},"cfm-cloud-mc":{changes:[],id:"miscellaneous",tabLabel:"miscellaneous"},"cfm-cloud-dr":{changes:[],id:"disturbance",tabLabel:"disturbance"},"cfm-cloud-ia":{changes:[],id:"inspections",tabLabel:"inspections"},"cfm-cloud-ctf":{changes:[],id:"certificates",tabLabel:"certificates"},"cfm-cloud-cir":{changes:[],id:"circulars",tabLabel:"circulars"},"cfm-cloud-tj":{changes:[],id:"towage",tabLabel:"towage"},"cfm-cloud-ep":{changes:[],id:"employees",tabLabel:"employees"}},logoUrl:"static/img/hs.png"}}};t.a=new c.a.Store({state:i,getters:o.a,actions:r.a,mutations:s.a})},function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n="ADD_PUSH_DATA"},,,,,,function(e,t,a){function n(e){a(61)}var c=a(1)(a(27),a(70),n,"data-v-181c5598",null);e.exports=c.exports},,function(e,t,a){"use strict";var n=a(0),c=a(75),o=a.n(c),r=a(59);a.n(r);n.default.use(o.a),n.default.material.registerTheme("default",{primary:{color:"cyan",hue:500,textColor:"white"},accent:{color:"pink",hue:"A200"},warn:"red",background:"grey"})},function(e,t,a){"use strict";var n=a(0),c=a(76),o=a(66),r=a.n(o),s=a(67),i=a.n(s);n.default.use(c.a),t.a=new c.a({routes:[{path:"/",name:"Dashboard",component:r.a},{path:"/projects/:companyid",name:"project",component:i.a},{path:"/projects/:companyid/:projectid",name:"projectPage",component:i.a}]})},function(e,t,a){"use strict";var n=a(0),c=a(7),o=a(77),r=a.n(o);n.default.use(r.a,"10.10.1.10:3000",c.a)},function(e,t,a){function n(e){a(63)}var c=a(1)(a(24),a(73),n,"data-v-77c1f1c6",null);e.exports=c.exports},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),c=(a(16),a(19)),o=a.n(c),r=a(17),s=a(7);a(18);n.default.config.productionTip=!1,new n.default({el:"#app",router:r.a,store:s.a,template:"<App/>",components:{App:o.a}})},function(e,t,a){"use strict";var n=a(8),c={socket_push:function(e,t){(0,e.commit)(n.a,{pushData:t})}};t.a=c},function(e,t,a){"use strict";var n=a(31),c=a.n(n),o=function(e){var t=e.companies;return c()(t).map(function(e){return{companyName:e,logoUrl:t[e].logoUrl}})},r={companyCardData:function(e){return o(e)}};t.a=r},function(e,t,a){"use strict";var n=a(32),c=a.n(n),o=a(8),r=c()({},o.a,function(e,t){var a=t.pushData,n=a.push.company,c=a.push.repo;e.companies[n].projects[c].changes.push(a)});t.a=r},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",sockets:{connect:function(){console.log("socket connected")},push:function(e){console.log("Log ::: new message ::: ",e)}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"company-card",props:["companyName","logoUrl"]}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(15),c=a(65),o=a.n(c),r=a(14),s=a.n(r);t.default={name:"dashboard",computed:a.i(n.b)(["companyCardData"]),components:{"company-card":o.a,page:s.a}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(68),c=a.n(n);t.default={name:"page",components:{topbar:c.a},props:{detailed:{type:Boolean,default:!1}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(14),c=a.n(n);t.default={name:"hello",components:{page:c.a}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{back:function(){window.history.back()},onTabChange:function(e){var t=this.$refs.tabs.$children,a=t[e+1],n=a.id;this.$router.replace({name:"projectPage",params:{projectid:n}})}},data:function(){var e=this.$route.params.companyid;return{items:(this.$store.state.companies&&e?this.$store.state.companies[e]:[]).projects}},props:{detailed:{type:Boolean,default:!1}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,a){function n(e){a(62)}var c=a(1)(a(25),a(71),n,"data-v-2da842a8",null);e.exports=c.exports},function(e,t,a){function n(e){a(60)}var c=a(1)(a(26),a(69),n,"data-v-02fb0d62",null);e.exports=c.exports},function(e,t,a){var n=a(1)(a(28),a(72),null,null,null);e.exports=n.exports},function(e,t,a){function n(e){a(64)}var c=a(1)(a(29),a(74),n,"data-v-cf6ea25a",null);e.exports=c.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page",[a("div",[a("h1",{staticClass:"title"},[e._v("Projects")]),e._v(" "),a("hr"),e._v(" "),e._l(e.companyCardData,function(e){return a("company-card",{key:e.companyName,attrs:{"company-name":e.companyName,"logo-url":e.logoUrl}})})],2)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("topbar",{attrs:{detailed:e.detailed}}),e._v(" "),a("div",{staticClass:"content"},[e._t("default")],2)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("md-card",{staticClass:"card",attrs:{"md-with-hover":""}},[a("router-link",{attrs:{to:{name:"project",params:{companyid:e.companyName}}}},[a("md-card-media-cover",[a("md-card-media",{attrs:{"md-ratio":"4:3"}},[a("img",{attrs:{src:e.logoUrl,alt:"People"}})]),e._v(" "),a("md-card-area",[a("md-card-header",[a("div",{staticClass:"md-title"},[e._v(e._s(e.companyName))])])],1),e._v(" "),a("md-ink-ripple")],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page",{attrs:{detailed:""}},[a("div",[a("h1",{staticClass:"title"},[e._v("Test")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v(e._s(this.$route.params))])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"slide-fade"}},[a("router-view")],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("md-toolbar",{staticClass:"md-dense topbar"},[e.detailed?a("div",{staticClass:"detailed"},[a("div",{staticClass:"left",on:{click:e.back}},[a("md-icon",{staticClass:"icon"},[e._v("arrow_back")])],1),e._v(" "),a("md-tabs",{ref:"tabs",on:{change:e.onTabChange}},e._l(e.items,function(e){return a("md-tab",{key:e.id,attrs:{id:e.id,"md-label":e.tabLabel}})}))],1):e._e(),e._v(" "),e.detailed?e._e():a("img",{staticClass:"header-logo",attrs:{src:"static/img/logo.svg"}}),e._v(" "),e.detailed?e._e():a("h2",{staticClass:"md-title header-text"},[e._v("Monitoring")])])},staticRenderFns:[]}}],[20]);
//# sourceMappingURL=app.5b1a64ef9e2d2d664765.js.map