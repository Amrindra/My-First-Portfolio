import React from "react";
import { Card, Col, Image, Row, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ProgrammingSkills from "./ProgrammingSkills";
import { SocialIcon } from "react-social-icons";
import resumeIcons from "../array/resumeIcons";
import Certificates from "./Certificates";

function MyResume() {
  return (
    <div>
      <h1>My Resume</h1>
      <Card className="text-left bg-transparent my-5 resume-card resume-head">
        <Card className="resume-head">
          {/* <Card.Header as="h5">Amrindra Ouk</Card.Header> */}
          <Card className="resume-body">
            <Row>
              <Col sm={12} md={4} lg={3} xl={3}>
                <Image
                  className="py-3 resume-image mx-4"
                  variant="top"
                  src="images/profilePicture.png"
                  alt="my profile pitcure"
                  // rounded
                />
                <Col className="resume-icon mx-auto">
                  {resumeIcons.map((eachIcon) => (
                    <SocialIcon
                      key={eachIcon.id}
                      url={eachIcon.url}
                      target={eachIcon.target}
                      className={eachIcon.className}
                      fgColor={eachIcon.fgColor}
                      bgColor={eachIcon.bgColor}
                      style={{ height: 35, width: 35 }}
                    />
                  ))}
                </Col>
              </Col>

              <Col className="py-3">
                <h1>Amrindra Ouk</h1>
                <Card.Text>
                  {/* <h3>Summary:</h3> */}
                  Very enthusiastic about technology and learning new things
                  with a background in Computer Science and Engineering. Taking
                  online courses to build my strengths in programming languages
                  and IT skills. Experienced as a trainer, manufacturing
                  practices, and various duties with a background in medical
                  devices.
                </Card.Text>
              </Col>
            </Row>
          </Card>

          <Card className="resume-head px-3 py-3 text-center">
            <h3>
              <i className="fas fa-xs fa-bullseye" /> OBJECTIVE:
            </h3>
            <Card.Text className="objective">
              Seeking an opportunity to work as an entry-level developer or
              anything in a field in which my tech skills are required.
            </Card.Text>
          </Card>
        </Card>

        <Card className="resume-body">
          <Row>
            <Col sm={12} md={6} lg={4} xl={4} className="">
              <ProgrammingSkills />
            </Col>

            <Col className="">
              <Card className="shadow  bg-transparent my-3">
                <Card.Header as="h3">
                  {" "}
                  <i className="fas fa-briefcase" /> WORK EXPERIENCE
                </Card.Header>
                <Card.Body>
                  <Card.Title>ABIOMED Inc 2017-Present</Card.Title>
                  <Card.Title>Training Associate II</Card.Title>
                  <p>
                    • Responsible for training employees on the requirements of
                    the assembly process <br />• Experienced as a Continuous
                    Improvement Leader <br />• Experienced in creating Job
                    Instruction Breakdown (JIB) <br />• Participate in critical
                    quality initiatives to include capability, quality, and
                    throughput improvements <br />• Participate in Kaizen Events
                    and Continuous Improvement Projects and 5S system <br />•
                    Assist in establishing, implementing, and maintaining the
                    quality management and training system <br />• Participate
                    in initiatives designed to improve overall process
                    capability <br />• Works towards improvements for process
                    efficiencies <br /> • Expertise with Electrical Test
                    Equipment, such as Leakage Current, Resistance, Multimeters,
                    and Caliper Depth Test
                    <br />• Familiar with S4 Hana, SAP, and Camstar system{" "}
                    <br />• Proficient in soldering PCB components
                    <br />• Collaborating closely with the engineering team to
                    support the building process
                  </p>
                </Card.Body>
              </Card>

              <Card className="shadow  bg-transparent ">
                <Card.Header as="h3">
                  <i className="fas fa-user-graduate" /> EDUCATION
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    Royal University of Phnom Penh, Cambodia 2010-2013
                  </Card.Title>
                  <Card.Text>
                    Associate in <b>Computer Science</b> and <b>Engineering</b>
                  </Card.Text>
                  <em className="education-paragraph">
                    {" "}
                    (The Royal University of Phnom Penh is an accredited
                    institution in U.S. terms. It offers a four-year Bachelor of
                    Science degree in Computer Science and Engineering that is
                    equivalent to the corresponding U.S degree. According to CED
                    - Center for Educational Documentation, Inc in Boston.)
                  </em>
                </Card.Body>
              </Card>

              <Card className="shadow  bg-transparent my-3">
                <Card.Header as="h3">
                  <i className="fas fa-certificate" /> Professional Certificates
                </Card.Header>
                <Card.Body>
                  <Certificates />

                  <LinkContainer to="/certificate">
                    <Nav.Link className="text-center">
                      <Button className="" variant="outline-dark">
                        Click Me to See My Professional Certificates page
                      </Button>
                    </Nav.Link>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card>

        <Card className="resume-footer">
          <Col>
            <LinkContainer to="/projects">
              <Nav.Link className="text-center my-5">
                <Button className="anim-button" variant="outline-dark">
                  Check Out My Projects
                </Button>
              </Nav.Link>
            </LinkContainer>
          </Col>
        </Card>
      </Card>
    </div>
  );
}
export default MyResume;
