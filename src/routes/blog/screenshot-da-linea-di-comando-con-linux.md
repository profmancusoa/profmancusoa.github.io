
---
id: 2023-07-29-1
titolo: Screenshot da linea di comando con linux
featured: false
autore: ProfMancusoa
data: 2023-07-29
cover: cover.png
introduzione: Flameshot è un potente strumento di cattura dello schermo che può essere utilizzato dalla linea di comando (CLI) di linux
pubblicato: true
sezione: Blog
categorie:
  - Linux
  - CLI
  - Screenshot
  - Tools
---

# Cos'è Flameshot

> Flameshot is a free and open-source, cross-platform tool to take screenshots with many built-in features to save you time.

Spesso nelle nostre attività è utilissimo fare degli `screenshot`, in altre parole catturare lo schermo o parte di esso, per poterli inserire in nostre presentazioni, video, etc...

Flameshot è uno strumento perfetto per questo scopo ed è disponibile su tutte le piattaforme, incluso Linux.

Lo strumento presenta un'interfaccia GUI molto intuivita e con moltissime funzionalità.
E' possibile catturare tutto lo schermo, una sola finestra o un'area arbitraria dello schermo.

Risulta facilissimo aggiungere delle annotazioni, degli elementi grafici come cerchi, frecce e del testo per arricchire di dettagli il nostro screenshot.

## Installazione di Flameshot su Linux


Flameshot è già incluso come pacchetto della propria distribuzione, quindi l'installazione è semplicissima, basta eseguire il seguente comando


```bash
#Debian
$ sudo apt install flameshot

#Arch
$ pacman --sync flameshot


#Fedora
$ dnf install flameshot
```

Su altre distribuzioni il comando sarà molto simile.


## Utilizzo da linea di comando (CLI)

Una funzionalità molto utile di Flameshot è la possibilità di invocarlo, e quindi effettuare uno screenshot, da linea di comando.
Questo risulta molto utile in moltissime situazioni e soprattutto è possibile utilizzarlo all'interno di uno script di automazione.

Ma passiamo subito al sodo e vediamo come va eseguito il comando in modo da fare uno screenshot di un'area predefinita dello schermo


```bash
$ flameshot full -d 200 --region 1024x769+358+189 -p dir_images
```

dove:

- `-d 200`: imposta un delay di 200 ms, andando a ritardare il momento dello screenshot
- `--region 1024x769+358+189`: imposta l'area da catturare nel formato WxH+X+Y (quindi in questo caso cattura lo schermo a partire dalle coordinate x=358, y=189 con una larghezzza pari a 1024 px e un'altezza di 769px). Nota che x=0,y=0 è l'angolo in alto a sinistra del tuo schermo
- `-p dir_images`: salva automaticamente il file nella directory dir_images

### Conclusioni

Io uso Flameshot da tantissimo tempo e mi sono sempre trovato molto bene e la possibilità di poter effettuare degli screenshot da linea di comando mi ha fatto risparmiare moltissimo tempo nella preparazione di presentazioni e altro tipo di materiale.

Fammi sapere cosa ne pensi nei commenti e se hai scoperto unìuso di Flameshot alternativo ed utile fammelo sapere.