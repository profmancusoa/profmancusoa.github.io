---
id: 2022-08-22-1
titolo: Come navigare tra le finestre di PopOS
featured: false
autore: ProfMancusoa
data: 2022-08-22
cover: cover.webp
introduzione: Questo post descrive come alterare il funzionamento standard della combinazione di tasti ALT+TAB
pubblicato: false
sezione: Linux
categorie:
  - PopOS
  - Linux
  - Configurazione
---

# Navigare tra le finestre e tra le applicazioni

Normalmente, almeno io sono abituato così, quando premo la combinazione sulla tastiera ALT+TAB mi aspetto di muovermi/navigare tra le finestre delle varie applicazioni.

PopOS fà una distinzione tra navigazione tra applicazioni e navigazione tra finestre.

![popos alt-tab](/img/posts/come-navigare-tra-le-finestre-di-popos/popos_01.webp)

Per default quando si preme ALT+TAB PopOS visualizza la lista delle applicazioni aperte (es: gimp, chrome, vscode)
Se un'applicazione ha più di una finestra aperta, viene visualizzato un triangolino bianco, e per l'applicazione selezionata vengono visualizzate le sue finestre disponibili.

Pertanto in PopOS, premendo ALT+TAB si naviga attraverso le applicazioni, cioè premendo successivamente ALT+TAB ci si muove tra le varie applicazioni disponibili, ma **NON** tra le finestre di una singola applicazione.

## Configuriamo PopOS

Tuttavia PopOS permette di cambiare facilmente questo comportamento. Basta assegnare l'azione di navigazione tra finestre allo shortcut ALT+TAB.

Per fare ciò:

### 1. Apri l'applicazione di configurazione di PopOS (settings)

<br>

![settings](/img/posts/come-navigare-tra-le-finestre-di-popos/popos_02.webp)

<br>


### 2. Selezionare la tastiera e poi la customizzazione delle scorciatoie

<br>

![shortcuts](/img/posts/come-navigare-tra-le-finestre-di-popos/popos_03.webp)

<br>

### 3. Selezionare *Navigation*

<br>

![navigation](/img/posts/come-navigare-tra-le-finestre-di-popos/popos_04.webp)

<br>

### 4. Rimuovere ALT + TAB

<br>

![switch-app](/img/posts/come-navigare-tra-le-finestre-di-popos/popos_05.webp)

<br>

Nel sottomenu *Switch applications* premere i 3 puntini e selezionare `Remove Alt+Tab`

In questo modo abbiamo rimosso il comportamento di default di PopOS ed ora la navigazione tra applicazione viene attivata solo da `Super + TAB`, che sulla maggioranza delle tastiere equivale a `Tasto Windows + TAB` &#x1F910

### 5. Aggiungere ALT + TAB

<br>

![switch-win](/img/posts/come-navigare-tra-le-finestre-di-popos/popos_06.webp)

<br>

Scendere fino alla voce *Switch Windows*, selezionare i 3 puntini e cliccare su `Add shortcut`.

Ora si apre una finestra che richiede di premere sulla tastiera la combinazione da assegnare, nel nostro caso `ALT + TAB`.

Successivamente premer eil pulsante `Set`

<br>

![switch-win-tab](/img/posts/come-navigare-tra-le-finestre-di-popos/popos_07.webp)

<br>

In questo modo abbiamo assegnato la combinazione `ALT+TAB` alla funzionalità di navigazione tra finestre, senza perdere la capacità di navigare tra le applicazioni `Super + TAB`.

In questo modo alla pressione di **ALT + TAB** ora verranno visualizzate tutte le finestre e le successive pressioni della combinazione ti permetteranno di navigare tra le finestre.

<br>

![alt tab](/img/posts/come-navigare-tra-le-finestre-di-popos/popos_08.webp)

<br>

Abbiamo così configurato ed adattato il sistema alle nostre specifiche esigenze. Linux e PopOS sono un'ottima combinazione per ottenere un ambiente di lavoro e studio flessibile e configurabile a piacimento.

*ProfMancusoa*