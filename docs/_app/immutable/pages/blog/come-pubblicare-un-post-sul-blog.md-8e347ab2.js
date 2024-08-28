import{S as xo,i as Go,s as Ro,l as a,m as s,n as r,h as t,p as v,F as w,b as o,G as i,E as Cl,C as yl,w as $l,x as Ml,y as Il,z as Bo,A as zo,f as ql,t as zl,B as Ol,P as Oo,r as p,a as n,u,c}from"../../chunks/index-ba2b2825.js";import{P as No}from"../../chunks/_post-79929fc2.js";import"../../chunks/helpers-e59642c8.js";import"../../chunks/Categoria.svelte_svelte_type_style_lang-d5b62848.js";function Uo(P){let f,_,d,E;return{c(){f=a("div"),_=a("script"),this.h()},l(m){f=s(m,"DIV",{});var b=r(f);_=s(b,"SCRIPT",{id:!0,src:!0});var k=r(_);k.forEach(t),b.forEach(t),this.h()},h(){v(_,"id",d="asciicast-"+P[0]),w(_.src,E="https://asciinema.org/a/"+P[0]+".js")||v(_,"src",E)},m(m,b){o(m,f,b),i(f,_)},p(m,[b]){b&1&&d!==(d="asciicast-"+m[0])&&v(_,"id",d),b&1&&!w(_.src,E="https://asciinema.org/a/"+m[0]+".js")&&v(_,"src",E)},i:Cl,o:Cl,d(m){m&&t(f)}}}function Vo(P,f,_){let{uid:d}=f;return P.$$set=E=>{"uid"in E&&_(0,d=E.uid)},[d]}class So extends xo{constructor(f){super(),Go(this,f,Vo,Uo,Ro,{uid:0})}}function Qo(P){let f,_,d,E,m,b,k,Mt,O,It,Ge,D,H,Sl,Re,T,qt,Ae,B,zt,De,S,He,N,Ot,Te,U,V,Ll,Be,Q,St,Ne,C,Lt,Pe,xt,Gt,ke,we,Rt,At,Ue,g,j,xl,Ve,$,Dt,Ce,Ht,Tt,Qe,L,Ao='<code class="language-bash"><span class="token function">npm</span> run article_new <span class="token string">"Il mio articolo di prova"</span></code>',ge,F,Bt,je,J,Nt,Fe,W,Ut,Je,Z,Vt,We,x,Do=`<code class="language-md"><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">id</span><span class="token punctuation">:</span> 2022<span class="token punctuation">-</span>08<span class="token punctuation">-</span>21<span class="token punctuation">-</span><span class="token number">1</span>
<span class="token key atrule">titolo</span><span class="token punctuation">:</span> Il mio post
<span class="token key atrule">featured</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">autore</span><span class="token punctuation">:</span> JohnDoe
<span class="token key atrule">data</span><span class="token punctuation">:</span> <span class="token datetime number">2022-08-21</span>
<span class="token key atrule">cover</span><span class="token punctuation">:</span> cover.webp
<span class="token key atrule">introduzione</span><span class="token punctuation">:</span> Questo \xE8 il primo posti di JohnDoe e parla di Linux
<span class="token key atrule">pubblicato</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">sezione</span><span class="token punctuation">:</span> IT
<span class="token key atrule">categorie</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> Linux</span>
<span class="token punctuation">---</span></span>

<span class="token title important"><span class="token punctuation">#</span> Cos'\xE8 Linux</span>

Linux \xE8 un sistema operativo, ovvero quell'insieme di programmi essenziali per far funzionare il computer e farci
qualcosa di utile o divertente. E' una alternativa a Windows e a MacOS, e pu\xF2 essere installato al loro posto
(o insieme, sullo stesso computer).

Pi\xF9 in generale Linux \xE8 il primo rappresentante del software cosiddetto "libero" ("freesoftware", in inglese), ovvero
quel software che viene distribuito con una licenza che ne permette non solo l'utilizzo da parte di chiunque ed in
qualsiasi circostanza ma anche la modifica, la copia e l'analisi.</code>`,Ze,K,Qt,Ke,y,gt,ye,jt,Ft,$e,Jt,Xe,M,Wt,Me,Zt,Kt,Ye,X,Y,Gl,he,h,Xt,et,ee,Yt,tt,te,le,Rl,lt,I,ht,Ie,el,tl,ot,oe,ie,Al,it,ae,ll,at,se,ol,st,q,il,qe,al,sl,rt,G,pt,R,rl,ze,pl,ut,re,pe,Dl,nt,A,ul,Oe,nl,ct,ue,ne,Hl,ft,ce,cl,mt,fe,fl,vt,me,ve,Tl,_t,_e,ml,bt,be,vl,dt,z,_l,Se,bl,dl,Et,de,Le,El,Pt;return S=new So({props:{uid:"516289"}}),G=new So({props:{uid:"516293"}}),{c(){f=a("p"),_=p("In questo post, \xE8 mostrato in dettaglio, come creare e pubblicare un post sul blog ProfMancusoa e come fare il preview prima della pubblicazione."),d=n(),E=a("h2"),m=p("1 Cloniamo il repository del blog"),b=n(),k=a("p"),Mt=p("Per recuperare la URL del blog vai sul repository ufficiale "),O=a("a"),It=p("ProfMancusoa"),Ge=n(),D=a("p"),H=a("img"),Re=n(),T=a("p"),qt=p("Come mostrato in figura al punto 3, copia la URL del repository."),Ae=n(),B=a("p"),zt=p("Ora esegui i comandi,in una shell di Linux, come mostrato sotto:"),De=n(),$l(S.$$.fragment),He=n(),N=a("p"),Ot=p("Se tutto \xE8 andato a buon fine vedremo, si aprir\xE0 automaticamente nel browser la pagina locale del blog."),Te=n(),U=a("p"),V=a("img"),Be=n(),Q=a("h2"),St=p("2 Creiamo il file del post"),Ne=n(),C=a("p"),Lt=p("In Visual Studio Code, nella directory "),Pe=a("code"),xt=p("src/routes/blog"),Gt=p(" creau un file .md con nome uguale allo slug del titolo ( es: "),ke=a("strong"),we=a("em"),Rt=p("il-mio-post.md"),At=p(" )"),Ue=n(),g=a("p"),j=a("img"),Ve=n(),$=a("p"),Dt=p("In alternativa potete invocare lo script "),Ce=a("code"),Ht=p("article_new"),Tt=p(" nel seguente modo:"),Qe=n(),L=a("pre"),ge=n(),F=a("p"),Bt=p("dove \u201CIl mio articolo di prova\u201D \xE8 il titolo del vostro articolo."),je=n(),J=a("p"),Nt=p("Lo script generer\xE0 automaticamente tutte le risorse necessarie per scrivere l\u2019articolo."),Fe=n(),W=a("h2"),Ut=p("3 Editiamo l\u2019articolo"),Je=n(),Z=a("p"),Vt=p("Ora scrivi il tuo articolo nel file appena creato, facendo attenzione a compilare correttamente il frontmatter"),We=n(),x=a("pre"),Ze=n(),K=a("h2"),Qt=p("4 Aggiungiamo l\u2019immagine cover dell\u2019articolo"),Ke=n(),y=a("p"),gt=p("Crea una directory "),ye=a("code"),jt=p("il-mio-post"),Ft=p(" dentro il seguente percorso "),$e=a("code"),Jt=p("static/img/posts"),Xe=n(),M=a("p"),Wt=p("All\u2019interno della directory appena creata, inseirsci il file "),Me=a("em"),Zt=p("cover.webp"),Kt=p(" (il nome \xE8 quello specificato nel frontmatter)"),Ye=n(),X=a("p"),Y=a("img"),he=n(),h=a("h2"),Xt=p("5 Verica del post in locale"),et=n(),ee=a("p"),Yt=p("Se tutto \xE8 andato bene, ora nel browser vedrai comparire il tuo nuovo articolo. Facile no?!!!\u270C"),tt=n(),te=a("p"),le=a("img"),lt=n(),I=a("p"),ht=p("Se clicchisull\u2019immagine del post o sul pulsante "),Ie=a("strong"),el=p("Leggi"),tl=p(" vedrai il tuo articolo completo. Cos\xEC potrai verificare che tutto sia ok e che appaia come lo avevi pensato."),ot=n(),oe=a("p"),ie=a("img"),it=n(),ae=a("p"),ll=p("Se tutto \xE8 ok e non devi ulteriormente modificare il tuo articolo, puoi passare ora alla richiesta di pubblicazione."),at=n(),se=a("h2"),ol=p("6 Pubblichiamo il post"),st=n(),q=a("p"),il=p("Per pubblicare il post \xE8 necessario fare il push del branch su github e successivamente creare una "),qe=a("strong"),al=p("Pull Request (PR)"),sl=p("."),rt=n(),$l(G.$$.fragment),pt=n(),R=a("p"),rl=p("Una volta fatto il push del branch, vai sulla pagina del repository e premi il pulsante "),ze=a("code"),pl=p("Compare & pull request"),ut=n(),re=a("p"),pe=a("img"),nt=n(),A=a("p"),ul=p("Aggiungi un commento esplicativo e premi il pulsante "),Oe=a("code"),nl=p("Create pull request"),ct=n(),ue=a("p"),ne=a("img"),ft=n(),ce=a("p"),cl=p("Ottimo, come vedi una nuova pull request \xE8 stata creata. \u{1F44C}"),mt=n(),fe=a("p"),fl=p("Ora sar\xE0 possibile per l\u2019amministratore verificare se tutto \xE8 corretto, ed in caso affermativo pubblicare il tuo articolo su blog in produzione."),vt=n(),me=a("p"),ve=a("img"),_t=n(),_e=a("p"),ml=p("Come abbiamo visto in questo post, per creare e pubblicare un nuovo articolo usiamo un metodo da sviluppatore ed usiamo git e github come in un ambiente professionale di sviluppo software."),bt=n(),be=a("p"),vl=p("Questo ci fornisce molta flessibilit\xE0 e dopo tutto ci permette di iniziare ad imparare unos trumento utilissimo nel mondo del lavoro per gli informatici."),dt=n(),z=a("p"),_l=p("Non mi resta che augurarti "),Se=a("strong"),bl=p("Buon Bloggin"),dl=p(" \u{1F601} \u{1F913} \u{1F44D}"),Et=n(),de=a("p"),Le=a("em"),El=p("ProfMancusoa"),this.h()},l(e){f=s(e,"P",{});var l=r(f);_=u(l,"In questo post, \xE8 mostrato in dettaglio, come creare e pubblicare un post sul blog ProfMancusoa e come fare il preview prima della pubblicazione."),l.forEach(t),d=c(e),E=s(e,"H2",{});var Bl=r(E);m=u(Bl,"1 Cloniamo il repository del blog"),Bl.forEach(t),b=c(e),k=s(e,"P",{});var Pl=r(k);Mt=u(Pl,"Per recuperare la URL del blog vai sul repository ufficiale "),O=s(Pl,"A",{href:!0,rel:!0});var Nl=r(O);It=u(Nl,"ProfMancusoa"),Nl.forEach(t),Pl.forEach(t),Ge=c(e),D=s(e,"P",{});var Ul=r(D);H=s(Ul,"IMG",{src:!0,alt:!0}),Ul.forEach(t),Re=c(e),T=s(e,"P",{});var Vl=r(T);qt=u(Vl,"Come mostrato in figura al punto 3, copia la URL del repository."),Vl.forEach(t),Ae=c(e),B=s(e,"P",{});var Ql=r(B);zt=u(Ql,"Ora esegui i comandi,in una shell di Linux, come mostrato sotto:"),Ql.forEach(t),De=c(e),Ml(S.$$.fragment,e),He=c(e),N=s(e,"P",{});var gl=r(N);Ot=u(gl,"Se tutto \xE8 andato a buon fine vedremo, si aprir\xE0 automaticamente nel browser la pagina locale del blog."),gl.forEach(t),Te=c(e),U=s(e,"P",{});var jl=r(U);V=s(jl,"IMG",{src:!0,alt:!0}),jl.forEach(t),Be=c(e),Q=s(e,"H2",{});var Fl=r(Q);St=u(Fl,"2 Creiamo il file del post"),Fl.forEach(t),Ne=c(e),C=s(e,"P",{});var Ee=r(C);Lt=u(Ee,"In Visual Studio Code, nella directory "),Pe=s(Ee,"CODE",{});var Jl=r(Pe);xt=u(Jl,"src/routes/blog"),Jl.forEach(t),Gt=u(Ee," creau un file .md con nome uguale allo slug del titolo ( es: "),ke=s(Ee,"STRONG",{});var Wl=r(ke);we=s(Wl,"EM",{});var Zl=r(we);Rt=u(Zl,"il-mio-post.md"),Zl.forEach(t),Wl.forEach(t),At=u(Ee," )"),Ee.forEach(t),Ue=c(e),g=s(e,"P",{});var Kl=r(g);j=s(Kl,"IMG",{src:!0,alt:!0}),Kl.forEach(t),Ve=c(e),$=s(e,"P",{});var kt=r($);Dt=u(kt,"In alternativa potete invocare lo script "),Ce=s(kt,"CODE",{});var Xl=r(Ce);Ht=u(Xl,"article_new"),Xl.forEach(t),Tt=u(kt," nel seguente modo:"),kt.forEach(t),Qe=c(e),L=s(e,"PRE",{class:!0});var Ho=r(L);Ho.forEach(t),ge=c(e),F=s(e,"P",{});var Yl=r(F);Bt=u(Yl,"dove \u201CIl mio articolo di prova\u201D \xE8 il titolo del vostro articolo."),Yl.forEach(t),je=c(e),J=s(e,"P",{});var hl=r(J);Nt=u(hl,"Lo script generer\xE0 automaticamente tutte le risorse necessarie per scrivere l\u2019articolo."),hl.forEach(t),Fe=c(e),W=s(e,"H2",{});var eo=r(W);Ut=u(eo,"3 Editiamo l\u2019articolo"),eo.forEach(t),Je=c(e),Z=s(e,"P",{});var to=r(Z);Vt=u(to,"Ora scrivi il tuo articolo nel file appena creato, facendo attenzione a compilare correttamente il frontmatter"),to.forEach(t),We=c(e),x=s(e,"PRE",{class:!0});var To=r(x);To.forEach(t),Ze=c(e),K=s(e,"H2",{});var lo=r(K);Qt=u(lo,"4 Aggiungiamo l\u2019immagine cover dell\u2019articolo"),lo.forEach(t),Ke=c(e),y=s(e,"P",{});var xe=r(y);gt=u(xe,"Crea una directory "),ye=s(xe,"CODE",{});var oo=r(ye);jt=u(oo,"il-mio-post"),oo.forEach(t),Ft=u(xe," dentro il seguente percorso "),$e=s(xe,"CODE",{});var io=r($e);Jt=u(io,"static/img/posts"),io.forEach(t),xe.forEach(t),Xe=c(e),M=s(e,"P",{});var wt=r(M);Wt=u(wt,"All\u2019interno della directory appena creata, inseirsci il file "),Me=s(wt,"EM",{});var ao=r(Me);Zt=u(ao,"cover.webp"),ao.forEach(t),Kt=u(wt," (il nome \xE8 quello specificato nel frontmatter)"),wt.forEach(t),Ye=c(e),X=s(e,"P",{});var so=r(X);Y=s(so,"IMG",{src:!0,alt:!0}),so.forEach(t),he=c(e),h=s(e,"H2",{});var ro=r(h);Xt=u(ro,"5 Verica del post in locale"),ro.forEach(t),et=c(e),ee=s(e,"P",{});var po=r(ee);Yt=u(po,"Se tutto \xE8 andato bene, ora nel browser vedrai comparire il tuo nuovo articolo. Facile no?!!!\u270C"),po.forEach(t),tt=c(e),te=s(e,"P",{});var uo=r(te);le=s(uo,"IMG",{src:!0,alt:!0}),uo.forEach(t),lt=c(e),I=s(e,"P",{});var Ct=r(I);ht=u(Ct,"Se clicchisull\u2019immagine del post o sul pulsante "),Ie=s(Ct,"STRONG",{});var no=r(Ie);el=u(no,"Leggi"),no.forEach(t),tl=u(Ct," vedrai il tuo articolo completo. Cos\xEC potrai verificare che tutto sia ok e che appaia come lo avevi pensato."),Ct.forEach(t),ot=c(e),oe=s(e,"P",{});var co=r(oe);ie=s(co,"IMG",{src:!0,alt:!0}),co.forEach(t),it=c(e),ae=s(e,"P",{});var fo=r(ae);ll=u(fo,"Se tutto \xE8 ok e non devi ulteriormente modificare il tuo articolo, puoi passare ora alla richiesta di pubblicazione."),fo.forEach(t),at=c(e),se=s(e,"H2",{});var mo=r(se);ol=u(mo,"6 Pubblichiamo il post"),mo.forEach(t),st=c(e),q=s(e,"P",{});var yt=r(q);il=u(yt,"Per pubblicare il post \xE8 necessario fare il push del branch su github e successivamente creare una "),qe=s(yt,"STRONG",{});var vo=r(qe);al=u(vo,"Pull Request (PR)"),vo.forEach(t),sl=u(yt,"."),yt.forEach(t),rt=c(e),Ml(G.$$.fragment,e),pt=c(e),R=s(e,"P",{});var kl=r(R);rl=u(kl,"Una volta fatto il push del branch, vai sulla pagina del repository e premi il pulsante "),ze=s(kl,"CODE",{});var _o=r(ze);pl=u(_o,"Compare & pull request"),_o.forEach(t),kl.forEach(t),ut=c(e),re=s(e,"P",{});var bo=r(re);pe=s(bo,"IMG",{src:!0,alt:!0}),bo.forEach(t),nt=c(e),A=s(e,"P",{});var wl=r(A);ul=u(wl,"Aggiungi un commento esplicativo e premi il pulsante "),Oe=s(wl,"CODE",{});var Eo=r(Oe);nl=u(Eo,"Create pull request"),Eo.forEach(t),wl.forEach(t),ct=c(e),ue=s(e,"P",{});var Po=r(ue);ne=s(Po,"IMG",{src:!0,alt:!0}),Po.forEach(t),ft=c(e),ce=s(e,"P",{});var ko=r(ce);cl=u(ko,"Ottimo, come vedi una nuova pull request \xE8 stata creata. \u{1F44C}"),ko.forEach(t),mt=c(e),fe=s(e,"P",{});var wo=r(fe);fl=u(wo,"Ora sar\xE0 possibile per l\u2019amministratore verificare se tutto \xE8 corretto, ed in caso affermativo pubblicare il tuo articolo su blog in produzione."),wo.forEach(t),vt=c(e),me=s(e,"P",{});var Co=r(me);ve=s(Co,"IMG",{src:!0,alt:!0}),Co.forEach(t),_t=c(e),_e=s(e,"P",{});var yo=r(_e);ml=u(yo,"Come abbiamo visto in questo post, per creare e pubblicare un nuovo articolo usiamo un metodo da sviluppatore ed usiamo git e github come in un ambiente professionale di sviluppo software."),yo.forEach(t),bt=c(e),be=s(e,"P",{});var $o=r(be);vl=u($o,"Questo ci fornisce molta flessibilit\xE0 e dopo tutto ci permette di iniziare ad imparare unos trumento utilissimo nel mondo del lavoro per gli informatici."),$o.forEach(t),dt=c(e),z=s(e,"P",{});var $t=r(z);_l=u($t,"Non mi resta che augurarti "),Se=s($t,"STRONG",{});var Mo=r(Se);bl=u(Mo,"Buon Bloggin"),Mo.forEach(t),dl=u($t," \u{1F601} \u{1F913} \u{1F44D}"),$t.forEach(t),Et=c(e),de=s(e,"P",{});var Io=r(de);Le=s(Io,"EM",{});var qo=r(Le);El=u(qo,"ProfMancusoa"),qo.forEach(t),Io.forEach(t),this.h()},h(){v(O,"href","https://github.com/profmancusoa/profmancusoa.github.io"),v(O,"rel","nofollow"),w(H.src,Sl="/img/posts/come-pubblicare-un-post-sul-blog/pos_01.webp")||v(H,"src",Sl),v(H,"alt","pos_01"),w(V.src,Ll="/img/posts/come-pubblicare-un-post-sul-blog/pos_03.webp")||v(V,"src",Ll),v(V,"alt","pos_03"),w(j.src,xl="/img/posts/come-pubblicare-un-post-sul-blog/pos_05.webp")||v(j,"src",xl),v(j,"alt","pos_05"),v(L,"class","language-bash"),v(x,"class","language-md"),w(Y.src,Gl="/img/posts/come-pubblicare-un-post-sul-blog/pos_06.webp")||v(Y,"src",Gl),v(Y,"alt","pos_06"),w(le.src,Rl="/img/posts/come-pubblicare-un-post-sul-blog/pos_07.webp")||v(le,"src",Rl),v(le,"alt","pos_07"),w(ie.src,Al="/img/posts/come-pubblicare-un-post-sul-blog/pos_08.webp")||v(ie,"src",Al),v(ie,"alt","pos_08"),w(pe.src,Dl="/img/posts/come-pubblicare-un-post-sul-blog/pos_09.webp")||v(pe,"src",Dl),v(pe,"alt","pos_09"),w(ne.src,Hl="/img/posts/come-pubblicare-un-post-sul-blog/pos_10.webp")||v(ne,"src",Hl),v(ne,"alt","pos_10"),w(ve.src,Tl="/img/posts/come-pubblicare-un-post-sul-blog/pos_11.webp")||v(ve,"src",Tl),v(ve,"alt","pos_11")},m(e,l){o(e,f,l),i(f,_),o(e,d,l),o(e,E,l),i(E,m),o(e,b,l),o(e,k,l),i(k,Mt),i(k,O),i(O,It),o(e,Ge,l),o(e,D,l),i(D,H),o(e,Re,l),o(e,T,l),i(T,qt),o(e,Ae,l),o(e,B,l),i(B,zt),o(e,De,l),Il(S,e,l),o(e,He,l),o(e,N,l),i(N,Ot),o(e,Te,l),o(e,U,l),i(U,V),o(e,Be,l),o(e,Q,l),i(Q,St),o(e,Ne,l),o(e,C,l),i(C,Lt),i(C,Pe),i(Pe,xt),i(C,Gt),i(C,ke),i(ke,we),i(we,Rt),i(C,At),o(e,Ue,l),o(e,g,l),i(g,j),o(e,Ve,l),o(e,$,l),i($,Dt),i($,Ce),i(Ce,Ht),i($,Tt),o(e,Qe,l),o(e,L,l),L.innerHTML=Ao,o(e,ge,l),o(e,F,l),i(F,Bt),o(e,je,l),o(e,J,l),i(J,Nt),o(e,Fe,l),o(e,W,l),i(W,Ut),o(e,Je,l),o(e,Z,l),i(Z,Vt),o(e,We,l),o(e,x,l),x.innerHTML=Do,o(e,Ze,l),o(e,K,l),i(K,Qt),o(e,Ke,l),o(e,y,l),i(y,gt),i(y,ye),i(ye,jt),i(y,Ft),i(y,$e),i($e,Jt),o(e,Xe,l),o(e,M,l),i(M,Wt),i(M,Me),i(Me,Zt),i(M,Kt),o(e,Ye,l),o(e,X,l),i(X,Y),o(e,he,l),o(e,h,l),i(h,Xt),o(e,et,l),o(e,ee,l),i(ee,Yt),o(e,tt,l),o(e,te,l),i(te,le),o(e,lt,l),o(e,I,l),i(I,ht),i(I,Ie),i(Ie,el),i(I,tl),o(e,ot,l),o(e,oe,l),i(oe,ie),o(e,it,l),o(e,ae,l),i(ae,ll),o(e,at,l),o(e,se,l),i(se,ol),o(e,st,l),o(e,q,l),i(q,il),i(q,qe),i(qe,al),i(q,sl),o(e,rt,l),Il(G,e,l),o(e,pt,l),o(e,R,l),i(R,rl),i(R,ze),i(ze,pl),o(e,ut,l),o(e,re,l),i(re,pe),o(e,nt,l),o(e,A,l),i(A,ul),i(A,Oe),i(Oe,nl),o(e,ct,l),o(e,ue,l),i(ue,ne),o(e,ft,l),o(e,ce,l),i(ce,cl),o(e,mt,l),o(e,fe,l),i(fe,fl),o(e,vt,l),o(e,me,l),i(me,ve),o(e,_t,l),o(e,_e,l),i(_e,ml),o(e,bt,l),o(e,be,l),i(be,vl),o(e,dt,l),o(e,z,l),i(z,_l),i(z,Se),i(Se,bl),i(z,dl),o(e,Et,l),o(e,de,l),i(de,Le),i(Le,El),Pt=!0},p:Cl,i(e){Pt||(ql(S.$$.fragment,e),ql(G.$$.fragment,e),Pt=!0)},o(e){zl(S.$$.fragment,e),zl(G.$$.fragment,e),Pt=!1},d(e){e&&t(f),e&&t(d),e&&t(E),e&&t(b),e&&t(k),e&&t(Ge),e&&t(D),e&&t(Re),e&&t(T),e&&t(Ae),e&&t(B),e&&t(De),Ol(S,e),e&&t(He),e&&t(N),e&&t(Te),e&&t(U),e&&t(Be),e&&t(Q),e&&t(Ne),e&&t(C),e&&t(Ue),e&&t(g),e&&t(Ve),e&&t($),e&&t(Qe),e&&t(L),e&&t(ge),e&&t(F),e&&t(je),e&&t(J),e&&t(Fe),e&&t(W),e&&t(Je),e&&t(Z),e&&t(We),e&&t(x),e&&t(Ze),e&&t(K),e&&t(Ke),e&&t(y),e&&t(Xe),e&&t(M),e&&t(Ye),e&&t(X),e&&t(he),e&&t(h),e&&t(et),e&&t(ee),e&&t(tt),e&&t(te),e&&t(lt),e&&t(I),e&&t(ot),e&&t(oe),e&&t(it),e&&t(ae),e&&t(at),e&&t(se),e&&t(st),e&&t(q),e&&t(rt),Ol(G,e),e&&t(pt),e&&t(R),e&&t(ut),e&&t(re),e&&t(nt),e&&t(A),e&&t(ct),e&&t(ue),e&&t(ft),e&&t(ce),e&&t(mt),e&&t(fe),e&&t(vt),e&&t(me),e&&t(_t),e&&t(_e),e&&t(bt),e&&t(be),e&&t(dt),e&&t(z),e&&t(Et),e&&t(de)}}}function go(P){let f,_;const d=[P[0],Lo];let E={$$slots:{default:[Qo]},$$scope:{ctx:P}};for(let m=0;m<d.length;m+=1)E=yl(E,d[m]);return f=new No({props:E}),{c(){$l(f.$$.fragment)},l(m){Ml(f.$$.fragment,m)},m(m,b){Il(f,m,b),_=!0},p(m,[b]){const k=b&1?Bo(d,[b&1&&zo(m[0]),b&0&&zo(Lo)]):{};b&2&&(k.$$scope={dirty:b,ctx:m}),f.$set(k)},i(m){_||(ql(f.$$.fragment,m),_=!0)},o(m){zl(f.$$.fragment,m),_=!1},d(m){Ol(f,m)}}}const Lo={id:"2022-08-21-1",titolo:"Come pubblicare un post sul blog",featured:!1,autore:"ProfMancusoa",data:"2022-08-21T00:00:00.000Z",cover:"cover.webp",introduzione:"Questo post descrive dettagliatamente come creare e pubblicare un post sul blog ProfMancusoa",pubblicato:!0,sezione:"Blog",categorie:["Blog","git","GitHub"]};function jo(P,f,_){return P.$$set=d=>{_(0,f=yl(yl({},f),Oo(d)))},f=Oo(f),[f]}class Ko extends xo{constructor(f){super(),Go(this,f,jo,go,Ro,{})}}export{Ko as default,Lo as metadata};