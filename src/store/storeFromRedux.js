import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import { registrationReduser } from './registrationReduser';
import {reducer as formReduser} from 'redux-form'


let redusers = combineReducers({
    
    registrationReduser: registrationReduser,
    form : formReduser,
})

export const store = createStore(redusers,applyMiddleware(thunk));
window.store = store