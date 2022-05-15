import React, { Component } from 'react';
// import './App.css';

class Child extends React.Component {


//       static getDerivedStateFromProps(props, state){
//     console.log("static method getDerivedStateFromProps child ",props)
//     return null;
//   }


componentWillUnmount(){
    console.log("componentWillUnmount")
}

    render() {
        console.log("render");
        return (
            <div>
                <h1>{this.props.count}</h1>
            </div>
        )
    }
}

export default Child;

