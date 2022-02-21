<<<<<<< HEAD
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Label,
    Modal, ModalHeader, ModalBody, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
=======
import React, { Component } from "react";
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem, CardBody, CardText } from "reactstrap";
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalHeader, Label, Row, Col } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

<<<<<<< HEAD
    function RenderDish({dish, favorite, postFavorite}) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <FadeTransform in 
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Card>
                            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <Button outline color="primary" onClick={() => favorite ? console.log('Already favorite') : postFavorite(dish._id)}>
                                    {favorite ?
                                        <span className="fa fa-heart"></span>
                                        : 
                                        <span className="fa fa-heart-o"></span>
                                    }
                                </Button>
                            </CardImgOverlay>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>
            );

    }

    function RenderComments({comments, postComment, dishId}) {
        if (comments != null)
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        <Stagger in>
                            {comments.map((comment) => {
                                return (
                                    <Fade in key={comment._id}>
                                        <li>
                                        <p>{comment.comment}</p>
                                        <p>{comment.rating} stars</p>
                                        <p>-- {comment.author.firstname} {comment.author.lastname} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.updatedAt)))}</p>
                                        </li>
                                    </Fade>
                                );
                            })}
                        </Stagger>
                    </ul>
                    <CommentForm dishId={dishId} postComment={postComment} />
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    class CommentForm extends Component {

        constructor(props) {
            super(props);
    
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            
            this.state = {
              isNavOpen: false,
              isModalOpen: false
            };
        }
    
        toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen
            });
        }
    
        handleSubmit(values) {
            this.toggleModal();
            this.props.postComment(this.props.dishId, values.rating, values.comment);
        }
    
        render() {
            return(
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select model=".rating" id="rating" className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="comment">Comment</Label>
                            <Control.textarea model=".comment" id="comment"
                                        rows="6" className="form-control" />
                            </Col>
                        </Row>
                        <Button type="submit" className="bg-primary">
                            Submit
                        </Button>
                    </LocalForm>
                </ModalBody>
               </Modal>
            </div>
            );
        }
    
    }

    const DishDetail = (props) => {
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null)        
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish} favorite={props.favorite} postFavorite={props.postFavorite} />
                        <RenderComments comments={props.comments}
                            postComment={props.postComment}
                            dishId={props.dish._id} />
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
=======
const required = (val) => val && val.length; //value > 0
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);


function RenderDish({dish}) {
  return(
    <div className='col-12 col-md-5 m-1'>
      <FadeTransform in
        transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
          <Card>
            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle><h4>{dish.name}</h4></CardTitle>
              <div class="fontdescription">
              <CardText>{dish.description}</CardText>
              </div>
            </CardBody>
          </Card>
        </FadeTransform>
    </div>
  );
}

function RenderComments({comments, postComment, dishId}){
  if (comments != null)
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          <Stagger in >
          {comments.map((comment)=>{
            return(
              <Fade in>
                <li key={comment.id}>
                <p>{comment.comment}</p>
                <div class="fontdescription">
                <p>-- {comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit'
                }).format(new Date(comment.date))}
                </p></div>
                </li>
              </Fade>
            );
          })}
          </Stagger>
        </ul>
        <CommentForm dishId={dishId} postComment={postComment} />
      </div>
    );
  else
    return(
      <div></div>
    );
}

class CommentForm extends Component {

  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  
  handleSubmit(values) {
    this.toggleModal();
    this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
  }

  

  render() {
    return (
      <React.Fragment>
        <Button outline onClick={this.toggleModal}>
            <span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
          <ModalHeader toggle={this.toggleModal}> Submit Comment </ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12} >Rating</Label>
                <Col md={12}>
                  {/* eslint-disable */}
                  <Control.select model=".rating"
                    className="form-control"
                    name="rating"
                    id="rating">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" md={12}> Your Name </Label>
                <Col md={12}>
                  <Control.text model=".author" id="author" name="author"
                    placeholder="First Name"
                    className="form-control"
                    validators={{required, minLength: minLength(3), maxLength: maxLength(15)}}/>
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: 'Required',
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be 15 characters or less'
                    }}/>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={12}>Comment</Label>
                <Col md={12}>
                  <Control.textarea model=".comment" id="comment" name="comment"
                    rows="6"
                    className="form-control"/>
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Button type="submit" color="primary">
                      Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
        );
    }
}

const DishDetail = (props) => {
  if (props.isLoading) {
    return(
      <div className="container">
        <div className="row">
          <Loading  />
        </div>
      </div>
    );
  }
  else if (props.errMess){
    return(
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }
  else if (props.dish != null)
    return(
      <div class="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr/>
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={ props.comments } 
              postComment={props.postComment}
              dishId={props.dish.id}
            />
        </div>
      </div>
    );
  else
    return(
      <div></div>
    );
}


>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44

export default DishDetail;