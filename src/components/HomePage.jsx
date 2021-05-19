import React from "react";
import { Container, Button, Nav, Row, Col, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import FeatureScreen from "./screens/FeatureScreen";
import Typical from "react-typical";

function HomePage() {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <h1 className="homepage cert-animation">Hi, I am Amrindra Ouk</h1>
          <h3 className="homepage aboutMe-animation homepage-h3">
            I love solving problems with programming & designing websites
          </h3>

          <Typical
            className="homepage homepage-paragraph aboutMe-animation "
            loop={3}
            wrapper="p"
            steps={[
              "I'm a Technology Enthusiast who is interested in Web Development."
            ]}
          />
        </Col>

        <Col lg={6}>
          <LinkContainer to="/aboutMe">
            <Nav.Link className="nav-link">
              <Image
                id="profile-picture"
                src="images/profilePicture.png"
                alt="Amrindra"
              ></Image>
            </Nav.Link>
          </LinkContainer>
        </Col>

        <Nav.Link className="anim-button" href="mailto: amrindraouk@gmail.com">
          <Button variant="outline-secondary">
            <i className=" fas fa-lg fa-envelope" /> Get In Touch
          </Button>
        </Nav.Link>

        <div>
          <hr />
          <FeatureScreen />
        </div>
      </Row>
    </Container>
  );
}

export default HomePage;
