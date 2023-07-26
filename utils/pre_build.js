import * as fs from 'node:fs';
import * as yaml from 'js-yaml';

const POST_DIR = '../src/routes/blog/';


// restituisce tutti i nomi di file dei post
let find_posts = (dir) => {
	const files = fs.readdirSync(POST_DIR);
	return files.filter((file) => file.split('.')[1] == 'md');
};

// dato un post restituisce il front matter in yaml oppure undefiend
let get_frontmatter = (postpath) => {
	let frontmatter = [];
	let is_yaml = false;
	try {
		fs.readFileSync(postpath, 'utf-8')
			.split(/\r?\n/)
			.forEach(function (line) {
				if (line == '---' && is_yaml == false) {
					is_yaml = true;
					return;
				}
				if (line == '---' && is_yaml == true) {
					is_yaml = false;
				}
				if (is_yaml == true) frontmatter.push(line);
			});
		return yaml.load(frontmatter.join('\n'));
	} catch (e) {
		console.log(e);
	}
};


let posts = find_posts(POST_DIR);

let post_fm = get_frontmatter(POST_DIR + find_posts(POST_DIR)[0]);

if (post_fm)
    console.log(post_fm.cover);
else
    console.error("non c'e' un front matter valido")