import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getContacts } from '../../redux/reducers/contacts-reducer'
import { Redirect } from 'react-router-dom'
import styles from './Contacts.module.css'

function Contacts(props) {
	useEffect(() => {
		props.getContacts()
	}, [])
	if (!props.isAuth) {
		return <Redirect to="/" />
	}
	return (
		<div className={styles.contactsContainer}>
			{props.contacts &&
				[...props.contacts]
					.sort((cur, next) => {
						return cur.id - next.id
					})
					.map((contact) => (
						<div key={contact.id}>
							<span>{contact.id} </span>
							<span>{contact.name} </span>
							<span>{contact.phone} </span>
							<span>{contact.city}</span>
						</div>
					))}
		</div>
	)
}
function mapStateToProps(state) {
	return { contacts: state.contacts.contacts, isAuth: state.auth.isAuth }
}

const dispatchers = {
	getContacts,
}

export default connect(mapStateToProps, dispatchers)(Contacts)
