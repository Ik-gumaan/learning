const INITIAL_STATE={
    appName:"MyApp",
    version:"4.0.1",
}

export default (state=INITIAL_STATE,action)=>{
    console.log("app_action ==>",action)
    return state;
}