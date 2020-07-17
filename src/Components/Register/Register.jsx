import React from 'react'
import { connect } from 'react-redux'
import { register } from '../../redux/reducers/auth-reducer'
import RegisterForm from './RegisterForm/RegisterForm'
import styles from './Register.module.css'

function Register(props) {
	const submit = ({ firstName, secondName, email, password }) => {
		props.register(firstName, secondName, email, password)
	}
	return (
		<div className={styles.registerContainer}>
			<RegisterForm onSubmit={submit} />
		</div>
	)
}

function mapStateToProps(state) {
	return {}
}

const dispatchers = {
	register,
}

export default connect(mapStateToProps, dispatchers)(Register)
