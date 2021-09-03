(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>T});var r=t(645),o=t.n(r),a=t(667),i=t.n(a),c=new URL(t(425),t.b),s=new URL(t(948),t.b),l=new URL(t(706),t.b),d=new URL(t(660),t.b),p=new URL(t(369),t.b),u=new URL(t(965),t.b),f=new URL(t(545),t.b),m=new URL(t(830),t.b),b=new URL(t(302),t.b),h=new URL(t(998),t.b),x=o()((function(n){return n[1]})),g=i()(c),w=i()(s),v=i()(l),y=i()(d),C=i()(p),E=i()(u),k=i()(f),A=i()(m),S=i()(b),N=i()(h);x.push([n.id,"/* josefin-sans-100 - latin */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 100;\n  src: local(''),\n       url("+g+") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n       url("+w+") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* josefin-sans-300 - latin */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 300;\n  src: local(''),\n       url("+v+") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n       url("+y+") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* josefin-sans-regular - latin */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(''),\n       url("+C+") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n       url("+E+") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n/* josefin-sans-700 - latin */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: local(''),\n       url("+k+") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n       url("+A+") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n  background-image: \n    linear-gradient(to bottom, rgba(255, 250, 245, 0.9), rgba(0, 0, 0, 0)),\n    url("+S+");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  font-family: 'Josefin Sans', Arial, Helvetica, sans-serif;\n}\n\nbody {\n  width: 95%;\n  height: 98%;\n  max-width: 900px;\n  margin: auto;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n}\n\n#header {\n  width: 70%;\n  margin: 4% auto 2% auto;\n}\n\n#header img {\n  filter: drop-shadow(0 1px 6px rgb(255, 250, 245));\n}\n\nnav {\n  display: flex;\n  position: relative;\n  width: 75%;\n  min-width: 300px;\n  justify-content: space-around;\n  margin: 0 auto;\n}\n\n.nav-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Josefin Sans';\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 20px;\n  color: rgb(45, 30, 25);\n  width: 1fr;\n  min-width: 100px;\n  margin: 0;\n  padding: 7px 0 3px 0;\n  border: none;\n  background: none;\n  transition: \n    color 0.5s,\n    transform 0.15s;\n}\n\n.active {\n  color: rgb(255, 250, 245);\n  font-weight: 400;\n}\n\n.slider {\n  position: absolute;\n  z-index: -1;\n  width: calc(100% / 3);\n  height: 100%;\n  transition: all 0.5s;\n  display: flex;\n}\n\n.core {\n  background-color: rgba(45, 30, 25, 0.6);\n  border-radius: 9px 9px 0 0;\n  flex-grow: 1;\n}\n\n.inner-corner {\n  z-index: 1;\n  width: 9px;\n  height: 9px;\n  fill: rgba(45, 30, 25, 0.6);\n  flex-grow: 0;\n  align-self: flex-end;\n}\n\n.home {\n  left: 0;\n}\n\n.menu {\n  left: calc(100% / 3);\n}\n\n.contact {\n  left: calc(100% * 2 / 3);\n}\n\n#backdrop {\n  width: 100%;\n  flex-grow: 1;\n  border-radius: 9px;\n  padding: 0;\n  background-image: \n    linear-gradient(to bottom, rgba(45, 30, 25, 0.6), rgba(0, 0, 0, 0) 85%);\n  overflow: hidden;\n  display: flex;\n  align-items: stretch;\n}\n\n#scroll-box {\n  -webkit-mask-image: \n    linear-gradient(\n      to bottom, \n      transparent 12px, \n      black 24px, \n      black calc(100% - 24px), \n      transparent calc(100% - 12px)\n    );\n  mask-image: \n    linear-gradient(\n      to bottom, \n      transparent 12px, \n      black 24px, \n      black calc(100% - 24px), \n      transparent calc(100% - 12px)\n    );\n  width: 100%;\n  padding: 24px;\n  overflow: auto;\n  position: relative;\n}\n\n/* fades content in and out on tab change */\n#scroll-box {\n  transition: opacity 0.3s;\n}\n\n#home-content {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  width: 100%;\n}\n\n#home-copy {\n  flex-basis: 50%;\n}\n\nh3 {\n  color: rgb(55, 210, 215);\n  font-size: clamp(28px, 5.6vw, 42px); /* elimnates media queries for font-size! */\n  margin: 0 0 6px 0;\n  font-weight: 400;\n  text-align: center;\n  text-shadow: 0 1px 3px rgba(45, 30, 25, 0.9);\n}\n\nspan {\n  display: block;\n  text-align: justify;\n  font-size: 20px;\n  line-height: 32px;\n  font-weight: 300;\n  color: rgb(255, 250, 245);\n  text-shadow: 0 1px 3px rgba(45, 30, 25, 0.9);\n}\n\n.image-wrap {\n  height: 100%;\n  flex-basis: 50%;\n  position: relative;\n  filter: sepia(0.1);\n  border-radius: 6px;\n  overflow: hidden;\n  filter: drop-shadow(0 3px 12px rgba(45, 30, 25, 0.6));\n}\n\nimg {\n  width: 100%;\n  display: block;\n}\n\n#menu-content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 36px;\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.menu-item h3 {\n  flex-basis: 50%;\n}\n\n#contact-content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n#phone {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  flex: 1 1 auto;\n  color: rgb(255, 250, 245);\n  font-size: 24px;\n  font-weight: 300;\n  margin: 36px 0;\n  text-shadow: 0 1px 3px rgba(45, 30, 25, 0.9);\n}\n\n#phone::before {\n  display: block;\n  content: '';\n  width: 20px;\n  height: 20px;\n  margin-right: 20px;\n  background: url("+N+");\n  transform: translateY(-1px);\n  filter: drop-shadow(0 1px 3px rgba(45, 30, 25, 0.9));\n}\n\nform {\n  padding: clamp(24px, 4.8vw, 48px);\n  flex: 1 1 auto;\n  border-top: 1px solid rgba(255, 250, 245, 0.6);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: center;\n}\n\ntextarea {\n  resize: none;\n}\n\ntextarea,\ninput[type=text] {\n  width: 100%;\n  padding: 9px;\n  font-family: 'Josefin Sans';\n  font-size: 16px;\n  font-weight: 300;\n  color: rgb(255, 250, 245);\n  border: none;\n  border-radius: 6px;\n  background-color: rgba(45, 30, 25, 0.4);\n  transition: background-color 0.15s;\n}\n\ntextarea::placeholder,\ninput[type=text]::placeholder {\n  color: rgba(255, 250, 245, 0.9);\n}\n\ntextarea:focus,\ninput[type=text]:focus {\n  outline: none;\n  background-color: rgba(45, 30, 25, 0.6);\n}\n\n#send-btn {\n  padding: 9px 0 6px 0;\n  width: 100px;\n  font-family: 'Josefin Sans';\n  font-size: 14px;\n  font-weight: 400;\n  color: rgb(255, 250, 245);\n  border: none;\n  border-radius: 6px;\n  background-color: rgba(45, 30, 25, 0.6);\n  transition: background-color 0.15s;\n}\n\n/* Stops sticky hover on mobile */\n@media (hover: hover) and (pointer: fine) {\n  button:hover {\n    cursor: pointer;\n  }\n\n  .nav-btn:not(.active):hover {\n    transform: translateY(-3px);\n  }\n\n  #send-btn:hover {\n    color: rgb(45, 30, 25);\n    background-color: rgba(255, 250, 245, 0.6);\n  }\n}\n\n/* Stops tap highlighting on mobile */\ninput,\ntextarea,\nbutton,\nselect,\na {\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n\n/* use custom scrollbar except in phone territory */\n@media (min-width: 500px) {\n  #scroll-box::-webkit-scrollbar {\n    width: 12px;\n  }\n  \n  #scroll-box::-webkit-scrollbar-track {\n    background: transparent;\n  }\n  \n  #scroll-box::-webkit-scrollbar-button {\n    display: block;\n    width: 12px;\n    height: 12px;\n    background: transparent;\n  }\n  \n  #scroll-box::-webkit-scrollbar-thumb {\n    background-color: rgba(255, 250, 245, 0.5);\n    border: 4px solid transparent;\n    border-radius: 9px;\n    background-clip: content-box;\n  }\n\n  #scroll-box {\n    scrollbar-color: rgba(255, 250, 245, 0.5) transparent;\n  }\n}\n\n@media (min-width: 750px) {\n  #home-content {\n    flex-direction: row;\n  }\n\n  #menu-content {\n    gap: 0;\n  }\n\n  .menu-item {\n    width: 100%;\n    flex-direction: row;\n    justify-content: stretch;\n  }\n\n  #contact-content {\n    flex-direction: row;\n    align-items: center;\n  }\n\n  form {\n    padding: 48px 48px 48px 60px;\n    border-top: none;\n    border-left: 1px solid rgba(255, 250, 245, 0.6);\n  }\n\n  .image-wrap {\n    margin: 24px;\n  }\n}",""]);const T=x},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(e[u].references++,e[u].updater(f)):e.push({identifier:p,updater:o(f,r),references:1}),i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},948:(n,e,t)=>{n.exports=t.p+"e8deaea768b5832996db.woff"},425:(n,e,t)=>{n.exports=t.p+"4a8c901d4204c9cdd31a.woff2"},660:(n,e,t)=>{n.exports=t.p+"72768801c5ac65ff23ad.woff"},706:(n,e,t)=>{n.exports=t.p+"2efc0cf33609a20c10df.woff2"},830:(n,e,t)=>{n.exports=t.p+"fa2ba81c5bc1a6436e16.woff"},545:(n,e,t)=>{n.exports=t.p+"476ecfa320cc72baac35.woff2"},965:(n,e,t)=>{n.exports=t.p+"cc053ba1ba1487857fcd.woff"},369:(n,e,t)=>{n.exports=t.p+"099aa5d9d9840cc1d414.woff2"},378:(n,e,t)=>{n.exports=t.p+"70808c416296b40466fa.jpg"},374:(n,e,t)=>{n.exports=t.p+"efa4ca64e2eecfac0377.svg"},404:(n,e,t)=>{n.exports=t.p+"2d1ec316d8024a08b92c.jpg"},933:(n,e,t)=>{n.exports=t.p+"3487ad82f647ce54484b.jpg"},539:(n,e,t)=>{n.exports=t.p+"5ac3294a91804478fb21.jpg"},941:(n,e,t)=>{n.exports=t.p+"2a99a399a101140152a0.jpg"},998:(n,e,t)=>{n.exports=t.p+"bf8043935335fb91d12f.svg"},100:(n,e,t)=>{n.exports=t.p+"ddb73393ac63b2d3fabd.jpg"},677:(n,e,t)=>{n.exports=t.p+"bda243ac2f1cfb779a5b.jpg"},491:(n,e,t)=>{n.exports=t.p+"cc1a1ea4443b33e7ea74.jpg"},647:(n,e,t)=>{n.exports=t.p+"dc3aabd9d2e46ef1f427.jpg"},302:(n,e,t)=>{n.exports=t.p+"2bbc07d93b728e674657.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var b=t(374);var h=t(677);const x=function(){const n=document.getElementById("scroll-box"),e=function(){const n=document.createElement("div");n.id="home-content";const e=document.createElement("section");e.id="home-copy";const t=document.createElement("h3");t.innerText="piece of cake";const r=document.createElement("span");r.innerText="Whether you want a classic recipe or a custom flavor combo, Cara's Kitchen has you covered. Choose from our esteemed lineup of gourmet cheesecakes or tell us a flavor palette you have in mind and we'll deliver an unforgettable dessert for any occasion!";const o=document.createElement("div");o.className="image-wrap";const a=document.createElement("img");return a.src=h,a.id="slices",e.appendChild(t),e.appendChild(r),o.appendChild(a),n.appendChild(e),n.appendChild(o),n}();n.appendChild(e),n.style.opacity=1};var g=t(933),w=t(404),v=t(302),y=t(378),C=t(491),E=t(100),k=t(647),A=t(539),S=t(941);function N(n,e){const t=document.createElement("div");t.className="menu-item";const r=document.createElement("h3");r.innerText=n;const o=document.createElement("div");o.className="image-wrap";const a=document.createElement("img");return a.src=e,a.className="menu-pic",o.appendChild(a),t.appendChild(r),t.appendChild(o),t}const T=(()=>{const n=()=>Array.from(document.getElementsByClassName("nav-btn")),e=()=>document.getElementById("scroll-box"),t=t=>{t.target.classList.contains("active")||(n().forEach((n=>n.className="nav-btn")),(n=>{document.getElementById("slider").className=`slider ${n.target.innerText.toLowerCase()}`})(t),(n=>{n.target.className="nav-btn active"})(t),e().style.opacity=0,setTimeout((()=>e().removeChild(e().firstChild)),300),setTimeout((()=>(n=>{switch(n.target.innerText){case"HOME":x();break;case"MENU":!function(){const n=document.getElementById("scroll-box"),e=function(){const n=document.createElement("div");return n.id="menu-content",n.appendChild(N("classic",g)),n.appendChild(N("chocolate",w)),n.appendChild(N("white chocolate",v)),n.appendChild(N("blueberry",y)),n.appendChild(N("strawberry basil",C)),n.appendChild(N("pumpkin",E)),n.appendChild(N("turtle",k)),n.appendChild(N("cookie butter",A)),n.appendChild(N("mulled wine",S)),n}();n.appendChild(e),n.style.opacity=1}();break;case"CONTACT":!function(){const n=document.getElementById("scroll-box"),e=function(){const n=document.createElement("div");n.id="contact-content";const e=document.createElement("div");e.id="phone",e.innerText="000-555-1234";const t=document.createElement("form"),r=document.createElement("input");r.type="text",r.placeholder="Name";const o=document.createElement("input");o.type="text",o.placeholder="E-mail address";const a=document.createElement("textarea");a.placeholder="Leave us a message and we'll reply promptly!",a.rows=5;const i=document.createElement("button");return i.type="button",i.id="send-btn",i.innerText="SEND",t.appendChild(r),t.appendChild(o),t.appendChild(a),t.appendChild(i),n.appendChild(e),n.appendChild(t),n}();n.appendChild(e),n.style.opacity=1}()}})(t)),350))};return{initialize:()=>{n().forEach((n=>n.addEventListener("click",t)))}}})();(function(){const n=document.getElementById("content"),e=function(){const n=document.createElement("header");n.id="header";const e=document.createElement("img");return e.src=b,n.appendChild(e),n}(),t=function(){const n=document.createElement("nav"),e=document.createElement("button");e.className="nav-btn active",e.innerText="HOME";const t=document.createElement("button");t.className="nav-btn",t.innerText="MENU";const r=document.createElement("button");r.className="nav-btn",r.innerText="CONTACT";const o=document.createElement("div");o.id="slider",o.className="slider home";const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("class","inner-corner"),a.setAttribute("version","1.1"),a.setAttribute("xmlns:x","&ns_extend;"),a.setAttribute("xmlns:i","&ns_ai;"),a.setAttribute("xmlns:graph","&ns_graphs;"),a.setAttribute("xmlns","http://www.w3.org/2000/svg"),a.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),a.setAttribute("x","0px"),a.setAttribute("y","0px"),a.setAttribute("viewBox","0 0 500 500"),a.setAttribute("style","enable-background:new 0 0 500 500;"),a.setAttribute("xml:space","preserve");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","M500,0c0,276.14-223.86,500-500,500h500C500,500,500,0,500,0z");const c=document.createElement("div");c.className="core";const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("class","inner-corner"),s.setAttribute("version","1.1"),s.setAttribute("xmlns:x","&ns_extend;"),s.setAttribute("xmlns:i","&ns_ai;"),s.setAttribute("xmlns:graph","&ns_graphs;"),s.setAttribute("xmlns","http://www.w3.org/2000/svg"),s.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),s.setAttribute("x","0px"),s.setAttribute("y","0px"),s.setAttribute("viewBox","0 0 500 500"),s.setAttribute("style","enable-background:new 0 0 500 500;"),s.setAttribute("xml:space","preserve");const l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("d","M0,0c0,276.14,223.86,500,500,500H0C0,500,0,0,0,0z"),a.appendChild(i),s.appendChild(l),o.appendChild(a),o.appendChild(c),o.appendChild(s),n.appendChild(e),n.appendChild(t),n.appendChild(r),n.appendChild(o),n}(),r=function(){const n=document.createElement("div");n.id="backdrop";const e=document.createElement("div");return e.id="scroll-box",n.appendChild(e),n}();n.appendChild(e),n.appendChild(t),n.appendChild(r)})(),x(),T.initialize()})()})();