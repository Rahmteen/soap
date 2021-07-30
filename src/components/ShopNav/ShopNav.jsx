import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import logo from "../../../assets/images/postmark-logo.png";
import axios from "axios";

const ShopNav = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios
      .post(`/api/artist/get/all`)
      .then((res) => {
        console.log("res: ", res.data);
        setArtists(res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  return (
    <Navbar
      className="shop-nav"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container className="shop-nav-container" fluid>
        <Navbar.Brand as={Link} to="/home">
          <img
            src={logo}
            width="70"
            height="70"
            className="postmark-records-logo-nav d-inline-block align-center ml-2 mr-1"
            alt="Postmark Records"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          className="shop-nav-toggle ml-auto hidden-sm-up float-xs-right mr-3"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="shop-inner-nav me-auto">
            <Nav.Link as={Link} to="/store">
              Home
            </Nav.Link>
            <NavDropdown title={"Artists"} id="collasible-nav-dropdown">
              {artists.length > 1 &&
                artists.map((artist, i) => {
                  return (
                    <NavDropdown.Item
                      className="shop-artist-dropdown pt-2 pb-2"
                      key={`dropdown-${artist.name}-${i}`}
                      onClick={() =>
                        (window.location.href = `/store/artist/${artist.name
                          .split(/\s+/)
                          .join("")
                          .toLowerCase()}`)
                      }
                    >
                      <span className="shop-artist-dropdown-text">
                        {artist.name}
                      </span>
                    </NavDropdown.Item>
                  );
                })}
            </NavDropdown>
            <Nav.Link as={Link} to="/store/support">
              Support
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="d-flex justify-content-end">
          <Nav.Link as={Link} to="/home" title="back to main site">
            <span className="h6">
              <i className="ml-1 fas fa-external-link-alt"></i>
            </span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default ShopNav;
