import * as axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:3000/',
	headers: { Authorization: `Bearer ${''}` },
})

export const authAPI = {
	register: async (email, password, firstName, lastName) => {
		try {
			const { data } = await instance.post('register', {
				email,
				password,
				firstName,
				lastName,
			})

			instance.defaults.headers['Authorization'] = `Bearer ${data.accessToken}`
			return data
		} catch (error) {
			console.warn(error.response.data)
		}
	},

	login: async (email, password) => {
		try {
			const { data } = await instance.post('login', {
				email,
				password,
			})
			instance.defaults.headers['Authorization'] = `Bearer ${data.accessToken}`
			return data
		} catch (error) {
			return { error: true, errorMessage: error.response.data }
		}
	},
}

export const contactsAPI = {
	addContact: async (name, phone, city, id) => {
		try {
			return await instance.post('660/contacts', {
				name,
				phone,
				city,
				id,
			})
		} catch (error) {
			console.warn(error.response.data)
		}
	},
	deleteContact: async (id) => {
		try {
			return await instance.delete(`660/contacts/${id}`)
		} catch (error) {
			console.warn(error.response.data)
		}
	},
	changeContact: async () => {
		try {
			return await instance.put('660/contacts/1', {
				id: 1,
				name: 'Dima2',
				phone: 8987,
				city: 'Moscow city',
			})
		} catch (error) {
			console.warn(error.response.data)
		}
	},
	getContacts: async () => {
		try {
			return await instance.get('660/contacts')
		} catch (error) {
			console.warn(error.response.data)
			return { error: true, errorMessage: error.response.data }
		}
	},
}
