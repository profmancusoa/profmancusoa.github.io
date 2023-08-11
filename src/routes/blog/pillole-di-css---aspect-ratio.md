
---
id: 2023-08-06-1
titolo: Pillole di CSS - aspect ratio
featured: false
autore: ProfMancusoa
data: 2023-08-06
cover: pillole-css-aspect-ratio.png
introduzione: Analizziamo in dettaglio la proprietà aspect-ratio per controllare il rapporto tra le dimensioni di un elemento HTML
pubblicato: false
sezione: Blog
categorie:
  - CSS
  - Trucchi
  - Pillole
  - aspect-ratio
---

## Controlliamo l'aspect ratio di un div

Spesso quando sviluppiamo un sito `responsive`  impostiamo la larghezza di un componente HTML in percentuale o comunque utilizziamo un'unità di misura relativa e non assoluta.
Questo ci garantisce che al variare della dimensione della view port del browser, il nostro elemento si adatterà automaticamente.
Tuttavia non abbiamo il pieno controllo di larghezza e altezza in quanto vengono impostate automaticamente al fine di essere responsive.

In alcune situazioni, per esempio in una foto gallery, è utile poter aver il controllo del rapporto tra larghezza e altezza, in altre parole vogliamo poter definire l'apect ratio di un div o di un'immagine anche in caso di sito responsive.


## La proprietà aspect-ratio

CSS mette a disposizione una proprietà chiamata `aspect-ratio` che permette definire e mantenere costante l'aspect ratio di un elemento al variare delle sue dimensioni. Questo fà esattamente al caso nostro in quanto ci permette in un sito responsive di mantenere l'aspect-ratio ad un valore predeterminato.

Vediamo subito un'esempio di funzionamento:

<script>
let l = "100%";

function onrange(e) {
    l = e.target.value + "%";
}
</script>

<center>{l}</center>
<input type="range" id="larghezza" name="larghezza" min="20" max="100" value="100" step="10" style="width: 100%;" on:input={onrange}/>

<br><br>

<div class="contenitore" style="--size:{l};">
    <div class="foto">
        <img src="https://picsum.photos/300/300" >
    </div>
    <div class="foto">
        <img src="https://picsum.photos/400/400" >
    </div>
    <div class="foto">
        <img src="https://picsum.photos/500/500" >
    </div>
    <div class="foto">
        <img src="https://picsum.photos/600/600" >
    </div>
</div>

<style>
.contenitore {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: var(--size);
    border: 3px solid black;
    padding: 1rem;
    gap: 1rem;
}

.foto img {
    width: 100%;
    height: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
}
</style>

<br>

Ora vediamo come è realizzarlo:

```html
<div class="contenitore">
    <div class="foto">
        <img src="https://picsum.photos/300/300" >
    </div>
    <div class="foto">
        <img src="https://picsum.photos/400/400" >
    </div>
    <div class="foto">
        <img src="https://picsum.photos/500/500" >
    </div>
    <div class="foto">
        <img src="https://picsum.photos/600/600" >
    </div>
</div>
```
```css
.contenitore {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%
    border: 3px solid black;
    padding: 1rem;
    gap: 1rem;
}

.foto img {
    width: 100%;
    height: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
}
```

<br>

Il contenitore è una griglia  a due colonne in modo da disporre gli elementi in modo automatico.
Come si vede le immagino sono tutte di dimensioni diverse e con aspect ratio pario ad 1, cioè quadrate.
Tuttavia noi vogliamo che nella nostra griglia le immagini appaiano con un aspect-ratio di 16:9

Quindi dopo aver reso l'immagine resposisve impostando *width* e *height* al 100%, impostiamo `aspect-ratio` a 1.7777 ovvero 16/9.

Infine per adattare bene l'immagine al suo contenitore e non tagliare parti dell'immagine stessa, impostiamo la proprietà *object-fit* a *cover*
In questo modo otteniamo l'effetto desiderato che ci siamo prefissati all'inizio di questa pillola.


## Conclusione

Bene abbiamo nuovamente visto come una semplice proprietà CSS possa fare magie e renderci la vita più semplice durante lo sviluppo del nostro sito o app web.

Vi invito a sperimentare con questa pillola di CSS, provando altri valore di *aspect-ratio* per trovare il valore adatto al tuo sito o applicazione, a mettere un like e fatemi sapere nei commenti se la trovate utile e siete riusciti ad usarla nei vostri siti e web app.

Non dimenticate di condividere questo articolo con la vostra rete, potrebbe essere utile anche ai vostri amici o altre persone.
Se l'articolo ti è piaciuto metti un like e lascia un commento qui sotto.

