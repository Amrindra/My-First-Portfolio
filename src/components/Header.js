import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  const nav = [
    { id: 1, route: "/", nav: "Home" },
    { id: 2, route: "/projects", nav: "Projects" },
    { id: 3, route: "/aboutMe", nav: "About Me" },
    { id: 4, route: "/certificate", nav: "Certificates" },
    { id: 5, route: "/contact", nav: "Contact" },
    { id: 6, route: "/resume", nav: "Resume" }
  ];

  return (
    <div>
      <header>
        <Navbar
          className="navbar"
          // bg="light"
          variant="light"
          expand="lg"
          collapseOnSelect
        >
          <Container>
            <LinkContainer to="/" exact>
              <Navbar.Brand className="brand-name">
                <i className="fab fa-lg fa-adn footer-icon header-brand-icon " />
              </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto header-nav-link ">
                {nav.map((eachNav) => (
                  <LinkContainer key={eachNav.id} to={eachNav.route}>
                    <Nav.Link className="nav-link  underline px-3 project-animation">
                      {eachNav.nav}
                    </Nav.Link>
                  </LinkContainer>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
