import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FeatureBase from "../screenBase/FeatureBase";
import featureArray from "../array/featureArray";

function FeatureScreen() {
  return (
    <div className="features">
      <Container>
        <Row>
          {featureArray.map((eachFeature) => (
            <Col
              key={eachFeature.id}
              md={4}
              className="features-box shadow feature-col my-3 py-5"
            >
              <FeatureBase
                icon={eachFeature.icon}
                title={eachFeature.title}
                // content={eachFeature.content}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default FeatureScreen;
