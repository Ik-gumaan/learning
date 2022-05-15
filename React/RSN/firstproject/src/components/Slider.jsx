import React from 'react';
import one from '../images/Simple Web Cover 3.jpg';
import two from '../images/RSN fb cover-4-01.jpg';



class Slider extends React.Component{

    imageView=(e)=>{
        window.location=e.target.src;
    }


    render(){
        return(
            // <!-- slider -->
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="10000">
                        <img id="slider-1" onClick={this.imageView} src={one} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                    <img id="slider-2" src={two} onClick={this.imageView} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>)
}
}
export default Slider;




