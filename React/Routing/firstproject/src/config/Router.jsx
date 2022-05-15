import React from 'react';
import {BrowserRouter as Router,Route,Link,} from 'react-router-dom';
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/contact'

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            </Router>    
        )
    }
}

export default AppRouter;