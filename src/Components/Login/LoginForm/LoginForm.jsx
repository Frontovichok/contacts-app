import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input, InputPassword } from '../../Common/FormControls'
import {
	required,
	maxLengthCreator,
} from '../../../utils/validators/validators'
import styles from './LoginForm.module.css'

const maxLength30 = maxLengthCreator(30)

function LoginForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={styles.fieldContainer}>
				<Field
					name="email"
					type="text"
					placeholder="Email"
					component={Input}
					validate={[required, maxLength30]}
				/>
			</div>
			<div className={styles.fieldContainer}>
				<Field
					name="password"
					type="password"
					placeholder="Пароль"
					component={InputPassword}
					validate={[required, maxLength30]}
				/>
			</div>
			{props.error && <div className={styles.summaryError}>{props.error}</div>}
			<div>
				<button className={styles.loginButton}>Войти</button>
			</div>
		</form>
	)
}

export default reduxForm({ form: 'login' })(LoginForm)
