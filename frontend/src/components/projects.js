import React, { Component } from 'react';
import { 
  Card, 
  Button,
  CardImg, 
  CardTitle,
  CardText,
  CardSubtitle, 
  CardBody, 
  Progress, 
  Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row } from 'react-bootstrap';

export default class Project extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      like: false
    }
  }
  handleClick(){
    var isLike = !this.state.like;
    this.setState({
      like: isLike
    });
    this.props.handleClickParent(isLike);
  }

    render(){

     var favoriteButton = {
       color: "primary",
     }
     if (this.state.like) {
       favoriteButton.color = "secondary";
     }

     var projectImg = {
      content: "\f087", 
      fontFamily: "FontAwesome",
      fontStyle: "normal",
      fontWeight: "normal",
      textDecoration: "inherit",
      position: "absolute",
      fontSize: "150px",
      color: "white",
      top: "8%",
      left: "27%",
     }

     var styleImg = {
      backgroundColor: "#FF675D",
      padding: "100px"
     }


    return (
      <Col xs="12" sm="8" md="6" lg="4">
        <div style={{marginBottom:30}}>
        <Card body className="text-center">
          <CardImg top width="100%" style={styleImg} />
          <FontAwesomeIcon size="2x" style={projectImg} icon={this.props.projectIcon} />
          <CardBody>
            <CardTitle>{this.props.projectName}</CardTitle>
            <CardSubtitle>{this.props.projectDesc}</CardSubtitle>
            <CardText>Stack Front</CardText>
            <Row style={{marginBottom: "10px", alignItems: "center"}}>
              <Button color="secondary" size="sm" style={{marginRight: "10px"}}>HTML</Button>{' '}
              <Button color="secondary" size="sm" style={{marginRight: "10px"}}>CSS</Button>
            </Row>
            <CardText>Stack Back</CardText>
            <Row style={{marginBottom: "10px", alignItems: "center"}}>
              <Button color="secondary" size="sm" style={{marginRight: "10px"}}>MongoDB</Button>{' '}
              <Button color="secondary" size="sm" style={{marginRight: "10px"}}>Mongoose</Button>
            </Row>

            <Progress style={{marginBottom: "10px"}} color="secondary" value={this.props.projectValue}>{this.props.projectDays}/5 jours</Progress>
            
            <Button onClick={this.handleClick} style={favoriteButton}>Favorite</Button>
          </CardBody>
        </Card>
        </div>
      </Col>
      
        );
    }
}
