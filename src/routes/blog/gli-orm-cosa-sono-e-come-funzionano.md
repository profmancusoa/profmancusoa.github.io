---
id: 2022-10-26-1
titolo: Gli ORM cosa sono e come funzionano
featured: false
autore: Marco Garabello
data: 2022-10-26
cover: cover.webp
introduzione: Questo articolo spiega cosa sono gli ORM, come funzionano e fà una brebe introduzione a Prisma
pubblicato: true
sezione: IT
categorie:
  - ORM
  - database
  - Prisma
  - Javascript
  - Back End
  - Linux CLI
---

#### Tempo di lettura: 20'
#### Tempo di realizzazione: 240'

## Introduzione

Qual è il metodo più usato per creare un database? Una breve ricerca online darà come risultato SQL (_Structured Query Language_), ovvero un linguaggio che permette di creare, aggiornare e ottenere dei dati all’interno di un _database_. Questo linguaggio presenta, tuttavia, dei problemi non facilmente aggirabili senza aiuti esterni. Alcuni di essi sono gli ORM, argomento principale di questo articolo.


## Cos’è un ORM

ORM (_Object Relational Mapping_) a livello astratto è una tecnica che permette ad un linguaggio di programmazione basato sul paradigma ad oggetti di manipolare e ottenere informazioni da un database relazionale. Tuttavia, quando più comunemente si parla di ORM ci si riferisce ad un _tool_ che realizza questa tecnica.

<center>
  <img src="/img/posts/gli-orm-cosa-sono-e-come-funzionano/orm.webp" alt="Schema ORM"/>
</center>

Un ORM può assumere vari aspetti da una semplice libreria (come SQLite) fino ad un pacchetto assestante.


## Perché usare un ORM e come funziona

Probabilmente esiste almeno un ORM per ogni linguaggio di programmazione ad oggetti, bisogna quindi non fare l’errore di affiancare questo argomento ad un solo linguaggio, tuttavia, per rimanere costanti, da qui in avanti verrà discussa l’interazione tra un ORM e il linguaggio _Javascript_.

Al giorno d’oggi quasi tutte le pagine web hanno una componente Javascript che realizza la sua logica. Molte volte questa ha necessitàn di interagire con un database, ma SQL non è integrato in Javascript e quindi quest’ultimo non permette nativamente questa operazione. In passato per superare questa barriera venne implementata una tecnica, ancora ampiamente utilizzata nei giorni odierni, che sfrutta AJAX (_Asynchronous Javascript And XML_) per ottenere e manipolare i dati tramite delle query scritte in _PHP_ e chiamate dal codice in Javascript: Lo schema logico è il seguente:

<center>
  <img src="/img/posts/gli-orm-cosa-sono-e-come-funzionano/ajax.webp" alt="Schema AJAX"/>
</center>
<br><br>
<center>
  <img src="/img/posts/gli-orm-cosa-sono-e-come-funzionano/ajaximg.webp" alt="Schema AJAX"/>
</center>
<br>

Ma questo processo è molto inefficiente e rischioso, dato che il programmatore, oltre a scrivere codice in Javascript, deve preoccuparsi anche di scrivere _query_ e codice in PHP, rendendo così il lavoro più lungo e aumentando la possibilità di commettere errori.

Invece un ORM permette di interagire in maniera più efficiente e meno rischiosa col database, scrivendo lui stesso tutte le query e il codice necessario ad interagire con la base di dati e incapsulandolo in alcuni metodi che restituiscono oggetti, i quali poi verranno chiamati dal codice Javascript. In questo modo il programmatore non deve occuparsi dell’interazione con il database e può utilizzare i suoi dati come un qualsiasi oggetto del linguaggio di programmazione.<br>
Lo schema logico è il seguente:

<center>
  <img src="/img/posts/gli-orm-cosa-sono-e-come-funzionano/ormschema.webp" alt="Schema ORM"/>
</center>
<br><br>
<center>
  <img src="/img/posts/gli-orm-cosa-sono-e-come-funzionano/ormimgtwo.webp" alt="Schema ORM"/>
</center>
<br>

Inoltre un ORM, scrivendo lui stesso le query, rimuove molte vulnerabilità causate da eventuali controlli non effettuati nella query o errori simili. Una di queste debolezze rimosse è quella sfruttata da un attacco _SQL injection_, ovvero un attacco informatico che punta ad aggirare la query “_iniettando_” dentro di essa codice SQL valido e sempre vero (come ad esempio 1 = 1).


## Una breve introduzione a prisma

Prisma è un ORM, basato su NodeJS e Typescript, composto da tre elementi fondamentali:
  - **Prisma Client**: un costruttore autogenerato di query in base allo _schema_
  - **Prisma Migrate**: un sistema che permette di aggiornare il database in base allo _schema_
  - **Prisma Studio**: un’interfaccia grafica che permette di visualizzare e modificare i dati all’interno di un database

Ma cosa è lo _schema_? Semplice, è ciò che Prisma usa per generare il database, gestire le tabelle in esso e scrivere le query per l’ottenimento dei dati. Volendo, il database lo si può descrivere integralmente nello schema e poi Prisma tramite _**Prisma Migrate**_ genererà automaticamente il codice necessario a crearlo.

Per creare un progetto in Prisma basta eseguire, dopo essersi assicurati di avere l’ultima versione stabile di _NodeJS_ o _Typescript_, i seguenti comandi:

```console
$ npm init -y
$ npm install prisma typescript ts-node @types/node --save-dev
$ npx prisma init

```
Dentro la cartella prisma sarà presente lo schema:

```prisma
generator client {
  provider = "prisma-client-js" //tipo di client
}
datasource db {
  provider = "sqlite" //DBMS
  url      = env("DATABASE_URL&quot") //variabile d’ambiente contenente l’url del DB
}
```

All’interno di questo file dovremo definire le tabelle del nostro database, con annesse le relazioni
fra di esse. Per fare ciò si usa la parola chiave model, ecco un esempio:

```prisma
model User {
    id Int @id @default(autoincrement())
    name String
    surname String
    age Int
}

```
Una volta che lo schema ci soddisfa basterà eseguire il comando:

```console
$ npx prisma migrate dev –-name &lt;migration_name&gt;
$ npm install @prisma/client

```

Fatto ciò basterà importare il prisma client in Javascript e il gioco sarà fatto. Spero di esservi stato
utile.

Per informazioni più specifiche e complete, guardare sempre la documentazione ufficiale: <a href="https://www.prisma.io/docs/" target="_blank">https://www.prisma.io/docs/</a>