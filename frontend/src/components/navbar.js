import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
   } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

    

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.handleClickLikeOn = this.handleClickLikeOn.bind(this);
    this.handleClickLikeOff = this.handleClickLikeOff.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      viewOnlyLike: false,

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

  handleClick(isLike, name) {
    // 1) First of all, we want to realize a copy of our state because it is an Array and we do not want to create a simple reference (for arrays and objects) but a real copy.
    var projectsNameListCopy = [...this.state.projectsNameList];

    // 2) If the project is liked :
    if (isLike) {
      // 2.1) We want to push this specific project and increment this.state.projectsCout
      projectsNameListCopy.push(name);
      this.setState({
        projectsCount: this.state.projectsCount+1,
        projectsNameList: projectsNameListCopy,
      })
    }
    // 3) If the project is disliked :
    else {
      // 3.1) We want to target this specific project, and then splice it
      var index = projectsNameListCopy.indexOf(name)
      projectsNameListCopy.splice(index, 1);
      this.setState({
        projectsCount: this.state.projectsCount-1,
        projectsNameList: projectsNameListCopy,
      })
    }
  }
    
      render() {

    return (

      <div>
      <Navbar color="light" light expand="md">
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
    </div>


        );
    }
}