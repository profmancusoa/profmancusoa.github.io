import{S as rl,i as nl,s as pl,C as ci,w as ul,x as cl,y as fl,z as ml,A as Ui,f as dl,t as vl,B as gl,P as $i,l as t,r as n,a as u,m as s,n as r,u as p,h as a,c,p as f,F as ui,b as o,G as i,E as _l}from"../../chunks/index-c6be98ca.js";import{P as hl}from"../../chunks/_post-c462c736.js";import"../../chunks/helpers-e147ed77.js";import"../../chunks/Categoria.svelte_svelte_type_style_lang-d76a398c.js";function bl(U){let m,h,b,E,d,g,P,ia,Pe,$,la,ze,y,ta,ke,F,sa,Le,k,oa,be,ra,na,Re,z,pa,ua,ca,fa,xe,N,ma,qe,Q,da,Ie,D,X,va,Ee,j,ga,V,Fi=`<code class="language-bash">  <span class="token function">curl</span> --proto <span class="token string">'=https'</span> --tlsv1.2 -sSf https://sh.rustup.rs <span class="token operator">|</span> <span class="token function">sh</span></code>`,Oe,W,_a,ha,ba,q,fi,Ea,Se,I,Ni='<code class="language-bash"><span class="token builtin class-name">source</span> <span class="token string">"<span class="token environment constant">$HOME</span>/.cargo/env"</span></code>',Te,K,Wa,He,w,Z,wa,J,Qi=`<code class="language-bash">  <span class="token function">git</span> clone https://github.com/Windows-On-Linux/Wineget.git
  <span class="token builtin class-name">cd</span> Wineget</code>`,Pa,Y,za,ee,Di='<code class="language-bash">  cargo build</code>',ka,v,La,ae,Xi='<code class="language-bash">  cargo <span class="token function">install</span> cargo-deb</code>',Ra,ie,ji='<code class="language-bash">  cargo <span class="token function">install</span> cargo-rpm</code>',xa,le,Vi='<code class="language-bash">  cargo <span class="token function">install</span> cargo-aur</code>',qa,Ia,Oa,O,mi,Me,te,Sa,Ce,L,S,Ta,T,Ha,Ma,Ca,se,Ga,oe,Ki='<code class="language-bash">  wineget -s <span class="token punctuation">[</span>PROGRAMMA<span class="token punctuation">]</span></code>',Ge,re,Ba,Be,ne,pe,Aa,ue,Zi='<code class="language-bash">  wineget -i flowgorithm </code>',Ae,ce,Ua,Ue,fe,We,$a,$e,me,ya,ye,de,H,di,Fe,M,Fa,Na,Ne,C,Qa,G,Da,Qe,R,Xa,B,ja,Va,De,ve,Ka,Xe,x,Za,je,Ve,Ke,A,Ja,Ya,Ze,ge,ei;return{c(){m=t("h1"),h=n("Wineget: Il package manager per Wine"),b=u(),E=t("h3"),d=n("Come installare un package manager per gestire facilmente le applicazioni installate con Wine su Linux."),g=u(),P=t("p"),ia=n("Wine permette di eseguire delle applicazioni destinate a Windows su Linux attraverso un adattamento della specifica WinNT(Windows 98 in avanti) alla specifica POSIX usata da MacOS, BSD e Linux. In questo modo le chiamate di sistema di una applicazione Windows vengono convertite in chiamate di sistema compatibili con sistemi POSIX o Unix-Like."),Pe=u(),$=t("p"),la=n("Wine crea una struttura di sistema uguale ad un sistema Windows in una cartella nel pc detta Prefix(prefisso) dove verr\xE0 contenuta la nostra applicazione che andiamo ad installare."),ze=u(),y=t("p"),ta=n(`Tuttavia l\u2019installazione di un\u2019app con Wine non \xE8 sempre semplice perch\xE8 in alcuni casi mancano delle dipendenze all\u2019applicazione che vanno installate con Winetricks.
Winetricks installa delle dipendenze come .NET o VCrun2019 nel prefisso che Wine crea sul disco.`),ke=u(),F=t("p"),sa=n("Una volta che l\u2019installazione di un\u2019applicazione termina l\u2019app compare come app di sistema indipendentemente dal prefisso."),Le=u(),k=t("p"),oa=n("Ho pensato di scrivere "),be=t("strong"),ra=n("Wineget"),na=n(" per semplificare questo processo. Wineget crea una cartella dove metter\xE0 tutti i prefissi e i file scaricati necessari allo script per funzionare."),Re=u(),z=t("p"),pa=n("Quando decidiamo di installare un\u2019applicazione attraverso Wineget verr\xE0 eseguito uno script che installa l\u2019app richiesta e le sue dipendenze in un prefix nella cartella dell\u2019utente."),ua=t("br"),ca=n(`
Con un semplice click verranno eseguiti decine di comandi in automatico che semplificheranno la gestione dell\u2019app installata via Wine.`),fa=t("br"),xe=u(),N=t("h2"),ma=n("Per usare Wineget eseguiamo le seguenti operazioni:"),qe=u(),Q=t("h3"),da=n("Se vuoi compilare Wineget da zero esegui questi passi:"),Ie=u(),D=t("ul"),X=t("li"),va=n("Installare Rust: "),Ee=t("ul"),j=t("li"),ga=n("Per installare rust eseguiamo il seguente comando: "),V=t("pre"),Oe=u(),W=t("p"),_a=n("Dopo aver eseguito il comando apparir\xE0 sulla bash questo: "),ha=t("br"),ba=u(),q=t("img"),Ea=n(`
Ora premere 1 e aspettare che l\u2019installazione finisca.
Quando l\u2019installazione sar\xE0 finita eseguire questo comando:`),Se=u(),I=t("pre"),Te=u(),K=t("p"),Wa=n("Ora abbiamo Rust e i suoi tools installati e possiamo procedere con la compilazione."),He=u(),w=t("ul"),Z=t("li"),wa=n(`Cloniamo la repository di Wineget
Eseguiamo il seguente comando:`),J=t("pre"),Pa=u(),Y=t("li"),za=n(`Compiliamo Wineget
Per compilare Wineget usiamo questo comando:`),ee=t("pre"),ka=u(),v=t("li"),La=n(`Creazione del pacchetto
Se sei su una distro derivata da debian esegui il seguente comando: `),ae=t("pre"),Ra=n("Se sei su una distro derivata da Red Hat esegui il seguente comando: "),ie=t("pre"),xa=n("Se sei su una distro derivata da Arch Linux esegui il seguente comando: "),le=t("pre"),qa=n("Ora per procedere alla creazione del pacchetto fai: cargo deb/rpm/aur, infine, prendere l\u2019ultima linea che il comando ha prodotto che sar\xE0 il percorso del pacchetto ed installatelo."),Ia=t("br"),Oa=n(`
Ad esempio questo \xE8 il finale con cargo-deb:
`),O=t("img"),Me=u(),te=t("h3"),Sa=n("Se vuoi installare il pacchetto gi\xE0 compilato esegui questi passi:"),Ce=u(),L=t("ul"),S=t("li"),Ta=n("Installare Wineget, scaricandola dalla "),T=t("a"),Ha=n("pagina release di Github"),Ma=n("."),Ca=u(),se=t("li"),Ga=n("Ora per eseguire la ricerca dell\u2019applicazione fare:"),oe=t("pre"),Ge=u(),re=t("p"),Ba=n("Noi andremo ad installare Flowgorithm per provare."),Be=u(),ne=t("ul"),pe=t("li"),Aa=n("Per installare Flowgorithm fare:"),ue=t("pre"),Ae=u(),ce=t("p"),Ua=n("e seguire il processo di installazione, una volta finito lo script scriver\xE0 su bash:"),Ue=u(),fe=t("blockquote"),We=t("p"),$a=n("\u201CThe installer have finished the work\u201D."),$e=u(),me=t("p"),ya=n("Ora flowgorithm risulta installato nella cartella di wineget e si pu\xF2 trovare anche come applicazione di sistema installata."),ye=u(),de=t("p"),H=t("img"),Fe=u(),M=t("p"),Fa=n("Una volta che hai preso la mano con Wine puoi anche creare script compatibili con Wineget e aggiungerli alla repo ufficiale aprendo una issue su Github, mandandomi la tua repo oppure puoi creare direttamente una pull request attraverso il sistema Repo che ho scritto per aggiungere programmi velocemente. "),Na=t("br"),Ne=u(),C=t("p"),Qa=n("Guida qui: "),G=t("a"),Da=n("https://wineget.pages.dev/howtoscript"),Qe=u(),R=t("p"),Xa=n("Per tutti i dettagli ecco qui il sito: "),B=t("a"),ja=n("https://wineget.pages.dev/"),Va=t("br"),De=u(),ve=t("p"),Ka=n("Per una lista completa dei programmi nella repoo di Winget"),Xe=u(),x=t("a"),Za=n("https://wineget.pages.dev/packages"),je=u(),Ve=t("br"),Ke=u(),A=t("p"),Ja=n("Ricorda di aggiungere una star al progetto su Github per far crescere il progetto e condividilo con i tuoi amici!"),Ya=t("br"),Ze=u(),ge=t("p"),ei=n("Enjoy!"),this.h()},l(e){m=s(e,"H1",{});var l=r(m);h=p(l,"Wineget: Il package manager per Wine"),l.forEach(a),b=c(e),E=s(e,"H3",{});var vi=r(E);d=p(vi,"Come installare un package manager per gestire facilmente le applicazioni installate con Wine su Linux."),vi.forEach(a),g=c(e),P=s(e,"P",{});var gi=r(P);ia=p(gi,"Wine permette di eseguire delle applicazioni destinate a Windows su Linux attraverso un adattamento della specifica WinNT(Windows 98 in avanti) alla specifica POSIX usata da MacOS, BSD e Linux. In questo modo le chiamate di sistema di una applicazione Windows vengono convertite in chiamate di sistema compatibili con sistemi POSIX o Unix-Like."),gi.forEach(a),Pe=c(e),$=s(e,"P",{});var _i=r($);la=p(_i,"Wine crea una struttura di sistema uguale ad un sistema Windows in una cartella nel pc detta Prefix(prefisso) dove verr\xE0 contenuta la nostra applicazione che andiamo ad installare."),_i.forEach(a),ze=c(e),y=s(e,"P",{});var hi=r(y);ta=p(hi,`Tuttavia l\u2019installazione di un\u2019app con Wine non \xE8 sempre semplice perch\xE8 in alcuni casi mancano delle dipendenze all\u2019applicazione che vanno installate con Winetricks.
Winetricks installa delle dipendenze come .NET o VCrun2019 nel prefisso che Wine crea sul disco.`),hi.forEach(a),ke=c(e),F=s(e,"P",{});var bi=r(F);sa=p(bi,"Una volta che l\u2019installazione di un\u2019applicazione termina l\u2019app compare come app di sistema indipendentemente dal prefisso."),bi.forEach(a),Le=c(e),k=s(e,"P",{});var Je=r(k);oa=p(Je,"Ho pensato di scrivere "),be=s(Je,"STRONG",{});var Ei=r(be);ra=p(Ei,"Wineget"),Ei.forEach(a),na=p(Je," per semplificare questo processo. Wineget crea una cartella dove metter\xE0 tutti i prefissi e i file scaricati necessari allo script per funzionare."),Je.forEach(a),Re=c(e),z=s(e,"P",{});var we=r(z);pa=p(we,"Quando decidiamo di installare un\u2019applicazione attraverso Wineget verr\xE0 eseguito uno script che installa l\u2019app richiesta e le sue dipendenze in un prefix nella cartella dell\u2019utente."),ua=s(we,"BR",{}),ca=p(we,`
Con un semplice click verranno eseguiti decine di comandi in automatico che semplificheranno la gestione dell\u2019app installata via Wine.`),fa=s(we,"BR",{}),we.forEach(a),xe=c(e),N=s(e,"H2",{});var Wi=r(N);ma=p(Wi,"Per usare Wineget eseguiamo le seguenti operazioni:"),Wi.forEach(a),qe=c(e),Q=s(e,"H3",{});var wi=r(Q);da=p(wi,"Se vuoi compilare Wineget da zero esegui questi passi:"),wi.forEach(a),Ie=c(e),D=s(e,"UL",{});var Pi=r(D);X=s(Pi,"LI",{});var ai=r(X);va=p(ai,"Installare Rust: "),Ee=s(ai,"UL",{});var zi=r(Ee);j=s(zi,"LI",{});var ii=r(j);ga=p(ii,"Per installare rust eseguiamo il seguente comando: "),V=s(ii,"PRE",{class:!0});var Ji=r(V);Ji.forEach(a),ii.forEach(a),zi.forEach(a),ai.forEach(a),Pi.forEach(a),Oe=c(e),W=s(e,"P",{});var _e=r(W);_a=p(_e,"Dopo aver eseguito il comando apparir\xE0 sulla bash questo: "),ha=s(_e,"BR",{}),ba=c(_e),q=s(_e,"IMG",{src:!0,alt:!0,title:!0}),Ea=p(_e,`
Ora premere 1 e aspettare che l\u2019installazione finisca.
Quando l\u2019installazione sar\xE0 finita eseguire questo comando:`),_e.forEach(a),Se=c(e),I=s(e,"PRE",{class:!0});var Yi=r(I);Yi.forEach(a),Te=c(e),K=s(e,"P",{});var ki=r(K);Wa=p(ki,"Ora abbiamo Rust e i suoi tools installati e possiamo procedere con la compilazione."),ki.forEach(a),He=c(e),w=s(e,"UL",{});var he=r(w);Z=s(he,"LI",{});var li=r(Z);wa=p(li,`Cloniamo la repository di Wineget
Eseguiamo il seguente comando:`),J=s(li,"PRE",{class:!0});var el=r(J);el.forEach(a),li.forEach(a),Pa=c(he),Y=s(he,"LI",{});var ti=r(Y);za=p(ti,`Compiliamo Wineget
Per compilare Wineget usiamo questo comando:`),ee=s(ti,"PRE",{class:!0});var al=r(ee);al.forEach(a),ti.forEach(a),ka=c(he),v=s(he,"LI",{});var _=r(v);La=p(_,`Creazione del pacchetto
Se sei su una distro derivata da debian esegui il seguente comando: `),ae=s(_,"PRE",{class:!0});var il=r(ae);il.forEach(a),Ra=p(_,"Se sei su una distro derivata da Red Hat esegui il seguente comando: "),ie=s(_,"PRE",{class:!0});var ll=r(ie);ll.forEach(a),xa=p(_,"Se sei su una distro derivata da Arch Linux esegui il seguente comando: "),le=s(_,"PRE",{class:!0});var tl=r(le);tl.forEach(a),qa=p(_,"Ora per procedere alla creazione del pacchetto fai: cargo deb/rpm/aur, infine, prendere l\u2019ultima linea che il comando ha prodotto che sar\xE0 il percorso del pacchetto ed installatelo."),Ia=s(_,"BR",{}),Oa=p(_,`
Ad esempio questo \xE8 il finale con cargo-deb:
`),O=s(_,"IMG",{src:!0,alt:!0,title:!0}),_.forEach(a),he.forEach(a),Me=c(e),te=s(e,"H3",{});var Li=r(te);Sa=p(Li,"Se vuoi installare il pacchetto gi\xE0 compilato esegui questi passi:"),Li.forEach(a),Ce=c(e),L=s(e,"UL",{});var Ye=r(L);S=s(Ye,"LI",{});var ea=r(S);Ta=p(ea,"Installare Wineget, scaricandola dalla "),T=s(ea,"A",{href:!0,rel:!0});var Ri=r(T);Ha=p(Ri,"pagina release di Github"),Ri.forEach(a),Ma=p(ea,"."),ea.forEach(a),Ca=c(Ye),se=s(Ye,"LI",{});var si=r(se);Ga=p(si,"Ora per eseguire la ricerca dell\u2019applicazione fare:"),oe=s(si,"PRE",{class:!0});var sl=r(oe);sl.forEach(a),si.forEach(a),Ye.forEach(a),Ge=c(e),re=s(e,"P",{});var xi=r(re);Ba=p(xi,"Noi andremo ad installare Flowgorithm per provare."),xi.forEach(a),Be=c(e),ne=s(e,"UL",{});var qi=r(ne);pe=s(qi,"LI",{});var oi=r(pe);Aa=p(oi,"Per installare Flowgorithm fare:"),ue=s(oi,"PRE",{class:!0});var ol=r(ue);ol.forEach(a),oi.forEach(a),qi.forEach(a),Ae=c(e),ce=s(e,"P",{});var Ii=r(ce);Ua=p(Ii,"e seguire il processo di installazione, una volta finito lo script scriver\xE0 su bash:"),Ii.forEach(a),Ue=c(e),fe=s(e,"BLOCKQUOTE",{});var Oi=r(fe);We=s(Oi,"P",{});var Si=r(We);$a=p(Si,"\u201CThe installer have finished the work\u201D."),Si.forEach(a),Oi.forEach(a),$e=c(e),me=s(e,"P",{});var Ti=r(me);ya=p(Ti,"Ora flowgorithm risulta installato nella cartella di wineget e si pu\xF2 trovare anche come applicazione di sistema installata."),Ti.forEach(a),ye=c(e),de=s(e,"P",{});var Hi=r(de);H=s(Hi,"IMG",{src:!0,alt:!0,title:!0}),Hi.forEach(a),Fe=c(e),M=s(e,"P",{});var ri=r(M);Fa=p(ri,"Una volta che hai preso la mano con Wine puoi anche creare script compatibili con Wineget e aggiungerli alla repo ufficiale aprendo una issue su Github, mandandomi la tua repo oppure puoi creare direttamente una pull request attraverso il sistema Repo che ho scritto per aggiungere programmi velocemente. "),Na=s(ri,"BR",{}),ri.forEach(a),Ne=c(e),C=s(e,"P",{});var ni=r(C);Qa=p(ni,"Guida qui: "),G=s(ni,"A",{rel:!0,href:!0});var Mi=r(G);Da=p(Mi,"https://wineget.pages.dev/howtoscript"),Mi.forEach(a),ni.forEach(a),Qe=c(e),R=s(e,"P",{});var aa=r(R);Xa=p(aa,"Per tutti i dettagli ecco qui il sito: "),B=s(aa,"A",{href:!0,rel:!0});var Ci=r(B);ja=p(Ci,"https://wineget.pages.dev/"),Ci.forEach(a),Va=s(aa,"BR",{}),aa.forEach(a),De=c(e),ve=s(e,"P",{});var Gi=r(ve);Ka=p(Gi,"Per una lista completa dei programmi nella repoo di Winget"),Gi.forEach(a),Xe=c(e),x=s(e,"A",{rel:!0,href:!0});var Bi=r(x);Za=p(Bi,"https://wineget.pages.dev/packages"),Bi.forEach(a),je=c(e),Ve=s(e,"BR",{}),Ke=c(e),A=s(e,"P",{});var pi=r(A);Ja=p(pi,"Ricorda di aggiungere una star al progetto su Github per far crescere il progetto e condividilo con i tuoi amici!"),Ya=s(pi,"BR",{}),pi.forEach(a),Ze=c(e),ge=s(e,"P",{});var Ai=r(ge);ei=p(Ai,"Enjoy!"),Ai.forEach(a),this.h()},h(){f(V,"class","language-bash"),ui(q.src,fi="/img/posts/il-package-manager-per-wine/rustup.webp")||f(q,"src",fi),f(q,"alt","alt text"),f(q,"title","Rustup"),f(I,"class","language-bash"),f(J,"class","language-bash"),f(ee,"class","language-bash"),f(ae,"class","language-bash"),f(ie,"class","language-bash"),f(le,"class","language-bash"),ui(O.src,mi="/img/posts/il-package-manager-per-wine/cargodeb.webp")||f(O,"src",mi),f(O,"alt","alt text"),f(O,"title","cargodeb"),f(T,"href","https://github.com/Windows-On-Linux/Wineget/releases"),f(T,"rel","nofollow"),f(oe,"class","language-bash"),f(ue,"class","language-bash"),ui(H.src,di="https://github.com/Windows-On-Linux/Flowgorithm/raw/main/wallpaper.png")||f(H,"src",di),f(H,"alt","alt text"),f(H,"title","Flowgorithm"),f(G,"rel","\u201Dnofollow\u201D"),f(G,"href","https://wineget.pages.dev/howtoscript"),f(B,"href","https://wineget.pages.dev/"),f(B,"rel","nofollow"),f(x,"rel","\u201Dnofollow\u201D"),f(x,"href","https://wineget.pages.dev/packages")},m(e,l){o(e,m,l),i(m,h),o(e,b,l),o(e,E,l),i(E,d),o(e,g,l),o(e,P,l),i(P,ia),o(e,Pe,l),o(e,$,l),i($,la),o(e,ze,l),o(e,y,l),i(y,ta),o(e,ke,l),o(e,F,l),i(F,sa),o(e,Le,l),o(e,k,l),i(k,oa),i(k,be),i(be,ra),i(k,na),o(e,Re,l),o(e,z,l),i(z,pa),i(z,ua),i(z,ca),i(z,fa),o(e,xe,l),o(e,N,l),i(N,ma),o(e,qe,l),o(e,Q,l),i(Q,da),o(e,Ie,l),o(e,D,l),i(D,X),i(X,va),i(X,Ee),i(Ee,j),i(j,ga),i(j,V),V.innerHTML=Fi,o(e,Oe,l),o(e,W,l),i(W,_a),i(W,ha),i(W,ba),i(W,q),i(W,Ea),o(e,Se,l),o(e,I,l),I.innerHTML=Ni,o(e,Te,l),o(e,K,l),i(K,Wa),o(e,He,l),o(e,w,l),i(w,Z),i(Z,wa),i(Z,J),J.innerHTML=Qi,i(w,Pa),i(w,Y),i(Y,za),i(Y,ee),ee.innerHTML=Di,i(w,ka),i(w,v),i(v,La),i(v,ae),ae.innerHTML=Xi,i(v,Ra),i(v,ie),ie.innerHTML=ji,i(v,xa),i(v,le),le.innerHTML=Vi,i(v,qa),i(v,Ia),i(v,Oa),i(v,O),o(e,Me,l),o(e,te,l),i(te,Sa),o(e,Ce,l),o(e,L,l),i(L,S),i(S,Ta),i(S,T),i(T,Ha),i(S,Ma),i(L,Ca),i(L,se),i(se,Ga),i(se,oe),oe.innerHTML=Ki,o(e,Ge,l),o(e,re,l),i(re,Ba),o(e,Be,l),o(e,ne,l),i(ne,pe),i(pe,Aa),i(pe,ue),ue.innerHTML=Zi,o(e,Ae,l),o(e,ce,l),i(ce,Ua),o(e,Ue,l),o(e,fe,l),i(fe,We),i(We,$a),o(e,$e,l),o(e,me,l),i(me,ya),o(e,ye,l),o(e,de,l),i(de,H),o(e,Fe,l),o(e,M,l),i(M,Fa),i(M,Na),o(e,Ne,l),o(e,C,l),i(C,Qa),i(C,G),i(G,Da),o(e,Qe,l),o(e,R,l),i(R,Xa),i(R,B),i(B,ja),i(R,Va),o(e,De,l),o(e,ve,l),i(ve,Ka),o(e,Xe,l),o(e,x,l),i(x,Za),o(e,je,l),o(e,Ve,l),o(e,Ke,l),o(e,A,l),i(A,Ja),i(A,Ya),o(e,Ze,l),o(e,ge,l),i(ge,ei)},p:_l,d(e){e&&a(m),e&&a(b),e&&a(E),e&&a(g),e&&a(P),e&&a(Pe),e&&a($),e&&a(ze),e&&a(y),e&&a(ke),e&&a(F),e&&a(Le),e&&a(k),e&&a(Re),e&&a(z),e&&a(xe),e&&a(N),e&&a(qe),e&&a(Q),e&&a(Ie),e&&a(D),e&&a(Oe),e&&a(W),e&&a(Se),e&&a(I),e&&a(Te),e&&a(K),e&&a(He),e&&a(w),e&&a(Me),e&&a(te),e&&a(Ce),e&&a(L),e&&a(Ge),e&&a(re),e&&a(Be),e&&a(ne),e&&a(Ae),e&&a(ce),e&&a(Ue),e&&a(fe),e&&a($e),e&&a(me),e&&a(ye),e&&a(de),e&&a(Fe),e&&a(M),e&&a(Ne),e&&a(C),e&&a(Qe),e&&a(R),e&&a(De),e&&a(ve),e&&a(Xe),e&&a(x),e&&a(je),e&&a(Ve),e&&a(Ke),e&&a(A),e&&a(Ze),e&&a(ge)}}}function El(U){let m,h;const b=[U[0],yi];let E={$$slots:{default:[bl]},$$scope:{ctx:U}};for(let d=0;d<b.length;d+=1)E=ci(E,b[d]);return m=new hl({props:E}),{c(){ul(m.$$.fragment)},l(d){cl(m.$$.fragment,d)},m(d,g){fl(m,d,g),h=!0},p(d,[g]){const P=g&1?ml(b,[g&1&&Ui(d[0]),g&0&&Ui(yi)]):{};g&2&&(P.$$scope={dirty:g,ctx:d}),m.$set(P)},i(d){h||(dl(m.$$.fragment,d),h=!0)},o(d){vl(m.$$.fragment,d),h=!1},d(d){gl(m,d)}}}const yi={id:"2022-10-25-1",titolo:"Il package manager per Wine",featured:!1,autore:"Andrea Canale",data:"2022-10-25T00:00:00.000Z",cover:"cover.webp",introduzione:"Questo post descsrive come installare Wineget, il package manager per Wine.",pubblicato:!0,sezione:"Blog",categorie:["Wine","Wineget","Linux","Rust"]};function Wl(U,m,h){return U.$$set=b=>{h(0,m=ci(ci({},m),$i(b)))},m=$i(m),[m]}class Ll extends rl{constructor(m){super(),nl(this,m,Wl,El,pl,{})}}export{Ll as default,yi as metadata};
