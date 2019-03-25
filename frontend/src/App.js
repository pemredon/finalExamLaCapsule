import React, { Component } from 'react';
import {
  Row,
  Container,
  CardDeck
   } from 'reactstrap';

import { 
  Image ,
} from 'react-bootstrap';


import Project from "./models/projects";
import NavigationBar from "./models/navbar"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { faEnvelope, faCamera } from '@fortawesome/free-solid-svg-icons';



class App extends Component {

  render() {
    
    var shopBackground = {
      height: "150px",
      marginBottom: "30px",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }

    const projectData = [
      {name: 'MyMails', desc: 'Une Web App de Messagerie minimaliste', icon: faEnvelope},
      {name: 'BikeShop', desc: 'Un site E-Commerce avec moyen de paiement', icon: faCamera},
      {name: 'BlackBoard', desc: 'Un Backoffice de gestion de e-commerce', icon: faEnvelope},
      {name: 'WeatherApp', desc: 'Une appli web de météo en temps réel', icon: faEnvelope},
      {name: 'MyMoviz', desc: 'Une plateforme avec les derniers films en temps réel', icon: faEnvelope},
      {name: "Whol'Up", desc: 'Une application mobile de contact', icon: faEnvelope},
      {name: "Face'Up", desc: 'Une application mobile de reconnaissance faciale', icon: faEnvelope},
      {name: 'LocaPic', desc: 'Une application mobile de géolocalisation avec un chat', icon: faEnvelope},
    ];
    
    var projectList = projectData.map((project, i) => {
      return(<Project key={i} projectName={project.name} projectDesc={project.desc} projectIcon={project.icon}/>)
    });

    return (

      <div>

        <NavigationBar/>
        <Image src="https://image.redbull.com/rbcom/010/2016-06-08/1331799129745_1/0100/0/1/that-long-hot-road.jpg" fluid style={shopBackground}/>;
        <Container>
          <Row>
            <CardDeck>
              {projectList}
            </CardDeck>
          </Row>
        </Container>

      </div>

    );
  }
}

export default App;
