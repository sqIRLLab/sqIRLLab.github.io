import{s as S,n as _,b as x}from"../chunks/C-BJUOdO.js";import{S as j,i as q,d as u,v as f,c as m,j as d,n as g,o as h,p as v,f as y,r as $,u as E,s as C}from"../chunks/DcgCmqao.js";import{s as H}from"../chunks/BivaNcMt.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},k={subscribe(s){return P().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=$("h1"),o=E(r),n=C(),i=$("p"),l=E(c)},l(e){t=g(e,"H1",{});var a=h(t);o=v(a,r),a.forEach(u),n=y(e),i=g(e,"P",{});var p=h(i);l=v(p,c),p.forEach(u)},m(e,a){m(e,t,a),d(t,o),m(e,n,a),m(e,i,a),d(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&f(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&f(l,c)},i:_,o:_,d(e){e&&(u(t),u(n),u(i))}}}function z(s,t,r){let o;return x(s,k,n=>r(0,o=n)),[o]}let F=class extends j{constructor(t){super(),q(this,t,z,w,S,{})}};export{F as component};
