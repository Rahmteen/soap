import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Col,
  Row,
  Image,
  Card,
  ListGroup,
  ListGroupItem,
  Badge,
} from "react-bootstrap";
import axios from "axios";
import ArtistModal from "../../components/ArtistModal";
import ShowDisplay from "../../components/ShowDisplay";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [modalShow, setModalShow] = useState([false, null]);

  useEffect(() => {
    axios
      .post(`/api/show/get/all`)
      .then((res) => {
        console.log("res: ", res.data);
        setTours(res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  return (
    <Fragment>
      <Container className="roster-container text-center">
        <p className="h1 text-bebas mt-3">SHOWS</p>
        <br />
        <Row className="roster-row">
          {tours.length > 1 &&
            tours.map((show) => {
              return (
                <Col md={4}>
                <ShowDisplay
                  date={show.date}
                  poster={show.poster}
                  venue={show.venue}
                  city={show.city}
                  link={show.link}
                />
                </Col>
              );
            })}
        </Row>
      </Container>
      <ArtistModal
        show={modalShow[0]}
        onHide={() => setModalShow([false, null])}
        props={modalShow}
      />
    </Fragment>
  );
};

export default Tours;
