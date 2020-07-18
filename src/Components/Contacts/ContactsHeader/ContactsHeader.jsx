import React from 'react'
import styles from './ContactsHeader.module.scss'

function ContactsHeader() {
	return (
		<div className={styles.contactsHeaderContainer}>
			<div className={styles.field + ' ' + styles.firstWordOfNameHeader}></div>
			<div className={styles.field + ' ' + styles.nameHeader}>Имя</div>
			<div className={styles.field + ' ' + styles.phoneHeader}>Телефон</div>
			<div className={styles.field + ' ' + styles.cityHeader}>Город</div>
			<div className={styles.field + ' ' + styles.changeHeader}>
				<div>Редактирование</div>
			</div>
		</div>
	)
}

export default ContactsHeader
