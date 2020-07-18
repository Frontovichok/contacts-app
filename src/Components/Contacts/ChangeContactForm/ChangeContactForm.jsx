import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './ChangeContactForm.module.css'
import { connect } from 'react-redux'
import { saveContactChanges } from '../../../redux/reducers/contacts-reducer'

function ChangeContactForm(props) {
	const { handleSubmit, register, errors } = useForm()
	const onSubmit = ({ name, phone, city }) => {
		props.saveContactChanges(props.id, name, phone, city)
		props.closeModal()
	}

	return (
		<form
			className={styles.changeContactFormContainer}
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className={styles.inputContainer}>
				<input
					className={styles.inputField}
					defaultValue={props.name}
					name="name"
					placeholder="Имя"
					ref={register({
						required: 'Required',
					})}
				/>
				{errors.name && errors.name.message}
			</div>
			<div className={styles.inputContainer}>
				<input
					className={styles.inputField}
					defaultValue={props.phone}
					name="phone"
					placeholder="Телефон"
					ref={register({
						required: 'Required',
						validate: (value) => value !== 'admin' || 'Nice try!',
					})}
				/>
				{errors.phone && errors.phone.message}
			</div>
			<div className={styles.inputContainer}>
				<input
					className={styles.inputField}
					defaultValue={props.city}
					name="city"
					placeholder="Город"
					ref={register({
						required: 'Required',
						validate: (value) => value !== 'admin' || 'Nice try!',
					})}
				/>
				{errors.city && errors.city.message}
			</div>

			<button className={styles.submitButton} type="submit">
				Сохранить
			</button>
		</form>
	)
}

const dispatchers = {
	saveContactChanges,
}

export default connect(() => ({}), dispatchers)(ChangeContactForm)
