const INITIAL_STATE={
    username:"myUsername",
    email:"myemail@gmail.com"
}

export default (state=INITIAL_STATE,action)=>{
    console.log("auth_action ==>",action)
    return state;
}