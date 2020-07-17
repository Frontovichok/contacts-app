import React from 'react'
import styles from './FormsControls.module.css'

export function Input({ input, meta, ...props }) {
	const hasError = meta.touched && meta.error
	return (
		<div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
			<div>
				<input {...input} {...props} />
			</div>
			{hasError && <span>{'error'}</span>}
		</div>
	)
}
