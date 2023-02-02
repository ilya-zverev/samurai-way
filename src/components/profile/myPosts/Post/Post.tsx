import css from './Post.module.css';

function Post() {
	return <div className={css.post}>
		<div>
			<img src="https://www.interfax.ru/ftproot/photos/photostory/2021/06/11/week4_1100.jpg" alt=""/>
			Пост
		</div>

	</div>;


}

export default Post;