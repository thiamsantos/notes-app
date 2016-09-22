!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(1),i=o(r),u=n(2),d=o(u),a=n(3),l=n(5),c=o(l),s=n(13),f=o(s),v=n(14),p=o(v),m=n(7);(0,a.initNotesStorage)(),(0,d["default"])().forEach(function(e){(0,i["default"])(m.notesListNode,(0,c["default"])(e))}),m.newNoteButtonNode.addEventListener("click",function(){m.formSectionNode.classList.add("show"),m.noteTitleNode.focus()}),m.noteCancelNode.addEventListener("click",function(){m.formSectionNode.classList.remove("show"),(0,p["default"])(m.noteTitleNode,m.noteContentNode)}),m.titleFormNode.addEventListener("submit",function(e){e.preventDefault()}),m.noteSubmitNode.addEventListener("click",f["default"]);var N="serviceWorker"in navigator,y="https:"===window.location.protocol,h="localhost"===window.location.hostname;N&&(y||h)&&navigator.serviceWorker.register("/notes-app/sw.js",{scope:"/notes-app/"}).then(function(e){console.info(e)})["catch"](function(e){console.info(e)})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.renderBefore=function(e,t){e.insertBefore(t,e.firstChild)};t["default"]=function(e,t){e.appendChild(t)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){return JSON.parse(localStorage.notes)}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.initNotesStorage=void 0;var r=n(4),i=o(r);t.initNotesStorage=function(){localStorage.notes||(localStorage.notes=JSON.stringify([(0,i["default"])("First note","Click to edit the note or create a new one")]))}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){return{title:e,content:t,id:Date.now()}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),i=o(r),u=n(9),d=o(u),a=n(11),l=o(a),c=n(12),s=o(c),f=function(e){return(0,s["default"])("p").addClass("note-content").text(e).done()},v=function(){return'<svg class="icon">\n    <use xlink:href="dist/img/icons.svg#remove"></use>\n  </svg>'},p=function(e){return(0,s["default"])("h2").addClass("note-title").text(e).done()},m=function(){return(0,s["default"])("button").addClass("note-remove").inner(v()).on("click",d["default"]).done()},N=function(e,t){return(0,s["default"])("header").addClass("note").append(p(e)).append(f((0,l["default"])(t))).on("click",i["default"]).done()};t["default"]=function(e){return(0,s["default"])("li").addClass("note-wrapper").setId(e.id).append(N(e.title,e.content)).append(m()).done()}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(){var e=(0,u.getId)(this.parentNode);i.formSectionNode.setAttribute("data-edit",e);var t=(0,a["default"])(),n=t.filter(function(t){return t.id===e})[0];i.noteTitleNode.value=n.title,i.noteContentNode.value=n.content,i.formSectionNode.classList.add("show")}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var i=n(7),u=n(8),d=n(2),a=o(d)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.$=document.getElementById.bind(document);t.notesListNode=n("js-notes-list"),t.noteSubmitNode=n("js-submit-note"),t.noteCancelNode=n("js-cancel-note"),t.noteTitleNode=n("js-form-title"),t.noteContentNode=n("js-form-content"),t.newNoteButtonNode=n("js-new-note"),t.formSectionNode=n("js-form-section"),t.titleFormNode=n("js-title-form")},function(e,t){"use strict";function n(e,t,n){return function(o){return o.id===e&&(o[t]=n),o}}Object.defineProperty(t,"__esModule",{value:!0}),t.modifyNote=n;t.getId=function(e){return Number(e.id)}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(){var e=this.parentNode,t=(0,i.getId)(e),n=(0,l["default"])().filter(function(e){return e.id!==t});(0,d["default"])(n),e.remove()}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var i=n(8),u=n(10),d=o(u),a=n(2),l=o(a)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){localStorage.notes=JSON.stringify(e)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){return e.length>=43?e.slice(0,42)+"...":e}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(t){n(this,e),this.element=document.createElement(t)}return o(e,[{key:"addClass",value:function(e){return this.element.classList.add(e),this}},{key:"text",value:function(e){return this.element.textContent=e,this}},{key:"on",value:function(e,t){return this.element.addEventListener(e,t),this}},{key:"append",value:function(e){return this.element.appendChild(e),this}},{key:"inner",value:function(e){return this.element.innerHTML=e,this}},{key:"setId",value:function(e){return this.element.id=e,this}},{key:"done",value:function(){return this.element}}]),e}();t["default"]=function(e){return new r(e)}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},i=n(14),u=o(i),d=n(1),a=n(5),l=o(a),c=n(7),s=n(4),f=o(s),v=n(2),p=o(v),m=n(10),N=o(m);t["default"]=function(){var e=c.noteContentNode.value,t=c.noteTitleNode.value,n=(0,p["default"])();if(c.formSectionNode.hasAttribute("data-edit")){var o=function(){var o=Number(c.formSectionNode.getAttribute("data-edit")),r=n.filter(function(e){return e.id===o})[0],i=e===r.content,d=t===r.title;return i&&d?((0,u["default"])(c.noteTitleNode,c.noteContentNode),c.formSectionNode.classList.remove("show"),{v:!1}):((0,c.$)(o).remove(),n=n.filter(function(e){return e.id!==o}),void c.formSectionNode.removeAttribute("data-edit"))}();if("object"===("undefined"==typeof o?"undefined":r(o)))return o.v}else c.noteTitleNode.focus();var i=(0,f["default"])(t,e);(0,N["default"])([i].concat(n)),(0,d.renderBefore)(c.notesListNode,(0,l["default"])(i)),(0,u["default"])(c.noteTitleNode,c.noteContentNode),c.formSectionNode.classList.remove("show")}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(e){e.value=""})}}]);