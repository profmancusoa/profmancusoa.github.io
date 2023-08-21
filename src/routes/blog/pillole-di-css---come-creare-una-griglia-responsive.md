
---
id: 2023-08-16-1
titolo: Pillole di CSS - come creare una griglia responsive
featured: false
autore: ProfMancusoa
data: 2023-08-16
cover: pillole-css-griglia-responsive.png.webp
introduzione: Realizziamo una griglia responsive con poche istruzione CSS. Vediamo come utilizzare la proprietà auto-fill e la funzione CSS minmax
pubblicato: false
sezione: Blog
categorie:
  - CSS
  - Trucchi
  - Pillole
  - Grid
  - Responsive
---

## Quante colonne deve avere la mia griglia?

Spesso quando realizziamo una griglia con `CSS Grid` vorremmo che gli elementi fossero disposti automaticamente per colonne.
In altre parole non vogliamo predeterminare il numero di colonne che la griglia deve avere.

Al contrario vogliamo che la griglia sia responsive e si adatti automaticamente alle dimensioni del contenitore.
Quindi vogliamo che il numero di colonne sia automaticamente calcolato. Vediamo come fare

<script>
let l = "100%";

function onrange(e) {
    l = e.target.value + "%";
}
</script>

<center>{l}</center>
<input type="range" id="larghezza" name="larghezza" min="20" max="100" value="100" step="10" style="width: 100%;" on:input={onrange}/>
<br>
<br>
<div class="contenitore" style="--size:{l};">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
    <div class="item">9</div>
    <div class="item">10</div>
</div>

<style>
.contenitore {
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 10px;
    /* width: calc( var(--size) * 1px ); */
    width: var(--size);
    border: 1px solid black;
    padding: 20px;
}

.item {
    width: 100px;
    height: 50px;
    background-color: orange;
    border: 1px solid black;
    text-align: center;
    line-height: 50px;
}
</style>

## HTML e CSS

Disponiamo 10 elementi all'interno di un contenitore

```html
<div class="contenitore">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
    <div class="item">9</div>
    <div class="item">10</div>
</div>
```

```css
.contenitore {
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 10px;
    width: 100%;
    border: 1px solid black;
    padding: 20px;
}

.item {
    width: 100px;
    height: 50px;
    background-color: orange;
    border: 1px solid black;
    text-align: center;
    line-height: 50px;
}
```

 Gli item sono tutti larghi 100px e sono distanziati l'uno dall'altro da 10px.

 ## auto-fill e minmax

 Per calcolare in modo automatico quante colonne deve avere la griglia utilizziamo la funzione css `minmax` e la proprietà `auto-fill` di CSS grid

 La linea chiave per rendere la griglia flessibile e responsive è

 ```css
 grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
 ```

 In pratica stiamo dicendo a CSS di creare un griglia con un template per le colonne in modo che gli elementi occupino tutto lo spazio disponibile `auto-fill` e che ogni colonna della griglia abbia una dimensione (`minmax`) di almeno 100px e al massimo di 1fr

 Come possiamo vedere nell'esempio interattivo all'inizio dell'articolo,  al variare della dimensione del contenitore gli elementi vengono automaticamente disposti all'interno della griglia e il numero di colonne viene calcolato automaticamente.

## Conclusioni

CSS è ormai uno strumento molto potente e permette di realizzare pagine e componenti HTML che un tempo avrebbero richiesto molto codice JS.

Vi invito a sperimentare con questa pillola di CSS e fatemi sapere nei commenti se la trovate utile e siete riusciti ad usarla nei vostri siti e web app.

Non dimenticate di condividere questo articolo con la vostra rete, potrebbe essere utile anche ai vostri amici o altre persone.
Se l'articolo ti è piaciuto metti un like e lascia un commento qui sotto.
