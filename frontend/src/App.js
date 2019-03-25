import React, { Component } from 'react';
import {
  Row,
  Container,
  // CardDeck
   } from 'reactstrap';

import { 
  Image ,
} from 'react-bootstrap';


import Project from "./models/projects";
import NavigationBar from "./models/navbar"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { faEnvelope, faCamera, faBicycle, faMapMarkerAlt, faSun, faChartBar, faFilm, faAddressBook } from '@fortawesome/free-solid-svg-icons';



class App extends Component {

  
  render() {
    
    var shopBackground = {
      height: "200px",
      width: "100%",
      marginBottom: "30px",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }

    const projectData = [
      {name: 'MyMails', desc: 'Une Web App de Messagerie minimaliste', icon: faEnvelope, value: 80, days: "4"},
      {name: 'BikeShop', desc: 'Un site E-Commerce avec moyen de paiement', icon: faBicycle, value: 100, days: "5"},
      {name: 'BlackBoard', desc: 'Un Backoffice de gestion de e-commerce', icon: faChartBar, value: 100, days: "5"},
      {name: 'WeatherApp', desc: 'Une appli web de météo en temps réel', icon: faSun, value: 100, days: "5"},
      {name: 'MyMoviz', desc: 'Une plateforme avec les derniers films en temps réel', icon: faFilm, value: 60, days: "3"},
      {name: "Whol'Up", desc: 'Une application mobile de contact', icon: faAddressBook, value: 100, days: "5"},
      {name: "Face'Up", desc: 'Une application mobile de reconnaissance faciale', icon: faMapMarkerAlt, value: 100, days: "5"},
      {name: 'LocaPic', desc: 'Une application mobile de géolocalisation avec un chat', icon: faCamera, value: 60, days:"3"},
    ];
    
    var projectList = projectData.map((project, i) => {
      return(<Project key={i} projectName={project.name} projectDesc={project.desc} projectIcon={project.icon} projectValue={project.value} projectDays={project.days}/>)
    });

    return (

      <div>

        <NavigationBar/>
        <Image src="https://image.redbull.com/rbcom/010/2016-06-08/1331799129745_1/0100/0/1/that-long-hot-road.jpg" fluid style={shopBackground}/>;
        <Container>
          <Row>
            {/* <CardDeck> */}
              {projectList}
            {/* </CardDeck> */}
          </Row>
        </Container>

      </div>

    );
  }
}

export default App;
