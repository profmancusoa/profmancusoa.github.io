
---
id: 2023-08-10-1
titolo: Come scambiare facilmente file tra linux e lo smartphone
featured: false
autore: ProfMancusoa
data: 2023-08-10
cover: warpinator.png
introduzione: Vediamo come installare ed utilizzare warpinator su Linux per scambiare comodamente file tra gli smartphone Android e iOS e Linux Desktop
pubblicato: false
sezione: blog
categorie:
  - Linux
  - File Share
  - Scambio File
  - 
---

# Warpinator

Warpinator è uno strumento open source gratuito per l'invio e la ricezione di file tra computer che si trovano sulla stessa rete locale. 
Tutto quello che devi fare è installare Warpinator sul tuo computer, scegliere un codice di gruppo ed iniziare a condividere file con semplicità e sicurezza, senza spreco di banda e senza dover usare servizi di terze parti di dubbia provenienza.


È dotato di un'interfaccia utente semplice e tematica con un menu facile da configurare e funziona senza la necessità di server o configurazioni speciali. Warpinator è un'app ufficiale per la condivisione di file sviluppata da Linux Mint, ma può essere utilizzato senza problemi su altre distribuzioni Linux.

In questo post vediamo come installarlo ed utilizzarlo su sistemi basati su Debian quali Ubuntu, PopOS e altri.

## Installazione

Su Ubuntu il pacchetto di warpinator non è disponibile, ma non disperate, vi faccio vedere come compilare il pacchetto .deb e poi installarlo.
Sembra difficle, ma è più semplice di quel che sembra dato che gli sviluppatori di warpinator hanno fatto un ottimo lavoro.

### Preparazione dell'ambiente

Iniziamo a preparare l'ambiente per la compilazione e il building di warpinator

Apri una shell ed esegui il seguente comando per agiungere tutti i pacchetti necessari alle fasi successive

```bash
sudo apt install python3-grpc-tools python3-grpcio gir1.2-xapp-1.0 \
gist libxapp1 python3-setproctitle python3-xapp xapps-common debhelper dh-python \
gnome-pkg-tools meson gobject-introspection appstream python3-grpc-tools git
```

### Cloniamo il repo di warpinator

Per clonare il repo di warpinator basta eseguire i seguenti comandi

```bash
# Clone del repository
git clone https://github.com/linuxmint/warpinator.git

# Entra nella directory del progetto
cd warpinator

# Fai il checkout dell'ultima versione
git checkout 1.6.4
```

### Build del pacchetto

Ora facciamo il build di un pacchetto debian `.deb`, eseguendo il seguente comando

```bash
# Build del pacchetto .deb:
dpkg-buildpackage -b --no-sign
```

### Installazione di warpinator

Se tutto è andato bene senza problemi, possiamo finalmente installare warpinator in questo modo

```bash
cd ..

sudo dpkg -i warpinator_1.6.4_all.deb

(Lettura del database... 384604 file e directory attualmente installati.)
Preparativi per estrarre warpinator_1.6.4_all.deb...
Estrazione di warpinator (1.6.4) su (1.6.4)...
Configurazione di warpinator (1.6.4)...
Elaborazione dei trigger per mailcap (3.70+nmu1ubuntu1)...
Elaborazione dei trigger per desktop-file-utils (0.26-1ubuntu3)...
Elaborazione dei trigger per gnome-menus (3.36.0-1ubuntu3)...
Elaborazione dei trigger per libglib2.0-0:i386 (2.72.4-0ubuntu1)...
Elaborazione dei trigger per libglib2.0-0:amd64 (2.72.4-0ubuntu1)...
Elaborazione dei trigger per hicolor-icon-theme (0.17-2)...
```

### Configurazione di warpinator

Ora che abbiamo installato warpinator sul nostro sistema Linux, lanciamolo e configuriamo alcuni semplici parametri

Dal menù in alto a sinistra, seleziona *Preferenze*

![warpinator-preferences](/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-preferenze.png)

<br>

Dalla tab *Generale*, nella sezione *Trasferimenti File*, imposta la directory di scambio file alla voce *Posizione per file ricevuti*

Io l'ho impostato a */home/antonio/Downloads/warpinator*, voi impostate la directory di dove verranno scaricati i file in modo adeguato al vostro ambiente di lavoro

![warpinator-preferenze](/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-download-dir.png)

<br>

Dalla tab *Conenssion* ora imposta un codice di gruppo, per evitare accessi non autorizzati, e premi il pulsante *Imposta codice*

Scegli anche quale interfaccia di rete utilizzare per lo scambio. Io ho impostato l'unica interfaccia WiFi disponibile sul mio computer.

![warpinator-codice-gruppo](/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-codice-gruppo.png)

<br>

Fatto ciò abbiamo terminato con la configurazione di warpinator, e possiamo chiudere la finestra di configurazione

### Installazione sullo smartphone

Warpinator è disponibile anche per gli smartphone Android e iOS. Per installare l'app per il tuo telefono vai sullo store di riferimento e scegli l'applicazione *Warpinator*

![warpinator-android](/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-android.png)

### Configuriamo warpinator sullo smartphone

Apri l'applicazione appena installata dallo store e fai tap sui 3 puntini in alto a destra per accedere alla configurazione dell'applicazione

![warpinator-android-config](/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-android-config.png)

Ora seleziona *Impostazioni* ed configura lo stesso *condice di gruppo* che hai impostato su Linux

![warpinator-android-impostazioni](/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-android-impostazioni.png)


![warpinator-android-codice](/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-android-codice.png)


### Scambiamo file tra Linux e lo smartphone

Cosa molto importante è assicurarsi che il firewall del proprio PC non blocchi le porte **42000** e **42001** utilizzate da warpinator.
In caso che queste porte siano filtrare non sarà possibile connettere lo smartphone con Linux

A titolo puramente di test, su linux eseguite il seguente comando in modo da disabilitare il firewall

```bash
sudo iptables -F
```

Se con questo comando la connession di warpinator funziona, dovrete configurare il firewall in modo opportuno.

A questo punto sia sul PC che sullo smartphone è possibile vedere i device trovati nella rete e appartenenti allo stesso gruppo


![warpinator-android-connecting](/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-android-connecting.png)

<br>

![warpinator-lista-smartphone](/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-lista-smartphone.png)

<br>

Ora scegliamo se condividere un'intera directory o un singolo file

![warpinator-android-select-file](/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-android-select-file.png)

<br>

Una volta selezionato il file, il trasferimento inizia immediatamente e sul PC viene richiesto la conferma di accettazione del file


![warpinator-accetta](/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-accetta.png)

<br>

Se accettiamo la richiesta di invio del file, dopo pochi istanti (dipende dalle dimensioni del file), troveremo il file nella directory che avevamo impostato durante la configurazione di warpinator su Linux

![warpinator-file-download](/img/posts/come-scambiare-facilmente-file-tra-linux-e-lo-smartphone/warpinator-file-download.png)

<br>

### Conclusioni

Warpinator è un tool fantastico, open source e sicuro che ci permette di scambiare file tra lo smartphone e il nostro PC Linux via rete locale al riparo da occhi indiscreti.
Abbiamo visto come installare warpinator sia su Linux che su smartphone (Android) e come configurare correttamente le applicazioni.
Infine abbiamo visto anche come scambiare un file da Android a Linux

Vi invito ad utilizzare questo tool in modo da evitare metodi antichi come inviare le foto via email etc.

Lasciate i vostri commenti qui sotto e se vi è piaciuto il post e lo ritenete utile potete anche mettere un like all'articolo e condividerlo con la vostra rete social.
