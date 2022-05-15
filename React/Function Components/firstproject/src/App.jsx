import React,{useState,useEffect} from 'react';
//{useState for usings state via hooks}
//{useEffects for lifecylcle via hooks}

import Home from './components/Home';

//we will get props in parameter
export default function App(props) {
  
  //In function component we use state like this
  const [name,setName]=useState("Ali");
  //here we are making state through destructring
  //1st parameter is variable name in state, and 2nd is method to update its value
  //useState contain initial value 
  const [email,setEmail]=useState("Ali@gmail.com");//email=Ali@gmail.com
  const [arr,setArr]=useState(["car"]);
  const [obj,setObj]=useState({name:"khan",email:"khan@gmail.com"});
  

  //to update Array
  const setArray=()=>{
    setArr([...arr,"bike","truck"]);
  }

//to update Object
const setObject=()=>{
  setObj({
    ...obj,
    num:1 //new property in object 
  });
}

//use effect is use inplace of componentDidMount method here
useEffect(()=>{
  console.log("I will run on every render")
})

//when we pass an empty array in 2nd array that will only run on first render
useEffect(()=>{
  console.log("I will run only on first render")
},[])

//first render and when name or email(given property in 2nd argument as a array) updates that will render
useEffect(()=>{
  console.log("I will when name or email updates")
},[email,name])


//Unmount
useEffect(()=>{
  return()=>{
  console.log("Unmount")
}
})


  return (

<div>
  <h1>Hello World</h1>
  {/* here we passes props to Home compoenet and we get there */}
  <Home obj={obj} />
  <h1>{name} {email}</h1>
  <button onClick={()=>setName("Hasan")}>update name</button>
  <ul>
  {arr.map((v,i)=>{
    return (<li key={i}>{v}</li>)
      })
      }
    <button onClick={()=>setArray()}>update array</button>
  </ul>
</div>
  )
}
