export const GET = async () => {
	const allPostFiles = import.meta.glob('./*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const postPath = '/blog/'.concat(path.slice(2, -3));
			const { metadata } = await resolver();
			metadata['path'] = postPath;

			return {
				metadata
			};
		})
	);

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.metadata.data) - new Date(a.metadata.data);
	});

	return {
		body: sortedPosts
	};
};
