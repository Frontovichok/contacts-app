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

export function getContacts() {
	return async (dispatch) => {
		const response = await contactsAPI.getContacts()
		if (!response.error) {
			dispatch(setContacts(response.data))
		} else {
			console.warn('try to login or register')
		}
	}
}

export default contactsReducer
