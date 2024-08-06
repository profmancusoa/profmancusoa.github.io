import{S as Os,i as Ks,s as Us,C as Ha,w as Qs,x as Ts,y as Ws,z as Bs,A as zs,f as Rs,t as $s,B as Hs,P as Cs,l,r as t,a as m,m as i,n as r,u as o,h as a,c as u,p as d,b as p,G as s,E as Xs}from"../../chunks/index-c6be98ca.js";import{P as Ns}from"../../chunks/_post-c462c736.js";import"../../chunks/helpers-e147ed77.js";import"../../chunks/Categoria.svelte_svelte_type_style_lang-d76a398c.js";function ys(R){let c,g,L,z,f,w,v,We,F,Be,Re,Y,$e,He,he,$,Xe,Pe,H,Ne,be,E,Z,C,ye,Ge,J,I,je,De,ee,x,Ve,Fe,X,A,Ye,Ze,ge,h,Je,ae,ea,aa,se,sa,ta,te,oa,la,Le,U,xs='<code class="language-bash">pwgen</code>',ze,S,ia,oe,ra,na,Ce,Q,As=`<code class="language-bash"><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> pwgen</code>`,Ie,T,le,pa,ma,xe,W,Ms='<code class="language-bash"><span class="token function">man</span> pwgen</code>',Ae,N,ua,Me,_,ca,ie,da,fa,re,_a,va,q,wa,Ea,ne,ha,Pa,pe,ba,ga,Se,y,La,qe,M,me,za,Ca,ue,Ia,xa,ke,G,B,Aa,ce,de,Ma,Sa,Oe,j,qa,Ke,P,fe,ka,Oa,_e,Ka,Ua,ve,Qa,Ta,we,Wa,Ue,D,Ba;return{c(){c=l("h1"),g=t("Password"),L=m(),z=l("h2"),f=t("Introduzione"),w=m(),v=l("p"),We=t(`Uno dei temi pi\xF9 discussi del nostro tempo, ma che allo stesso modo viene spesso sottovalutato dagli utenti \xE8 sicuramente quello della password. Spesso si tende ad utilizzare password poco complesse e semplici da violare. Inoltre, si tende a conservale in modo poco sicuro.
Con questo articolo scoprirete come `),F=l("em"),Be=t("generare"),Re=t(" le vostre password e come "),Y=l("em"),$e=t("conservarle"),He=t(" in maniera corretta."),he=m(),$=l("h2"),Xe=t("Generatori di Password"),Pe=m(),H=l("p"),Ne=t("Esistono migliaia se non milioni di programmi per generare password. Tra i pi\xF9 indicati e famosi troviamo i seguenti:"),be=m(),E=l("ul"),Z=l("li"),C=l("a"),ye=t("NordPass (Windows/macOS/Linux)"),Ge=m(),J=l("li"),I=l("a"),je=t("Bitwarden (Windows/macOS/Linux)"),De=m(),ee=l("li"),x=l("a"),Ve=t("1Password (Windows/macOS)"),Fe=m(),X=l("li"),A=l("a"),Ye=t("KeePass (Windows/macOS/Linux)"),Ze=t(" che approfondiremo pi\xF9 avanti"),ge=m(),h=l("p"),Je=t("Queste sono sicuramente valide scelte, ma per coloro che usano "),ae=l("em"),ea=t("Linux"),aa=t(" tutto ci\xF2 non servir\xE0. Come sempre, "),se=l("em"),sa=t("Linux"),ta=t(" ha un tool al nostro servizio. Questo tool \xE8 "),te=l("em"),oa=t("pwgen"),la=t(", comando da terminale che ci permette di generare qualsiasi tipo di password. Usarlo \xE8 semplicissimo, basta digitare il comando ed eseguire:"),Le=m(),U=l("pre"),ze=m(),S=l("p"),ia=t("Installare "),oe=l("em"),ra=t("pwgen"),na=t(" \xE8 semplicissimo, esegui questi due comandi e il gioco sar\xE0 fatto:"),Ce=m(),Q=l("pre"),Ie=m(),T=l("p"),le=l("em"),pa=t("pwgen"),ma=t(` ti permette di generare le password che vuoi, esistono tantissime varianti. Puoi specificare il numero di caratteri, la tipologia, la complessit\xE0 della tua password\u2026
Se vuoi scoprire queste funzioni semplicemente consulta il manuale:`),xe=m(),W=l("pre"),Ae=m(),N=l("h2"),ua=t("Password Manager"),Me=m(),_=l("p"),ca=t("Abbiamo visto come generare una password, ora scopriamo come custodirla. Un password manager \xE8 un programma che ci permette di custodire in modo sicuro le nostre password. Anche qui esistono migliaia di password manager. In questo post vorrei approfondire il password manager "),ie=l("em"),da=t("KeePassXC"),fa=m(),re=l("em"),_a=t("KeePassXC"),va=t(" \xE8 disponibile per Windows, Linux e MacOS. Installarlo \xE8 semplicissimo, accedendo alla "),q=l("a"),wa=t("pagina ufficiale"),Ea=t(" nella sezione "),ne=l("em"),ha=t("download"),Pa=t(" \xE8 possibile scaricare ed installare "),pe=l("em"),ba=t("KeePassXC"),ga=t("."),Se=m(),y=l("h3"),La=t("Come Funziona"),qe=m(),M=l("p"),me=l("em"),za=t("KeePassXC"),Ca=t(" \xE8 semplicissimo da usare. Cliccando sull\u2019icona "),ue=l("em"),Ia=t("Create a new database"),xa=t(` si proceder\xE0 con la creazione di un nuovo database per contenere le nostre password
Successivamente verr\xE0 chiesta la password del database.`),ke=m(),G=l("blockquote"),B=l("p"),Aa=t("NOTA: Questa password deve essere sicura e deve essere ricordata assolutamente. La sua perdita comporter\xE0 la perdita di "),ce=l("strong"),de=l("em"),Ma=t("tutte"),Sa=t(" le altre password!"),Oe=m(),j=l("p"),qa=t("Una volta creato il database \xE8 possbile salvare al suo interno tutte le password che si vuole, che saranno caratterizzate da:"),Ke=m(),P=l("ul"),fe=l("li"),ka=t("titolo"),Oa=m(),_e=l("li"),Ka=t("nome utente"),Ua=m(),ve=l("li"),Qa=t("URL"),Ta=m(),we=l("li"),Wa=t("descrizione"),Ue=m(),D=l("p"),Ba=t("Con questo concludiamo il post dedicato alle password. Buono smanettamento e alla prossima!"),this.h()},l(e){c=i(e,"H1",{});var n=r(c);g=o(n,"Password"),n.forEach(a),L=u(e),z=i(e,"H2",{});var Xa=r(z);f=o(Xa,"Introduzione"),Xa.forEach(a),w=u(e),v=i(e,"P",{});var V=r(v);We=o(V,`Uno dei temi pi\xF9 discussi del nostro tempo, ma che allo stesso modo viene spesso sottovalutato dagli utenti \xE8 sicuramente quello della password. Spesso si tende ad utilizzare password poco complesse e semplici da violare. Inoltre, si tende a conservale in modo poco sicuro.
Con questo articolo scoprirete come `),F=i(V,"EM",{});var Na=r(F);Be=o(Na,"generare"),Na.forEach(a),Re=o(V," le vostre password e come "),Y=i(V,"EM",{});var ya=r(Y);$e=o(ya,"conservarle"),ya.forEach(a),He=o(V," in maniera corretta."),V.forEach(a),he=u(e),$=i(e,"H2",{});var Ga=r($);Xe=o(Ga,"Generatori di Password"),Ga.forEach(a),Pe=u(e),H=i(e,"P",{});var ja=r(H);Ne=o(ja,"Esistono migliaia se non milioni di programmi per generare password. Tra i pi\xF9 indicati e famosi troviamo i seguenti:"),ja.forEach(a),be=u(e),E=i(e,"UL",{});var k=r(E);Z=i(k,"LI",{});var Da=r(Z);C=i(Da,"A",{rel:!0,href:!0,target:!0,title:!0});var Va=r(C);ye=o(Va,"NordPass (Windows/macOS/Linux)"),Va.forEach(a),Da.forEach(a),Ge=u(k),J=i(k,"LI",{});var Fa=r(J);I=i(Fa,"A",{rel:!0,href:!0,target:!0,title:!0});var Ya=r(I);je=o(Ya,"Bitwarden (Windows/macOS/Linux)"),Ya.forEach(a),Fa.forEach(a),De=u(k),ee=i(k,"LI",{});var Za=r(ee);x=i(Za,"A",{rel:!0,href:!0,target:!0,title:!0});var Ja=r(x);Ve=o(Ja,"1Password (Windows/macOS)"),Ja.forEach(a),Za.forEach(a),Fe=u(k),X=i(k,"LI",{});var Ra=r(X);A=i(Ra,"A",{rel:!0,href:!0,target:!0,title:!0});var es=r(A);Ye=o(es,"KeePass (Windows/macOS/Linux)"),es.forEach(a),Ze=o(Ra," che approfondiremo pi\xF9 avanti"),Ra.forEach(a),k.forEach(a),ge=u(e),h=i(e,"P",{});var O=r(h);Je=o(O,"Queste sono sicuramente valide scelte, ma per coloro che usano "),ae=i(O,"EM",{});var as=r(ae);ea=o(as,"Linux"),as.forEach(a),aa=o(O," tutto ci\xF2 non servir\xE0. Come sempre, "),se=i(O,"EM",{});var ss=r(se);sa=o(ss,"Linux"),ss.forEach(a),ta=o(O," ha un tool al nostro servizio. Questo tool \xE8 "),te=i(O,"EM",{});var ts=r(te);oa=o(ts,"pwgen"),ts.forEach(a),la=o(O,", comando da terminale che ci permette di generare qualsiasi tipo di password. Usarlo \xE8 semplicissimo, basta digitare il comando ed eseguire:"),O.forEach(a),Le=u(e),U=i(e,"PRE",{class:!0});var Ss=r(U);Ss.forEach(a),ze=u(e),S=i(e,"P",{});var Qe=r(S);ia=o(Qe,"Installare "),oe=i(Qe,"EM",{});var os=r(oe);ra=o(os,"pwgen"),os.forEach(a),na=o(Qe," \xE8 semplicissimo, esegui questi due comandi e il gioco sar\xE0 fatto:"),Qe.forEach(a),Ce=u(e),Q=i(e,"PRE",{class:!0});var qs=r(Q);qs.forEach(a),Ie=u(e),T=i(e,"P",{});var $a=r(T);le=i($a,"EM",{});var ls=r(le);pa=o(ls,"pwgen"),ls.forEach(a),ma=o($a,` ti permette di generare le password che vuoi, esistono tantissime varianti. Puoi specificare il numero di caratteri, la tipologia, la complessit\xE0 della tua password\u2026
Se vuoi scoprire queste funzioni semplicemente consulta il manuale:`),$a.forEach(a),xe=u(e),W=i(e,"PRE",{class:!0});var ks=r(W);ks.forEach(a),Ae=u(e),N=i(e,"H2",{});var is=r(N);ua=o(is,"Password Manager"),is.forEach(a),Me=u(e),_=i(e,"P",{});var b=r(_);ca=o(b,"Abbiamo visto come generare una password, ora scopriamo come custodirla. Un password manager \xE8 un programma che ci permette di custodire in modo sicuro le nostre password. Anche qui esistono migliaia di password manager. In questo post vorrei approfondire il password manager "),ie=i(b,"EM",{});var rs=r(ie);da=o(rs,"KeePassXC"),rs.forEach(a),fa=u(b),re=i(b,"EM",{});var ns=r(re);_a=o(ns,"KeePassXC"),ns.forEach(a),va=o(b," \xE8 disponibile per Windows, Linux e MacOS. Installarlo \xE8 semplicissimo, accedendo alla "),q=i(b,"A",{href:!0,target:!0,title:!0});var ps=r(q);wa=o(ps,"pagina ufficiale"),ps.forEach(a),Ea=o(b," nella sezione "),ne=i(b,"EM",{});var ms=r(ne);ha=o(ms,"download"),ms.forEach(a),Pa=o(b," \xE8 possibile scaricare ed installare "),pe=i(b,"EM",{});var us=r(pe);ba=o(us,"KeePassXC"),us.forEach(a),ga=o(b,"."),b.forEach(a),Se=u(e),y=i(e,"H3",{});var cs=r(y);La=o(cs,"Come Funziona"),cs.forEach(a),qe=u(e),M=i(e,"P",{});var Ee=r(M);me=i(Ee,"EM",{});var ds=r(me);za=o(ds,"KeePassXC"),ds.forEach(a),Ca=o(Ee," \xE8 semplicissimo da usare. Cliccando sull\u2019icona "),ue=i(Ee,"EM",{});var fs=r(ue);Ia=o(fs,"Create a new database"),fs.forEach(a),xa=o(Ee,` si proceder\xE0 con la creazione di un nuovo database per contenere le nostre password
Successivamente verr\xE0 chiesta la password del database.`),Ee.forEach(a),ke=u(e),G=i(e,"BLOCKQUOTE",{});var _s=r(G);B=i(_s,"P",{});var Te=r(B);Aa=o(Te,"NOTA: Questa password deve essere sicura e deve essere ricordata assolutamente. La sua perdita comporter\xE0 la perdita di "),ce=i(Te,"STRONG",{});var vs=r(ce);de=i(vs,"EM",{});var ws=r(de);Ma=o(ws,"tutte"),ws.forEach(a),vs.forEach(a),Sa=o(Te," le altre password!"),Te.forEach(a),_s.forEach(a),Oe=u(e),j=i(e,"P",{});var Es=r(j);qa=o(Es,"Una volta creato il database \xE8 possbile salvare al suo interno tutte le password che si vuole, che saranno caratterizzate da:"),Es.forEach(a),Ke=u(e),P=i(e,"UL",{});var K=r(P);fe=i(K,"LI",{});var hs=r(fe);ka=o(hs,"titolo"),hs.forEach(a),Oa=u(K),_e=i(K,"LI",{});var Ps=r(_e);Ka=o(Ps,"nome utente"),Ps.forEach(a),Ua=u(K),ve=i(K,"LI",{});var bs=r(ve);Qa=o(bs,"URL"),bs.forEach(a),Ta=u(K),we=i(K,"LI",{});var gs=r(we);Wa=o(gs,"descrizione"),gs.forEach(a),K.forEach(a),Ue=u(e),D=i(e,"P",{});var Ls=r(D);Ba=o(Ls,"Con questo concludiamo il post dedicato alle password. Buono smanettamento e alla prossima!"),Ls.forEach(a),this.h()},h(){d(C,"rel","\u201Dnofollow\u201D"),d(C,"href","https://nordpass.com/?utm_source=google&utm_medium=cpc&utm_campaign=10508415118&utm_content=103935798197&utm_term=nordpass&gclid=EAIaIQobChMIqpKMzdfi-QIVRpnVCh0_jA5WEAAYASAAEgK88fD_BwE"),d(C,"target","_blank"),d(C,"title","NordPass"),d(I,"rel","\u201Dnofollow\u201D"),d(I,"href","https://bitwarden.com/"),d(I,"target","_blank"),d(I,"title","Bitwarden"),d(x,"rel","\u201Dnofollow\u201D"),d(x,"href","https://1password.com/it/sign-up/?utm_source=google&utm_medium=cpc&utm_campaign=11596051800&utm_content=479150720150&utm_term=1password&gclid=EAIaIQobChMI0f7op9ji-QIVxI1oCR2zUgy3EAAYASAAEgIb2PD_BwE&gclsrc=aw.ds"),d(x,"target","_blank"),d(x,"title","1Password"),d(A,"rel","\u201Dnofollow\u201D"),d(A,"href","https://www.keepassx.org/"),d(A,"target","_blank"),d(A,"title","KeePass"),d(U,"class","language-bash"),d(Q,"class","language-bash"),d(W,"class","language-bash"),d(q,"href","https://keepassxc.org/"),d(q,"target","_blank"),d(q,"title","keepassxc")},m(e,n){p(e,c,n),s(c,g),p(e,L,n),p(e,z,n),s(z,f),p(e,w,n),p(e,v,n),s(v,We),s(v,F),s(F,Be),s(v,Re),s(v,Y),s(Y,$e),s(v,He),p(e,he,n),p(e,$,n),s($,Xe),p(e,Pe,n),p(e,H,n),s(H,Ne),p(e,be,n),p(e,E,n),s(E,Z),s(Z,C),s(C,ye),s(E,Ge),s(E,J),s(J,I),s(I,je),s(E,De),s(E,ee),s(ee,x),s(x,Ve),s(E,Fe),s(E,X),s(X,A),s(A,Ye),s(X,Ze),p(e,ge,n),p(e,h,n),s(h,Je),s(h,ae),s(ae,ea),s(h,aa),s(h,se),s(se,sa),s(h,ta),s(h,te),s(te,oa),s(h,la),p(e,Le,n),p(e,U,n),U.innerHTML=xs,p(e,ze,n),p(e,S,n),s(S,ia),s(S,oe),s(oe,ra),s(S,na),p(e,Ce,n),p(e,Q,n),Q.innerHTML=As,p(e,Ie,n),p(e,T,n),s(T,le),s(le,pa),s(T,ma),p(e,xe,n),p(e,W,n),W.innerHTML=Ms,p(e,Ae,n),p(e,N,n),s(N,ua),p(e,Me,n),p(e,_,n),s(_,ca),s(_,ie),s(ie,da),s(_,fa),s(_,re),s(re,_a),s(_,va),s(_,q),s(q,wa),s(_,Ea),s(_,ne),s(ne,ha),s(_,Pa),s(_,pe),s(pe,ba),s(_,ga),p(e,Se,n),p(e,y,n),s(y,La),p(e,qe,n),p(e,M,n),s(M,me),s(me,za),s(M,Ca),s(M,ue),s(ue,Ia),s(M,xa),p(e,ke,n),p(e,G,n),s(G,B),s(B,Aa),s(B,ce),s(ce,de),s(de,Ma),s(B,Sa),p(e,Oe,n),p(e,j,n),s(j,qa),p(e,Ke,n),p(e,P,n),s(P,fe),s(fe,ka),s(P,Oa),s(P,_e),s(_e,Ka),s(P,Ua),s(P,ve),s(ve,Qa),s(P,Ta),s(P,we),s(we,Wa),p(e,Ue,n),p(e,D,n),s(D,Ba)},p:Xs,d(e){e&&a(c),e&&a(L),e&&a(z),e&&a(w),e&&a(v),e&&a(he),e&&a($),e&&a(Pe),e&&a(H),e&&a(be),e&&a(E),e&&a(ge),e&&a(h),e&&a(Le),e&&a(U),e&&a(ze),e&&a(S),e&&a(Ce),e&&a(Q),e&&a(Ie),e&&a(T),e&&a(xe),e&&a(W),e&&a(Ae),e&&a(N),e&&a(Me),e&&a(_),e&&a(Se),e&&a(y),e&&a(qe),e&&a(M),e&&a(ke),e&&a(G),e&&a(Oe),e&&a(j),e&&a(Ke),e&&a(P),e&&a(Ue),e&&a(D)}}}function Gs(R){let c,g;const L=[R[0],Is];let z={$$slots:{default:[ys]},$$scope:{ctx:R}};for(let f=0;f<L.length;f+=1)z=Ha(z,L[f]);return c=new Ns({props:z}),{c(){Qs(c.$$.fragment)},l(f){Ts(c.$$.fragment,f)},m(f,w){Ws(c,f,w),g=!0},p(f,[w]){const v=w&1?Bs(L,[w&1&&zs(f[0]),w&0&&zs(Is)]):{};w&2&&(v.$$scope={dirty:w,ctx:f}),c.$set(v)},i(f){g||(Rs(c.$$.fragment,f),g=!0)},o(f){$s(c.$$.fragment,f),g=!1},d(f){Hs(c,f)}}}const Is={id:"2022-08-25-0",titolo:"Come generare e gestire le password",featured:!1,autore:"Dario Ruggieri",data:"2022-08-25T00:00:00.000Z",cover:"cover.webp",introduzione:"Post dedicato alla generazione e gestione delle password",pubblicato:!0,sezione:"IT",categorie:["Password","Linux","Sicurezza"]};function js(R,c,g){return R.$$set=L=>{g(0,c=Ha(Ha({},c),Cs(L)))},c=Cs(c),[c]}class Zs extends Os{constructor(c){super(),Ks(this,c,js,Gs,Us,{})}}export{Zs as default,Is as metadata};
