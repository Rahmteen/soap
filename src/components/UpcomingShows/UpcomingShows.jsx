import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Card,
  CardDeck,
  Image,
  Button,
  Badge,
} from "react-bootstrap";
import CornerRibbon from "react-corner-ribbon";
import axios from "axios";
import ShowDisplay from "../ShowDisplay";


import GR87 from "../../../assets/images/posters/87sd.jpg";
import GR820 from "../../../assets/images/posters/820sa.jpg";
import GR823 from "../../../assets/images/posters/823sa.jpg";


const UpcomingShows = () => {
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
      <p className="text-bebas h2 text-center pb-1 mt-2">SHOWS</p>
      <Row className="roster-row d-flex flex-column">
        {tours.length > 1 &&
          tours.map((show) => {
            return (
              <Col>
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
    </Fragment>
  );
};

export default UpcomingShows;
