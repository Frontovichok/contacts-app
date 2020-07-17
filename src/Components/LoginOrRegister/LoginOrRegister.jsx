import React from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'
import styles from './LoginOrRegister.module.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

function LoginOrRegister(props) {
	if (props.isAuth) {
		return <Redirect to="/contacts" />
	}
	return (
		<div className={styles.registerOrLoginContainer}>
			<Login />
			<Register />
		</div>
	)
}

function mapStateToProps(state) {
	return { isAuth: state.auth.isAuth }
}

export default connect(mapStateToProps, {})(LoginOrRegister)
