import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import contactsReducer from './reducers/contacts-reducer'
import authReducer from './reducers/auth-reducer'

const reducers = combineReducers({
	auth: authReducer,
	contacts: contactsReducer,
	form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store
