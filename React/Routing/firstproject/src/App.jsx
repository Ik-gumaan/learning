import React from 'react';
import './App.css';
import AppRouter from './config/Router';

// function App() {
//   return (
//     <div className="App">
//     <h1>hello world</h1>
//     </div>
//   );
// }

// Both above and below code gives same output above is function component and below is class component in react




class App extends React.Component {
  render() {
    return (

      <AppRouter/>
    
      )
  }
}

export default App;