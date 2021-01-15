import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import RandomEmployees from "../components/RandomEmployee";

function About() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <RandomEmployees/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;