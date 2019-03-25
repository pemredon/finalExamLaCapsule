import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody, Progress } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Project extends Component {

    render(){

     var projectImg = {
      content: "\f087", 
      fontFamily: "FontAwesome",
      fontStyle: "normal",
      fontWeight: "normal",
      textDecoration: "inherit",
      position: "absolute",
      fontSize: "200px",
      color: "white",
      // top: "50%",
      left: "40%",
      // margin: "-300px 0 0 -200px",
      // zIndex: "1",
     }

     var styleImg = {
      backgroundColor: "pink",
      padding: "100px"
     }


    return (
      <Card>
        <CardImg top width="100%" style={styleImg} />
        <FontAwesomeIcon size="2x" style={projectImg} icon={this.props.projectIcon} />
        <CardBody>
          <CardTitle>{this.props.projectName}</CardTitle>
          <CardSubtitle>{this.props.projectDesc}</CardSubtitle>
          <CardText>Stack Front</CardText>
          <CardText>Stack Back</CardText>
          <Progress value={80}>4/5</Progress>
          <Button>Favorite</Button>
        </CardBody>
      </Card>
      
        );
    }
}