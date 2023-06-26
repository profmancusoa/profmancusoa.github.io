
---
id: 2023-02-09-1
titolo: Come installare ProjectLibre su Linux
featured: false
autore: ProfMancuso
data: 2023-02-09
cover: projectlibre.webp
introduzione: Come installare ProjectLibre su Linux in modo facile e veloce
pubblicato: true
sezione: Installazioni
categorie:
  - ProjectLibre
  - Linux
---

# ProjectLibre

ProjectLibre è l'alternativa *Open Source* n. 1 a Microsoft Project per la gestione dei progetti. 
È stato scaricato milioni di volte edha vinto il premio "Best of Open Source" di InfoWorld. 

E' una soluzione adatta a tutti e infatti è utilizzato da un lungo elenco di Fortune 500, governi, piccole imprese e organizzazioni senza scopo di lucro.

ProjectLibre è compatibile con i file di Microsoft Project. Puoi semplicemente aprire i tuoi progetti in Linux, macOS o Windows

Le principali caratteristiche di ProjectLibre sono:

- Compatibilità con Microsoft Project
- Diagramma di Gantt
- Diagramma di rete
- Grafici WBS/RBS
- Costo del valore guadagnato
- Istogrammi delle risorse

## Come installarlo su Linux

### 1. Scarica ProjectLibre

- Vai su <a href="https://www.projectlibre.com/" target="_blank" title="Project Libre">ProjectLibre</a> e premil il pulsante `DOWNLOAD`
  
![Projectlibre](/img/posts/come-installare-projectlibre-su-linux/projectlibre_01.webp)

- Una volta reindirizzati sulla pagina di Download, premi il pulsante `Download`

![Projectlibre download](/img/posts/come-installare-projectlibre-su-linux/projectlibre_02.webp)

- Dopo pochi secondi il download inizierà e scarichera nella directory `~/Downloads` oppure `~/Scaricati` il file `projectlibre_1.9.3-1.deb`

### 2. Verificare le dipendenze

- Per verificare le dipendenze vi nella directory dove il file è stato scaricato ed esegui

```bash
$ cd ~/Downloads
$ dpkg -I projectlibre_1.9.3-1.deb

new Debian package, version 2.0.
 size 17853460 bytes: control archive=636 bytes.
     566 bytes,    12 lines      control              
     273 bytes,    10 lines   *  postinst             #!/bin/sh
     271 bytes,    10 lines   *  postrm               #!/bin/sh
 Package: projectlibre
 Version: 1.9.3-1
 Priority: optional
 Section: editors
 Architecture: all
 Installed-Size: 28352
 Depends: openjdk-7-jre | openjdk-6-jre | openjdk-8-jre | sun-java6-jre | java7-runtime | java6-runtime | java8-runtime
 Maintainer: Laurent Chretienneau <lchretienneau@projectlibre.org>
 Description: A desktop replacement for Microsoft Project
  It is capable of sharing files with Microsoft Project and has very similar
  functionality (Gantt, PERT diagram, histogram, charts, reports, detailed
  usage), as well as tree views which aren't in MS Project.

```

- Come si può vedere alla linea `Depends` questo pacchetto dipende da Java
- Pertanto assicurati di avere installato openJDK sul tuo sistema

### 3. Installare ProjectLibre

- Dopo aver verificato, ed eventualmente installato, le dipendenze, install **ProjetLibre** eseguendo il seguente comando

```bash
$ cd ~/Downloads
$ sudo dpkg -i projectlibre_1.9.3-1.deb

Selecting previously unselected package projectlibre.
(Reading database ... 290492 files and directories currently installed.)
Preparing to unpack projectlibre_1.9.3-1.deb ...
Unpacking projectlibre (1.9.3-1) ...
Setting up projectlibre (1.9.3-1) ...
Processing triggers for mailcap (3.70+nmu1ubuntu1) ...
Processing triggers for desktop-file-utils (0.26-1ubuntu3) ...
Processing triggers for gnome-menus (3.36.0-1ubuntu3) ...
Processing triggers for shared-mime-info (2.1-2) ...
```

Se non ci sono stati errori, ProjectLibre è correttamente installato sul tuo sistema e uno shortcut sarà disponibile per il tuo sistem PopOS o Ubuntu e potrai lanciare ProjectLibre direttamente da launcher del tuo sistema operativo.

*ProfMancusoa*

