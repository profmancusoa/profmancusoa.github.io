
---
id: 2023-08-16-1
titolo: Pillole di css - come creare un testo con una foto come sfondo
featured: false
autore: ProfMancusoa
data: 2023-08-16
cover: pillole-css-come-creare-un-testo-con-una-foto-come-sfondo.png
introduzione: Questa pillola di CSS mostra come realizzare un piacevole effetto che permette di colorare un testo con un immagine.
pubblicato: false
sezione: Blog
categorie:
  - CSS
  - Trucchi
  - Pillole
  - Clip
  - Testo
---

# Background Clip

<div class="contenitore">
    <h1 class="banner">HELLO!</h1>
</div>

<br>

Spesso vediamo in giro su vari siti, un'effetto molto bello che consiste nel colorare un testo con un'immagine. In altre parole abbiamo un testo trasparente che fa vedere un'immagine sottostante.

Con questa pillola di CSS vediamo come realizzare tale effetto che potrete utilizzare nei vostri siti e nelle vostre web app.

## Elementi base

Per realizzare l'effetto abbiamo bisogno di tre elementi essenziali:

### Un contenitore

<div class="cont-inizio"></div>

```html
<div class="contenitore"></div>

.contenitore {
        background-color: black;
        text-align: center;
        border-radius: 20px;
    }
```
<br>

### Un testo

<br><br><br>
<h1 class="text-init">HELLO!</h1>

```html
<h1 class="banner">HELLO!</h1>

.banner  {
    display: inline;
    font-size: 13rem;
    font-family: 'Lilita One', cursive;
    letter-spacing: 1rem;
}
```

<br>

### Un'immagine di sfondo

<img src="https://picsum.photos/id/110/600/200">

```html
<img src="https://picsum.photos/id/110/600/200">
```

<br>

### Creiamo l'effetto di trasparenza e di clip

Bene ora è il momento di assemblare il tutto e di rendere il testo trasparente in modo che lasci vedere l'immagine di sfondo.
Scelgo un font che mi piace da google fonts in modo da ottenere un'effetto più piacevole.

Quindi vediamo come modificare il CSS del testo in modo da creare l'effetto  voluto.

```html
<div class="contenitore">
    <h1 class="banner">HELLO!</h1>
</div>
```

```css
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

.contenitore {
    background-color: black;
    text-align: center;
    border-radius: 20px;
}

.banner {
    display: inline;
    font-size: 13rem;
    background-image: url('https://picsum.photos/id/110/600/200');
    background-size: cover;
    color: transparent;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    font-family: 'Lilita One', cursive;
    letter-spacing: 1rem;
}
```

<br>

Quindi impostiamo come immagine di sfondo del testo (h1), un'immagine a nostro piacimento, magari delle vacanze estive.
Per far si che l'immagine si adatti in modo corretto al contenitore impostiamo *background-size* al valore *cover*.
Impostiamo il colore del testo a *transparent*, questo è fondamentale altrimenti il testo avrà un colore pieno.

Infine utilizziamo una proprietà vendor specific `-webkit-background-clip` e `-moz-background-clip` che permette di riempire un testo (*text*) con l'immagine di sfondo invece di un colore solido.

In questo modo otteniamo l'effetto finale desiderato pronto per essere utilizzato nei nostri siti e web app

<br>

<div class="contenitore">
    <h1 class="banner">HELLO!</h1>
</div>

## Conclusioni

Anche in questa pillola abbiamo visto come con poche proprietà CSS possiamo creare degli effetti molto utili per la realizzazioni dei nostri siti e web app.
Poter riempire un testo non con un colore di sfondo solido, ma con un'immagine ci permette di ottenere un effetto molto interessante ed utile.

Vi invito a sperimentare con questa pillola di CSS e ad adottare questa tecnica nei vostri progetti.
Non dimenticate di condividere questo articolo con la vostra rete, potrebbe essere utile anche ai vostri amici o altre persone.

Se l'articolo ti è piaciuto metti un like e lascia un commento qui sotto.





<style>
    @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

    .cont-inizio {
        background: black;
        width: 400px;
        height: 200px;
        text-align: center;
        border-radius: 20px;
    }
    .contenitore {
        background-color: black;
        text-align: center;
        border-radius: 20px;
    }

    .text-init  {
        display: inline;
        font-size: 13rem;
        font-family: 'Lilita One', cursive;
        letter-spacing: 1rem;
    }

    .banner {
        display: inline;
        font-size: 13rem;
        background-image: url('https://picsum.photos/id/110/600/200');
        background-size: cover;
        color: transparent;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        font-family: 'Lilita One', cursive;
        letter-spacing: 1rem;
    }
</style>
