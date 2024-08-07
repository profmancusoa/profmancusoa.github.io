import{S as Yt,i as ht,s as gt,C as xl,w as eo,x as io,y as ao,z as lo,A as Dt,f as to,t as oo,B as so,P as Tt,l as t,r as u,a as r,m as o,n,u as c,h as i,c as p,p as m,F as d,b as l,G as s,E as no}from"../../chunks/index-c6be98ca.js";import{P as ro}from"../../chunks/_post-b2f5889b.js";import"../../chunks/helpers-e147ed77.js";import"../../chunks/Categoria.svelte_svelte_type_style_lang-d76a398c.js";function po(W){let f,z,w,E,v,b,x,ba,Ye,R,da,he,B,_a,ge,D,za,ei,T,wa,ii,F,Ea,ai,$,Pa,li,C,$t=`<code class="language-bash"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> python3-grpc-tools python3-grpcio gir1.2-xapp-1.0 <span class="token punctuation"></span>
gist libxapp1 python3-setproctitle python3-xapp xapps-common debhelper dh-python <span class="token punctuation"></span>
gnome-pkg-tools meson gobject-introspection appstream python3-grpc-tools <span class="token function">git</span></code>`,ti,U,ka,oi,V,xa,si,S,Ut=`<code class="language-bash"><span class="token comment"># Clone del repository</span>
<span class="token function">git</span> clone https://github.com/linuxmint/warpinator.git

<span class="token comment"># Entra nella directory del progetto</span>
<span class="token builtin class-name">cd</span> warpinator

<span class="token comment"># Fai il checkout dell'ultima versione</span>
<span class="token function">git</span> checkout <span class="token number">1.6</span>.4</code>`,ni,j,Ia,ri,L,La,Be,Ma,Ca,pi,q,Vt=`<code class="language-bash"><span class="token comment"># Build del pacchetto .deb:</span>
dpkg-buildpackage -b --no-sign</code>`,ui,N,Sa,ci,Z,qa,mi,y,jt=`<code class="language-bash"><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>

<span class="token function">sudo</span> dpkg -i warpinator_1.6.4_all.deb

<span class="token punctuation">(</span>Lettura del database<span class="token punctuation">..</span>. <span class="token number">384604</span> <span class="token function">file</span> e directory attualmente installati.<span class="token punctuation">)</span>
Preparativi per estrarre warpinator_1.6.4_all.deb<span class="token punctuation">..</span>.
Estrazione di warpinator <span class="token punctuation">(</span><span class="token number">1.6</span>.4<span class="token punctuation">)</span> <span class="token function">su</span> <span class="token punctuation">(</span><span class="token number">1.6</span>.4<span class="token punctuation">)</span><span class="token punctuation">..</span>.
Configurazione di warpinator <span class="token punctuation">(</span><span class="token number">1.6</span>.4<span class="token punctuation">)</span><span class="token punctuation">..</span>.
Elaborazione dei trigger per mailcap <span class="token punctuation">(</span><span class="token number">3.70</span>+nmu1ubuntu1<span class="token punctuation">)</span><span class="token punctuation">..</span>.
Elaborazione dei trigger per desktop-file-utils <span class="token punctuation">(</span><span class="token number">0.26</span>-1ubuntu3<span class="token punctuation">)</span><span class="token punctuation">..</span>.
Elaborazione dei trigger per gnome-menus <span class="token punctuation">(</span><span class="token number">3.36</span>.0-1ubuntu3<span class="token punctuation">)</span><span class="token punctuation">..</span>.
Elaborazione dei trigger per libglib2.0-0:i386 <span class="token punctuation">(</span><span class="token number">2.72</span>.4-0ubuntu1<span class="token punctuation">)</span><span class="token punctuation">..</span>.
Elaborazione dei trigger per libglib2.0-0:amd64 <span class="token punctuation">(</span><span class="token number">2.72</span>.4-0ubuntu1<span class="token punctuation">)</span><span class="token punctuation">..</span>.
Elaborazione dei trigger per hicolor-icon-theme <span class="token punctuation">(</span><span class="token number">0.17</span>-2<span class="token punctuation">)</span><span class="token punctuation">..</span>.</code>`,fi,J,ya,vi,K,Aa,bi,A,Ga,De,Ha,di,Q,X,Il,_i,zi,wi,_,Oa,Te,Wa,Ra,Fe,Ba,Da,$e,Ta,Ei,M,Fa,Ue,$a,Ua,Pi,Y,h,Ll,ki,xi,Ii,I,Va,Ve,ja,Na,je,Za,Li,g,Ja,Mi,ee,ie,Ml,Ci,Si,qi,ae,Ka,yi,le,Qa,Ai,G,Xa,Ne,Ya,Gi,te,oe,Cl,Hi,se,ha,Oi,ne,ga,Wi,re,pe,Sl,Ri,P,el,Ze,il,al,Je,ll,tl,Bi,ue,ce,ql,Di,me,fe,yl,Ti,ve,ol,Fi,k,sl,Ke,nl,rl,Qe,pl,ul,$i,be,cl,Ui,H,Nt='<code class="language-bash"><span class="token function">sudo</span> iptables -F</code>',Vi,de,ml,ji,_e,fl,Ni,ze,we,Al,Zi,Ji,Ki,Ee,Pe,Gl,Qi,Xi,Yi,ke,vl,hi,xe,Ie,Hl,gi,ea,ia,Le,bl,aa,Me,Ce,Ol,la,ta,oa,Se,dl,sa,qe,ye,Wl,na,ra,pa,Ae,_l,ua,Ge,zl,ca,He,wl,ma,Oe,El;return{c(){f=t("h1"),z=u("Warpinator"),w=r(),E=t("p"),v=u(`Warpinator \xE8 uno strumento open source gratuito per l\u2019invio e la ricezione di file tra computer che si trovano sulla stessa rete locale.
Tutto quello che devi fare \xE8 installare Warpinator sul tuo computer, scegliere un codice di gruppo ed iniziare a condividere file con semplicit\xE0 e sicurezza, senza spreco di banda e senza dover usare servizi di terze parti di dubbia provenienza.`),b=r(),x=t("p"),ba=u("\xC8 dotato di un\u2019interfaccia utente semplice e tematica con un menu facile da configurare e funziona senza la necessit\xE0 di server o configurazioni speciali. Warpinator \xE8 un\u2019app ufficiale per la condivisione di file sviluppata da Linux Mint, ma pu\xF2 essere utilizzato senza problemi su altre distribuzioni Linux."),Ye=r(),R=t("p"),da=u("In questo post vediamo come installarlo ed utilizzarlo su sistemi basati su Debian quali Ubuntu, PopOS e altri."),he=r(),B=t("h2"),_a=u("Installazione"),ge=r(),D=t("p"),za=u(`Su Ubuntu il pacchetto di warpinator non \xE8 disponibile, ma non disperate, vi faccio vedere come compilare il pacchetto .deb e poi installarlo.
Sembra difficle, ma \xE8 pi\xF9 semplice di quel che sembra dato che gli sviluppatori di warpinator hanno fatto un ottimo lavoro.`),ei=r(),T=t("h3"),wa=u("Preparazione dell\u2019ambiente"),ii=r(),F=t("p"),Ea=u("Iniziamo a preparare l\u2019ambiente per la compilazione e il building di warpinator"),ai=r(),$=t("p"),Pa=u("Apri una shell ed esegui il seguente comando per agiungere tutti i pacchetti necessari alle fasi successive"),li=r(),C=t("pre"),ti=r(),U=t("h3"),ka=u("Cloniamo il repo di warpinator"),oi=r(),V=t("p"),xa=u("Per clonare il repo di warpinator basta eseguire i seguenti comandi"),si=r(),S=t("pre"),ni=r(),j=t("h3"),Ia=u("Build del pacchetto"),ri=r(),L=t("p"),La=u("Ora facciamo il build di un pacchetto debian "),Be=t("code"),Ma=u(".deb"),Ca=u(", eseguendo il seguente comando"),pi=r(),q=t("pre"),ui=r(),N=t("h3"),Sa=u("Installazione di warpinator"),ci=r(),Z=t("p"),qa=u("Se tutto \xE8 andato bene senza problemi, possiamo finalmente installare warpinator in questo modo"),mi=r(),y=t("pre"),fi=r(),J=t("h3"),ya=u("Configurazione di warpinator"),vi=r(),K=t("p"),Aa=u("Ora che abbiamo installato warpinator sul nostro sistema Linux, lanciamolo e configuriamo alcuni semplici parametri"),bi=r(),A=t("p"),Ga=u("Dal men\xF9 in alto a sinistra, seleziona "),De=t("em"),Ha=u("Preferenze"),di=r(),Q=t("p"),X=t("img"),_i=r(),zi=t("br"),wi=r(),_=t("p"),Oa=u("Dalla tab "),Te=t("em"),Wa=u("Generale"),Ra=u(", nella sezione "),Fe=t("em"),Ba=u("Trasferimenti File"),Da=u(", imposta la directory di scambio file alla voce "),$e=t("em"),Ta=u("Posizione per file ricevuti"),Ei=r(),M=t("p"),Fa=u("Io l\u2019ho impostato a "),Ue=t("em"),$a=u("/home/antonio/Downloads/warpinator"),Ua=u(", voi impostate la directory di dove verranno scaricati i file in modo adeguato al vostro ambiente di lavoro"),Pi=r(),Y=t("p"),h=t("img"),ki=r(),xi=t("br"),Ii=r(),I=t("p"),Va=u("Dalla tab "),Ve=t("em"),ja=u("Conenssion"),Na=u(" ora imposta un codice di gruppo, per evitare accessi non autorizzati, e premi il pulsante "),je=t("em"),Za=u("Imposta codice"),Li=r(),g=t("p"),Ja=u("Scegli anche quale interfaccia di rete utilizzare per lo scambio. Io ho impostato l\u2019unica interfaccia WiFi disponibile sul mio computer."),Mi=r(),ee=t("p"),ie=t("img"),Ci=r(),Si=t("br"),qi=r(),ae=t("p"),Ka=u("Fatto ci\xF2 abbiamo terminato con la configurazione di warpinator, e possiamo chiudere la finestra di configurazione"),yi=r(),le=t("h3"),Qa=u("Installazione sullo smartphone"),Ai=r(),G=t("p"),Xa=u("Warpinator \xE8 disponibile anche per gli smartphone Android e iOS. Per installare l\u2019app per il tuo telefono vai sullo store di riferimento e scegli l\u2019applicazione "),Ne=t("em"),Ya=u("Warpinator"),Gi=r(),te=t("p"),oe=t("img"),Hi=r(),se=t("h3"),ha=u("Configuriamo warpinator sullo smartphone"),Oi=r(),ne=t("p"),ga=u("Apri l\u2019applicazione appena installata dallo store e fai tap sui 3 puntini in alto a destra per accedere alla configurazione dell\u2019applicazione"),Wi=r(),re=t("p"),pe=t("img"),Ri=r(),P=t("p"),el=u("Ora seleziona "),Ze=t("em"),il=u("Impostazioni"),al=u(" ed configura lo stesso "),Je=t("em"),ll=u("condice di gruppo"),tl=u(" che hai impostato su Linux"),Bi=r(),ue=t("p"),ce=t("img"),Di=r(),me=t("p"),fe=t("img"),Ti=r(),ve=t("h3"),ol=u("Scambiamo file tra Linux e lo smartphone"),Fi=r(),k=t("p"),sl=u("Cosa molto importante \xE8 assicurarsi che il firewall del proprio PC non blocchi le porte "),Ke=t("strong"),nl=u("42000"),rl=u(" e "),Qe=t("strong"),pl=u("42001"),ul=u(` utilizzate da warpinator.
In caso che queste porte siano filtrare non sar\xE0 possibile connettere lo smartphone con Linux`),$i=r(),be=t("p"),cl=u("A titolo puramente di test, su linux eseguite il seguente comando in modo da disabilitare il firewall"),Ui=r(),H=t("pre"),Vi=r(),de=t("p"),ml=u("Se con questo comando la connession di warpinator funziona, dovrete configurare il firewall in modo opportuno."),ji=r(),_e=t("p"),fl=u("A questo punto sia sul PC che sullo smartphone \xE8 possibile vedere i device trovati nella rete e appartenenti allo stesso gruppo"),Ni=r(),ze=t("p"),we=t("img"),Zi=r(),Ji=t("br"),Ki=r(),Ee=t("p"),Pe=t("img"),Qi=r(),Xi=t("br"),Yi=r(),ke=t("p"),vl=u("Ora scegliamo se condividere un\u2019intera directory o un singolo file"),hi=r(),xe=t("p"),Ie=t("img"),gi=r(),ea=t("br"),ia=r(),Le=t("p"),bl=u("Una volta selezionato il file, il trasferimento inizia immediatamente e sul PC viene richiesto la conferma di accettazione del file"),aa=r(),Me=t("p"),Ce=t("img"),la=r(),ta=t("br"),oa=r(),Se=t("p"),dl=u("Se accettiamo la richiesta di invio del file, dopo pochi istanti (dipende dalle dimensioni del file), troveremo il file nella directory che avevamo impostato durante la configurazione di warpinator su Linux"),sa=r(),qe=t("p"),ye=t("img"),na=r(),ra=t("br"),pa=r(),Ae=t("h3"),_l=u("Conclusioni"),ua=r(),Ge=t("p"),zl=u(`Warpinator \xE8 un tool fantastico, open source e sicuro che ci permette di scambiare file tra lo smartphone e il nostro PC Linux via rete locale al riparo da occhi indiscreti.
Abbiamo visto come installare warpinator sia su Linux che su smartphone (Android) e come configurare correttamente le applicazioni.
Infine abbiamo visto anche come scambiare un file da Android a Linux`),ca=r(),He=t("p"),wl=u("Vi invito ad utilizzare questo tool in modo da evitare metodi antichi come inviare le foto via email etc."),ma=r(),Oe=t("p"),El=u("Lasciate i vostri commenti qui sotto e se vi \xE8 piaciuto il post e lo ritenete utile potete anche mettere un like all\u2019articolo e condividerlo con la vostra rete social."),this.h()},l(e){f=o(e,"H1",{});var a=n(f);z=c(a,"Warpinator"),a.forEach(i),w=p(e),E=o(e,"P",{});var Rl=n(E);v=c(Rl,`Warpinator \xE8 uno strumento open source gratuito per l\u2019invio e la ricezione di file tra computer che si trovano sulla stessa rete locale.
Tutto quello che devi fare \xE8 installare Warpinator sul tuo computer, scegliere un codice di gruppo ed iniziare a condividere file con semplicit\xE0 e sicurezza, senza spreco di banda e senza dover usare servizi di terze parti di dubbia provenienza.`),Rl.forEach(i),b=p(e),x=o(e,"P",{});var Bl=n(x);ba=c(Bl,"\xC8 dotato di un\u2019interfaccia utente semplice e tematica con un menu facile da configurare e funziona senza la necessit\xE0 di server o configurazioni speciali. Warpinator \xE8 un\u2019app ufficiale per la condivisione di file sviluppata da Linux Mint, ma pu\xF2 essere utilizzato senza problemi su altre distribuzioni Linux."),Bl.forEach(i),Ye=p(e),R=o(e,"P",{});var Dl=n(R);da=c(Dl,"In questo post vediamo come installarlo ed utilizzarlo su sistemi basati su Debian quali Ubuntu, PopOS e altri."),Dl.forEach(i),he=p(e),B=o(e,"H2",{});var Tl=n(B);_a=c(Tl,"Installazione"),Tl.forEach(i),ge=p(e),D=o(e,"P",{});var Fl=n(D);za=c(Fl,`Su Ubuntu il pacchetto di warpinator non \xE8 disponibile, ma non disperate, vi faccio vedere come compilare il pacchetto .deb e poi installarlo.
Sembra difficle, ma \xE8 pi\xF9 semplice di quel che sembra dato che gli sviluppatori di warpinator hanno fatto un ottimo lavoro.`),Fl.forEach(i),ei=p(e),T=o(e,"H3",{});var $l=n(T);wa=c($l,"Preparazione dell\u2019ambiente"),$l.forEach(i),ii=p(e),F=o(e,"P",{});var Ul=n(F);Ea=c(Ul,"Iniziamo a preparare l\u2019ambiente per la compilazione e il building di warpinator"),Ul.forEach(i),ai=p(e),$=o(e,"P",{});var Vl=n($);Pa=c(Vl,"Apri una shell ed esegui il seguente comando per agiungere tutti i pacchetti necessari alle fasi successive"),Vl.forEach(i),li=p(e),C=o(e,"PRE",{class:!0});var Zt=n(C);Zt.forEach(i),ti=p(e),U=o(e,"H3",{});var jl=n(U);ka=c(jl,"Cloniamo il repo di warpinator"),jl.forEach(i),oi=p(e),V=o(e,"P",{});var Nl=n(V);xa=c(Nl,"Per clonare il repo di warpinator basta eseguire i seguenti comandi"),Nl.forEach(i),si=p(e),S=o(e,"PRE",{class:!0});var Jt=n(S);Jt.forEach(i),ni=p(e),j=o(e,"H3",{});var Zl=n(j);Ia=c(Zl,"Build del pacchetto"),Zl.forEach(i),ri=p(e),L=o(e,"P",{});var fa=n(L);La=c(fa,"Ora facciamo il build di un pacchetto debian "),Be=o(fa,"CODE",{});var Jl=n(Be);Ma=c(Jl,".deb"),Jl.forEach(i),Ca=c(fa,", eseguendo il seguente comando"),fa.forEach(i),pi=p(e),q=o(e,"PRE",{class:!0});var Kt=n(q);Kt.forEach(i),ui=p(e),N=o(e,"H3",{});var Kl=n(N);Sa=c(Kl,"Installazione di warpinator"),Kl.forEach(i),ci=p(e),Z=o(e,"P",{});var Ql=n(Z);qa=c(Ql,"Se tutto \xE8 andato bene senza problemi, possiamo finalmente installare warpinator in questo modo"),Ql.forEach(i),mi=p(e),y=o(e,"PRE",{class:!0});var Qt=n(y);Qt.forEach(i),fi=p(e),J=o(e,"H3",{});var Xl=n(J);ya=c(Xl,"Configurazione di warpinator"),Xl.forEach(i),vi=p(e),K=o(e,"P",{});var Yl=n(K);Aa=c(Yl,"Ora che abbiamo installato warpinator sul nostro sistema Linux, lanciamolo e configuriamo alcuni semplici parametri"),Yl.forEach(i),bi=p(e),A=o(e,"P",{});var Pl=n(A);Ga=c(Pl,"Dal men\xF9 in alto a sinistra, seleziona "),De=o(Pl,"EM",{});var hl=n(De);Ha=c(hl,"Preferenze"),hl.forEach(i),Pl.forEach(i),di=p(e),Q=o(e,"P",{});var gl=n(Q);X=o(gl,"IMG",{src:!0,alt:!0}),gl.forEach(i),_i=p(e),zi=o(e,"BR",{}),wi=p(e),_=o(e,"P",{});var O=n(_);Oa=c(O,"Dalla tab "),Te=o(O,"EM",{});var et=n(Te);Wa=c(et,"Generale"),et.forEach(i),Ra=c(O,", nella sezione "),Fe=o(O,"EM",{});var it=n(Fe);Ba=c(it,"Trasferimenti File"),it.forEach(i),Da=c(O,", imposta la directory di scambio file alla voce "),$e=o(O,"EM",{});var at=n($e);Ta=c(at,"Posizione per file ricevuti"),at.forEach(i),O.forEach(i),Ei=p(e),M=o(e,"P",{});var va=n(M);Fa=c(va,"Io l\u2019ho impostato a "),Ue=o(va,"EM",{});var lt=n(Ue);$a=c(lt,"/home/antonio/Downloads/warpinator"),lt.forEach(i),Ua=c(va,", voi impostate la directory di dove verranno scaricati i file in modo adeguato al vostro ambiente di lavoro"),va.forEach(i),Pi=p(e),Y=o(e,"P",{});var tt=n(Y);h=o(tt,"IMG",{src:!0,alt:!0}),tt.forEach(i),ki=p(e),xi=o(e,"BR",{}),Ii=p(e),I=o(e,"P",{});var Xe=n(I);Va=c(Xe,"Dalla tab "),Ve=o(Xe,"EM",{});var ot=n(Ve);ja=c(ot,"Conenssion"),ot.forEach(i),Na=c(Xe," ora imposta un codice di gruppo, per evitare accessi non autorizzati, e premi il pulsante "),je=o(Xe,"EM",{});var st=n(je);Za=c(st,"Imposta codice"),st.forEach(i),Xe.forEach(i),Li=p(e),g=o(e,"P",{});var nt=n(g);Ja=c(nt,"Scegli anche quale interfaccia di rete utilizzare per lo scambio. Io ho impostato l\u2019unica interfaccia WiFi disponibile sul mio computer."),nt.forEach(i),Mi=p(e),ee=o(e,"P",{});var rt=n(ee);ie=o(rt,"IMG",{src:!0,alt:!0}),rt.forEach(i),Ci=p(e),Si=o(e,"BR",{}),qi=p(e),ae=o(e,"P",{});var pt=n(ae);Ka=c(pt,"Fatto ci\xF2 abbiamo terminato con la configurazione di warpinator, e possiamo chiudere la finestra di configurazione"),pt.forEach(i),yi=p(e),le=o(e,"H3",{});var ut=n(le);Qa=c(ut,"Installazione sullo smartphone"),ut.forEach(i),Ai=p(e),G=o(e,"P",{});var kl=n(G);Xa=c(kl,"Warpinator \xE8 disponibile anche per gli smartphone Android e iOS. Per installare l\u2019app per il tuo telefono vai sullo store di riferimento e scegli l\u2019applicazione "),Ne=o(kl,"EM",{});var ct=n(Ne);Ya=c(ct,"Warpinator"),ct.forEach(i),kl.forEach(i),Gi=p(e),te=o(e,"P",{});var mt=n(te);oe=o(mt,"IMG",{src:!0,alt:!0}),mt.forEach(i),Hi=p(e),se=o(e,"H3",{});var ft=n(se);ha=c(ft,"Configuriamo warpinator sullo smartphone"),ft.forEach(i),Oi=p(e),ne=o(e,"P",{});var vt=n(ne);ga=c(vt,"Apri l\u2019applicazione appena installata dallo store e fai tap sui 3 puntini in alto a destra per accedere alla configurazione dell\u2019applicazione"),vt.forEach(i),Wi=p(e),re=o(e,"P",{});var bt=n(re);pe=o(bt,"IMG",{src:!0,alt:!0}),bt.forEach(i),Ri=p(e),P=o(e,"P",{});var We=n(P);el=c(We,"Ora seleziona "),Ze=o(We,"EM",{});var dt=n(Ze);il=c(dt,"Impostazioni"),dt.forEach(i),al=c(We," ed configura lo stesso "),Je=o(We,"EM",{});var _t=n(Je);ll=c(_t,"condice di gruppo"),_t.forEach(i),tl=c(We," che hai impostato su Linux"),We.forEach(i),Bi=p(e),ue=o(e,"P",{});var zt=n(ue);ce=o(zt,"IMG",{src:!0,alt:!0}),zt.forEach(i),Di=p(e),me=o(e,"P",{});var wt=n(me);fe=o(wt,"IMG",{src:!0,alt:!0}),wt.forEach(i),Ti=p(e),ve=o(e,"H3",{});var Et=n(ve);ol=c(Et,"Scambiamo file tra Linux e lo smartphone"),Et.forEach(i),Fi=p(e),k=o(e,"P",{});var Re=n(k);sl=c(Re,"Cosa molto importante \xE8 assicurarsi che il firewall del proprio PC non blocchi le porte "),Ke=o(Re,"STRONG",{});var Pt=n(Ke);nl=c(Pt,"42000"),Pt.forEach(i),rl=c(Re," e "),Qe=o(Re,"STRONG",{});var kt=n(Qe);pl=c(kt,"42001"),kt.forEach(i),ul=c(Re,` utilizzate da warpinator.
In caso che queste porte siano filtrare non sar\xE0 possibile connettere lo smartphone con Linux`),Re.forEach(i),$i=p(e),be=o(e,"P",{});var xt=n(be);cl=c(xt,"A titolo puramente di test, su linux eseguite il seguente comando in modo da disabilitare il firewall"),xt.forEach(i),Ui=p(e),H=o(e,"PRE",{class:!0});var Xt=n(H);Xt.forEach(i),Vi=p(e),de=o(e,"P",{});var It=n(de);ml=c(It,"Se con questo comando la connession di warpinator funziona, dovrete configurare il firewall in modo opportuno."),It.forEach(i),ji=p(e),_e=o(e,"P",{});var Lt=n(_e);fl=c(Lt,"A questo punto sia sul PC che sullo smartphone \xE8 possibile vedere i device trovati nella rete e appartenenti allo stesso gruppo"),Lt.forEach(i),Ni=p(e),ze=o(e,"P",{});var Mt=n(ze);we=o(Mt,"IMG",{src:!0,alt:!0}),Mt.forEach(i),Zi=p(e),Ji=o(e,"BR",{}),Ki=p(e),Ee=o(e,"P",{});var Ct=n(Ee);Pe=o(Ct,"IMG",{src:!0,alt:!0}),Ct.forEach(i),Qi=p(e),Xi=o(e,"BR",{}),Yi=p(e),ke=o(e,"P",{});var St=n(ke);vl=c(St,"Ora scegliamo se condividere un\u2019intera directory o un singolo file"),St.forEach(i),hi=p(e),xe=o(e,"P",{});var qt=n(xe);Ie=o(qt,"IMG",{src:!0,alt:!0}),qt.forEach(i),gi=p(e),ea=o(e,"BR",{}),ia=p(e),Le=o(e,"P",{});var yt=n(Le);bl=c(yt,"Una volta selezionato il file, il trasferimento inizia immediatamente e sul PC viene richiesto la conferma di accettazione del file"),yt.forEach(i),aa=p(e),Me=o(e,"P",{});var At=n(Me);Ce=o(At,"IMG",{src:!0,alt:!0}),At.forEach(i),la=p(e),ta=o(e,"BR",{}),oa=p(e),Se=o(e,"P",{});var Gt=n(Se);dl=c(Gt,"Se accettiamo la richiesta di invio del file, dopo pochi istanti (dipende dalle dimensioni del file), troveremo il file nella directory che avevamo impostato durante la configurazione di warpinator su Linux"),Gt.forEach(i),sa=p(e),qe=o(e,"P",{});var Ht=n(qe);ye=o(Ht,"IMG",{src:!0,alt:!0}),Ht.forEach(i),na=p(e),ra=o(e,"BR",{}),pa=p(e),Ae=o(e,"H3",{});var Ot=n(Ae);_l=c(Ot,"Conclusioni"),Ot.forEach(i),ua=p(e),Ge=o(e,"P",{});var Wt=n(Ge);zl=c(Wt,`Warpinator \xE8 un tool fantastico, open source e sicuro che ci permette di scambiare file tra lo smartphone e il nostro PC Linux via rete locale al riparo da occhi indiscreti.
Abbiamo visto come installare warpinator sia su Linux che su smartphone (Android) e come configurare correttamente le applicazioni.
Infine abbiamo visto anche come scambiare un file da Android a Linux`),Wt.forEach(i),ca=p(e),He=o(e,"P",{});var Rt=n(He);wl=c(Rt,"Vi invito ad utilizzare questo tool in modo da evitare metodi antichi come inviare le foto via email etc."),Rt.forEach(i),ma=p(e),Oe=o(e,"P",{});var Bt=n(Oe);El=c(Bt,"Lasciate i vostri commenti qui sotto e se vi \xE8 piaciuto il post e lo ritenete utile potete anche mettere un like all\u2019articolo e condividerlo con la vostra rete social."),Bt.forEach(i),this.h()},h(){m(C,"class","language-bash"),m(S,"class","language-bash"),m(q,"class","language-bash"),m(y,"class","language-bash"),d(X.src,Il="/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-preferenze.png.webp")||m(X,"src",Il),m(X,"alt","warpinator-preferences"),d(h.src,Ll="/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-download-dir.png.webp")||m(h,"src",Ll),m(h,"alt","warpinator-preferenze"),d(ie.src,Ml="/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-codice-gruppo.png.webp")||m(ie,"src",Ml),m(ie,"alt","warpinator-codice-gruppo"),d(oe.src,Cl="/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-android.png.webp")||m(oe,"src",Cl),m(oe,"alt","warpinator-android"),d(pe.src,Sl="/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-android-config.png.webp")||m(pe,"src",Sl),m(pe,"alt","warpinator-android-config"),d(ce.src,ql="/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-android-impostazioni.png.webp")||m(ce,"src",ql),m(ce,"alt","warpinator-android-impostazioni"),d(fe.src,yl="/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-android-codice.png.webp")||m(fe,"src",yl),m(fe,"alt","warpinator-android-codice"),m(H,"class","language-bash"),d(we.src,Al="/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-android-connecting.png.webp")||m(we,"src",Al),m(we,"alt","warpinator-android-connecting"),d(Pe.src,Gl="/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-lista-smartphone.png.webp")||m(Pe,"src",Gl),m(Pe,"alt","warpinator-lista-smartphone"),d(Ie.src,Hl="/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-android-select-file.png.webp")||m(Ie,"src",Hl),m(Ie,"alt","warpinator-android-select-file"),d(Ce.src,Ol="/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-accetta.png.webp")||m(Ce,"src",Ol),m(Ce,"alt","warpinator-accetta"),d(ye.src,Wl="/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-file-download.png.webp")||m(ye,"src",Wl),m(ye,"alt","warpinator-file-download")},m(e,a){l(e,f,a),s(f,z),l(e,w,a),l(e,E,a),s(E,v),l(e,b,a),l(e,x,a),s(x,ba),l(e,Ye,a),l(e,R,a),s(R,da),l(e,he,a),l(e,B,a),s(B,_a),l(e,ge,a),l(e,D,a),s(D,za),l(e,ei,a),l(e,T,a),s(T,wa),l(e,ii,a),l(e,F,a),s(F,Ea),l(e,ai,a),l(e,$,a),s($,Pa),l(e,li,a),l(e,C,a),C.innerHTML=$t,l(e,ti,a),l(e,U,a),s(U,ka),l(e,oi,a),l(e,V,a),s(V,xa),l(e,si,a),l(e,S,a),S.innerHTML=Ut,l(e,ni,a),l(e,j,a),s(j,Ia),l(e,ri,a),l(e,L,a),s(L,La),s(L,Be),s(Be,Ma),s(L,Ca),l(e,pi,a),l(e,q,a),q.innerHTML=Vt,l(e,ui,a),l(e,N,a),s(N,Sa),l(e,ci,a),l(e,Z,a),s(Z,qa),l(e,mi,a),l(e,y,a),y.innerHTML=jt,l(e,fi,a),l(e,J,a),s(J,ya),l(e,vi,a),l(e,K,a),s(K,Aa),l(e,bi,a),l(e,A,a),s(A,Ga),s(A,De),s(De,Ha),l(e,di,a),l(e,Q,a),s(Q,X),l(e,_i,a),l(e,zi,a),l(e,wi,a),l(e,_,a),s(_,Oa),s(_,Te),s(Te,Wa),s(_,Ra),s(_,Fe),s(Fe,Ba),s(_,Da),s(_,$e),s($e,Ta),l(e,Ei,a),l(e,M,a),s(M,Fa),s(M,Ue),s(Ue,$a),s(M,Ua),l(e,Pi,a),l(e,Y,a),s(Y,h),l(e,ki,a),l(e,xi,a),l(e,Ii,a),l(e,I,a),s(I,Va),s(I,Ve),s(Ve,ja),s(I,Na),s(I,je),s(je,Za),l(e,Li,a),l(e,g,a),s(g,Ja),l(e,Mi,a),l(e,ee,a),s(ee,ie),l(e,Ci,a),l(e,Si,a),l(e,qi,a),l(e,ae,a),s(ae,Ka),l(e,yi,a),l(e,le,a),s(le,Qa),l(e,Ai,a),l(e,G,a),s(G,Xa),s(G,Ne),s(Ne,Ya),l(e,Gi,a),l(e,te,a),s(te,oe),l(e,Hi,a),l(e,se,a),s(se,ha),l(e,Oi,a),l(e,ne,a),s(ne,ga),l(e,Wi,a),l(e,re,a),s(re,pe),l(e,Ri,a),l(e,P,a),s(P,el),s(P,Ze),s(Ze,il),s(P,al),s(P,Je),s(Je,ll),s(P,tl),l(e,Bi,a),l(e,ue,a),s(ue,ce),l(e,Di,a),l(e,me,a),s(me,fe),l(e,Ti,a),l(e,ve,a),s(ve,ol),l(e,Fi,a),l(e,k,a),s(k,sl),s(k,Ke),s(Ke,nl),s(k,rl),s(k,Qe),s(Qe,pl),s(k,ul),l(e,$i,a),l(e,be,a),s(be,cl),l(e,Ui,a),l(e,H,a),H.innerHTML=Nt,l(e,Vi,a),l(e,de,a),s(de,ml),l(e,ji,a),l(e,_e,a),s(_e,fl),l(e,Ni,a),l(e,ze,a),s(ze,we),l(e,Zi,a),l(e,Ji,a),l(e,Ki,a),l(e,Ee,a),s(Ee,Pe),l(e,Qi,a),l(e,Xi,a),l(e,Yi,a),l(e,ke,a),s(ke,vl),l(e,hi,a),l(e,xe,a),s(xe,Ie),l(e,gi,a),l(e,ea,a),l(e,ia,a),l(e,Le,a),s(Le,bl),l(e,aa,a),l(e,Me,a),s(Me,Ce),l(e,la,a),l(e,ta,a),l(e,oa,a),l(e,Se,a),s(Se,dl),l(e,sa,a),l(e,qe,a),s(qe,ye),l(e,na,a),l(e,ra,a),l(e,pa,a),l(e,Ae,a),s(Ae,_l),l(e,ua,a),l(e,Ge,a),s(Ge,zl),l(e,ca,a),l(e,He,a),s(He,wl),l(e,ma,a),l(e,Oe,a),s(Oe,El)},p:no,d(e){e&&i(f),e&&i(w),e&&i(E),e&&i(b),e&&i(x),e&&i(Ye),e&&i(R),e&&i(he),e&&i(B),e&&i(ge),e&&i(D),e&&i(ei),e&&i(T),e&&i(ii),e&&i(F),e&&i(ai),e&&i($),e&&i(li),e&&i(C),e&&i(ti),e&&i(U),e&&i(oi),e&&i(V),e&&i(si),e&&i(S),e&&i(ni),e&&i(j),e&&i(ri),e&&i(L),e&&i(pi),e&&i(q),e&&i(ui),e&&i(N),e&&i(ci),e&&i(Z),e&&i(mi),e&&i(y),e&&i(fi),e&&i(J),e&&i(vi),e&&i(K),e&&i(bi),e&&i(A),e&&i(di),e&&i(Q),e&&i(_i),e&&i(zi),e&&i(wi),e&&i(_),e&&i(Ei),e&&i(M),e&&i(Pi),e&&i(Y),e&&i(ki),e&&i(xi),e&&i(Ii),e&&i(I),e&&i(Li),e&&i(g),e&&i(Mi),e&&i(ee),e&&i(Ci),e&&i(Si),e&&i(qi),e&&i(ae),e&&i(yi),e&&i(le),e&&i(Ai),e&&i(G),e&&i(Gi),e&&i(te),e&&i(Hi),e&&i(se),e&&i(Oi),e&&i(ne),e&&i(Wi),e&&i(re),e&&i(Ri),e&&i(P),e&&i(Bi),e&&i(ue),e&&i(Di),e&&i(me),e&&i(Ti),e&&i(ve),e&&i(Fi),e&&i(k),e&&i($i),e&&i(be),e&&i(Ui),e&&i(H),e&&i(Vi),e&&i(de),e&&i(ji),e&&i(_e),e&&i(Ni),e&&i(ze),e&&i(Zi),e&&i(Ji),e&&i(Ki),e&&i(Ee),e&&i(Qi),e&&i(Xi),e&&i(Yi),e&&i(ke),e&&i(hi),e&&i(xe),e&&i(gi),e&&i(ea),e&&i(ia),e&&i(Le),e&&i(aa),e&&i(Me),e&&i(la),e&&i(ta),e&&i(oa),e&&i(Se),e&&i(sa),e&&i(qe),e&&i(na),e&&i(ra),e&&i(pa),e&&i(Ae),e&&i(ua),e&&i(Ge),e&&i(ca),e&&i(He),e&&i(ma),e&&i(Oe)}}}function uo(W){let f,z;const w=[W[0],Ft];let E={$$slots:{default:[po]},$$scope:{ctx:W}};for(let v=0;v<w.length;v+=1)E=xl(E,w[v]);return f=new ro({props:E}),{c(){eo(f.$$.fragment)},l(v){io(f.$$.fragment,v)},m(v,b){ao(f,v,b),z=!0},p(v,[b]){const x=b&1?lo(w,[b&1&&Dt(v[0]),b&0&&Dt(Ft)]):{};b&2&&(x.$$scope={dirty:b,ctx:v}),f.$set(x)},i(v){z||(to(f.$$.fragment,v),z=!0)},o(v){oo(f.$$.fragment,v),z=!1},d(v){so(f,v)}}}const Ft={id:"2023-08-10-1",titolo:"Come scambiare facilmente file tra linux e lo smartphone",featured:!1,autore:"ProfMancusoa",data:"2023-09-23T00:00:00.000Z",cover:"warpinator.png.webp",introduzione:"Vediamo come installare ed utilizzare warpinator su Linux per scambiare comodamente file tra gli smartphone Android e iOS e Linux Desktop",pubblicato:!0,sezione:"blog",categorie:["Linux","File Share","Scambio File",null]};function co(W,f,z){return W.$$set=w=>{z(0,f=xl(xl({},f),Tt(w)))},f=Tt(f),[f]}class _o extends Yt{constructor(f){super(),ht(this,f,co,uo,gt,{})}}export{_o as default,Ft as metadata};