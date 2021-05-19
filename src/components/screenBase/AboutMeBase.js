import React from "react";
import { Button, Card, Col, Nav, Row, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import FeatureScreen from "../screens/FeatureScreen";

const buttons = [
  {
    id: 1,
    to: "/projects",
    project: "My Projects"
  },
  {
    id: 2,
    to: "/resume",
    project: "My Resume"
  },
  {
    id: 3,
    to: "/certificate",
    project: "My Certificates"
  }
];

function AboutMeBase({ cardTitle, cardText }) {
  return (
    <div>
      <Card className="shadow my-5 about-me bg-transparent">
        <Card.Header as="h3">
          __{cardTitle}__{" "}
          <Image
            className="about-me-profile "
            variant="top"
            src="images/profilePicture.png"
            alt="Amrindra"
            roundedCircle
          />
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-left about-me-text">{cardText}</Card.Text>
        </Card.Body>

        <Row className="my-3">
          {buttons.map((eachButton) => (
            <Col sm={12} md={4} lg={4} xl={4} key={eachButton.id}>
              <LinkContainer to={eachButton.to}>
                <Nav.Link className="text-center py-3">
                  <Button
                    className="about-me-text"
                    variant="outline-dark "
                    block
                  >
                    {eachButton.project}
                  </Button>
                </Nav.Link>
              </LinkContainer>
            </Col>
          ))}
        </Row>
        <FeatureScreen />
      </Card>
      {/* <div className="about-me-feature">
        <FeatureScreen />
      </div> */}
    </div>
  );
}

export default AboutMeBase;

// <Card
//   className="shadow  bg-transparent my-5 "

//   // className="bg-transparent border-white"
// >

//     <Card.Header as="h3" className="about-me-title  bg-transparent">{cardTitle}</Card.Header>
//     <Card.Text>{cardText}</Card.Text>
//     {/* <Nav.Link href="#">
//       <Button variant="outline-secondary">My Online Resume</Button>
//     </Nav.Link> */}

//   {/* <Card.Img
//     className="card-image"
//     variant="top"
//     src={src}
//     alt={cardTitle}
//   /> */}
// </Card>
