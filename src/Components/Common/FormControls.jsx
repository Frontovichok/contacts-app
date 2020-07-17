import React from 'react'
import styles from './FormsControls.module.css'

export function Input({ input, meta, ...props }) {
	console.log(meta)
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
