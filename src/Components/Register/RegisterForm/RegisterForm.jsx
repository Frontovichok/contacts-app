import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../../Common/FormControls'
import {
	required,
	maxLengthCreator,
	validateEmail,
} from '../../../utils/validators/validators'
import styles from './RegisterForm.module.css'

const maxLength30 = maxLengthCreator(30)

function RegisterForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={styles.fieldContainer}>
				<Field
					name="firstName"
					type="text"
					placeholder="Имя"
					component={Input}
					validate={[required, maxLength30]}
				/>
			</div>
			<div className={styles.fieldContainer}>
				<Field
					name="secondName"
					type="text"
					placeholder="Фамилия"
					component={Input}
					validate={[required, maxLength30]}
				/>
			</div>
			<div className={styles.fieldContainer}>
				<Field
					name="email"
					type="text"
					placeholder="Email"
					component={Input}
					validate={[required, maxLength30, validateEmail]}
				/>
			</div>
			<div className={styles.fieldContainer}>
				<Field
					name="password"
					type="password"
					placeholder="Пароль"
					component={Input}
					validate={[required, maxLength30]}
				/>
			</div>

			{props.error && <div className={styles.summaryError}>{props.error}</div>}
			<div>
				<button className={styles.registerButton}>Зарегистрироваться</button>
			</div>
		</form>
	)
}

export default reduxForm({ form: 'register' })(RegisterForm)
