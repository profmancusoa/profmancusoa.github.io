---
id: 2022-08-22-1
titolo: Cosa sono gli NFC e come usarli
featured: false
autore: Alberto Mastroianni
data: 2022-10-22
cover: cover.webp
introduzione: In questo articolo parleremo di cosa sono gli NFC.
pubblicato: true
sezione: Tecnologia
categorie:
  - NFC
  - RFID
  - Wireless
  - IoT

---


# A cosa serve la tecnologia NFC?
La tecnologia NFC, (Near Field Connection) serve a connettere due dispositivi ed è utile per trasferire dati da un dispositivo ad un altro. Al loro interno si può trovate un chip (il più usato è l'NXP NTAG 216) senza utilizzare cavi o senza inserire delle credenziali d'accesso. 

Rispetto al Bluetooth, la tecnologia NFC permette di identificare, autenticare ed associare i due dispositivi in modo del tutto automatico.
Sono molto collegati alla famiglia RFID e sfruttano la radiofrequenza in modalità wireless e contactless per il trasferimento di dati digitali. 
Quindi possiamo dire che in questi ultimi anni, le aziende hanno bisogno di rinnovarsi di anno in anno per restare al passo del mondo digitale e dell'IoT.
 
 ## Utilità in vari ambiti
 Molto utile quando gli utenti hanno necessità di inviare dei dati da un dispositivo ad un altro. I dispositivi comunicano tra loro in modo bidirezionale attraverso la rete wireless.
 Ai giorni d’oggi è maggiormente utilizzata dai dispositivi Android, mentre c’è un po’ di carenza nei telefoni con sistema operativo IOS.
 
 Quello che mi incuriosisce di questa tecnologia, è che ha molte funzioni una diversa dall’altra, questo permette di avere una vasta scelta di operazioni che essa può svolgere. 
 A Torino, la tecnologia NFC, viene usata per esempio nei biglietti della gtt (gruppo torinese trasporti), infatti quando si passa il biglietto sul lettore carte, è più che sufficiente farlo aderire al massimo ad un centimetro di distanza sulla superficie ed ecco che compare sulla schermata “Biglietto valido”. 
 
 Questo messaggio però, prima di essere inviato al destinatario, deve verificare attraverso un’ampia selezione di codici se effettivamente il biglietto era valido oppure no. (Questi sono tutti dati che vengono elaborati dai due dispositivi NFC interessati, ma che non si possono effettivamente vedere ad occhio nudo).

 # Sicurezza dei dispositivi NFC
 Il vantaggio del chip NFC è che in fase di transazione questo trasmette un token e non i dati bancari, perciò la sicurezza è piuttosto elevata rispetto ad altri sistemi.
 Un esempio possono essere i pagamneti contactless, quando si avvicina la carta di credito, il chip invia un token e non i dati bancari, sennò a livello di sicurezza sarebbe un vero problema.

 Esistono dei malware che servono apposta per disattivare i meccanismi di sicurezza di qualsiasi app e ottenere i diritti di accesso al nostro device; purtroppo non sono ancora del tutto note le vulnerabilità della tecnologia NFC, per questo è opportuno installare un antivirus per smartphone.

 ![Pagamento contactless](/img/posts/cosa-sono-gli-nfc-e-come-usarli/contactless.webp)


# Cosa vuol dire IoT?
**Internet of Things**
Con IoT ci riferiamo al processo di connessione a Internet di oggetti fisici di uso attuale e quotidiano. 
Per esempio oggetti che abbiamo tutti in casa: 
- lampadine, prese
- condizionatori
- oggetti collegati all'ambito sanitario, come strumenti medici. 

## Esempio della tecnologia RFID
 L'esempio della tecnologia RFID anch'esso viene usato nei mezzi di trasporto GTT;
 la comunicazione tra l'RFID e il lettore si svolge sempre in un'unica direzione. Il dispositivo RFID non può ricevere aggiornamenti così come una rete IT centralizzata non può trasferire dati all'RFID. Non si tratta di un sistema di monitoraggio continuo e quindi la tracciatura logistica è disponibile in determinati intervalli.


## Differenza tra NFC e RFID
Sebbene queste due tecnologie abbiano quasi la stessa funzionalità, **sono completamente diverse**.
L'RFID può funzionare bene a una distanza di molti metri. Ad esempio, un pass di accesso al cancello può funzionare a distanza. Quindi non devi deviare pericolosamente la tua auto al casello.

La tecnologia NFC è più recente. È una buona versione di RFID. Può funzionare in un range  massimo di 4 pollici. A differenza dell'RFID, I dati fluiscono solo dai tag all'apparecchiatura di lettura.

**Sia IoT che RFID sono collegati come argomenti agli NFC.**



## Esempio pratico NFC:

Vediamo come utilizzare un NFC tramite uno smartphone

<img src="https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/d8/08/50/d8085090-a200-e7ce-83da-13673e70e0e4/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png" width=50% alt="NFC">

<br>
<br>

1. Scaricare dal play store o app store l'applicazione "NFC Tools". 
2. Procurarsi una card NFC che possa svolgere l'azione.
3. I dispositivi NFC sono disponibili sia in lettura, sia in scrittura. 
4. Quando cliccheremo su "scrittura", noi possiamo scegliere determinate azioni/compiti da fargli svolgere: Per esempio invia SMS al numero 333...


### Passo 1

![passo1](/img/posts/cosa-sono-gli-nfc-e-come-usarli/passo1.webp)

### Passo 2 

![passo2](/img/posts/cosa-sono-gli-nfc-e-come-usarli/passo2.webp)

### Passo 3

![passo3](/img/posts/cosa-sono-gli-nfc-e-come-usarli/passo3.webp)


# Programmare Tag NFC con dispositivi desktop
###      (Windows / Mac OS / Linux)

I software più usati, che sono scaricabili gratuitamente, e sono compatibili sia con Windows che con Mac e Linux sono: 

- **TagXplorer**
sviluppata in collaborazione con la NXP che è l'azienda leader nel mercato nella produzione di chip NFC, permette di effettuare anche programmazioni meno comuni, che hanno anche aggiunte particolari come il blocco con password, il contatore scansioni o la programmazione di singoli blocchi.
- **NFC Tools**
È la versione Desktop di una delle più diffuse applicazioni Android e IOS. Più intuitiva, comprende numerose funzioni ed è compatibile con più dispositivi e chip.

## Chip NFC  
Questo microchip è piuttosto piccolo (micro)  Contiene una memoria che memorizza le informazioni. 
Ha una buona memora di dati come per esempio immagini, indirizzi e-mail, numeri di telefono e collegamenti a siti Web. Questi dati vengono archiviati in formato NDEF (formato di scambio dati NFC) per facilitare la trasmissione.
## Antenna NFC
 Questa è la sezione del tag NFC che rileva o rilascia onde radio. È sotto forma di un anello di filo inciso in una posizione strategica sul tag NFC. 
 Se l'antenna risulta difettosa, la comunicazione non avverrà poiché nessun segnale verrà inviato o ricevuto dagli smartphone.
## Substrato
Questa è la parte che racchiude l'antenna NFC e il chip NFC. È la parte più grande del tag NFC ed è composta da  materiale plastico a seconda del tpo di tag NFC.
I tag NFC sono disponibili in diverse forme, inclusi adesivi NFC, monete NFC, etichette NFC e dischi NFC. 
Questa diversità ti consente di selezionare il formato più adatto alle tue esigenze. Ad esempio, gli adesivi NFC saranno ideali da attaccare su una scrivania per l'automazione delle attività.
Quindi in base a diverse comodità esistono vari modelli di tag NFC.

## Formato NDEF 
NDEF è un formato dati standardizzato che consente a uno smartphone di scrivere o leggere su una scheda NFC o un tag NFC. Il formato NDEF viene utilizzato per memorizzare URL, documenti di testo o biglietti da visita elettronici.
Con il Covid 19, c'è stato un picco nel contactless nell'uso NFC, come si è visto con il recente andamento delle app di pagamento come Google Pay e Apple Pay.

## Conclusione
E’ un argomento che porterei avanti con me per tutto il resto della mia vita, perché ritengo sia una tecnologia comoda al giorno d’oggi e soprattutto interessante in vari scopi; sia scopi personali, sia scopi lavorativi. 


Spero che possa essere di aiuto a qualcuno che sperimenterà come ho fatto io questo tipo di tecnologia moderna.