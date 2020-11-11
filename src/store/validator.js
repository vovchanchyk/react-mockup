import React from 'react'
import { render } from 'react-dom'

export const required = value => {

if(value){
   return undefined
}else{
   return 'Required'
}
}


export const renderField = ({ input,  meta: { touched, error} })=>{

return(
      <input {...input}
         className={touched && error != undefined ? "verifitysignuptwo__form-input error-input" 
         : "verifitysignuptwo__form-input" } 
          />  

)
   
  
}
    

