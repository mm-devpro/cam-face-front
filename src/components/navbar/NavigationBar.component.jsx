import React, {useState} from "react";
import {Collapse,NavbarToggler, NavbarBrand, Navbar, Nav, NavItem, NavLink} from "reactstrap";

const NavigationBar = () => {

  const [open, setOpen] = useState(false)

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">CAMFACE</NavbarBrand>
        <NavbarToggler onClick={() => setOpen(!open)} className="mr-2"/>
        <Collapse isOpen={open} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/users">Users</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cameras">Cameras</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/lockers">Lockers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/settings">Settings</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar
