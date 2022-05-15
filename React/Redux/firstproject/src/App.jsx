import React, { Component } from 'react';
import {connect} from 'react-redux'//to get global state
//connect has 2 methods
//1.mapStateToProps
//2.mapDispatchToProps
//these method used to be made in last before export statement after outside componenet 

import {setData} from './store/actions' 

class App extends React.Component {

  render() {
var data={
  name:"hus",
  class:"10th",
}
    console.log("redux-data==>",this.props)
    return (

      <div>
        <h1>React Redux</h1>
        <br/>
        <button onClick={()=>this.props.setData(data)}>setData</button>
        {/* <button onClick={this.props}>seeProps</button> */}
      </div>
    )
  }

}

//mapStateToProps:we can access it using props , all data update/initialize here is set in the form of props
const mapStateToProps=(state)=>({//state: return here global state

  // name:state.name,//the name property it will find and save it in name
// class:state.class,
// data:state.data,

//below method is used while using data from different files(in form of combine reducers)
name:state.init.name,//here init is the name which we give it to its object in combine reducers
class:state.init.class,//here init is the name which we give it to its object in combine reducers
appName:state.app.appName,//here app is the name which we give it to its object in combine reducers
version:state.app.version,//here app is the name which we give it to its object in combine reducers
username: state.auth.username,//here auth is the name which we give it to its object in combine reducers
email: state.auth.email,//here auth is the name which we give it to its object in combine reducers

number:89//number property is created and settled within object

})

const mapDispatchToProps=(dispatch)=>({
//here we will make functions/actions
// we will get these functions as props 

// setData:()=>{setData()}//here calling a funtion from actions
setData:(data)=>dispatch(setData(data))//dispatch is used to connect this function from redux
// ,seeProps:()=>dispatch(seeProps())

})


export default connect(mapStateToProps,mapDispatchToProps)(App);//here connect is used to connect
//connect take two mathods as an argument mapStateToProps and mapDispatchToProps



// REDUX: framework of js to manage state(to use state gloabally)
// installation:npm i react-redux redux 
// create a store folder in src 
// and a folder as actions
// also install : npm i redux-thunk(for additiional actions from databases etc)

