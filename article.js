import { Console } from 'node:console';
import * as fs from 'node:fs/promises';
import { exit } from 'node:process';

const POST_DIR = './src/routes/blog/';
const IMG_DIR = './static/img/posts/';

let FRONT_MATTER = `
---
id: {data}-1
titolo: {titolo}
featured: false
autore: <autore>
data: {data}
cover: 
introduzione: <introduzione>
pubblicato: false
sezione: <sezione>
categorie:
  - <categoria1>
  - <categoria2>
---

# {titolo}

`;

const titolo2slug = (titolo) => {
	return titolo.toLowerCase().split(' ').join('-');
};

const fill_fornt_matter = (titolo) => {
	FRONT_MATTER = FRONT_MATTER.replaceAll(
		'{data}',
		new Date().toISOString().split('T')[0]
	).replaceAll('{titolo}', titolo);

	return FRONT_MATTER;
};

(async function () {
	console.clear();
	if (process.argv.length != 3) {
		console.log('Usage: article.js <titolo> \n');
		exit();
	}
	let titolo = process.argv[2];
	let slug = titolo2slug(titolo);

	//creo il file .md per il post
	fs.writeFile(POST_DIR + slug + '.md', fill_fornt_matter(titolo));

	//creo la directory per le immagini del post
	fs.mkdir(IMG_DIR + slug);

    console.log(`Articolo "${titolo}" creato con successo!!`);
})();
