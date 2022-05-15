import React from 'react';
import pic1 from '../images/portfolio/IMG-20201211-WA0019.jpg'
import pic2 from '../images/portfolio/IMG-20201211-WA0020.jpg'
import pic3 from '../images/portfolio/logo XRD.jpg'
import pic4 from '../images/portfolio/fb post XRD.jpg'
import pic5 from '../images/portfolio/IMG-20201211-WA0024.jpg'
import pic6 from '../images/portfolio/IMG-20201211-WA0017.jpg'
import pic7 from '../images/portfolio/IMG-20201211-WA0022.jpg'
import pic8 from '../images/portfolio/IMG-20201211-WA0023.jpg'
import pic9 from '../images/portfolio/IMG-20201211-WA0016.jpg'
import pic10 from '../images/portfolio/IMG-20201211-WA0021.jpg'
import pic11 from '../images/portfolio/IMG-20201211-WA0027.jpg'
import pic12 from '../images/portfolio/IMG-20201211-WA0028.jpg'
import pic13 from '../images/portfolio/IMG-20201211-WA0018.jpg'
import pic14 from '../images/portfolio/IMG-20201211-WA0026.jpg'
import pic15 from '../images/portfolio/IMG-20201211-WA0025.jpg'


class Portfolio extends React.Component {

    imageView=(e)=>{
        window.location=e.target.src;
    }

    render() {
        return (


            <div className="portfolio">

                <div className="card-group">

                    <div className="card">
                            <img id="card-1" onClick={this.imageView} src={pic1} className="card-img-top"
                                alt="..." />
                        <div className="card-footer">
                            <h5 className="card-title center">3D Logo Design</h5>
                        </div>
                    </div>
                    <div className="card">
                            <img id="card-2" onClick={this.imageView} src={pic2} className="card-img-top"
                                alt="..." />
                        <div className="card-footer">
                            <h5 className="card-title center">Jewellery brand logo</h5>
                        </div>
                    </div>
                    <div className="card">
                            <img id="card-3" onClick={this.imageView} src={pic3} className="card-img-top" alt="..." />
                        <div className="card-footer">
                            <h5 className="card-title center">Software company logo</h5>
                        </div>
                    </div>

                </div>

                <div className="card-group">

                    <div className="card">
                            <img id="card-4" onClick={this.imageView} src={pic4} className="card-img-top" alt="..." />
                        <div className="card-footer">
                            <h5 className="card-title center">Web post</h5>
                        </div>
                    </div>
                    <div className="card">
                            <img id="card-5" onClick={this.imageView} src={pic5} className="card-img-top" alt="..." />
                        <div className="card-footer">
                            <h5 className="card-title center">Construction company logo</h5>
                        </div>
                    </div>

                    <div className="card">
                            <img id="card-6" onClick={this.imageView} src={pic6} className="card-img-top" alt="..." />
                        <div className="card-footer">
                            <h5 className="card-title center">Cosmetic company logo</h5>
                        </div>
                    </div>

                </div>

                <div className="card-group">

                    <div className="card">  
                                              <img id="card-7" onClick={this.imageView} src={pic7} className="card-img-top" alt="..." />
                        <div className="card-footer">
                            <h5 className="card-title center">Robotic company logo</h5>
                        </div>
                    </div>
                    <div className="card">
                            <img id="card-8" onClick={this.imageView} src={pic8} className="card-img-top" alt="..." />
                        <div className="card-footer">
                            <h5 className="card-title center">Coffee shop logo</h5>
                        </div>
                    </div>
                    <div className="card">
                            <img id="card-9" onClick={this.imageView} src={pic9} className="card-img-top" alt="..." />
                        <div className="card-footer">
                            <h5 className="card-title center">Web post</h5>
                        </div>
                    </div>
                </div>

                <div className="card-group">


                    <div className="card">
                            <img id="card-10" onClick={this.imageView} src={pic10} className="card-img-top" alt="..." />
                        <div className="card-footer">
                            <h5 className="card-title center">Face Vector</h5>
                        </div>
                    </div>
                    <div className="card">
                            <img id="card-11" onClick={this.imageView} src={pic11} className="card-img-top" alt="..." />
                        <div className="card-footer">
                            <h5 className="card-title center">Webpage design</h5>
                        </div>
                    </div>

                    <div className="card">
                            <img id="card-12" onClick={this.imageView} src={pic12} className="card-img-top" alt="..." />
                        <div className="card-footer">
                            <h5 className="card-title center">Poster design</h5>
                        </div>
                    </div>
                </div>

                <div className="card-group">
                    <div className="card">
                            <img id="card-13" onClick={this.imageView} src={pic13} className="card-img-top" alt="..." />
                        <div className="card-footer">
                            <h5 className="card-title center">Social media cover</h5>
                        </div>
                    </div>
                    <div className="card">
                            <img id="card-14" onClick={this.imageView} src={pic14} className="card-img-top" alt="..." />
                        <div className="card-footer">
                            <h5 className="card-title center">Construction company logo</h5>
                        </div>
                    </div>

                    <div className="card">
                            <img id="card-15" onClick={this.imageView} src={pic15} className="card-img-top" alt="..." />
                        <div className="card-footer">
                            <h5 className="card-title center">Vector Art</h5>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
export default Portfolio;

