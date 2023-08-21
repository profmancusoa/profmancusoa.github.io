
---
id: 2023-08-20-1
titolo: Come far girare Chrome in un container Docker
featured: true
autore: ProfMancusoa
data: 2023-08-20
cover: come-far-girare-chrome-in-un-container-docker.webp
introduzione: Vediamo come è possibile far girare il browser Chrome in un container Docker in modo da aumentare la sicurezza e navigare in tutta tranquillità anche se visitiamo dei siti possibilmente poco attendibili
pubblicato: true
sezione: Blog
categorie:
  - Linux
  - Docker
  - Security
---

##  Navighiamo in sicurezza

Google Chrome è uno dei più diffusi browser al momento ed offre una navigazione online veloce e confortevole.
Tuttavia quando navighiamo il Web le insidie sono dietro l'angolo e a volte molto ben nascoste.
Infatti tutti noi possiamo essere vittime di phishing o raggiri simili.

Per limitare una serie di possibili problemi Chrome implementa un meccanismo di `sandbox` che cerca di isolare il browser dal sistema sottostante.
Tuttavia per quanto efficace questo meccanismo può essere migliorato isolando completamente il browser dal sistema sottostando, non utilizzando nemmeno lo stesso filesystem.

## Confiniamo Chrome in un container Docker

Per aggiungere questa sicurezza aggiuntiva possiamo confinare l'esecuzione di Google Chrome in un container Docker. In questo modo il browser verrà eseguito solo ed esclusivamente all'interno del container Docker, pertanto essendo completamente isolato dal sistema sottostante.
Chrome non avrà accesso al filesystem del nostro PC e non vedrà gli altri processi del sistema.

In questo modo avremo a disposizione un browser completamente isolato dal resto del sistema che potremo utilizzare per navigare in maniera più rilassata, potremo permetterci di visitare anche siti che ci paiono poco trasparenti. In caso succedesse qualcosa ciò avverrebbe solo ed esclusivamente all'interno del container.

Una volta terminata la sessione di navigazione il container Docker verrà completamente distrutto e non rimarrà nessuna traccia della nostra navigazione precedente.

<iframe width="560" height="315" src="https://www.youtube.com/embed/t3-Rr5UzRgU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Dockerizziamo Google Chrome

Per poter far girare Chrome in un container Docker dobbiamo prima di tutti creare l'immagine del container e poi dovremo lanciare il container in maniera opportuna

### Creiamo l'immagine del container

Clona il mio repository da GitHub

```bash
$ git clone https://github.com/profmancusoa/google-chrome-dockerized
```

Qui il `Dockerfile` che ho creato per generare l'immagine

```bash
FROM debian:latest
RUN apt update && apt install -y wget gnupg2
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/chrome.list
RUN apt update && apt install -y google-chrome-stable
CMD ["google-chrome", "--no-sandbox"]
```

Ora entro la directory e inizia il build dell'immagine docker tramite il comando `docker build`

```bash
$ cd google-chrome-dockerized
$ docker build -t google-chrome .
```

Questo processo richiederà qualche minuto, anche in funzione della velocità della tua connessione Internet.
Una volta terminato una nuova immagine sarà disponibile sul tuo sistema

```bash
$ docker images | grep google    

google-chrome                   latest             2dd030b2446b   5 hours ago     1.07GB
```

### Lanciamo il browser dockerizzato

Per eseguire Chrome all'interno del container dobbiamo permettere al container stesso di utilizzare lo Unix socket del server X del nostro sistema. In questo modo Chrome potrà essere visualizzato correttamente sul nostro sistema.

Per far ciò dobbiamo anche essere sicuri di concedere i permessi di connessione al container docker, con il seguente comaando

```bash
$ xhost +local:docker
```

A questo punto potremo lanciare il docker che eseguirà correttamente Chrome in un ambiente isolato

```bash
$ docker run --rm -ti -v /tmp/.X11-unix:/tmp/.X11-unix -e DISPLAY=$DISPLAY google-chrome
```

![Chrome Remote Windows](/img/posts/come-far-girare-chrome-in-un-container-docker/chrome-windows.webp)


### Rendiamoci la vita semplice

Per evitare di dover ricordarmi questi comandi ogni volta che voglio far partire una sessione di navigazione sicura, creo un `alias` nel mio .zshrc, o se usi la bash nel file .bashrc

```bash
alias dgoogle='xhost +local:docker && docker run --rm -ti -v /tmp/.X11-unix:/tmp/.X11-unix -e DISPLAY=$DISPLAY google-chrome'
```

In questo modo potrò iniziare la sessione di navigazione sicura soltanto digitando `dgoogle`

### Conclusioni

Utilizzando sapientemente gli strumenti messi a disposizione da Linux e sfruttando la *"magia"* di Docker abbiamo la possibilità di aumentare la sicurezza delle nostre sessioni di navigazione Web.

Vi invito a sperimentare questa tecnica, e a farmi sapere se vi è utile e se avete idee di miglioramento.
Non dimenticate di condividere questo articolo con la vostra rete, potrebbe essere utile anche ai vostri amici o altre persone.

Se l'articolo ti è piaciuto metti un like e lascia un commento qui sotto.


