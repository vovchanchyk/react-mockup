let store ={
    verifity : false,
    users : [
    {name: 'sasha', email:"sasha@gmail.com", password:'1111'},
    {name: 'misha', email:"misha@gmail.com", password:'1112'},
    {name: 'vova', email:"vova@gmail.com", password:'1113'}],
    addUser( formData){
      let newUser = {
        name : formData.userName,
        email : formData.userEmail,
        password : formData.password
      }
      store.users.push(newUser)
      console.log(store.users)
    },
    yourAссes  :{},
    checkUser(formData){
      debugger
     let myAccount = store.users.find(user =>  user.password === formData.password && ( user.name === formData.username || user.email === formData.useremail ))
     if(myAccount){
      store.yourAссess =  myAccount
      store.verifity = true
      console.log(store.yourAссess)
     }else{
       alert('try again')
     }
    }
  }
  
  export default store;