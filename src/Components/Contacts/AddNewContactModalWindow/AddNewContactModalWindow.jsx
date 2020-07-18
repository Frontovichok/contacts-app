import React, { useState } from 'react'
import { Modal, Button } from 'semantic-ui-react'
import styles from './AddNewContactModalWindow.module.css'
import AddNewContactForm from '../AddNewContactForm/AddNewContactForm'

function AddNewContactModalWindow(props) {
	let [openState, setOpenState] = useState(false)

	const show = () => setOpenState(true)
	const close = () => setOpenState(false)
	return (
		<>
			<Button
				content="Добавить контакт"
				basic
				icon="user plus"
				color="green"
				labelPosition="right"
				onClick={() => {
					show()
				}}
			/>

			<Modal
				size="mini"
				open={openState}
				onClose={close}
				className={styles.modalWindow}
			>
				<Modal.Header>Добавить новый контакт</Modal.Header>
				<AddNewContactForm id={props.id} closeModal={close} />
			</Modal>
		</>
	)
}

export default AddNewContactModalWindow
