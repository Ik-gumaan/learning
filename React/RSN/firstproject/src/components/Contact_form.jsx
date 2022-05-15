import React from 'react';
import firebase from '../config/firebase.js';

class Form extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "",
            city: "",
            country: "",
            email: "",
            phone: "",
            comment: ""
        }
    }

    submitData = (e) => {

        var j;
        for (var i = 1; i < 5; i++) {
            j = 0;
            e.target.parentNode.parentNode.parentNode.childNodes[i].childNodes[j].childNodes[1].value = "";
            if (i == 2 || i == 3) {
                j++;
                e.target.parentNode.parentNode.parentNode.childNodes[i].childNodes[j].childNodes[1].value = "";
            }
        }
        if (this.state.name != "" && this.state.email != "" && this.state.comment != "") {

            firebase.database().ref("/").child("Comments/").push(this.state);

            alert("Your comment Succesfully sent")
        }

        else {
            if (this.state.name == "") {
                alert("Name field is empty, Kindly fill it")
            }
            if (this.state.email == "") {
                alert("Email field is empty, Kindly fill it")
            }
            if (this.state.comment == "") {
                alert("Comment field is empty, Kindly fill it")
            }

        }

    }




    render() {

        return (

            // <!-- contact form -->
            <form className="c-form" action="" >
                <div className="form-row col-md-12">
                    <div className="form-group col-md-2"></div>
                    <div className="my-form form-group col-md-8 col-sm-12">
                        <fieldset className="c-field">
                            <legend className="form-head">Contact Form</legend>
                            <div className="form-row">
                                <div className="form-group col-sm-12 col-md-12">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" onChange={(e) => { this.setState({ name: e.target.value }) }} className="form-control" required placeholder="(required)" id="name" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-sm-6 col-md-6">
                                    <label htmlFor="city">City</label>
                                    <input type="text" onChange={(e) => this.setState({ city: e.target.value })} className="form-control" placeholder="(optional)" id="city" />
                                </div>
                                <div className="form-group col-sm-6 col-md-6">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" onChange={(e) => this.setState({ country: e.target.value })} className="form-control" placeholder="(optional)" id="country" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-sm-6 col-md-6">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" onChange={(e) => this.setState({ email: e.target.value })} className="form-control" placeholder="(required)" required id="email" />
                                </div>
                                <div className="form-group col-sm-6 col-md-6">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" onChange={(e) => this.setState({ phone: e.target.value })} className="form-control" placeholder="(optional)" id="phone" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-sm-12 col-md-12">
                                    <label htmlFor="comment">Comment</label>
                                    <textarea onChange={(e) => this.setState({ comment: e.target.value })} className="form-control" id="comment" placeholder="(required)" rows="3"
                                        required></textarea>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-sm-12">
                                    <button type="button" onClick={(e) => this.submitData(e)} className="btn btn-primary">Submit</button>
                                </div>
                            </div>

                        </fieldset>
                    </div>

                </div>
            </form>

        )
    }
}
export default Form;


