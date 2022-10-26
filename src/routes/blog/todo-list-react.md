---
id: 2022-10-26-1
titolo: Todo List React
featured: false
autore: Dario Ruggieri
data: 2022-10-26
cover: cover.webp
introduzione: Post dedicato ad una Todo List realizzata in React
pubblicato: false
sezione: IT
categorie:
  - framework
  - JS
  - applicazioni
---

# Todo List React

## Introduzione

[React](https://reactjs.org/), Svelte, Angular… Questi sono solo alcuni dei più famosi framework Javascript che il WEB ci mette a disposizione. Ma cos’è un framework? Con la crescita e la diffusione delle nuove tecnologie è sempre più richiesto lo sviluppo di applicazioni grandi e complesse, sarebbe, quindi, inimmaginabile sviluppare in JS _vanilla_ (puro). Per questo motivo sono stati creati dei tool (chiamati framework) che offrono una struttura (skeleton) sulla quale i programmatori possono costruire la loro applicazione. L’utilizzo di questi strumenti permette innanzitutto lo snellimento del codice, ma soprattutto la possibilità di evitare quell’enorme quantità di problemi che si incontrerebbero nello sviluppo in puro JS. Una buona organizzazione, inoltre, è alla base della sicurezza dell’applicazione. Sicurezza che ai giorni nostri è un tema molto importante (più volte in classe abbiamo discusso su questo tema durante le lezioni di Educazione Civica) e per questo motivo non va trascurato. Dopo questa premessa è importante però sottolineare che l’utilizzo di questi strumenti richiede la conoscenza di Javascript e per questo motivo l’articolo è rivolto a coloro che ne conoscono almeno le basi.
Il modo migliore per conoscere uno strumento è **utilizzarlo**. L’articolo che segue ha un approccio pratico: vuole, infatti, descrivere gli elementi fondamentali di React attraverso una piccola applicazione JS da me sviluppata [(disponibile su Github)](https://github.com/Dario-Ruggieri/ToDo_React.git) che implementa una ToDo List.

## Come React gestisce il DOM

React gestisce il DOM (albero degli oggetti che caratterizzano la pagina) attraverso un DOM virtuale (_VirtualDOM_). Quando modifichiamo qualcosa nella pagina, infatti, viene modificato il DOM Virtuale e se React ritiene la modifica necessaria, allora viene modificato il DOM reale della pagina. Questo concetto è ben descritto dalla seguente immagine:
![This is an image](/img/posts/todo-list-react/virtualDOM.png)

## Creare l’ambiente corretto per lo sviluppo in React

Esitono diverse modalità per utilizzare React. È possibile integrarlo direttamente nella pagina HTML oppure tramite semplici comandi da terminale (sotto riportati) React permette di creare un ambiente di sviluppo già organizzato sul quale costruire la propria applicazione.
Di seguito i comandi del terminale per [creare un nuova applicazione](https://reactjs.org/docs/create-a-new-react-app.html) in React:

```bash
$npx create-react-app nome_applicazione
$cd nome_applicazione
$npm start
```

## Componenti

Uno dei principali paradigmi di programmazione è la tecnica del top down, che prevede la suddivisione di un macro problema in piccoli sottoproblemi che a loro volta saranno suddivisi con la stessa tecnica. React si basa su questo pensiero. Permette, infatti, di creare i **componenti**: elementi che svolgono una funzione specifica e che messi insieme (è possibile usare un componente all’interno di un altro componente) permettono di creare applicazioni complesse a piacere. Una volta creati possono essere poi “appesi” a uno o più tag del file HTML.
Per la realizzazione della ToDo List ho creato tre componenti: _App.js_, _Todo.js_ e _Form.js_. Ognuno di questi componenti ha un compito differente: _Todo.js_ ha lo scopo di gestire tutte le todo (task) che l’utente ha aggiunto; _Form.js_ si occupa di gestire la parte di form che permette all’utente di inserire una nuova task; _App.js_ è il componente che utilizza _Todo.js_ e _Form.js_ e che viene appeso dal file _index.js_ nel DOM Virtuale. Nel file _index.js_, infatti, viene restituito il componente _App_ attraverso il seguente codice:

```JS
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   {/* In questo modo passiamo l'array di dati al componente nel prop tasks */}
   <App  tasks ={DATA}/>
 </React.StrictMode>
);

```

Come si può vedere creiamo una variabile _root_ alla quale assegnamo l’espressione che dal ReactDOM (DOM Virtuale di React) prende l’elemento con id _root_. Nella variabile _root_ renderizziamo (ovvero, mettiamo al suo interno) il componente _App_ a cui in questo caso passiamo un’array di dati (_DATA_) che assegnamo alla variabile _tasks_. I componenti, infatti, permettono il passaggio da padre a figlio dei cosidetti _props_ (properties/parametri) che potranno poi essere utilizzati dal componente figlio.

### Creare un componente

Un componente si crea nel seguente modo:

```JS
import React from 'react';

function Component_Name(props){
	return(       // something
);

}
export default Component_Name;

```

L’istruzione _export_ permette di esportare il componente che poi può essere importato all’interno di un altro componente nel sequente modo:

```JS
import Component_Name from <component_path>;

```

## Renderizzazione dei componenti

Come abbiamo appena visto, un componente è caratterizzato dal _return()_. Al suo interno React si aspetta ciò che il componente vuole restituire e quindi ciò che sarà visualizzato:

```JS
import React from 'react';


export default function Todo(props){

   return(
       <div>
           <li id={props.id} className="li_element">
               {props.name}
               <button type="button" onClick={() => props.deleteTask(props.id)}>
                   Delete
               </button>
           </li>
       </div>

   )
}

```

Il componente _Todo_ restituisce un _div_ che al suo interno contiene gli elementi _li_ e _button_. All’interno di _li_ è presente _props.name_ che contiene il testo della todo inserita dall’utente. Testo che viene passato come parametro (props) nella chiamata di _Todo_ da parte del componente _App_. Stesso meccanismo con il button che ha come valore assegnato all’attributo _onClick_ la funzione _props.deleteTask(props.id)_, funzione che come il “name" viene passata per parametro.

## Props

Nel paragrafo precedente abbiamo accennato ai props che ora andremo ad analizzare. Ogni componente ha i propri _props_. I _props_, o parametri, sono valori che un componente può passare ad un altro componente nella chiamata di quest'ultimo. Parametri che possono assumere qualsiasi valore (anche funzioni). Un esempio di passaggio dei props all’interno di una chiamata è il seguente:

```JS
   <App  tasks ={DATA}/>

```

## Gli Eventi - useState

Durante lo sviluppo della ToDo List uno dei problemi principali che ho riscontrato è stato quello di renderizzare nuovamente la pagina in seguito alla modifica dell’array contenente le todos. Sostanzialmente, all’aggiunta o alla rimozione di un todo l’array viene aggiornato, al contrario della pagina per la quale non viene renderizzato il cambiamento. In questo modo l’utente non può visualizzare la modifica. Per gesitre questi tipi di problemi React mette a disposizione _useState_ che permette di modificare l’array e rendere questa modifica un evento che rirenderizzi la pagina. Ovviamente _useState_ va importato e lo si fa tramite la seguente linea di codice:

```JS
import React, { useState } from "react";

```

Di seguito un esempio di utilizzo di useState direttamente dalla mia ToDo List:

```JS
import React, { useState } from "react";
import { nanoid } from "nanoid"; // tool che mi permette di aggiungere
//gli id ai task
import Todo from './components/Todo';
import Form from './components/Form';

function App(props) {
 const [tasks, setTasks] = useState(props.tasks);
 function addTask(name){
   if(name){
     const newTask = {id: `todo-${nanoid()}`, name} //non va name:name ?
     setTasks([...tasks, newTask]);
   }

 }
 function deleteTask(id) {
   const remainingTasks = tasks.filter((task) => id !== task.id);
   setTasks(remainingTasks);
 }
 // In tasklist scandiamo ogni elemento dell'array tasks (passato dall'index.js) e su ogni elemento
 // task chiamiamo il compopnente todo a cui passiamo per ogni task nome, id e assegnamo una chiave
 //(richiesta da React) ad ogni task. Il map è un po' come fosse l'each che abbiamo visto in Svelte
 const taskList = tasks.map((task) => <Todo id={task.id} name={task.name} deleteTask={deleteTask} key={task.id}/>);
 return (
   <div className="App">
     <h1>ToDo List React</h1>
     <Form addTask={addTask}/>
     <ul>
       {taskList}
       {/* <Todo name="Studiare Latino" id="todo-0"/>
       <Todo name="Studiare Matematica"id="todo-1"/>
       <Todo name="Creare una Todo in React" id="todo-2"/> */}
       {/* <li>Studiare Matematica</li> */}
     </ul>
   </div>
 );
}

```

Come dall’esempio, creo una variabile _taskList_ che contiene tutte le todos. Per farlo scandisco l’array _tasks_ attraverso il metodo _map_ e per ogni todo/task chiamo il componente _Todo_ che restituisce la task nel formato da me voluto. Una volta creato l’array di task questo viene stampato e renderizzato nella pagina: _taskList_.
Per capire al meglio il codice sopra riportato è necessario analizzare una funzione presente nel componentne _Form_. Essa viene invocata alla pressione del _button_ e a sua volta chiama un’altra funziona passata come props dal componente _App_: _props.addTask(name)_ :

```JS
   function handleSubmit(e) {
       e.preventDefault();
       props.addTask(name); //Utilizzo la funzione addTask che è stata
       //passata come parametro dal componente App
       setName(''); //Una volta preso il valore, svuoto l'input
     }


```

La funzione _addTask_ è definita all’interno del compomente _App_ e aggiorna l’array tasks attraverso il metodo _setTasks_. L’array “tasks” e il metodo _setTasks_ vengono creati dalla seguente linea di codice:

```JS
 const [tasks, setTasks] = useState(props.tasks);
```

Creo quindi un array “tasks” (che contiente i tasks ricevuti dall’_index.js_ come parametro (_props.tasks_). Array che ha un metodo che mi permette di modificarlo: _setTasks_:

```JS

     setTasks([...tasks, newTask]);
```

Nella funzione _addTask_ chiamo, infatti, il metodo _setTasks_ per modificare l’_array_ (il codice sopra riportato aggiunge una linea all’array _tasks_). Una volta modificato _React_ riconosce il cambiamento e adatta la pagina in relazione alla modifica.

## Conclusione

Gli elementi che abbiamo analizzato in questo articolo sono solo alcuni degli infiti che _React_ mette a disposizione. Sono però un perfetto punto di partenza per sviluppare le tue prime applicazioni in _React_ (per approfondire consultare i [Docs](https://reactjs.org/docs/getting-started.html)).
Non mi rimane che augurarvi buon smanettamento e alla prossima!!
