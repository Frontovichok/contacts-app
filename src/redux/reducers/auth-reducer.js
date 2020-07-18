import { authAPI } from '../../api/api'
import { stopSubmit } from 'redux-form'

const initialState = { isAuth: false }

function authReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_IS_AUTH':
			return { ...state, isAuth: true }
		default: {
			return state
		}
	}
}

function setIsAuth() {
	return {
		type: 'SET_IS_AUTH',
	}
}

export function login(email, password) {
	return async (dispatch) => {
		const response = await authAPI.login(email, password)
		if (!response.error) {
			dispatch(setIsAuth())
		} else {
			dispatch(
				stopSubmit('login', {
					_error: response.errorMessage,
				})
			)
		}
	}
}
export function register(firstName, secondName, email, password) {
	return async (dispatch) => {
		const response = await authAPI.register(
			firstName,
			secondName,
			email,
			password
		)
		if (!response.error) {
			dispatch(setIsAuth())
		} else {
			dispatch(
				stopSubmit('register', {
					_error: response.errorMessage,
				})
			)
		}
	}
}

export default authReducer
