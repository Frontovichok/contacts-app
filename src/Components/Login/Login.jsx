import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/reducers/auth-reducer'
import LoginForm from './LoginForm/LoginForm'
import { Redirect } from 'react-router-dom'

function Login(props) {
	const submit = ({ email, password }) => {
		props.login(email, password)
	}
	if (props.isAuth) {
		return <Redirect to="/contacts" />
	}
	return (
		<div>
			<h1>Login</h1>
			<div>
				<LoginForm onSubmit={submit} />
			</div>
			<button onClick={() => {}}>register</button>
			<button
				onClick={() => {
					props.login('olivier3@mail.com', '228553332')
				}}
			>
				login
			</button>
			<button onClick={() => {}}>Add contact</button>
			<button onClick={() => {}}>Delete contact</button>
			<button onClick={() => {}}>Change contact</button>
			<button onClick={() => {}}>Get contact</button>
		</div>
	)
}

function mapStateToProps(state) {
	return { isAuth: state.auth.isAuth }
}

const dispatchers = {
	login,
}

export default connect(mapStateToProps, dispatchers)(Login)
