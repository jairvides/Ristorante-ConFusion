import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
      }

      handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + "Password: " + this.password.value
        + " Remember: " + this.remember.checked);
        event.preventDefault();
      }


    render(){
        return (
            <React.Fragment>
                <Navbar dark expand="md">
				    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <div class="icoleft">
					        <NavbarBrand className="me-auto" href="/">
                                
                                <img src="assets/images/palmoil.png" height="30" width="41"
                                    alt="Palm Oil" />
                                    
                            </NavbarBrand>
                            </div>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">
                                            <span className="fa fa-home fa-lg"></span> Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/aboutus">
                                            <span className="fa fa-info fa-lg"></span> About Us
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/menu">
                                            <span className="fa fa-list fa-lg"></span> Menu
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus">
                                            <span className="fa fa-address-card fa-lg"></span> Contact Us
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <Nav className="ms-auto" navbar>
                                    <NavItem>
                                        <Button outline onClick={this.toggleModal}>
                                            <span className="fa fa-sign-in fa-lg"></span> Login
                                        </Button>
                                    </NavItem>
                                </Nav>
                            </Collapse>
				    </div>
				</Navbar>
                <div class="jumbotron">
                    <div class="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1 class="display-5 fw-bold">SisCFruit</h1>
                                <p class="col-md-8 fs-4">Aplicación Web para el control de fruta de palma de aceite</p>
                                {/*<button class="btn btn-primary btn-lg" type="button">Example button</button>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <label htmlFor="username">Username</label>
                                <Input type="text" id="username" name="username" 
                                    innerRef={(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="password">Password</label>
                                <Input type="password" id="password" name="password" 
                                    innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" 
                                        innerRef={(input) => this.remember = input}/>
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>

        );
    }
}

export default Header;