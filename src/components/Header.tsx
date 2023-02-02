import css from './Header.module.css';

function Header() {
	return <header className={css.header}>
		<img className={css.img} src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" alt="logo"/>
	</header>;
}

export default Header;