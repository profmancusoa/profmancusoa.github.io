import{S as Os,i as Ks,s as Us,C as Ha,w as Qs,x as Ts,y as Ws,z as Bs,A as zs,f as Rs,t as $s,B as Hs,P as Cs,l as i,r as t,a as m,m as l,n as r,u as o,h as a,c,p as f,b as p,G as s,E as Xs}from"../../chunks/index-13114d8e.js";import{P as Ns}from"../../chunks/_post-f0361b2b.js";import"../../chunks/helpers-e147ed77.js";import"../../chunks/Categoria.svelte_svelte_type_style_lang-7c2ca554.js";function ys(R){let u,g,L,z,d,w,v,We,F,Be,Re,Y,$e,He,he,$,Xe,Pe,H,Ne,be,E,Z,I,ye,Ge,J,x,je,De,ee,A,Ve,Fe,X,M,Ye,Ze,ge,h,Je,ae,ea,aa,se,sa,ta,te,oa,ia,Le,U,xs='<code class="language-bash">pwgen</code>',ze,S,la,oe,ra,na,Ce,Q,As=`<code class="language-bash"><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> pwgen</code>`,Ie,T,ie,pa,ma,xe,W,Ms='<code class="language-bash"><span class="token function">man</span> pwgen</code>',Ae,N,ca,Me,_,ua,le,da,fa,re,_a,va,q,wa,Ea,ne,ha,Pa,pe,ba,ga,Se,y,La,qe,C,me,za,Ca,ce,Ia,xa,ke,G,B,Aa,ue,de,Ma,Sa,Oe,j,qa,Ke,P,fe,ka,Oa,_e,Ka,Ua,ve,Qa,Ta,we,Wa,Ue,D,Ba;return{c(){u=i("h1"),g=t("Password"),L=m(),z=i("h2"),d=t("Introduzione"),w=m(),v=i("p"),We=t(`Uno dei temi pi\xF9 discussi del nostro tempo, ma che allo stesso modo viene spesso sottovalutato dagli utenti \xE8 sicuramente quello della password. Spesso si tende ad utilizzare password poco complesse e semplici da violare. Inoltre, si tende a conservale in modo poco sicuro.
Con questo articolo scoprirete come `),F=i("em"),Be=t("generare"),Re=t(" le vostre password e come "),Y=i("em"),$e=t("conservarle"),He=t(" in maniera corretta."),he=m(),$=i("h2"),Xe=t("Generatori di Password"),Pe=m(),H=i("p"),Ne=t("Esistono migliaia se non milioni di programmi per generare password. Tra i pi\xF9 indicati e famosi troviamo i seguenti:"),be=m(),E=i("ul"),Z=i("li"),I=i("a"),ye=t("NordPass (Windows/macOS/Linux)"),Ge=m(),J=i("li"),x=i("a"),je=t("Bitwarden (Windows/macOS/Linux)"),De=m(),ee=i("li"),A=i("a"),Ve=t("1Password (Windows/macOS)"),Fe=m(),X=i("li"),M=i("a"),Ye=t("KeePass (Windows/macOS/Linux)"),Ze=t(" che approfondiremo pi\xF9 avanti"),ge=m(),h=i("p"),Je=t("Queste sono sicuramente valide scelte, ma per coloro che usano "),ae=i("em"),ea=t("Linux"),aa=t(" tutto ci\xF2 non servir\xE0. Come sempre, "),se=i("em"),sa=t("Linux"),ta=t(" ha un tool al nostro servizio. Questo tool \xE8 "),te=i("em"),oa=t("pwgen"),ia=t(", comando da terminale che ci permette di generare qualsiasi tipo di password. Usarlo \xE8 semplicissimo, basta digitare il comando ed eseguire:"),Le=m(),U=i("pre"),ze=m(),S=i("p"),la=t("Installare "),oe=i("em"),ra=t("pwgen"),na=t(" \xE8 semplicissimo, esegui questi due comandi e il gioco sar\xE0 fatto:"),Ce=m(),Q=i("pre"),Ie=m(),T=i("p"),ie=i("em"),pa=t("pwgen"),ma=t(` ti permette di generare le password che vuoi, esistono tantissime varianti. Puoi specificare il numero di caratteri, la tipologia, la complessit\xE0 della tua password\u2026
Se vuoi scoprire queste funzioni semplicemente consulta il manuale:`),xe=m(),W=i("pre"),Ae=m(),N=i("h2"),ca=t("Password Manager"),Me=m(),_=i("p"),ua=t("Abbiamo visto come generare una password, ora scopriamo come custodirla. Un password manager \xE8 un programma che ci permette di custodire in modo sicuro le nostre password. Anche qui esistono migliaia di password manager. In questo post vorrei approfondire il password manager "),le=i("em"),da=t("KeePassXC"),fa=m(),re=i("em"),_a=t("KeePassXC"),va=t(" \xE8 disponibile per Windows, Linux e MacOS. Installarlo \xE8 semplicissimo, accedendo alla "),q=i("a"),wa=t("pagina ufficiale"),Ea=t(" nella sezione "),ne=i("em"),ha=t("download"),Pa=t(" \xE8 possibile scaricare ed installare "),pe=i("em"),ba=t("KeePassXC"),ga=t("."),Se=m(),y=i("h3"),La=t("Come Funziona"),qe=m(),C=i("p"),me=i("em"),za=t("KeePassXC"),Ca=t(" \xE8 semplicissimo da usare. Cliccando sull\u2019icona "),ce=i("em"),Ia=t("Create a new database"),xa=t(` si proceder\xE0 con la creazione di un nuovo database per contenere le nostre password
Successivamente verr\xE0 chiesta la password del database.`),ke=m(),G=i("blockquote"),B=i("p"),Aa=t("NOTA: Questa password deve essere sicura e deve essere ricordata assolutamente. La sua perdita comporter\xE0 la perdita di "),ue=i("strong"),de=i("em"),Ma=t("tutte"),Sa=t(" le altre password!"),Oe=m(),j=i("p"),qa=t("Una volta creato il database \xE8 possbile salvare al suo interno tutte le password che si vuole, che saranno caratterizzate da:"),Ke=m(),P=i("ul"),fe=i("li"),ka=t("titolo"),Oa=m(),_e=i("li"),Ka=t("nome utente"),Ua=m(),ve=i("li"),Qa=t("URL"),Ta=m(),we=i("li"),Wa=t("descrizione"),Ue=m(),D=i("p"),Ba=t("Con questo concludiamo il post dedicato alle password. Buono smanettamento e alla prossima!"),this.h()},l(e){u=l(e,"H1",{});var n=r(u);g=o(n,"Password"),n.forEach(a),L=c(e),z=l(e,"H2",{});var Xa=r(z);d=o(Xa,"Introduzione"),Xa.forEach(a),w=c(e),v=l(e,"P",{});var V=r(v);We=o(V,`Uno dei temi pi\xF9 discussi del nostro tempo, ma che allo stesso modo viene spesso sottovalutato dagli utenti \xE8 sicuramente quello della password. Spesso si tende ad utilizzare password poco complesse e semplici da violare. Inoltre, si tende a conservale in modo poco sicuro.
Con questo articolo scoprirete come `),F=l(V,"EM",{});var Na=r(F);Be=o(Na,"generare"),Na.forEach(a),Re=o(V," le vostre password e come "),Y=l(V,"EM",{});var ya=r(Y);$e=o(ya,"conservarle"),ya.forEach(a),He=o(V," in maniera corretta."),V.forEach(a),he=c(e),$=l(e,"H2",{});var Ga=r($);Xe=o(Ga,"Generatori di Password"),Ga.forEach(a),Pe=c(e),H=l(e,"P",{});var ja=r(H);Ne=o(ja,"Esistono migliaia se non milioni di programmi per generare password. Tra i pi\xF9 indicati e famosi troviamo i seguenti:"),ja.forEach(a),be=c(e),E=l(e,"UL",{});var k=r(E);Z=l(k,"LI",{});var Da=r(Z);I=l(Da,"A",{href:!0,target:!0,title:!0});var Va=r(I);ye=o(Va,"NordPass (Windows/macOS/Linux)"),Va.forEach(a),Da.forEach(a),Ge=c(k),J=l(k,"LI",{});var Fa=r(J);x=l(Fa,"A",{href:!0,target:!0,title:!0});var Ya=r(x);je=o(Ya,"Bitwarden (Windows/macOS/Linux)"),Ya.forEach(a),Fa.forEach(a),De=c(k),ee=l(k,"LI",{});var Za=r(ee);A=l(Za,"A",{href:!0,target:!0,title:!0});var Ja=r(A);Ve=o(Ja,"1Password (Windows/macOS)"),Ja.forEach(a),Za.forEach(a),Fe=c(k),X=l(k,"LI",{});var Ra=r(X);M=l(Ra,"A",{href:!0,target:!0,title:!0});var es=r(M);Ye=o(es,"KeePass (Windows/macOS/Linux)"),es.forEach(a),Ze=o(Ra," che approfondiremo pi\xF9 avanti"),Ra.forEach(a),k.forEach(a),ge=c(e),h=l(e,"P",{});var O=r(h);Je=o(O,"Queste sono sicuramente valide scelte, ma per coloro che usano "),ae=l(O,"EM",{});var as=r(ae);ea=o(as,"Linux"),as.forEach(a),aa=o(O," tutto ci\xF2 non servir\xE0. Come sempre, "),se=l(O,"EM",{});var ss=r(se);sa=o(ss,"Linux"),ss.forEach(a),ta=o(O," ha un tool al nostro servizio. Questo tool \xE8 "),te=l(O,"EM",{});var ts=r(te);oa=o(ts,"pwgen"),ts.forEach(a),ia=o(O,", comando da terminale che ci permette di generare qualsiasi tipo di password. Usarlo \xE8 semplicissimo, basta digitare il comando ed eseguire:"),O.forEach(a),Le=c(e),U=l(e,"PRE",{class:!0});var Ss=r(U);Ss.forEach(a),ze=c(e),S=l(e,"P",{});var Qe=r(S);la=o(Qe,"Installare "),oe=l(Qe,"EM",{});var os=r(oe);ra=o(os,"pwgen"),os.forEach(a),na=o(Qe," \xE8 semplicissimo, esegui questi due comandi e il gioco sar\xE0 fatto:"),Qe.forEach(a),Ce=c(e),Q=l(e,"PRE",{class:!0});var qs=r(Q);qs.forEach(a),Ie=c(e),T=l(e,"P",{});var $a=r(T);ie=l($a,"EM",{});var is=r(ie);pa=o(is,"pwgen"),is.forEach(a),ma=o($a,` ti permette di generare le password che vuoi, esistono tantissime varianti. Puoi specificare il numero di caratteri, la tipologia, la complessit\xE0 della tua password\u2026
Se vuoi scoprire queste funzioni semplicemente consulta il manuale:`),$a.forEach(a),xe=c(e),W=l(e,"PRE",{class:!0});var ks=r(W);ks.forEach(a),Ae=c(e),N=l(e,"H2",{});var ls=r(N);ca=o(ls,"Password Manager"),ls.forEach(a),Me=c(e),_=l(e,"P",{});var b=r(_);ua=o(b,"Abbiamo visto come generare una password, ora scopriamo come custodirla. Un password manager \xE8 un programma che ci permette di custodire in modo sicuro le nostre password. Anche qui esistono migliaia di password manager. In questo post vorrei approfondire il password manager "),le=l(b,"EM",{});var rs=r(le);da=o(rs,"KeePassXC"),rs.forEach(a),fa=c(b),re=l(b,"EM",{});var ns=r(re);_a=o(ns,"KeePassXC"),ns.forEach(a),va=o(b," \xE8 disponibile per Windows, Linux e MacOS. Installarlo \xE8 semplicissimo, accedendo alla "),q=l(b,"A",{href:!0,target:!0,title:!0});var ps=r(q);wa=o(ps,"pagina ufficiale"),ps.forEach(a),Ea=o(b," nella sezione "),ne=l(b,"EM",{});var ms=r(ne);ha=o(ms,"download"),ms.forEach(a),Pa=o(b," \xE8 possibile scaricare ed installare "),pe=l(b,"EM",{});var cs=r(pe);ba=o(cs,"KeePassXC"),cs.forEach(a),ga=o(b,"."),b.forEach(a),Se=c(e),y=l(e,"H3",{});var us=r(y);La=o(us,"Come Funziona"),us.forEach(a),qe=c(e),C=l(e,"P",{});var Ee=r(C);me=l(Ee,"EM",{});var ds=r(me);za=o(ds,"KeePassXC"),ds.forEach(a),Ca=o(Ee," \xE8 semplicissimo da usare. Cliccando sull\u2019icona "),ce=l(Ee,"EM",{});var fs=r(ce);Ia=o(fs,"Create a new database"),fs.forEach(a),xa=o(Ee,` si proceder\xE0 con la creazione di un nuovo database per contenere le nostre password
Successivamente verr\xE0 chiesta la password del database.`),Ee.forEach(a),ke=c(e),G=l(e,"BLOCKQUOTE",{});var _s=r(G);B=l(_s,"P",{});var Te=r(B);Aa=o(Te,"NOTA: Questa password deve essere sicura e deve essere ricordata assolutamente. La sua perdita comporter\xE0 la perdita di "),ue=l(Te,"STRONG",{});var vs=r(ue);de=l(vs,"EM",{});var ws=r(de);Ma=o(ws,"tutte"),ws.forEach(a),vs.forEach(a),Sa=o(Te," le altre password!"),Te.forEach(a),_s.forEach(a),Oe=c(e),j=l(e,"P",{});var Es=r(j);qa=o(Es,"Una volta creato il database \xE8 possbile salvare al suo interno tutte le password che si vuole, che saranno caratterizzate da:"),Es.forEach(a),Ke=c(e),P=l(e,"UL",{});var K=r(P);fe=l(K,"LI",{});var hs=r(fe);ka=o(hs,"titolo"),hs.forEach(a),Oa=c(K),_e=l(K,"LI",{});var Ps=r(_e);Ka=o(Ps,"nome utente"),Ps.forEach(a),Ua=c(K),ve=l(K,"LI",{});var bs=r(ve);Qa=o(bs,"URL"),bs.forEach(a),Ta=c(K),we=l(K,"LI",{});var gs=r(we);Wa=o(gs,"descrizione"),gs.forEach(a),K.forEach(a),Ue=c(e),D=l(e,"P",{});var Ls=r(D);Ba=o(Ls,"Con questo concludiamo il post dedicato alle password. Buono smanettamento e alla prossima!"),Ls.forEach(a),this.h()},h(){f(I,"href","https://nordpass.com/?utm_source=google&utm_medium=cpc&utm_campaign=10508415118&utm_content=103935798197&utm_term=nordpass&gclid=EAIaIQobChMIqpKMzdfi-QIVRpnVCh0_jA5WEAAYASAAEgK88fD_BwE"),f(I,"target","_blank"),f(I,"title","NordPass"),f(x,"href","https://bitwarden.com/"),f(x,"target","_blank"),f(x,"title","Bitwarden"),f(A,"href","https://1password.com/it/sign-up/?utm_source=google&utm_medium=cpc&utm_campaign=11596051800&utm_content=479150720150&utm_term=1password&gclid=EAIaIQobChMI0f7op9ji-QIVxI1oCR2zUgy3EAAYASAAEgIb2PD_BwE&gclsrc=aw.ds"),f(A,"target","_blank"),f(A,"title","1Password"),f(M,"href","https://www.keepassx.org/"),f(M,"target","_blank"),f(M,"title","KeePass"),f(U,"class","language-bash"),f(Q,"class","language-bash"),f(W,"class","language-bash"),f(q,"href","https://keepassxc.org/"),f(q,"target","_blank"),f(q,"title","keepassxc")},m(e,n){p(e,u,n),s(u,g),p(e,L,n),p(e,z,n),s(z,d),p(e,w,n),p(e,v,n),s(v,We),s(v,F),s(F,Be),s(v,Re),s(v,Y),s(Y,$e),s(v,He),p(e,he,n),p(e,$,n),s($,Xe),p(e,Pe,n),p(e,H,n),s(H,Ne),p(e,be,n),p(e,E,n),s(E,Z),s(Z,I),s(I,ye),s(E,Ge),s(E,J),s(J,x),s(x,je),s(E,De),s(E,ee),s(ee,A),s(A,Ve),s(E,Fe),s(E,X),s(X,M),s(M,Ye),s(X,Ze),p(e,ge,n),p(e,h,n),s(h,Je),s(h,ae),s(ae,ea),s(h,aa),s(h,se),s(se,sa),s(h,ta),s(h,te),s(te,oa),s(h,ia),p(e,Le,n),p(e,U,n),U.innerHTML=xs,p(e,ze,n),p(e,S,n),s(S,la),s(S,oe),s(oe,ra),s(S,na),p(e,Ce,n),p(e,Q,n),Q.innerHTML=As,p(e,Ie,n),p(e,T,n),s(T,ie),s(ie,pa),s(T,ma),p(e,xe,n),p(e,W,n),W.innerHTML=Ms,p(e,Ae,n),p(e,N,n),s(N,ca),p(e,Me,n),p(e,_,n),s(_,ua),s(_,le),s(le,da),s(_,fa),s(_,re),s(re,_a),s(_,va),s(_,q),s(q,wa),s(_,Ea),s(_,ne),s(ne,ha),s(_,Pa),s(_,pe),s(pe,ba),s(_,ga),p(e,Se,n),p(e,y,n),s(y,La),p(e,qe,n),p(e,C,n),s(C,me),s(me,za),s(C,Ca),s(C,ce),s(ce,Ia),s(C,xa),p(e,ke,n),p(e,G,n),s(G,B),s(B,Aa),s(B,ue),s(ue,de),s(de,Ma),s(B,Sa),p(e,Oe,n),p(e,j,n),s(j,qa),p(e,Ke,n),p(e,P,n),s(P,fe),s(fe,ka),s(P,Oa),s(P,_e),s(_e,Ka),s(P,Ua),s(P,ve),s(ve,Qa),s(P,Ta),s(P,we),s(we,Wa),p(e,Ue,n),p(e,D,n),s(D,Ba)},p:Xs,d(e){e&&a(u),e&&a(L),e&&a(z),e&&a(w),e&&a(v),e&&a(he),e&&a($),e&&a(Pe),e&&a(H),e&&a(be),e&&a(E),e&&a(ge),e&&a(h),e&&a(Le),e&&a(U),e&&a(ze),e&&a(S),e&&a(Ce),e&&a(Q),e&&a(Ie),e&&a(T),e&&a(xe),e&&a(W),e&&a(Ae),e&&a(N),e&&a(Me),e&&a(_),e&&a(Se),e&&a(y),e&&a(qe),e&&a(C),e&&a(ke),e&&a(G),e&&a(Oe),e&&a(j),e&&a(Ke),e&&a(P),e&&a(Ue),e&&a(D)}}}function Gs(R){let u,g;const L=[R[0],Is];let z={$$slots:{default:[ys]},$$scope:{ctx:R}};for(let d=0;d<L.length;d+=1)z=Ha(z,L[d]);return u=new Ns({props:z}),{c(){Qs(u.$$.fragment)},l(d){Ts(u.$$.fragment,d)},m(d,w){Ws(u,d,w),g=!0},p(d,[w]){const v=w&1?Bs(L,[w&1&&zs(d[0]),w&0&&zs(Is)]):{};w&2&&(v.$$scope={dirty:w,ctx:d}),u.$set(v)},i(d){g||(Rs(u.$$.fragment,d),g=!0)},o(d){$s(u.$$.fragment,d),g=!1},d(d){Hs(u,d)}}}const Is={id:"2022-08-25-0",titolo:"Come generare e gestire le password",featured:!1,autore:"Dario Ruggieri",data:"2022-08-25T00:00:00.000Z",cover:"cover.webp",introduzione:"Post dedicato alla generazione e gestione delle password",pubblicato:!0,sezione:"IT",categorie:["Password","Linux","Sicurezza"]};function js(R,u,g){return R.$$set=L=>{g(0,u=Ha(Ha({},u),Cs(L)))},u=Cs(u),[u]}class Zs extends Os{constructor(u){super(),Ks(this,u,js,Gs,Us,{})}}export{Zs as default,Is as metadata};