import React from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch } from 'react-router-dom'
import Contacts from './Components/Contacts/Contacts'
import NavBar from './Components/NavBar/NavBar'
import LoginOrRegister from './Components/LoginOrRegister/LoginOrRegister'
import Header from './Components/Header/Header'

function App(props) {
	return (
		<div className="app">
			<Header />
			<NavBar />
			<div className="app-content">
				<Switch>
					<Route path="/contacts" render={() => <Contacts />} />
					<Route exact path="/" render={() => <LoginOrRegister />} />
				</Switch>
			</div>
		</div>
	)
}

export default App
