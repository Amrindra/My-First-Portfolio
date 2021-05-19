import React from "react";
import { Card } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

function projectBase({ src, cardText, cardTitle, href }) {
  return (
    <Card className="my-5 shadow bg-transparent">
      <Card.Link href={href} target="_blank">
        <Card.Img
          className="card-image"
          variant="top"
          src={src}
          alt={cardTitle}
        />
      </Card.Link>
      <Card.Body>
        <Card.Link href={href} target="_blank">
          <Card.Title>{cardTitle}</Card.Title>
        </Card.Link>
        <Card.Text>{cardText}</Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Link href={href}>
          <SocialIcon
            url={href}
            target="_blank"
            className="footer-icon"
            style={{ width: 35, height: 35 }}
          />
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default projectBase;
