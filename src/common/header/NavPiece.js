import React from 'react'
import {
  // Link,
  NavLink as RouterNavLink,
} from 'react-router-dom'

import {
  NavItem,
  NavLink,
} from 'reactstrap';

const NavPiece = props => (
  <div>
    <NavItem>
      <NavLink tag={RouterNavLink} to={props.to} activeClassName="active">
        {props.text || "donno page"}
      </NavLink>
    </NavItem>
  </div>
)

export default NavPiece
