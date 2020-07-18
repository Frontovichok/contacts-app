import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './AddNewContactForm.module.css'
import { connect } from 'react-redux'
import { addNewContact } from '../../../redux/reducers/contacts-reducer'

function AddNewContactForm(props) {
	const { handleSubmit, register, errors } = useForm()
	const onSubmit = ({ name, phone, city }) => {
		props.addNewContact(name, phone, city)
		props.closeModal()
	}

	return (
		<form
			className={styles.addNewContactFormContainer}
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className={styles.inputContainer}>
				<input
					className={styles.inputField}
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
					name="phone"
					placeholder="Телефон"
					ref={register({
						required: 'Required',
						minLength: 6,
						maxLength: 20,
					})}
				/>
				{errors.phone && errors.phone.message}
			</div>
			<div className={styles.inputContainer}>
				<input
					className={styles.inputField}
					name="city"
					placeholder="Город"
					ref={register({
						required: 'Required',
					})}
				/>
				{errors.city && errors.city.message}
			</div>

			<button className={styles.submitButton} type="submit">
				Добавить
			</button>
		</form>
	)
}

const dispatchers = {
	addNewContact,
}

export default connect(() => ({}), dispatchers)(AddNewContactForm)
