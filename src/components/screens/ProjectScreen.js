import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectBase from "../screenBase/ProjectBase";
import projectsArray from "../array/projectsArray";

function ProjectScreen() {
  return (
    <div className="projects">
      <h1 className="aboutMe-animation">My Projects</h1>
      <Container className="aboutMe-project">
        <Row>
          {projectsArray.map((project) => (
            <Col
              key={project.id}
              sm={12}
              md={6}
              lg={4}
              xl={4}
              className="project-animation"
            >
              <ProjectBase
                src={project.src}
                cardTitle={project.cardTitle}
                cardText={project.cardText}
                href={project.href}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProjectScreen;
