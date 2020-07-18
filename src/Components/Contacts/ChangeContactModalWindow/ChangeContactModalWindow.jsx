import React, { useState } from 'react'
import { Modal, Icon } from 'semantic-ui-react'
import styles from './ChangeContactModalWindow.module.css'
import ChangeContactForm from '../ChangeContactForm/ChangeContactForm'

function ChangeContactModalWindow(props) {
	let [openState, setOpenState] = useState(false)

	const show = () => setOpenState(true)
	const close = () => setOpenState(false)

	console.log(props)
	return (
		<>
			<Icon onClick={show} className={styles.customIcon + ' edit outline'} />

			<Modal
				size="mini"
				open={openState}
				onClose={close}
				className={styles.modalWindow}
			>
				<Modal.Header>Изменение контакта</Modal.Header>
				<ChangeContactForm
					id={props.id}
					name={props.name}
					phone={props.phone}
					city={props.city}
					closeModal={close}
				/>
			</Modal>
		</>
	)
}

export default ChangeContactModalWindow
