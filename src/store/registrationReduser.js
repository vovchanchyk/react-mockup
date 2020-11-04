export const ADDUSER = 'ADDUSER';
export const GETACCES = 'GETACCES';



const initialState = {
    verifity:false,
    users:[],
    yourAcces:{},
}

export  function registrationReduser( state = initialState,action){

    switch (action.type) {
        case ADDUSER : {
            debugger
          let  copyStateFor = {...state} ;
          copyStateFor.users = [...state.users]
          copyStateFor.users.push(action.data)
          
        return copyStateFor
        }
                   
            break;
        case GETACCES : {
         debugger
          let copyStateFor = {...state}
           copyStateFor.yourAcces = {...state.yourAcces}
           copyStateFor.yourAcces =  state.users.find(user =>  user.password === action.data.password
                && ( user.name === action.data.name || user.email === action.data.email ))
                copyStateFor.verifity = true 
             return copyStateFor
           }
                break;
    
        default: return state
            break;
    }
    
    
}