const INITIAL_STATE={
    std:[
        {name:"bunny",
    class:"8th",
    }
]
}

export default (state = INITIAL_STATE, action) => {
    console.log("init state",state,)
    console.log("init action recieved user",action)
    
    switch(action.type){
        case "SETDATA":return({
            ...state,
            users:[...state.std,action.data]
        })
    }

    return state;
}
