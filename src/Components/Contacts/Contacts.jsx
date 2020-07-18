import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
	getContactsRequest,
	saveContactChanges,
} from '../../redux/reducers/contacts-reducer'
import { Redirect } from 'react-router-dom'
import styles from './Contacts.module.css'
import Contact from './Contact/Contact'
import { getContactsSortedByName } from '../../redux/selectors/contacts-selectors'
import ContactsHeader from './ContactsHeader/ContactsHeader'

function Contacts({ contactsSortedByName, getContactsRequest, isAuth }) {
	useEffect(() => {
		getContactsRequest()
	}, [])
	if (!isAuth) {
		return <Redirect to="/" />
	}
	return (
		<div className={styles.contactsContainer}>
			<ContactsHeader />
			{contactsSortedByName.map((contact) => (
				<Contact
					key={contact.id}
					{...contact}
					saveContactChanges={saveContactChanges}
				/>
			))}
		</div>
	)
}
function mapStateToProps(state) {
	return {
		contactsSortedByName: getContactsSortedByName(state),
		isAuth: state.auth.isAuth,
	}
}

const dispatchers = {
	getContactsRequest,
}

export default connect(mapStateToProps, dispatchers)(Contacts)
