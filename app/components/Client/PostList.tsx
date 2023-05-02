'use client';
import { Posts } from '@/app/post/page';
import { useState } from 'react';

interface PostListProps {
	posts: Posts[];
}
function PostList({ posts }: PostListProps) {
	const [numberOfPosts, setnumberPost] = useState(5);
	return (
		<>
			<div>
				<button onClick={() => setnumberPost(numberOfPosts + 5)}>
					Load More
				</button>
				<button onClick={() => setnumberPost(numberOfPosts - 5)}>
					Load Less
				</button>
			</div>
			{posts.slice(1, numberOfPosts).map(post => (
				<>
					<div
						className="text-2xl font-bold text-center"
						key={post.id}>
						{post.title}
					</div>
					<section className="text-blue-900 body-font">
						{post.body}
					</section>
				</>
			))}
		</>
	);
}

export default PostList;
