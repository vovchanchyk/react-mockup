import {createStore} from 'redux';
import { registrationReduser } from './registrationReduser';

export const store = createStore(registrationReduser);
