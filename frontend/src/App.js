import React, { Component } from 'react';
import {
  Row,
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
   } from 'reactstrap';

import { 
  Image ,
} from 'react-bootstrap';

// import {Provider} from 'react-redux';
// import {createStore}  from 'redux';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { faEnvelope, faCamera, faBicycle, faMapMarkerAlt, faSun, faChartBar, faFilm, faAddressBook } from '@fortawesome/free-solid-svg-icons';


// components
import Project from "./components/projects";
// import NavigationBar from "./components/navbar"

// Redux
// import projectsReducer from './components/projects.reducer';

// const store = createStore({projectsReducer})

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClickLikeOn = this.handleClickLikeOn.bind(this);
    this.handleClickLikeOff = this.handleClickLikeOff.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isOpen: false,
      viewOnlyLike: false,
      projectCount: 0,
      project: [],
      projectLiked: [],

    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleClickLikeOn() {
    console.log("I only want to see the favorite projects")
    this.setState({
      viewOnlyLike: true
    })
  }

  handleClickLikeOff() {
    console.log("I want to see all the projects")
    this.setState({
      viewOnlyLike: false
    })
  }

  handleClick(isLike) {
   
    if (isLike) {
      // 2.1) We want to show this specific project and increment this.state.projectsCount
      this.setState({
        
        projectCount: this.state.projectCount+1,
      })
    }
    // 3) If the project is disliked :
    else {
      // 3.1) We want to target this specific project, and then display it
      this.setState({
        projectCount: this.state.projectCount-1,
      })
    }
    console.log("Nombre de projets selectionner===>", this.setState.projectCount)
    console.log("Nom des films selectionner===>", this.setState.projectNameList)
  }

  
  render() {
    
    var imgBackground = {
      position: "inerit",
      height: "500px",
      marginBottom: "30px",
      backgroundSize: "cover",
      backgroundPosition: "center top",
      width: "100%"
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
      return(<Project key={i} 
        projectName={project.name} 
        projectDesc={project.desc} 
        projectIcon={project.icon} 
        projectValue={project.value} 
        projectDays={project.days}
        handleClickParent={this.handleClick}
        />)
    });

    return (

      // <Provider store={store}>

      <div>
          <div >
          <Navbar color="light" light expand="md" style={{position:'fixed', width: "100%", zIndex: 1}}>
            <NavbarBrand href="/">My Tech World</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink onClick={this.handleClickLikeOff} href="#">The Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={this.handleClickLikeOn} href="#">Top 3</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        <Row >
          <Image src="https://greatives.eu/themes/osmosis/wp-content/uploads/2014/10/handsome-hipster-modern-man-designer-working-home-using-laptop-at-home.jpg" fluid style={imgBackground}/>
        </Row>

        </div>
        <Container>
          <Row>
              {projectList}
          </Row>
        </Container>

      </div>
      // </Provider>


    );
  }
}

export default App;
