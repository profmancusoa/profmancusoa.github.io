---
id: 2022-10-27-1
titolo: Come creare una To-Do List in Svelte
featured: false
autore: Simone Laudani
data: 2022-11-06
cover:  cover.webp
introduzione: Vediamo come usare il framework Svelte per creare una semplice ToDo List app
pubblicato: true
sezione: Web Development
categorie:
  - Svelte
  - Java Script
  - Front End
  - Web Development
---
Sapresti realizzare una pagina che comprenda una to do list in una pagina web? No? Ti do una mano io!

Se ti è mai capitato di tornare a casa dopo aver fatto la spesa e tirarti maledizioni addosso perchè per l’ennesima volta ti sei scordato di comprare il latte, questo semplice programma farà al caso tuo. Stiamo parlando, infatti, di un software che ci permette di aggiungere elementi ad una lista puntata, permettendoci di sbarrarli o di eliminarli a nostro piacimento.

I suoi utilizzi possono essere svariati e spaziano da una banalissima lista della spesa agli esercizi da fare in palestra, piuttosto che i compiti da fare per la settimana.

Anche Microsoft e Google non si sono smentite e hanno creato la loro versione di questo programma. La prima ha creato addirittura una applicazione apposita ed un sito web dedicato (https://to-do.live.com/tasks/) , che permette a più utenti di collaborare; ha un menù che facilita di molto l’utilizzo e vanta anche l’integrazione negli altri prodotti marchiati Microsoft, come il “calendario”  ed Outlook. Big G, invece, ha un’ attitudine un po’ più semplicistica e propone solamente un’app per iOS ed Android puntando molto sull’integrazione di “Tasks” nei loro software di punta, come Google Calendar o Gmail.

Se i prodotti offerti da due delle software house più importanti del XXI secolo non ti ispirano e  hai tanto tempo libero per sviluppare una To-Do List tutta tua, scopriamo subito assieme come fare!

## Cos’è Svelte?
Svelte è un framework front-end e open-source di JavaScript che permette di svillupare con molta facilità pagine web interattive. Il concetto alla sua base è simile a quello di altri framework, ma aggiunge tre principali feature:
- Niente DOM virtuale
- Pagina completamente “reactive”
- Meno codice da scrivere

## Installiamo Svelte

Innanzitutto è necessario installare Svelte (https://svelte.dev/), un framework JavaScript rivoluzionario nel suo genere. Per farlo basta aprire il terminale ed eseguire i seguenti comandi: 
 ```bash
npm create vite@latest myapp -- --template svelte

cd myapp

npm install
npm run dev
```

Fatto! Dovrebbe essere comparsa una schermata simile a questa:

![todolist](/img/posts/come-creare-una-to-do-list-in-svelte/svelte1.png)

Segui l’indirizzo indicato, nel mio caso è http://localhost:5173/. Se tutto è andato come previsto, dovresti essere in un sito web funzionante e dovrebbe essere stata creata una cartella chiamata “myapp” nella posizione in cui hai eseguito i comandi dal terminale.

A questo punto abbiamo un sito funzionante, ma siamo ancora lontani da quello che desideriamo ottenere. Apri la cartella “myapp” con VSCode e, se richiesto, installa l’estensione di Svelte.
So che la varietà di file nella cartella potrebbe far paura, ma non vi spaventate : è sufficiente entrare nella cartella “src” ed aprire il file “App.svelte”. Potete cancellare tutto quello che c’è dentro.

## Creiamo la lista To-Do

Perfetto! Siamo pronti per scrivere qualche linea di codice. Partiamo dalla parte logica, usando il tag `<script>` per aprirla. 

Dichiariamo una variabile con una stringa vuota ed un nuovo oggetto contenente le opzioni default che appariranno ogni volta che apriremo il sito.
Creiamo quindi una funzione Add che si occuperà di aggiungere i valori alla lista. Per farlo, assegnamo all'oggetto di prima un nuovo valore contenente come testo la precedente variabile vuota  ed uno status di false: questo farà apparire un nuova riga alla nostra  lista, riga che non sarà barrata.

Ovviamente, dobbiamo anche permettere di rimuovere le linee. Per farlo aggiungiamo una funzione passandole un valore di index. Usiamo il metodo “splice” sull’oggetto che contiene tutti i “To-Do” dell’utente e assegnamola a sè stessa per aggiornarne il valore.

Una funzione opzionale, ma carina da vedere, è quella di disabilitare il tasto di aggiunta nel caso l’input sia vuoto. Per ora, creiamo una nuova funzione che un controllo sulla pienezza del campo di input.

Ottimo lavoro! Possiamo chiudere la parte logica con `</script>`. Se hai seguito fino ad ora il tutorial, dovresti avere qualcosa che assomiglia a questo:

```Svelte
<script>
  let newToDo = '';
  let ToDoList = [
    {text: 'Fare la spesa', status: true},
    {text: 'Chiamare Andrea', status: false}
  ];
 
  function Add(){
    ToDoList = [...ToDoList, {text: newToDo, status: false}]
    newToDo = '';
    console.log(ToDoList);
  }
 
  function isEmpty(newToDo){ //disabling the button if the input is empty
    return newToDo == '';
  }
 
  function removeFromList(index) {
    ToDoList.splice(index, 1)
    ToDoList = ToDoList;
  }
</script>
```

Creiamo il bottone che ci permetterà di aggiungere elementi alla nostra lista sfruttando le capacità di Svelte. Grazie a ":bind" possiamo aggiornare un elemento in real time in una sola riga e in un’ulteriore riga, solo una, possiamo chiamare la funzione “isEmpty” creata prima per disattivare il bottone nel caso in cui il campo dell’input sia vuoto. Ecco come dovrebbe apparire questo spezzone di codice:
```HTML
<div>
  <input bind:value={newToDo} placeholder="Add an item" type="text">
  <button on:click={Add} disabled='{isEmpty(newToDo)}'>Add</button>
</div>
```

Creiamo quindi un container in un div, sfruttando la capacità di Svelte di creare dei cicli per accedere all’array sviluppato nella parte logica. Usiamo quindi delle funzionalità di HTML basilari per concludere la parte grafica della nostra lista To-Do.

Usa il CSS per decorare il sito a tuo piacimento. Ecco a cosa quest'ultima parte di codice dovrebbe assomigliare:
```Svelte
<div class="container">
  {#each ToDoList as element, index}
    <br />
    <div class="check">
      <input bind:checked={element.status} type="checkbox">
    </div>
    <div class="todo">
      <span class:done="{element.status}">{element.text}</span>
    </div>
    <div class="button-delete">
      <button class=delbutton on:click={() => removeFromList(index)}>DELETE</button>
    </div>
    <br />
  {/each}
</div>
 
<style>
  .check{
    box-sizing: border-box;
    border: 1px solid cyan;
    width: 10%;
    float:left;
  }  
  .container {
    border: 1px solid yellow;
  }
  .todo {
    box-sizing: border-box;
    border: 1px solid red;
    width: relative;
    float:left;
    text-align: left;
  }
  .button-delete {
    box-sizing: border-box;
    border: 1px solid green;
    width: relative;
    float: right;
  }
 
  .done {
    text-decoration: line-through;
    color: gray;
 
  }
  .delbutton {
    font-size: 10px;
    padding: 5px;
    color: crimson;
    background-color: rgb(24, 3, 6);
    float:left;
  }
  :disabled{
    opacity: 0.6;
    cursor: not-allowed;
  }
</style>
```

NOTA BENE: in questo ultimo spezzone sono presenti delle classi in CSS che si occupano di creare dei rettangoli attorno ad ogni elemento della lista, per far saltare all’occhio la divisione di ogni oggetto e permetterti di allineare senza alcun problema gli elementi a tuo piacimento. Dovrebbe apparire proprio come questa schermata:

![todolist](/img/posts/come-creare-una-to-do-list-in-svelte/todolist2.png)

## Risultato

Allego la mia versione finale ed ultimata del codice. Per accedervi, clicca sul link che trovi qui sotto.

- <a href="https://github.com/Bauda/Svelte-To-Do" target="_blank" title="svelte to-do list">La mia versione finale</a>

Grazie per la lettura!