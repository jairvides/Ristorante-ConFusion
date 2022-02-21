import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';
<<<<<<< HEAD
=======
import {Map, GoogleApiWrapper} from 'google-maps-react';

>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

<<<<<<< HEAD
    constructor(props) {
=======
    constructor(props){
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
<<<<<<< HEAD

    handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        this.props.postFeedback(values);
=======
    
    handleSubmit(values){
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
        this.props.resetFeedbackForm();
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
<<<<<<< HEAD
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
=======
                        <BreadcrumbItem><Link to='home'>Home</Link></BreadcrumbItem>
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
<<<<<<< HEAD
=======
                        <div>
                            <Map
                                google= {this.props.google}
                                style= {{width:"40%", height:"40%"}}
                                zoom = {15}
                                initialCenter = {
                                    {
                                        lat: 10.189954,
                                        lng: -74.058450
                                    }

                                }
                            />
                        </div>
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
<<<<<<< HEAD
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
=======
                            <a role="button" className="btn btn-info" href="https://www.skype.com/es/"><i className="fa fa-skype"></i> Skype</a>
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
<<<<<<< HEAD
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
=======
                                {/* eslint-disable */}
                                    <Control.text model=".firstname" id="firstname" name="firstname" 
                                        placeholder="First Name" 
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }} 
                                    />
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
<<<<<<< HEAD
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
=======
                                            minLength: 'Debe ser mayor a 2 caracteres',
                                            maxLength: 'Debe ser 15 caracteres o menos'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <br></br>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname" 
                                        placeholder="Last Name"
                                        className="form-control" 
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
<<<<<<< HEAD
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
=======
                                            minLength: 'Debe ser mayor a 2 caracteres',
                                            maxLength: 'Debe ser 15 caracteres o menos'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <br></br>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum" 
                                        placeholder="Tel. Number (000)-(000)-(0000)" 
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
<<<<<<< HEAD
                                         />
=======
                                    />
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
<<<<<<< HEAD
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
=======
                                            minLength: 'Debe ser mayor a 2 números',
                                            maxLength: 'Debe ser 15 números o menos',
                                            isNumber: 'Debe ser un número'
                                        }}
                                    />
                                    
                                </Col>
                            </Row>
                            <br></br>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email" 
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
<<<<<<< HEAD
                                         />
=======
                                    />
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
<<<<<<< HEAD
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
=======
                                            validEmail: 'Email Inválido'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <br></br>
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input"
<<<<<<< HEAD
                                                 /> {' '}
=======
                                                /> {' '}
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
<<<<<<< HEAD
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Send Feedback
=======
                            <br></br>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                   <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                    </Col>
                            </Row>
                            <br></br>
                            <Row className="form-group">
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
<<<<<<< HEAD
    }

}

export default Contact;
=======

    }
    
}

export default GoogleApiWrapper({apiKey:"AIzaSyAIxGwUcxLBWN9wFh4hocyiEBsTgYNarI0"})(Contact)
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
