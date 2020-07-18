import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
	getContactsRequest,
	deleteContact,
	addNewContact,
} from '../../redux/reducers/contacts-reducer'
import { Redirect } from 'react-router-dom'
import styles from './Contacts.module.css'
import Contact from './Contact/Contact'
import { getContactsSortedByName } from '../../redux/selectors/contacts-selectors'
import ContactsHeader from './ContactsHeader/ContactsHeader'
import AddNewContactModalWindow from './AddNewContactModalWindow/AddNewContactModalWindow'

function Contacts({
	contactsSortedByName,
	getContactsRequest,
	deleteContact,
	isAuth,
}) {
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
				<Contact key={contact.id} {...contact} deleteContact={deleteContact} />
			))}
			<div className={styles.addContactContainer}>
				<AddNewContactModalWindow />
			</div>
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
	deleteContact,
	addNewContact,
}

export default connect(mapStateToProps, dispatchers)(Contacts)
