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
} from "reactstrap";
import Footer from "../Common/Footer/Footer";

function Layout({children}) {
  // Collapse isOpen State
  const [isOpen, setIsOpen] = React.useState(false);

  return (<>

    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Ajay Sir</NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/About">About</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/Service">Service</Link>
              </NavLink>
            </NavItem>
     
        
          </Nav>
        </Collapse>
      </Navbar>
    </div>
{children}
<Footer/>
  </>);
}

export default Layout;
