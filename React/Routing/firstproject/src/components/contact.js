import React from 'react';
import {BrowserRouter as Router,Route,Link,} from 'react-router-dom';

class Contact extends React.Component{


    render(){
        return(
            <div>
                <h1>Contact</h1>
                <Link to={"/"}>Go to Home</Link>
                <br/>
                <Link to={"/about"}>Go to About</Link>
                {/* <button onClick={this.goToHome}>Go to Home</button> */}
                {/* Here Link is used not to change or refresh the page as in website to navigate through pages*/ } 
            
            </div>
        )
    }
}

export default Contact;