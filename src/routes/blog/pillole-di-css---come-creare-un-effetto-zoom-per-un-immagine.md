
---
id: 2023-08-16-1
titolo: Pillole di CSS - come creare un effetto zoom per un immagine
featured: true
autore: ProfMancusoa
data: 2023-11-03
cover: pillole-css-zoom-immagine.webp
introduzione: Realizziamo un effetto zoom su un'immagine al passaggio del mouse. L'effetto può essere utile nei tuoi siti web.
pubblicato: true
sezione: Blog
categorie:
  - CSS
  - Trucchi
  - Pillole
  - Zoom
  - Immagine
---

## Effetto Zoom di un'immagine

In molte gallerie di immagini sul web, vediamo dei piacevoli effetti per rendere la nostra pagina meno noiosa.
Uno molto carino è quello di zoom al passaggio del mouse sopra l'immagine (*hover*).

<div class="gallery">
    <div class="contenitore">
        <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
    </div>
    <div class="contenitore">
        <img src="https://picsum.photos/id/237/530/354" alt="cagnolino" />
    </div>
    <div class="contenitore">
        <img src="https://picsum.photos/id/76/530/354" alt="baracca" />
    </div>
</div>

<br>

<br>


Quindi visivamente possiamo comprendere il funzionamento dell'effetto grafico. All'inizio l'immagine viene visualizzata con uno zoom del 100% (visualizzazione normale) e al passaggio del mouse sull'immagine, questa viene ingrandita ad uno zoom superiore al 100% (nell'esempio al 150%).
L'effetto dello zoom non avviene istantaneamente ma ci mette un certo tempo (nell'esempio 1 secondo).

## Realizziamo l'effetto passo dopo passo

### Contenitore o Wrapper della gallery

Creiamo il wireframe della nostra gallery in modo da avere subito un'idea del risultato finale.
Successivamente aggiungeremo tutti i dettagli.

Iniziamo a definire il *contenitore* della gallery che conterrà tutte le foto. Utilizziamo *flexbox* in modo da disporre gli elementi in modo automatico
<div class="gallery-step1">
    Qui inserisco le foto
</div>

<br>

<br>


```html
<div class="gallery">
    Qui inserisco le foto
</div>
```

```css
.gallery {
    border: 5px solid red;
    display: flex;
}
```

### Foto

Ogni foto (img) è inserita in un div *contenitore* in modo da poterne controllare tutti gli aspetti necessari a raggiungere il risultato finale

```html
<div class="contenitore">
    <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
</div>
```

```css
.contenitore {
    border: 5px solid yellow;
    width: 265px;
    height: 177px;
}

.contenitore img {
    width: 100%;
    height: 100%;
}
```

<div class="contenitore-step2">
    <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
</div>


<br>


Un *contenitore* contiene una sola foto, mentre per l'immagine andiamo ad occupare tutto lo spazio disponibile nel contenitore fissando al 100% le proprietà *width* e *height*.

Quindi, mettendo insieme gallery e foto otteniamo il seguente risultato

<div class="gallery-step2">
    <div class="contenitore-step2a">
        <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
    </div>
    <div class="contenitore-step2a">
        <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
    </div>
    <div class="contenitore-step2a">
        <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
    </div>
</div>


<br>


### Distanziamo le foto
Come vediamo le foto sono tutte vicine le une alle altre, pertanto è necessario aggiungere un gap. Facciamolo in questo modo

```css
.gallery {
    border: 5px solid red;
    display: flex;
    gap: 2rem;
}
```

<div class="gallery-step3">
    <div class="contenitore-step3">
        <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
    </div>
    <div class="contenitore-step3">
        <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
    </div>
    <div class="contenitore-step3">
        <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
    </div>
</div>


<br>


### Effetto Zoom
Ora aggiungiamo l'effetto zoom, facendo in modo che quando passiamo sopra l'immagine (*hover*) l'immagine venga scalata al 150% della sua dimensione iniziale

```css
.contenitore:hover img {
    scale: 150%;
}
```

<div class="gallery-step3">
    <div class="contenitore-step4">
        <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
    </div>
    <div class="contenitore-step4">
        <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
    </div>
    <div class="contenitore-step4">
        <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
    </div>
</div>

<br>


Passando il mouse su ogni immagine vediamo che effettivamente l'immagine viene "zoommata". Tuttavia l'immagine ingrandita esce, straborda, dal suo dive. In altre parole l'immagine va in *overflow*. Quindi risolviamo questo problema impostando la proprietà *overflow* del *contenitore* in modo che non venga visualizzato (*hidden*)

```css
.contenitore {
    border: 5px solid yellow;
    width: 265px;
    height: 177px;
    overflow:hidden;
}
```

<div class="gallery-step3">
    <div class="contenitore-step4a">
        <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
    </div>
    <div class="contenitore-step4a">
        <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
    </div>
    <div class="contenitore-step4a">
        <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
    </div>
</div>

<br>

<br>


Molto bene, ora l'immagine viene ingrandita, al passaggio del mouse, senza fuoriuscire dal suo contenitore.

### Rallentiamo l'effetto zoom
Siamo quasi in conclusione, e come visto all'inizio l'effetto zoom non avviene istantaneamente ma impiega 1 secondo o 1000 ms.
Per aggiungere questa funzionalità dobbiamo aggiungere una transizione sull'immagine di 1 secondo. Facciamolo in questo modo

```css
.contenitore img {
    width: 100%;
    height: 100%;
    transition: scale 1000ms;
}
```

<div class="gallery-step3">
    <div class="contenitore-step5">
        <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
    </div>
    <div class="contenitore-step5">
        <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
    </div>
    <div class="contenitore-step5">
        <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
    </div>
</div>

<br>

### Rimuoviamo il wireframe

Bene siamo arrivati alla fine, abbiamo ottenuto l'effetto di zoom descritto all'inizio.
Ora ripuliamo il tutto rimuovendo il wireframe e il CSS non necessario ed otteniamo la versione finale

```css
.gallery {
    display: flex;
    gap: 2rem;
}

.contenitore- {
    border: 2px solid black;
    overflow: hidden;
}

.contenitore img {
    width: 100%;
    height: 100%;
    transition: scale 1000ms;
}

.contenitore:hover img {
    scale: 150%;
}
```

Ora usiamo una foto diversa per ogni elemento del flexbox ed otteniamo la nostra foto gallery con effetto zoom al passaggio del mouse

<div class="gallery">
    <div class="contenitore">
        <img src="https://picsum.photos/id/34/530/354" alt="bidone" />
    </div>
    <div class="contenitore">
        <img src="https://picsum.photos/id/237/530/354" alt="cagnolino" />
    </div>
    <div class="contenitore">
        <img src="https://picsum.photos/id/76/530/354" alt="baracca" />
    </div>
</div>

<br>


### Conclusioni
Bene abbiamo visto come creare una foto gallery con un piacevole effetto zoom.
Ti invito a sperimentare con il tempo della transizione per trovare il valore adatto al tuo sito o applicazione.

Voglio anche sottolineare l'approccio `Top-Down` che abbiamo seguito per sviluppare la gallery. 

Come visto abbiamo sviluppato la nostra gallery partendo dall'alto (`Top`) cioè da una versione molto base (solo il wireframe), per aggiungere progressivamente dettagli e funzionalità fino a raggiungere il risultato finale (`Down`).
In questo modo abbiamo seguito e compreso a fondo tutti i passi e quindi abbiamo imparato come con poche proprietà CSS sia possibile realizzare effetti che fino a qualche anno fà richiedevano molto codice JavaScript.


Vi invito a sperimentare con questa pillola di CSS, a mettere un like e fatemi sapere nei commenti se la trovate utile e siete riusciti ad usarla nei vostri siti e web app.

Non dimenticate di condividere questo articolo con la vostra rete, potrebbe essere utile anche ai vostri amici o altre persone.
Se l'articolo ti è piaciuto metti un like e lascia un commento qui sotto.

<style>
    .gallery-step1 {
        border: 5px solid red;
        height: 170px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
    }

    .gallery-step2 {
        border: 5px solid red;
        display: flex;
    }

    .gallery-step3 {
        border: 5px solid red;
        display: flex;
        gap: 2rem;
    }

    .contenitore-step2 {
        border: 5px solid yellow;
        width: 265px;
        height: 177px;
        margin: auto;
    }

    .contenitore-step2 img {
        width: 100%;
        height: 100%;
    }

    .contenitore-step2a {
        border: 5px solid yellow;
    }

    .contenitore-step2a img {
        width: 100%;
        height: 100%;
    }

    .contenitore-step3 {
        border: 5px solid yellow;
    }

    .contenitore-step3 img {
        width: 100%;
        height: 100%;
    }

    .contenitore-step4 {
        border: 5px solid yellow;
    }

    .contenitore-step4 img {
        width: 100%;
        height: 100%;
    }

    .contenitore-step4:hover img {
        scale: 150%;
    }

    .contenitore-step4a {
        border: 5px solid yellow;
        overflow: hidden;
    }

    .contenitore-step4a img {
        width: 100%;
        height: 100%;
    }

    .contenitore-step4a:hover img {
        scale: 150%;
    }

    .contenitore-step5 {
        border: 5px solid yellow;
        overflow: hidden;
    }

    .contenitore-step5 img {
        width: 100%;
        height: 100%;
        transition: scale 1000ms;
    }

    .contenitore-step5:hover img {
        scale: 150%;
    }

    .gallery {
        display: flex;
        gap: 2rem;
    }
    .contenitore {
        overflow:hidden;
    }

    .contenitore img {
        width: 100%;
        height: 100%;
        transition: scale 1000ms;
    }

    .contenitore:hover img {
        scale: 150%;
    }
</style>