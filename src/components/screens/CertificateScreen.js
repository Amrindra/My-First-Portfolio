import React from "react";
import certificateArray from "../array/certificateArray";
import { Container, Row, Col } from "react-bootstrap";
import CertificateBase from "../screenBase/CertificateBase";

function Certificates() {
  return (
    <div>
      <h1 className="aboutMe-animation">My Professional Certificates</h1>
      <Container className="aboutMe-project">
        <Row>
          {certificateArray.map((eachCertificate) => (
            <Col
              key={eachCertificate.id}
              sm={12}
              md={6}
              lg={4}
              xl={4}
              className="cert-animation"
            >
              <CertificateBase
                src={eachCertificate.src}
                cardTitle={eachCertificate.cardTitle}
                cardText={eachCertificate.cardText}
                href={eachCertificate.href}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Certificates;
