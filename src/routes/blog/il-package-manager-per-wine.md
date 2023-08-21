---
id: 2022-10-25-1
titolo: Il package manager per Wine
featured: false
autore: Andrea Canale
data: 2022-10-25
cover: cover.webp
introduzione: Questo post descsrive come installare Wineget, il package manager per Wine.
pubblicato: true
sezione: Blog
categorie:
  - Wine
  - Wineget
  - Linux
  - Rust
---

# Wineget: Il package manager per Wine

### Come installare un package manager per gestire facilmente le applicazioni installate con Wine su Linux.

Wine permette di eseguire delle applicazioni destinate a Windows su Linux attraverso un adattamento della specifica WinNT(Windows 98 in avanti) alla specifica POSIX usata da MacOS, BSD e Linux. In questo modo le chiamate di sistema di una applicazione Windows vengono convertite in chiamate di sistema compatibili con sistemi POSIX o Unix-Like.

Wine crea una struttura di sistema uguale ad un sistema Windows in una cartella nel pc detta Prefix(prefisso) dove verrà contenuta la nostra applicazione che andiamo ad installare.

Tuttavia l’installazione di un’app con Wine non è sempre semplice perchè in alcuni casi mancano delle dipendenze all’applicazione che vanno installate con Winetricks.
Winetricks installa delle dipendenze come .NET o VCrun2019 nel prefisso che Wine crea sul disco.

Una volta che l’installazione di un’applicazione termina l’app compare come app di sistema indipendentemente dal prefisso.

Ho pensato di scrivere **Wineget** per semplificare questo processo. Wineget crea una cartella dove metterà tutti i prefissi e i file scaricati necessari allo script per funzionare.

Quando decidiamo di installare un’applicazione attraverso Wineget verrà eseguito uno script che installa l’app richiesta e le sue dipendenze in un prefix nella cartella dell’utente.<br>
Con un semplice click verranno eseguiti decine di comandi in automatico che semplificheranno la gestione dell’app installata via Wine.<br>

## Per usare Wineget eseguiamo le seguenti operazioni:

### Se vuoi compilare Wineget da zero esegui questi passi:

- Installare Rust: 
  - Per installare rust eseguiamo il seguente comando: 
      
      ```bash
        curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
      ```


Dopo aver eseguito il comando apparirà sulla bash questo: <br>
  ![alt text](/img/posts/il-package-manager-per-wine/rustup.webp "Rustup")
  Ora premere 1 e aspettare che l'installazione finisca.
  Quando l'installazione sarà finita eseguire questo comando:

  ```bash
  source "$HOME/.cargo/env"
  ```
  
  Ora abbiamo Rust e i suoi tools installati e possiamo procedere con la compilazione.
  - Cloniamo la repository di Wineget
    Eseguiamo il seguente comando:
    ```bash
      git clone https://github.com/Windows-On-Linux/Wineget.git
      cd Wineget
    ```
  - Compiliamo Wineget
    Per compilare Wineget usiamo questo comando:
    ```bash
      cargo build
    ```
  - Creazione del pacchetto
  Se sei su una distro derivata da debian esegui il seguente comando: 
    ```bash
      cargo install cargo-deb
    ```
  Se sei su una distro derivata da Red Hat esegui il seguente comando: 
    ```bash
      cargo install cargo-rpm
    ```
  Se sei su una distro derivata da Arch Linux esegui il seguente comando: 
    ```bash
      cargo install cargo-aur
    ```
  Ora per procedere alla creazione del pacchetto fai: cargo deb/rpm/aur, infine, prendere l’ultima linea che il comando ha prodotto che sarà il percorso del pacchetto ed installatelo.<br>
  Ad esempio questo è il finale con cargo-deb:
  ![alt text](/img/posts/il-package-manager-per-wine/cargodeb.webp "cargodeb")

### Se vuoi installare il pacchetto già compilato esegui questi passi:
-	Installare Wineget, scaricandola dalla [pagina release di Github](https://github.com/Windows-On-Linux/Wineget/releases).
-	Ora per eseguire la ricerca dell’applicazione fare:
    ```bash
      wineget -s [PROGRAMMA]
    ```
    
Noi andremo ad installare Flowgorithm per provare.

- Per installare Flowgorithm fare:
    ```bash
      wineget -i flowgorithm 
    ```

e seguire il processo di installazione, una volta finito lo script scriverà su bash: 

> “The installer have finished the work”. 

Ora flowgorithm risulta installato nella cartella di wineget e si può trovare anche come applicazione di sistema installata.

![alt text](https://github.com/Windows-On-Linux/Flowgorithm/raw/main/wallpaper.png "Flowgorithm")

Una volta che hai preso la mano con Wine puoi anche creare script compatibili con Wineget e aggiungerli alla repo ufficiale aprendo una issue su Github, mandandomi la tua repo oppure puoi creare direttamente una pull request attraverso il sistema Repo che ho scritto per aggiungere programmi velocemente. <br>

Guida qui: [https://wineget.pages.dev/howtoscript](https://wineget.pages.dev/howtoscript)

Per tutti i dettagli ecco qui il sito: https://wineget.pages.dev/<br>

Per una lista completa dei programmi nella repoo di Winget

[https://wineget.pages.dev/packages](https://wineget.pages.dev/packages) <br>

Ricorda di aggiungere una star al progetto su Github per far crescere il progetto e condividilo con i tuoi amici!<br>

Enjoy!