(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Ahbh:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o});var i=e("CcnG"),r=(e("1m8Z"),e("Ip0R"),e("gIcY"),i.qb({encapsulation:2,styles:[],data:{}}));function o(t){return i.Mb(0,[i.Bb(null,0)],null,null)}},B5Ai:function(t,n,e){"use strict";e.d(n,"b",function(){return r}),e.d(n,"a",function(){return o}),e.d(n,"c",function(){return s});var i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};function r(t,n){function e(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function o(t,n,e,i){return new(e||(e=Promise))(function(r,o){function s(t){try{u(i.next(t))}catch(n){o(n)}}function a(t){try{u(i.throw(t))}catch(n){o(n)}}function u(t){t.done?r(t.value):new e(function(n){n(t.value)}).then(s,a)}u((i=i.apply(t,n||[])).next())})}function s(t,n){var e,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=n.call(t,s)}catch(a){o=[6,a],i=0}finally{e=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}},DQ87:function(t,n,e){"use strict";e.d(n,"a",function(){return f}),e.d(n,"b",function(){return h}),e.d(n,"c",function(){return u}),e.d(n,"d",function(){return c}),e.d(n,"e",function(){return p}),e.d(n,"f",function(){return o}),e.d(n,"g",function(){return s}),e.d(n,"h",function(){return a});var i=e("B5Ai"),r=0;function o(t,n){var e=t.ownerDocument;(function(t){0===r&&(r=1,t.addEventListener("focusin",function(n){var e=a(t);if(e&&e.backdropDismiss&&!function(t,n){for(;n;){if(n===t)return!0;n=n.parentElement}return!1}(e,n.target)){var i=e.querySelector("input,button");i&&i.focus()}}),t.addEventListener("ionBackButton",function(n){var e=a(t);e&&e.backdropDismiss&&n.detail.register(100,function(){return e.dismiss(void 0,f)})}),t.addEventListener("keyup",function(n){if("Escape"===n.key){var e=a(t);e&&e.backdropDismiss&&e.dismiss(void 0,f)}}))})(e),Object.assign(t,n),t.classList.add("overlay-hidden");var i=r++;return t.overlayIndex=i,t.hasAttribute("id")||(t.id="ion-overlay-"+i),l(e).appendChild(t),t.componentOnReady()}function s(t,n,e,i,r){var o=a(t,i,r);return o?o.dismiss(n,e):Promise.reject("overlay does not exist")}function a(t,n,e){var i=function(t,n){var e=Array.from(l(t).children).filter(function(t){return t.overlayIndex>0});return void 0===n?e:(n=n.toUpperCase(),e.filter(function(t){return t.tagName===n}))}(t,n);return void 0===e?i[i.length-1]:i.find(function(t){return t.id===e})}function u(t,n,e,r,o){return i.a(this,void 0,void 0,function(){var s;return i.c(this,function(i){switch(i.label){case 0:return t.presented?[2]:(t.presented=!0,t.willPresent.emit(),s=t.enterAnimation?t.enterAnimation:t.config.get(n,"ios"===t.mode?e:r),[4,d(t,s,t.el,o)]);case 1:return i.sent()&&t.didPresent.emit(),[2]}})})}function c(t,n,e,r,o,s,a){return i.a(this,void 0,void 0,function(){var u,c;return i.c(this,function(i){switch(i.label){case 0:if(!t.presented)return[2,!1];t.presented=!1,i.label=1;case 1:return i.trys.push([1,3,,4]),t.willDismiss.emit({data:n,role:e}),u=t.leaveAnimation?t.leaveAnimation:t.config.get(r,"ios"===t.mode?o:s),[4,d(t,u,t.el,a)];case 2:return i.sent(),t.didDismiss.emit({data:n,role:e}),[3,4];case 3:return c=i.sent(),console.error(c),[3,4];case 4:return t.el.remove(),[2,!0]}})})}function l(t){return t.querySelector("ion-app")||t.body}function d(t,n,r,o){return i.a(this,void 0,void 0,function(){var s,a,u,c;return i.c(this,function(i){switch(i.label){case 0:return t.animation?(t.animation.destroy(),t.animation=void 0,[2,!1]):(r.classList.remove("overlay-hidden"),s=r.shadowRoot||t.el,u=t,[4,e.e(2).then(e.bind(null,"ohUv")).then(function(t){return t.create(n,s,o)})]);case 1:return a=u.animation=i.sent(),t.animation=a,t.animated&&t.config.getBoolean("animated",!0)||a.duration(0),t.keyboardClose&&a.beforeAddWrite(function(){var t=r.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()}),[4,a.playAsync()];case 2:return i.sent(),c=a.hasCompleted,a.destroy(),t.animation=void 0,[2,c]}})})}function p(t,n){var e,i=new Promise(function(t){return e=t});return function(t,n,e){var i=function(r){t.removeEventListener(n,i),e(r)};t.addEventListener(n,i)}(t,n,function(t){e(t.detail)}),i}function h(t){return"cancel"===t||t===f}var f="backdrop"},JvIM:function(t,n,e){"use strict";function i(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function r(t){return!!t.shadowRoot&&!!t.attachShadow}function o(t){var n=t.closest("ion-item");return n?n.querySelector("ion-label"):null}function s(t,n,e,i,o){if(t||r(n)){var s=n.querySelector("input.aux-input");s||((s=n.ownerDocument.createElement("input")).type="hidden",s.classList.add("aux-input"),n.appendChild(s)),s.disabled=o,s.name=e,s.value=i||""}}function a(t,n,e){return Math.max(t,Math.min(n,e))}function u(t){return t.timeStamp||Date.now()}function c(t){if(t){var n=t.changedTouches;if(n&&n.length>0){var e=n[0];return{x:e.clientX,y:e.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function l(t,n){var e="rtl"===t.document.dir;switch(n){case"start":return e;case"end":return!e;default:throw new Error('"'+n+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(t,n){var e=t._original||t;return{_original:t,emit:p(e.emit.bind(e),n)}}function p(t,n){var e;return void 0===n&&(n=0),function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];clearTimeout(e),e=setTimeout.apply(void 0,[t,n].concat(i))}}e.d(n,"a",function(){return i}),e.d(n,"b",function(){return u}),e.d(n,"c",function(){return r}),e.d(n,"d",function(){return o}),e.d(n,"e",function(){return s}),e.d(n,"f",function(){return d}),e.d(n,"g",function(){return l}),e.d(n,"h",function(){return a}),e.d(n,"i",function(){return p}),e.d(n,"j",function(){return c})},R5Yi:function(t,n,e){"use strict";e.r(n),e.d(n,"createGesture",function(){return p}),e.d(n,"GESTURE_CONTROLLER",function(){return u});var i,r=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new o(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new s(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,n,e){return this.canStart(t)?(this.requestedStart.set(n,e),!0):(this.requestedStart.delete(n),!1)},t.prototype.capture=function(t,n,e){if(!this.start(t,n,e))return!1;var i=this.requestedStart,r=-1e4;if(i.forEach(function(t){r=Math.max(r,t)}),r===e){this.capturedId=n,i.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return this.doc.dispatchEvent(o),!0}return i.delete(n),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,n){var e=this.disabledGestures.get(t);void 0===e&&(e=new Set,this.disabledGestures.set(t,e)),e.add(n)},t.prototype.enableGesture=function(t,n){var e=this.disabledGestures.get(t);void 0!==e&&e.delete(n)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(a)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(a)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var n=this.disabledGestures.get(t);return!!(n&&n.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),o=function(){function t(t,n,e,i,r){this.id=n,this.name=e,this.disableScroll=r,this.priority=1e6*i+n,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),s=function(){function t(t,n,e,i){this.id=n,this.disable=e,this.disableScroll=i,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,n=this.disable;t<n.length;t++)this.ctrl.disableGesture(n[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,n=this.disable;t<n.length;t++)this.ctrl.enableGesture(n[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),a="backdrop-no-scroll",u=new r(document);function c(t,n,e,r){var o,s,a=function(t){if(void 0===i)try{var n=Object.defineProperty({},"passive",{get:function(){i=!0}});t.addEventListener("optsTest",function(){},n)}catch(t){i=!1}return!!i}(t)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;return t.__zone_symbol__addEventListener?(o="__zone_symbol__addEventListener",s="__zone_symbol__removeEventListener"):(o="addEventListener",s="removeEventListener"),t[o](n,e,a),function(){t[s](n,e,a)}}var l=2e3;function d(t){return t instanceof Document?t:t.ownerDocument}function p(t){var n=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),e=n.canStart,i=n.onWillStart,r=n.onStart,o=n.onEnd,s=n.notCaptured,a=n.onMove,p=n.threshold,m=n.queue,b={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},g=function(t,n,e,i,r){var o,s,a,u,p,h,f,v=0;function m(i){v=Date.now()+l,n(i)&&(!s&&e&&(s=c(t,"touchmove",e,r)),a||(a=c(t,"touchend",g,r)),u||(u=c(t,"touchcancel",g,r)))}function b(i){v>Date.now()||n(i)&&(!h&&e&&(h=c(d(t),"mousemove",e,r)),f||(f=c(d(t),"mouseup",y,r)))}function g(t){w(),i&&i(t)}function y(t){S(),i&&i(t)}function w(){s&&s(),a&&a(),u&&u(),s=a=u=void 0}function S(){h&&h(),f&&f(),h=f=void 0}function x(){w(),S()}function k(n){n?(o&&o(),p&&p(),o=p=void 0,x()):(o||(o=c(t,"touchstart",m,r)),p||(p=c(t,"mousedown",b,r)))}return{setDisabled:k,stop:x,destroy:function(){k(!0),i=e=n=void 0}}}(n.el,function(t){var n=v(t);return!(x||!k)&&(f(t,b),b.startX=b.currentX,b.startY=b.currentY,b.startTimeStamp=b.timeStamp=n,b.velocityX=b.velocityY=b.deltaX=b.deltaY=0,b.event=t,(!e||!1!==e(b))&&(w.release(),!!w.start()&&(x=!0,0===p?_():(y.start(b.startX,b.startY),!0))))},function(t){S?!E&&k&&(E=!0,h(b,t),m.write(C)):(h(b,t),y.detect(b.currentX,b.currentY)&&(y.isGesture()&&_()||(D(),g.stop(),s&&s(b))))},M,{capture:!1}),y=function(t,n,e){var i=e*(Math.PI/180),r="x"===t,o=Math.cos(i),s=n*n,a=0,u=0,c=!1,l=0;return{start:function(t,n){a=t,u=n,l=0,c=!0},detect:function(t,n){if(!c)return!1;var e=t-a,i=n-u,d=e*e+i*i;if(d<s)return!1;var p=Math.sqrt(d),h=(r?e:i)/p;return l=h>o?1:h<-o?-1:0,c=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}(n.direction,n.threshold,n.maxAngle),w=u.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),S=!1,x=!1,k=!0,E=!1;function C(){S&&(E=!1,a&&a(b))}function _(){return!(w&&!w.capture()||(S=!0,k=!1,b.startX=b.currentX,b.startY=b.currentY,b.startTimeStamp=b.timeStamp,i?i(b).then(O):O(),0))}function O(){r&&r(b),k=!0}function D(){S=!1,x=!1,E=!1,k=!0,w.release()}function M(t){var n=S,e=k;D(),e&&(h(b,t),n?o&&o(b):s&&s(b))}return{setDisabled:function(t){t&&S&&M(void 0),g.setDisabled(t)},destroy:function(){w.destroy(),g.destroy()}}}function h(t,n){if(n){var e=t.currentX,i=t.currentY,r=t.timeStamp;f(n,t);var o=t.currentX,s=t.currentY,a=(t.timeStamp=v(n))-r;if(a>0&&a<100){var u=(s-i)/a;t.velocityX=(o-e)/a*.7+.3*t.velocityX,t.velocityY=.7*u+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=s-t.startY,t.event=n}}function f(t,n){var e=0,i=0;if(t){var r=t.changedTouches;if(r&&r.length>0){var o=r[0];e=o.clientX,i=o.clientY}else void 0!==t.pageX&&(e=t.pageX,i=t.pageY)}n.currentX=e,n.currentY=i}function v(t){return t.timeStamp||Date.now()}},WmWN:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var i=function(t){try{if("string"!=typeof t||""===t)return t;var n=document.createDocumentFragment(),e=document.createElement("div");n.appendChild(e),e.innerHTML=t,a.forEach(function(t){for(var e=n.querySelectorAll(t),i=e.length-1;i>=0;i--){var s=e[i];s.parentNode?s.parentNode.removeChild(s):n.removeChild(s);for(var a=o(s),u=0;u<a.length;u++)r(a[u])}});for(var i=o(n),s=0;s<i.length;s++)r(i[s]);var u=document.createElement("div");u.appendChild(n);var c=u.querySelector("div");return null!==c?c.innerHTML:u.innerHTML}catch(t){return console.error(t),""}},r=function(t){if(!t.nodeType||1===t.nodeType){for(var n=t.attributes.length-1;n>=0;n--){var e=t.attributes[n],i=e.name;if(s.includes(i.toLowerCase())){var a=e.value;null!=a&&a.toLowerCase().includes("javascript:")&&t.removeAttribute(i)}else t.removeAttribute(i)}var u=o(t);for(n=0;n<u.length;n++)r(u[n])}},o=function(t){return null!=t.children?t.children:t.childNodes},s=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},awvO:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i}),e.d(n,"c",function(){return r}),e.d(n,"d",function(){return s}),e.d(n,"e",function(){return a});var i="ionViewWillEnter",r="ionViewDidEnter",o="ionViewWillLeave",s="ionViewDidLeave",a="ionViewWillUnload"},cDAM:function(t,n,e){"use strict";e.d(n,"a",function(){return y}),e.d(n,"b",function(){return b}),e.d(n,"c",function(){return a}),e.d(n,"d",function(){return w});var i=e("B5Ai"),r=e("awvO"),o=function(){return e.e(82).then(e.bind(null,"rSHd"))},s=function(){return e.e(83).then(e.bind(null,"NJz6"))};function a(t){return new Promise(function(n,e){t.queue.write(function(){(function(t){var n=t.enteringEl,e=t.leavingEl;(function(t,n,e){void 0!==t&&(t.style.zIndex="back"===e?"99":"101"),void 0!==n&&(n.style.zIndex="100")})(n,e,t.direction),t.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),w(n,!1),e&&w(e,!1)})(t),function(t){return i.a(this,void 0,void 0,function(){var n;return i.c(this,function(e){switch(e.label){case 0:return[4,c(t)];case 1:return[2,(n=e.sent())?l(n,t):d(t)]}})})}(t).then(function(e){e.animation&&e.animation.destroy(),u(t),n(e)},function(n){u(t),e(n)})})})}function u(t){var n=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")}function c(t){return i.a(this,void 0,void 0,function(){var n;return i.c(this,function(e){switch(e.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,o()]:[2,void 0];case 1:return n=e.sent().iosTransitionAnimation,[3,4];case 2:return[4,s()];case 3:n=e.sent().mdTransitionAnimation,e.label=4;case 4:return[2,n]}})})}function l(t,n){return i.a(this,void 0,void 0,function(){var r;return i.c(this,function(i){switch(i.label){case 0:return[4,p(n,!0)];case 1:return i.sent(),[4,e.e(2).then(e.bind(null,"ohUv")).then(function(e){return e.create(t,n.baseEl,n)})];case 2:return r=i.sent(),v(n.enteringEl,n.leavingEl),[4,f(r,n)];case 3:return i.sent(),n.progressCallback&&n.progressCallback(void 0),r.hasCompleted&&m(n.enteringEl,n.leavingEl),[2,{hasCompleted:r.hasCompleted,animation:r}]}})})}function d(t){return i.a(this,void 0,void 0,function(){var n,e;return i.c(this,function(i){switch(i.label){case 0:return n=t.enteringEl,e=t.leavingEl,[4,p(t,!1)];case 1:return i.sent(),v(n,e),m(n,e),[2,{hasCompleted:!0}]}})})}function p(t,n){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(i){switch(i.label){case 0:return e=(void 0!==t.deepWait?t.deepWait:n)?[y(t.enteringEl),y(t.leavingEl)]:[g(t.enteringEl),g(t.leavingEl)],[4,Promise.all(e)];case 1:return i.sent(),[4,h(t.viewIsReady,t.enteringEl)];case 2:return i.sent(),[2]}})})}function h(t,n){return i.a(this,void 0,void 0,function(){return i.c(this,function(e){switch(e.label){case 0:return t?[4,t(n)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})}function f(t,n){var e=n.progressCallback,i=new Promise(function(n){return t.onFinish(n)});return e?(t.progressStart(),e(t)):t.play(),i}function v(t,n){b(n,r.a),b(t,r.b)}function m(t,n){b(t,r.c),b(n,r.d)}function b(t,n){if(t){var e=new CustomEvent(n,{bubbles:!1,cancelable:!1});t.dispatchEvent(e)}}function g(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()}function y(t){return i.a(this,void 0,void 0,function(){var n;return i.c(this,function(e){switch(e.label){case 0:return(n=t)?null==n.componentOnReady?[3,2]:[4,n.componentOnReady()]:[3,4];case 1:if(null!=e.sent())return[2];e.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(y))];case 3:e.sent(),e.label=4;case 4:return[2]}})})}function w(t,n){n?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))}},d6Vy:function(t,n,e){"use strict";e.d(n,"a",function(){return s}),e.d(n,"b",function(){return u}),e.d(n,"c",function(){return o}),e.d(n,"d",function(){return r});var i=e("B5Ai");function r(t,n){return null!==n.closest(t)}function o(t){var n;return"string"==typeof t&&t.length>0?((n={"ion-color":!0})["ion-color-"+t]=!0,n):void 0}function s(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return n[t]=!0}),n}var a=/^[a-z][a-z0-9+\-.]*:/;function u(t,n,e,r){return i.a(this,void 0,void 0,function(){var o;return i.c(this,function(i){switch(i.label){case 0:return null==n||"#"===n[0]||a.test(n)?[3,2]:(o=t.document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return i.sent(),[2,o.push(n,r)];case 2:return[2,!1]}})})}},g58P:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return s}),e.d(n,"c",function(){return u});var i=e("mrSG"),r=e("CcnG"),o=e("gI3B"),s=function(){return function(){this.class="",this.backgroundGradient=!1,this.backgroundColor="transparent",this.backgroundGradientStopColor="transparent",this.backgroundOpacity=1,this.backgroundStroke="transparent",this.backgroundStrokeWidth=0,this.backgroundPadding=5,this.percent=0,this.radius=90,this.space=4,this.toFixed=0,this.maxPercent=1e3,this.renderOnClick=!0,this.units="%",this.unitsFontSize="10",this.unitsFontWeight="normal",this.unitsColor="#444444",this.outerStrokeGradient=!1,this.outerStrokeWidth=8,this.outerStrokeColor="#78C000",this.outerStrokeGradientStopColor="transparent",this.outerStrokeLinecap="round",this.innerStrokeColor="#C7E596",this.innerStrokeWidth=4,this.titleFormat=void 0,this.title="auto",this.titleColor="#444444",this.titleFontSize="20",this.titleFontWeight="normal",this.subtitleFormat=void 0,this.subtitle="progress",this.subtitleColor="#A9A9A9",this.subtitleFontSize="10",this.subtitleFontWeight="normal",this.imageSrc=void 0,this.imageHeight=void 0,this.imageWidth=void 0,this.animation=!0,this.animateTitle=!0,this.animateSubtitle=!1,this.animationDuration=500,this.showTitle=!0,this.showSubtitle=!0,this.showUnits=!0,this.showImage=!1,this.showBackground=!0,this.showInnerStroke=!0,this.clockwise=!0,this.responsive=!1,this.startFromZero=!0,this.showZeroOuterStroke=!0,this.lazy=!1}}(),a=function(){function t(t,n,e){var a=this;this.elRef=n,this.document=e,this.onClick=new r.n,this.svgElement=null,this.isInViewport=!1,this.onViewportChanged=new r.n,this._viewportChangedSubscriber=null,this.options=new s,this.defaultOptions=new s,this._lastPercent=0,this._gradientUUID=null,this.render=function(){a.applyOptions(),a.options.lazy?(null===a.svgElement&&a.draw(a._lastPercent),a.isInViewport&&(a.options.animation&&a.options.animationDuration>0?a.animate(a._lastPercent,a.options.percent):a.draw(a.options.percent),a._lastPercent=a.options.percent)):(a.options.animation&&a.options.animationDuration>0?a.animate(a._lastPercent,a.options.percent):a.draw(a.options.percent),a._lastPercent=a.options.percent)},this.polarToCartesian=function(t,n,e,i){var r=i*Math.PI/180;return{x:t+Math.sin(r)*e,y:n-Math.cos(r)*e}},this.draw=function(t){var n,e,r,o,s,u,c=(t=void 0===t?a.options.percent:Math.abs(t))>100?100:t,l=2*a.options.radius+2*a.options.outerStrokeWidth;a.options.showBackground&&(l+=2*a.options.backgroundStrokeWidth+a.max(0,2*a.options.backgroundPadding));var d,p,h={x:l/2,y:l/2},f=h.x,v=h.y-a.options.radius,m=a.polarToCartesian(h.x,h.y,a.options.radius,360*(a.options.clockwise?c:100-c)/100);100===c&&(m.x=m.x+(a.options.clockwise?-.01:.01)),c>50?(d=(n=Object(i.__read)(a.options.clockwise?[1,1]:[1,0],2))[0],p=n[1]):(d=(e=Object(i.__read)(a.options.clockwise?[0,1]:[0,0],2))[0],p=e[1]);var b=a.options.animateTitle?t:a.options.percent,g=b>a.options.maxPercent?a.options.maxPercent.toFixed(a.options.toFixed)+"+":b.toFixed(a.options.toFixed),y=a.options.animateSubtitle?t:a.options.percent,w={x:h.x,y:h.y,textAnchor:"middle",color:a.options.titleColor,fontSize:a.options.titleFontSize,fontWeight:a.options.titleFontWeight,texts:[],tspans:[]};void 0!==a.options.titleFormat&&"Function"===a.options.titleFormat.constructor.name?(S=a.options.titleFormat(b))instanceof Array?w.texts=Object(i.__spread)(S):w.texts.push(S.toString()):"auto"===a.options.title?w.texts.push(g):a.options.title instanceof Array?w.texts=Object(i.__spread)(a.options.title):w.texts.push(a.options.title.toString());var S,x={x:h.x,y:h.y,textAnchor:"middle",color:a.options.subtitleColor,fontSize:a.options.subtitleFontSize,fontWeight:a.options.subtitleFontWeight,texts:[],tspans:[]};void 0!==a.options.subtitleFormat&&"Function"===a.options.subtitleFormat.constructor.name?(S=a.options.subtitleFormat(y))instanceof Array?x.texts=Object(i.__spread)(S):x.texts.push(S.toString()):a.options.subtitle instanceof Array?x.texts=Object(i.__spread)(a.options.subtitle):x.texts.push(a.options.subtitle.toString());var k={text:""+a.options.units,fontSize:a.options.unitsFontSize,fontWeight:a.options.unitsFontWeight,color:a.options.unitsColor},E=0,C=1;if(a.options.showTitle&&(E+=w.texts.length),a.options.showSubtitle&&(E+=x.texts.length),a.options.showTitle)try{for(var _=Object(i.__values)(w.texts),O=_.next();!O.done;O=_.next())w.tspans.push({span:O.value,dy:a.getRelativeY(C,E)}),C++}catch(L){r={error:L}}finally{try{O&&!O.done&&(o=_.return)&&o.call(_)}finally{if(r)throw r.error}}if(a.options.showSubtitle)try{for(var D=Object(i.__values)(x.texts),M=D.next();!M.done;M=D.next())x.tspans.push({span:M.value,dy:a.getRelativeY(C,E)}),C++}catch(F){s={error:F}}finally{try{M&&!M.done&&(u=D.return)&&u.call(D)}finally{if(s)throw s.error}}null===a._gradientUUID&&(a._gradientUUID=a.uuid()),a.svg={viewBox:"0 0 "+l+" "+l,width:a.options.responsive?"100%":l,height:a.options.responsive?"100%":l,backgroundCircle:{cx:h.x,cy:h.y,r:a.options.radius+a.options.outerStrokeWidth/2+a.options.backgroundPadding,fill:a.options.backgroundColor,fillOpacity:a.options.backgroundOpacity,stroke:a.options.backgroundStroke,strokeWidth:a.options.backgroundStrokeWidth},path:{d:"M "+f+" "+v+"\n        A "+a.options.radius+" "+a.options.radius+" 0 "+d+" "+p+" "+m.x+" "+m.y,stroke:a.options.outerStrokeColor,strokeWidth:a.options.outerStrokeWidth,strokeLinecap:a.options.outerStrokeLinecap,fill:"none"},circle:{cx:h.x,cy:h.y,r:a.options.radius-a.options.space-a.options.outerStrokeWidth/2-a.options.innerStrokeWidth/2,fill:"none",stroke:a.options.innerStrokeColor,strokeWidth:a.options.innerStrokeWidth},title:w,units:k,subtitle:x,image:{x:h.x-a.options.imageWidth/2,y:h.y-a.options.imageHeight/2,src:a.options.imageSrc,width:a.options.imageWidth,height:a.options.imageHeight},outerLinearGradient:{id:"outer-linear-"+a._gradientUUID,colorStop1:a.options.outerStrokeColor,colorStop2:"transparent"===a.options.outerStrokeGradientStopColor?"#FFF":a.options.outerStrokeGradientStopColor},radialGradient:{id:"radial-"+a._gradientUUID,colorStop1:a.options.backgroundColor,colorStop2:"transparent"===a.options.backgroundGradientStopColor?"#FFF":a.options.backgroundGradientStopColor}}},this.getAnimationParameters=function(t,n){var e,i,r,o=a.options.startFromZero?0:t<0?0:t,s=n<0?0:a.min(n,a.options.maxPercent),u=Math.abs(Math.round(s-o));return u>=100?(e=100,i=a.options.animateTitle||a.options.animateSubtitle?Math.round(u/e):1):(e=u,i=1),(r=Math.round(a.options.animationDuration/e))<10&&(e=a.options.animationDuration/(r=10),i=!a.options.animateTitle&&!a.options.animateSubtitle&&u>100?Math.round(100/e):Math.round(u/e)),i<1&&(i=1),{times:e,step:i,interval:r}},this.animate=function(t,n){a._timerSubscription&&!a._timerSubscription.closed&&a._timerSubscription.unsubscribe();var e=a.options.startFromZero?0:t,i=n,r=a.getAnimationParameters(e,i),s=r.step,u=r.interval,c=e;a._timerSubscription=e<i?Object(o.a)(0,u).subscribe(function(){(c+=s)<=i?!a.options.animateTitle&&!a.options.animateSubtitle&&c>=100?(a.draw(i),a._timerSubscription.unsubscribe()):a.draw(c):(a.draw(i),a._timerSubscription.unsubscribe())}):Object(o.a)(0,u).subscribe(function(){(c-=s)>=i?!a.options.animateTitle&&!a.options.animateSubtitle&&i>=100?(a.draw(i),a._timerSubscription.unsubscribe()):a.draw(c):(a.draw(i),a._timerSubscription.unsubscribe())})},this.emitClickEvent=function(t){a.options.renderOnClick&&a.animate(0,a.options.percent),a.onClick.emit(t)},this.applyOptions=function(){var t,n;try{for(var e=Object(i.__values)(Object.keys(a.options)),r=e.next();!r.done;r=e.next()){var o=r.value;a.hasOwnProperty(o)&&void 0!==a[o]?a.options[o]=a[o]:a.templateOptions&&void 0!==a.templateOptions[o]&&(a.options[o]=a.templateOptions[o])}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=e.return)&&n.call(e)}finally{if(t)throw t.error}}a.options.radius=Math.abs(+a.options.radius),a.options.space=+a.options.space,a.options.percent=+a.options.percent>0?+a.options.percent:0,a.options.maxPercent=Math.abs(+a.options.maxPercent),a.options.animationDuration=Math.abs(a.options.animationDuration),a.options.outerStrokeWidth=Math.abs(+a.options.outerStrokeWidth),a.options.innerStrokeWidth=Math.abs(+a.options.innerStrokeWidth),a.options.backgroundPadding=+a.options.backgroundPadding},this.getRelativeY=function(t,n){return(1*(t-n/2)-.18).toFixed(2)+"em"},this.min=function(t,n){return t<n?t:n},this.max=function(t,n){return t>n?t:n},this.uuid=function(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var e=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==n?e:3&e|8).toString(16)})},this.findSvgElement=function(){if(null===this.svgElement){var t=this.elRef.nativeElement.getElementsByTagName("svg");t.length>0&&(this.svgElement=t[0])}},this.checkViewport=function(){a.findSvgElement();var t=a.isInViewport;a.isInViewport=a.isElementInViewport(a.svgElement),t!==a.isInViewport&&a.onViewportChanged.emit({oldValue:t,newValue:a.isInViewport})},this.onScroll=function(t){a.checkViewport()},this.loadEventsForLazyMode=function(){if(a.options.lazy){a.document.addEventListener("scroll",a.onScroll,!0),a.window.addEventListener("resize",a.onScroll,!0),null===a._viewportChangedSubscriber&&(a._viewportChangedSubscriber=a.onViewportChanged.subscribe(function(t){t.newValue&&a.render()}));var t=Object(o.a)(0,50).subscribe(function(){null===a.svgElement?a.checkViewport():t.unsubscribe()})}},this.unloadEventsForLazyMode=function(){a.document.removeEventListener("scroll",a.onScroll,!0),a.window.removeEventListener("resize",a.onScroll,!0),null!==a._viewportChangedSubscriber&&(a._viewportChangedSubscriber.unsubscribe(),a._viewportChangedSubscriber=null)},this.document=e,this.window=this.document.defaultView,Object.assign(this.options,t),Object.assign(this.defaultOptions,t)}return t.prototype.isDrawing=function(){return this._timerSubscription&&!this._timerSubscription.closed},t.prototype.isElementInViewport=function(t){if(null==t)return!1;var n,e=t.getBoundingClientRect(),i=t.parentNode;do{if(n=i.getBoundingClientRect(),e.top>=n.bottom)return!1;if(e.bottom<=n.top)return!1;if(e.left>=n.right)return!1;if(e.right<=n.left)return!1;i=i.parentNode}while(i!=this.document.body);return!(e.top>=(this.window.innerHeight||this.document.documentElement.clientHeight)||e.bottom<=0||e.left>=(this.window.innerWidth||this.document.documentElement.clientWidth)||e.right<=0)},t.prototype.ngOnInit=function(){this.loadEventsForLazyMode()},t.prototype.ngOnDestroy=function(){this.unloadEventsForLazyMode()},t.prototype.ngOnChanges=function(t){this.render(),"lazy"in t&&(t.lazy.currentValue?this.loadEventsForLazyMode():this.unloadEventsForLazyMode())},t}(),u=function(){function t(){}var n;return n=t,t.forRoot=function(t){return void 0===t&&(t={}),{ngModule:n,providers:[{provide:s,useValue:t}]}},t}()},jT1R:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o});var i=e("B5Ai");function r(t,n,e,r,o){return i.a(this,void 0,void 0,function(){var s;return i.c(this,function(i){switch(i.label){case 0:if(t)return[2,t.attachViewToDom(n,e,o,r)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return s="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e,r&&r.forEach(function(t){return s.classList.add(t)}),o&&Object.assign(s,o),n.appendChild(s),s.componentOnReady?[4,s.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,s]}})})}function o(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},jmAt:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var i=function(t,n){return function(t){return r(t)}(t).indexOf(n)>-1},r=function(t){t.Ionic=t.Ionic||{};var n=t.Ionic.platforms;return null==n&&(n=t.Ionic.platforms=o(t)).forEach(function(n){return t.document.documentElement.classList.add("plt-"+n)}),n},o=function(t){return Object.keys(f).filter(function(n){return f[n](t)})},s=function(t){return p(t,/iPad/i)},a=function(t){return p(t,/android|sink/i)},u=function(t){return h(t,"(any-pointer:coarse)")},c=function(t){return l(t)||d(t)},l=function(t){return!!(t.cordova||t.phonegap||t.PhoneGap)},d=function(t){var n=t.Capacitor;return!(!n||!n.isNative)},p=function(t,n){return!(!t.navigator||!t.navigator.userAgent)&&n.test(t.navigator.userAgent)},h=function(t,n){return!!t.matchMedia&&t.matchMedia(n).matches},f={ipad:s,iphone:function(t){return p(t,/iPhone/i)},ios:function(t){return p(t,/iPad|iPhone|iPod/i)},android:a,phablet:function(t){var n=t.innerWidth,e=t.innerHeight,i=Math.min(n,e),r=Math.max(n,e);return i>390&&i<520&&r>620&&r<800},tablet:function(t){var n=t.innerWidth,e=t.innerHeight,i=Math.min(n,e),r=Math.max(n,e);return s(t)||function(t){return a(t)&&!p(t,/mobile/i)}(t)||i>460&&i<820&&r>780&&r<1400},cordova:l,capacitor:d,electron:function(t){return p(t,/electron/)},pwa:function(t){return!!t.matchMedia&&(t.matchMedia("(display-mode: standalone)").matches||t.navigator.standalone)},mobile:u,mobileweb:function(t){return u(t)&&!c(t)},desktop:function(t){return!u(t)},hybrid:c}},ySCp:function(t,n,e){"use strict";function i(){var t=window.TapticEngine;t&&t.selection()}function r(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function o(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function s(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r}),e.d(n,"c",function(){return s}),e.d(n,"d",function(){return i})}}]);