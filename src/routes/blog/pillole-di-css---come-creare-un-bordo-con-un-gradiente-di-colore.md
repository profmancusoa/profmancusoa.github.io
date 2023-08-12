
---
id: 2023-08-12-1
titolo: Pillole di css - come creare un bordo con un gradiente di colore
featured: false
autore: ProfMancusoa
data: 2023-08-12
cover: pillole-css-bordo-gradiente.png
introduzione: Questa pillola di CSS mostra come creare un bordo con un gradiente di colore in modo da ottenere un'effetto grafico interessante ed utile.
pubblicato: false
sezione: Blog
categorie:
  - CSS
  - Trucchi
  - Pillole
  - Bordo
  - Gradiente
  - Colore
---

La proprietà CSS `border-color` permette di specificare il colore del bordo di un elemento, scegliendolo tra una gamma vastissima di colori possibili.

```html
<div class="testo">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus quis tellus ....
</div>
```

```css
.testo {
    border: 3px solid red;
    width: 50%;
    margin: auto;
    padding: 0.5rem;
}
```

<div class="div1 div-n">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus quis tellus et hendrerit. Integer est mi, sagittis non iaculis aliquet, placerat id felis. Pellentesque maximus placerat ligula et lobortis. 
</div>

<div class="div2 div-n">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus quis tellus et hendrerit. Integer est mi, sagittis non iaculis aliquet, placerat id felis. Pellentesque maximus placerat ligula et lobortis. 
</div>

<div class="div3 div-n">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus quis tellus et hendrerit. Integer est mi, sagittis non iaculis aliquet, placerat id felis. Pellentesque maximus placerat ligula et lobortis. 
</div>


Tuttavia, il colore è uniforme per tutto il bordo e non esiste una proprietà CSS che permette di creare un bordo con un gradiente di colore tra un colore iniziale ed un colore finale.

## Aggiungiamo un bordo con un gradiente di colore ad un DIV

Per aggiungere un bordo con gradiente di colore, usiamo questo piccolo trucco e inseriamo il nostro div all'interno di un div contenitore.
Rimuoviamo il bordo del div testo ed impostiamo un background al colore di sfondo (es: bianco).
Infine impostiamo il colore di sfondo del div contenitore a gradiente e impostiamo lo spessore del bordo inserendo un padding tra il div contenitore e il div testo.

```html
<div class="contenitore">
    <div class="testo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus quis tellus ....
    </div>
</div>
```

```css
.contenitore {
    width: 50%;
    margin: auto;
    background: linear-gradient(-90deg, red, yellow);
    padding: 10px;
}

.testo {
    padding: 0.5rem;
    background: white;
}
```

<div class="contenitore1">
    <div class="testo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus quis tellus ....
    </div>
</div>

<div class="contenitore2">
    <div class="testo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus quis tellus ....
    </div>
</div>

<div class="contenitore3">
    <div class="testo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus quis tellus ....
    </div>
</div>


## Conclusione

Anche in questa pillola abbiamo visto come con poche proprietà CSS possiamo creare degli effetti molto utili per la realizzazioni dei nostri siti e web app.
Avere un bordo con un gradiente di colore può essere utile in molte occasioni e fornisce un dettaglio in più ai nostri progetti.

Vi invito a sperimentare con questa pillola di CSS e ad adottare questa tecnica nei vostri progetti.
Non dimenticate di condividere questo articolo con la vostra rete, potrebbe essere utile anche ai vostri amici o altre persone.

Se l'articolo ti è piaciuto metti un like e lascia un commento qui sotto.

<style>
    .contenitore1 {
        width: 50%;
        margin: auto;
        background: linear-gradient(-90deg, red, yellow);
        padding: 10px;
        margin-bottom: 1rem;
    }

     .contenitore2 {
        width: 50%;
        margin: auto;
        background: linear-gradient(90deg, blue, yellow);
        padding: 10px;
        margin-bottom: 1rem;
    }

     .contenitore3 {
        width: 50%;
        margin: auto;
        background: linear-gradient(-90deg, green, yellow);
        padding: 10px;
        margin-bottom: 1rem;
    }

    .testo {
        padding: 0.5rem;
        background: white;
    }

    .div-n {
        width: 50%;
        margin: auto;
        padding: 0.5rem;
        margin-bottom: 1rem;
    }
    .div1 {
        border: 3px solid red;
    }

    .div2 {
        border: 3px solid blue;
    }

    .div3 {
        border: 3px solid green;
    }
</style>