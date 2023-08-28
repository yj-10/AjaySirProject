import React from "react";
import { Link } from "react-router-dom";

import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
  Container,
} from "reactstrap";
import Footer from "../Common/Footer/Footer";
import { NavLink as RRNavLink } from "react-router-dom";

function Layout({ children }) {
  // Collapse isOpen State
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div>
        <Navbar color="light" light container expand="md">
            <NavbarBrand href="/">Logo</NavbarBrand>
            <NavbarToggler
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ms-auto" navbar>
                <NavItem>
                  <NavLink
                    className=""
                    activeClassName="active"
                    to="/"
                    tag={RRNavLink}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className=""
                    activeClassName="active"
                    to="/About"
                    tag={RRNavLink}
                  >
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className=""
                    activeClassName="active"
                    to="/Ceo-Coaching"
                    tag={RRNavLink}
                  >
                    Coaching
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>


      </div>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
