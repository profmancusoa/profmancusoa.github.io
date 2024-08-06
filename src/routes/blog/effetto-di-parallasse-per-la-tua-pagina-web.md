---
id: 2022-08-26-0
titolo: Effetto di parallasse per la tua pagina web
featured: false
autore: Alexandru Ioan Chindris
data: 2022-08-26
cover: cover.webp
introduzione: Questo post spiega come creare un effetto di parallasse per il proprio sito web con CSS e Java Script
pubblicato: true
sezione: IT
categorie:
  - Web Development
  - HTML
  - Java Script
  - Front End
  - CSS
---

#### Tempo di lettura: 5'
#### Tempo di realizzazione: 25'

## Introduzione

Negli ultimi anni le tecniche di sviluppo web sono migliorate e hanno permesso di integrare nuovi effetti interessanti alle nostre pagine web.
Un effetto che ultimamente sta andando di moda è il _parallax effect_, effetto di parallase. Questi tipi di effetto creano l'illusione della profondità quando la pagina si sposta. 
L'utilizzo di questo effetto è molto gradito dai visitatori della pagina web, le pagine web con effetti di paralasse integrati infatti si differenziano dalle classiche pagine web statiche.
Se non ti fosse mai capitato di imbatterti in una pagina web con effetti di paralasse ti lascio qua sotto alcuni esempi:

- <a rel=”nofollow” href="http://cyclemon.com/" target="_blank" title="cyclemon">1: Cyclemon</a>
- <a rel=”nofollow” href="http://portfolio.theflock.com/puma_mobium/" target="_blank" title="puma">2: PUMA</a>
- <a rel=”nofollow” href="http://www.espn.com/espn/eticket/story?page=Dock-Ellis" target="_blank" title="espn">3: ESPN</a>


In questo post andremo a scoprire come realizzare un semplice effetto di parallasse per la tua pagina web. Premetto che per comprendere il tutorial sono necessarie delle discrete conoscenze in HTML, CSS e Javascript. In questo tutorial non veranno utilizzati framework, tutti gli effetti sono frutto di CSS e Javascript vanilla. Se dovessi trovare difficoltà e/o problemi durante la realizzazione del tuo effetto di paralasse non esitare ad utilizzare la sezione commenti, la trovi al fondo di questa pagina. Inoltre puoi trovare il codice della pagina realizzata da me nel corso del tutorial qua sotto:

- <a rel=”nofollow” href="https://bit.ly/parallax_effect_tutorial" target="_blank" title="pagina web">Pagina web</a>
- <a rel=”nofollow” href="https://github.com/Alexandru-Chindris/parallax_effect_tutorial" target="_blank" title="codice della pagina web">Codice intero della pagina web</a>



## Fase preliminare

Per cominciare creiamo una pagina HTML, CSS e Javascript generica. Ricordiamoci di collegare la pagina CSS e Javascript nel file HTML.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" type="text/css" />
    <title>Parallax Effect Tutorial</title>
</head>
<body>
    <script src="script.js"></script> 
</body>
</html>
```

Proseguiamo creando 4 contenitori contenenti la classe "container" e inseriamo un header di livello 1 contenente il nostro testo. Aggiungiamo anche altre 4 classi ai vari contenitori, ci aiuteranno in futuro per l'assegnazione delle immagini.

```html
    <div class="container a1"><h1>Lorem Ipsum</h1></div>
    <div class="container b2"><h1>Lorem Ipsum</h1></div>
    <div class="container c3"><h1>Lorem Ipsum</h1></div>
    <div class="container d4"><h1>Lorem Ipsum</h1></div>
```

Ci spostiamo ora dentro al file CSS, dobbiamo definire le regole per le classi "_container_" "_(a1)_""_(b2)_""_(c3)_""_(d4)_". Iniziamo definendo le dimensioni dei 4 contenitori che abbiamo predisposto, successivamente aggiungiamo delle regole per orientare il nostro testo verso il centro. Inseriamo 4 immagini diverse all'interno dei nostri contenitori, le immagini che ho usato io sono state prese da <a href="https://www.pexels.com/it-it/" target="_blank">questo sito internet</a>.

```css
*{
  border: 0px;
  padding: 0px;
  margin: 0px;
}

.container{
  width: 100%;
  height: 600px;
  text-align: center;
}

.a1{
  background-image: url(src/img/paesaggio.png);
  background-size: cover;
}

.b2{
    background-image: url(src/img/animale.png);
    background-size: cover;
}

.c3{
    background-image: url(src/img/polo.png);
    background-size: cover;
}

.d4{
    background-image: url(src/img/orso.png);
    background-size: cover;
}

```

## Primo effetto di parallasse 

Bene! Ora disponiamo di una pagina web con 4 contenitori e ognuno di essi contiene un'immagine diversa. Siamo pronti per realizzare il primo e vero effetto di parallasse!
La prima immagine che andremo a modificare sarà quella presente nella classe _b2_ quindi _animale.png_. Aggiungiamo una semplice linea di codice alla classe _b2_.

```css
  background-attachment: fixed;
```
Aggiornando la nostra pagina noteremo subito che scrollando la pagina web l'immagine del contenitore _b2_ non si sposterà ma bensi lo farà il testo che contiene. È bastata una sola linea di codice per creare il primo effetto di parallasse. Incredibile vero?


## Secondo effetto di parallasse 

Se nel primo caso l'effetto di paralasse è stato abbastanza semplice da realizzare ora le cose si complicano un po'.
Durante la fase preliminare abbiamo creato un file Javascript assieme ai file HTML e CSS. Bene, è il momento di utilizzarlo!
Aggiungiamo ora un _id_ al contenitore che ospiterà l'effetto di parallasse. In questo caso il contenitore scelto è _d4_, aggiungiamo quindi l'id nella stringa.

```html
    <div class="container a1"><h1>Lorem Ipsum</h1></div>
    <div class="container b2"><h1>Lorem Ipsum</h1></div>
    <div class="container c3"><h1>Lorem Ipsum</h1></div>
    <div class="container d4" id="moving"><h1>Lorem Ipsum</h1></div>
```

Spostiamo nel file Javascript ora dobbiamo prendere il nostro contenitore e assegnarglo ad una variabile in Javascript. Per creare il prossimo effetto di parallasse utilizziamo il metodo _addEventListener()_ che appena rileverà lo scroll della pagina eseguira una funzione. Creiamo infine una nuova varibile chiamata offset, essa ci aiuterà a riconoscere le Y iniziali e finali del movimento della rotellina del muose. Facendo così possiamo modificare le Y della nostra immagine grazie alla varibile _offset_ scegliendo un "passo" a nostra scelta.

```js
let element = document.getElementById("moving");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    element.style.backgroundPositionY = offset *0.7 + "px";
})

```

## Risultato

Puoi trovare il mio risultato qua sotto, spero che questo tutorial ti sia stato utile. Ti invito a creare una tua versione della pagina modificata da te, sbizzarisciti e dopo manda il link nella sezione commenti! A presto, buon smanettamento!

- <a rel=”nofollow” href="https://alexandru-chindris.github.io/parallax_effect_tutorial/" target="_blank" title="parallax effect tutorial github repo">Il mio risultato</a>
