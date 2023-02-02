import css from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
	return <div className={css.content}>
		<div>
			My post
			<Post/>
			<Post/>
			<Post/>
		</div>
	</div>;

}

export default MyPosts;