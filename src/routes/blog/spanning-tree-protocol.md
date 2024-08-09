---
id: 2022-11-15-12
titolo: Spanning-tree Protocol
featured: false
autore: Luca Bortoluzzi
data: 2022-11-15
cover: cover_stpa.webp
introduzione: Introduzione allo Spanning-tree Protocol
pubblicato: true
sezione: Blog
categorie:
  - Protocols
  - Technology
  - Networking
  - Switching
---



### A cosa serve?

Il protocollo Spanning Tree è un protocollo di rete che consente di creare una topologia di rete fisica loop-free. Lo spanning tree viene utilizzato per 
evitare che i pacchetti circolino in loop infiniti all&#39;interno della rete. 

Il protocollo consente di selezionare un percorso principale tra due nodi 
qualsiasi all&#39;interno della rete e di inoltrare il traffico di rete solo su questo percorso. Ciò consente di ridurre il traffico di rete inutile e di 
migliorare l&#39;efficienza della rete.


### Il Broadcast storming


Il protocollo spanning tree è anche utilizzato per prevenire gli effetti negativi del broadcast storm. I broadcast storm 
si verificano quando un pacchetto viene inoltrato in modo errato e viene inoltrato a tutti i nodi della rete. Ciò può causare 
un sovraccarico di traffico e un&#39;interruzione delle comunicazioni.


### Come funziona lo spanning-tree protocol?

Il funzionamento dello STP si può spiegare per passaggi:

1. Aquisizione dei *bridgeID* degli switch all’interno della rete.
2. Selezione *root-bridge* (tutte le porte del root-bridge sono designated-
port)
3. Identificazione delle porte degli altri switch: 
   - *root-port*(RP) 
   - *designated-port*(DP)
   - *blocked-port*(BP)

- Le RP si identificano dal minor costo del percorso, che dalla porta dello switch interessato raggiunge il RB.


- Le DP si identificano per esclusione, dato che una delle due porte in un collegamento tra switch (segmento) sarà o RP o BP, l’altra
dello stesso collegamento sarà DP. Le porte dei collegamenti che non connettono lo switch ad altri switch
(es. PC, server) sono SEMPRE DP.


- Le BP, dette anche “porte di ridondanza”, sono delle porte dove il passaggio dei frame è bloccato. 

Per capire quando in
un collegamento tra switch una porta è blocked e l’altra è designated bisogna fare questo ragionamento: 

- si immagina che in un collegamento tra due switch ci sia collegato un computer e che questo voglia raggiungere il RB, quindi,
contando il collegamento a cui è connesso, inizio a calcolare il percorso col costo minore. Identifico come DP la
porta dello switch che è connessa al percorso col minor costo, l’altra, invece, la identifico come BP.


<center>
  <img src="/img/posts/spanning-tree-protocol/schermata1a.webp" alt="Schemata1-STP"/>


  <img src="/img/posts/spanning-tree-protocol/schermata2a.webp" alt="Schemata2-STP"/>


  <img src="/img/posts/spanning-tree-protocol/schermata3a.webp" alt="Schemata3-STP"/>
</center>
