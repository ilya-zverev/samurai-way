import css from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

function Navbar() {
	return <nav className={css.nav}>
		<div className={css.item}><NavLink to="/profile" activeClassName={css.active}>Profile</NavLink></div>
		<div className={css.item}><NavLink to="/dialogs" activeClassName={css.active}>Dialogs</NavLink></div>
		<div><a>News</a></div>
		<div><a>Music</a></div>
		<div><a>Settings</a></div>
	</nav>;
}

export default Navbar;