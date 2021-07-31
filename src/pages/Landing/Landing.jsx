import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import { Col, Row, Image, Button } from "react-bootstrap";
import {
  Container,
  Sidenav,
  Nav,
  Dropdown,
} from "rsuite";

import Assets from "../../components/Assets";
import axios from "axios";

const Landing = () => {
  return (
    <Container className="landing-container p-4">
      <Row>
        <Col xl={2} lg={3} md={4}>
          <Sidenav appearance="subtle" defaultOpenKeys={["8", "9"]} activeKey="0">
            <Sidenav.Body>
              <Nav>
                <Nav.Item
                  eventKey="2"
                  icon={<i className="fas fa-sign-in-alt pr-2"></i>}
                >
                  login
                </Nav.Item>
                <Dropdown
                  eventKey="3"
                  title="assets"
                  icon={<i className="fas fa-box pr-2"></i>}
                >
                  <Dropdown.Item eventKey="3-1">textures</Dropdown.Item>
                  <Dropdown.Item eventKey="3-2">models</Dropdown.Item>
                  <Dropdown.Item eventKey="3-3">HDRIs</Dropdown.Item>
                </Dropdown>
                <Nav.Item
                  eventKey="1"
                  icon={<i className="fas fa-question-circle pr-2"></i>}
                >
                  support
                </Nav.Item>

                <Nav.Item
                  eventKey="2"
                  icon={<i className="fas fa-box pr-2"></i>}
                >
                  docs
                </Nav.Item>
                <Nav.Item
                  eventKey="2"
                  icon={<i className="fas fa-coin pr-2"></i>}
                >
                  donate
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </Col>
        <Col xl={10} lg={9} md={8} className="assets-col">
          <Assets />
        </Col>
        </Row>
    </Container>
  );
};

export default Landing;
