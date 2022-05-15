import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Form from '../components/Contact_form'
import Head from '../components/Page_head'


class Contact extends React.Component{

    render(){
        return(
            <div>
                <Navbar home="nav-item" port="nav-item" contact="nav-item active"/>
                <Slider/>
                <Head head="Contact" />
                <Form/>
                <Footer/>
        </div>
   )
    }

}

export default Contact;