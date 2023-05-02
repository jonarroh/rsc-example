import PostList from '../components/Client/PostList';

export interface Posts {
	userId: number;
	id: number;
	title: string;
	body: string;
}
const getPost = async (): Promise<Posts[]> => {
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts'
	);
	const post = await res.json();
	return post;
};
async function Page() {
	const posts = await getPost();
	return (
		<>
			<PostList posts={posts} key={crypto.randomUUID()} />
		</>
	);
}

export default Page;
