---
id: 2022-08-21-1
titolo: Come pubblicare un post sul blog
featured: false
autore: ProfMancusoa
data: 2022-08-21
cover: cover.webp
introduzione: Questo post descrive dettagliatamente come creare e pubblicare un post sul blog ProfMancusoa
sezione: Blog
categorie:
  - Blog
---

<script>
    import Asciinema from '$lib/components/Asciinema.svelte';
</script>

In questo post, è mostrato in dettaglio, come creare e pubblicare un post sul blog ProfMancusoa e come fare il preview prima della pubblicazione.

## 1 Cloniamo il repository del blog

Per recuperare la URL del blog vai sul repository ufficiale [ProfMancusoa](https://github.com/profmancusoa/profmancusoa.github.io)

![pos_01](/img/posts/come-pubblicare-un-post-sul-blog/pos_01.webp)

Come mostrato in figura al punto 3, copia la URL del repository.

Ora esegui i comandi,in una shell di Linux, come mostrato sotto:

<Asciinema uid="516289" />

Se tutto è andato a buon fine vedremo, si aprirà automaticamente nel browser la pagina locale del blog.

![pos_03](/img/posts/come-pubblicare-un-post-sul-blog/pos_03.webp)

## 2 Creiamo il file del post

In Visual Studio Code, nella directory `src/routes/blog` creau un file .md con nome uguale allo slug del titolo ( es: **_il-mio-post.md_** )

![pos_05](/img/posts/come-pubblicare-un-post-sul-blog/pos_05.webp)

## 3 Editiamo l'articolo

Ora scrivi il tuo articolo nel file appena creato, facendo attenzione a compilare correttamente il frontmmatter

```md
---
id: 2022-08-21-1
titolo: Il mio post
featured: false
autore: JohnDoe
data: 2022-08-21
cover: cover.webp
introduzione: Questo è il primo posti di JohnDoe e parla di Linux
sezione: IT
categorie:
  - Linux
---

# Cos'è Linux

Linux è un sistema operativo, ovvero quell'insieme di programmi essenziali per far funzionare il computer e farci
qualcosa di utile o divertente. E' una alternativa a Windows e a MacOS, e può essere installato al loro posto
(o insieme, sullo stesso computer).

Più in generale Linux è il primo rappresentante del software cosiddetto "libero" ("freesoftware", in inglese), ovvero
quel software che viene distribuito con una licenza che ne permette non solo l'utilizzo da parte di chiunque ed in
qualsiasi circostanza ma anche la modifica, la copia e l'analisi.
```

## 4 Aggiungiamo l'immagine cover dell'articolo

Crea una directory `il-mio-post` dentro il seguente percorso `static/img/posts`

All'interno della directory appena creata, inseirsci il file _cover.webp_ (il nome è quello specificato nel frontmatter)

![pos_06](/img/posts/come-pubblicare-un-post-sul-blog/pos_06.webp)

## 5 Verica del post in locale

Se tutto è andato bene, ora nel browser vedrai comparire il tuo nuovo articolo. Facile no?!!!&#9996

![pos_07](/img/posts/come-pubblicare-un-post-sul-blog/pos_07.webp)

Se clicchisull'immagine del post o sul pulsante **Leggi** vedrai il tuo articolo completo. Così potrai verificare che tutto sia ok e che appaia come lo avevi pensato.

![pos_08](/img/posts/come-pubblicare-un-post-sul-blog/pos_08.webp)

Se tutto è ok e non devi ulteriormente modificare il tuo articolo, puoi passare ora alla richiesta di pubblicazione.

## 6 Pubblichiamo il post

Per pubblicare il post è necessario fare il push del branch su github e successivamente creare una **Pull Request (PR)**.

<Asciinema uid="516293" />

Una volta fatto il push del branch, vai sulla pagina del repository e premi il pulsante `Compare & pull request`

![pos_09](/img/posts/come-pubblicare-un-post-sul-blog/pos_09.webp)

Aggiungi un commento esplicativo e premi il pulsante `Create pull request`

![pos_10](/img/posts/come-pubblicare-un-post-sul-blog/pos_10.webp)

Ottimo, come vedi una nuova pull request è stata creata. &#128076

Ora sarà possibile per l'amministratore verificare se tutto è corretto, ed in caso affermativo pubblicare il tuo articolo su blog in produzione.

![pos_11](/img/posts/come-pubblicare-un-post-sul-blog/pos_11.webp)

Come abbiamo visto in questo post, per creare e pubblicare un nuovo articolo usiamo un metodo da sviluppatore ed usiamo git e github come in un ambiente professionale di sviluppo software.

Questo ci fornisce molta flessibilità e dopo tutto ci permette di iniziare ad imparare unos trumento utilissimo nel mondo del lavoro per gli informatici.

Non mi resta che augurarti **Buon Bloggin** &#128513 &#129299 &#128077

_ProfMancusoa_
