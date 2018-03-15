import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import SearchForm from './SearchForm'
import NavPiece from "./NavPiece";

// The Header creates links that can be used to navigate
// between routes.

class ReactStrapHeader extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="faded" dark expand="md">
        <NavbarBrand href="/">DataSpy</NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <NavPiece to='/query' text="Query Page"/>
            {/*<NavPiece to='/roster' text="Roster Page"/>*/}
            <NavPiece to='/about' text="About"/>
            {/*<NavPiece to='/schedule' text="Schedule"/>*/}

          </Nav>
        </Collapse>

        <SearchForm/>

      </Navbar>
    )
  }
}

export default ReactStrapHeader;
