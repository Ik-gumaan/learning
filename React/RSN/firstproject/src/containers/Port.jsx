import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Portfolio from '../components/Portfolio'
import Head from '../components/Page_head'

class Port extends React.Component{

    render(){
        return(
            <div>
                <Navbar home="nav-item" port="nav-item active" contact="nav-item"/>
                 <Slider/>
                <Head head="Portfolio"/>
                <Portfolio/>
                <Footer/>
            </div>
        )
    }

}

export default Port;