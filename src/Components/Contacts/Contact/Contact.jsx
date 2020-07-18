import React from 'react'
import styles from './Contact.module.scss'
import { Icon } from 'semantic-ui-react'
import ChangeContactModalWindow from '../ChangeContactModalWindow/ChangeContactModalWindow'

function Contact(props) {
	return (
		<div className={styles.contactContainer}>
			<div className={styles.field + ' ' + styles.firstWordOfName}>
				<div className={styles.circleWithWord}>
					<span className={styles.wirstWord}>
						{props.name[0].toUpperCase()}
					</span>
				</div>
			</div>
			<div className={styles.field + ' ' + styles.name}>
				<span>{props.name}</span>
			</div>
			<div className={styles.field + ' ' + styles.phone}>
				<span>{props.phone}</span>
			</div>
			<div className={styles.field + ' ' + styles.city}>
				<span>{props.city}</span>
			</div>
			<div className={styles.field + ' ' + styles.change}>
				<span className={styles.changeContainer}>
					<ChangeContactModalWindow {...props} />
					<div
						className={styles.deleteContactWrapper}
						onClick={() => {
							props.deleteContact(props.id)
						}}
					>
						<Icon className={styles.trashIcon + ' trash alternate outline'} />
					</div>
				</span>
			</div>
		</div>
	)
}

export default Contact
