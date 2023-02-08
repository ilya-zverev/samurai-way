import css from './Post.module.css';

type postType = {
	message: string
}

function Post(props: postType) {
	return <div className={css.post}>
		<div>
			<img src="https://www.interfax.ru/ftproot/photos/photostory/2021/06/11/week4_1100.jpg" alt=""/>
			{props.message}
		</div>

	</div>;


}

export default Post;