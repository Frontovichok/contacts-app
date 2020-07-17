import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../../Common/FormControls'
import {
	required,
	maxLengthCreator,
} from '../../../utils/validators/validators'
import styles from './LoginForm.module.css'

const maxLength30 = maxLengthCreator(30)

function LoginForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					name="email"
					type="text"
					placeholder="email"
					component={Input}
					validate={[required, maxLength30]}
				/>
			</div>
			<div>
				<Field
					name="password"
					type="password"
					placeholder="password"
					component={Input}
					validate={[required, maxLength30]}
				/>
			</div>
			{props.error && <div className={styles.summaryError}>{props.error}</div>}
			<div>
				<button>login</button>
			</div>
		</form>
	)
}

export default reduxForm({ form: 'login' })(LoginForm)
