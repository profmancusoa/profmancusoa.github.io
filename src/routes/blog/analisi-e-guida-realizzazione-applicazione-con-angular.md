---
id: 2022-10-27-1
titolo: Analisi e guida realizzazione applicazione con Angular
featured: false
autore: Matteo Sola e Francesco Zaina
data: 2022-11-07
cover: cover.webp
introduzione: "Realizziamo una semplice ToDo list in Angular.js"
pubblicato: true
sezione: IT
categorie:
  - Programmazione
  - Front-en
  - Angular
  - Framework
---


# **Analisi dei tool esistenti e guida alla realizzazione di un’applicazione To Do List in Angular**

## **Tool che cos’è? To Do List cos’è?**
*Cos’è un tool?*
La traduzione in italiano è “strumento/utensile”, noi informatici non lo conosciamo così, ma come un programma o insieme di programmi che hanno un compito preciso, utili per un determinato scopo.

*Cos’è una To Do List?*
Da alcuni anni a questa parte si è diffuso un nuovo strumento di produttività personale più semplice ed efficace, la to do list. E’, come ricorda la parola inglese, una vera e propria lista che aiuta a focalizzare e fare ciò che una persona si è prefissata. Quindi non è solo un modo di organizzare la vita, ma è concepito per organizzare scadenze, priorità ed urgenze, soprattutto in ambito lavorativo.
## **I tool esistenti**
Su Internet troviamo varie tipologie di tool differenti per la creazione di una to do list, uno dei migliori è “Remember The Milk” (RTM), che si integra perfettamente con i principali programmi di messaggistica istantanea, permettendo alla persona di inserire facilmente nuove attività e ricevere notifiche per le attività in scadenza. Tra gli altri tool ricordiamo “NowDoThis”, “Gmail Tasks”, “Nozbe” e “Toodledo”. 
## **Guida: applicazione to do list in Angular**
Per la creazione di una to do list con *Angular* partiamo dal presupposto che deve essere installato *Firebase CLI*; lo si può fare aprendo il terminale e digitando il comando: 

```bash
npm install -g firebase-tools
npm install -g @Angular/cli
```

Come editor di testo può essere utilizzato *Visual Studio Code*.

Prima di tutto vai sulla console di Firebase e crea un nuovo progetto, clicca su *Aggiungi Firebase* all’applicazione web e copia il contenuto in un file di testo che ti servirà successivamente.

Nella sezione Database del menu c’è la prova Firestore in versione beta. Successivamente selezioniamo avvia in modalità di prova.
Nella schermata successiva seleziona aggiungi raccolta e in seguito aggiungi 2 campi con valori di default, ora il database è pronto per interagire con Angular.

Prima di tutto genera il tuo progetto usando Angular CLI ed esegui il comando: 

`ng new todolist`

Una volta completato il setup, spostati nella cartella todolist ed esegui i seguenti pacchetti necessari alla comunicazione con Firebase: 

```bash
npm install Angularfire2 firebase --save
ng new todolist
```

Una volta completato il setup spostiamoci nella cartella to do list ed eseguiamo i seguenti pacchetti necessari alla comunicazione con Firebase: 

`npm install Angularfire2 firebase --save`.

A questo punto apriamo l’editor di testo e creaiamo un file .ts nella cartella dove è stato effettuato il salvataggio durante la fase di configurazione di Firebase.
Adesso impostiamo il modulo app.module.ts che si trova nella stessa cartella e apriamo il modulo app.component.ts per verificare se il collegamento al Firebase funziona come dovrebbe. Apriamo il modulo app.component.ts per verificare se il collegamento al Firebase funziona come dovrebbe.

Definiamo due proprietà:
- todos Collection
- todos (l’array che ci viene ritornato)

Nella funzione ngOnInit, fare un bind di todosCollection all’istanza di *AngularFirestore* usando il metodo .collection al quale occorre passare il nome della raccolta (todos).
Ora è opportuno un bind di todos a *todosCollection* e usare il metodo `.valuechanges()` che ritornerà un “observable”. Successivamente, nel modulo app.component.html sarà possibile fare apparire i contenuti presi da Firebase.
Adesso è arrivato il momento di aggiungere i to-do.

Sempre in app.component.html aggiungiamo il markup del form.
In app.component.ts dovremo creare la proprietà description, che servirà per fare il 2-way data binding al *ngModel*, poi passiamo alla funzione il valore di ngModel, mentre per quanto riguarda il parametro ‘done’ bisognerà introdurre false di default.
È arrivato il momento di spuntare i todo, per farlo avremo bisogno di selezionare un singolo todo dal database, ma attenzione! Allo stato attuale utilizzando `.valueChanges()`, non si ha la possibilità di ottenere l’id di ogni singolo to-do, perché è considerato un metadata.
Per ottenere questo risultato bisognerà apportare un po’ di modifiche al nostro codice.

Sotto l’interfaccia Todos aggiungiamone una nuova che estende quest’ultima.
A questo punto bisogna ridefinire this.todos allo `ngOnInit()` per poter usare `.snapshotChanges()` che, differentemente dal precedente metodo, restituisce anche diversi metadata che includono l’id del todo. Ovviamente bisognerà modificare anche il template.
Si deve aggiungere una *checkbox* che permetterà di segnare un’attività come completata oppure no.  A questo punto impostare “checked” se il valore di todo.data.done è uguale a true: al change eseguire invece la funzione `updateTodo()`, passando l’id e l’evento scatenato al change. Infine, impostare una classe done, se todo.data.done è true.
Nel *template*, all’interno del ciclo “for”, aggiungi il bottone che permetterà di cancellare i tuoi to-do.

Esso mostra il bottone esclusivamente se il todo è “checkato”. Ora, ovviamente, passiamo alla funzione id. Utilizzeremo il metodo `.delete()` così i nostri to-do verranno cancellati dalla lista.
Deployare è un’app che funziona sfruttando l’hosting che ci offre Firebase. E’ molto semplice, bastano pochi semplici passi: andare alla sezione Hosting all’interno della nostra console di Firebase e cliccare su “inizia”. L’applicazione suggerisce di installare la sua CLI. Se non ancora fatto, installarla e cliccare su “continua”.
Nel secondo passaggio vengono fornite tutte le istruzioni per poter procedere con il deploy. Quando si lancerà il comando firebase init, se non si conoscono molto bene i funzionamenti delle configurazioni di Firebase, il consiglio è quello di selezionare solo l’opzione hosting, per evitare confusione con tutte le configurazioni che Firebase mette a disposizione.
In questo modo si può creare un’applicazione to do list in Angular.
