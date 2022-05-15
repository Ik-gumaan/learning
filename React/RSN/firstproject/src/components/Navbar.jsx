import React from 'react';
import LOGO from '../images/RSN logot.png'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href=""><img onClick={this.imageView} src={LOGO} alt="RSN" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
    
            </ul >
            <span className="navbar-text">
                <ul className="navbar-nav mr-auto">
                    <li className={this.props.home}>
                        <Link to={"/"} className="nav-link">HOME<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className={this.props.port}>
                        <Link to={"/portfolio"} className="nav-link">PORTFOLIO</Link>
                    </li>
                    <li className={this.props.contact}>
                        <Link to={"/contact"} className="nav-link">CONTACT</Link>
                    </li>
    
                    {/* <!-- <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-sign-in" aria-hidden="true"></i>
                        </a>
                    </li> --> */}
                </ul>
            </span>
        </div>
    </nav>
    
        )
    }
    }
    
    export default Navbar;