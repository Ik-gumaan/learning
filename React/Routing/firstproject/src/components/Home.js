import React from 'react';
// import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route,Link,} from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>Home</h1>
                <Link to={"/about"}>Go to About</Link>
                <br/>
                <Link to={"/contact"}>Go to Contact</Link>   
                {/* here Link is imported to use in place of anchor tag 
                and to is an prop which = href in anchor tag */}
            </div>
        )
    }
}

export default Home;