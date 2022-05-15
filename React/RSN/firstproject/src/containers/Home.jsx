import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home_card from '../components/Home_card'
import Slider from '../components/Slider'
import Head from '../components/Page_head'

class Home extends React.Component {

    render() {
        return (
            <div>
                <Navbar home="nav-item active" port="nav-item" contact="nav-item"/>
                <Slider/>
                <Head head="Home"/>
                <Home_card/>
                <Footer />
            </div>
        )
                    

}
}
export default Home;