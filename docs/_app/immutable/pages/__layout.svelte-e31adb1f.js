import{S as K,i as W,s as Y,e as F,b as I,E as O,h as f,l as p,a as D,r as j,m as v,n as m,c as $,u as G,F as be,p as u,G as _,w as ue,H as ge,x as fe,y as de,t as S,d as we,f as N,B as _e,I as pe,J as Ee,g as ke,K as Q,L as R,M as X,N as Z}from"../chunks/index-c6be98ca.js";import{t as Ie}from"../chunks/helpers-e147ed77.js";import{p as ye}from"../chunks/Categoria.svelte_svelte_type_style_lang-d76a398c.js";import{a as ve}from"../chunks/store-f582fd05.js";import"../chunks/index-921bc2ca.js";function me(n){let a,t,e,s,i,l,r,c,g,h,d,E,w,k,o,b,y,L,B,M,U,z,V,T,J,H;return{c(){a=p("nav"),t=p("div"),e=p("div"),s=p("img"),l=D(),r=p("a"),c=p("h1"),g=j("ProfMancusoa"),h=D(),d=p("button"),E=p("span"),w=D(),k=p("div"),o=p("ul"),b=p("li"),y=p("a"),L=p("b"),B=j("Home"),U=D(),z=p("li"),V=p("a"),T=p("b"),J=j("About"),this.h()},l(P){a=v(P,"NAV",{class:!0});var A=m(a);t=v(A,"DIV",{class:!0});var C=m(t);e=v(C,"DIV",{class:!0});var x=m(e);s=v(x,"IMG",{src:!0,class:!0,alt:!0,width:!0,height:!0}),x.forEach(f),l=$(C),r=v(C,"A",{class:!0,href:!0});var ee=m(r);c=v(ee,"H1",{class:!0});var te=m(c);g=G(te,"ProfMancusoa"),te.forEach(f),ee.forEach(f),h=$(C),d=v(C,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0});var ae=m(d);E=v(ae,"SPAN",{class:!0}),m(E).forEach(f),ae.forEach(f),w=$(C),k=v(C,"DIV",{class:!0,id:!0});var se=m(k);o=v(se,"UL",{class:!0});var q=m(o);b=v(q,"LI",{class:!0});var le=m(b);y=v(le,"A",{class:!0,href:!0});var re=m(y);L=v(re,"B",{});var oe=m(L);B=G(oe,"Home"),oe.forEach(f),re.forEach(f),le.forEach(f),U=$(q),z=v(q,"LI",{class:!0});var ne=m(z);V=v(ne,"A",{class:!0,href:!0});var ie=m(V);T=v(ie,"B",{});var ce=m(T);J=G(ce,"About"),ce.forEach(f),ie.forEach(f),ne.forEach(f),q.forEach(f),se.forEach(f),C.forEach(f),A.forEach(f),this.h()},h(){be(s.src,i="/img/avatars/profmancuso-round.webp")||u(s,"src",i),u(s,"class","rounded-circle img-fluid"),u(s,"alt","ProfMancusoa"),u(s,"width","36"),u(s,"height","36"),u(e,"class","avatar svelte-1mbzxsw"),u(c,"class","svelte-1mbzxsw"),u(r,"class","navbar-brand"),u(r,"href","/"),u(E,"class","navbar-toggler-icon"),u(d,"class","navbar-toggler"),u(d,"type","button"),u(d,"data-bs-toggle","collapse"),u(d,"data-bs-target","#navbarSupportedContent"),u(d,"aria-controls","navbarSupportedContent"),u(d,"aria-expanded","false"),u(d,"aria-label","Toggle navigation"),u(y,"class",M="nav-link "+n[1]+" svelte-1mbzxsw"),u(y,"href","/"),u(b,"class","nav-item"),u(V,"class",H="nav-link "+n[2]+" svelte-1mbzxsw"),u(V,"href","/about"),u(z,"class","nav-item"),u(o,"class","navbar-nav ms-auto mb-2 mb-lg-0"),u(k,"class","collapse navbar-collapse"),u(k,"id","navbarSupportedContent"),u(t,"class","container"),u(a,"class","navbar navbar-expand-md navbar-dark fixed-top bg-primary shadow")},m(P,A){I(P,a,A),_(a,t),_(t,e),_(e,s),_(t,l),_(t,r),_(r,c),_(c,g),_(t,h),_(t,d),_(d,E),_(t,w),_(t,k),_(k,o),_(o,b),_(b,y),_(y,L),_(L,B),_(o,U),_(o,z),_(z,V),_(V,T),_(T,J)},p(P,A){A&2&&M!==(M="nav-link "+P[1]+" svelte-1mbzxsw")&&u(y,"class",M),A&4&&H!==(H="nav-link "+P[2]+" svelte-1mbzxsw")&&u(V,"class",H)},d(P){P&&f(a)}}}function De(n){let a,t=n[0]!=null&&me(n);return{c(){t&&t.c(),a=F()},l(e){t&&t.l(e),a=F()},m(e,s){t&&t.m(e,s),I(e,a,s)},p(e,[s]){e[0]!=null?t?t.p(e,s):(t=me(e),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},i:O,o:O,d(e){t&&t.d(e),e&&f(a)}}}function $e(n,a,t){let{pagina:e}=a,s,i;return n.$$set=l=>{"pagina"in l&&t(0,e=l.pagina)},n.$$.update=()=>{n.$$.dirty&1&&(t(1,s=e==""?"active":""),t(2,i=e=="about"?"active":""))},[e,s,i]}class Le extends K{constructor(a){super(),W(this,a,$e,De,Y,{pagina:0})}}function he(n){let a,t,e,s;return{c(){a=p("footer"),t=p("div"),e=p("p"),s=j("Copyright \xA9 profmancusoa 2022-2023 \xA0 v1.7.13"),this.h()},l(i){a=v(i,"FOOTER",{class:!0});var l=m(a);t=v(l,"DIV",{class:!0});var r=m(t);e=v(r,"P",{class:!0});var c=m(e);s=G(c,"Copyright \xA9 profmancusoa 2022-2023 \xA0 v1.7.13"),c.forEach(f),r.forEach(f),l.forEach(f),this.h()},h(){u(e,"class","m-0 text-center text-white"),u(t,"class","container"),u(a,"class","py-1 bg-dark fixed-bottom")},m(i,l){I(i,a,l),_(a,t),_(t,e),_(e,s)},d(i){i&&f(a)}}}function Ve(n){let a,t=n[0]!=null&&he();return{c(){t&&t.c(),a=F()},l(e){t&&t.l(e),a=F()},m(e,s){t&&t.m(e,s),I(e,a,s)},p(e,[s]){e[0]!=null?t||(t=he(),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},i:O,o:O,d(e){t&&t.d(e),e&&f(a)}}}function Pe(n,a,t){let{pagina:e}=a;return n.$$set=s=>{"pagina"in s&&t(0,e=s.pagina)},[e]}class Ce extends K{constructor(a){super(),W(this,a,Pe,Ve,Y,{pagina:0})}}function Se(n){let a,t,e,s,i;return{c(){a=p("script"),e=D(),s=p("script"),i=j(`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-CZBQX0F4LS');`),this.h()},l(l){a=v(l,"SCRIPT",{src:!0});var r=m(a);r.forEach(f),e=$(l),s=v(l,"SCRIPT",{});var c=m(s);i=G(c,`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-CZBQX0F4LS');`),c.forEach(f),this.h()},h(){a.async=!0,be(a.src,t="https://www.googletagmanager.com/gtag/js?id=G-CZBQX0F4LS")||u(a,"src",t)},m(l,r){I(l,a,r),I(l,e,r),I(l,s,r),_(s,i)},d(l){l&&f(a),l&&f(e),l&&f(s)}}}function Ne(n){let a,t,e,s;const i=n[3].default,l=Q(i,n,n[2],null);return{c(){a=p("div"),t=p("div"),e=p("div"),l&&l.c(),this.h()},l(r){a=v(r,"DIV",{class:!0});var c=m(a);t=v(c,"DIV",{class:!0});var g=m(t);e=v(g,"DIV",{class:!0});var h=m(e);l&&l.l(h),h.forEach(f),g.forEach(f),c.forEach(f),this.h()},h(){u(e,"class","col-lg-12"),u(t,"class","row"),u(a,"class","container py-5 mt-5")},m(r,c){I(r,a,c),_(a,t),_(t,e),l&&l.m(e,null),s=!0},p(r,c){l&&l.p&&(!s||c&4)&&R(l,i,r,r[2],s?Z(i,r[2],c,null):X(r[2]),null)},i(r){s||(N(l,r),s=!0)},o(r){S(l,r),s=!1},d(r){r&&f(a),l&&l.d(r)}}}function Ae(n){let a,t,e,s,i,l,r,c;const g=n[3].default,h=Q(g,n,n[2],null);return{c(){a=p("div"),t=p("div"),e=p("div"),s=D(),i=p("div"),h&&h.c(),l=D(),r=p("div"),this.h()},l(d){a=v(d,"DIV",{class:!0});var E=m(a);t=v(E,"DIV",{class:!0});var w=m(t);e=v(w,"DIV",{class:!0}),m(e).forEach(f),s=$(w),i=v(w,"DIV",{class:!0});var k=m(i);h&&h.l(k),k.forEach(f),l=$(w),r=v(w,"DIV",{class:!0}),m(r).forEach(f),w.forEach(f),E.forEach(f),this.h()},h(){u(e,"class","col-lg-2"),u(i,"class","col-lg-8"),u(r,"class","col-lg-2"),u(t,"class","row"),u(a,"class","container py-5 mt-5")},m(d,E){I(d,a,E),_(a,t),_(t,e),_(t,s),_(t,i),h&&h.m(i,null),_(t,l),_(t,r),c=!0},p(d,E){h&&h.p&&(!c||E&4)&&R(h,g,d,d[2],c?Z(g,d[2],E,null):X(d[2]),null)},i(d){c||(N(h,d),c=!0)},o(d){S(h,d),c=!1},d(d){d&&f(a),h&&h.d(d)}}}function Be(n){let a;const t=n[3].default,e=Q(t,n,n[2],null);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,i){e&&e.m(s,i),a=!0},p(s,i){e&&e.p&&(!a||i&4)&&R(e,t,s,s[2],a?Z(t,s[2],i,null):X(s[2]),null)},i(s){a||(N(e,s),a=!0)},o(s){S(e,s),a=!1},d(s){e&&e.d(s)}}}function ze(n){let a;const t=n[3].default,e=Q(t,n,n[2],null);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,i){e&&e.m(s,i),a=!0},p(s,i){e&&e.p&&(!a||i&4)&&R(e,t,s,s[2],a?Z(t,s[2],i,null):X(s[2]),null)},i(s){a||(N(e,s),a=!0)},o(s){S(e,s),a=!1},d(s){e&&e.d(s)}}}function Fe(n){let a,t,e,s,i,l,r,c,g,h,d=Se();e=new Le({props:{pagina:n[0].routeId}});const E=[ze,Be,Ae,Ne],w=[];function k(o,b){return b&1&&(i=null),o[0].routeId==null?0:o[0].routeId=="about"?1:(i==null&&(i=!!o[0].routeId.startsWith("blog")),i?2:3)}return l=k(n,-1),r=w[l]=E[l](n),g=new Ce({props:{pagina:n[0].routeId}}),{c(){d&&d.c(),a=F(),t=D(),ue(e.$$.fragment),s=D(),r.c(),c=D(),ue(g.$$.fragment)},l(o){const b=ge('[data-svelte="svelte-1lgrerf"]',document.head);d&&d.l(b),a=F(),b.forEach(f),t=$(o),fe(e.$$.fragment,o),s=$(o),r.l(o),c=$(o),fe(g.$$.fragment,o)},m(o,b){d&&d.m(document.head,null),_(document.head,a),I(o,t,b),de(e,o,b),I(o,s,b),w[l].m(o,b),I(o,c,b),de(g,o,b),h=!0},p(o,[b]){const y={};b&1&&(y.pagina=o[0].routeId),e.$set(y);let L=l;l=k(o,b),l===L?w[l].p(o,b):(ke(),S(w[L],1,1,()=>{w[L]=null}),we(),r=w[l],r?r.p(o,b):(r=w[l]=E[l](o),r.c()),N(r,1),r.m(c.parentNode,c));const B={};b&1&&(B.pagina=o[0].routeId),g.$set(B)},i(o){h||(N(e.$$.fragment,o),N(r),N(g.$$.fragment,o),h=!0)},o(o){S(e.$$.fragment,o),S(r),S(g.$$.fragment,o),h=!1},d(o){d&&d.d(o),f(a),o&&f(t),_e(e,o),o&&f(s),w[l].d(o),o&&f(c),_e(g,o)}}}const Oe=async({fetch:n})=>{const t=await(await n("/blog/post.json")).json();return t.forEach(e=>{e.metadata.cover=Ie(e.metadata.titolo)+"/"+e.metadata.cover}),{props:{allPosts:t}}};function Te(n,a,t){let e,s;pe(n,ve,c=>t(4,e=c)),pe(n,ye,c=>t(0,s=c));let{$$slots:i={},$$scope:l}=a,{allPosts:r}=a;return Ee(ve,e=r,e),n.$$set=c=>{"allPosts"in c&&t(1,r=c.allPosts),"$$scope"in c&&t(2,l=c.$$scope)},[s,r,l,i]}class Qe extends K{constructor(a){super(),W(this,a,Te,Fe,Y,{allPosts:1})}}export{Qe as default,Oe as load};
