import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <div>
      <footer>
        <Container>
          <div>
            <SocialIcon
              url="https://www.linkedin.com/in/amrindra-ouk-0960161a4/"
              target="_blank"
              className="mr-4 footer-icon"
            />

            <SocialIcon
              url="https://github.com/Amrindra"
              target="_blank"
              className="mr-4 footer-icon"
            />
            <SocialIcon
              url="mailto: amrindraouk@gmail.com"
              target="_blank"
              className="mr-4 footer-icon"
            />
          </div>
          <Row>
            <Col className="text-center py-3">
              Copyright &copy; Amrindra {year}
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
