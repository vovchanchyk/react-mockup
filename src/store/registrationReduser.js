import axios from 'axios';

export const ADDUSER = 'ADDUSER';
export const GETACCES = 'GETACCES';
export const ISFETCHING = 'ISFETCHING';



const initialState = {
    isFetching: false,
    verifity: false,
    yourAcces: {},
}

export function registrationReduser(state = initialState, action) {
    debugger
    switch (action.type) {
        case ADDUSER: {

            let copyStateFor = { ...state };
            axios.post('http://localhost:3000/users/', action.data).then(response => {
                console.log(response.data)
                copyStateFor.yourAcces = response.data
            })
            copyStateFor.verifity = true



            return copyStateFor
        }

            break;
        case GETACCES: {


            let copyStateFor = { ...state };
            copyStateFor.yourAcces = action.data;
            copyStateFor.verifity = true
            return copyStateFor

        }
            break;
        case ISFETCHING: {


            let copyStateFor = { ...state };
            copyStateFor.isFetching = action.status
            return copyStateFor

        }
            break;

        default: return state
            break;
    }


}