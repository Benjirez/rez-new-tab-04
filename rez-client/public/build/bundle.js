var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function c(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function s(t,n,e){return t.set(e),n}function u(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function h(){return d("")}function $(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function g(t,n){n=""+n,t.data!==n&&(t.data=n)}function _(t,n){t.value=null==n?"":n}function v(t,n,e){t.classList[e?"add":"remove"](n)}let b;function x(t){b=t}function y(t){(function(){if(!b)throw new Error("Function called outside component initialization");return b})().$$.on_mount.push(t)}const w=[],j=[];let z=[];const C=[],E=Promise.resolve();let k=!1;function N(t){z.push(t)}const L=new Set;let O=0;function S(){if(0!==O)return;const t=b;do{try{for(;O<w.length;){const t=w[O];O++,x(t),A(t.$$)}}catch(t){throw w.length=0,O=0,t}for(x(null),w.length=0,O=0;j.length;)j.pop()();for(let t=0;t<z.length;t+=1){const n=z[t];L.has(n)||(L.add(n),n())}z.length=0}while(w.length);for(;C.length;)C.pop()();k=!1,L.clear(),x(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const T=new Set;let q;function P(t,n){t&&t.i&&(T.delete(t),t.i(n))}function U(t,n,e,o){if(t&&t.o){if(T.has(t))return;T.add(t),q.c.push((()=>{T.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}function B(t){t&&t.c()}function D(t,e,r,l){const{fragment:s,after_update:u}=t.$$;s&&s.m(e,r),l||N((()=>{const e=t.$$.on_mount.map(n).filter(c);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(N)}function F(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];z.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),z=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function J(t,n){-1===t.$$.dirty[0]&&(w.push(t),k||(k=!0,E.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function M(n,c,r,l,s,u,i,f=[-1]){const d=b;x(n);const p=n.$$={fragment:null,ctx:[],props:u,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(d?d.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:c.target||d.$$.root};i&&i(p.root);let h=!1;if(p.ctx=r?r(n,c.props||{},((t,e,...o)=>{const c=o.length?o[0]:e;return p.ctx&&s(p.ctx[t],p.ctx[t]=c)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](c),h&&J(n,t)),e})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!l&&l(p.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();c.intro&&P(n.$$.fragment),D(n,c.target,c.anchor,c.customElement),S()}x(d)}class G{$destroy(){F(this,1),this.$destroy=t}$on(n,e){if(!c(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const H=[];function I(n,e=t){let o;const c=new Set;function l(t){if(r(n,t)&&(n=t,o)){const t=!H.length;for(const t of c)t[1](),H.push(t,n);if(t){for(let t=0;t<H.length;t+=2)H[t][0](H[t+1]);H.length=0}}}return{set:l,update:function(t){l(t(n))},subscribe:function(r,s=t){const u=[r,s];return c.add(u),1===c.size&&(o=e(l)||t),r(n),()=>{c.delete(u),0===c.size&&o&&(o(),o=null)}}}}const K=I(),Q=I(1),R=I();function V(n){let e,c,r,l,s,u,d;return{c(){e=f("input"),c=p(),r=f("button"),r.textContent="a-z",l=p(),s=f("input")},m(t,o){i(t,e,o),_(e,n[1]),i(t,c,o),i(t,r,o),i(t,l,o),i(t,s,o),_(s,n[0]),u||(d=[$(e,"input",n[5]),$(e,"change",n[6]),$(r,"click",n[3]),$(s,"input",n[7]),$(s,"change",n[8])],u=!0)},p(t,[n]){2&n&&e.value!==t[1]&&_(e,t[1]),1&n&&s.value!==t[0]&&_(s,t[0])},i:t,o:t,d(t){t&&a(e),t&&a(c),t&&a(r),t&&a(l),t&&a(s),u=!1,o(d)}}}function W(t,n,e){let o,c;l(t,K,(t=>e(9,o=t))),l(t,Q,(t=>e(1,c=t)));let r="";const u=async()=>{(c>6||c<1)&&s(Q,c=1,c);const t=await fetch("http://localhost:3000/old/"+(c-1));s(K,o=await t.json(),o)};y(u);const i=()=>{s(K,o=o.filter((t=>{const n=t.col_c.toLowerCase(),e=r.toLowerCase();return n.includes(e)})),o)};return[r,c,u,()=>{s(K,o=o.sort(((t,n)=>{const e=t.col_a.toUpperCase(),o=n.col_a.toUpperCase();return e<o?-1:e>o?1:0})),o)},i,function(){c=this.value,Q.set(c)},()=>{u()},function(){r=this.value,e(0,r)},()=>{i()}]}class X extends G{constructor(t){super(),M(this,t,W,V,r,{})}}function Y(n){let e,o,c;return{c(){e=f("button"),e.textContent="save"},m(t,r){i(t,e,r),o||(c=$(e,"click",n[0]),o=!0)},p:t,i:t,o:t,d(t){t&&a(e),o=!1,c()}}}function Z(t,n,e){let o,c,r;l(t,K,(t=>e(1,o=t))),l(t,R,(t=>e(2,c=t))),l(t,Q,(t=>e(3,r=t)));return[async()=>{const t=await fetch("http://localhost:3000/old/"+r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({col_a:c.col_a,col_b:c.col_b,col_c:c.col_c,col_d:c.col_d,col_e:c.col_e,col_f:c.col_f,col_g:c.col_g,col_h:c.col_h})});s(K,o=await t.json(),o)}]}class tt extends G{constructor(t){super(),M(this,t,Z,Y,r,{})}}function nt(n){let e,o,c;return{c(){e=f("button"),e.textContent="delete"},m(t,r){i(t,e,r),o||(c=$(e,"click",n[0]),o=!0)},p:t,i:t,o:t,d(t){t&&a(e),o=!1,c()}}}function et(t,n,e){let o,c;l(t,K,(t=>e(1,o=t))),l(t,R,(t=>e(2,c=t)));return[async()=>{const t=await fetch("http://localhost:3000/old/"+c._id,{method:"DELETE"});s(K,o=await t.json(),o)}]}class ot extends G{constructor(t){super(),M(this,t,et,nt,r,{})}}function ct(t){let n,e,o;return{c(){n=f("textarea"),m(n,"class","svelte-x9j39n")},m(c,r){i(c,n,r),_(n,t[0].col_c),e||(o=$(n,"input",t[1]),e=!0)},p(t,e){1&e&&_(n,t[0].col_c)},d(t){t&&a(n),e=!1,o()}}}function rt(n){let e,o=n[0]&&ct(n);return{c(){o&&o.c(),e=h()},m(t,n){o&&o.m(t,n),i(t,e,n)},p(t,[n]){t[0]?o?o.p(t,n):(o=ct(t),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&a(e)}}}function lt(t,n,e){let o;return l(t,R,(t=>e(0,o=t))),[o,function(){o.col_c=this.value,R.set(o)}]}class st extends G{constructor(t){super(),M(this,t,lt,rt,r,{})}}function ut(t,n,e){const o=t.slice();return o[3]=n[e],o}function it(t){let n,e=t[0],o=[];for(let n=0;n<e.length;n+=1)o[n]=at(ut(t,e,n));return{c(){n=f("div");for(let t=0;t<o.length;t+=1)o[t].c();m(n,"class","custom-select svelte-3fb9aq")},m(t,e){i(t,n,e);for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(n,null)},p(t,c){if(3&c){let r;for(e=t[0],r=0;r<e.length;r+=1){const l=ut(t,e,r);o[r]?o[r].p(l,c):(o[r]=at(l),o[r].c(),o[r].m(n,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=e.length}},d(t){t&&a(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(o,t)}}}function at(t){let n,e,o,c,r,l,s=t[3].col_a+"";function p(){return t[2](t[3])}return{c(){n=f("button"),e=f("span"),o=d(s),c=d(" "),m(n,"class","custom-option svelte-3fb9aq"),v(n,"focused",t[1]===t[3])},m(t,s){i(t,n,s),u(n,e),u(e,o),u(e,c),r||(l=$(n,"click",p),r=!0)},p(e,c){t=e,1&c&&s!==(s=t[3].col_a+"")&&g(o,s),3&c&&v(n,"focused",t[1]===t[3])},d(t){t&&a(n),r=!1,l()}}}function ft(n){let e,o=n[0]&&it(n);return{c(){o&&o.c(),e=h()},m(t,n){o&&o.m(t,n),i(t,e,n)},p(t,[n]){t[0]?o?o.p(t,n):(o=it(t),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&a(e)}}}function dt(t,n,e){let o,c;l(t,K,(t=>e(0,o=t))),l(t,R,(t=>e(1,c=t)));return[o,c,t=>{s(R,c=t,c)}]}class pt extends G{constructor(t){super(),M(this,t,dt,ft,r,{})}}function ht(t){let n,e,o;return{c(){n=f("input"),m(n,"tpye","text"),m(n,"class","svelte-1d7itxg")},m(c,r){i(c,n,r),_(n,t[0].col_a),e||(o=$(n,"input",t[1]),e=!0)},p(t,e){1&e&&n.value!==t[0].col_a&&_(n,t[0].col_a)},d(t){t&&a(n),e=!1,o()}}}function $t(n){let e,o=n[0]&&ht(n);return{c(){o&&o.c(),e=h()},m(t,n){o&&o.m(t,n),i(t,e,n)},p(t,[n]){t[0]?o?o.p(t,n):(o=ht(t),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&a(e)}}}function mt(t,n,e){let o;return l(t,R,(t=>e(0,o=t))),[o,function(){o.col_a=this.value,R.set(o)}]}class gt extends G{constructor(t){super(),M(this,t,mt,$t,r,{})}}function _t(t){let n,e,o=t[0].length+"";return{c(){n=d("length: "),e=d(o)},m(t,o){i(t,n,o),i(t,e,o)},p(t,n){1&n&&o!==(o=t[0].length+"")&&g(e,o)},d(t){t&&a(n),t&&a(e)}}}function vt(t){let n,e,o,c,r,l,s,d,h,$,g,_,v,b,x,y,w,j,z,C,E,k,N,L,O,S,A,T,q,J;o=new X({}),d=new pt({});let M=t[0]&&_t(t);return w=new gt({}),C=new st({}),A=new tt({}),q=new ot({}),{c(){n=f("div"),e=f("div"),B(o.$$.fragment),c=p(),r=f("div"),r.textContent="b",l=p(),s=f("div"),B(d.$$.fragment),h=p(),$=f("div"),$.textContent="d",g=p(),_=f("div"),M&&M.c(),v=p(),b=f("div"),b.textContent="f",x=p(),y=f("div"),B(w.$$.fragment),j=p(),z=f("div"),B(C.$$.fragment),E=p(),k=f("div"),k.textContent="i",N=p(),L=f("div"),L.textContent="j",O=p(),S=f("div"),B(A.$$.fragment),T=p(),B(q.$$.fragment),m(e,"class","a svelte-9zo3jp"),m(r,"class","b svelte-9zo3jp"),m(s,"class","c svelte-9zo3jp"),m($,"class","d svelte-9zo3jp"),m(_,"class","e svelte-9zo3jp"),m(b,"class","f svelte-9zo3jp"),m(y,"class","g svelte-9zo3jp"),m(z,"class","h svelte-9zo3jp"),m(k,"class","i svelte-9zo3jp"),m(L,"class","j svelte-9zo3jp"),m(S,"class","k svelte-9zo3jp"),m(n,"class","container svelte-9zo3jp")},m(t,a){i(t,n,a),u(n,e),D(o,e,null),u(n,c),u(n,r),u(n,l),u(n,s),D(d,s,null),u(n,h),u(n,$),u(n,g),u(n,_),M&&M.m(_,null),u(n,v),u(n,b),u(n,x),u(n,y),D(w,y,null),u(n,j),u(n,z),D(C,z,null),u(n,E),u(n,k),u(n,N),u(n,L),u(n,O),u(n,S),D(A,S,null),u(S,T),D(q,S,null),J=!0},p(t,[n]){t[0]?M?M.p(t,n):(M=_t(t),M.c(),M.m(_,null)):M&&(M.d(1),M=null)},i(t){J||(P(o.$$.fragment,t),P(d.$$.fragment,t),P(w.$$.fragment,t),P(C.$$.fragment,t),P(A.$$.fragment,t),P(q.$$.fragment,t),J=!0)},o(t){U(o.$$.fragment,t),U(d.$$.fragment,t),U(w.$$.fragment,t),U(C.$$.fragment,t),U(A.$$.fragment,t),U(q.$$.fragment,t),J=!1},d(t){t&&a(n),F(o),F(d),M&&M.d(),F(w),F(C),F(A),F(q)}}}function bt(t,n,e){let o;return l(t,K,(t=>e(0,o=t))),[o]}return new class extends G{constructor(t){super(),M(this,t,bt,vt,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map