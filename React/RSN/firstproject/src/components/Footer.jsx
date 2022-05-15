import React from 'react';
import Fb_Icon from '../images/fb page link.png'

class Footer extends React.Component{
    render(){
        return(
<div className="footer">
    <div className="row">
        <a href="https://www.facebook.com/RSN-Graphics-100803111795370/">
        <img src={Fb_Icon} alt="Facebook/RSN Graphics" />
         </a>
    </div>
    <br/>
    <p className="center">copyright xofrode developers</p>
    <p className="center">all rights reserved.</p>
</div>   
        )
    }
    }
    
    export default Footer;


