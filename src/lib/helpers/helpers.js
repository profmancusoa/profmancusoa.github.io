const _COVER_DIR = '/img/posts/';
const _COVER_PLACEHOLDER = '/img/posts/missing_post.png';

// converte la data da 2022-07-11T00:00:00.000 a 11 LUGLIO 2022
export function date_convert(data) {
	let date = new Date(data);
	return (
		date.toLocaleDateString('it-IT', { day: 'numeric' }) +
		' ' +
		(function () {
			let mese = date.toLocaleDateString('it-IT', { month: 'long' });
			return mese.slice(0, 1).toUpperCase() + mese.slice(1).toLowerCase();
		})() +
		' ' +
		date.toLocaleDateString('it-IT', { year: 'numeric' })
	);
}

// se assente assegna una cover placeholder
export function cover_assign(cover) {
	if (cover.split('/').includes('undefined') || cover.split('/').includes('null'))
		return _COVER_PLACEHOLDER;
	else return _COVER_DIR + cover;
}

//convert a human readable title into sluf
export function title_to_slug(title) {
	return title.toLowerCase().split(' ').join('-');
}
