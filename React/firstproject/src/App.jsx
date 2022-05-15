import React from 'react';
import './App.css';

// import Home from '../src/config/Routing/components/Home' 
// import About from '../src/config/Routing/components/About'
import AppRouter from './config/Routing/Router';


// function App() {
//   return (
//     <div className="App">
//     <h1>hello world</h1>
//     </div>
//   );
// }

// Both above and below code gives same output above is function component and below is class component in react


class App extends React.Component{

  render(){
 return(
<div className="App">

{/* <Home/> */}
{/* <About/> */}

<AppRouter/>

      </div>  
    )
  }
}

