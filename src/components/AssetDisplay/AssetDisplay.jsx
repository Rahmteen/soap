import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Navbar,
  NavDropdown,
  Nav,
  Card,
  Button,
} from "react-bootstrap";
import axios from "axios";
import AssetModal from "../AssetModal";
import Flower from "../../../assets/images/Flowers.png";

const AssetDisplay = ({ name, credits, content_link, preview }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Fragment>
          <Card >
            <Card.Img
              variant="top"
              src={Flower}
              onClick={() => setModalShow(true)}
            />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                <i className="fas fa-coin mr-2"></i>
                {credits}
              </Card.Text>
            </Card.Body>

            <AssetModal
              content_link={content_link}
              name={name}
              preview={preview}
              credits={credits}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Card>
    </Fragment>
  );
};

export default AssetDisplay;
