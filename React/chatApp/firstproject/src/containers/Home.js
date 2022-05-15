import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setUser,fbLogin} from '../store/actions'

class Home extends React.Component {
  
  static getDerivedStateFromProps(props,state){
    console.log("Props======>",props)
    return{

    }
  }
  
  
  render() {
    return (

      <div>
        <h1>Home</h1>
        <button onClick={()=>this.props.fbLogin(this.props.history)}>Facebook Login</button>
        {/*here we are getting history in props to use dor routing*/ }
        {/* <button onClick={()=>this.props.setUser(user)}>setUser</button> */}
      </div>

    )
  }

}

const mapStateToProps=(state)=>({
users:state.users
});

const mapDispatchToProps=(dispatch)=>({
    // setUser: (userData)=>{dispatch(setUser(userData))}
    fbLogin: (history)=>{dispatch(fbLogin(history))}

  });
    


export default connect(mapStateToProps,mapDispatchToProps)(Home);


