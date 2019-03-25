import React, { Component } from 'react';
import {
  Row,
  Container,
   } from 'reactstrap';

import { 
  Image ,
} from 'react-bootstrap';


import Project from "./models/projects";
import NavigationBar from "./models/navbar"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component {

  render() {
    
    var shopBackground = {
      height: "150px",
      marginBottom: "30px",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
    

    return (

      <div>

        <NavigationBar/>
        <Image src="https://image.redbull.com/rbcom/010/2016-06-08/1331799129745_1/0100/0/1/that-long-hot-road.jpg" fluid style={shopBackground}/>;
        <Container>
          <Row>
            <Project/>
          </Row>
        </Container>

      </div>

    );
  }
}

export default App;
