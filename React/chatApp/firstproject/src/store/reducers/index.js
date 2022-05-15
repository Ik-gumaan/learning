const INITIAL_STATE = {
    users:[],
    currentUser:{},
    chatUser:{},
    chats:[],
    chatID:""
}

export default (state = INITIAL_STATE, action) => {
    // console.log("init state",state,)
    // console.log("init action recieved user",action)
    
    switch(action.type){
        case "SETFBUSER":return({
            ...state,
            currentUser:action.payload
        })
    }

    switch(action.type){
        case "GETUSERS":return({
            ...state,
            users:action.payload
        })
    }

    switch(action.type){
        case "CHAT":return({
            ...state,
            chatUser:action.payload
        })
    }

    switch(action.type){
        case "SETMESSAGE":return({
            ...state,
            message:action.payload
        })
    }

    switch(action.type){
        case "SENDMESSAGE":return({
            ...state,
            chats:[...state.chats,action.payload],
            message:""
        })
    }

    switch(action.type){
        case "UIDMERGE":return({
            ...state,
       chatID:action.payload,
     })
    }

    switch(action.type){
        case "SENDCHATDATATOFIREBASE":return({
            ...state,
    //    chatID:action.payload,
     })
    }

    switch(action.type){
        case "GETMESSAGES":return({
            ...state,
       chats:action.payload,
    }
    )
    }


    return state;
}
