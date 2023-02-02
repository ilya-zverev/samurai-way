import css from './Profile.module.css'
function Profile() {
	return <div className={css.content}>
		<div><img
			src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/images/dossier/773/01-intro-773.jpg"
			alt="pic"/>
		</div>
		<div>
			<img src="https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-768x768.png.webp"
					 alt="pct"/>
			<div>Description</div>
		</div>
		<div>
			My post
			<div>
				New post
				<div>post1</div>
				<div>post2</div>
			</div>
		</div>
	</div>;

}

export default Profile;