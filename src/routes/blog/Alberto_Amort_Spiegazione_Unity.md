id: 2022-08-19-0
titolo: Il programma Unity
featured: false
autore: Alberto Amort
data: 2022-08-19
cover: cover.webp
introduzione: Questo post descrive varie funzionalità del programma Unity
pubblicato: true
sezione: Blog
categorie:
  - Blog

 Unity Hub

# Parte 1: Come scaricare Unity

1. Per prima cosa, colleghiamoci al sito web ufficiale di Unity (cliccando qui) e clicchiamo sul pulsante "Get started", posizionato nella parte alta.


2. Selezionate il piano che preferiamo e procediamo all’acquisto. Questi sono:
Student (gratuito): l'ultima versione del core Unity Platform e diagnostica cloud in tempo reale. Il piano è disponibile solo ed esclusivamente per gli studenti (con un'età pari o superiore a 16 anni) iscritti a un istituto accreditato;
Personal (gratuito per gli utenti con entrate o finanziamenti inferiori a 100.000 dollari negli ultimi 12 mesi): l'ultima versione del core Unity Platform e alcune risorse iniziali;
Unity Plus (399 dollari/l'anno per posto): l'ultima versione di Unity, la possibilità di personalizzare la schermata iniziale; analisi Live-Ops, diagnostica cloud in tempo reale;
Unity Pro (1.800 dollari/l'anno per posto): l'ultima versione di Unity, la possibilità di personalizzare la schermata iniziale, analisi Live-Ops, diagnostica cloud in tempo reale, servizio clienti prioritario, oltre 300 ore di contenuti di formazione e molto altro;
Industrial Collection (2.520 dollari/l'anno per posto): Unity Pro, Plugin Pixyz, xTex e AxF, toolkit per la collaborazione VR e la progettazione HMI;
Enterprise (4.000 dollari/l'anno per 20 posti): Unity Pro, supporto tecnico, Build Server, Customer Success Manager, abbonamenti alla formazione on demand (per 3 persone).

 


3. Fate click su "Download for Windows" (o "Download other versions") per scaricare Unity Hub, ovvero la piattaforma che consente di scaricare e aggiornare l'editor.

4. Avviate il file "UnityHubSetup.exe" (l'estensione varia in base al sistema operativo), cliccate "Accetto", scegliete una cartella di destinazione e premete "Installa".

5. Dopo aver completato l'installazione, avviate Unity Hub. Questa applicazione consente di scaricare tutte le versioni di Unity Editor (incluse le versioni "alpha", "beta", quelle stabili e quelle obsolete). Dopodiché, effettuate il login (o create un nuovo account) e cliccate su "Installs".

6. Fate click su "Add" e scegliete la versione da installare, poi premete "Next".


7. Selezionate tutti i componenti e moduli da installare. Vorreste sviluppare un videogioco per iOS? Non dimenticate "iOS Build Support"; intendete creare un progetto per Android? Installate anche "Android Build Support" e così via. La documentazione potrebbe essere molto utile per iniziare a utilizzare Unity. Cliccate "Next" per procedere.
8) Accettate i termini e le condizioni e cliccate "Done" per avviare l'installazione di Unity. Potrete tuttavia installare diverse versioni contemporaneamente seguendo diverse volte la procedura guidata.
 
# Parte 2:  Aprire un nuovo programma.
Il primo passaggio per la creazione di un programma è, appunto, crearne uno nuovo. Per prima cosa, clicchiamo sul menù a tendina del pulsante New e scegliamo la versione che vogliamo utilizzare, poi clicchiamo sul pulsante stesso. Nel nostro caso selezioniamo 202o.1.f1.


A questo punto, selezioniamo il nome del programma (nel nostro caso Imparo Unity), la cartella in cui lo vogliamo salvare e le template che vogliamo utilizzare. Queste ultime ci serviranno per accedere più facilmente ad alcune funzionalità specifiche, ma potremo comunque utilizzare tutte le funzionalità di Unity. Le template utilizzate sono: 
2D: configura le impostazioni del progetto per le app 2D. 
3D: configura le impostazioni del progetto per le app 3D che usano la pipeline di rendering incorporata di Unity .
3D con extra: configura le impostazioni del progetto per le app 3D che usano il renderer integrato di Unity e le funzionalità di post-elaborazione. Questo tipo di progetto include il nuovo stack di post-elaborazione, diversi preset per avviare lo sviluppo e il contenuto di esempio.
High definition RP: configura le impostazioni del progetto per i progetti che utilizzano piattaforme di fascia alta che supportano Shader Model 5.0 (DX11 and above). Questo modello include anche un nuovo stack di post-elaborazione, che consente di applicare filtri full-screen utilizzando un'interfaccia adatta agli artisti,  diversi Preset per avviare rapidamente la programmazione ed esempi pratici. L'High Definition RP è tuttavia attualmente in fase di sviluppo, quindi consideralo incompleto e soggetto a modifiche (API, UX, ambito). In quanto tale, non è coperto dal regolare sostegno di Unity.
Universal Render Pipeline: configura le impostazioni per progetti in cui le prestazioni, il supporto dell'ampia piattaforma e la facilità di personalizzazione della grafica sono le considerazioni principali. Possiede una pipeline di rendering Scriptable predefinita rapida e facile da personalizzare, che consente di creare grafica ottimizzata su un'ampia gamma di piattaforme. URP include anche un renderer 2D ottimizzato completo di luci 2D, pixel, e una soluzione di post-elaborazione. Questa template possiede anche uno Shader Graph, uno strumento che consente di creare uno shader utilizzando un editor visual node invece di scrivere codice.
Quella che utilizzeremo nel nostro programma sarà la template 3D.

Ora che abbiamo terminato la configurazione, premiamo Create ed entriamo nell’interfaccia principale.

 
# Parte 3: Le interfacce principali 
## Il concetto di GameObject
L’intero funzionamento di questo programma ruota attorno ai Game Objects, che rappresentano personaggi, nemici, oggetti collezionabili, ostacoli ed altri elementi fisici del nostro gioco. Da solo, però, il Game Objects è privo di una vera e propria funzione. Le sue caratteristiche vengono infatti definite nella sezione componenti, in cui viene impostato il funzionamento e l’aspetto del nostro oggetto, dandogli quindi un ruolo all’interno del nostro programma. 
In questa immagine possiamo ammirare un oggetto Cube con accanto la finestra Inspector che raffigura le sue varie componenti, fra cui troviamo la posizione, le dimensioni, la possibilità che proietti un'ombra e la presenza di un collisore. 

Gli oggetti presenti sulla scena vengono raffigurati sulla finestra hierarchy, con quelli raffiguranti la telecamera e la luce che sono presenti di default.

Un'altra caratteristica importante dei GameObjest è il concetto di genitorialità, o gerarchia, che si basa sulla creazione di un GameObject padre e di vari GameObject figli che ne ereditano le proprietà (a cui potremo aggiungerne altre), che a sua volta possono generare altri “figli”, creando così una serie di nodi di oggetti. 

Per creare un nuovo GameObject nella finestra Gerarchia bisogna cliccare il pulsante destro del mouse sullo spazio vuoto della finestra hierarchy e poi selezionare il tipo GameObject che desideri creare, oppure premendo Ctrl+Shift+N (Windows) or Command+Shift+N (macOS). Se si vuole creare nello specifico un  “Genitore”, bisogna fare clic su un GameObject oppure su più GameObject dello stesso livello e selezionare “Create Empty Parent”. In alternativa puoi anche premere Ctrl+Shift+G (Windows) o Command+Shift+G (macOS).
 Per rendere un GameObject un figlio, ci basterà spostarlo all’interno di un’altro oggetto trascinandolo o usando il copia-incolla. 

E’ inoltre possibile impostare un GameObject come “Genitore Predefinito”, il che vuol dire che oggetto successivamente creato sarà automaticamente un suo "figlio”. Per rendere un GameObject un “Genitore Predefinito” bisogna fare click con il pulsante destro su di esse e selezionare Set as Default Parent. Se invece volessimo rimuovere l'impostazione di “Genitore predefinito”, dobbiamo cliccare su Clear Default Parent. E’ possibile impostare un solo Genitore predefinito per Scena 
 
 
## La Scene
Le Scene sono le aree che contengono tutto o parte di un gioco o un'applicazione. Ad esempio, potresti costruire un gioco semplice in una singola scena, mentre per un gioco più complesso potresti utilizzare una scena per livello, ognuna con i propri ambienti, personaggi, ostacoli, decorazioni e interfaccia utente, e attraverso lo script sarà possibile passare da una scena all’altra. 

Per creare una nuova scena, bisogna premere il tasto destro sulla scena già presente e cliccare "Add New Scene”.
Una volta creata la nostra nuova Scene, dobbiamo successivamente salvarla. Quindi clicchiamoci sopra col tasto destro e premiamo “Save Scene”, e poi salviamola all’interno della cartella “SampleScene.unity”, che viene creata automaticamente insieme al progetto.

Quando si lavora sul posizionamento dell’oggetto, di solito si è presenti nella finestra Scene, che ci fornisce un'immagine generale dell'ambiente del gioco, in cui possiamo spostarci come vogliamo. In basso a destra dello schermo troviamo invece la Camera Preview, che mostra l’ambiente di lavoro attraverso la telecamera del gioco. E’ possibile visualizzare la Camera Preview a schermo intero accedendo alla finestra Game.
 
 
## Il movimento dell’oggetto
La posizione, la rotazione e le dimensioni dell’oggetto sono determinate dalle proprietà Transforms, che possono essere modificato muovendo l’oggetto con il mouse o digitando i valori direttamente nella finestra Inspector.
Un terzo metodo è quello di selezionare tramite la barra degli strumenti uno dei vari Tool, che ci permetterà di modificare il valore di uno specifico Trasform, mostrando inoltre i Gizmo (cioè gli assi) che lo rappresentano. Questi cinque tool sono Move, Rotate, Scale, RectTransform e Transform.
 
 

## Move
In questo Tool, al centro dei tre assi sono presenti tre quadratini, che possono essere usati per trascinare il GameObject all'interno di un unico piano (il che significa che puoi spostare due assi contemporaneamente mentre il terzo rimane fermo). Come anche negli altri tipi di tool, ogni asse è associato ad un colore preciso: il rosso rappresenta l’asse x, il blu l’asse y e il verde l’asse z.  
Se clicchi il cubo al centro del Move Gizmo tenendo premuto il pulsante shift e lo trascini, il cubo al centro diventerà un quadrato piatto, il che indica puoi muovere il GameObject lungo l’area su cui la telecamera sta puntando.

Rotate
Viene utilizzato per ruotare oggetti. In particolare, trascinando i cerchi colorati attorno all’oggetto sarà possibile farlo ruotare attorno all’asse associato, mentre il cerchio bianco più esterno serve a far ruotare il GameObject all’interno dello scenario

Scale
Consente di ridimensionare il GameObject in modo uniforme tutti gli assi contemporaneamente trascinando il cubo al centro del Gizmo. E’ anche possibile modificare il valore di un solo asse, ma gli effetti possono risultare piuttosto strani

RectTransform
Il RectTransform è comunemente usato per posizionare elementi 2D come Sprite o elementi dell'interfaccia utente , ma può anche essere utile per manipolare GameObjects 3D. Combina movimento, ridimensionamento e rotazione in un unico Gizmo:
Ricorda che in modalità 2D, non puoi cambiare l'asse z nella scena usando i Gizmos (dato che non è presente). Tuttavia, è utile per alcune tecniche di scripting utilizzare l'asse z per altri scopi, quindi puoi comunque impostare l'asse z utilizzando il componente Trasforma in Impostazioni.
 
Trasform
Combina i Gizmo di MOVE, Rotate e RectTransform.  
 
## Strumenti personalizzati
Se il tuo progetto utilizza strumenti Editor personalizzati, alcuni di essi potrebbero anche consentirti di posizionare GameObjects.
È possibile accedere agli strumenti personalizzati facendo clic con il tasto destro del mouse su Strumenti dell'editor personalizzato disponibili nella barra degli strumenti.

## La finestra Project
All’interno del tab project sono presenti tutti i vari file che compongono il nostro progetto, come ad esempio assets grafici, animazioni e database, organizzati in cartelle. Presenta di default la cartella Scene.

La parte superiore della finestra presenta una barre degli strumenti con la quale è possibile svolgere varie funzioni:
Create menu	: visualizza un elenco di Risorse e altre sottocartelle che puoi aggiungere alla cartella attualmente selezionata.
Barra di ricerca: cerca un file all'interno del tuo progetto. Puoi scegliere di cercare all'interno dell'intero Progetto (Alli ), nelle cartelle di livello superiore del tuo Progetto (elencate singolarmente), nella cartella che hai attualmente selezionato o all'interno dell'Asset Store. Oltre al nome del file, sulla barra si può anche inserire i filtri si ricchezza, ovvero "t:" filtra in base al tipo di risorsa specificato, mentre "l:" filtra in base all'etichetta.  
Search by Type: limita la ricerca a un tipo specifico, ad esempio Mesh, Prefab, Scene.
Search by Label: sceglie un tag in cui cercare.
Hidden packages count: attiva o disattiva la visibilità dei pacchetti nella finestra Project

La ricerca del Project Browser può essere applicata anche agli assets disponibili da Unity Asset Store. Se scegli Asset Store dal menu nella barra di ricerca, verranno visualizzati tutti gli articoli gratuiti e a pagamento del negozio che corrispondono alla tua richiesta. La ricerca per tipo ed etichetta funziona come per un progetto Unity. Le parole della query di ricerca verranno confrontate prima con il nome dell'asset e poi con il nome del pacchetto, l'etichetta del pacchetto e la sua descrizione (quindi un articolo il cui nome contiene i termini di ricerca sarà classificato più in alto di uno con gli stessi termini nella descrizione del pacchetto).
La finestra Console
La finestra Console mostra errori (messaggi di error, scritti in rosso), avvisi (messaggio di warning, scritti in giallo) e altri messaggi generati da Unity (messaggi di debug, con un punto esclamativo all’inizio). Proprio come nella finestra Project, la barra degli strumenti della pagina ha un enorme varietà di funzioni, ma le più utilizzate sono “Clear”, che rimuove tutti i messaggi ma conserva gli errori del compilatore, e Collapse, che riduce tutti i messaggi identici in uno solo, con accanto il numero delle loro apparizioni, il che lo rende molto utile per gli errori di runtime, come i riferimenti null, che a volte vengono generati ad ogni aggiornamento del frame.

## Le finestre Animation e Animator 
Oltre alle finestre già viste precedentemente, ne esistono altre con funzioni molto più particolari, a cui è possibile accedere usando il menù Window. Le più importanti sono Animation e Animator.
 
La finestra di animazione in Unity ti consente di creare e modificare Clip di animazione direttamente all'interno dell'Unità. Iniziamo per prima cosa ad animare un Cubo.
Una volta inserito il cubo sulla Tab apparirà la scritta Create, che una volta premuta, salverà l’animazione come una cartella e aggiungerà alla finestra Inspector il componente Animator, mentre la finestra diventa una timeline.


 
Per registrare una nuova posizione bisognerà premere record, il che renderà la barra della finestra rossa. A quel punto bisognerà far compiere al nostro cubo i movimenti che vogliamo registrare, poi premere nuovo record per terminare.
 

 
La finestra Animator è il luogo in cui vengono incluse la maggior parte delle animazioni nelle ultime versioni e ci permetterà di creare macchine a stati. Consente di creare, visualizzare e modificare le risorse di Animator Controller.

La finestra Animator ha due sezioni principali: l'area di layout a griglia principale e il riquadro Layers & Parameters.
L'area del layout viene utilizzata per creare, organizzare e collegare gli stati dell’Animator Controller.
È possibile creare nuovi nodi di stato facendo clic con il pulsante destro del mouse sulla griglia.

Il riquadro Layers & Parameters può essere commutato tra, appunto, la vista Parameters e la vista Layers. La vista Parameters consente di creare, visualizzare e modificare i parametri dell’Animator Controller. Si tratta di variabili definite dall'utente che fungono da input della macchina a stati. Per aggiungere un parametro, bisogna cliccare sull'icona Più e selezionare il tipo di parametro dal menu a comparsa. Per eliminare un parametro, bisogna invece selezionare il parametro negli elenchi e premere il tasto cancella (su macOS si usa fn-Delete per eliminare il parametro).
La vista Layers, invece, permette di creare, visualizzare e modificare i Layers dell’Animator Controller. Ciò ti consente di avere più livelli di animazione all'interno di un singolo Animation Controller che funzionano contemporaneamente, ciascuno controllato da una macchina a stati separata. Un uso comune di questo è avere un livello separato che riproduce le animazioni della parte superiore del corpo su un livello base che controlla le animazioni di movimento generali per un personaggio.
Per aggiungere un livello, bisogna fare clic sull'icona più, mentre per eliminarlo bisogna selezionare il livello e premere il tasto Canc.

La finestra Animator utilizza una collocazione gerarchica “breadcrumb”, in cui gli stati possono contenere sotto-stati che a sua volta contengono altri sotto-stati e così via.
 
L'abilitazione dell'icona del lucchetto manterrà la finestra Animator focalizzata sulla macchina a stato corrente. Quando l'icona del lucchetto è disattivata, facendo clic su una nuova risorsa dell'animatore o su un oggetto di gioco con un componente animatore (che permette di animare un modello utilizzando l’Animation System), cambierà la finestra Animator per mostrare la macchina a stati di quell'elemento. L’attivazione del lucchetto fa sì che la finestra Animator mostri sempre la stessa macchina a stati, indipendentemente dalle altre risorse o oggetti di gioco selezionati.

## Il Packet Manager 
Il Packet Manager permette di aggiungere nuove funzionalità programmate dal team Unity che non sono presenti di default all’interno del programma, in quanto lo renderebbero troppo pesante. La selezione delle template avvenuta ad inizio processo serve appunto ad indicare al programma quali pacchetti devono essere presenti di default

Una volta aperto, il Packet Manager mostrerà tutti i pacchetti attualmente caricati all’interno del programma, che possono essere attivati e disattivati a piacere. Cliccando su “Packages in Project” e poi su Unity Register è possibile visualizzare tutte le possibili funzionalità che possiamo inserire nel nostro progetto. 

La Play Mode 
Il programma Unity ci permette di attivare una simulazione del nostro gioco, che ci permette di osservare il risultato della nostra programmazione e di conseguenza valutare se le istruzioni che abbiamo inserito siano corrette o meno. Questa funzione è chiamata Play Mode e si attiva utilizzando dei pulsanti posti nella parte superiore della finestra principale.

Quando questa funzione viene attivata, Unity esegue due azioni significative per garantire che il tuo progetto venga avviato nell'editor allo stesso modo di una build:
Ripristina lo stato di scripting
Ricarica la scena
Queste due azioni richiedono del tempo per essere eseguite e la quantità di tempo aumenta man mano che lo script e le Scene diventano più complessi. La possibilità di entrare e uscire rapidamente dalla Play Mode è un fattore importante durante lo sviluppo del gioco o dell'app. Più velocemente puoi entrare e uscire dalla modalità di riproduzione, più velocemente puoi apportare e testare le modifiche. Unity offre quindi la possibilità di disabilitare sia , o entrambe, le azioni “Domain Reload” e “Scene Reload”. Queste due opzioni sono fornite dalla funzione Configurable Enter Play Mode. 

# Parte 4: Programmazione
## Le componenti della finestra inspector
### Transforms
La componente Transforms determina la posizione , la rotazione e la scala di ogni oggetto nella scena. Come detto precedentemente, è possibile modificarne il valore scrivendolo direttamente all’interno delle caselle o muovendo l’oggetto.

### Collider
I componenti del Collider determinano il limite di un oggetto che, se toccato da un altro collisore, genera una collisione. Un collisore , che è invisibile, non deve avere necessariamente la stessa identica forma del GameObject per funzionare, sebbene sia consigliabile in quanto lo rende indistinguibile dall’oggetto durante il gameplay, dando l’illusione che ci sia davvero stato un contatto fra i GameObject. Per modificare l’estensione del Collider bisogna prima premere Editor Collider. 

Per inserire un nuovo Collider dobbiamo premere “Add Collider”, che visualizza tutti i vari Collider di base, e poi scegliere quello che assomiglia di più al GameObject che stiamo utilizzando. Per esempio, nel caso di un cubo, dovremo usare un Box Collider. 
 
Attivando la componente “Is Trigger”, il GameObject potrà venire attraversato da ogni altro oggetto, ma il programma memorizzerà tale oggetto. Ciò può essere utile in alcuni script, per esempio nella creazione di trappole e nell’apertura delle porte. E’ possibile, inoltre, selezionare il Physic Material, che ci permetterà di impostare alcune caratteristiche fisiche. Per prima cosa dobbiamo prima crearlo nella finestra Project e determinare le sue componenti, che possono essere: 
Dynamic Friction: l'attrito utilizzato quando si è già in movimento. Di solito ha un valore compreso tra 0 e 1. 
Static Friction: l'attrito utilizzato quando un oggetto è fermo su una superficie. Di solito un valore compreso tra 0 e 1.
Bounciness:determina quanto gli oggetti rimbalzano una volto entrati in contatto
Friction Combine: Combina l’attrito di due oggetti in collisione.
 Bounce Combine: combina l'elasticità di due oggetti in collisione. 

 ### Rigidbodies

Rigidbodies abilitano il GameObject in modo che venga influenzato dalle leggi della fisica, come la gravità. Fra le sue varie funzionalità troviamo:
Mass: La massa dell'oggetto (in chilogrammi per impostazione predefinita).
Drag: Quanta resistenza dell'aria influisce sull'oggetto quando si sposta.
Angular Drag: Quanta resistenza dell'aria influisce sull'oggetto durante la rotazione.
Use Gravity:Se abilitato, l'oggetto è influenzato dalla gravità.
Is Kinematic: Se abilitato, l'oggetto non sarà pilotato dal motore fisico e potrà essere manipolato solo dal suo Transform . Questo è utile per spostare le piattaforme o se vuoi animare un Rigidbody che ha un HingeJoint collegato.
Interpolate: Si attiva solo se vedi scatti nel movimento del tuo Rigidbody. Se viene impostato Interpolate, Trasform viene smussato in base al Trasform  del fotogramma precedente. Se viene impostato Estrapolate, Trasform viene livellato in base al Trasform  stimato del fotogramma successivo.
Collision Detection: impedisce agli oggetti in rapido movimento di passare attraverso altri oggetti senza che vengano rilevate collisioni.
Constraints: imposta restrizioni al movimento del Rigidbody. Se viene impostato Freeze Position, il movimento del Rigid Body viene fermato. Se viene impostato Freeze Rotation, la rotazione del Rigid Body viene fermata.

### Animator 
Viene utilizzato per assegnare le animazioni al GameObject. Per funzionare però, richiede la presenza di un Animator Controller, che definisce le clip di animazione da usare e controlla quando e come fondersi e passare da uno all'altro. Le sue varie proprietà sono:
Controller: assegna all’oggetto un animator controller 
Avatar: lo definisce come avatar del giocatore
Apply Root Motion:	Seleziona se controllare la posizione e la rotazione del personaggio.
Update Mode: consente di selezionare quando l'Animator si aggiorna e quale scala temporale dovrebbe utilizzare. Nella modalità normale l'animatore viene aggiornato in sincronia con la chiamata di aggiornamento e la velocità dell'animatore corrisponde alla scala temporale corrente. Nella modalità Animate Physics, l'animatore viene aggiornato in sincronia con la chiamata FixedUpdate. Nella modalità Unscaled Time, l'animatore viene aggiornato in sincronia con la chiamata di aggiornamento, ma la velocità dell'animatore ignora la scala temporale corrente e si anima al 100% indipendentemente dalla velocità. 
Culling Mode: ti permette di scegliere nuove impostazioni per le animazioni. Always Animate è sempre attivo anche quando sei fuori dallo schermo.
Cull Update Transforms: Retarget, IK e write of Transforms sono disabilitati quando i renderer non sono visibili.
Cull Completely: L'animazione viene completamente disabilitata quando i renderer non sono visibili.

La casella delle informazioni nella parte inferiore del componente Animator fornisce una ripartizione dei dati utilizzati in tutte le clip dal Animator controller. Una clip di animazione contiene dati sotto forma di "curve", che rappresentano il modo in cui un valore cambia nel tempo. Queste curve possono descrivere la posizione o la rotazione di un oggetto, la flessione di un muscolo nell'animazione umanoide o altri valori animati all'interno della clip. Qui sotto viene spiegato come viene rappresentato ogni dato:
Clip Counter: Il numero totale di clip di animazione utilizzate dal Animator controller.
Curve (Pos, Rot e Scala): Il numero totale di curve utilizzate da Unity per animare la posizione, la rotazione o la scala di GameObjects. Questi sono per GameObjects animati che non fanno parte di un rig umanoide standard. Quando si anima un avatar umanoide, queste curve mostrerebbero un conteggio per ossa non muscolari extra come una coda, un panno fluttuante o un ciondolo penzolante. 
Muscles: il numero di curve di animazione muscolare utilizzate per l'animazione umanoide. Oltre ai movimenti muscolari standard per tutte le ossa umanoidi nell'avatar standard di Unity, questo include anche due "curve muscolari" che memorizzano la animazione di posizione e rotazione dell root motion
Generic: il numero di curve numeriche (mobili) utilizzate dall'animatore per animare altre proprietà come il colore del materiale.
PPtr:	il conteggio totale di sprite di animazione (utilizzati dal sistema 2d di Unity)
Curves Count: il numero totale combinato di curve di animazione
Constant: il numero di curve di animazione ottimizzate come valori costanti (immutabili). Unity lo seleziona automaticamente se i file di animazione contengono curve con valori immutabili.
Dense: il numero di curve di animazione ottimizzate utilizzando il metodo "denso" di memorizzazione dei dati (valori discreti interpolati linearmente). Questo metodo utilizza meno memoria in modo significativo rispetto al metodo "stream".
Stream: il numero di curve di animazione che utilizzano il metodo "stream" di memorizzazione dei dati (valori con tempo e dati tangenti per l'interpolazione curva). Questi dati occupano molta più memoria rispetto al metodo "dense".
