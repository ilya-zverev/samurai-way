import css from './Navbar.module.css'
function Navbar() {
	return <nav className={css.nav}>
		<div><a href="src/components#">Profile</a></div>
		<div><a href="src/components#">Messages</a></div>
		<div><a href="src/components#">News</a></div>
		<div><a href="src/components#">Music</a></div>
		<div><a href="src/components#">Settings</a></div>
	</nav>
}

export default Navbar;