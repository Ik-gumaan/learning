import React from 'react';
import {BrowserRouter as Router,Route,Link,} from 'react-router-dom';
import Home from '../containers/Home'
import Port from '../containers/Port'
import Contact from '../containers/Contact'
// import RSN_LOGO from '../images/rns asim logo.jpg'


class AppRouter extends React.Component{
    render(){
        return(
            <Router>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/portfolio" component={Port}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            </Router>    
        )
    }
}

export default AppRouter;