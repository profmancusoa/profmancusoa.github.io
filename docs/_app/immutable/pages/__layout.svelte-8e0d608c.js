import{S as R,i as Q,s as W,e as Y,b as z,E as O,h as _,l as g,a as S,r as U,m as p,n as b,c as L,u as F,F as Ve,p as o,G as u,v as De,f as D,g as Z,d as ee,t as N,H as pe,I as te,w as q,x as G,y as J,B as K,J as Pe,K as le,L as se,M as re,N as ne}from"../chunks/index-02a6647b.js";import{t as Ce}from"../chunks/helpers-e147ed77.js";import{p as Ne}from"../chunks/Categoria.svelte_svelte_type_style_lang-56b3738a.js";import{a as ae}from"../chunks/store-a1d7f94c.js";import"../chunks/index-efb87244.js";function be(r){let a,t,e,l,n,i,m,h,k,w,s,v,I,f,V,y,$,x,d,E,c,P,A,B,T,H;return{c(){a=g("nav"),t=g("div"),e=g("div"),l=g("img"),i=S(),m=g("a"),h=g("h1"),k=U("ProfMancusoa"),w=S(),s=g("button"),v=g("span"),I=S(),f=g("div"),V=g("ul"),y=g("li"),$=g("a"),x=g("b"),d=U("Home"),c=S(),P=g("li"),A=g("a"),B=g("b"),T=U("About"),this.h()},l(M){a=p(M,"NAV",{class:!0});var C=b(a);t=p(C,"DIV",{class:!0});var j=b(t);e=p(j,"DIV",{class:!0});var oe=b(e);l=p(oe,"IMG",{src:!0,class:!0,alt:!0,width:!0,height:!0}),oe.forEach(_),i=L(j),m=p(j,"A",{class:!0,href:!0});var ce=b(m);h=p(ce,"H1",{class:!0});var ie=b(h);k=F(ie,"ProfMancusoa"),ie.forEach(_),ce.forEach(_),w=L(j),s=p(j,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0});var ue=b(s);v=p(ue,"SPAN",{class:!0}),b(v).forEach(_),ue.forEach(_),I=L(j),f=p(j,"DIV",{class:!0,id:!0});var fe=b(f);V=p(fe,"UL",{class:!0});var X=b(V);y=p(X,"LI",{class:!0});var de=b(y);$=p(de,"A",{class:!0,href:!0});var _e=b($);x=p(_e,"B",{});var he=b(x);d=F(he,"Home"),he.forEach(_),_e.forEach(_),de.forEach(_),c=L(X),P=p(X,"LI",{class:!0});var ve=b(P);A=p(ve,"A",{class:!0,href:!0});var me=b(A);B=p(me,"B",{});var ge=b(B);T=F(ge,"About"),ge.forEach(_),me.forEach(_),ve.forEach(_),X.forEach(_),fe.forEach(_),j.forEach(_),C.forEach(_),this.h()},h(){Ve(l.src,n="/img/avatars/profmancuso-round.jpg")||o(l,"src",n),o(l,"class","rounded-circle img-fluid"),o(l,"alt","ProfMancusoa"),o(l,"width","36"),o(l,"height","36"),o(e,"class","avatar svelte-1mbzxsw"),o(h,"class","svelte-1mbzxsw"),o(m,"class","navbar-brand"),o(m,"href","/"),o(v,"class","navbar-toggler-icon"),o(s,"class","navbar-toggler"),o(s,"type","button"),o(s,"data-bs-toggle","collapse"),o(s,"data-bs-target","#navbarSupportedContent"),o(s,"aria-controls","navbarSupportedContent"),o(s,"aria-expanded","false"),o(s,"aria-label","Toggle navigation"),o($,"class",E="nav-link "+r[1]+" svelte-1mbzxsw"),o($,"href","/"),o(y,"class","nav-item"),o(A,"class",H="nav-link "+r[2]+" svelte-1mbzxsw"),o(A,"href","/about"),o(P,"class","nav-item"),o(V,"class","navbar-nav ms-auto mb-2 mb-lg-0"),o(f,"class","collapse navbar-collapse"),o(f,"id","navbarSupportedContent"),o(t,"class","container"),o(a,"class","navbar navbar-expand-md navbar-dark fixed-top bg-primary shadow")},m(M,C){z(M,a,C),u(a,t),u(t,e),u(e,l),u(t,i),u(t,m),u(m,h),u(h,k),u(t,w),u(t,s),u(s,v),u(t,I),u(t,f),u(f,V),u(V,y),u(y,$),u($,x),u(x,d),u(V,c),u(V,P),u(P,A),u(A,B),u(B,T)},p(M,C){C&2&&E!==(E="nav-link "+M[1]+" svelte-1mbzxsw")&&o($,"class",E),C&4&&H!==(H="nav-link "+M[2]+" svelte-1mbzxsw")&&o(A,"class",H)},d(M){M&&_(a)}}}function Ae(r){let a,t=r[0]!=null&&be(r);return{c(){t&&t.c(),a=Y()},l(e){t&&t.l(e),a=Y()},m(e,l){t&&t.m(e,l),z(e,a,l)},p(e,[l]){e[0]!=null?t?t.p(e,l):(t=be(e),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},i:O,o:O,d(e){t&&t.d(e),e&&_(a)}}}function Me(r,a,t){let{pagina:e}=a,l,n;return r.$$set=i=>{"pagina"in i&&t(0,e=i.pagina)},r.$$.update=()=>{r.$$.dirty&1&&(t(1,l=e==""?"active":""),t(2,n=e=="about"?"active":""))},[e,l,n]}class Se extends R{constructor(a){super(),Q(this,a,Me,Ae,W,{pagina:0})}}function $e(r){let a,t,e,l;return{c(){a=g("footer"),t=g("div"),e=g("p"),l=U("Copyright \xA9 profmancusoa 2022 - v1.3.1"),this.h()},l(n){a=p(n,"FOOTER",{class:!0});var i=b(a);t=p(i,"DIV",{class:!0});var m=b(t);e=p(m,"P",{class:!0});var h=b(e);l=F(h,"Copyright \xA9 profmancusoa 2022 - v1.3.1"),h.forEach(_),m.forEach(_),i.forEach(_),this.h()},h(){o(e,"class","m-0 text-center text-white"),o(t,"class","container"),o(a,"class","py-1 bg-dark fixed-bottom")},m(n,i){z(n,a,i),u(a,t),u(t,e),u(e,l)},d(n){n&&_(a)}}}function Le(r){let a,t=r[0]!=null&&$e();return{c(){t&&t.c(),a=Y()},l(e){t&&t.l(e),a=Y()},m(e,l){t&&t.m(e,l),z(e,a,l)},p(e,[l]){e[0]!=null?t||(t=$e(),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},i:O,o:O,d(e){t&&t.d(e),e&&_(a)}}}function ze(r,a,t){let{pagina:e}=a;return r.$$set=l=>{"pagina"in l&&t(0,e=l.pagina)},[e]}class Be extends R{constructor(a){super(),Q(this,a,ze,Le,W,{pagina:0})}}function je(r){let a,t,e;return{c(){a=g("li"),t=g("span"),e=U(r[0]),this.h()},l(l){a=p(l,"LI",{class:!0});var n=b(a);t=p(n,"SPAN",{class:!0});var i=b(t);e=F(i,r[0]),i.forEach(_),n.forEach(_),this.h()},h(){o(t,"class","categoria badge "+r[1]+" text-truncate mb-1 svelte-1dfn51t"),o(a,"class","svelte-1dfn51t")},m(l,n){z(l,a,n),u(a,t),u(t,e)},p(l,[n]){n&1&&De(e,l[0])},i:O,o:O,d(l){l&&_(a)}}}function xe(r,a,t){let{text:e}=a,l=["bg-primary","bg-success","bg-danger","bg-warning","bg-info"],n=l[Math.floor(Math.random()*l.length)];return r.$$set=i=>{"text"in i&&t(0,e=i.text)},[e,n]}class ye extends R{constructor(a){super(),Q(this,a,xe,je,W,{text:0})}}function Ee(r,a,t){const e=r.slice();return e[4]=a[t],e}function ke(r,a,t){const e=r.slice();return e[4]=a[t],e}function Ie(r){let a,t;return a=new ye({props:{text:r[4]}}),{c(){q(a.$$.fragment)},l(e){G(a.$$.fragment,e)},m(e,l){J(a,e,l),t=!0},p(e,l){const n={};l&1&&(n.text=e[4]),a.$set(n)},i(e){t||(D(a.$$.fragment,e),t=!0)},o(e){N(a.$$.fragment,e),t=!1},d(e){K(a,e)}}}function we(r){let a,t;return a=new ye({props:{text:r[4]}}),{c(){q(a.$$.fragment)},l(e){G(a.$$.fragment,e)},m(e,l){J(a,e,l),t=!0},p(e,l){const n={};l&2&&(n.text=e[4]),a.$set(n)},i(e){t||(D(a.$$.fragment,e),t=!0)},o(e){N(a.$$.fragment,e),t=!1},d(e){K(a,e)}}}function He(r){let a,t,e,l,n,i,m,h,k,w,s,v,I=r[0],f=[];for(let d=0;d<I.length;d+=1)f[d]=Ie(ke(r,I,d));const V=d=>N(f[d],1,1,()=>{f[d]=null});let y=r[1],$=[];for(let d=0;d<y.length;d+=1)$[d]=we(Ee(r,y,d));const x=d=>N($[d],1,1,()=>{$[d]=null});return{c(){a=g("div"),t=g("div"),e=U("Categorie"),l=S(),n=g("div"),i=g("div"),m=g("div"),h=g("ul");for(let d=0;d<f.length;d+=1)f[d].c();k=S(),w=g("div"),s=g("ul");for(let d=0;d<$.length;d+=1)$[d].c();this.h()},l(d){a=p(d,"DIV",{class:!0});var E=b(a);t=p(E,"DIV",{class:!0});var c=b(t);e=F(c,"Categorie"),c.forEach(_),l=L(E),n=p(E,"DIV",{class:!0});var P=b(n);i=p(P,"DIV",{class:!0});var A=b(i);m=p(A,"DIV",{class:!0});var B=b(m);h=p(B,"UL",{class:!0});var T=b(h);for(let C=0;C<f.length;C+=1)f[C].l(T);T.forEach(_),B.forEach(_),k=L(A),w=p(A,"DIV",{class:!0});var H=b(w);s=p(H,"UL",{class:!0});var M=b(s);for(let C=0;C<$.length;C+=1)$[C].l(M);M.forEach(_),H.forEach(_),A.forEach(_),P.forEach(_),E.forEach(_),this.h()},h(){o(t,"class","card-header"),o(h,"class","list-unstyled mb-0"),o(m,"class","col-sm-6 d-flex justify-content-center"),o(s,"class","list-unstyled mb-0"),o(w,"class","col-sm-6 d-flex justify-content-center"),o(i,"class","row"),o(n,"class","card-body"),o(a,"class","card mb-4 shadow")},m(d,E){z(d,a,E),u(a,t),u(t,e),u(a,l),u(a,n),u(n,i),u(i,m),u(m,h);for(let c=0;c<f.length;c+=1)f[c].m(h,null);u(i,k),u(i,w),u(w,s);for(let c=0;c<$.length;c+=1)$[c].m(s,null);v=!0},p(d,[E]){if(E&1){I=d[0];let c;for(c=0;c<I.length;c+=1){const P=ke(d,I,c);f[c]?(f[c].p(P,E),D(f[c],1)):(f[c]=Ie(P),f[c].c(),D(f[c],1),f[c].m(h,null))}for(Z(),c=I.length;c<f.length;c+=1)V(c);ee()}if(E&2){y=d[1];let c;for(c=0;c<y.length;c+=1){const P=Ee(d,y,c);$[c]?($[c].p(P,E),D($[c],1)):($[c]=we(P),$[c].c(),D($[c],1),$[c].m(s,null))}for(Z(),c=y.length;c<$.length;c+=1)x(c);ee()}},i(d){if(!v){for(let E=0;E<I.length;E+=1)D(f[E]);for(let E=0;E<y.length;E+=1)D($[E]);v=!0}},o(d){f=f.filter(Boolean);for(let E=0;E<f.length;E+=1)N(f[E]);$=$.filter(Boolean);for(let E=0;E<$.length;E+=1)N($[E]);v=!1},d(d){d&&_(a),pe(f,d),pe($,d)}}}function Te(r,a,t){let e;te(r,ae,m=>t(3,e=m));let l=[],n,i;return function(){let m=new Set;e.forEach(k=>{k.metadata.pubblicato==!0&&k.metadata.categorie.forEach(w=>{m.add(w)})}),l=[...m];let h=Math.round(l.length/2);t(0,n=l.slice(0,h)),t(1,i=l.slice(h))}(),[n,i]}class Ue extends R{constructor(a){super(),Q(this,a,Te,He,W,{})}}function Fe(r){let a,t,e,l,n,i,m,h,k;const w=r[3].default,s=le(w,r,r[2],null);return h=new Ue({}),{c(){a=g("div"),t=g("div"),e=g("div"),s&&s.c(),l=S(),n=g("div"),i=S(),m=g("div"),q(h.$$.fragment),this.h()},l(v){a=p(v,"DIV",{class:!0});var I=b(a);t=p(I,"DIV",{class:!0});var f=b(t);e=p(f,"DIV",{class:!0});var V=b(e);s&&s.l(V),V.forEach(_),l=L(f),n=p(f,"DIV",{class:!0}),b(n).forEach(_),i=L(f),m=p(f,"DIV",{class:!0});var y=b(m);G(h.$$.fragment,y),y.forEach(_),f.forEach(_),I.forEach(_),this.h()},h(){o(e,"class","col-lg-8"),o(n,"class","col-lg-1"),o(m,"class","col-lg-3 d-none d-lg-block"),o(t,"class","row"),o(a,"class","container py-5 mt-5")},m(v,I){z(v,a,I),u(a,t),u(t,e),s&&s.m(e,null),u(t,l),u(t,n),u(t,i),u(t,m),J(h,m,null),k=!0},p(v,I){s&&s.p&&(!k||I&4)&&se(s,w,v,v[2],k?ne(w,v[2],I,null):re(v[2]),null)},i(v){k||(D(s,v),D(h.$$.fragment,v),k=!0)},o(v){N(s,v),N(h.$$.fragment,v),k=!1},d(v){v&&_(a),s&&s.d(v),K(h)}}}function Oe(r){let a;const t=r[3].default,e=le(t,r,r[2],null);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,n){e&&e.m(l,n),a=!0},p(l,n){e&&e.p&&(!a||n&4)&&se(e,t,l,l[2],a?ne(t,l[2],n,null):re(l[2]),null)},i(l){a||(D(e,l),a=!0)},o(l){N(e,l),a=!1},d(l){e&&e.d(l)}}}function qe(r){let a;const t=r[3].default,e=le(t,r,r[2],null);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,n){e&&e.m(l,n),a=!0},p(l,n){e&&e.p&&(!a||n&4)&&se(e,t,l,l[2],a?ne(t,l[2],n,null):re(l[2]),null)},i(l){a||(D(e,l),a=!0)},o(l){N(e,l),a=!1},d(l){e&&e.d(l)}}}function Ge(r){let a,t,e,l,n,i,m;a=new Se({props:{pagina:r[0].routeId}});const h=[qe,Oe,Fe],k=[];function w(s,v){return s[0].routeId==null?0:s[0].routeId=="about"?1:2}return e=w(r),l=k[e]=h[e](r),i=new Be({props:{pagina:r[0].routeId}}),{c(){q(a.$$.fragment),t=S(),l.c(),n=S(),q(i.$$.fragment)},l(s){G(a.$$.fragment,s),t=L(s),l.l(s),n=L(s),G(i.$$.fragment,s)},m(s,v){J(a,s,v),z(s,t,v),k[e].m(s,v),z(s,n,v),J(i,s,v),m=!0},p(s,[v]){const I={};v&1&&(I.pagina=s[0].routeId),a.$set(I);let f=e;e=w(s),e===f?k[e].p(s,v):(Z(),N(k[f],1,1,()=>{k[f]=null}),ee(),l=k[e],l?l.p(s,v):(l=k[e]=h[e](s),l.c()),D(l,1),l.m(n.parentNode,n));const V={};v&1&&(V.pagina=s[0].routeId),i.$set(V)},i(s){m||(D(a.$$.fragment,s),D(l),D(i.$$.fragment,s),m=!0)},o(s){N(a.$$.fragment,s),N(l),N(i.$$.fragment,s),m=!1},d(s){K(a,s),s&&_(t),k[e].d(s),s&&_(n),K(i,s)}}}const Ye=async({fetch:r})=>{const t=await(await r("/blog/post.json")).json();return t.forEach(e=>{e.metadata.cover=Ce(e.metadata.titolo)+"/"+e.metadata.cover}),{props:{allPosts:t}}};function Je(r,a,t){let e,l;te(r,ae,h=>t(4,e=h)),te(r,Ne,h=>t(0,l=h));let{$$slots:n={},$$scope:i}=a,{allPosts:m}=a;return Pe(ae,e=m,e),r.$$set=h=>{"allPosts"in h&&t(1,m=h.allPosts),"$$scope"in h&&t(2,i=h.$$scope)},[l,m,i,n]}class Ze extends R{constructor(a){super(),Q(this,a,Je,Ge,W,{allPosts:1})}}export{Ze as default,Ye as load};
