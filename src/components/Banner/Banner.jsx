import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Jumbotron, Image, Button } from "react-bootstrap"

import logo2 from "../../../assets/images/postmark-logo-2.png";

const Banner = () => {
    return (
        <Jumbotron className="p-3" fluid>
        <Col className="text-center">
          <Image width="220px" src={logo2}></Image>
        </Col>
        <Col className="text-right p-0">
          <i className="fab fa-twitter pr-2"></i>
          <i className="fab fa-facebook-f pr-2"></i>
          <i className="fab fa-instagram pr-2"></i>
          <i className="fab fa-youtube pr-2"></i>
        </Col>
      </Jumbotron>
    )
}

export default Banner;