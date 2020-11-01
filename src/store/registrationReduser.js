export const ADDUSER = 'ADDUSER';
export const GETACCES = 'GETACCES';



const initialState = {
    verifity:false,
    users:[],
    yourAcces:{},
}

export  function registrationReduser( state = initialState,action){
 
    switch (action.type) {
        case ADDUSER : return  {...state,users : [ ...state.users,action.formData ]};
                   
            break;
        case GETACCES :  return {...state,yourAcces : state.users.find(user =>  user.password === action.formData.password
             && ( user.name === action.formData.name || user.email === action.formData.email )),verifity:true}          
                break;
    
        default: return state
            break;
    }
    
    return state
}