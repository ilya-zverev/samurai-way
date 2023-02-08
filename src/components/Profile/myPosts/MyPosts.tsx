import css from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
	return <div className={css.content}>
		<div>
			My post
			<Post message="Hello"/>
			<Post message="Hi"/>
		</div>
	</div>;

}

export default MyPosts;