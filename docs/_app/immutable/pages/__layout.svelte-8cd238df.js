import{S as R,i as Q,s as W,e as Y,b as j,E as F,h as _,l as p,a as S,r as O,m as b,n as $,c as z,u as U,F as Ve,p as c,G as d,v as De,f as D,g as Z,d as ee,t as N,H as pe,I as te,w as q,x as G,y as J,B as K,J as Pe,K as Ce,L as Ne,M as le,N as se,O as re,P as oe}from"../chunks/index-82bed2ab.js";import{t as Ae}from"../chunks/helpers-e147ed77.js";import{p as Me}from"../chunks/Categoria.svelte_svelte_type_style_lang-aec75384.js";import{a as ae}from"../chunks/store-91e5e45d.js";import"../chunks/index-8fd3633e.js";function be(r){let a,t,e,l,o,n,i,f,I,y,m,v,w,s,k,V,g,L,h,E,u,P,A,B,T,x;return{c(){a=p("nav"),t=p("div"),e=p("div"),l=p("img"),n=S(),i=p("a"),f=p("h1"),I=O("ProfMancusoa"),y=S(),m=p("button"),v=p("span"),w=S(),s=p("div"),k=p("ul"),V=p("li"),g=p("a"),L=p("b"),h=O("Home"),u=S(),P=p("li"),A=p("a"),B=p("b"),T=O("About"),this.h()},l(M){a=b(M,"NAV",{class:!0});var C=$(a);t=b(C,"DIV",{class:!0});var H=$(t);e=b(H,"DIV",{class:!0});var ne=$(e);l=b(ne,"IMG",{src:!0,class:!0,alt:!0,width:!0,height:!0}),ne.forEach(_),n=z(H),i=b(H,"A",{class:!0,href:!0});var ce=$(i);f=b(ce,"H1",{class:!0});var ie=$(f);I=U(ie,"ProfMancusoa"),ie.forEach(_),ce.forEach(_),y=z(H),m=b(H,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0});var ue=$(m);v=b(ue,"SPAN",{class:!0}),$(v).forEach(_),ue.forEach(_),w=z(H),s=b(H,"DIV",{class:!0,id:!0});var fe=$(s);k=b(fe,"UL",{class:!0});var X=$(k);V=b(X,"LI",{class:!0});var de=$(V);g=b(de,"A",{class:!0,href:!0});var _e=$(g);L=b(_e,"B",{});var he=$(L);h=U(he,"Home"),he.forEach(_),_e.forEach(_),de.forEach(_),u=z(X),P=b(X,"LI",{class:!0});var me=$(P);A=b(me,"A",{class:!0,href:!0});var ve=$(A);B=b(ve,"B",{});var ge=$(B);T=U(ge,"About"),ge.forEach(_),ve.forEach(_),me.forEach(_),X.forEach(_),fe.forEach(_),H.forEach(_),C.forEach(_),this.h()},h(){Ve(l.src,o="/img/avatars/profmancuso-round.jpg")||c(l,"src",o),c(l,"class","rounded-circle img-fluid"),c(l,"alt","ProfMancusoa"),c(l,"width","36"),c(l,"height","36"),c(e,"class","avatar svelte-1mbzxsw"),c(f,"class","svelte-1mbzxsw"),c(i,"class","navbar-brand"),c(i,"href","/"),c(v,"class","navbar-toggler-icon"),c(m,"class","navbar-toggler"),c(m,"type","button"),c(m,"data-bs-toggle","collapse"),c(m,"data-bs-target","#navbarSupportedContent"),c(m,"aria-controls","navbarSupportedContent"),c(m,"aria-expanded","false"),c(m,"aria-label","Toggle navigation"),c(g,"class",E="nav-link "+r[1]+" svelte-1mbzxsw"),c(g,"href","/"),c(V,"class","nav-item"),c(A,"class",x="nav-link "+r[2]+" svelte-1mbzxsw"),c(A,"href","/about"),c(P,"class","nav-item"),c(k,"class","navbar-nav ms-auto mb-2 mb-lg-0"),c(s,"class","collapse navbar-collapse"),c(s,"id","navbarSupportedContent"),c(t,"class","container"),c(a,"class","navbar navbar-expand-md navbar-dark fixed-top bg-primary shadow")},m(M,C){j(M,a,C),d(a,t),d(t,e),d(e,l),d(t,n),d(t,i),d(i,f),d(f,I),d(t,y),d(t,m),d(m,v),d(t,w),d(t,s),d(s,k),d(k,V),d(V,g),d(g,L),d(L,h),d(k,u),d(k,P),d(P,A),d(A,B),d(B,T)},p(M,C){C&2&&E!==(E="nav-link "+M[1]+" svelte-1mbzxsw")&&c(g,"class",E),C&4&&x!==(x="nav-link "+M[2]+" svelte-1mbzxsw")&&c(A,"class",x)},d(M){M&&_(a)}}}function Se(r){let a,t=r[0]!=null&&be(r);return{c(){t&&t.c(),a=Y()},l(e){t&&t.l(e),a=Y()},m(e,l){t&&t.m(e,l),j(e,a,l)},p(e,[l]){e[0]!=null?t?t.p(e,l):(t=be(e),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},i:F,o:F,d(e){t&&t.d(e),e&&_(a)}}}function ze(r,a,t){let{pagina:e}=a,l,o;return r.$$set=n=>{"pagina"in n&&t(0,e=n.pagina)},r.$$.update=()=>{r.$$.dirty&1&&(t(1,l=e==""?"active":""),t(2,o=e=="about"?"active":""))},[e,l,o]}class Le extends R{constructor(a){super(),Q(this,a,ze,Se,W,{pagina:0})}}function $e(r){let a,t,e,l;return{c(){a=p("footer"),t=p("div"),e=p("p"),l=O("Copyright \xA9 profmancusoa 2022-2023 \xA0 v1.3.21"),this.h()},l(o){a=b(o,"FOOTER",{class:!0});var n=$(a);t=b(n,"DIV",{class:!0});var i=$(t);e=b(i,"P",{class:!0});var f=$(e);l=U(f,"Copyright \xA9 profmancusoa 2022-2023 \xA0 v1.3.21"),f.forEach(_),i.forEach(_),n.forEach(_),this.h()},h(){c(e,"class","m-0 text-center text-white"),c(t,"class","container"),c(a,"class","py-1 bg-dark fixed-bottom")},m(o,n){j(o,a,n),d(a,t),d(t,e),d(e,l)},d(o){o&&_(a)}}}function je(r){let a,t=r[0]!=null&&$e();return{c(){t&&t.c(),a=Y()},l(e){t&&t.l(e),a=Y()},m(e,l){t&&t.m(e,l),j(e,a,l)},p(e,[l]){e[0]!=null?t||(t=$e(),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},i:F,o:F,d(e){t&&t.d(e),e&&_(a)}}}function Be(r,a,t){let{pagina:e}=a;return r.$$set=l=>{"pagina"in l&&t(0,e=l.pagina)},[e]}class He extends R{constructor(a){super(),Q(this,a,Be,je,W,{pagina:0})}}function xe(r){let a,t,e;return{c(){a=p("li"),t=p("span"),e=O(r[0]),this.h()},l(l){a=b(l,"LI",{class:!0});var o=$(a);t=b(o,"SPAN",{class:!0});var n=$(t);e=U(n,r[0]),n.forEach(_),o.forEach(_),this.h()},h(){c(t,"class","categoria badge "+r[1]+" text-truncate mb-1 svelte-1dfn51t"),c(a,"class","svelte-1dfn51t")},m(l,o){j(l,a,o),d(a,t),d(t,e)},p(l,[o]){o&1&&De(e,l[0])},i:F,o:F,d(l){l&&_(a)}}}function Te(r,a,t){let{text:e}=a,l=["bg-primary","bg-success","bg-danger","bg-warning","bg-info"],o=l[Math.floor(Math.random()*l.length)];return r.$$set=n=>{"text"in n&&t(0,e=n.text)},[e,o]}class ye extends R{constructor(a){super(),Q(this,a,Te,xe,W,{text:0})}}function Ee(r,a,t){const e=r.slice();return e[4]=a[t],e}function ke(r,a,t){const e=r.slice();return e[4]=a[t],e}function Ie(r){let a,t;return a=new ye({props:{text:r[4]}}),{c(){q(a.$$.fragment)},l(e){G(a.$$.fragment,e)},m(e,l){J(a,e,l),t=!0},p(e,l){const o={};l&1&&(o.text=e[4]),a.$set(o)},i(e){t||(D(a.$$.fragment,e),t=!0)},o(e){N(a.$$.fragment,e),t=!1},d(e){K(a,e)}}}function we(r){let a,t;return a=new ye({props:{text:r[4]}}),{c(){q(a.$$.fragment)},l(e){G(a.$$.fragment,e)},m(e,l){J(a,e,l),t=!0},p(e,l){const o={};l&2&&(o.text=e[4]),a.$set(o)},i(e){t||(D(a.$$.fragment,e),t=!0)},o(e){N(a.$$.fragment,e),t=!1},d(e){K(a,e)}}}function Oe(r){let a,t,e,l,o,n,i,f,I,y,m,v,w=r[0],s=[];for(let h=0;h<w.length;h+=1)s[h]=Ie(ke(r,w,h));const k=h=>N(s[h],1,1,()=>{s[h]=null});let V=r[1],g=[];for(let h=0;h<V.length;h+=1)g[h]=we(Ee(r,V,h));const L=h=>N(g[h],1,1,()=>{g[h]=null});return{c(){a=p("div"),t=p("div"),e=O("Categorie"),l=S(),o=p("div"),n=p("div"),i=p("div"),f=p("ul");for(let h=0;h<s.length;h+=1)s[h].c();I=S(),y=p("div"),m=p("ul");for(let h=0;h<g.length;h+=1)g[h].c();this.h()},l(h){a=b(h,"DIV",{class:!0});var E=$(a);t=b(E,"DIV",{class:!0});var u=$(t);e=U(u,"Categorie"),u.forEach(_),l=z(E),o=b(E,"DIV",{class:!0});var P=$(o);n=b(P,"DIV",{class:!0});var A=$(n);i=b(A,"DIV",{class:!0});var B=$(i);f=b(B,"UL",{class:!0});var T=$(f);for(let C=0;C<s.length;C+=1)s[C].l(T);T.forEach(_),B.forEach(_),I=z(A),y=b(A,"DIV",{class:!0});var x=$(y);m=b(x,"UL",{class:!0});var M=$(m);for(let C=0;C<g.length;C+=1)g[C].l(M);M.forEach(_),x.forEach(_),A.forEach(_),P.forEach(_),E.forEach(_),this.h()},h(){c(t,"class","card-header"),c(f,"class","list-unstyled mb-0"),c(i,"class","col-sm-6 d-flex justify-content-center"),c(m,"class","list-unstyled mb-0"),c(y,"class","col-sm-6 d-flex justify-content-center"),c(n,"class","row"),c(o,"class","card-body"),c(a,"class","card mb-4 shadow")},m(h,E){j(h,a,E),d(a,t),d(t,e),d(a,l),d(a,o),d(o,n),d(n,i),d(i,f);for(let u=0;u<s.length;u+=1)s[u].m(f,null);d(n,I),d(n,y),d(y,m);for(let u=0;u<g.length;u+=1)g[u].m(m,null);v=!0},p(h,[E]){if(E&1){w=h[0];let u;for(u=0;u<w.length;u+=1){const P=ke(h,w,u);s[u]?(s[u].p(P,E),D(s[u],1)):(s[u]=Ie(P),s[u].c(),D(s[u],1),s[u].m(f,null))}for(Z(),u=w.length;u<s.length;u+=1)k(u);ee()}if(E&2){V=h[1];let u;for(u=0;u<V.length;u+=1){const P=Ee(h,V,u);g[u]?(g[u].p(P,E),D(g[u],1)):(g[u]=we(P),g[u].c(),D(g[u],1),g[u].m(m,null))}for(Z(),u=V.length;u<g.length;u+=1)L(u);ee()}},i(h){if(!v){for(let E=0;E<w.length;E+=1)D(s[E]);for(let E=0;E<V.length;E+=1)D(g[E]);v=!0}},o(h){s=s.filter(Boolean);for(let E=0;E<s.length;E+=1)N(s[E]);g=g.filter(Boolean);for(let E=0;E<g.length;E+=1)N(g[E]);v=!1},d(h){h&&_(a),pe(s,h),pe(g,h)}}}function Ue(r,a,t){let e;te(r,ae,i=>t(3,e=i));let l=[],o,n;return function(){let i=new Set;e.forEach(I=>{I.metadata.pubblicato==!0&&I.metadata.categorie.forEach(y=>{i.add(y)})}),l=[...i];let f=Math.round(l.length/2);t(0,o=l.slice(0,f)),t(1,n=l.slice(f))}(),[o,n]}class Fe extends R{constructor(a){super(),Q(this,a,Ue,Oe,W,{})}}function qe(r){let a,t,e,l,o,n,i,f,I;const y=r[3].default,m=le(y,r,r[2],null);return f=new Fe({}),{c(){a=p("div"),t=p("div"),e=p("div"),m&&m.c(),l=S(),o=p("div"),n=S(),i=p("div"),q(f.$$.fragment),this.h()},l(v){a=b(v,"DIV",{class:!0});var w=$(a);t=b(w,"DIV",{class:!0});var s=$(t);e=b(s,"DIV",{class:!0});var k=$(e);m&&m.l(k),k.forEach(_),l=z(s),o=b(s,"DIV",{class:!0}),$(o).forEach(_),n=z(s),i=b(s,"DIV",{class:!0});var V=$(i);G(f.$$.fragment,V),V.forEach(_),s.forEach(_),w.forEach(_),this.h()},h(){c(e,"class","col-lg-8"),c(o,"class","col-lg-1"),c(i,"class","col-lg-3 d-none d-lg-block"),c(t,"class","row"),c(a,"class","container py-5 mt-5")},m(v,w){j(v,a,w),d(a,t),d(t,e),m&&m.m(e,null),d(t,l),d(t,o),d(t,n),d(t,i),J(f,i,null),I=!0},p(v,w){m&&m.p&&(!I||w&4)&&se(m,y,v,v[2],I?oe(y,v[2],w,null):re(v[2]),null)},i(v){I||(D(m,v),D(f.$$.fragment,v),I=!0)},o(v){N(m,v),N(f.$$.fragment,v),I=!1},d(v){v&&_(a),m&&m.d(v),K(f)}}}function Ge(r){let a;const t=r[3].default,e=le(t,r,r[2],null);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,o){e&&e.m(l,o),a=!0},p(l,o){e&&e.p&&(!a||o&4)&&se(e,t,l,l[2],a?oe(t,l[2],o,null):re(l[2]),null)},i(l){a||(D(e,l),a=!0)},o(l){N(e,l),a=!1},d(l){e&&e.d(l)}}}function Je(r){let a;const t=r[3].default,e=le(t,r,r[2],null);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,o){e&&e.m(l,o),a=!0},p(l,o){e&&e.p&&(!a||o&4)&&se(e,t,l,l[2],a?oe(t,l[2],o,null):re(l[2]),null)},i(l){a||(D(e,l),a=!0)},o(l){N(e,l),a=!1},d(l){e&&e.d(l)}}}function Ke(r){let a,t='<script data-goatcounter="https://profmancusoa.goatcounter.com/count" async src="//gc.zgo.at/count.js"><\/script>',e,l,o,n,i,f,I,y;l=new Le({props:{pagina:r[0].routeId}});const m=[Je,Ge,qe],v=[];function w(s,k){return s[0].routeId==null?0:s[0].routeId=="about"?1:2}return n=w(r),i=v[n]=m[n](r),I=new He({props:{pagina:r[0].routeId}}),{c(){a=new Pe(!1),e=S(),q(l.$$.fragment),o=S(),i.c(),f=S(),q(I.$$.fragment),this.h()},l(s){a=Ce(s,!1),e=z(s),G(l.$$.fragment,s),o=z(s),i.l(s),f=z(s),G(I.$$.fragment,s),this.h()},h(){a.a=e},m(s,k){a.m(t,s,k),j(s,e,k),J(l,s,k),j(s,o,k),v[n].m(s,k),j(s,f,k),J(I,s,k),y=!0},p(s,[k]){const V={};k&1&&(V.pagina=s[0].routeId),l.$set(V);let g=n;n=w(s),n===g?v[n].p(s,k):(Z(),N(v[g],1,1,()=>{v[g]=null}),ee(),i=v[n],i?i.p(s,k):(i=v[n]=m[n](s),i.c()),D(i,1),i.m(f.parentNode,f));const L={};k&1&&(L.pagina=s[0].routeId),I.$set(L)},i(s){y||(D(l.$$.fragment,s),D(i),D(I.$$.fragment,s),y=!0)},o(s){N(l.$$.fragment,s),N(i),N(I.$$.fragment,s),y=!1},d(s){s&&a.d(),s&&_(e),K(l,s),s&&_(o),v[n].d(s),s&&_(f),K(I,s)}}}const et=async({fetch:r})=>{const t=await(await r("/blog/post.json")).json();return t.forEach(e=>{e.metadata.cover=Ae(e.metadata.titolo)+"/"+e.metadata.cover}),{props:{allPosts:t}}};function Re(r,a,t){let e,l;te(r,ae,f=>t(4,e=f)),te(r,Me,f=>t(0,l=f));let{$$slots:o={},$$scope:n}=a,{allPosts:i}=a;return Ne(ae,e=i,e),r.$$set=f=>{"allPosts"in f&&t(1,i=f.allPosts),"$$scope"in f&&t(2,n=f.$$scope)},[l,i,n,o]}class tt extends R{constructor(a){super(),Q(this,a,Re,Ke,W,{allPosts:1})}}export{tt as default,et as load};