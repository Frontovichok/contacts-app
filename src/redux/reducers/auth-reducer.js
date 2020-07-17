import { authAPI } from '../../api/api'
import { stopSubmit } from 'redux-form'

const initialState = { isAuth: false }

function authReducer(state = initialState, action) {
	switch (action.type) {
		case 'REGISTER':
			return state
		case 'LOGIN':
			return { ...state, isAuth: true }
		default: {
			return state
		}
	}
}

function setAuth() {
	return {
		type: 'LOGIN',
	}
}

export function login(email, password) {
	return async (dispatch) => {
		const response = await authAPI.login(email, password)
		if (!response.error) {
			dispatch(setAuth())
		} else {
			dispatch(
				stopSubmit('login', {
					_error: response.errorMessage,
				})
			)
		}
	}
}

export default authReducer
