import React from 'react';
// import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route,Link,} from 'react-router-dom';

class About extends React.Component{

    goToHome=()=>{
        console.log(this.props);
        this.props.history.push('/'); //this is used while authenticating to change the window/page, it is done using javascript
        }

    render(){
        return(
            <div>
                <h1>About</h1>
                <Link to={"/"}>Go to Home</Link>
                <br/>
                <Link to={"/contact"}>Go to Contact</Link>
                {/* <button onClick={this.goToHome}>Go to Home</button> */}
                
                {/* Here Link is used not to change or refresh the page as in website to navigate through pages*/ } 
            
            </div>
        )
    }
}

export default About;