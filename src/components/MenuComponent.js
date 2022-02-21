<<<<<<< HEAD
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
=======
import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

<<<<<<< HEAD
    function RenderMenuItem({ dish, onClick }) {
        return(
            <Card>
                <Link to={`/menu/${dish._id}`} >
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }
=======
function RenderMenuItem ({dish, onClick}) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle><h4>{dish.name}</h4></CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44

    const Menu = (props) => {

        const menu = props.dishes.dishes.map((dish) => {
            return (
<<<<<<< HEAD
                <div key={dish._id} className="col-12 col-md-5 m-1">
=======
                <div key={ dish.id } className="col-12 col-md-5 m-1">    
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
                    <RenderMenuItem dish={dish} />
                </div>
            );
        });

<<<<<<< HEAD
        if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            );
        }
=======
        if (props.dishes.isLoading){
            return(
                <div className="container">
                  <div className="row">
                    <Loading  />
                  </div>
                </div>
              );
            }
            else if (props.dishes.errMess){
              return(
                <div className="container">
                  <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                  </div>
                </div>
              );
            }
        
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
        else
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
<<<<<<< HEAD
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
=======
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr />
<<<<<<< HEAD
                        </div>
=======
                        </div>                
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );
<<<<<<< HEAD
    }

=======

    }
        
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
export default Menu;