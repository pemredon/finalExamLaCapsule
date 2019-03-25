import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody, Progress, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    this.props.handleClickParent(isLike, this.props.projectName);
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
      top: "5%",
      left: "18%",
     }

     var styleImg = {
      backgroundColor: "pink",
      padding: "100px"
     }


    return (
      <Col xs="12" sm="6" md="4" lg="3">
        <div style={{marginBottom:30}}>
        <Card>
          <CardImg top width="100%" style={styleImg} />
          <FontAwesomeIcon size="2x" style={projectImg} icon={this.props.projectIcon} />
          <CardBody>
            <CardTitle>{this.props.projectName}</CardTitle>
            <CardSubtitle>{this.props.projectDesc}</CardSubtitle>
            <CardText>Stack Front</CardText>
            <CardText>Stack Back</CardText>
            <Progress value={this.props.projectValue}>{this.props.projectDays}/5 jours</Progress>
            <Button onClick={this.handleClick} style={favoriteButton}>Favorite</Button>
          </CardBody>
        </Card>
        </div>
      </Col>
      
        );
    }
}