import React from 'react';
import {connect} from 'react-redux'
import {getUsers,chat,setMessage,sendMessage,uidMerge,sendChatDataToFirebase,getMessages} from '../store/actions';


class Chat extends React.Component {

componentDidMount(){
  this.props.getUsers();
}


  render() {
    var user=this.props.currentUser;
    var chatUser=this.props.chatUser;
    var message=this.props.message;
    var chatID=this.props.chatID;
    // console.log(this.props)
// console.log(this.props.getMessages(chatID))
    return (

      <div>
        <h1>welcome {user.name}</h1>
        <br/>
        <div><img src={user.profile} width="50px" />
        {user.name}
        </div>
        <div style={{backgroundColor:"yellow"}}>
          Chat Users:
          <ul>
            {this.props.users.map((v,i)=>{
                return(
                  v.uid!=user.uid &&
                   <li key={i}>
                    <img src={v.profile} width="20px"/> {v.name} 
                 <button onClick={()=>{this.props.chat(v);
                  this.props.uidMerge(user.uid,v.uid);
                  this.props.getMessages(chatID);}}>chat</button>
                 </li>
                )
            })}
          </ul>
          <br/>
        </div>
        <div style={{backgroundColor:"orange"}}>
          <h3>chat</h3>
          {Object.keys(chatUser).length ? <div>
          <img src={chatUser.profile} width="30px"/>
                      <h4>{chatUser.name}</h4>
                      <ul>
                        {this.props.chats.map((v,i)=>{
                          return(
                            <li style={{backgroundColor: v.uid==user.uid ? "green" : "red"}} key={i}>{v.message}</li>
                          )
                        })}
                      </ul>
                      <input type="text" value={message} onChange={(e)=>this.props.setMessage(e)} />
                        <button onClick={
                          ()=>{this.props.sendMessage(message);
                            this.props.sendChatDataToFirebase(chatID,user,message);
                            this.props.getMessages(chatID);
                          }}
                          >send</button>
                        </div>   :
                      <h4>No User</h4>            
                      }
        </div>

      </div>

    ) 
  }

}

const mapStateToProps=(state)=>({
currentUser:state.currentUser,
users:state.users,
chatUser:state.chatUser,
message:state.message,
chats:state.chats,
chatID:state.chatID,
})

const mapDispatchToProps=(dispatch)=>({
  getUsers:()=>dispatch(getUsers()),
  chat:(chatUser)=>dispatch(chat(chatUser)),
  setMessage:(e)=>dispatch(setMessage(e)),
  sendMessage:(message)=>dispatch(sendMessage(message)),
  uidMerge:(uid1,uid2)=>dispatch(uidMerge(uid1,uid2)),
  sendChatDataToFirebase:(chatID,user,message)=>dispatch(sendChatDataToFirebase(chatID,user,message)),
getMessages:(chatID)=>dispatch(getMessages(chatID)),
})


export default connect(mapStateToProps,mapDispatchToProps)(Chat);