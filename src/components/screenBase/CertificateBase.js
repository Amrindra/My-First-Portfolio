import React from "react";
import { Card } from "react-bootstrap";

function certificateBase({ src, cardTitle, cardText, href }) {
  return (
    <Card className="my-5 shadow bg-transparent">
      <Card.Link href={href} target="_blank">
        <Card.Img
          className="card-image"
          variant="top"
          src={src}
          alt={cardTitle}
          target="_blank"
        />
      </Card.Link>

      <Card.Body>
        <Card.Link href={href} target="_blank">
          <Card.Title>{cardTitle}</Card.Title>
        </Card.Link>
        <Card.Text>{cardText}</Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Link href={href} target="_blank">
          <i className="fa-2x fas fa-link"></i>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default certificateBase;
