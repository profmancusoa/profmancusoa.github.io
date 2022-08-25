---
id: 2022-08-25-0
titolo: Come generare e gestire le password
featured: false
autore: Dario-Ruggieri
data: 2022-08-25
cover: cover.webp
introduzione: Post dedicato alla generazione e gestione delle password
sezione: IT
categorie: -password
---

# Password

## Introduzione

Uno dei temi più discussi del nostro tempo, ma che allo stesso modo viene spesso sottovalutato dagli utenti è sicuramente quello della password. Spesso si tende ad utilizzare password poco complesse e semplici da violare. Inoltre, si tende a conservale in modo poco sicuro.
Con questo articolo scoprirete come _generare_ le vostre password e come _conservarle_ in maniera corretta.

## Generatori di Password

Esistono migliaia se non milioni di programmi per generare password. Tra i più indicati e famosi troviamo i seguenti:

- [NordPass (Windows/macOS/Linux)](https://nordpass.com/?utm_source=google&utm_medium=cpc&utm_campaign=10508415118&utm_content=103935798197&utm_term=nordpass&gclid=EAIaIQobChMIqpKMzdfi-QIVRpnVCh0_jA5WEAAYASAAEgK88fD_BwE)
- [Bitwarden (Windows/macOS/Linux)](https://bitwarden.com/)
- [1Password (Windows/macOS)](https://1password.com/it/sign-up/?utm_source=google&utm_medium=cpc&utm_campaign=11596051800&utm_content=479150720150&utm_term=1password&gclid=EAIaIQobChMI0f7op9ji-QIVxI1oCR2zUgy3EAAYASAAEgIb2PD_BwE&gclsrc=aw.ds)
- [KeePass (Windows/macOS/Linux)](https://www.keepassx.org/) _che approfondiremo più avanti_

Queste sono sicuramente valide scelte, ma per coloro che usano _Linux_ tutto ciò non servirà. Come sempre, _Linux_ ha un tool al nostro servizio. Questo tool è _pwgen_, comando da terminale che ci permette di generare qualsiasi tipo di password. Usarlo è semplicissimo, basta digitare il comando ed eseguire:

```yaml
---
pwgen
---
```

Installare _pwgen_ è semplicissimo, esegui questi due comandi e il gioco sarà fatto:

```yaml
---
sudo apt-get update
sudo apt-get install pwgen
---
```

_pwgen_ ti permette di generare le password che vuoi, esistono tantissime varianti. Puoi specificare il numero di caratteri, la tipologia, la complessità della tua password....
Se vuoi scoprire queste funzioni semplicemente consulta il manuale:

```yaml
---
man pwgen
---
```

## Password Manager

Abbiamo visto come generare una password, ora scopriamo come custodirla. Un password manager è un programma che ci permette di custodire in modo sicuro le nostre password. Anche qui esistono migliaia di password manager. In questo post vorrei approfondire il password manager _KeePassXC_
_KeePassXC_ è disponibile per Windows, Linux e MacOS. Installarlo è semplicissimo, accedendo alla [pagina ufficiale](https://keepassxc.org/) nella sezione _download_ è possibile scaricare ed installare _KeePassXC_.

### Come Funziona

_KeePassXC_ è semplicissimo da usare. Cliccando sull'icona _Create a new database_ si procederà con la creazione di un nuovo database per contenere le nostre password
Successivamente verrà chiesta la password del database.

> NOTA: Questa password deve essere sicura e deve essere ricordata assolutamente. La sua perdita comporterà la perdita di **_tutte_** le altre password!

Una volta creato il database è possbile salvare al suo interno tutte le password che si vuole, che saranno caratterizzate da:

- titolo
- nome utente
- URL
- descrizione

Con questo concludiamo il post dedicato alle password. Buono smanettamento e alla prossima!
