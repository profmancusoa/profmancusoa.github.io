import{S as kt,i as Lt,s as Tt,C as Li,w as wt,x as Jt,y as At,z as It,A as bt,f as ht,t as xt,B as Ht,P as gt,l as r,r as s,a as u,m as l,n as c,u as n,h as a,c as m,F as we,p as d,b as o,G as i,E as Qt}from"../../chunks/index-a93603ed.js";import{P as $t}from"../../chunks/_post-747cd71b.js";import"../../chunks/helpers-e147ed77.js";import"../../chunks/Categoria.svelte_svelte_type_style_lang-594a32cc.js";function Ct(Q){let p,_,b,g,f,v,y,Ma,Je,E,qa,me,Pa,Ra,pe,Sa,ya,Ae,$,Oa,Ie,z,ka,fe,La,Ta,de,wa,Ja,he,C,G,Ti,xe,N,Aa,He,O,Ia,ve,ha,xa,Qe,M,Ha,_e,Qa,$a,be,Ca,Ga,$e,j,B,wi,Ce,Ge,Ne,je,U,X,Ji,Be,Ue,Xe,k,Na,ge,ja,Ba,De,L,Ua,Xa,Da,Fe,D,F,Ai,Ve,Ze,Ke,We,V,Z,Ii,Ye,ea,aa,q,Fa,Ee,Va,Za,ze,Ka,Wa,ia,K,Ya,ta,W,ei,oa,P,w,Me,ai,ii,qe,ti,oi,J,Pe,ri,li,Re,si,ni,Y,Se,ci,ui,ra,R,mi,ye,pi,fi,Oe,ke,di,vi,la,S,_i,Le,bi,gi,Te,Ei,zi,sa,A,zt=`<code class="language-console">$ npm init -y
$ npm install prisma typescript ts-node @types/node --save-dev
$ npx prisma init
</code>`,na,ee,Mi,ca,I,Mt=`<code class="language-js">generator client <span class="token punctuation">&#123;</span>
  provider <span class="token operator">=</span> <span class="token string">"prisma-client-js"</span> <span class="token comment">//tipo di client</span>
<span class="token punctuation">&#125;</span>
datasource db <span class="token punctuation">&#123;</span>
  provider <span class="token operator">=</span> <span class="token string">"sqlite"</span> <span class="token comment">//DBMS</span>
  url      <span class="token operator">=</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string">"DATABASE_URL&amp;quot"</span><span class="token punctuation">)</span> <span class="token comment">//variabile d\u2019ambiente contenente l\u2019url del DB</span>
<span class="token punctuation">&#125;</span></code>`,ua,ae,qi,ma,h,qt=`<code class="language-js">model User <span class="token punctuation">&#123;</span>
    id Int @id @<span class="token keyword">default</span><span class="token punctuation">(</span><span class="token function">autoincrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    name String
    surname String
    age Int
<span class="token punctuation">&#125;</span>
</code>`,pa,ie,Pi,fa,x,Pt=`<code class="language-console">$ npx prisma migrate dev \u2013-name &amp;lt;migration_name&amp;gt;
$ npm install @prisma/client
</code>`,da,te,Ri,va,H,Si,T,yi;return{c(){p=r("h4"),_=s("Tempo di lettura: 20\u2019"),b=u(),g=r("h4"),f=s("Tempo di realizzazione: 240\u2019"),v=u(),y=r("h2"),Ma=s("Introduzione"),Je=u(),E=r("p"),qa=s("Qual \xE8 il metodo pi\xF9 usato per creare un database? Una breve ricerca online dar\xE0 come risultato SQL ("),me=r("em"),Pa=s("Structured Query Language"),Ra=s("), ovvero un linguaggio che permette di creare, aggiornare e ottenere dei dati all\u2019interno di un "),pe=r("em"),Sa=s("database"),ya=s(". Questo linguaggio presenta, tuttavia, dei problemi non facilmente aggirabili senza aiuti esterni. Alcuni di essi sono gli ORM, argomento principale di questo articolo."),Ae=u(),$=r("h2"),Oa=s("Cos\u2019\xE8 un ORM"),Ie=u(),z=r("p"),ka=s("ORM ("),fe=r("em"),La=s("Object Relational Mapping"),Ta=s(") a livello astratto \xE8 una tecnica che permette ad un linguaggio di programmazione basato sul paradigma ad oggetti di manipolare e ottenere informazioni da un database relazionale. Tuttavia, quando pi\xF9 comunemente si parla di ORM ci si riferisce ad un "),de=r("em"),wa=s("tool"),Ja=s(" che realizza questa tecnica."),he=u(),C=r("center"),G=r("img"),xe=u(),N=r("h2"),Aa=s("Perch\xE9 usare un ORM e come funziona"),He=u(),O=r("p"),Ia=s("Probabilmente esiste almeno un ORM per ogni linguaggio di programmazione ad oggetti, bisogna quindi non fare l\u2019errore di affiancare questo argomento ad un solo linguaggio, tuttavia, per rimanere costanti, da qui in avanti verr\xE0 discussa l\u2019interazione tra un ORM e il linguaggio "),ve=r("em"),ha=s("Javascript"),xa=s("."),Qe=u(),M=r("p"),Ha=s("Al giorno d\u2019oggi quasi tutte le pagine web hanno una componente Javascript che realizza la sua logica. Molte volte questa ha necessit\xE0n di interagire con un database, ma SQL non \xE8 integrato in Javascript e quindi quest\u2019ultimo non permette nativamente questa operazione. In passato per superare questa barriera venne implementata una tecnica, ancora ampiamente utilizzata nei giorni odierni, che sfrutta AJAX ("),_e=r("em"),Qa=s("Asynchronous Javascript And XML"),$a=s(") per ottenere e manipolare i dati tramite delle query scritte in "),be=r("em"),Ca=s("PHP"),Ga=s(" e chiamate dal codice in Javascript: Lo schema logico \xE8 il seguente:"),$e=u(),j=r("center"),B=r("img"),Ce=u(),Ge=r("br"),Ne=r("br"),je=u(),U=r("center"),X=r("img"),Be=u(),Ue=r("br"),Xe=u(),k=r("p"),Na=s("Ma questo processo \xE8 molto inefficiente e rischioso, dato che il programmatore, oltre a scrivere codice in Javascript, deve preoccuparsi anche di scrivere "),ge=r("em"),ja=s("query"),Ba=s(" e codice in PHP, rendendo cos\xEC il lavoro pi\xF9 lungo e aumentando la possibilit\xE0 di commettere errori."),De=u(),L=r("p"),Ua=s("Invece un ORM permette di interagire in maniera pi\xF9 efficiente e meno rischiosa col database, scrivendo lui stesso tutte le query e il codice necessario ad interagire con la base di dati e incapsulandolo in alcuni metodi che restituiscono oggetti, i quali poi verranno chiamati dal codice Javascript. In questo modo il programmatore non deve occuparsi dell\u2019interazione con il database e pu\xF2 utilizzare i suoi dati come un qualsiasi oggetto del linguaggio di programmazione."),Xa=r("br"),Da=s(`
Lo schema logico \xE8 il seguente:`),Fe=u(),D=r("center"),F=r("img"),Ve=u(),Ze=r("br"),Ke=r("br"),We=u(),V=r("center"),Z=r("img"),Ye=u(),ea=r("br"),aa=u(),q=r("p"),Fa=s("Inoltre un ORM, scrivendo lui stesso le query, rimuove molte vulnerabilit\xE0 causate da eventuali controlli non effettuati nella query o errori simili. Una di queste debolezze rimosse \xE8 quella sfruttata da un attacco "),Ee=r("em"),Va=s("SQL injection"),Za=s(", ovvero un attacco informatico che punta ad aggirare la query \u201C"),ze=r("em"),Ka=s("iniettando"),Wa=s("\u201D dentro di essa codice SQL valido e sempre vero (come ad esempio 1 = 1)."),ia=u(),K=r("h2"),Ya=s("Una breve introduzione a prisma"),ta=u(),W=r("p"),ei=s("Prisma \xE8 un ORM, basato su NodeJS e Typescript, composto da tre elementi fondamentali:"),oa=u(),P=r("ul"),w=r("li"),Me=r("strong"),ai=s("Prisma Client"),ii=s(": un costruttore autogenerato di query in base allo "),qe=r("em"),ti=s("schema"),oi=u(),J=r("li"),Pe=r("strong"),ri=s("Prisma Migrate"),li=s(": un sistema che permette di aggiornare il database in base allo "),Re=r("em"),si=s("schema"),ni=u(),Y=r("li"),Se=r("strong"),ci=s("Prisma Studio"),ui=s(": un\u2019interfaccia grafica che permette di visualizzare e modificare i dati all\u2019interno di un database"),ra=u(),R=r("p"),mi=s("Ma cosa \xE8 lo "),ye=r("em"),pi=s("schema"),fi=s("? Semplice, \xE8 ci\xF2 che Prisma usa per generare il database, gestire le tabelle in esso e scrivere le query per l\u2019ottenimento dei dati. Volendo, il database lo si pu\xF2 descrivere integralmente nello schema e poi Prisma tramite "),Oe=r("em"),ke=r("strong"),di=s("Prisma Migrate"),vi=s(" generer\xE0 automaticamente il codice necessario a crearlo."),la=u(),S=r("p"),_i=s("Per creare un progetto in Prisma basta eseguire, dopo essersi assicurati di avere l\u2019ultima versione stabile di "),Le=r("em"),bi=s("NodeJS"),gi=s(" o "),Te=r("em"),Ei=s("Typescript"),zi=s(", i seguenti comandi:"),sa=u(),A=r("pre"),na=u(),ee=r("p"),Mi=s("Dentro la cartella prisma sar\xE0 presente lo schema:"),ca=u(),I=r("pre"),ua=u(),ae=r("p"),qi=s(`All\u2019interno di questo file dovremo definire le tabelle del nostro database, con annesse le relazioni
fra di esse. Per fare ci\xF2 si usa la parola chiave model, ecco un esempio:`),ma=u(),h=r("pre"),pa=u(),ie=r("p"),Pi=s("Una volta che lo schema ci soddisfa baster\xE0 eseguire il comando:"),fa=u(),x=r("pre"),da=u(),te=r("p"),Ri=s(`Fatto ci\xF2 baster\xE0 importare il prisma client in Javascript e il gioco sar\xE0 fatto. Spero di esservi stato
utile.`),va=u(),H=r("p"),Si=s("Per informazioni pi\xF9 specifiche e complete, guardare sempre la documentazione ufficiale: "),T=r("a"),yi=s("https://www.prisma.io/docs/"),this.h()},l(e){p=l(e,"H4",{});var t=c(p);_=n(t,"Tempo di lettura: 20\u2019"),t.forEach(a),b=m(e),g=l(e,"H4",{});var hi=c(g);f=n(hi,"Tempo di realizzazione: 240\u2019"),hi.forEach(a),v=m(e),y=l(e,"H2",{});var xi=c(y);Ma=n(xi,"Introduzione"),xi.forEach(a),Je=m(e),E=l(e,"P",{});var oe=c(E);qa=n(oe,"Qual \xE8 il metodo pi\xF9 usato per creare un database? Una breve ricerca online dar\xE0 come risultato SQL ("),me=l(oe,"EM",{});var Hi=c(me);Pa=n(Hi,"Structured Query Language"),Hi.forEach(a),Ra=n(oe,"), ovvero un linguaggio che permette di creare, aggiornare e ottenere dei dati all\u2019interno di un "),pe=l(oe,"EM",{});var Qi=c(pe);Sa=n(Qi,"database"),Qi.forEach(a),ya=n(oe,". Questo linguaggio presenta, tuttavia, dei problemi non facilmente aggirabili senza aiuti esterni. Alcuni di essi sono gli ORM, argomento principale di questo articolo."),oe.forEach(a),Ae=m(e),$=l(e,"H2",{});var $i=c($);Oa=n($i,"Cos\u2019\xE8 un ORM"),$i.forEach(a),Ie=m(e),z=l(e,"P",{});var re=c(z);ka=n(re,"ORM ("),fe=l(re,"EM",{});var Ci=c(fe);La=n(Ci,"Object Relational Mapping"),Ci.forEach(a),Ta=n(re,") a livello astratto \xE8 una tecnica che permette ad un linguaggio di programmazione basato sul paradigma ad oggetti di manipolare e ottenere informazioni da un database relazionale. Tuttavia, quando pi\xF9 comunemente si parla di ORM ci si riferisce ad un "),de=l(re,"EM",{});var Gi=c(de);wa=n(Gi,"tool"),Gi.forEach(a),Ja=n(re," che realizza questa tecnica."),re.forEach(a),he=m(e),C=l(e,"CENTER",{});var Ni=c(C);G=l(Ni,"IMG",{src:!0,alt:!0}),Ni.forEach(a),xe=m(e),N=l(e,"H2",{});var ji=c(N);Aa=n(ji,"Perch\xE9 usare un ORM e come funziona"),ji.forEach(a),He=m(e),O=l(e,"P",{});var _a=c(O);Ia=n(_a,"Probabilmente esiste almeno un ORM per ogni linguaggio di programmazione ad oggetti, bisogna quindi non fare l\u2019errore di affiancare questo argomento ad un solo linguaggio, tuttavia, per rimanere costanti, da qui in avanti verr\xE0 discussa l\u2019interazione tra un ORM e il linguaggio "),ve=l(_a,"EM",{});var Bi=c(ve);ha=n(Bi,"Javascript"),Bi.forEach(a),xa=n(_a,"."),_a.forEach(a),Qe=m(e),M=l(e,"P",{});var le=c(M);Ha=n(le,"Al giorno d\u2019oggi quasi tutte le pagine web hanno una componente Javascript che realizza la sua logica. Molte volte questa ha necessit\xE0n di interagire con un database, ma SQL non \xE8 integrato in Javascript e quindi quest\u2019ultimo non permette nativamente questa operazione. In passato per superare questa barriera venne implementata una tecnica, ancora ampiamente utilizzata nei giorni odierni, che sfrutta AJAX ("),_e=l(le,"EM",{});var Ui=c(_e);Qa=n(Ui,"Asynchronous Javascript And XML"),Ui.forEach(a),$a=n(le,") per ottenere e manipolare i dati tramite delle query scritte in "),be=l(le,"EM",{});var Xi=c(be);Ca=n(Xi,"PHP"),Xi.forEach(a),Ga=n(le," e chiamate dal codice in Javascript: Lo schema logico \xE8 il seguente:"),le.forEach(a),$e=m(e),j=l(e,"CENTER",{});var Di=c(j);B=l(Di,"IMG",{src:!0,alt:!0}),Di.forEach(a),Ce=m(e),Ge=l(e,"BR",{}),Ne=l(e,"BR",{}),je=m(e),U=l(e,"CENTER",{});var Fi=c(U);X=l(Fi,"IMG",{src:!0,alt:!0}),Fi.forEach(a),Be=m(e),Ue=l(e,"BR",{}),Xe=m(e),k=l(e,"P",{});var ba=c(k);Na=n(ba,"Ma questo processo \xE8 molto inefficiente e rischioso, dato che il programmatore, oltre a scrivere codice in Javascript, deve preoccuparsi anche di scrivere "),ge=l(ba,"EM",{});var Vi=c(ge);ja=n(Vi,"query"),Vi.forEach(a),Ba=n(ba," e codice in PHP, rendendo cos\xEC il lavoro pi\xF9 lungo e aumentando la possibilit\xE0 di commettere errori."),ba.forEach(a),De=m(e),L=l(e,"P",{});var ga=c(L);Ua=n(ga,"Invece un ORM permette di interagire in maniera pi\xF9 efficiente e meno rischiosa col database, scrivendo lui stesso tutte le query e il codice necessario ad interagire con la base di dati e incapsulandolo in alcuni metodi che restituiscono oggetti, i quali poi verranno chiamati dal codice Javascript. In questo modo il programmatore non deve occuparsi dell\u2019interazione con il database e pu\xF2 utilizzare i suoi dati come un qualsiasi oggetto del linguaggio di programmazione."),Xa=l(ga,"BR",{}),Da=n(ga,`
Lo schema logico \xE8 il seguente:`),ga.forEach(a),Fe=m(e),D=l(e,"CENTER",{});var Zi=c(D);F=l(Zi,"IMG",{src:!0,alt:!0}),Zi.forEach(a),Ve=m(e),Ze=l(e,"BR",{}),Ke=l(e,"BR",{}),We=m(e),V=l(e,"CENTER",{});var Ki=c(V);Z=l(Ki,"IMG",{src:!0,alt:!0}),Ki.forEach(a),Ye=m(e),ea=l(e,"BR",{}),aa=m(e),q=l(e,"P",{});var se=c(q);Fa=n(se,"Inoltre un ORM, scrivendo lui stesso le query, rimuove molte vulnerabilit\xE0 causate da eventuali controlli non effettuati nella query o errori simili. Una di queste debolezze rimosse \xE8 quella sfruttata da un attacco "),Ee=l(se,"EM",{});var Wi=c(Ee);Va=n(Wi,"SQL injection"),Wi.forEach(a),Za=n(se,", ovvero un attacco informatico che punta ad aggirare la query \u201C"),ze=l(se,"EM",{});var Yi=c(ze);Ka=n(Yi,"iniettando"),Yi.forEach(a),Wa=n(se,"\u201D dentro di essa codice SQL valido e sempre vero (come ad esempio 1 = 1)."),se.forEach(a),ia=m(e),K=l(e,"H2",{});var et=c(K);Ya=n(et,"Una breve introduzione a prisma"),et.forEach(a),ta=m(e),W=l(e,"P",{});var at=c(W);ei=n(at,"Prisma \xE8 un ORM, basato su NodeJS e Typescript, composto da tre elementi fondamentali:"),at.forEach(a),oa=m(e),P=l(e,"UL",{});var ne=c(P);w=l(ne,"LI",{});var Ea=c(w);Me=l(Ea,"STRONG",{});var it=c(Me);ai=n(it,"Prisma Client"),it.forEach(a),ii=n(Ea,": un costruttore autogenerato di query in base allo "),qe=l(Ea,"EM",{});var tt=c(qe);ti=n(tt,"schema"),tt.forEach(a),Ea.forEach(a),oi=m(ne),J=l(ne,"LI",{});var za=c(J);Pe=l(za,"STRONG",{});var ot=c(Pe);ri=n(ot,"Prisma Migrate"),ot.forEach(a),li=n(za,": un sistema che permette di aggiornare il database in base allo "),Re=l(za,"EM",{});var rt=c(Re);si=n(rt,"schema"),rt.forEach(a),za.forEach(a),ni=m(ne),Y=l(ne,"LI",{});var Oi=c(Y);Se=l(Oi,"STRONG",{});var lt=c(Se);ci=n(lt,"Prisma Studio"),lt.forEach(a),ui=n(Oi,": un\u2019interfaccia grafica che permette di visualizzare e modificare i dati all\u2019interno di un database"),Oi.forEach(a),ne.forEach(a),ra=m(e),R=l(e,"P",{});var ce=c(R);mi=n(ce,"Ma cosa \xE8 lo "),ye=l(ce,"EM",{});var st=c(ye);pi=n(st,"schema"),st.forEach(a),fi=n(ce,"? Semplice, \xE8 ci\xF2 che Prisma usa per generare il database, gestire le tabelle in esso e scrivere le query per l\u2019ottenimento dei dati. Volendo, il database lo si pu\xF2 descrivere integralmente nello schema e poi Prisma tramite "),Oe=l(ce,"EM",{});var nt=c(Oe);ke=l(nt,"STRONG",{});var ct=c(ke);di=n(ct,"Prisma Migrate"),ct.forEach(a),nt.forEach(a),vi=n(ce," generer\xE0 automaticamente il codice necessario a crearlo."),ce.forEach(a),la=m(e),S=l(e,"P",{});var ue=c(S);_i=n(ue,"Per creare un progetto in Prisma basta eseguire, dopo essersi assicurati di avere l\u2019ultima versione stabile di "),Le=l(ue,"EM",{});var ut=c(Le);bi=n(ut,"NodeJS"),ut.forEach(a),gi=n(ue," o "),Te=l(ue,"EM",{});var mt=c(Te);Ei=n(mt,"Typescript"),mt.forEach(a),zi=n(ue,", i seguenti comandi:"),ue.forEach(a),sa=m(e),A=l(e,"PRE",{class:!0});var Rt=c(A);Rt.forEach(a),na=m(e),ee=l(e,"P",{});var pt=c(ee);Mi=n(pt,"Dentro la cartella prisma sar\xE0 presente lo schema:"),pt.forEach(a),ca=m(e),I=l(e,"PRE",{class:!0});var St=c(I);St.forEach(a),ua=m(e),ae=l(e,"P",{});var ft=c(ae);qi=n(ft,`All\u2019interno di questo file dovremo definire le tabelle del nostro database, con annesse le relazioni
fra di esse. Per fare ci\xF2 si usa la parola chiave model, ecco un esempio:`),ft.forEach(a),ma=m(e),h=l(e,"PRE",{class:!0});var yt=c(h);yt.forEach(a),pa=m(e),ie=l(e,"P",{});var dt=c(ie);Pi=n(dt,"Una volta che lo schema ci soddisfa baster\xE0 eseguire il comando:"),dt.forEach(a),fa=m(e),x=l(e,"PRE",{class:!0});var Ot=c(x);Ot.forEach(a),da=m(e),te=l(e,"P",{});var vt=c(te);Ri=n(vt,`Fatto ci\xF2 baster\xE0 importare il prisma client in Javascript e il gioco sar\xE0 fatto. Spero di esservi stato
utile.`),vt.forEach(a),va=m(e),H=l(e,"P",{});var ki=c(H);Si=n(ki,"Per informazioni pi\xF9 specifiche e complete, guardare sempre la documentazione ufficiale: "),T=l(ki,"A",{href:!0,target:!0,title:!0});var _t=c(T);yi=n(_t,"https://www.prisma.io/docs/"),_t.forEach(a),ki.forEach(a),this.h()},h(){we(G.src,Ti="/img/posts/gli-orm-cosa-sono-e-come-funzionano/orm.webp")||d(G,"src",Ti),d(G,"alt","Schema ORM"),we(B.src,wi="/img/posts/gli-orm-cosa-sono-e-come-funzionano/ajax.webp")||d(B,"src",wi),d(B,"alt","Schema AJAX"),we(X.src,Ji="/img/posts/gli-orm-cosa-sono-e-come-funzionano/ajaximg.webp")||d(X,"src",Ji),d(X,"alt","Schema AJAX"),we(F.src,Ai="/img/posts/gli-orm-cosa-sono-e-come-funzionano/ormschema.webp")||d(F,"src",Ai),d(F,"alt","Schema ORM"),we(Z.src,Ii="/img/posts/gli-orm-cosa-sono-e-come-funzionano/ormimgtwo.webp")||d(Z,"src",Ii),d(Z,"alt","Schema ORM"),d(A,"class","language-console"),d(I,"class","language-js"),d(h,"class","language-js"),d(x,"class","language-console"),d(T,"href","https://www.prisma.io/docs/"),d(T,"target","_blank"),d(T,"title","prisma.io")},m(e,t){o(e,p,t),i(p,_),o(e,b,t),o(e,g,t),i(g,f),o(e,v,t),o(e,y,t),i(y,Ma),o(e,Je,t),o(e,E,t),i(E,qa),i(E,me),i(me,Pa),i(E,Ra),i(E,pe),i(pe,Sa),i(E,ya),o(e,Ae,t),o(e,$,t),i($,Oa),o(e,Ie,t),o(e,z,t),i(z,ka),i(z,fe),i(fe,La),i(z,Ta),i(z,de),i(de,wa),i(z,Ja),o(e,he,t),o(e,C,t),i(C,G),o(e,xe,t),o(e,N,t),i(N,Aa),o(e,He,t),o(e,O,t),i(O,Ia),i(O,ve),i(ve,ha),i(O,xa),o(e,Qe,t),o(e,M,t),i(M,Ha),i(M,_e),i(_e,Qa),i(M,$a),i(M,be),i(be,Ca),i(M,Ga),o(e,$e,t),o(e,j,t),i(j,B),o(e,Ce,t),o(e,Ge,t),o(e,Ne,t),o(e,je,t),o(e,U,t),i(U,X),o(e,Be,t),o(e,Ue,t),o(e,Xe,t),o(e,k,t),i(k,Na),i(k,ge),i(ge,ja),i(k,Ba),o(e,De,t),o(e,L,t),i(L,Ua),i(L,Xa),i(L,Da),o(e,Fe,t),o(e,D,t),i(D,F),o(e,Ve,t),o(e,Ze,t),o(e,Ke,t),o(e,We,t),o(e,V,t),i(V,Z),o(e,Ye,t),o(e,ea,t),o(e,aa,t),o(e,q,t),i(q,Fa),i(q,Ee),i(Ee,Va),i(q,Za),i(q,ze),i(ze,Ka),i(q,Wa),o(e,ia,t),o(e,K,t),i(K,Ya),o(e,ta,t),o(e,W,t),i(W,ei),o(e,oa,t),o(e,P,t),i(P,w),i(w,Me),i(Me,ai),i(w,ii),i(w,qe),i(qe,ti),i(P,oi),i(P,J),i(J,Pe),i(Pe,ri),i(J,li),i(J,Re),i(Re,si),i(P,ni),i(P,Y),i(Y,Se),i(Se,ci),i(Y,ui),o(e,ra,t),o(e,R,t),i(R,mi),i(R,ye),i(ye,pi),i(R,fi),i(R,Oe),i(Oe,ke),i(ke,di),i(R,vi),o(e,la,t),o(e,S,t),i(S,_i),i(S,Le),i(Le,bi),i(S,gi),i(S,Te),i(Te,Ei),i(S,zi),o(e,sa,t),o(e,A,t),A.innerHTML=zt,o(e,na,t),o(e,ee,t),i(ee,Mi),o(e,ca,t),o(e,I,t),I.innerHTML=Mt,o(e,ua,t),o(e,ae,t),i(ae,qi),o(e,ma,t),o(e,h,t),h.innerHTML=qt,o(e,pa,t),o(e,ie,t),i(ie,Pi),o(e,fa,t),o(e,x,t),x.innerHTML=Pt,o(e,da,t),o(e,te,t),i(te,Ri),o(e,va,t),o(e,H,t),i(H,Si),i(H,T),i(T,yi)},p:Qt,d(e){e&&a(p),e&&a(b),e&&a(g),e&&a(v),e&&a(y),e&&a(Je),e&&a(E),e&&a(Ae),e&&a($),e&&a(Ie),e&&a(z),e&&a(he),e&&a(C),e&&a(xe),e&&a(N),e&&a(He),e&&a(O),e&&a(Qe),e&&a(M),e&&a($e),e&&a(j),e&&a(Ce),e&&a(Ge),e&&a(Ne),e&&a(je),e&&a(U),e&&a(Be),e&&a(Ue),e&&a(Xe),e&&a(k),e&&a(De),e&&a(L),e&&a(Fe),e&&a(D),e&&a(Ve),e&&a(Ze),e&&a(Ke),e&&a(We),e&&a(V),e&&a(Ye),e&&a(ea),e&&a(aa),e&&a(q),e&&a(ia),e&&a(K),e&&a(ta),e&&a(W),e&&a(oa),e&&a(P),e&&a(ra),e&&a(R),e&&a(la),e&&a(S),e&&a(sa),e&&a(A),e&&a(na),e&&a(ee),e&&a(ca),e&&a(I),e&&a(ua),e&&a(ae),e&&a(ma),e&&a(h),e&&a(pa),e&&a(ie),e&&a(fa),e&&a(x),e&&a(da),e&&a(te),e&&a(va),e&&a(H)}}}function Gt(Q){let p,_;const b=[Q[0],Et];let g={$$slots:{default:[Ct]},$$scope:{ctx:Q}};for(let f=0;f<b.length;f+=1)g=Li(g,b[f]);return p=new $t({props:g}),{c(){wt(p.$$.fragment)},l(f){Jt(p.$$.fragment,f)},m(f,v){At(p,f,v),_=!0},p(f,[v]){const y=v&1?It(b,[v&1&&bt(f[0]),v&0&&bt(Et)]):{};v&2&&(y.$$scope={dirty:v,ctx:f}),p.$set(y)},i(f){_||(ht(p.$$.fragment,f),_=!0)},o(f){xt(p.$$.fragment,f),_=!1},d(f){Ht(p,f)}}}const Et={id:"2022-10-26-1",titolo:"Gli ORM cosa sono e come funzionano",featured:!1,autore:"Marco Garabello",data:"2022-11-08T00:00:00.000Z",cover:"cover.webp",introduzione:"Cosa sono gli ORM, come funzionano e breve introduzione a Prisma",pubblicato:!0,sezione:"IT",categorie:["ORM","database","Prisma","Javascript","Back End","Linux CLI"]};function Nt(Q,p,_){return Q.$$set=b=>{_(0,p=Li(Li({},p),gt(b)))},p=gt(p),[p]}class Dt extends kt{constructor(p){super(),Lt(this,p,Nt,Gt,Tt,{})}}export{Dt as default,Et as metadata};