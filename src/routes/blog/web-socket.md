
---
id: 2022-10-26-1
titolo: Web Socket
featured: true
autore: Matteo Solavagione
data: 2022-10-26
cover: socket.png
introduzione: Analisi tecnica, utilizzi e esempio di realizzazione di applicazione
sezione: Blog
categorie: 
  - Che cos'è WebSocket
  - Come funziona
  - A cosa serve
  - Dove è già implementato
  - Esempio di applicazione 
---

# Che cos'è WebSocket
WebSocket non è altro che un protocollo di rete basato su TCP per scambiare i dati con una **connessione bidirezionale in modo simultaneo** (c.d. full duplex) tra due punti finali di comunicazione, che sono chiamati socket. E’ un protocollo molto affidabile ed efficace per cui viene utilizzato dalla quasi totalità dei client. Presenta il vantaggio che **i dati vengono visualizzati rapidamente**. In particolare consente una comunicazione diretta tra un’applicazione web e un server WebSocket in modo da richiamare una pagina web e visualizzarla in “tempo reale”.

# Come funziona
Per capire come funziona basta pensare a come vengono trasferiti i dati senza il suo utilizzo. Di solito, per caricare le pagine web nel browser su Internet si utilizza una **connessione HTTP**: il nostro client fa una richiesta al server ad esempio con un click e solo allora (dopo un certo lasso di tempo) il server può fornire le risposte.
Con WebSocket si accorciano i tempi notevolmente: è sufficiente che il client apra la connessione a un server web, che viene stabilita con **l’handshake del protocollo WebSocket, dopodiché il canale di comunicazione rimane aperto**. Il server può diventare attivo da solo e fornire al client tutte le informazioni senza attendere le richieste. Basti pensare ai messaggi push sui siti web che funzionano così: se ci sono nuove informazioni dal punto di vista del server, questo le comunica al client senza alcuna richiesta extra da parte del client.
WebSocket può essere inteso come un canale di comunicazione aperto, in cui una connessione attiva è tale dopo un iniziale handshake tra client e server, senza più fare affidamento sull'apertura di più connessioni HTTP.

# A cosa serve
WebSocket viene utilizzato ogni volta che è necessaria una **connessione rapida con una bassa latenza** come nel caso di una live chat di assistenza, operazioni sulla Borsa valori e *virtual games*.
Anche i social media ne traggono beneficio, consentendo collegamenti in diretta con altre persone e lo scambio di messaggi immediati. 
Esempi di utilizzo:
* Giochi online
* Piattaforme di vendita e acquisto come eBay
* Chat di assistenza
* Aggiornamenti dai social media
* Notiziari sportivi in tempo reale
* Sistemi di trading

# Dove è già implementato
Per utilizzare WebSocket, è necessario un web browser aggiornato:
1. Internet Explorer dalla versione 10
2. Firefox dalla versione 6
3. Chrome dalla versione 14
4. Opera dalla versione 12.10
5. Safari dalla versione 6
Lato server, WebSocket può essere implementato con i seguenti linguaggi di programmazione e framework:
* Node.js
  * Socket.IO
  * WebSocket-Node
  * ws
* Java
  * Jetty
  * Ruby
  * EventMachine
* Python
  * pyWebSocket
  * Tornado
  * Erlang
  * Shirasu
* C++
  * libWebSockets
  * .NET
  * SuperWebSocket

  # Esempio di applicazione
  Per aprire una connessione WebSocket dobbiamo creare un oggetto WebSocket tramite il comando  new WebSocket("ws://javascript.info").
Durante la richiesta di connessione il browser domanda al server se supporta Websocket e se il server risponde affermativamente allora la chiamata prosegue sul protocollo WebSocket.
Una volta che il socket è creato si possono presentare in totale 4 eventi:
open – connection stabilita
message – il server ha inviato dei dati al client
error – errore di connessione
close – connection chiusa.
Una volta stabilita la connessione con successo, per inviare dei dati si può utilizzare la funzione socket.send(data).
Ecco un esempio:
```javascript
let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");
 
socket.onopen = function(e) {
  alert("[open] Connection established");
  alert("Sending to server");
  socket.send("My name is John");
};
 
socket.onmessage = function(event) {
  alert(`[message] Data received from server: ${event.data}`);
};
 
socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    alert('[close] Connection died');
  }
};
 
socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
};
```
Spero che questo post dedicato al WebSocket vi sia stato utile. Per qualsiasi dubbio scrivi pure un commento. Alla prossima e buon smanettamento!





