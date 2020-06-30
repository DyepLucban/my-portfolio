(function(t){function e(e){for(var o,i,s=e[0],l=e[1],c=e[2],m=0,p=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(o=!1)}o&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},r={app:0},n=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"02ee":function(t,e,a){"use strict";var o=a("f6cc"),r=a.n(o);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.Page()?a("Navbar"):t._e(),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1),t.Page()?a("Footer"):t._e()],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{fixed:"top",toggleable:"lg",type:"dark",variant:"dark",position:"fixed"}},[a("b-container",[a("b-navbar-brand",{attrs:{to:"/"}},[t._v("Jeffrey M. Lucban")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},t._l(t.nav,(function(e,o){return a("b-nav-item",{key:o,attrs:{to:e.url}},[t._v(" "+t._s(e.text)+" ")])})),1)],1)],1)],1)],1)},s=[],l={name:"Navbar",components:{},data:function(){return{nav:[{text:"Home",url:"/"},{text:"About",url:"/about"},{text:"Resume",url:"/resume"},{text:"Portfolio",url:"/portfolio"},{text:"Contact",url:"/contact"}]}}},c=l,u=a("2877"),m=Object(u["a"])(c,i,s,!1,null,null,null),p=m.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"footer"}},[a("b-container",{staticClass:"footer",attrs:{fluid:""}},[a("b-row",{staticClass:"py-3",attrs:{id:"footer-box"}},[t._v(" © Copyright 2020 | Designed By: Me ")])],1)],1)},d=[],f={name:"Footer",components:{}},v=f,_=Object(u["a"])(v,b,d,!1,null,null,null),g=_.exports,h={name:"App",components:{Navbar:p,Footer:g},data:function(){return{}},methods:{Page:function(){if("/"!=this.$route.path)return!0}}},y=h,C=(a("02ee"),Object(u["a"])(y,r,n,!1,null,"06d6a71e",null)),x=C.exports,w=a("8c4f"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"home-banner"}},[a("b-container",[a("b-row",{attrs:{id:"banner-box","align-v":"center"}},[a("Banner")],1)],1)],1)},E=[],q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-5",attrs:{xs:"12",md:"12"}},[a("h1",{staticStyle:{color:"white"}},[t._v("Jeffrey M. Lucban")]),t._m(0),a("router-link",{attrs:{to:"/about"}},[t._v("Lets get started!")])],1)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",{staticStyle:{color:"gray"}},[t._v("I'm a passionate "),a("span",{staticStyle:{color:"white"}},[t._v("{")]),a("span",{staticStyle:{color:"white"}},[t._v(" Back-End Developer ")]),a("span",{staticStyle:{color:"white"}},[t._v("}")]),t._v(" from Bulacan ")])}],j={name:"BannerComponent",components:{},data:function(){return{}}},k=j,M=Object(u["a"])(k,q,O,!1,null,null,null),P=M.exports,L={name:"Home",components:{Banner:P}},D=L,A=Object(u["a"])(D,S,E,!1,null,null,null),T=A.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-5",attrs:{id:"about"}},[a("br"),a("AboutMe"),a("Skills")],1)},$=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"p-4",attrs:{id:"about-holder"}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h5",{staticStyle:{color:"gray"}},[t._v("ABOUT "),a("span",{staticStyle:{color:"teal"}},[t._v("{ }")])]),a("h1",{staticClass:"mb-3",staticStyle:{color:"white"}},[t._v("LEARN MORE ABOUT ME")])]),a("br"),a("b-col",{staticClass:"text-center",attrs:{md:"4",cols:"12"}},[a("h1",{staticStyle:{color:"white"}},[t._v("Image Here")]),a("b-img")],1),a("b-col",{attrs:{md:"8",cols:"12"}},[a("h3",{staticStyle:{color:"teal"}},[t._v("Back-End Developer")]),a("p",[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa animi nemo quisquam quis explicabo aut soluta, accusamus quae nam fugiat saepe nisi. Labore consequatur, totam quaerat quasi animi in rerum.")]),a("b-row",[a("b-col",{attrs:{md:"6",xs:"12",id:"about-list-info"}},[a("ul",[a("li",[a("span",[t._v("{ }")]),t._v(" "),a("b",[t._v("Birthday:")]),t._v(" Sept 15, 1990 ")]),a("li",[a("span",[t._v("{ }")]),t._v(" "),a("b",[t._v("Phone:")]),t._v(" 0923-416-0404 ")]),a("li",[a("span",[t._v("{ }")]),t._v(" "),a("b",[t._v("City:")]),t._v(" Valenzuela City ")]),a("li",[a("span",[t._v("{ }")]),t._v(" "),a("b",[t._v("Age:")]),t._v(" 29 ")])])]),a("b-col",{attrs:{md:"6",xs:"12",id:"about-list-info"}},[a("ul",[a("li",[a("span",[t._v("{ }")]),t._v(" "),a("b",[t._v("Degree:")]),t._v(" Vocational ")]),a("li",[a("span",[t._v("{ }")]),t._v(" "),a("b",[t._v("Email:")]),t._v(" lucbanjep@gmail.com ")]),a("li",[a("span",[t._v("{ }")]),t._v(" "),a("b",[t._v("Freelance:")]),t._v(" Available ")])])])],1),a("br"),a("p",[t._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus corrupti facere ad sunt magnam quae esse ut magni, ipsam enim hic praesentium quisquam fuga voluptate cumque nostrum tempore modi eum.")]),a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam omnis unde, doloribus illum ullam eum, pariatur, amet esse dolores voluptatem libero ut consequatur architecto magni delectus dolorem aut vel?")])],1)],1)],1)},R=[],z={name:"AboutMeComponent",components:{},data:function(){return{}}},N=z,F=Object(u["a"])(N,I,R,!1,null,null,null),H=F.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"p-4",attrs:{id:"about-holder"}},[a("b-row",[a("b-col",[a("h5",{staticStyle:{color:"gray"}},[t._v("SKILLS "),a("span",{staticStyle:{color:"teal"}},[t._v("{ }")])])])],1),a("b-row",t._l(t.skills,(function(e,o){return a("b-col",{key:o,staticClass:"mb-4",attrs:{sm:"4",cols:"12"}},[a("b-card",{attrs:{"bg-variant":"dark","text-variant":"white"}},[a("b-card-text",{attrs:{id:"icon-box"}},[a("font-awesome-icon",{attrs:{icon:[e.prefix,e.icon],size:"2x",color:e.color}}),a("h5",{staticClass:"pl-3 mb-0"},[t._v(t._s(e.name))])],1)],1)],1)})),1)],1)},J=[],U={name:"SkillsComponent",components:{},data:function(){return{skills:[{name:"HTML",prefix:"fab",icon:"html5",color:"#DE4B25"},{name:"CSS",prefix:"fab",icon:"css3-alt",color:"#1A70B5"},{name:"Javascript",prefix:"fab",icon:"js",color:"#EED818"},{name:"PHP",prefix:"fab",icon:"php",color:"#4D588F"},{name:"Laravel",prefix:"fab",icon:"laravel",color:"#FF2D20"},{name:"Node.js",prefix:"fab",icon:"node-js",color:"#659B60"},{name:"Bootstrap",prefix:"fab",icon:"bootstrap",color:"#563D7C"},{name:"Vue",prefix:"fab",icon:"vuejs",color:"#41B883"},{name:"MYSql",prefix:"fas",icon:"database",color:"#005E86"},{name:"GIT",prefix:"fab",icon:"git",color:"#3B2C00"}]}}},Y=U,V=Object(u["a"])(Y,W,J,!1,null,null,null),G=V.exports,K={name:"About",components:{AboutMe:H,Skills:G},data:function(){return{}}},X=K,Q=Object(u["a"])(X,B,$,!1,null,null,null),Z=Q.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-5",attrs:{id:"resume"}},[a("br"),a("MyResume")],1)},et=[],at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"p-4",attrs:{id:"resume-holder"}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h5",{staticStyle:{color:"gray"}},[t._v("RESUME "),a("span",{staticStyle:{color:"teal"}},[t._v("{ }")])]),a("h1",{staticClass:"mb-5",staticStyle:{color:"white"}},[t._v("CHECK MY RESUME")])]),a("br"),a("b-col",{attrs:{cols:"12"}},[a("h3",{staticClass:"ml-5 mb-4",staticStyle:{color:"white"}},[t._v("Education")]),a("vue-timeline-update",{attrs:{date:new Date("2007-03-11"),title:"Meycauayan College",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa animi nemo quisquam quis explicabo aut soluta, accusamus quae nam fugiat saepe nisi. Labore consequatur, totam quaerat quasi animi in rerum.",category:"03 / 2007",icon:"school",color:"turquoise",theme:"dark"}}),a("vue-timeline-update",{attrs:{date:new Date("2016-04-09"),title:"ACLC CALOOCAN",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa animi nemo quisquam quis explicabo aut soluta, accusamus quae nam fugiat saepe nisi. Labore consequatur, totam quaerat quasi animi in rerum.",category:"04 / 2016",icon:"school",color:"turquoise",theme:"dark"}})],1),a("b-col",{staticClass:"mt-5",attrs:{cols:"12"}},[a("h3",{staticClass:"ml-5 mb-4",staticStyle:{color:"white"}},[t._v("Professional Experience")]),t._l(t.works,(function(t,e){return a("vue-timeline-update",{key:e,attrs:{date:new Date(t.date),title:t.title,description:"\n                    <p>12/2015 - 03/2016</p>\n                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa animi nemo quisquam quis\n                    explicabo aut soluta, accusamus quae nam fugiat saepe nisi. Labore consequatur, totam quaerat quasi animi in rerum.",category:t.category,icon:"mouse",color:"turquoise"}})}))],2)],1)],1)},ot=[],rt={name:"MyResumeComponent",components:{},data:function(){return{works:[{date:"2016-03-11",title:"IMERGEX I.T INC.",description:"",category:"Web Developer Intern"},{date:"2017-03-11",title:"4th SHIFT GLOBAL",description:"",category:"Web Developer"},{date:"2017-12-11",title:"IPARENT PORTAL INC",description:"",category:"Web Developer"},{date:"2020-04-06",title:"WTECH SOLUTIONS",description:"",category:"Jr. Back-end Developer"}]}}},nt=rt,it=Object(u["a"])(nt,at,ot,!1,null,null,null),st=it.exports,lt={name:"Resume",components:{MyResume:st},data:function(){return{}}},ct=lt,ut=Object(u["a"])(ct,tt,et,!1,null,null,null),mt=ut.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-5",attrs:{id:"portfolio"}},[a("br"),a("MyWorks")],1)},bt=[],dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"p-4",attrs:{id:"portfolio-holder"}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h5",{staticStyle:{color:"gray"}},[t._v("PORTFOLIO "),a("span",{staticStyle:{color:"teal"}},[t._v("{ }")])]),a("h1",{staticClass:"mb-3",staticStyle:{color:"white"}},[t._v("MY WORKS")])])],1),a("b-row",t._l(t.works,(function(e,o){return a("b-col",{key:o,staticClass:"mb-4",attrs:{lg:"4"}},[a("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"25rem"},attrs:{title:e.title,"img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[t._v(" "+t._s(e.description)+" ")]),a("b-card-text",[t._v(" "+t._s(e.language_used)+" ")]),a("b-button",{attrs:{variant:"primary"}},[t._v("View Project")])],1)],1)})),1)],1)},ft=[],vt={name:"PortfolioComponent",components:{},data:function(){return{works:[{title:"Project 1",description:"Description 1",language_used:"language"},{title:"Project 2",description:"Description 2",language_used:"language"},{title:"Project 3",description:"Description 3",language_used:"language"},{title:"Project 4",description:"Description 4",language_used:"language"}]}}},_t=vt,gt=Object(u["a"])(_t,dt,ft,!1,null,null,null),ht=gt.exports,yt={name:"Portfolio",components:{MyWorks:ht},data:function(){return{}}},Ct=yt,xt=Object(u["a"])(Ct,pt,bt,!1,null,null,null),wt=xt.exports,St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-5",attrs:{id:"contact"}},[a("br"),a("ContactComponent")],1)},Et=[],qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"p-4",attrs:{id:"contact-holder"}},[a("b-row",[a("b-col",[a("h5",{staticStyle:{color:"gray"}},[t._v("CONTACT "),a("span",{staticStyle:{color:"teal"}},[t._v("{ }")])]),a("h1",{staticClass:"mb-3",staticStyle:{color:"white"}},[t._v("CONTACT ME")])])],1),a("b-row",[a("b-col",{staticClass:"mb-4",attrs:{lg:"4"}},[a("b-card",{attrs:{"bg-variant":"dark","text-variant":"white"}},[a("b-card-text",{staticClass:"m-0",attrs:{id:"info-box"}},[a("div",{attrs:{id:"icon-holder"}},[a("font-awesome-icon",{attrs:{id:"media-icons",icon:["fas","envelope"],size:"lg"}})],1),a("h4",{staticClass:"pl-3",staticStyle:{color:"gray"}},[t._v("Email Me")])]),a("b-card-text",[a("p",{staticClass:"ml-5 pl-4"},[t._v("lucbanjep@gmail.com")])])],1)],1),a("b-col",{staticClass:"mb-4",attrs:{lg:"4"}},[a("b-card",{attrs:{"bg-variant":"dark","text-variant":"white"}},[a("b-card-text",{staticClass:"m-0",attrs:{id:"info-box"}},[a("div",{attrs:{id:"icon-holder"}},[a("font-awesome-icon",{attrs:{id:"media-icons",icon:["fas","share-alt"],size:"lg"}})],1),a("h4",{staticClass:"pl-3",staticStyle:{color:"gray"}},[t._v("Social Media")])]),a("b-card-text",[a("p",{staticClass:"ml-5 pl-4"},[a("a",{staticClass:"mr-2",attrs:{href:"#"}},[a("font-awesome-icon",{attrs:{icon:["fab","facebook-square"],size:"lg"}})],1),a("a",{staticClass:"mr-2",attrs:{href:""}},[a("font-awesome-icon",{attrs:{icon:["fab","github-square"],size:"lg"}})],1),a("a",{staticClass:"mr-2",attrs:{href:""}},[a("font-awesome-icon",{attrs:{icon:["fab","linkedin"],size:"lg"}})],1)])])],1)],1),a("b-col",{staticClass:"mb-4",attrs:{lg:"4"}},[a("b-card",{attrs:{"bg-variant":"dark","text-variant":"white"}},[a("b-card-text",{staticClass:"m-0",attrs:{id:"info-box"}},[a("div",{attrs:{id:"icon-holder"}},[a("font-awesome-icon",{attrs:{id:"media-icons",icon:["fas","mobile-alt"],size:"lg"}})],1),a("h4",{staticClass:"pl-3",staticStyle:{color:"gray"}},[t._v("Call / Text Me")])]),a("b-card-text",[a("p",{staticClass:"ml-5 pl-4"},[t._v("0923-416-0404")])])],1)],1),a("b-col",{attrs:{lg:"12"}},[a("ContactFormComponent")],1)],1)],1)},Ot=[],jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"bg-variant":"dark","text-variant":"white"}},[a("b-form",[a("b-row",[a("b-col",{attrs:{lg:"6"}},[a("b-form-group",{attrs:{label:"Email address:","label-for":"email",description:"I'll never share your email with anyone else."}},[a("b-form-input",{attrs:{autocomplete:"off",size:"lg",id:"email",type:"email",placeholder:"Enter email"}})],1)],1),a("b-col",{attrs:{lg:"6"}},[a("b-form-group",{attrs:{label:"Your Name:","label-for":"input-2"}},[a("b-form-input",{attrs:{autocomplete:"off",size:"lg",id:"input-2",required:"",placeholder:"Enter name"}})],1)],1)],1),a("b-form-group",{attrs:{label:"Subject","label-for":"input-2"}},[a("b-form-input",{attrs:{autocomplete:"off",size:"lg",id:"input-2",required:"",placeholder:"Enter Subject"}})],1),a("b-form-group",{attrs:{label:"Your Message:","label-for":"input-3"}},[a("b-textarea",{attrs:{size:"lg"}})],1),a("b-button",{attrs:{size:"lg",type:"submit",variant:"primary"}},[t._v("Submit")])],1)],1)},kt=[],Mt={name:"ContactFormComponent",component:{},data:function(){return{}}},Pt=Mt,Lt=Object(u["a"])(Pt,jt,kt,!1,null,null,null),Dt=Lt.exports,At={name:"ContactComponent",components:{ContactFormComponent:Dt},data:function(){return{}}},Tt=At,Bt=Object(u["a"])(Tt,qt,Ot,!1,null,null,null),$t=Bt.exports,It={name:"Contact",components:{ContactComponent:$t},data:function(){return{}}},Rt=It,zt=Object(u["a"])(Rt,St,Et,!1,null,null,null),Nt=zt.exports;o["default"].use(w["a"]);var Ft=[{path:"/",name:"Home",component:T},{path:"/about",name:"About",component:Z},{path:"/resume",name:"Resume",component:mt},{path:"/portfolio",name:"Portfolio",component:wt},{path:"/contact",name:"Contact",component:Nt}],Ht=new w["a"]({mode:"history",routes:Ft}),Wt=Ht,Jt=a("2f62");a("5935");o["default"].use(Jt["a"]);var Ut=new Jt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Yt=a("7cf2"),Vt=a("5f5b"),Gt=a("ecee"),Kt=a("c074"),Xt=a("f2d1"),Qt=a("ad3d");a("1157"),a("8049"),a("6672");Gt["c"].add(Xt["f"],Xt["b"],Xt["g"],Xt["k"],Xt["j"],Xt["h"],Xt["l"],Xt["d"],Kt["a"],Xt["a"],Kt["c"],Kt["b"],Kt["d"],Kt["e"],Xt["c"],Xt["i"],Xt["e"]),o["default"].component("font-awesome-icon",Qt["a"]),o["default"].use(Vt["a"]),o["default"].use(Yt["a"]),o["default"].config.productionTip=!1,new o["default"]({router:Wt,store:Ut,render:function(t){return t(x)}}).$mount("#app")},6672:function(t,e,a){},8049:function(t,e,a){},f6cc:function(t,e,a){}});
//# sourceMappingURL=app.25c0bc16.js.map