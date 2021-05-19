import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutMeArray from "../array/aboutMeArray";
import AboutMeBase from "../screenBase/AboutMeBase";

function AboutMeScreen() {
  return (
    <Container className="aboutMe">
      <Row>
        {aboutMeArray.map((eachAboutMe) => (
          <Col key={eachAboutMe.id}>
            <AboutMeBase
              src={eachAboutMe.src}
              cardTitle={eachAboutMe.cardTitle}
              cardText={eachAboutMe.cardText}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AboutMeScreen;
