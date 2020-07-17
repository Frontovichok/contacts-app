import React from 'react'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

function NavBar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.item}>
				<Icon name="sign-in" />
				<NavLink to="/login" activeClassName={styles.active}>
					Логин
				</NavLink>
			</div>
			<div className={styles.item}>
				<Icon className="users" />
				<NavLink exact to="/contacts" activeClassName={styles.active}>
					Контакты
				</NavLink>
			</div>
		</nav>
	)
}
export default NavBar
