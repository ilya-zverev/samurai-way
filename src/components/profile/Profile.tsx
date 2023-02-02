import css from './Profile.module.css';
import MyPosts from './myPosts/MyPosts';

function Profile() {
	return <div className={css.content}>
		<div><img
			src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/images/dossier/773/01-intro-773.jpg"
			alt="pic"/>
		</div>
		<MyPosts/>
	</div>;

}

export default Profile;