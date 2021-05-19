import React from "react";
import { Card } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <Card className="bg-transparent contact">
      <Card.Header as="h3">__Get In Touch__</Card.Header>
      <Card.Body>
        <Card.Text as="h4">Please Contact Me Via</Card.Text>
        <SocialIcon
          url="mailto: amrindraouk@gmail.com"
          target="_blank"
          className=" mx-3 my-3 footer-icon"
          bgColor="#7b6079"
        />
        or
        <SocialIcon
          url="https://www.linkedin.com/in/amrindra-ouk-0960161a4/"
          target="_blank"
          className="mx-3 my-3 footer-icon "
        />
      </Card.Body>
    </Card>
  );
};

export default Contact;
