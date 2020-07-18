import * as axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:3000/',
	headers: { Authorization: `Bearer ${''}` },
})

export const authAPI = {
	register: async (firstName, secondName, email, password) => {
		try {
			const { data } = await instance.post('register', {
				firstName,
				secondName,
				email,
				password,
			})

			instance.defaults.headers['Authorization'] = `Bearer ${data.accessToken}`
			return data
		} catch (error) {
			return { error: true, errorMessage: error.response.data }
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
	changeContact: async (id, name, phone, city) => {
		try {
			return await instance.put(`660/contacts/${id}`, {
				name,
				phone,
				city,
			})
		} catch (error) {
			console.warn(error.response.data)
			return { error: true, errorMessage: error.response.data }
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
