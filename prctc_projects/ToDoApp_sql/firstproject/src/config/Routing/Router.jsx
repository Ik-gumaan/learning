import React from 'react';
import {BrowserRouter as Router,Route,Link,} from 'react-router-dom';
import ToDoApp from '../components/ToDoApp'
import Database from '../components/database'

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
            <Route path="/" component={ToDoApp}></Route>
            <Route path="/database" component={Database}></Route>
            </Router>    
        )
    }
}

export default AppRouter;