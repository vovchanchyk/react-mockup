import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { registrationReduser } from './registrationReduser';

export const store = createStore(registrationReduser,applyMiddleware(thunk));
