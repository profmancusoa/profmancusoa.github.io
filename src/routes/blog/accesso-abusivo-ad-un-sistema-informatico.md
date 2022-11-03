
---
id: 2022-10-25-1
titolo: Accesso abusivo ad un sistema informatico
featured: false
autore: Sebastiano Peluso
data: 2022-10-25
cover: acceso-a-abusivo.webp
introduzione: Le tecniche di accesso abusivo ad un sistema informatico, strumenti usati e loro funzionamento 
pubblicato: false
sezione: IT
categorie:
  - Sicurezza
  - Password
---

# Accesso abusivo ad un sistema informatico

L’accesso abusivo ai sistemi informatici è diventato un aspetto importante per la sicurezza di molte nazioni perché la violazione di questi sistemi può portare al blocco di alcuni servizi essenziali come: la pubblica amministrazione, il traffico aereo o le telecomunicazioni.

Prima di tutto sappiamo che se un PC non è connesso alla rete Internet difficilmente potrà essere violato, ma quando questo è connesso, se non si prendono delle precauzioni, potrà essere soggetto ad attacchi hacker.

Vediamo di seguito alcune delle più diffuse tecniche di accesso e le violazioni che si attuano.
Il classico esempio di hackeraggio è la creazione di malware (parola derivata dalla combinazione di malicious e software), ovvero di un programma in grado di attivare automaticamente azioni che danneggiano il computer e che vi permettono l’accesso illecito.

![attacchi](/img/posts/accesso-abusivo-ad-un-sistema-informatico/attacchi-informatici-fine.webp)

Tra questi vi sono in particolare gli spyware, ovvero malware utilizzati per introdursi abusivamente in un sistema e prendere le informazioni contenute in un pc come password, dati personali, abitudini di navigazione, che vengono quindi rubate da un soggetto esterno non autorizzato.

Gli spyware più noti sono costituiti da mail con campi da completare, finestre o link, che hanno lo scopo di far connettere l’utente a determinati siti o di rubare le informazioni che lo stesso dovrebbe inserire (pratica conosciuta come phishing); oppure, l’hacker esperto potrebbe riprodurre un sito web ufficiale, in modo che l’utente inserisca i propri dati (pratica detta pharming, evoluzione del phishing); ancora, un programmatore potrebbe intercettare passivamente i dati che transitano in una rete telematica attraverso particolari software creati ad hoc, volti apparentemente a risolvere problematiche del dispositivo: tale pratica, detta sniffing, può essere utilizzata in maniera fraudolenta per intercettare informazioni come password di accesso a determinati servizi.


### <p>Altre tipologie di malware sono:</p>
![malware](/img/posts/accesso-abusivo-ad-un-sistema-informatico/tipologie_malware.webp)
### <u>Trojan</u>
Sono tra i malware più pericolosi in circolazione. Di solito si presentano sotto forma di qualcosa di utile, ad esempio come tool per lo sblocco delle versioni a pagamento di noti software commerciali. Questo stratagemma viene utilizzato, ovviamente, per ingannare l’utente. Una volta “entrato” nel sistema, il trojan consente ai criminal hacker di ottenere l’accesso completo e non autorizzato al computer della vittima.
### <u><p>Rookit</p></u>
I Rookit consentono ai criminal hacker di ottenere i privilegi da amministratore sul sistema infetto. Generalmente, sono progettati per rimanere nascosti agli occhi dell’utente, degli altri software e del sistema operativo stesso
### <u><p>Keylogger</p></u>
I Keylogger semplici codici malevoli sono capaci di registrare tutto ciò che la vittima digita sulla tastiera, inviando poi le informazioni raccolte ai criminal hacker che, in questo modo, riescono a rubare informazioni sensibili come nomi utente, password o dati delle carte di credito.
### <u><p>Ransomware</p></u>
Un Ransomware  è un tipo di virus che prende il controllo del computer di un utente ed esegue la crittografia dei dati, quindi chiede un riscatto per ripristinare il normale funzionamento.
![malware](/img/posts/accesso-abusivo-ad-un-sistema-informatico/4_insieme.webp)

### <p>Le tecniche per diffondere i malware sono</p>
![malware](/img/posts/accesso-abusivo-ad-un-sistema-informatico/tecniche_malware.webp)
### <u><p>Come ci si protegge da malware ed attacchi hacker</p></u>
Prima cosa da fare è proteggere il protocollo RDP (Remote Desktop Protocol), protocollo utilizzato sempre più spesso da quando si è diffuso lo Smart working.
L’RDP è la scelta più popolare tra gli utenti perché integrata in Windows e offre più controllo dell’host. Un client RDP in esecuzione sul portatile o desktop dell’utente (client) comunica con il componente RDP sul server (host). E la comunicazione tra i due è criptata. 
I criminali hacker usano gli attacchi RDP per distribuire ransomware e per bloccare i sistemi, paralizzando gravemente le aziende.
Fanno questo andando a cercare porte RDP aperte.

I protocolli di comunicazione sono definiti e noti come da canali per i servizi sulle reti, per esempio:

<ul>
  <li>
    HTTP per accedere al web attraverso la porta 80
  </li>
  <li>
    SMTP per inviare email usa la porta 25
  </li>
  <li>
    FTP per trasferire dati usa la porta 20 o 21
  </li>
</ul>

Inoltre bisogna bloccare il firewall di rete in modo l’accesso alla rete sia protetto
### <u><p>Attacco hacker tramite “Man in the Middle”</p></u>
Per capire come funziona questo attacco possiamo immaginare per esempio un utente che si collega alla rete e chiede a sua volta di essere collegato all’indirizzo IP di un determinato sito Internet.

Nella comunicazione tra queste due parti interviene a loro insaputa un terzo interlocutore, il c.d. “uomo nel mezzo”.
La prima operazione che un hacker compie in questo attacco è intercettare il traffico in Internet prima che raggiunga la destinazione.

Uno dei metodi più diffusi è costituito dallo “spoofing” degli indirizzi IP.
Mediante lo spoofing gli hacker falsificano la vera origine dei dati che inviano al computer, dandogli una parvenza vera.
I dati vengono trasmessi online in pacchetti di piccole dimensioni, ciascuno con un tag che lo identifica.
Gli hacker che usano questa tecnica sostituiscono il tag con uno riconosciuto dal computer dell’utente bersaglio ottenendo come risultato che il dispositivo finisce per comunicare con un impostore che però ha le medesime sembianze della fonte originaria dei dati.

### Attacco hacker tramite DoS (Denial of Service) o DDoS (Distributed Denial of Service)

Il primo, DoS, è un attacco che ha come obbiettivo quello di bloccare un computer o una rete, per impedirne l’accesso da parte degli utenti autorizzati.
Una tecnica utilizzata è quella del “Mail bombing”: attraverso programmi viene inviata una consistente mole di e-mail alla casella di posta elettronica del soggetto, causando così il blocco del programma di posta elettronica.

Il DDoS consiste nell’utilizzo di tanti computer soggetti a virus per sovraccaricare i sistemi informatici, creando una sorta di finto traffico dati. Il risultato è che diventa quasi impossibile per i bersagli fornire risorse informatiche.


Un consiglio sulle password da scegliere, per le App, e-mail, etc.
Non scegliamo mai password banali come 12345678, o nomi di persone, o date di nascita, questo perché ci sono software che molto facilmente individuano le varie combinazioni di numeri e lettere, quindi quando scegliamo una password vediamo di mettere numeri, lettere, caratteri speciali. 
Qui sotto un semplice schema per le combinazioni di password.

![tabella](/img/posts/accesso-abusivo-ad-un-sistema-informatico/tabella_pass.webp)














