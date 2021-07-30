// ## MODULES ##
import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import axios from "axios";
// ## STYLED COMPONENTS ##
import {
  Container,
  Col,
  Row,
  Image,
  Jumbotron,
  Card,
  CardGroup,
  CardDeck,
  CardColumns,
  Badge,
  Nav,
} from "react-bootstrap";
import { Timeline } from "react-twitter-widgets";
import Feed from "../../components/Feed";
import Banner from "../../components/Banner";
import UpcomingShows from "../../components/UpcomingShows";
import Releases from "../../components/Releases";
import FeaturedMerch from "../../components/FeaturedMerch";
import TwitterFeed from "../../components/TwitterFeed";
// ## ASSETS ##

const Home = () => {
  const [artists, setArtists] = useState();

  return (
    <Fragment>
      <br />
      <Container className="home-container">
        <Row className="">
          <Col md={4} className="text-bebas">
            <FeaturedMerch />
          </Col>
          <Col md={4} className="text-bebas h2">
            <UpcomingShows />
          </Col>
          <Col md={4} className="">
            <CardDeck className="d-flex flex-column">
              <Feed />
            </CardDeck>
            <Releases />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
