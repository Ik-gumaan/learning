import React from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import RSN_LOGO from '../images/rns asim logo.jpg'

class Home_card extends React.Component{

    imageView=(e)=>{
        window.location=e.target.src;
    }

    render(){
        return(
    
<div className="row card-home">
    <div className="col col-sm-7 about-text">
        <div className="card-body">
            <h5 className="card-title head-home center" >About RSN</h5>
            <div className="card-text">
                <b className="center">RSN Graphics provides you the best and unique Graphic designing services.</b>
                <h6 className="sub-head-home">Our Specailites</h6>
                    <ul className="sub-head-home-list">
                    <li>Adobe illustrator</li> 
                    <li>Adobe Photoshop</li> 
                    <li>Adobe indesign</li>
                    <li>Inpage</li>  
                    </ul>
                    <h6 className="sub-head-home">Our Services</h6>
                    <ul className="sub-head-home-list">
                        <li>Logo designing(simple logos, unique logos, 3d Logos)</li>
                        <li>Visiting and Business Cards designing</li>
                        <li>Posters and web posts designing</li>
                        <li>brouchers and flyers designing</li>
                        <li>Packaging designing</li>
                        <li>Face vectors</li>
                        <li>Image manipulation and much more.</li>
                    </ul>
                </div>
        </div>
    </div>
    <div className="img-logo col col-sm-5">
        <img id="logo" onClick={this.imageView} src={RSN_LOGO} className="card-img" alt="..." />
    </div>
</div>
        )
    }
    }
    
    export default Home_card;







