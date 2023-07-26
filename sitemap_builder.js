import * as fs from 'node:fs/promises';

const BASE_URL = 'https://prof.mancusoa.it/';
const POST_DIR = './src/routes/blog/';

const SITEMAP_HEADER = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://prof.mancusoa.it/</loc>
        <lastmod>{timestamp}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://prof.mancusoa.it/about/</loc>
        <lastmod>{timestamp}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.5</priority>
    </url>
`;
const SITEMAP_ENTRY = `    <url>
        <loc>https://prof.mancusoa.it/blog/{post_fname}/</loc>
        <lastmod>{timestamp}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.5</priority>
    </url>
`;
const SITEMAP_TAIL = '</urlset>';

let find_posts = async (dir) => {
	const files = await fs.readdir(dir);
	return files.filter((file) => file.split('.')[1] == 'md');
};

let post_to_fname = (post) => {
	return post.split('.')[0];
};

let post_to_cover = async (post) => {
	try {
		const data = await fs.readFile(POST_DIR + post, { encoding: 'utf8' });
		if (data.indexOf('cover') > 0) {
			var rx = /\ncover:(.*)\n/g;
			return rx.exec(data)[1].replace(/ /g, '');
		}
		return 'no_cover';
	} catch (err) {
		console.log(err);
	}
};

let post_pubblicato = async (post) => {
	try {
		const data = await fs.readFile(POST_DIR + post, { encoding: 'utf8' });
		if (data.indexOf('pubblicato') > 0) {
			var rx = /\npubblicato:(.*)\n/g;
			return rx.exec(data)[1].replace(/ /g, '').toLowerCase() === 'true';
		}
		return false;
	} catch (err) {
		console.log(err);
	}
};

(async function () {
	let SITEMAP_ENTRIES = '';

	let posts_files = await find_posts(POST_DIR);
	//console.log(posts_files);
	for (const post of posts_files) {
		let post_file = await post_to_fname(post);
        console.log(`###########${post_file}####################`)
		let cover = await post_to_cover(post);
        let pubblicato = await post_pubblicato(post);

		// console.log(`${post} - ${post_file} - ${cover} `);

        if (pubblicato == true)
            SITEMAP_ENTRIES = SITEMAP_ENTRIES.concat(
                SITEMAP_ENTRY.replaceAll('{post_fname}', post_file).replace('{post_cover}', cover)
            );
	}

	let xml = SITEMAP_HEADER + SITEMAP_ENTRIES + SITEMAP_TAIL;
	let now = new Date().toISOString();
	fs.writeFile('sitemap.xml', xml.replaceAll('{timestamp}', now));
    console.log(`sitemap.xml [${SITEMAP_ENTRIES.split('<url>').length + 1} entry] creato con successo!!!`);
})();
