import React, { useState } from 'react'
import styles from './FormsControls.module.css'

export function Input({ input, meta, ...props }) {
	const hasError = meta.touched && meta.error
	return (
		<div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
			<div>
				<input {...input} {...props} className={styles.inputField} />
			</div>
			{hasError && <span>{meta.error}</span>}
		</div>
	)
}

export function InputPassword({ input, meta, ...props }) {
	let [inputType, setInputType] = useState('password')
	const hasError = meta.touched && meta.error
	const showPassword = (e) => {
		e.preventDefault()
		inputType === 'password' ? setInputType('text') : setInputType('password')
	}
	return (
		<div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
			<div>
				<input
					{...input}
					{...props}
					type={inputType}
					className={styles.inputField}
				/>
			</div>
			<button className={styles.showPassword} onClick={showPassword}>
				{inputType === 'password' ? 'показать пароль' : 'скрыть пароль'}
			</button>
			{hasError && <span>{meta.error}</span>}
		</div>
	)
}
