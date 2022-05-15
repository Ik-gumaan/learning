import firebase from '../../config/firebase.js';
// import {useHistory} from 'react-router-dom';//use to change url

const fbLogin=(history)=>{
console.log("fbLogin");
return(dispatch)=>{

    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        var user = result.user;
        // console.log("User==>",user);

        var createUser={
            name:user.displayName,
            profile:user.photoURL,
            uid:user.uid
        }
        // console.log("User==>",createUser);
        firebase.database().ref("/").child("users/"+createUser.uid).set(createUser)
        .then(()=>{
            dispatch({type:"SETFBUSER",payload:createUser})
            alert("User Login Succesfully")
            history.push("/chat")//changing url to "/chat"
            
        })
    //   //   window.location="home.html";
      })
      .catch(function(error) {
        // var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });

}
}



const getUsers=()=>{
return (dispatch)=>{
    var users=[];
    firebase.database().ref("users").on("child_added",(data)=>{
        users.push(data.val())
})
dispatch({type:"GETUSERS",payload:users})
}
}


const chat=(chatUser)=>{
    return(dispatch)=>{
        dispatch({type:"CHAT",payload:chatUser})
    }
}

const setMessage=(e)=>{
    var message=e.target.value;
    return(dispatch)=>{
        dispatch({type:"SETMESSAGE",payload:message})
    }
}

const sendMessage=(message)=>{
    return(dispatch)=>{
        dispatch({type:"SENDMESSAGE",payload:message})
    }
}

const uidMerge=(uid1,uid2)=>{
    var chatID;
    if(uid1<uid2){
   chatID=uid1+uid2;
}
else{
   chatID=uid2+uid1;
}
console.log("chatID",chatID);
    return(dispatch)=>{    
    dispatch({type:"UIDMERGE",payload:chatID})
}
}

const sendChatDataToFirebase=(chatID,user,message)=>{
    console.log("fb",chatID,"User",user,message);
   var firebaseMessage={
        name:user.name,
        uid:user.uid,
        message:message,
    }    
    return(dispatch)=>{

        firebase.database().ref("/").child("chats/"+chatID).push(firebaseMessage)    
        // dispatch({type:"SENDDATATOFIREBASE",payload:""})
    }   
}

const getMessages=(chatID)=>{
    return(dispatch)=>{
        var getFirebaseMessages=[];
        firebase.database().ref("/").child("chats/"+chatID).on("child_added",(messages)=>{
            getFirebaseMessages.push(messages.val());
        })
        dispatch({type:"GETMESSAGES",payload:getFirebaseMessages})
    }
}

export {fbLogin,getUsers,chat,setMessage,sendMessage,uidMerge,sendChatDataToFirebase,getMessages}