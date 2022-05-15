import React, { Component } from 'react';
// import './App.css';
import Child from './components/child'

// import AppRouter from './config/Router';

// function App() {
//   return (
//     <div className="App">
//     <h1>hello world</h1>
//     </div>
//   );
// }

// Both above and below code gives same output above is function component and below is class component in react

class App extends React.Component {

  constructor(){
    console.log("constructor")
    super();
    this.state={
      name:"hanna",
      num:0
    }

  }

  // static getDerivedStateFromProps(props, state){
  //   console.log("static method getDerivedStateFromProps ",state)
  //   return null;
  // }

  componentDidMount(){
    console.log("componentDidMount");
    // firebase.database().ref("/").on("child_added",function(data){
    //   console.log(data.val());
    // })

  }

// shouldComponentUpdate(){
//   console.log("shouldComponentUpdate==>false")
//   return true;
//   // used conditional statements that when you want to render or when not while updation
// }

getSnapshotBeforeUpdate(preProps,preState){

  console.log("getSnapshotBeforeUpdate", preState);

}

componentDidUpdate(preProps,preState){

  console.log("ComponentDidUpdate",preState);

}


  render() {
    console.log("render");
    return (

<div>
  <h1>LifeCycle</h1>
    <p>{this.state.name}</p>
    {/* <p>{this.state.num}</p> */}
    {/* <Child count={this.state.num} /> */}
    {this.state.num<5 && <Child count={this.state.num} />}
   <button onClick={()=>this.setState({num:this.state.num+1})}>Increment</button>
    <button onClick={()=>{this.setState({num:this.state.num-1})}}>Decrement</button>
  </div>    
      )
  }
}

export default App;


// REACT LIFECYCLE
// 3 phases: mounting phase, updating phase, unmounting phase

// Phase 1:mounting phase has 4 methods
// sequence of calling methods are below
// 1: constructor: used in initialing using state
// 2:setDerivedStateFromProps : static function , should return something, used in adding/updating data using state
// setDerivedStateFromProps automatically calls when any sort of updation occurs
// 3:render: used to display UI
// 4:componentDidMount: used when UI displayed mostly when we need to get data from database and APIs

// Phase 2: updating phase
// 1:setDerivedStateFromProps : static function , should return something, used in adding/updating data using state
//2:shouldComponentUpdate: returns boolean value, false not to do update , and true to do update while rendering
// 3:render: used to display UI
//4:getSnapshotBeforeUpdate:Before update it save previous state and ptrops
//5:componetDidUpdate:after updating it will save its state and prop
// 4 & 5 use very less and in new React it is eliminated

//Phase 3: unmounting
// 1.componentWillUnmount: used when component ends(use very less)