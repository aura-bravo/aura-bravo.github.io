(function(e){function t(t){for(var s,r,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);p&&p(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},i={app:0},n=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var p=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"026d":function(e,t,a){e.exports=a.p+"img/roma2.afc08ea3.jpg"},"034f":function(e,t,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},1413:function(e,t,a){},3951:function(e,t,a){"use strict";var s=a("6bc4"),i=a.n(s);i.a},4883:function(e,t,a){e.exports=a.p+"img/roma.0d6e95ca.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s,i,n,r,o=a("2b0e"),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{ref:"circleRef",staticClass:"pointer-circle"}),s("div",{ref:"pointer",staticClass:"pointer"}),s("div",{staticClass:"router__wave-transition"}),s("div",{staticClass:"router__wave-transition--looper"}),e._m(0),s("div",{staticClass:"max-bound"},[s("div",{staticClass:"main-container",class:{"main-container--not-home":"/"!=e.$route.path}},[s("header",[s("img",{staticClass:"logo",attrs:{alt:"Aura Bravo logo",src:a("7d42")}}),s("div",{staticClass:"nav-menu__trigger",class:{"nav-menu__trigger--triggered":e.$store.state.isMenuOpened},on:{click:e.openMenu}},[s("span")]),s("nav",{staticClass:"nav",class:{"nav--opened":e.$store.state.isMenuOpened}},[s("router-link",{attrs:{to:"/contact"}},[e._v("Contact")]),s("span"),s("router-link",{attrs:{to:"/about"}},[e._v("About")]),s("span"),s("router-link",{attrs:{to:"/"}},[e._v("Home")])],1)]),s("router-view")],1)])])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"scroll-measurer"},[a("p",[e._v("Scroll")]),a("span"),a("p",[e._v("Done")])])}],p=(a("a9e3"),a("cffa")),u={mounted:function(){this.resetMenu()},methods:{routerTransition:function(){var e=this,t=document.querySelector(".router__wave-transition"),a=document.querySelector(".router__wave-transition--looper");t.classList.contains("router__wave-transition--entering")?(a.classList.add("router__wave-transition--looper--looping"),setTimeout((function(){a.classList.remove("router__wave-transition--looper--looping")}),3e3)):t.classList.add("router__wave-transition--entering"),setTimeout((function(){e.startAnimation()}),900)},resetMenu:function(){document.body.classList.remove("no-scroll");var e=document.querySelector(".nav"),t=document.querySelector(".nav-menu__trigger");e.classList.contains("nav--opened")&&(e.classList.remove("nav--opened"),t.classList.remove("nav-menu__trigger--triggered"),this.$store.commit("toggleMenu",!1))},startAnimation:function(){setTimeout((function(){window.scrollTo(0,0)}),500),document.body.classList.remove("animations--started")}}},d=u,m=a("2877"),g=Object(m["a"])(d,s,i,!1,null,null,null),_=g.exports,v=a("f7fe"),h={mounted:function(){this.scrollMeasurer=document.querySelector(".scroll-measurer span")},data:function(){return{scrollMeasurer:void 0,minValue:0,maxValue:1,topScroll:0,bottomScroll:void 0}},methods:{init:function(){var e=this;this.bottomScroll=document.body.clientHeight-window.innerHeight,"/contact"!=this.$route.path?window.requestAnimationFrame((function(){return e.setHeight()})):this.scrollMeasurer.style.transform="scale(1)",this.resizeEvent()},setHeight:function(){var e=this;this.scrollMeasurer.style.transform="scaleY(".concat(this.mathMapping(window.scrollY,this.topScroll,this.bottomScroll,this.minValue,this.maxValue),")"),window.requestAnimationFrame((function(){return e.setHeight()}))},mathMapping:function(e,t,a,s,i){var n=(e-t)/(a-t)*(i-s)+s;return n},resizeEvent:v((function(){var e=this;window.addEventListener("resize",(function(t){e.init(),e.resetMenu()}))}),200)}},f=h,b=Object(m["a"])(f,n,r,!1,null,null,null),C=b.exports,w={name:"App",mounted:function(){this.addEvents(),this.routerTransition(),this.init()},data:function(){return{rawX:Number,rawY:Number,halfW:Number,halfH:Number}},mixins:[_,C],methods:{openMenu:function(){this.$store.commit("toggleMenu",!this.$store.state.isMenuOpened),this.$store.state.isMenuOpened?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")},addEvents:function(){var e=this;window.addEventListener("mousemove",(function(t){e.followPointer(t)}))},followPointer:function(e){this.rawX=e.clientX,this.rawY=e.clientY,this.halfW=window.innerWidth/2,this.halfH=window.innerHeight/2-window.scrollY,p["a"].to(this.$refs.circleRef,.5,{x:this.rawX-this.halfW,y:this.rawY-this.halfH}),p["a"].to(this.$refs.pointer,0,{x:this.rawX-this.halfW,y:this.rawY-this.halfH})}},watch:{"$route.path":function(){var e=this;setTimeout((function(){e.init()}),450)}}},y=w,j=(a("034f"),Object(m["a"])(y,c,l,!1,null,null,null)),I=j.exports,A=a("8c4f"),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("section",{ref:"sectionRef",staticClass:"section-spacer section-spacer--large scrolled__to"},[e._m(0)]),e._l(e.projectData,(function(t,s){return a("section",{key:t.id,ref:"sectionRef",refInFor:!0,staticClass:"section-spacer section-spacer--large",attrs:{index:s}},[a("router-link",{attrs:{to:"/"+t.id}},[a("div",{staticClass:"home__project-router"},[a("div",{staticClass:"home__project-wrapper",class:{"home__project-wrapper--reverse":!(s%2==0)}},[a("div",{staticClass:"home__project-image__wrapper section-image",class:{"background-image__wrapper--opened":1==e.imageReleased}},[a("div",{staticClass:"home__project-background-image",style:{backgroundImage:"url("+t.previewImage+")"}})]),a("div",{staticClass:"home__project-info__wrapper"},[a("h2",{staticClass:"h1 title__wrapper"},[a("div",{staticClass:"title-animation"},[e._v(e._s(t.title))])]),a("div",{staticClass:"home__project-number__wrapper"},[a("p",{staticClass:"home__project-number"},[e._v("0"+e._s(s+1))]),a("div",{staticClass:"home__project-line"})])])])])])],1)}))],2)},E=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hero-wrapper"},[a("div",{staticClass:"hero-info__wrapper"},[a("h1",{staticClass:"title__wrapper"},[a("div",{staticClass:"title-animation"},[e._v("Aura Bravo.")])]),a("p",[e._v(" Hi, my name is Aura Bravo. I'm an Industrial Designer passionate about digital media and interfaces, it's design and development. Here is some of my work. ")])]),a("div",{staticClass:"hero-image__wrapper"},[a("div",{staticClass:"hero-background-image section-image"})])])}],T=a("2f62"),M=a("66c0");o["a"].use(T["a"]);var k,x,L,R,O=new T["a"].Store({state:{data:M,projectIndex:0,isMenuOpened:!1},mutations:{toggleMenu:function(e,t){e.isMenuOpened=t}},actions:{},modules:{}}),D=(a("ac1f"),a("1276"),{mounted:function(){var e=this;setTimeout((function(){e.breakAllTitles()}),450)},methods:{breakAllTitles:function(){for(var e=document.querySelectorAll(".title-animation"),t=0;t<e.length;t++){var a=e[t];this.createWords(a)}},createWords:function(e){var t=e,a=t.innerHTML,s=a.split(" "),i=.3;t.innerHTML="";for(var n=0;n<s.length;n++)if(""==!s[n]){var r=s[n].split(""),o=document.createElement("span"),c=document.createElement("span");o.style.display="inline-block";for(var l=document.createTextNode(" "),p=0;p<r.length;p++){var u=r[p],d=document.createElement("span"),m=document.createTextNode(u);d.appendChild(m),o.appendChild(d),this.addDelay(d,i),i+=.075}c.appendChild(l),t.appendChild(o),t.appendChild(c)}this.startAnimations()},addDelay:function(e,t){e.style.transitionDelay=t+"s"},startAnimations:function(){setTimeout((function(){document.body.classList.add("animations--started")}),450)}}}),H=D,P=Object(m["a"])(H,k,x,!1,null,null,null),q=P.exports,F=(a("4160"),a("159b"),{created:function(){},mounted:function(){this.sections=document.querySelectorAll("section")},data:function(){return{sections:void 0}},methods:{sectionCatcher:v((function(){this.sections.forEach((function(e){e.classList.contains("scrolled__to")||window.scrollY>e.offsetTop-window.innerHeight/1.2&&e.classList.add("scrolled__to")}))}),100),addScrolledClass:function(){var e=this;window.addEventListener("scroll",(function(){e.sectionCatcher()}))}}}),U=F,G=Object(m["a"])(U,L,R,!1,null,null,null),V=G.exports,W={name:"Home",data:function(){return{projectData:this.$store.state.data,imageReleased:!1,store:O}},mixins:[q,_,V],components:{},mounted:function(){var e=this;this.$nextTick((function(){return e.addScrolledClass()}))},beforeRouteLeave:function(e,t,a){this.routerTransition(),setTimeout((function(){a()}),1400)}},Y=W,B=(a("78c8"),Object(m["a"])(Y,S,E,!1,null,null,null)),X=B.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.projectData,(function(t,s,i){return a("div",{key:i,staticClass:"project-container"},[e.$route.path=="/"+t.id?a("div",{staticClass:"project-wrapper"},[a("transition",{attrs:{name:"fade"}},[a("section",{staticClass:"section-spacer section-spacer--large scrolled__to"},[a("div",{staticClass:"hero-wrapper"},[a("div",{staticClass:"hero-info__wrapper"},[a("h2",{staticClass:"h1 title__wrapper"},[a("div",{staticClass:"title-animation"},[e._v(" "+e._s(t.title)+" ")])]),a("p",[e._v(e._s(t.description))])])])])]),a("section",{staticClass:"section-spacer"},[a("div",{staticClass:"project__cover-image__wrapper"},[a("img",{staticClass:"project__cover-image",attrs:{src:t.coverImage}})])]),a("section",{staticClass:"section-spacer"},[a("div",{staticClass:"project-branding__wrapper"},[a("div",{staticClass:"project-branding__color"},[a("ul",e._l(t.colors,(function(t,s,i){return a("li",{key:i},[a("div",{style:{backgroundColor:t}}),a("p",[e._v(e._s(t))])])})),0)]),a("div",{staticClass:"project-branding__typography__wrapper"},[e._l(t.fonts,(function(t,s,i){return a("div",{key:i,staticClass:"project-branding__typography"},[a("div",{staticClass:"project-branding__typography-title",style:{fontFamily:t+", sans-serif"}},[e._v(" "+e._s(t)+" ")]),a("div",{staticClass:"project-branding__typography-text",style:{fontFamily:t+", sans-serif"}},[a("p",{style:{fontFamily:t+", sans-serif"}},[e._v(" ABCDEFGHIJKLMNOPQRSTUVWXYZ ")]),a("p",{style:{fontFamily:t+", sans-serif"}},[e._v(" abcdefghijklmnopqrstuvwxyz ")])])])})),e._l(t.fonts,(function(s,i,n){return a("div",{key:n,staticClass:"project-branding__typography"},[t.fonts.length<2?a("div",{staticClass:"project-branding__typography-text",style:{fontFamily:s+", sans-serif"}},[a("p",{style:{fontFamily:s+", sans-serif",fontWeight:400}},[e._v(" ABCDEFGHIJKLMNOPQRSTUVWXYZ ")]),a("p",{style:{fontFamily:s+", sans-serif",fontWeight:400}},[e._v(" abcdefghijklmnopqrstuvwxyz ")])]):e._e(),t.fonts.lenght>1?a("div",{staticClass:"project-branding__typography-text project-branding__typography-text--light",style:{fontFamily:s+", sans-serif",fontWeight:300}}):e._e()])}))],2)])]),a("section",{staticClass:"section-spacer"},[a("div",{staticClass:"project__images-grid"},[a("div",{staticClass:"project__images-grid__image"},[a("img",{attrs:{src:t.collageImage1,alt:"",srcset:""}})]),a("div",{staticClass:"project__images-grid__image"},[a("img",{attrs:{src:t.collageImage2,alt:"",srcset:""}})]),a("div",{staticClass:"project__images-grid__image"},[a("img",{attrs:{src:t.collageImage3,alt:"",srcset:""}})]),a("div",{staticClass:"project__images-grid__image"},[a("img",{attrs:{src:t.collageImage4,alt:"",srcset:""}})])])]),a("section",{staticClass:"section-spacer section-spacer--large"},[a("div",{staticClass:"project__full-homepage__mockup"},[a("span",{style:{backgroundColor:t.colors[0]}}),a("div",{staticClass:"project__full-homepage__image"},[a("img",{attrs:{src:t.fullHomePage,alt:"",srcset:""}})])])])],1):e._e()])})),0)},K=[],J={name:"Project",data:function(){return{projectData:this.$store.state.data,projectIndex:this.$store.state.projectIndex,store:O}},mounted:function(){var e=this;this.$nextTick((function(){return e.addScrolledClass()}))},mixins:[q,_,V],beforeRouteLeave:function(e,t,a){this.routerTransition(),setTimeout((function(){a()}),1400)}},Z=J,z=(a("9d2e"),Object(m["a"])(Z,N,K,!1,null,"3c36e41c",null)),Q=z.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ee=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("section",{staticClass:"section-spacer section-spacer--large scrolled__to"},[s("div",{staticClass:"hero-wrapper"},[s("div",{staticClass:"numeration__wrapper"},[s("p",{staticClass:"home__project-number"},[e._v("01")])]),s("div",{staticClass:"hero-info__wrapper"},[s("h1",{staticClass:"h1 title__wrapper"},[s("div",{staticClass:"title-animation"},[e._v("About me")])]),s("h2",[e._v(" I'm Aura Bravo, an Industrial Designer passionate about interface design. ")]),s("p",[e._v(" I lived in Mexico City for six months, where I worked as a design intern in Moises Hernandez Design Studio. After finishing my internship I became more intrested in digital interfaces, it’s design and development. ")]),s("p",[e._v(" After graduating College in 2018 I dedicated myself to do two things I love, studying and learning new things, and traveling. Then I moved to Medellín where I work as an UI Designer. ")]),s("p",[e._v(" I love challenging myself and be constantly exploring and learning new stuff. ")]),s("div",{staticClass:"subsection-info__wrapper m3"},[s("div",{staticClass:"subsection-info__content"},[s("h3",[e._v("Experience")]),s("p",[e._v(" UX / UI Designer at Dayvo Sistemas"),s("br"),e._v("Medellín, Colombia"),s("br"),s("em",[e._v("AUGUST 2019 - JUNE 2020")])]),s("p",[e._v(" Designer at ORiGEN by Mary Rocío Pérez"),s("br"),e._v("Cali, Colombia"),s("br"),s("em",[e._v("MARCH 2019 - MAY 2020")])]),s("p",[e._v(" Designer at Moises Hernández Design Studio"),s("br"),e._v("Mexico City, Mexico"),s("br"),s("em",[e._v("JANUARY 2018- JULY 2018")])]),s("p",[e._v(" Innlab assistant at Universidad Icesi"),s("br"),e._v("Cali, Colombia"),s("br"),s("em",[e._v("JULY 2017- DECEMBER 2017")])])]),s("div",{staticClass:"subsection-info__content"},[s("h3",[e._v("Study and Honors")]),s("p",[e._v(" Industrial Designer"),s("br"),e._v("universidad Icesi / Cali, Colombia"),s("br"),s("em",[e._v("2013 - 2018")])]),s("p",[e._v("Graduated with honors"),s("br"),s("em",[e._v("MAGNA CUM LAUDE")])]),s("p",[e._v("Honor Roll"),s("br"),s("em",[e._v("2013 - 2018")])]),s("p",[e._v(" Honor Scholarship"),s("br"),s("em",[e._v("I, III, IV, V, VII and X semesters")])]),s("p",[e._v("Cambridge English Scale Score "),s("em",[e._v(" C1")])])])])])])]),s("section",{staticClass:"section-spacer section-spacer--large"},[s("div",{staticClass:"hero-wrapper"},[s("div",{staticClass:"numeration__wrapper"},[s("p",{staticClass:"home__project-number"},[e._v("02")])]),s("div",{staticClass:"hero-info__wrapper"},[s("div",{staticClass:"subsection-info__wrapper"},[s("div",{staticClass:"subsection-info__content"},[s("h3",[e._v("Skills and Tools")]),s("p",[e._v("PHOTOSHOP | ILLUSTRATOR | INDESIGN | AFTER EFECTS")]),s("p",[e._v("HTML | CSS | JAVASCRIPT")]),s("p",[e._v("SOLIDWORKS | RHINOCEROS | VRAY")]),s("p",[e._v("XD | FIGMA | INVISION")]),s("p",[e._v("UX / UI DESIGN | USER RESEARCH | GRAPHIC DESIGN")])]),s("div",{staticClass:"subsection-info__content"},[s("h3",[e._v("Extracurriculars")]),s("p",[e._v(" Member of IxDA Medellín, a member-supported organization dedicated to the discipline of interaction design."),s("br"),s("em",[e._v("2020")])]),s("p",[e._v("Archery National team"),s("br"),s("em",[e._v("2013 - 2017")])]),s("p",[e._v("Team Champion:")]),s("ul",[s("li",[e._v("Archery World Cup 2016"),s("br"),s("em",[e._v("Medellín, Colombia")])]),s("li",[e._v("Archery World Cup 2015"),s("br"),s("em",[e._v("Medellín, Colombia")])]),s("li",[e._v(" Archery World Championships 2013"),s("br"),s("em",[e._v("Belek, Turkey")])]),s("li",[e._v("Juegos Bolivarianos 2013"),s("br"),s("em",[e._v("Trujillo, Perú")])])])])])])])]),s("section",{staticClass:"section-spacer section-spacer--large"},[s("div",{staticClass:"hero-wrapper"},[s("div",{staticClass:"numeration__wrapper"},[s("p",{staticClass:"home__project-number"},[e._v("03")])]),s("div",{staticClass:"hero-info__wrapper"},[s("div",{staticClass:"subsection-info__wrapper-hobbies"},[s("div",{staticClass:"subsection-hobbies__content"},[s("h3",[e._v("Hobbies")]),s("p",[e._v(" Besides archery - that was a huge part of my life - I love climbing, reading, drawing and coffee. Also one of my big passions is traveling and, although I'm not an expert I enjoy very much photographing all those experiences and places. ")])]),s("div",{staticClass:"about__images-grid"},[s("div",{staticClass:"about__images-grid__image "},[s("img",{attrs:{src:a("d9d6"),alt:"",srcset:""}})]),s("div",{staticClass:"about__images-grid__image "},[s("img",{attrs:{src:a("9227"),alt:"",srcset:""}})])]),s("div",{staticClass:"about__images-grid"},[s("div",{staticClass:"about__images-grid__image "},[s("img",{attrs:{src:a("4883"),alt:"",srcset:""}})]),s("div",{staticClass:"about__images-grid__image e"},[s("img",{attrs:{src:a("026d"),alt:"",srcset:""}})])])])])])])])}],te={name:"About",mixins:[q,_,V],mounted:function(){var e=this;this.$nextTick((function(){return e.addScrolledClass()}))},beforeRouteLeave:function(e,t,a){this.routerTransition(),setTimeout((function(){a()}),1400)}},ae=te,se=(a("9bdf"),Object(m["a"])(ae,$,ee,!1,null,"54e9f640",null)),ie=se.exports,ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact"},[a("section",{ref:"sectionRef",staticClass:"section-spacer section-spacer--large scrolled__to"},[e._m(0)])])},re=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hero-wrapper"},[a("div",{staticClass:"hero-info__wrapper"},[a("h1",{staticClass:"h1 title__wrapper"},[a("div",{staticClass:"title-animation"},[e._v("Let's talk")])]),a("p",[a("a",{staticClass:"contact-info",attrs:{href:"mailto:bravo.aura95@gmail.com"}},[e._v("bravo.aura95@gmail.com")])]),a("p",[a("a",{staticClass:"contact-info",attrs:{href:"tel:+573148450663"}},[e._v("+57 314 845 0663")])])])])}],oe={name:"Contact",mixins:[q,_],beforeRouteLeave:function(e,t,a){this.routerTransition(),setTimeout((function(){a()}),1400)}},ce=oe,le=(a("3951"),Object(m["a"])(ce,ne,re,!1,null,null,null)),pe=le.exports;o["a"].use(A["a"]);var ue=[{path:"/",name:"Home",component:X},{path:"/about",name:"About",component:ie},{path:"/contact",name:"Contact",component:pe},{path:"/:name",name:"Project",component:Q}],de=new A["a"]({mode:"hash",routes:ue}),me=de;o["a"].config.productionTip=!1,new o["a"]({router:me,store:O,render:function(e){return e(I)}}).$mount("#app")},"66c0":function(e){e.exports=JSON.parse('[{"id":"yoga-isaac-ambel","title":"Yoga Isaac Ambel","description":"Isaac Ambel Yoga is a Yoga instructor based in Badajoz, Spain. The objective of the page was to share his trajectory as well as his approach to yoga, and to give information about the classes he impart in two different yoga centers in the city. The client wanted his web page to reflect peace and calm, also to show yoga both as a physical and a spiritual activity, but always keeping a modern and clean look.","previewImage":"./assets/img/moc2.jpg","mainImage":"./assets/img/moc12.jpg","coverImage":"./assets/img/Recurso2logo.png","colors":["#BBBECC","#7994BF","#83CDCE","#262C30"],"fonts":["Poppins"],"collageImage1":"../assets/img/MOC1.jpg","collageImage2":"../assets/img/moc6.jpg","collageImage3":"../assets/img/moc3.jpg","collageImage4":"../assets/img/moc4.jpg","fullHomePage":"../assets/img/moc5.png"},{"id":"infinite-love","title":"Infinite Love","description":"Infinite Love is a Jewelery brand based in Trujillo Perú, inspired by brands like Cartier, Graff and Gucci. The client wanted an elegant but modern page.  A very clean and clear website that let the product take protagonism and transmit luxuriousness. The colors were choosen according to the logo and the typographies give the design a delicate and sophisticated touch.","previewImage":"./assets/img/moc10.jpg","mainImage":"../assets/img/moc14.jpg","coverImage":"../assets/img/moc11.jpg","colors":["#FFFFFF","#D2B246","#7E7E7E","#000000"],"fonts":["Playfair Display","Belleza"],"collageImage1":"../assets/img/moc10.jpg","collageImage2":"../assets/img/moc8.jpg","collageImage3":"../assets/img/moc9.jpg","collageImage4":"../assets/img/moc13.jpg","fullHomePage":"../assets/img/MOC15.png"},{"id":"llama-path","title":"Llama Path","description":"Llama Path is a professional tour operator based in Cusco, Peru. They offer a variety of treks and tours all over Peru, including the Inca Trail and a variety of alternative treks to Machu Picchu. They wanted to keep the structure and colors from their old website but giving a much modern and cleaner look.","previewImage":"./assets/img/llama_path_1.jpg","mainImage":"../assets/img/llama_path_1.jpg","coverImage":"../assets/img/portada_llama_path.jpg","colors":["#FFFFFF","#D91111","#FCB040","#C0C0C0"],"fonts":["Poppins"],"collageImage1":"../assets/img/llama_path_1.jpg","collageImage2":"../assets/img/llama_path_2.jpg","collageImage3":"../assets/img/llama_path_3.jpg","collageImage4":"../assets/img/llama_path_4.jpg","fullHomePage":"../assets/img/full_home_llama_path.jpg"}]')},"6bc4":function(e,t,a){},7507:function(e,t,a){},"78c8":function(e,t,a){"use strict";var s=a("7507"),i=a.n(s);i.a},"7d42":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAABFCAYAAAB0fqkRAAAACXBIWXMAAAsSAAALEgHS3X78AAAEtElEQVR4nO2d7VHbQBCGd5n8xx3EqQB3gFMB6QB3gEtwOiAVxO6AVBDTAXQAHZgKLnPMSihC0r0n3Ycl7TvjYcBCd7rVc3e7K6/ZGEM5xcxLY8xL1k5MTBc5L8calIiemHkxtmFl5jUzG+C1S923rEYloi0RXcpPVSBlM6rQuZFft2Ok9VyVk9SCUlJawyqLUYXKuhGV1kDKRWqV0kL29x+Z+jMp5TLqpuXvyXeKU1RyozKzNejXlre/yvuqAcpBqotGpXWgkhrVQWkhS+s6Xa+mp9SkIhS+2ShTgr5MVsmMKvS5KLW6N8acEnRpsvqS8MJQSu8T9OVsJUuUa7NoZ7K9MaZxRktiVKH0Gjh0r5TSAxGtiOiu4xg7lnfM/MfeAPUxSzX9ojvaWVNqZQ1kjLHBme8yc3XphoiO9UhcdKMy8wqk9KB51Q8ZY45EhHgBV3aGq/4hBalooF7905pkzTwAh94IPO+KalRJgt8Chyql7dqDx5Vx89ikovShHZ+dZBpGVE7V0YzqQemjR8dVgGKSigbmdS0No9KtiWLUliR4k5RSh5gZzTGXgYhYpDYlwZs0e78UEDrjlfuS4Eb1oPTVGPMQuv0pSUKGN8Al/ap6DzFI3YCU6lraIWbegjPZQSJQpWLEflFK1Y1pkHgNeyAK9yYZrU9wBDUqmAQnpbRT1qhHebXJboqObcmP0KSi6TWvtVTW6WVbqmlKEm9gkEcQbE31oLRPEhxdX2YvCrxRQrbefZPg1qjX+uwSpiBG9UiCe1MqM0Cxm9a1GFAoUmMmwavnVloBDTaqB6WHnpTW12l92NuhEKTGTII3nftWfDlViwYZVQYXCWN5J8FlBrhqeVvX1g4NJRUd3D5G6PofpbVDvY3qmQTvQ6lrnVZaWzSE1JiUIpshpbVFvcKEErZDkrd9k+B7cBbYTW03LDeq62Y9dYZMbR0l35cMpgFe6z7nlzaOYBvLvm0MecmDXkj/dp7XvRR//uQ470lu/k/X710cSyh9AXKmz8aYleOYrnbW4NS9z5HGk/79BQ792ZQeA86/EOO6Ziwbet1Wx6DP9JvkURWPJ9QnKQnUbJiZHIa1tvhtjysM22ejpEnwhDLG2D3DI9DifbFx9DJqLbjeJXU3wgrZDF4W4+5LKmIspTSwxM9HaLVu3gI2qkcSXA0aR6hruPIhVT8Jnldhjar1GkYlePpVSvML9fmPTqNqvYazEeqzPyGkar2GzPLMW586jar1Gs5GiEfxhvqpZ1evwd5oYO36SbhWch0IWNsSLEe2AMlC7DNkSNAMzmJsWZrK+RdCKNLGpvq/XaSec70GtG+jK+Fu10/5howXIENjK7d8q0fwGrM0516vwbbJzI/AtGRLuI/Rd3Z+nqZr3NtSb2Oo17AD8pnFFy6MJsEg6+KgTeen6Xcs9RqkbSTIPbsvXGhaU8dUrwEhcHZfj/KfUcdWr0FpbVad1DEmwZXWmupGHd2jKkLrM3DobGgtjTryeg3I+j4bWqukRqnXkEIyc7wCTc2C1nejRq7XkEq6tooKUmPWa0gipfVDFzHrNWTQ7GklCROu0YeFE/RnkCytUnXTRWLvj4NUZG9wZNzS5pmJ6B+v951uq/5OYwAAAABJRU5ErkJggg=="},"85ec":function(e,t,a){},9227:function(e,t,a){e.exports=a.p+"img/puebla.95c579ef.jpg"},"9bdf":function(e,t,a){"use strict";var s=a("fdb7"),i=a.n(s);i.a},"9d2e":function(e,t,a){"use strict";var s=a("1413"),i=a.n(s);i.a},d9d6:function(e,t,a){e.exports=a.p+"img/guajira.d521452e.jpg"},fdb7:function(e,t,a){}});
//# sourceMappingURL=app.f62d8ad0.js.map