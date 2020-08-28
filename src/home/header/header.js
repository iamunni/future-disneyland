import React, { useState } from 'react';
import './header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">DISNEY</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto " navbar>
            <NavItem>
              <NavLink href="/accommodation">ACCOMMODATION</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dining">DINING</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>CHOOSE LANGUAGE</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;