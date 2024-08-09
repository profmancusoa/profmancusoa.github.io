---
id: 2022-10-27-1
titolo: Reti VPN
featured: false
autore: Pierpaolo Quijada Gomez
data: 2022-11-06
cover: cover.webp
introduzione: Breve introduzione sulle reti private virtuali o VPN
pubblicato: true
sezione: Blog
categorie:
  - VPN
  - Network Security
  - Wireguard
  - PPTP
  - OpenVPN
---

## Cosa sono le VPN

Con la sigla VPN si intende Virtual Private Network, ossia una rete privata che garantisce privacy e sicurezza dei dati.
La comunicazioni tra i dispositivi, non per forza connessi alla stessa LAN, avviene attraverso un canale di comunicazione riservato utilizzando la rete pubblica.

Il loro utilizzo è molto usato nel mondo aziendale dato che va a tagliare dei costi considerevoli per la creazione di una propria rete privata.
Nonostante ciò anche i privati si ritrovano ad utilizzarle se vogliono nascondere e proteggere i loro dati mentre navigano su Internet.

## Tipi di VPN

Le VPN si possono classificare in due tipologie:

### **VPN ad accesso remoto**

Con questa configurazione si ha un collegamento di tipo client-server.
Il server gestirà il traffico tra il client e l’accesso ad Internet, mentre il client invierà le richieste al server.

### **VPN site-to-site**

In questo caso il canale di comunicazione si basa su dei router che raggruppati formano una rete privata permettendo il passaggio di informazioni.
Anche questo modello usa il concetto client-server, infatti quando arriva l’informazione al router ad esso possono arrivare richieste d’accesso ai dati dai client della stessa rete del router.

## Come funziona

Il processo di creazione di una VPN si divide in tre fasi

**1. Tunneling**

In questo processo si crea un “tunnel” logico che collega due host e permette una comunicazione riservata.
I dati prima di entrare nel tunnel vengono incapsulati e criptati per permettere la compatibilità e la sicurezza.
All’arrivo vengono decriptati e il messaggio ritorna alla sua forma iniziale

**2. Autenticazione**

L’autenticazione serve per instaurare una connessione tra il cliente e il server, infatti prima di trasmettere i dati il server ha bisogno di sapere a quale utente sta mandando i pacchetti.
Possiamo riassumere questo passaggio in 6 fasi:

1. Il client contatta il Server
2. Il server conferma la sua presenza
3. Il client richiede l’identificazione al Server
4. Il server verifica che il tentativo di connessione sia autorizzato
5. Il client procede con l’autenticazione
6. Il server risponde e permette la connessione, in caso di autenticazione terminata con successo

**3. Crittografia**

Questa fase della comunicazione è la parte principale.  
Da essa la comunicazione tra i due host è resa sicura e riservata.
Il mittente cripta il messaggio e il destinatario attraverso una private key lo decripta .
Gli algoritmi alla base della criptazione sono simmetrici o asimmetrici e utilizzano il principio dell’hashing.

- Algoritmo simmetrico: utilizzo della stessa chiave per criptare e decriptare
- Algoritmo asimmetrico: utilizzo di chiavi diverse per criptare e decriptare
Hashing (utilizzato per rendere un dato riservato, questo procedimento non è reversibile).

## Protocolli VPN

La comunicazione tra due host avviene secondo dei precisi protocolli, quali per esempio.

**1. OpenVPN**

Tra i quattro è quello più diffuso per via della sua crittografia ad alto livello e della sua natura open source.
Questo protocollo lo possiamo dividere in due tipologie:

### **OpenVpn-TCP**

Sfrutta la connessione TCP che si accerta dell’invio del messaggio instaurando una connessione tra il mittente e il destinatario, in caso di mancata consegna si procede con il rinvio del pacchetto.
Il difetto maggiore è la lentezza di tutto il processo.

### **OpenVpn-UDP**

Sfrutta la connessione UDP che non instaura una connessione tra il mittente e il destinatario, ma procede direttamente con l’invio, ciò rende il procedimento molto veloce.
Il difetto maggiore è la non sicurezza dell’invio corretto del messaggio.

**2. Wireguard**

Questo protocollo punta ad essere più semplice e veloce rispetto agli altri, data la sua comunicazione basata sullo scambio di chiavi pubbliche.
Data la sua implementazione nel kernel di Linux il suo utilizzo si è sparso su molti dispositivi, anche quelli con caratteristiche hardware semplici.
La caratteristica principale è il Criptokey Routing che permette il passaggio dei pacchetti agli host con indirizzi IP appartenenti alla chiave pubblica per la decriptazione.
Il suo vantaggio maggiore è la leggerezza del software.

**3. SSTP**

Il protocollo Secure Socket Tunneling Protocol è un protocollo Microsoft e quindi già presente per i dispositivi Windows.
Non essendo open source il codice sorgente è reso privato e impedisce una qualsiasi modifica su di esso.

**4. PPTP**

Il protocollo Point-to-Point Tunneling Protocol è uno dei più vecchi e la sua prima presenza la si può testimoniare con Windows 95.
La sua installazione è semplice e ha una buona velocità computazionale.
Il difetto maggiore sono i suoi protocolli di sicurezza soggetti a preoccupanti vulnerabilità a livello di sicurezza.

## Pro e Contro nell'uso di una VPN

**Pro**

- Tutti i dati trasmessi e ricevuti dal tuo dispositivo vengono codificati, mantenendo le tue informazioni personali private.
- Libero accesso a contenuti online che possono essere geograficamente limitati.Per accedere a tali contenuti basterà modificare il proprio indirizzo IP e connettersi a un server della rete desiderata.
- Velocità di comunicazione dei dati maggiore.

**Contro**

- Se non si ha una buona conoscenza della tecnologia VPN può essere difficile utilizzarle a pieno.

## Configurazione

Per configurare una vpn point to point clicca <a rel=”nofollow” href="https://www.digitalocean.com/community/tutorials/how-to-create-a-point-to-point-vpn-with-wireguard-on-ubuntu-16-04">qui</a> per saperne di più.

Spero di esserti stato di aiuto e alla prossima, da Pierpaolo è tutto.

N.B: per la configurazione si è usato un pc con sistema operativo Linux.
