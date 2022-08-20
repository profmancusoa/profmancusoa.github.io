---
id: 2022-08-19-0
titolo: Come scrivere un post in Markdown
featured: false
autore: ProfMancusoa
data: 2022-08-19
cover: cover.webp
introduzione: Questo post descrive brevemente come creare nuovi post
sezione: Blog
categorie:
  - Blog
---

# Come scrivere un post

Il formato **Markdown** è oggi giorno molto popolare ed offre innumerevoli vantaggi nella scrittura di documenti e articoli.
Per tale motivo i post di questo blog si scrivono in questo formato. In questo modo per poter scrivere su questo blog non sarà necessario conoscere l'HTML e la realizzazione di articoli sarà veloce e di immediata comprensione.

Per semplificare e razionalizzare, la struttura di questo Blog è necessario rispettare alcune semplici convenzioni.

## Convenzioni

### Formato file

Ogni articolo o post di questo blog è rappresentato da un file testuale in formato Markdown.
Il file del post deve essere localizzato nella directory `src/routes/blog` e deve avere un estensione `.md`

Il file deve avere un `frontmatter` che permette all'autore di specificare alcuni importanti metadati relativi al posto stesso.
Il frontmatter è scritto in `YAML` deve essere così composto:

```yaml
---
id: <id univoco del posto>
titolo: <titolo del post> -  solo lettere numeri e singolo spazio tra le parole
featured: true|false - indica se il post è featured sulla home page
autore: <nome autore>
data: <yyyy-mm-dd>
cover: <immagine della cover del post>
introduzione: <breve introduzione che viene visualizzata sulla home>
sezione: <sezione principale del blog>
categorie:
  - categoria 1
  - categoria 2
  - categoria 3
---
```

Vediamo un esempio

```yaml
---
id: 2022-08-19-0
titolo: Blog Post Template
featured: true
autore: ProfMancusoa
data: 2022-08-19
cover: cover.jpg
introduzione: Questo post descrive brevemente come creare nuovi post
sezione: Blog
categorie:
  - Programmazione
  - Java Script
  - Front End
---
```

Il file .md deve aver per nome lo `slug` del titolo. In altre parole il nome del file deve essere uguale al titolo dove:

- tutte le lettere sono convertite in minuscolo
- gli spazi sono conventiti in **-** (dash)

### Cover image

In modo analogo al nome del file .md, anche il file della cover del post, indicato nel frontmatter, deve essere posizionato nella directory `static/img/posts/[slug]`

dove la sub-directory **_[slug]_** è esattamente uguale al nome del file.

Vediamo un esempio:

```yaml
---
---
titolo: Blog Post Template
cover: cover.jpg
---
```

Il file _cover.jpg_ deve essere posizionato in `static/img/posts/blog-post-template/cover.jpg` e il file del post deve essere posizionato in `src/routes/blog/blog-post-template.md`

Come anticipato le convenzioni sono pochissime ed utili a mantener eil blog ordinato nel tempo.
Non ci sono altre convenzioni da rispettare.

**Non mi resta che augurarvi buon blogging !!!!** <span style="font-size: 50px;">&#129322;</span>
