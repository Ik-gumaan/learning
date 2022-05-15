import React from 'react';
import {Router,Route,} from 'react-router-dom';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router-dom'
import Home from '../Routing/components/Home'
import About from '../Routing/components/About'

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                {/* here Router is the parent element for changing of page 
                and Rote is the child element menas pages
                In Route path means gives url and Componet that on that path this component is shown
                exact is used for exact path
                if exact is absent then /Aboutsdsdd == /About
                means both opens About Page*/}
                <Route exact path="/" Component={Home} />
                <Route exact path="/about" Component={About} />
             </Router>   

            )
    }
}

export default AppRouter;