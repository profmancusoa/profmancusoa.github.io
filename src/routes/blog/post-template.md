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
  - Blog
---

# Come scrivere un post

I post di questo blog si scrivono in **Markdown**, così anche i non tecnici possono contribuire.
In ogni caso il markdown è molto comodo ed immediato per tutti.

Per scrivere i post è necessario rispettare alcune semplici convenzioni, vediamole.

## Convenzioni

### Formato file

Il file del post deve essere localizzato nella directory `src/routes/blog` e deve avere un estensione `.md`

Il file deve avere un **frontmatter** così composto:

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

### Cover image

Il file della cover del post, indicato nel frontmatter, deve essere posizionato nella directory `static/img/posts/<slug>`

Vediamo un esempio:

```yaml
---
---
titolo: Blog Post Template
cover: cover.jpg
---
```

Il file _cover.jpg_ deve essere posizionato in `static/img/posts/blog-post-template/cover.jpg`.

Non ci sono altre convenzioni da rispettare.

**Non mi resta che augurarvi buon blogging!!!! :)**
