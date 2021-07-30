import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Image,
  Button,
  Navbar,
  Nav,
} from "react-bootstrap";
import logo from "../../../assets/images/postmark-logo.png";

const NavBar = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row className="justify-content-center">
          <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand as={Link} to="/home">
              <img
                src={logo}
                width="70"
                height="70"
                className="postmark-records-logo-nav d-inline-block align-top"
                alt="Postmark Records"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav.Link as={Link} to="/store">
                <i className="fas fa-store pr-1"></i> store
              </Nav.Link>
              <Nav.Link as={Link} to="/roster">
                <i className="fas fa-guitars pr-1"></i> roster
              </Nav.Link>
              <Nav.Link as={Link} to="/tours">
                <i className="fas fa-calendar pr-1"></i> tours
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <i className="fad fa-record-vinyl pr-1"></i> releases
              </Nav.Link>
              {/* <Nav.Link href="#home"><i className="fas fa-share-alt-square pr-1"></i></Nav.Link> */}
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <Row className="mb-2 pb-2">
          <marquee
            className="marquee-nav"
            behavior="scroll"
            direction=""
            bgcolor="red"
          >
            POSTMARK RECORDS - Summer Sale - 30% off all CD's and Vinyls.
          </marquee>
        </Row>
      </Container>
    </Fragment>
  );
};

export default NavBar;
