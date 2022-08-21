import * as fs from 'node:fs/promises';

const BASE_URL = 'https://profmancusoa.github.io/';
const POST_DIR = './src/routes/blog/';

const SITEMAP_HEADER = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://profmancusoa.github.io/</loc>
        <lastmod>{timestamp}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
        <image:image>
            <image:loc>https://profmancusoa.github.io/img/blog_banner.png</image:loc>
        </image:image>
    </url>
    <url>
        <loc>https://profmancusoa.github.io/about/</loc>
        <lastmod>2022-08-19T23:23:00+00:00</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
        <image:image>
            <image:loc>https://profmancusoa.github.io/img/avatars/profmancuso.jpg</image:loc>
        </image:image>
    </url>
`;
const SITEMAP_ENTRY = `<url>
<loc>https://profmancusoa.github.io/blog/{post_fname}/</loc>
<lastmod>{timestamp}</lastmod>
<changefreq>daily</changefreq>
<priority>0.7</priority>
<image:image>
    <image:loc>https://profmancusoa.github.io/img/posts/{post_fname}/{post_cover}</image:loc>
</image:image>
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

(async function () {
	let SITEMAP_ENTRIES = '';

	let posts_files = await find_posts(POST_DIR);
	//console.log(posts_files);
	for (const post of posts_files) {
		let post_file = await post_to_fname(post);
		let cover = await post_to_cover(post);

		// console.log(`${post} - ${post_file} - ${cover} `);

		SITEMAP_ENTRIES = SITEMAP_ENTRIES.concat(
			SITEMAP_ENTRY.replaceAll('{post_fname}', post_file).replace('{post_cover}', cover)
		);
	}

	let xml = SITEMAP_HEADER + SITEMAP_ENTRIES + SITEMAP_TAIL;
	let now = new Date().toISOString();
	fs.writeFile('sitemap.xml', xml.replaceAll('{timestamp}', now));
	console.log('sitemap.xml creato con successo!!!');
})();
