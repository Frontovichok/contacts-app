import React from 'react'
import '../App.css'
import 'semantic-ui-css/semantic.min.css'
import { Route } from 'react-router-dom'
import Login from './Login/Login'
import Contacts from './Contacts/Contacts'
import NavBar from './NavBar/NavBar'

function App(props) {
	return (
		<div className="app">
			<NavBar />
			<div className="app-content">
				<Route path="/contacts" render={() => <Contacts />} />
				<Route path="/login" render={() => <Login />} />
			</div>
		</div>
	)
}

export default App
