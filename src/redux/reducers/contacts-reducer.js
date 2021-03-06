import { contactsAPI } from '../../api/api'

const initialState = { contacts: [] }

function contactsReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_CONTACTS':
			return { ...state, contacts: [...action.payload] }
		default: {
			return state
		}
	}
}

function setContacts(contacts) {
	return { type: 'SET_CONTACTS', payload: contacts }
}

export function getContactsRequest() {
	return async (dispatch) => {
		const response = await contactsAPI.getContacts()
		if (!response.error) {
			dispatch(setContacts(response.data))
		} else {
			console.warn('try to login or register')
		}
	}
}

export function saveContactChanges(id, name, phone, city) {
	return async (dispatch) => {
		const response = await contactsAPI.changeContact(id, name, phone, city)
		if (!response.error) {
			dispatch(getContactsRequest())
		} else {
			console.warn('!!!')
		}
	}
}

export function deleteContact(id) {
	return async (dispatch) => {
		const response = await contactsAPI.deleteContact(id)
		if (!response.error) {
			dispatch(getContactsRequest())
		} else {
			console.warn('!!!')
		}
	}
}

export function addNewContact(name, phone, city) {
	return async (dispatch) => {
		const response = await contactsAPI.addNewContact(name, phone, city)
		if (!response.error) {
			dispatch(getContactsRequest())
		} else {
			console.warn('!!!')
		}
	}
}
export default contactsReducer
