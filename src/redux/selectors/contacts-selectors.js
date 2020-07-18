import { createSelector } from 'reselect'

export function getContacts(state) {
	return state.contacts.contacts
}

export const getContactsSortedByName = createSelector(getContacts, (contacts) =>
	[...contacts].sort((cur, next) => {
		return cur.name - next.name
	})
)
