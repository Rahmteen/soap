import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import axios from "axios";

const Edit = () => {
  const [artistInfo, setArtistInfo] = useState({});

  let artistSchema = {
    name: "the frights",
    bio: "text",
    image:
      "https://www.postmarkrecords.com/uploads/1/4/8/4/14844450/published/448846.jpg?1531608654",
  };

  const addArtist = () => {
    axios
      .get(`/api/artist`)
      .then((res) => {
        console.log("res: ", res)
        setArtistInfo(res);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  return (
    <Fragment>
      <Container>
        <Row>
          <Col md={12}>ADD and Artist</Col>
          <Col md={12}>
            <Button onClick={addArtist}>ADD</Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Edit;
