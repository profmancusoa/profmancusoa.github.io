
---
id: 2023-08-11-1
titolo: Pillole di css - come rendere un immagine responsive
featured: false
autore: ProfMancusoa
data: 2023-08-11
cover: pillole-css-come-rendere-un-immagine-responsive.png
introduzione: In questa pillola di CSS vediamo come rendere un'immagine responsive in modo che si adatti dinamicamente alle dimensioni del suo contenitore mantenendo un'aspetto corretto
pubblicato: false
sezione: Blog
categorie:
  - CSS
  - Trucchi
  - Pillole
  - responsive
---

# Immagini Responsive

Durante lo sviluppo di un sito o app web di tipo responsive, è importante che tutti gli elementi della pagina si comportino in modo corretto adattandosi alla dimensione della view port del browser (desktop o mobile).

Nell'esempio sottostante al variare della dimensione del contenitore non varia la dimensione dell'immagine che rimane costante. Questo è proprio contro il concetto di responsive.

<script>
let l = "100%";
let l2 = "100%";

function onrange(e) {
    l = e.target.value + "%";
}

function onrange2(e) {
    l2 = e.target.value + "%";
}
</script>

<center>{l}</center>
<input type="range" id="larghezza" name="larghezza" min="20" max="100" value="100" step="10" style="width: 100%;" on:input={onrange}/>

<br><br>

<div class="contenitore" style="--size:{l};">
        <img src="https://picsum.photos/id/237/533/300" alt="cagnolino">
</div>

<style>
.contenitore, .contenitore2 {
    width: var(--size);
    border: 3px solid black;
    padding: 1rem;
    gap: 1rem;
}

.contenitore2 img  {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>

<br>

## Rendiamo responsive l'immagine con un pò di CSS

Quindi vediamo come rendere l'immagine dell'esempio precedente responsive con poche righe di CSS 

```html
<div class="contenitore">
    <img src="https://picsum.photos/id/237/533/300" alt="cagnolino">
</div>
```

```css
.contenitore img  {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```


<center>{l2}</center>
<input type="range" id="larghezza2" name="larghezza2" min="20" max="100" value="100" step="10" style="width: 100%;" on:input={onrange2}/>

<br><br>

<div class="contenitore2" style="--size:{l2};">
    <img src="https://picsum.photos/id/237/533/300" alt="cagnolino">
</div>

<br>

In questo modo l'immagine diventa responsive e assume sempre le dimensioni del suo contenitore.

La proprietà `object-fit: cover` garantisce che il contenuto sostituito viene dimensionato per mantenere le proporzioni mentre riempie l'intera area del contenuto dell'elemento. Se le proporzioni dell'oggetto non corrispondono alle proporzioni della suo contenitore, l'oggetto verrà ritagliato automaticamente in modo da adattarsi.


## Conclusione

Questa pillola è tanto breve quanto importante. Avere immagini responsive che hanno sempre un bell'aspetto nel proprio sito è importantissimo per migliorare l'esperienza utente.

Anche questa volta abbiamo come una semplice proprietà CSS possa fare magie e renderci la vita più semplice durante lo sviluppo del nostro sito o app web.

Vi invito a sperimentare con questa pillola di CSS e ad adottare questa tecnica nei vostri progetti.

Non dimenticate di condividere questo articolo con la vostra rete, potrebbe essere utile anche ai vostri amici o altre persone.
Se l'articolo ti è piaciuto metti un like e lascia un commento qui sotto.