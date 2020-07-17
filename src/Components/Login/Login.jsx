import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/reducers/auth-reducer'
import LoginForm from './LoginForm/LoginForm'
import { Redirect } from 'react-router-dom'
import styles from './Login.module.css'

function Login(props) {
	const submit = ({ email, password }) => {
		props.login(email, password)
	}
	return (
		<div className={styles.loginContainer}>
			<LoginForm onSubmit={submit} />
		</div>
	)
}

function mapStateToProps(state) {
	return {}
}

const dispatchers = {
	login,
}

export default connect(mapStateToProps, dispatchers)(Login)
