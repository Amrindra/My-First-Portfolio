import React from "react";
import { Card, ListGroup, ProgressBar } from "react-bootstrap";
import skillProgressBar from "../array/skillProgressBar";
import operatingSyetem from "../array/operatingSystem";
// import { LinkContainer } from "react-router-bootstrap";

function ProgrammingSkills() {
  return (
    <div>
      <Card className="shadow  bg-transparent my-3">
        <Card.Header as="h3">
          <i className="fas fa-laptop-code" /> TECHNICAL SKILLS
        </Card.Header>
        {skillProgressBar.map((eachSkill) => (
          <ListGroup
            key={eachSkill.id}
            className="shadow  bg-transparent "
            variant="flush"
          >
            <ListGroup.Item className="bg-transparent  ">
              <ProgressBar
                className="progressBarSkills"
                now={eachSkill.now}
                variant={eachSkill.variant}
                label={eachSkill.label}
                animated
              />
            </ListGroup.Item>
          </ListGroup>
        ))}
      </Card>

      <Card className="shadow  bg-transparent my-3">
        <Card.Header as="h3">
          <i className="fas fa-laptop" /> OS
        </Card.Header>
        {operatingSyetem.map((eachSystem) => (
          <ListGroup
            key={eachSystem.id}
            className="shadow  bg-transparent "
            variant="flush"
          >
            <ListGroup.Item className="bg-transparent  ">
              <ProgressBar
                className="progressBarOS"
                now={eachSystem.now}
                variant={eachSystem.variant}
                label={eachSystem.label}
              />
            </ListGroup.Item>
          </ListGroup>
        ))}
      </Card>
    </div>
  );
}

export default ProgrammingSkills;
