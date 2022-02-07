import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
    render(){
        return (
            <React.Fragment>
                <Navbar dark>
				<div className="container">
					<NavbarBrand href="/">SisCFruit</NavbarBrand>
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
            </React.Fragment>

        );
    }
}

export default Header;