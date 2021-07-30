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

const Roster = () => {
  const [artists, setArtists] = useState([]);
  const [modalShow, setModalShow] = useState(false);

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
    <Fragment>
      <Container className="roster-container text-center">
        <p className="h1 text-bebas mt-3">ARTISTS</p>
        <br />
        <Row className="roster-row">
          {artists.length > 1 &&
            artists.map((artist) => {
              return (
                <Col
                  className="d-flex justify-content-center mb-4"
                  lg={3}
                  md={6}
                  onClick={() => setModalShow(true)}
                >
                  <Card
                    className=""
                    key={`${artist + "card"}`}
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={artist.image} />
                    <p className="p-artist text-bebas h3 text-center mx-auto">
                      {artist.name.toUpperCase()}
                    </p>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
      <ArtistModal
        show={modalShow[0]}
        onHide={() => setModalShow(false)}
        props={modalShow}
      />
    </Fragment>
  );
};

export default Roster;
