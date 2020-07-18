import React from 'react'
import styles from './SearchContacts.module.css'

function SearchContacts(props) {
	return (
		<div className={styles.searchContainer}>
			<input
				className={styles.searchInput}
				placeholder="Поиск по имени"
				onChange={(e) => {
					let searchQuery = e.target.value.trim()
					props.setSearchQuery(searchQuery)
				}}
			/>
		</div>
	)
}

export default SearchContacts
